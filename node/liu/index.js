#!C:/Users/DefaultAppPool/node.exe
var process=require("process");
var pathobj=require("path");
var fs=require("fs");
class auto{
    constructor (){
        this.srcs=[];
        this.tasks=[];
        this.cmds=[];
        this.argv=process.argv[2]||"default";
    }
    task (name,callback){
        var obj={};
        obj[name]=callback;
        this.tasks.push(obj);
    }
    setTask (cmd,tasks){
        var that=this;
        var obj={};
        obj[cmd]=[];
        tasks.forEach(function (name,index) {
            that.tasks.forEach(function (name1,index) {
                if(name==Object.keys(name1)[0]){
                    obj[cmd].push(name1[name])
                }
            })
        })
        that.cmds.push(obj);
        for(var i in that.cmds){
            for(var j in that.cmds[i]){
                if(j===that.argv&&!that.cmds[i].flag){
                    that.cmds[i].flag=true;
                    for(var k in that.cmds[i][j]){
                        that.cmds[i][j][k]()
                    }
                }
            }
        }
    }
    src (){
        if(arguments[0] instanceof Array){
            this.srcs=arguments[0];
        }else{
            for(var i in arguments){
                this.srcs[i]=arguments[i];
            }
        }
        return this;
    }
    pipe(){
        return this;
    }
    create (){
        this.srcs.forEach(function (url,index) {
                var arr=url.split(pathobj.sep);
            var path="";
            arr.forEach(function (name,val) {
                path+=name+"/";
                if(pathobj.extname(name)){
                    fs.writeFileSync(path.slice(0,-1),"<html>\n\f</html>>")
                }else{
                    try{
                        fs.mkdirSync(path);
                    }
                    catch (e){
                        if(e){
                            console.log("已经存在");
                        }
                    }
                }
            })
        })
    }

}
var obj=new auto();
// 流的方式写内容
obj.task("d",function(){
    obj.src(["ee","dd","ss","indexs.html"]).pipe(obj.create());
})
obj.task("a",function () {
    console.log("合并");
})
obj.task("b",function () {
    console.log("压缩");
})
obj.task("c",function () {
    console.log("删除");
})
obj.setTask("copy",["a","c"]);
obj.setTask("abc",["a","b"]);
obj.setTask("default",["d"]);
obj.src();