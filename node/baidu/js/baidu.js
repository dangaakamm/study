$(function () {
    $(document).mousedown(function (e) {
        e.preventDefault();
    })
    $(document).mousemove(function (e) {
        e.preventDefault();
    })
    // 主屏滑动
    var ch=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function (e) {
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        flag=false;
        $("#fullpage").css({marginTop:-num * ch})
        $(".con li").removeClass("active").eq(num).addClass("active");
    })
    touch.on("body","swipedown","#fullpage",function (e) {
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $("#fullpage").css({marginTop:-num * ch});
        $(".con li").removeClass("active").eq(num).addClass("active");

    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function () {
        flag=true;
        if(num==0){
            $(".boat").css({aimation:"ship 2s linear forwards"})
        }else if(num!=0){
            $("section").each(function (index,obj) {
                if(num==index){
                    $(obj).find(".tit").css({transform:"translate(0,0)",opacity:1});
                    $(obj).find(".nol").css({transform:"translate(0,0)",opacity:1});
                }else{
                    $(obj).find(".tit").css({transform:"translate(-30px,0)",opacity:0});
                    $(obj).find(".nol").css({transform:"translate(30px,0)",opacity:0});
                }
            })
        }
    })

        $(".con li").click(function () {
            var index=$(this).index();
            if(num>index){
                num--;
                if(num==-1){
                    num=0;
                }
                $("#fullpage").css({marginTop:-num * ch});
                $(".con li").removeClass("active").eq(num).addClass("active");
            }else if(num<index){
                num++;
                if(num==$("section").length){
                    num=$("section").length-1;
                }
                $("#fullpage").css({marginTop:-num * ch})
                $(".con li").removeClass("active").eq(num).addClass("active");
            }
        })


    $(".down").click(function () {
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
        }
        $("#fullpage").css({marginTop:-num * ch})
        $(".con li").removeClass("active").eq(num).addClass("active");
    })

    // 小屏导航
    var flag2=true;
    $(".min .breade").click(function () {
        $(".min_body").slideToggle(200);
    })

    // 调试窗口
    $(window).resize(function () {
        clentH=$(window).height();
        $("#fullpage").css("marginTop",clentH*-num);
    })
})