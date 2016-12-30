function shape(canvas,copy,cobj) {
    this.canvas=canvas;
    this.cobj=cobj;
    this.copy=copy;
    this.width=this.canvas.width;
    this.height=this.canvas.height;
    this.type="line";
    this.style="stroke";
    this.border="red";
    this.fill="red";
    this.lineWidth=1;
    this.history=[];
    this.bian=5;
    this.jiao=5;
    this.isback=true;
    this.isshowxp=true;
    this.xpsize=10;
}
shape.prototype={
    init:function () {
        this.cobj.lineWidth=this.lineWidth;
        this.cobj.strokeStyle=this.border;
        this.cobj.fillStyle=this.fill;
    },
    draw:function () {
        var that=this;
        that.copy.onmousedown=function (e) {
            var dx=e.offsetX;
            var dy=e.offsetY;
            that.copy.onmousemove=function (e) {
                that.isback=true;
                that.init();
                var mx=e.offsetX;
                var my=e.offsetY;
                that.cobj.clearRect(0,0,that.width,that.height);
                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0)
                }
                that.cobj.beginPath();
                that[that.type](dx,dy,mx,my);
                that.cobj[that.style]();
            }
            that.copy.onmouseup=function () {
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
            }
        }
    },
    line:function (x,y,x1,y1) {
        this.cobj.moveTo(x,y);
        this.cobj.lineTo(x1,y1);
    },
    rect:function (x,y,x1,y1) {
        this.cobj.rect(x,y,x1-x,y1-y);
    },
    circle:function (x,y,x1,y1) {
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        this.cobj.arc(x,y,r,0,Math.PI*2);
        this.cobj.closePath();
    },
    arcs:function (x,y,x1,y1) {
        var angle=360/this.bian*(Math.PI/180);
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        for(var i=0;i<this.bian;i++){
            this.cobj.lineTo(r*Math.cos(angle*i)+x,r*Math.sin(angle*i)+y);
        }
        this.cobj.closePath();
    },
    arcss:function (x,y,x1,y1) {
        var angle=360/(this.jiao*2)*(Math.PI/180);
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        var r1=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))/2;
        for(var i=0;i<this.jiao*2;i++){
            if(i%2==0){
                this.cobj.lineTo(r*Math.cos(angle*i)+x,r*Math.sin(angle*i)+y);
            }else{
                this.cobj.lineTo(r1*Math.cos(angle*i)+x,r1*Math.sin(angle*i)+y);
            }
        }
        this.cobj.closePath();
    },
    pencil:function () {
        var that=this;
        this.copy.onmousedown=function(e){
            var dx=e.offsetX;
            var dy=e.offsetY;
            that.init();
            that.cobj.beginPath();
            that.cobj.moveTo(dx,dy);
            that.copy.onmousemove=function (e) {
                var mx=e.offsetX;
                var my=e.offsetY;
                that.cobj.clearRect(0,0,that.width,that.height);
                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0)
                }
                that.cobj.lineTo(mx,my);
                that.cobj.stroke();
            }
            that.copy.onmouseup=function () {
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
            }
        }
    },
    xp:function (xpobj) {
        var that=this;
        that.copy.onmousemove=function (e) {
            if(!that.isshowxp){
                return false;
            }
            var mw=e.offsetX;
            var mh=e.offsetY;
            var lefts=mw-that.xpsize/2;
            var tops=mh-that.xpsize/2;
            if(lefts<0){
                lefts=0
            }
            if(lefts>that.canvas.width-that.xpsize){
                lefts=that.canvas.width-that.xpsize
            }
            if(tops<0){
                tops=0
            }
            if(tops>that.canvas.height-that.xpsize){
                tops=that.canvas.height-that.xpsize
            }
            xpobj.css({left:lefts,top:tops,display:"block",width:that.xpsize+"px",height:that.xpsize+"px"})
        }
        that.copy.onmousedown=function(e){
            that.copy.onmousemove=function (e) {
                var mw=e.offsetX;
                var mh=e.offsetY;
                var lefts=mw-that.xpsize/2;
                var tops=mh-that.xpsize/2;
                if(lefts<0){
                    lefts=0
                }
                if(lefts>that.canvas.width-that.xpsize){
                    lefts=that.canvas.width-that.xpsize
                }
                if(tops<0){
                    tops=0
                }
                if(tops>that.canvas.height-that.xpsize){
                    tops=that.canvas.height-that.xpsize
                }
                xpobj.css({left:lefts,top:tops,display:"block",width:that.xpsize+"px",height:that.xpsize+"px"});
                that.cobj.clearRect(lefts,tops,that.xpsize,that.xpsize);
            }
            that.copy.onmouseup=function () {
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
                that.xp(xpobj);
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height))
            }
        }
    }
}



