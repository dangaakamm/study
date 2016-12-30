var express=require("./express.js");
var fs=require("fs");
var app=express();
app.listen(8080);

app.set("/abc/",function(req,res){
    res.send("abc");
})
app.set("/a/",function(req,res){
    res.writeHead(200);
    res.sendFile("../abc/a.html");
})
app.set("/abc/a.html:id",function(req,res){
    var str=fs.readFileSync("./index.html");
    res.render(str.toString(),{abc:res.param.id})
})