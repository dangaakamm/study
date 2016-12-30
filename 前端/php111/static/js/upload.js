   function upload(url,file,progressDom,imgBox,callback){
        this.file=file;
        this.progressDom=progressDom;
        this.imgBox=imgBox;
        this.type=["image/jpeg","image/png","image/gif"];
        this.size=1024*1024*3;
        this.url=url;
        this.callback = callback;

    }
    upload.prototype={
        up:function(){

            var that=this;
            //监听事件
            this.file.onchange=function(){

                that.fileObj=this.files[0];

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
                that.imgBox.parentNode.style.display = "block";
                that.progressDom.parentNode.style.display = "block";

                var fileread=new FileReader();
                fileread.readAsDataURL(that.fileObj);
                fileread.onload=function(e){
                    that.imgBox.src= e.target.result;
                }
                //创建form对象
                var obj=that.createFrom();
                //创建 ajax对象
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
            xmlobj.upload.onprogress=function(e){
                var val=e.loaded/ e.total*100+"%";
                that.progressDom.style.width=val;
                that.progressDom.innerHTML=val;
            }
            xmlobj.upload.onloadstart=function(){
                that.file.setAttribute("disabled","disabled");
            }

            xmlobj.onload=function(){
                that.file.removeAttribute("disabled");
                that.file.value="";
                that.callback(xmlobj.response);
            }
            xmlobj.upload.onerror=function(){
                that.file.value="";
            }
            xmlobj.open("post",this.url);
            xmlobj.send(obj);
        }
    }
