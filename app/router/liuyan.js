var express=require("express");
var mysql=require("../mysql");
var router=express.Router();
router.use("/ajax",function (req,res,next) {

    if(req.signedCookies.login){
        var con=req.query.con;
        var aid=req.query.aid;
        var time=new Date().getTime();
        var username=req.signedCookies.username;
        mysql.query(`insert into liuyan (con,aid,time,username) values ('${con}','${aid}','${time}','${username}')`,function (error,rows) {
            if(error){
                res.redirect("/mysqlerror");
            }else{
                res.send("yes");
            }
        })
    }else{
        res.send("no")
    }
})
router.use("/more/id",function (req,res) {
    var id=req.params.id;
    mysql.query("select * from liuyan where aid="+id,function (error,rows) {
        res.render("liuyanlist",{rows:rows})
    })
})
module.exports=router;