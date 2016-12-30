var express=require("express");
app.express();
var mysql=require("mysql");
var bodyParser=require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post("./add",function (req,res) {
    console.log(req.body);
    var connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'newss'
    })
    connection.connect();
    connection.query(`insert into category (cname,curl) values (${cname},${curl})`,function (error,result) {
        if(error) throw (error);
        if(result){
            res.render("message");
        }
    })
})
app.set("views","./tpl");
app.use(express.static('public'));
app.get('/reg',function (req,res) {
    res.render("reg")
})
app.listen(8000);