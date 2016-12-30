var http=require("http");
var url=require("url");
var fs=require("fs");
var ejs=require("ejs");
class express{
    constructor(param){
        this.setArr=[];//建立空数组
        this.flag=true;//开关为真
    }
    listen(port=8080){
        this.port=port;
        this.create();//调用create方法
    }
    create(){
        var that=this;
        http.createServer(function(req,res){//创建一个服务器
            that.factory(req,res);//调用工厂函数
        }).listen(this.port);//监听端口
    }
    reg(path){
        var p=path.replace(/\//g,"\\/");//替换路径字符串
        return new RegExp(p+"(\\w*)");//返回一个正则实例化对象，带（）是将括号里的内容详尽返回
    }
    set(url,callback){
        var obj={};//创建新对象
        if(url.indexOf(":")>-1){
            var arr=url.split(":");
            obj["attr"]=arr[1];
            var url=this.reg(arr[0]);
            obj[url]=callback;
        }else{
            obj["attr"]="";
            obj[url]=callback;
        }
        this.setArr.push(obj);
    }
    factory(req,res){
        var pathname=url.parse(req.url).pathname;
        var that=this;
        that.flag=true;
        this.setArr.forEach(function(obj){
            if(obj.attr){
                var regstr=Object.keys(obj)[1];
                var tiaojian=eval(regstr).exec(pathname)
                if(tiaojian){
                    res.param={};
                    res.param[obj.attr]=tiaojian[1];
                    that.flag = false;
                    res.send = function (val) {
                        res.end(val);
                    }
                    res.sendFile = function (path) {
                        try {
                            fs.statSync(path);
                            var read = fs.createReadStream(path);
                            read.pipe(res);
                        } catch (e) {
                            res.end("该文件不存在");
                        }
                    }
                    res.render=function (str,data) {
                       var result=ejs.render(str,data);
                        res.end(result);
                    }
                    res.complie=ejs.complie;
                    obj[regstr](req, res);
                }
            }else {
                if (Object.keys(obj)[1] == pathname) {
                    that.flag = false;
                    res.send = function (val) {
                        res.end(val);
                    }
                    res.sendFile = function (path) {
                        try {
                            fs.statSync(path);
                            var read = fs.createReadStream(path);
                            read.pipe(res);
                        } catch (e) {
                            res.end("该文件不存在");
                        }

                    }
                    obj[pathname](req, res);
                }
            }
        })

        if(this.flag){
            res.end("路径匹配不到");
        }

    }

}

module.exports=function(param){
    return new express(param);
}