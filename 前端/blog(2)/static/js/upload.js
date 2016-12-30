 function upload(url,file,progressDom,imgBox,callback){
       this.file=file;
       this.progressDom=progressDom;
       this.imgBox=imgBox;
       this.type=["image/jpeg","image/png","image/gif"];
       this.size=1024*1024*3;
       this.url=url;
       this.callback=callback;

}
upload.prototype={
    up:function(){
        var that=this;
        // console.log(this)
        //1.监听事件
        this.file.onchange=function(){
            // console.dir(this);
            that.fileObj=this.files[0];
            //2.检测类型，
            var flag=false;
            for(var i=0;i<that.type.length;i++){
                if(that.fileObj.type==that.type[i]){
             flag=true;
              break;
                }
            }
            if(!flag){
                that.file.value="";
                alert("类型不符");
                return ;
            }
            if(that.fileObj.size>that.size){
                that.file.value="";
                alert("太大了");
                return;
            }
            that.progressDom.style.display="block";
            that.imgBox.style.display="block";
            //3.预览文件
            var fileread=new FileReader();
            
            fileread.readAsDataURL(that.fileObj);
            fileread.onload=function(e){
                // console.log(fileread);
                that.imgBox.src= e.target.result;
            }
            //4.创建form对象，整合数据
            var obj=that.createFrom();
            //5.创建 ajax对象，上传
            that.createAjax(obj);
        }


    },
    createFrom:function(){
        var obj=new FormData();
        obj.append("file",this.fileObj);
        return obj;
    },
    createAjax:function(obj){
        var that=this;
        var xmlobj=new XMLHttpRequest();
        // console.dir(xmlobj);
        xmlobj.upload.onprogress=function(e){
            var val=e.loaded/ e.total*100+"%";
            that.progressDom.style.width=val;
            that.progressDom.innerHTML=val;
        }
        xmlobj.upload.onloadstart=function(){
            that.file.setAttribute("disabled","disabled");
        }


        xmlobj.upload.onerror=function(){
            that.file.value="";
        }
        xmlobj.open("post",this.url);
        xmlobj.send(obj);
        xmlobj.onload=function(){
            that.file.removeAttribute("disabled");
            that.file.value="";
            // alert(xmlobj.response);
            that.callback(xmlobj.response);
        }
    }
}