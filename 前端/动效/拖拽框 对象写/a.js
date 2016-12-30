function drag(box){
    this.box=box;
    this.ox=0;
    this.oy=0;
    this.cx=0;
    this.cy=0;
    this.cw=this.box.offsetWidth;
    this.ch=this.box.offsetHeight;
    this.ow=document.documentElement.clientWidth;
    this.oh=document.documentElement.clientHeight;
}
drag.prototype= {
    drags:function(){
        this.box(down);
    },
    down:function(){
        var that=this;
        this.box.onmousedown=function(e){
            e=e||window.event;
            if(e.preventDefault){
                e.preventDefault();
            }else{
                returnValue=false;
            }
            that.ox=e.offsetX;
            that.oy=e.offsetY;
            that.move();
            that.up()
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
            thst.cy=e.clientY;
            var x=that.cx-that.ox;
            var y=that.cy-that.oy;
            if(x>=that.ow-that.cw){x=that.ow-that.cw}
            if(x<0){x=0}
            if(y>=that.oh-that.ch){y=that.oh-that.ch}
            if(y<0){y=0}
        }
   },
   up:function(){
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
        }
   }

};