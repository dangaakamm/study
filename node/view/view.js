window.onload=function () {
    //获取元素
    var scene=document.querySelector(".scene");
    var room=document.querySelector(".room");
    //获取屏幕尺寸
    var clientx=document.documentElement.clientWidth;
    var clienty=document.documentElement.clientHeight;
    room.style.transformOrigin="center center "+clientx/2+"px";
    //后面的面
    var lastpanle=document.querySelector(".panle:last-child");
    lastpanle.style.transform="translate3d(0,0,"+clientx+"px) rotateY(180deg)";
    //顶、底
    var floor=document.querySelector(".panle:first-child");
    var ceil=document.querySelector(".panle:nth-child(5)");
    floor.style.width=ceil.style.width=floor.style.height=ceil.style.height=clientx+"px";
    ceil.style.top=-(clientx-clienty)+"px";
    // 执行
    // room.style.transform="rotate3d(0,1,0,180deg)";
    lastpanle.onclick=function () {
        room.style.transition="transform 2s ease";
        room.style.transform="translate3d(0,0,-500px) rotateY(180deg)";
    }

    var ang=0;var ang1=180;
    var flag1=true;
    document.onmousedown=function (e) {
        flag1=false;
        var cw=e.clientX;
        var ch=e.clientY;
        document.onmousemove=function (e) {
            flag1=true;
            room.style.transition="none";
            var mw=e.clientX;
            var mh=e.clientY;
            ang=Math.abs(mw-cw)>Math.abs(mh-ch)?-(mw-cw):-(mh-ch);
            room.style.transform="translate3d(0,0,-300px) rotate3d(0,1,0,"+(ang+ang1)+"deg)";
            e.preventDefault();
        }
        document.onmouseup=function () {
            document.onmousemove=null;
            document.onmouseup=null;
            if(!flag1){
                return;
            }
            if(flag1){
                ang1+=ang;
                flag1=false;
            }
        }
        e.preventDefault();
    }
    var panles=document.querySelectorAll(".panle");
    var flag=true;
    for(var i=0;i<panles.length;i++){
        if(i<panles.length-1){
            panles[i].ondblclick=function () {
                room.style.transition="transform 2s ease";
                if(flag){
                    room.style.transform="translate3d(0,0,0) rotate3d(0,1,0,"+(ang1)+"deg)";
                    flag=false;
                }else{
                    room.style.transform="translate3d(0,0,-500px) rotate3d(0,1,0,"+(ang1)+"deg)";
                    flag=true;
                }
            }
        }
    }
}