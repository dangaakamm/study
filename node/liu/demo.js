var fs=require("fs");
var stream=require("stream");
var obj=new stream.Transform();
obj._transform=function (data,encoding,callback) {
    this.push(data.toString().toUpperCase());
    callback();
}
var obj1=new stream.Transform();
obj1._transform=function (data,encoding,callback) {
    this.push(data.toString().replace(/\s*/g,""));
    callback();
}
var read=fs.createReadStream("demo.txt");
var write=fs.createWriteStream("demo1.txt");
read.pipe(obj).pipe(obj1).pipe(write);