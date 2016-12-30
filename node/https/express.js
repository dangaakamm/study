const http=require("http");
const url=require("url");
const fs=require("fs");
const ejs=require("./ejs");
class express{//创建一个express类
    constructor(){
        this.setArr=[]
    }
    listen(port=80){//listen方法，用于创建一个服务器，方便外部调用
        this.port=port;
        this.create();//调用本对象中的create方法来创建一个服务器

    }
    create(){
        var that=this;
        http.createServer(function (req,res){//用http模块的createServer方法创建一个服务器，并指定端口号为传入的端口号
            that.factory(req,res);//执行本对象中的factory方法，对一些请求信息和返回信息进行处理
        }).listen(this.port)
    }
    reg(path){//reg方法，用于把自定义的文件路径转换为正则表达式，于请求的地址进行匹配
        var  p=path.replace(/\//g,"\\/");//将路径中的“/”全部替换成“\/”，因为正则中的“/”有特殊含义，需要转译
        return new RegExp(p+"(\\w+)");//在路径转换的正则后面连接上匹配任意字母、数字、下划线的“\w+”，用于匹配url地址后面添加的比路径对出的参数，以进行都有参数的路径的匹配
    }
    set(url,callback){//set方法，用于设置对路径匹配的规则
        var obj={};//创建一个对象，用于保存set调用
        if (url.indexOf(":")>-1){
            var arr=url.split(":");
            obj["attr"]=arr[1];
            var newUrl=this.reg(arr[0])
            obj[newUrl]=callback
        }else {
            obj["attr"]="";
            obj[url]=callback
        }
        this.setArr.push(obj)
    }
    factory(req, res){
        
        var pathname=url.parse(req.url).pathname;
       
        var that=this;
        that.flag=true;
        this.setArr.forEach(function (obj) {
            
            if (obj.attr){
                var regstr=Object.keys(obj)[1];
                var condition=eval(regstr).exec(pathname);
                
                if (condition){
                    res.param={};
                    res.param[obj.attr]=condition[1];
                    that.flag=false;
                    res.send=function (val) {
                        res.end(val)
                    };
                    res.sendFile=function (path) {
                        try {

                            fs.statSync(path);
                            var read=fs.createReadStream(path);
                            read.pipe(res)
                        }catch (error){
                            res.end("该文件不存在")
                        }
                    };
                    res.render=function (str,data) {

                        var result=ejs.render(str,data);
                        res.end(result)
                    };
                    res.compile=ejs.compile;
                    obj[regstr](req,res)
                }
            }else {
                if (Object.keys(obj)[1]==pathname){
                    that.flag=false;
                    res.send=function (val) {
                        res.end(val)
                    };
                    res.sendFile=function (path) {
                        try {
                            fs.statSync(path);
                            var read=fs.createReadStream(path);
                            read.pipe(res)
                        }catch (error){
                            res.end("该文件不存在")
                        }
                    };
                    
                    obj[pathname](req,res)
                }
            }

        });
        if(that.flag){
            res.end("路径匹配不到");
        }

    }

}


module.exports=function () {
  return new express()  
};