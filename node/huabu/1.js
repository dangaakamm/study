function move(canvas,cobj) {
    this.canvas=canvas;
    this.cobj=cobj;
    this.width=canvas.width;
    this.height=canvas.height;
    this.history=[];
    this.type="line";
    this.style="stroke";
    this.strokeStyle="#000";
    this.fillStyle="red";
    this.lineWidth=1;
    this.bian=5;
}
move.prototype={
    init:function () {
        this.cobj.strokeStyle=this.strokeStyle;
        this.cobj.fillStyle=this.fillStyle;
        this.cobj.lineWidth=this.lineWidth;
    },
    draw:function () {
        var that=this;
        that.canvas.onmousedown=function(e){
            var dw=e.offsetX;
            var dh=e.offsetY;
           that.canvas.onmousemove=function (e) {
               that.init();
               var mw=e.offsetX;
               var mh=e.offsetY;
               that.cobj.clearRect(0,0,that.canvas.width,that.canvas.height);
                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }
                that.cobj.beginPath();
                that[that.type](dw,dh,mw,mh);
               that.cobj[that.style]();
            }
            that.canvas.onmouseup=function () {
                that.canvas.onmousemove=null;
                that.canvas.onmouseup=null;
                that.history.push(that.cobj.getImageData(0,0,that.canvas.width,that.canvas.height));
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
        var ang=360/this.bian*(Math.PI/180);
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        for(var i=0;i<this.bian;i++){
            this.cobj.lineTo(r*Math.cos(ang*i)+x,r*Math.sin(ang*i)+y);
        }
        this.cobj.closePath();
    },
    wujiao:function (x,y,x1,y1) {
        var ang=360/(this.bian*2)*(Math.PI/180);
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        var r1=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))/2;
        for(var i=0;i<this.bian*2;i++){
            if(i%2==0){
                this.cobj.lineTo(r*Math.cos(ang*i)+x,r*Math.sin(ang*i)+y);
            }else{
                this.cobj.lineTo(r1*Math.cos(ang*i)+x,r1*Math.sin(ang*i)+y);
            }
        }
        this.cobj.closePath();
    }
}