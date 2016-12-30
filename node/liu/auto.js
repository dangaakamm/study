#!C:/Users/DefaultAppPool/node.exe
var process=require("process");
var pathobj=require("path");
var fs=require("fs");
class auto{
    constructor(){
        this.srcs=[];
        this.tasks=[];
        this.cmds=[];
        this.argv=process.argv[2]||"defult";
    }
    task(name,callback){
        var obj={};
        obj[name]=callback;
        this.tasks.push(obj)
    }
    setTask(cmd,tasks){
        var that=this;
        var obj={};
        obj[cmd]=[];
        tasks.forEach(function(name,index){
            that.tasks.forEach(function(name1,index){
                if(name==Object.keys(name1)[0]){
                    obj[cmd].push(name1[name])
                }
            })
        })
        that.cmds.push(obj);
        that.cmds.forEach(function(name,index){
            if(that.argv==Object.keys(name)[0]){
                name[cmd].forEach(function(fn,index){
                    fn()
                })
            }
        })
    }

    src(){
        if(arguments[0] instanceof Array){
            this.srcs=arguments[0]
        }else{
            for(var i in arguments){
                this.srcs[i]=arguments[i];
            }
        }
        return this;
    }
    create(){
        this.srcs.forEach(function(url,index){
            var arr=url.split(pathobj.sep);
            var path="";
            arr.forEach(function(name,val){
                path+=name+"/";
                if(pathobj.extname(name)){
                    fs.writeFileSync(path.slice(0,-1),"<html>\n\f<ml>");
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
        return this;
    }
    pipe(){
        return this;
    }

}

//Object.keys()


var obj=new auto();
obj.task("a",function(){
    obj.src(["aa","bb","cc","index.html"]).pipe(obj.create());
})
obj.task("b",function(){
    console.log("bbbb")
})
obj.setTask("copy",["a","b"]);
obj.setTask("abcd",["a"]);

obj.setTask("defult",["a"]);

obj.src()