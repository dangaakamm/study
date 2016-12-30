var express = require('express');
var app = express();
var bodyParser=require("body-parser");
var mysql=require("mysql");


//app.set("view engine","jade");
app.set("view engine","ejs");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data

app.post('/add', function (req, res) {
    console.log(req.body);

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'nodejs'
    });

    connection.connect();

    connection.query(`insert into nodejs (username,password) values ('${req.body.username}','${req.body.password}')`, function(err, result) {
        if (err) throw err;
        if(result){
            res.render("message")
        }
    });

})
app.set("views","./tpl");
app.use(express.static('public'));
/*app.get('/:id', function(req, res){
    res.send('hello world');
});*/
/*app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!',item:["a","b","c"],foo:"变量"});
});*/
app.get('/reg', function (req, res) {
    res.render('reg'/*, { name:"my name is ejs module"}*/);
});
app.listen(3000);