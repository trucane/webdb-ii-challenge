const express = require('express');
const carsRouter = require('../cars/cars-router');
const server = express();

server.get('/', (req, res) =>{
    res.send('<h2>Migrations in the house </h2>')
});


server.use('/api/cars', carsRouter)



module.exports = server;