function drag(box){
    this.box=box;
    this.ox=0; //给事件对象到事件源宽高一个初始值
    this.oy=0;
    this.cx=0; //给事件对象到浏览器宽高一个初始值
    this.cy=0;
    this.ow=this.box.offsetWidth; //获取对象实际宽高
    this.oh=this.box.offsetHeight;
    this.cw=document.documentElement.clientWidth;  //获取浏览器宽高
    this.ch=document.documentElement.clientHeight;
}
drag.prototype={ //原型
   drags:function(){  //定义一个调用down的函数
       this.down();  //this指实例化对象
   },
   down:function(){ 
    var that=this;  
    this.box.onmousedown=function(e){//box的鼠标按下事件
       e=e||window.event;  //给参数一个默认值
       if(e.preventDefault){ //阻止浏览器的默认值
       	e.preventDefault();
       }else{
       	returnValue=false;
       }
       that.ox=e.offsetX;  //获取事件对象到事件源的高度
       that.oy=e.offsetY;  
       that.move();  //调用move（），up（）
       that.up();
       } 
   },
   move:function(){
   	var that=this;
   	document.onmousemove=function(e){
   	   e=e||window.event;
   	   if(e.preventDefault){
       	e.preventDefault();
       }else{
       	returnValue=false;
       }
       that.cx=e.clientX;
       that.cy=e.clientY;
       var x=that.cx-that.ox;
       var y=that.cy-that.oy;
        if(x<=0){x=0}
       	if(x>that.cw-that.ow){x=that.cw-that.ow}
       	if(y<=0){y=0}
       	if(y>that.ch-that.oh){y=that.ch-that.oh}
       that.box.style.left=x+"px";
       that.box.style.top=y+"px";
       }
       
   },
   up:function(){
       document.onmouseup=function(){
       	document.onmousemove=null;
       	document.onmouseup=null;
       }
   }
}