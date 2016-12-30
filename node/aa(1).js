// require("dyqserver");

// var obj=require("./bb.js");
// obj.a();


// process.stdin.pause();
// process.stdin.resume();
// process.stdin.on("data",function (data) {
//     process.stdout.write(data);//输出
//     process.stdin.emit("end");//自定义事件
// })
// process.stdin.on("end",function () {
//     console.log("end");
// })




// buffer是ecmscript6里提供的文件,用来存储二进制文件，是个初始数据类型
// 创建方法
// var buffer=new Buffer(10)
// // buffer.write("abc");
// console.log(buffer);
//
//
// var buffer=new Buffer("abc");
// console.log(buffer.toString());





// var arr=["a","b","c"];
// arr.forEach()

// var aa = e =>{console.log(e)}
// aa("abcd")




// var fs=require("fs");
// fs.open("./bb.js","r+",function (error,id) {
//     var buffer=new Buffer(10);
//     fs.read(id,buffer,0,5,0,function (error,len,data) {
//         fs.write(id,"a",0,1,0,function () {
//             console.log("end");
//         })
//     })
// })

// fs.stat("./bb.js",function (error,info) {
//     console.log(info)
// })


var fs=require("fs");
// fs.open("./bb.js","r+",function (error,id) {
//     fs.stat("./bb.js",function (errors,info) {
//         fs.write(id,new Buffer("abcd"),info.size,4,0,function () {
//             console.log("end");
//         })
//     })
// })




// function copy(filename){
//     var index=filename.indexOf(".");
//     var basename=filename.slice(0,index)+"(1)";
//     var lastname=filename.slice(index);
//     var newname=basename+lastname;
//     fs.readFile(filename,function(error,data){
//         fs.writeFile(newname,data,function(){
//             console.log("done")
//         })
//     })
// }

mkdir("aa/bb/cc");
function mkdir(path) {
    var arr = path.split("/");
    var path="";
    arr.forEach(function (name, val) {
        path+=name+"/";
        fs.mkdirSync(path)
    })
}