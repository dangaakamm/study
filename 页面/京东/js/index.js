$(function(){
	var bigbox=$(".banner_body")[0];
	var pic=$("a",$(".banner_pic")[0]);
	var con=$("li",$(".can")[0]);
	var lefts=$(".btn leftbtn")[0];
	var rights=$(".btn rightbtn")[0];
    var num=0;
    function chack(type){
    	type=type||"right";
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
    	for(var i=0;i<pic.length;i++){
    		pic[i].style.opacity=0;
    		con[i].className="";
    	}
    	animate(pic[num],{opacity:1})
    	con[num].className="active";
    }
    var a=setInterval(chack,2000);
    bigbox.onmouseover=function(){
    	clearInterval(a);
    	lefts.style.display="block";
    	rights.style.display="block";
    }
    bigbox.onmouseout=function(){
    	a=setInterval(chack,2000)
    	lefts.style.display="none";
    	rights.style.display="none";
    }
    lefts.onclick=function(){
    	chack("left");
    }
    rights.onclick=function(){
    	chack("right");
    }
    for(var i=0;i<con.length;i++){
    	con[i].aa=i;
    	con[i].onmouseover=function(){
    		for(var j=0;j<pic.length;j++){
    			con[j].className="";
    			animate(pic[j],{opacity:0})
    		}
    		animate(pic[this.aa],{opacity:1})
    		this.className="active";
    		num=this.aa;
    	}
    }


//轮播图
    var box=$(".lunboright")[0];
    var img=$(".picc",box);
    var left=$(".jiantouu jtl")[0];
    var right=$(".jiantouu jtr")[0];
    var now=0;
    var next=0;
    for(var i=1;i<img.length;i++){
        img[i].style.left="1000px";  
    }
    img[0].style.left="0px";
    function check(type){
        type=type||"right";
        if(type=="right"){
            next++;
            if(next>=img.length){
                next=0;
            }
            img[now].style.left="0px";
            img[next].style.left="1000px";
            animate(img[now],{left:-1000})
            animate(img[next],{left:0})
            now=next;
        }
        if(type=="left"){
            next--;
            if(next<=-1){
                next=img.length-1;
            }
            img[now].style.left="0px";
            img[next].style.left="-1000px";
            animate(img[now],{left:1000})
            animate(img[next],{left:0})
            now=next;
        }

    }
    box.onmouseover=function(){
        left.style.display="block";
        right.style.display="block";
    }
    box.onmouseout=function(){
        left.style.display="none";
        right.style.display="none";
    }
    left.onclick=function(){
        check("left");
    }
    right.onclick=function(){
        check("right");
    }


//一楼banner
    var tab=$(".tab");
    var fzxb_bottom=$(".fzxb_bottom");
    for(var k=0;k<tab.length;k++){
        moveka(k);
    }
    function moveka(k){
        var lis=$("li",tab[k]);
        var al=$("a",tab[k]);
        var dhtz=$(".daohangtiaozhuan",fzxb_bottom[k]);
        lis[0].style.cssText="border-top:3px solid #C81623;border-left:1px solid #C81623;border-right:1px solid #C81623";
        dhtz[0].style.display="block";
        al[0].style.color="#C81623";
        for(var i=0;i<lis.length;i++){
            lis[i].aa=i;
            lis[i].onmouseover=function(){
                for(var j=0;j<lis.length;j++){
                    al[j].style.color="#666";
                    lis[j].style.border=0;
                    dhtz[j].style.display="none";
                }
                lis[this.aa].style.cssText="border-top:3px solid #C81623;border-left:1px solid #C81623;border-right:1px solid #C81623";
                dhtz[this.aa].style.display="block";
                al[this.aa].style.color="#C81623";
            }
        }
    }
        

// 小banner部分
    var minbn=$(".fzxb_bottom_center_banner");
    for(var l=0;l<minbn.length;l++){
        zongminbnner(l);
    }
    function zongminbnner(l){
        var boxminimg=$(".fzxb_imgs")[l];
        var minimg=$("li",boxminimg);
        var minleft=$(".minbanner_left")[l];
        var minright=$(".minbanner_right")[l];
        var minyuandian=$(".minbanner_yuandian")[l];
        var minyuan=$("li",minyuandian);
        var now=0;
        var next=0;
        for(var i=0;i<minimg.length;i++){
            minimg[i].style.left=minimg[now].offsetWidth+"px";
            minyuan[i].aa=i;
            minyuan[i].onmouseover=function(){
                if(now<this.aa){
                    next=this.aa-1;
                    moves("right");
                }else if(now>this.aa){
                    next=this.aa+1;
                    moves("left");
                }
            }
        }
        minimg[0].style.left=0;
        minyuan[0].style.background="#B61B1F";
        function moves(ch){
            ch=ch||"right";
            if(ch=="right"){
                next++;
                if(next>minimg.length-1){
                    next=0;
                }
                minimg[now].style.left=0;
                minimg[next].style.left=minimg[now].offsetWidth+"px";
                animate(minimg[now],{left:-minimg[now].offsetWidth});
                animate(minimg[next],{left:0});
                minyuan[now].style.background="#3e3e3e";
                minyuan[next].style.background="#B61B1F";
                now=next;
            }else if(ch=="left"){
                next--;
                if(next<0){
                    next=minimg.length-1;
                }
                minimg[now].style.left=0;
                minimg[next].style.left=-minimg[now].offsetWidth+"px";
                animate(minimg[now],{left:minimg[now].offsetWidth});
                animate(minimg[next],{left:0});
                minyuan[now].style.background="#3e3e3e";
                minyuan[next].style.background="#B61B1F";
                now=next;
            }
        }
        var t1=setInterval(moves,2000);
        minbn[l].onmouseover=function(){
            minleft.style.display="block";
            minright.style.display="block";
            clearInterval(t1);
        }
        minbn[l].onmouseout=function(){
            minleft.style.display="none";
            minright.style.display="none";
            t1=setInterval(moves,2000);
        }
        minleft.onclick=function(){
            moves("left");
        }
        minright.onclick=function(){
            moves("right");
        }
    }

//晒单热门轮播

    var tiand=$(".tiandj_right_bo_kuang")[0]
    var rmh=$("ul",tiand);
    var now1=0;
    var next1=0;
    for (var i = 0; i < rmh.length; i++) {
        rmh[i].style.top="-240px";
    }
    rmh[0].style.top="0px";
    function hyd(){
        next1++;
        if (next1>rmh.length-1) {
            next1=0;
        }
        rmh[now1].style.top="0px";
        rmh[next1].style.top="-240px";
        animate(rmh[now1],{top:240})
        animate(rmh[next1],{top:0});
        now1=next1;
    }
    th=setInterval(hyd,2000);


//天天低价图片移动

    var tleft_bo=$(".tiandj_left_bo")[0];
    var pics=$("img",tleft_bo);
    // var lidepic=$(".lidepic");
    for (var i = 0; i < pics.length; i++) {
        pics[i].name=i;
        pics[i].onmouseover=function(){
            animate(pics[this.name],{left:-10})
        }
        pics[i].onmouseout=function(){
            animate(pics[this.name],{left:0})
        }
    };



//侧栏楼层跳转
    var louc=$(".louc_box")[0];
    var list=$("li",louc);
    var onew=$(".onew");
    var onef=$(".onef");
    var pzsh=$(".life")[0];
    var floor=$(".fzxb");
    var tttj=$(".tiandj")[0];
    document.documentElement.scrollTop=1;
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    var now=0;
    window.onscroll=function(){
        if(obj.scrollTop>=pzsh.offsetTop && obj.scrollTop<=tttj.offsetTop){
            louc.style.display="block";
        }else{
            louc.style.display="none";
        }
        for(var i=0;i<floor.length;i++){
            if(obj.scrollTop+200>=floor[i].offsetTop){
                for (var j = 0; j < onew.length; j++) {
                    onew[j].style.display="none";
                    onef[j].style.display="block";
                };
                    onew[i].style.display="block"; 
                    onef[i].style.display="none";
                    now=i;
            }
        }
    }
    for(var i=0;i<list.length;i++){
        list[i].aa=i;
        list[i].onclick=function(){
            animate(obj,{scrollTop:floor[this.aa].offsetTop})
        }
        list[i].onmouseover=function(){
            this.style.background="#C81623";
            onew[this.aa].style.display="block";
            onew[this.aa].style.color="#fff";
            onef[this.aa].style.display="none";
        }
        list[i].onmouseout=function(){
            if(now!=this.aa){
                onew[this.aa].style.display="none";
                onef[this.aa].style.display="block";
            }
                this.style.background="";
                onew[this.aa].style.color="";
        }   
    }
})