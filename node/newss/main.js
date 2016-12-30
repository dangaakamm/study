var read=require("./down.js");
var async=require("async");
var write=require("./write.js");
var mysql=require("./mysql.js");
var path=require("path");
var categoryInfo;
var listInfo=[];
async.series([
    // 写栏目
    function (cb) {
        write.writeCategory("http://news.ifeng.com/",function (data) {
            categoryInfo=data;
            cb();
        })
    },
    // 读列表
    function (cb) {
        async.each(categoryInfo,function (obj,cb1) {
            read.readList(obj.curl,function (list) {
                var obj1={};
                obj1.curl=list;
                obj1.cid=obj.cid;
                listInfo.push(obj1);
                cb1();
            })
        },function () {
            cb();
        })
    },
    // 写内容
    function (cb) {
       async.each(listInfo,function (obj,cb1) {
           async.each(obj.url,function (url,cb2) {
               write.writeArc(url,function (data) {
                   var basename="";
                   var imgarr=data.aimg.split(";");
                   for(var i=0;i<imgarr.length;i++){
                       basename+=path.basename(imgarr[i]+";")
                   }
                   basename=basename.slice(0,-1);
                   mysql.query(`replace into arc (atit,acon,aimg,cid) values ('${data.atit}','${data.acon}','${basename}',${obj.cid})`,function () {
                       cb2();
                   })
               })
           },function () {
               cb1();
           })
       },function () {
           cb();
       })
    }
],function () {
    console.log("over")
})






// read.readCategory("url",function (data) {
//     console.log(data)
// })
//
// write.writeCategory("url",function (data) {
//     console.log(data)
// })