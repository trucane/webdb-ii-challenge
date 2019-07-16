const express = require('express');
const db = require('../dbconfig');



const router = express.Router();

router.use(express.json())


router.get('/', async (req, res) => {
    try {
      const cars = await db('cars');
      res.json(cars); 
    } catch (err) {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    }
});

router.post('/', (req , res) =>{
    db('cars').insert(req.body)
        .then(car =>{
            res.status(201).json(car)
        })
        .catch(error =>{
            res.status(500).json(error)
        })




    // try{
    //     const carsData = req.body;
    //     const [id] = await db('cars').insert(carsData);
    //     const newCar = await db('cars').where({id});

    //     res.status(201).json(newCar)

    // }catch(err){
    //     res.status(500).json({ message: 'Failed to retrieve cars' });
    // }
});

router.put('/:id', (req, res) =>{
    const {id} = req.params;
    db('cars').where('id', id)
    .update(req.body)
    .then(updated =>{
        res.status(204).json(updated);
    })
    .catch(error =>{
        res.status(500).json(error)
    })
});

router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    db('cars').where('id', id)
    .del()
    .then(removed =>{
        res.status(204).end()
    })
    .catch(error =>{
        res.status(500).json(error)
    })
});


  module.exports = router;