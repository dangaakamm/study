var express=require("express");
var ejs=require("ejs");
var mysql=require("./mysql");
var app=express();
app.listen(8000);
app.set("views","./views")
app.set("view engine","ejs");
app.use(express.static('public'));
app.get("/",function (req,res) {
    mysql.query("select * from category",function (error,rows,result) {
        res.render("index",{categorys:rows});
    })
})


app.get("/list/:id",function (req,res) {
    var cid=req.param.id;


    mysql.query("select * from arc where cid="+cid,function (error,rows,result) {
        res.render("list",{lists:rows});
    })
})


app.get("/show/:id",function (req,res) {
    var id=req.param.id;

    mysql.query("select * from arc where id="+id,function (error,rows,result) {
        res.render("show",{shows:rows});
    })
})