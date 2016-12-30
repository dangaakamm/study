var express=require("express");
var mysql=require("./../mysql");
// var cookie=require("cookie");
// var cookie = require('cookie-parser')
var router=express.Router();
router.use("/reg",function (req,res,next) {
    res.cookie("comming","yes",{signed:true});
    res.render("reg");
})
router.use("/login",function (req,res) {
    res.render("login");
})
router.use("/logincheck",function (req,res) {
    var username=req.body.username;
    var password=req.body.password;
    if(username==""||password==""){
        res.redirect("/error");
    }else{
        mysql.query("select * from user",function (error,rows) {
            var flag=true;
            for(var i=0;i<rows.length;i++){
                if(rows[i].username==username){
                    if(row[i].password==password){
                        flag=false;
                        res.cookie("login","yes",{signed:true});
                        res.redirect("/");
                        break;
                    }
                }
            }
            if(flag){
                res.redirect("/");
            }
        })
    }
})
router.use("/logout",function (req,res) {
    res.clearCookie("login");
    res.redirect("/");
})
router.use("/error",function (req,res) {
    res.render("error",{title:"错误消息",con:"用户名或密码错误",url:"/user/reg"});
})
router.use("/success",function (req,res) {
    res.render("success",{title:"正确消息",con:"用户名或密码错误",url:"/user/login"});
})
router.use("/regcheck",function (req,res) {
    if(req.signedCookies.comming=="yes"){
        var username=req.body.username;
        var password=req.body.password;
        if(username==""||password==""){
            res.redirect("/error");
        }else{
            var flag=true;
            mysql.query("select * from user",function (error,rows) {
                for(var i=0;i<rows.length;i++){
                    if(rows[i].username==username){
                        flag=false;
                        res.redirect("/error");
                        break;
                    }
                }
                if(flag){
                mysql.query(`insert into user (username,password) values ('${username}','${password}')`,function (error,result) {
                    if(error){
                        res.redirect("/user/error");
                    }else{
                        res.redirect("/user/success");
                    }
                })
                }
            })
        }
    }else{
        res.redirect("http://google.com/");
    }
})


module.exports=router;