window.onload=function(){
    var scene=document.querySelector(".scene");
    var room=document.querySelector(".room");
    //屏幕的宽高
    var clientW=document.documentElement.clientWidth;
    var clientH=document.documentElement.clientHeight;
    room.style.transformOrigin="center center "+clientW/2+"px";

    //组后一个面
    var lastpanel=document.querySelector(".panel:last-child");
    lastpanel.style.transform="translate3d(0,0,"+clientW+"px) rotateY(180deg)";

    //天花板 地板
    var floor=document.querySelector(".panel:first-child");
    var ceil=document.querySelector(".panel:nth-child(5)");
    floor.style.width=ceil.style.width=floor.style.height=ceil.style.height=clientW+"px";
    ceil.style.top=-(clientW-clientH)+"px";

    //开始执行
    room.style.transform="rotate3d(0,1,0,180deg)";
    lastpanel.onclick=function(){
        room.style.transition="transform 2s ease";
        room.style.transform="translate3d(0,0,-500px) rotate3d(0,1,0,180deg)";
    }
    var angle1=0,angle=0;
    document.onmousedown=function(e){
        var startx= e.clientX;
        var starty= e.clientY;
        document.onmousemove=function(e){
            room.style.transform="none";
            var movex= e.clientX;
            var movey= e.clientY;
            e.preventDefault();
            angle=Math.abs(movex-startx)>Math.abs(movey-starty)?movex-startx:movey-starty;
            room.style.transform="translate3d(0,0,-500px) rotate3d(0,1,0,"+(angle1+angle)+"deg)";
        }
        document.onmouseup=function(){
            angle1+=angle;
            document.onmousemove=null;
            document.onmouseup=null;
        }
        e.preventDefault();
    }
}