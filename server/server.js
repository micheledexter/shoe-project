const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const shoeRouter = require('./routers/shoe.router');

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/shoe', shoeRouter);

app.listen(PORT, function (req, res) {
    console.log(`Listening on port ${PORT}`)
});