// var fs=require("fs");
// var readObj=fs.createReadStream("demo.txt",{"encoding":"utf-8","highWaterMark":3});
//
// readObj.on("close",function(){
//     console.log("close")
// })
// var writeObj=fs.createWriteStream("demo1.txt",{"highWaterMark":2});
// readObj.on("data",function(data){
//     console.log("ing")
//     console.log(data)//也可以在读取时不需要规定读取方式utf-8，在需要用数据时data.toString();
//     if(!writeObj.write(data)){
//         readObj.pause();
//     }
//
// })
// writeObj.on("drain",function(){
//     readObj.resume();
// })
//
// writeObj.on("drain",function(){
//     console.log("over")
// })











var fs=require("fs");
var readObj=fs.createReadStream("demo.txt",{"encoding":"utf-8","highWaterMark":8});
// readObj.on("data",function (data) {
//     console.log(data);
// })
// readObj.on("close",function () {
//     console.log("close");
// })
var writeobj=fs.createWriteStream("demo1.txt",{"highWaterMark":20});
readObj.on("data",function (data) {
    console.log(writeobj.write(data))
})
