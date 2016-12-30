var through=require("./through");
var factory=require("./factory");
var fs=require("fs");
var gaze=require("gaze");
var route=require("path");
class mygulp{
    constructor(){
        this.taskarr=[];
        var that=this;
        that.argv=process.argv[2]||"default";
        process.nextTick(function () {
            that.run()
        })
    }
    src(path){
        return through.objRead(function () {
            this.push(factory(path));
            this.push(null);
        })
    }
    dest(path){
        return through.obj(function (a,b,c) {
      a.contents.forEach(function (obj) {
     if(obj.flag==null){
         console.log("空的");
     }     else if(obj.flag=="object"){
         console.log(obj.content);
     }else if(obj.flag=="file"){
         fs.writeFileSync(route.normalize(path+"/"+obj.filename),obj.content);
     }
      })
            c();
        })
    }
    task(taskname,callback){
        var obj={};
        obj[taskname]=callback;
        this.taskarr.push(obj);
    }
    run(){
        var that=this;
        that.taskarr.forEach(function (obj) {
      if(Object.keys(obj)[0]==that.argv){
          obj[that.argv]();
      }
        })
    }
    watch(path,tasks){
        var that=this;
        gaze(path,function () {
            this.on("changed",function () {
           console.log(1);
                tasks.forEach(function (taskname) {
                    this.taskarr.forEach(function (obj) {
                       if(Object.keys(obj)[0]==taskname){
                           obj[taskname]();
                       }
                    })
                })
            })
        })
    }
}
module.exports=new mygulp();