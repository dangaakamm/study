window.onload=function(){
//选项卡
	var word=getClass("chaozhitemai");
	var pic=getClass("sale_pic");
	for(var i=0;i<word.length;i++){
		word[i].name=i;
		word[i].onmouseover=function(){
			for(var j=0;j<pic.length;j++){
				word[j].className="chaozhitemai";
				pic[j].className="sale_pic";
			}
			pic[this.name].className="sale_pic over";
			this.className="chaozhitemai cztm";
		}
	}
    var word1=getClass("zgtk_high_rmpp");
	var pic1=getClass("picc");
	for(var a=0;a<word1.length;a++){
		word1[a].name=a;
		word1[a].onmouseover=function(){
			for(var b=0;b<pic1.length;b++){
				word1[b].className="zgtk_high_rmpp";
				pic1[b].className="picc";
			}
			pic1[this.name].className="picc on";
			this.className="zgtk_high_rmpp conn";
		}
	}
//banner轮播
    var banner=$(".big_banner")[0];
    var bigbox=$(".banner_bian")[0];
	var ban=$(".banner_border")[0];
	var picc=$("a",$(".bannerbox")[0]);
	var conn=$("li",$(".banner_gunlun")[0]);
	var jtleft=$(".bann jtleft")[0];
	var jtright=$(".bann jtright")[0];
    var lee=$(".lee")[0];
    var num=0;
    var arr=["url(img/6.jpg)","url(img/1311.jpg)","url(img/133.jpg)","url(img/135.jpg)"]
    function chack(type){
    	type=type||"right";
    	if(type=="right"){
    		num++;
    		if(num>=picc.length){
    			num=0;
    		}
    	}else if(type=="left"){
    		num--;
    		if(num<=-1){
    			num=picc.length-1;
    		}
    	}
    	for(var i=0;i<picc.length;i++){
            picc[i].style.opacity=0;
            conn[i].className="";
    	}
        bigbox.style.backgroundImage=arr[num];
    	animate(picc[num],{opacity:1})
    	conn[num].className="banner_gunlun_dd";
    	
    }
    var a=setInterval(chack,2000)
    ban.onmouseover=function(){
    	clearInterval(a);
    	jtleft.style.display="block";
    	jtright.style.display="block";
    }
    ban.onmouseout=function(){
    	a=setInterval(chack,2000)
    	jtleft.style.display="none";
    	jtright.style.display="none";
    }
    jtleft.onclick=function(){
    	chack("left");
    }
    jtright.onclick=function(){
    	chack("right");
    }
    
    for(var i=0;i<conn.length;i++){
    	conn[i].name=i;
    	conn[i].onmouseover=function(){
    		for(j=0;j<picc.length;j++){
    			conn[j].className="";
    			picc[j].style.opacity=0;
    		}
            bigbox.style.backgroundImage=arr[this.name];
    		picc[this.name].style.opacity=1;
    		this.className="banner_gunlun_dd";
            
            num=this.name;
    	}
    }
    var box=$(".con");
    var lefts=$(".left");
    var rights=$(".right");
    var tops=$(".top");
    var bottoms=$(".bottom");
    for(var c=0;c<box.length;c++){
    	box[c].aa=c;
        box[c].onmouseover=function(){
        	var w=parseInt(getStyle(this,"width"));
        	var h=parseInt(getStyle(this,"height"));
        	animate(lefts[this.aa],{height:h});
        	animate(rights[this.aa],{height:h});
        	animate(tops[this.aa],{width:w});
        	animate(bottoms[this.aa],{width:w});
        }
        box[c].onmouseout=function(){
        	animate(lefts[this.aa],{height:0});
        	animate(rights[this.aa],{height:0});
        	animate(tops[this.aa],{width:0});
        	animate(bottoms[this.aa],{width:0})
        }
   }

//楼层banner轮播
  function big(num){
     var small=$(".smallgun")[num];
     var img=$("a",small);
     var con=$("li",$(".yuandian")[num]);
     var leftjt=$(".wuchubuqiwu_jtleft")[num];
     var rightjt=$(".wuchubuqiwu_jtright")[num];
     var next=0;
     var now=0;
     for(var i=1;i<img.length;i++){
        img[i].style.left="390px"
     }
     function check(type){
         type=type||"right";
         if(type=="right"){
            next++;
            if(next==img.length){
                next=img.length-1
                return
            }
            img[next].style.left="390px";
            img[now].style.left="0";
            animate(img[next],{left:0})
            animate(img[now],{left:-390})
            con[next].className="yuandian_";
            con[now].className="";
            now=next;
         }else if(type=="left"){
            next--;
            if(next==-1){
                next=0
                return
            }
            img[next].style.left="-390px";
            img[now].style.left="0";
            animate(img[next],{left:0})
            animate(img[now],{left:390})
            con[next].className="yuandian_";
            con[now].className="";
            now=next;
         }
         for(var j=0;j<con.length;j++){
            con[j].aa=j;
            con[j].onclick=function(){
                
                if(this.aa>=next){
                    next=this.aa;
                    img[next].style.left="390px";
                    img[now].style.left="0";
                    animate(img[next],{left:0})
                    animate(img[now],{left:-390})
                    con[next].className="yuandian_";
                    con[now].className="";
                    now=next;

                   }else if(this.aa<=next){
                    next=this.aa;
                    img[next].style.left="-390px";
                    img[now].style.left="0";
                    animate(img[next],{left:0})
                    animate(img[now],{left:390})
                    con[next].className="yuandian_";
                    con[now].className="";
                    now=next;   
                   }
              }
         }
     }
     small.onmouseover=function(){
        leftjt.style.display="block";
        rightjt.style.display="block";
     }
     small.onmouseout=function(){
        leftjt.style.display="none";
        rightjt.style.display="none";
     }
     leftjt.onclick=function(){
        check("left");
     }
     rightjt.onclick=function(){
        check("right");
     }
  }
   for(var i=0;i<6;i++){
    big(i)
   }
    

//小块轮播
function moveup(num){
    var imgbox=$(".inner")[num];
     var leftbtn=$(".tpgjt")[num];
     var rightbtn=$(".tpgjtt")[num];
     var tupian=$("div",imgbox);
     for(var i=1;i<tupian.length;i++){
        tupian[i].style.left="160px";
     }
     var now=0;
     var next=0;
     function tuodong(type){
        type=type||"right";
        if(type=="right"){
             next++;
         if(next>=tupian.length){
            next=0;
         }
         tupian[next].style.left="-160px";
         tupian[now].style.left="0px";
         animate(tupian[next],{left:0})
         animate(tupian[now],{left:160})
         now=next;
        }else if(type=="left"){
            next--;
            if(next<0){
               next=tupian.length-1;
            }
         tupian[next].style.left="160px";
         tupian[now].style.left="0px";
         animate(tupian[next],{left:0})
         animate(tupian[now],{left:-160})
         now=next;
        }
     }
     leftbtn.onclick=function(){
        tuodong("left");
     }
     rightbtn.onclick=function(){
        tuodong("right");
     }
}
for(var i=0;i<9;i++){
    moveup(i);
}
     

     
    

//侧栏滚轮
    var ytbh=$(".zhuanguitongkuan")[0];
    var celan=$(".celan")[0];
    var lis=$("div",celan);
    var floor=$(".shishangmingpin");
    var retu=$(".close")[0];
    var list=$("li",celan)
    document.documentElement.scrollTop=1;
    var obj=document.documentElement.scrollTop?
        document.documentElement:document.body;
        var now=0;
        window.onscroll=function(){
            if(obj.scrollTop>=ytbh.offsetTop){
                celan.style.display="block";
            }else{
                celan.style.display="none";
            }
            for(var i=0;i<floor.length;i++){
                if(obj.scrollTop +200  >= floor[i].offsetTop){
                    for(var j=0;j<lis.length;j++){
                        lis[j].style.display="none";
                    }
                    lis[i].style.display="block";
                    now=i;
                }
                if(obj.scrollTop +200 <floor[0].offsetTop){
                    for(var j=0;j<lis.length;j++){
                        lis[j].style.display="none";
                    }
                }
            }
        }
        for(var i=0;i<list.length;i++){
            list[i].aa=i;
            list[i].onclick=function(){
                animate(obj,{scrollTop:floor[this.aa].offsetTop})
                // lis[this.aa].style.display="block";
            }
            list[i].onmouseover=function(){
                lis[this.aa].style.display="block";
            }
            list[i].onmouseout=function(){
                if(now!=this.aa){
                     lis[this.aa].style.display="none";
                }
            }
        }
        retu.onclick=function(){
            animate(obj,{scrollTop:0})
        }
   
   
 
 
}