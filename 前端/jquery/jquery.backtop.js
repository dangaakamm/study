jQuery.extend({
	backtop:function(obj) {
         $(window).on("scroll",function(){
      	var top=$(window).scrollTop();
	      	if(top>=1000){
	      		$(".up").fadeIn(600)
	      	}else{
	      		$(".up").fadeOut(300)
	      	}
	      	$(".up").click(function(){
	      		var obj={st:top}
	      	$(obj).animate({st:0},{
	      		duration:1000,
	      		step:function(){
	      			$(window).scrollTop(obj.st)
	      		}
	      	})
      	})
     })
   }
})