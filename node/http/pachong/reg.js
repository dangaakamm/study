var app = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.post('/', function (req, res) {
    console.log(req.body);
    res.json(req.body);
})