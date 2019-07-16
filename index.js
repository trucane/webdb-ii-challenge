const express = require('express');

const server = express();



server.get('/', (req, res) =>{
    res.send('<h2>Migrations in the house </h2>')
});


const port = 5000;

server.listen(port, () => console.log('We are established'))