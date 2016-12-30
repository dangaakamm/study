var express=require("./express");//引入自定义模块
var fs=require("fs");
var app=express();//调用一下传过来的函数生成一个app对象(是一个实例化的类)

app.listen(8880);//调用app对象的listen方法创建一个端口号为8880的服务器
app.set("/html/aa.html",function (req,res) {//调用app对象的set方法
    res.sendFile("./html/aa.html") ; //执行res对象中的sendFile方法
});

app.set("/html/aa.html:id",function (req,res) {
    var str=fs.readFileSync("./index.html");
    // console.log(str);
    res.render(str.toString(),{abc:res.param.id})
});
