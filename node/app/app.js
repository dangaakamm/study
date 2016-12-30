var express=require("express");
var mysql=require("./mysql");
var body=require("body-parser");
var cookie = require('cookie-parser');
var router=require("./router/user.js");
var app=express();
app.use(body.urlencoded({ extended: false }));
var child=require("child_process");
var obj=child.fork("pa.js");
app.use(cookie("admin"));
obj.on("message",function (data) {
    console.log(data);
})
app.listen(8888);

// var child = child_process.spawn( "node",["test.js"]);
// child.stdout.on('data', function(data) {
// console.log(data.toString())
//
// })

app.engine('.html', require('ejs').renderFile);
app.set("views","./views");
app.set('view engine', 'html');
app.use("/static",express.static('public'));

app.use(function (req,res,next) {
    mysql.query("select *from category",function (error,rows) {
        res.locals.categorys=rows;
        next();
    })
})
app.use("/show/",function (req,res,next) {
    mysql.query("select * from arc",function (error,rows) {
        res.locals.cids=rows;
        next();
})
})
app.get("/",function(req,res){
    mysql.query("select * from arc",function(error,rows){
        res.render("index",{lists:rows})
    })
})
app.get("/list/:id",function(req,res){
    var cid=req.params.id;
    mysql.query("select * from arc where cid="+cid,function(error,rows){
        res.render("list",{lists:rows})
    })
})

app.get("/show/:id",function(req,res){
    var id=req.params.id;
    mysql.query("select * from arc where id="+id,function(error,rows){
        res.render("show",{shows:rows})
    })
})
// app.use(function (req,res,next) {
//     res.locals.login=req.signedCookies.login;
//     next();
// })
app.use("/user",router);

app.post("/index",function (req,res) {
    var cid=req.body.cid;
    var num=req.body.num*5;
    mysql.query("select * from arc where cid="+cid+" limit "+num+",5",function(error,rows){
        if(!error){
            console.log(rows)
            res.send(rows);
        }

    })
})





