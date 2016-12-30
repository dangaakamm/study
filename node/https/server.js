const http=require("http");
const fs=require("fs");
const path=require("path");
var serverObj=http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html' });
    if (req.url!="/favicon.ico"){
        var url="."+req.url;
        fs.stat(url,function (error,data) {
            var extName=path.extname(url);
            var baseName=path.basename(url);
            if (error){
                if (extName==".js"){
                    var jsFile=fs.createReadStream(__dirname+"/js/"+baseName);
                    jsFile.pipe(res)
                }else {
                    res.write("文件不存在");
                    res.end();
                }

            }else {
                if (data.isDirectory()){
                    var newUrl=path.normalize(url+"/index.html");
                    fs.stat(newUrl,function (error,data) {
                        if (error){
                            res.write("index文件不存在");
                            res.end()
                        }else {
                            var stream=fs.createReadStream(newUrl);
                            stream.pipe(res)
                        }
                    })
                }else {

                    var stream=fs.createReadStream(url);
                    stream.pipe(res)
                }
            }
        })
    }
}).listen(8080,function () {
    // console.log("123")

});

