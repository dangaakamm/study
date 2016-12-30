var http=require("http");
var path=require("path");
var fs=require("fs");
// 底层
var serverobj=http.createServer(function (request,response) {
    response.writeHead(200, {
        'Content-Type': 'text/html' });
    if(request.url!="/favicon.ico"){
        var url="."+request.url;//判断文件是否存在
        fs.stat(url,function (error,data) {
            if(error){
                response.write("该文件不存在");
                response.end();
            }else{
                if(data.isDirectory()){
                    var newurl=path.normalize(url+"/index.html");
                    fs.stat(newurl,function (error,data) {
                        if(error){
                            response.write("没有index文件");
                            response.end();
                        }else{
                            var stream=fs.createReadStream(newurl);
                            stream.pipe(response);
                        }
                    })
                }else{
                    var stream=fs.createReadStream(url);
                    stream.pipe(response);
                }
            }
        })
    }
});
serverobj.listen(8080,function () {
    console.log("开启8080成功")
})