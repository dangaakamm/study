var http=require("http");
var fs=require("fs");
var mysql=require("./mysql");
var read=require("./down.js");
var async=require("async");
var path=require("path");
module.exports.writeCategory=function (url,callback) {
    var newdata;
    read.readCategory("http://news.ifeng.com/",function (data) {
        newdata=data;
       async.each(data,function (obj,cb) {
           mysql.query(`insert into category (cname,curl,cid) values ('${obj.cname}','${obj.curl}',${obj.cid})`);
           cb();
       },function (error,data) {
           callback(newdata);
       })
    })
}

module.exports.writeArc=function (url,callback) {
   //1.图片  2.内容
    var newdata;
    read.readArc(url,function (data) {
        newdata=data;
        if(data.aimg){
            var imgarr=data.aimg.split(";");
            async.each(imgarr,function (url,cb) {
                if(/\.(jpg|png|jpeg|gif)/.test(url)){
                    http.get(url,function (res) {
                        var basename=path.basename(url);
                        res.pipe(fs.createWriteStream("./public/img/"+basename));
                        cb();
                        console.log(1)
                    })
                }
            },function (error,data) {
                callback(newdata);
            })
        }

    })

}