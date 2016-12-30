$(function(){
	function lunbo(father){
     $(father+">.pic>div").hide().eq(0).show();
        var num=0;
        function chack(type){
            type=type||"right";
            if(type=="right"){
                num++;
                if(num>=$(father+">.pic>div").length){
                    num=0;
                }  
            }else if(type=="left"){
                num--;
                if(num<=-1){
                    num=$(father+">.pic>div").length-1;
                }
            }
            $(father+">.pic>div").fadeOut(300).eq(num).fadeIn(300);
        }
        var a=setInterval(chack,4000);
        $(father+">.btnleft").mouseover(function(){
            clearInterval(a);
        })
        .click(function(){
            chack("left")
        })
        .mouseout(function(){
            a=setInterval(chack,4000);
        })
        $(father+">.btnright").mouseover(function(){
            clearInterval(a);
        }).click(function(){
            chack("right");
        }).mouseout(function(){
            a=setInterval(chack,4000);
        })
    }
   lunbo(".banner")


//首页地图
   $(".ditu").mouseover(function(e){
    $(".smallmap").show();
    var x=e.screenX;
    var y=e.screenY;
    x=$(this).offset().left;
    y=y-$(this).offset().top-65;
    x=(x/300).toFixed(2);
    y=(y/300).toFixed(2);
    x=-($(".smallmap").width*x-250);
    y=-($(".smallmap").height*y-250);
    $(".smallmap").css("top",y+"px");
    $(".smallmap").css("left",x+"px");
    document.title=x+","+y;
   }) 
   // $(".ditu").mouseout(function(){
   //  $(".smallmap").hide();
   // })
   
   $(".close").click(function(){
      $(".smallmap").css("display","none")
   })




//首页选项卡
    $(".leibie>.num1").mousemove(function(){
        var index=$(this).index();
        $(".bao>.buchong").eq(index).show().siblings().hide();
    })
//首页轮播
      var na=0;
     function move(type){
         type=type||"right";
         if(type=="right"){
               na++;
               if(na>=$(".play>ul>li").length){
                na=0;
              }
             $(".play>ul").animate({marginLeft:"-1000px"},500,function(){
                $(".play>ul>li").eq(0).appendTo($(".play>ul"));
                $(".play>ul").css("marginLeft","0px");
            });
             $(".banner>ol>li").each(function(){
               $(".banner>ol>li").removeClass("active").eq(na).addClass("active");
             })
         }
         if(type=="left"){
          na--;
          if(na<=-1){
            na=$(".play>ul>li").length-1;
          }
            $(".play>ul").css("marginLeft","-1000px");
            $(".play>ul>li").eq(2).prependTo($(".play>ul"));
            $(".play>ul").animate({marginLeft:"0px"},500);
            $(".banner>ol>li").each(function(){
               $(".banner>ol>li").removeClass("active").eq(na).addClass("active");
             })
         }
    }
      var t=setInterval(move,1500);
      $(".banner").mouseover(function(){
        clearInterval(t);
      })
      $(".banner").mouseout(function(){
        t=setInterval(move,1500);
      })
      $(".jtleft").click(function(){
        move("left")
      })
      $(".jtright").click(function(){
        move("right")
      })
      


//返回顶部
    $(window).on("scroll",function(){
        var top=$(window).scrollTop();
        if(top>=500){
            $(".top").slideDown("slow")
        }else{
            $(".top").slideUp("slow")
        }
        $(".top").click(function(){
            var obj={st:top};
            $(obj).animate({st:0},{
                duration:1000,
                step:function(){
                    $(window).scrollTop(obj.st)
                }
            })
        })
    })
})
    