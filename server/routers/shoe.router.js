const router = require('express').Router();
const shoes = require('../modules/shoe.module');

app.get('/', function (req, res) {
    console.log('GET /shoe');
    try {
        console.log(`Sending shoes: ${shoes}`);
        res.send(shoes);
    }
    catch (error) {
        console.log(`Error occured: ${error}`);
        res.sendStatus(500);
    }
});

app.post('/', function (req, res) {
    console.log('POST /shoe');
    try {
        console.log(`Adding new shoe: ${req.body}`);
        shoes.append(req.body);
        res.sendStatus(200);
    }
    catch (error) {
        console.log(`Error occured: ${error}`);
        res.sendStatus(500);
    }
});

module.exports = router;