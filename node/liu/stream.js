var stream=require("stream");
// var read=new stream.Readable({objectMode:true});
// 在内存中开辟一块空间，准备要缓存读取的数据
// 保证程序运行效率，防止数据的丢失，防止内存溢出


// var write=new stream.Writable();
// read._read=function () {
//     read.push("1")
//     read.push("2")
//     read.push("3")
//     read.push(null);
// }
// write._write=function (a,b,c) {
//     // a:传递过来的数据
//     // b：传递的类型
//     // c:进行下一次的传递   函数
// }
// read.pipe(write);

var fs=require("fs")
var duplex1=new stream.Transform();
var duplex2=new stream.Transform();
var duplex3=new stream.Transform();
duplex1._read=function () {
    this.push("1");
    this.push("2");
    this.push(null);
}
duplex2._transform=function (a,b,c) {
    this.push(a.toString().toUpperCase());
    c();
}
var num=0;
duplex3._transform=function (a,b,c) {
    num++;
    fs.appendFile(`demos${num}`,a.toString());
    c();
}
duplex1.pipe(duplex2).pipe(duplex3);