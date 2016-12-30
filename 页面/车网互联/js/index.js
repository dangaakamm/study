$(function(){
// 首页轮播
	var now=0;
	var next=0;
	var cw=document.documentElement.clientWidth;
	$(".img>a").css("left",cw+"px").eq(0).css("left","0")
	function move(type){
		type=type||"right";
		if(type=="right"){
			next++;
			if(next>=$(".img>a").length){
				next=0;
			}
			$(".img>a").eq(next).css("left",cw+"px");
			$(".img>a").eq(now).css("left","0");
			$(".img>a").eq(next).animate({left:0});
			$(".img>a").eq(now).animate({left:-cw+"px"})
			$(".cons>li").removeClass("active").eq(next).addClass("active");
			now=next;
		}
		if(type=="left"){
			next--;
			if(next<=-1){
				next=$(".img>a").length-1;
			}
			$(".img>a").eq(next).css("left",-cw+"px");
			$(".img>a").eq(now).css("left","0");
			$(".img>a").eq(next).animate({left:0});
			$(".img>a").eq(now).animate({left:cw+"px"})
			$(".cons>li").removeClass("active").eq(next).addClass("active");
			now=next;
		}
	}
	var t=setInterval(move,2000);
	$(".banner").mouseover(function(){
		clearInterval(t);
	})
	$(".banner").mouseout(function(){
		t=setInterval(move,2000);
	})
	$(".leftjt").click(function(){
		move("left");
	})
	$(".rightjt").click(function(){
		move("right");
	})
	$(".cons>li").each(function(index,obj){
		$(obj).click(function(){
			if(index<now){
				next=index;
				$(".img>a").eq(next).css("left",-cw+"px");
				$(".img>a").eq(now).css("left","0");
				$(".img>a").eq(next).animate({left:0});
				$(".img>a").eq(now).animate({left:cw+"px"})
				$(".cons>li").removeClass("active").eq(next).addClass("active");
				now=next;
			}else{
				next=index;
				$(".img>a").eq(next).css("left",cw+"px");
				$(".img>a").eq(now).css("left","0");
				$(".img>a").eq(next).animate({left:0});
				$(".img>a").eq(now).animate({left:-cw+"px"})
				$(".cons>li").removeClass("active").eq(next).addClass("active");
				now=next;
			}
		})
	})


//侧栏
	$(window).on("scroll",function(){
		var top=$(window).scrollTop();
		if(top>=700){
			$(".up").css("display","block");
		}else{
			$(".up").css("display","none");
		}
		$(".up").click(function(){
			var newobj={attr:$(window).scrollTop()}
			$(newobj).animate({attr:0},{
				duration:1000,
				step:function(){
					$(window).scrollTop(newobj.attr)
				}
			})
		})
	})
	$(".weibo").hover(function(){
		$(".weiboo").css("display","block");
	},function(){
		$(".weiboo").css("display","none");
	})
	$(".weixin").hover(function(){
		$(".weixinn").css("display","block");
	},function(){
		$(".weixinn").css("display","none");
	})

//网站导航
	$(".daohang").on("click",function(e){
		if($(".daohang .xial").is(":hidden")){
			$(".daohang .xial").show();
		}else{
			$(".daohang .xial").hide();
		}
		$(document).one("click",function(){
			$(".daohang .xial").hide();
		})
		e.stopPropagation();
	})
})