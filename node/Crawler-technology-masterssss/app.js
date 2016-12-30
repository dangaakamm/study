var express=require("express");
var mysql=require("./mysql");
var app=express();
var child=require("child_process");
var obj=child.fork("pa.js");
obj.on("message",function (data) {
    console.log(data);
})
app.listen(8888);
// var child = child_process.spawn( "node",["test.js"]);
// child.stdout.on('data', function(data) {
// console.log(data.toString())
//
// })
app.set("views","./views");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(function (req,res,next) {
    mysql.query("select *from category",function (error,rows) {
        res.locals.categorys=rows;
        next();
    })
})

app.get("/",function(req,res){
    mysql.query("select * from category",function(error,rows){
        res.render("index",{categorys:rows})
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





