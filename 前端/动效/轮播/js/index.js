$(function(){
	var bigbox=$(".bigbox")[0];
	var banner=$(".banner")[0];
	var pic=$("a",$(".picc")[0]);
	var can=$("li",$(".can")[0]);
	var left=$(".box left")[0];
	var right=$(".box right")[0];
	var num=0; //定义下标
	var arr=["pink","plum","yellow","pinkblue"];
	function chack(type){
		type=type||"right"  
		if(type=="right"){
			num++;
			if(num>=pic.length){
			  num=0;
		  }
		}else if(type=="left"){
			num--;
			if(num<=-1){
			  num=pic.length-1;
		  }
		}
        for(var i=0;i<pic.length;i++){  //遍历图片
		pic[i].style.opacity=0;     //所有图片透明度为0
		can[i].className="";	     //点点类名为空
		}
		animate(pic[num],{opacity:1})
		can[num].className="con";
		bigbox.style.backgroundColor=arr[num];	
	}
	    var a=setInterval(chack,2000)
        banner.onmouseover=function(){
        	clearInterval(a);
        	left.style.display="block";
        	right.style.display="block";
        }
        banner.onmouseout=function(){
        	a=setInterval(chack,2000)
        	left.style.display="none";
        	right.style.display="none";
        }
        left.onclick=function(){
        	chack("left");
        }
        right.onclick=function(){
        	chack("right");
        }
        for(i=0;i<can.length;i++){
        	can[i].ss=i;
        	can[i].onmouseover=function(){
        		for(j=0;j<pic.length;j++){
        		can[j].className="";
        		pic[j].style.opacity=0;

        	   }
        	   pic[this.ss].style.opacity=1;
        	   this.className="con";
               bigbox.style.backgroundColor=arr[this.ss];   
        	   num=this.ss;
        	}
        }     
   })




