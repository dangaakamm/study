$(function(){
//banner
var pic=$("a",$(".bann")[0]);
var con=$("li",$(".can")[0]);
var lefts=$(".jiantou")[0];
var rights=$(".jiantou1")[0];
var banner=$(".ban_body_middle")[0];
for(var i=1;i<pic.length;i++){
	pic[i].style.left="740px";
}
var now=0;
var next=0;
function chack (type) {
	type=type||"right";
	if(type=="right"){
		next++;
		if(next>=pic.length){
			next=0;
		}
		pic[next].style.left="740px";
		pic[now].style.left="0px";
		animate(pic[next],{left:0})
		animate(pic[now],{left:-740})
        con[now].className="";
        con[next].className="circle1";
        now=next;
	}else if(type=="left"){
		next--;
		if(next<=-1){
			next=pic.length-1;
		}
		pic[next].style.left="-740px";
		pic[now].style.left="0px";
		animate(pic[next],{left:0})
		animate(pic[now],{left:740})
        con[now].className="";
        con[next].className="circle1";
        now=next;
	}
}
var a=setInterval(chack,2000);
banner.onmouseover=function(){
	clearInterval(a);
}
banner.onmouseout=function(){
	a=setInterval(chack,2000);
}
lefts.onclick=function(){
   chack("left")
}
rights.onclick=function(){
   chack("right")
}
for(j=0;j<con.length;j++){
	con[j].aa=j;
	con[j].onclick=function(){
		next=this.aa;
		pic[next].style.left="740px";
		pic[now].style.left="0px";
		animate(pic[next],{left:0})
		animate(pic[now],{left:-740})
		con[next].className="circle1";
		con[now].className="";
		now=next;
	}
}



//图片动画
     function yidong(num){
     	var imgs=$("img",$(".zero")[num]);
     	for(var i=0;i<imgs.length;i++){
     		imgs[i].aa=i;
     		imgs[i].onmouseover=function(){
  		       animate(this,{right:40})
	  	    }
	  	    imgs[i].onmouseout=function(){
	  		   animate(this,{right:20})
	  	    }   
     	}
     }
     for(var i=0;i<16;i++){
     	yidong(i)
     }
   
    
  	
  

//跑马灯轮播
	   var wheel=$(".wheell")[0];
	   var bannerbox=$(".wheel")[0];
	   var leftss=$(".wheel_leftjt")[0];
	   var rightss=$(".wheel_rightjt")[0];
	   var one=getStyle(getFirst(wheel),"width");
	   var len=getChild(wheel).length;
	   wheel.style.width=one*len+"px";
	   function moveleft(){
	   	var first=getFirst(wheel);
	   	animate(first,{marginLeft:-285},500,function(){
	   		wheel.appendChild(first);
	   		first.style.marginLeft="0px";
	   	})
	   }
	   var b=setInterval(moveleft,2000)
	   bannerbox.onmouseover=function(){
	   	clearInterval(b);
	   }
	    bannerbox.onmouseout=function(){
	   	b=setInterval(moveleft,2000)
	   }
	   leftss.onclick=function(){
	   	moveleft();
	   }
	   rightss.onclick=function(){
          var last=getLast(wheel);
          last.style.marginLeft=0;
          wheel.insertBefore(last,getFirst(wheel));
          animate(last,{marginLeft:-285})
	   }
   


//下拉菜单
		var box=$(".banner_head")[0];
		var yiji=$(".yiji");
		var erji=$(".erji");
		for(var i=0;i<yiji.length;i++){
			yiji[i].aa=i;
			hover(yiji[i],function(){
				var lis=$("li",erji[this.aa]);
				erji[this.aa].style.display="block";
			},function(){
				erji[this.aa].style.display="none";
			})
		}
})