$(function(){
// 闪屏页
    var cid=location.pathname.slice(location.pathname.lastIndexOf("/")+1);
//     var widths=$(window).width();
//     var heights=$(window).height();
//     $(".swiper-slidess").css({"height":heights+"px","width":widths+"px"});
//
//     function resize(origin){
//         var html= document.getElementsByTagName("html")[0];
//         html.style.fontSize=widths/origin*100+"px";
//     }
//     resize(750);
//     var mySwiper = new Swiper ('.swiper-container', {
//
//         // 如果需要滚动条
//         pagination: '.swiper-pagination',
//         onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
//             swiperAnimateCache(swiper); //隐藏动画元素
//             swiperAnimate(swiper); //初始化完成开始动画
//         },
//         onSlideChangeEnd: function(swiper){
//             swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
//         }
//     })
//
// //导航点击效果
//     var num;
//     $(".hot-list").click(function(){
//         num=$(this).index();
//     })
//     $(".tubiao").css("color","#333");
//     if(num!=0){
//         $(".tubiao").eq(num).css("color","#DF3031");
//     }else{
//         $(".tubiao").eq(0).css("color","#DF3031");
//     }


// 移动端固定定位的问题
    var myScroll = new IScroll('#wrapper', {
        bounceEasing: 'elastic',
        bounceTime: 1200 ,
        mouseWheel:true,
        bounce:true,
        click:true
    });
    myScroll.on("scrollStart",function(){
        if(myScroll.y==myScroll.maxScrollY){
            down();
        }
        if(myScroll.y==0){
            up();
        }
    })
    var upEle=$(".up")[0];
    var downEle=$(".down")[0];
    var scroller=$(".scroller")[0];
    function up(){
        upEle.style.display="block";
        setTimeout(function(){
            upEle.style.display="none";;
        },1000)
    }
    var num=0;
    var flag=true;
    function down(){
        if(!flag){
            return;
        }
        flag=false;
        num++;
        downEle.style.display="block";
        myScroll.refresh();

        $.ajax({
            url:"/ajax",
            type:"post",
            data:{num:num,cid:cid},
            success:function(e){
                console.log(e);
                flag=true;
                var listAdd;
                for(var i=0;i<5;i++){
                    listAdd+=`<li class="list1-con">
            <div class="list1-img">
                <img src="/img/${e[i].aimg.split(';')[0]}" alt=""/>
            </div>
            <div class="list1-zi">
                <a href="/show/${e[i].id}">${e[i].atitle}</a>
                <span class="list1-time">20分钟前</span>
                <span class="list1-read">1000次</span>
            </div>

        </li>`
                }

                $("#wrapper .list1").append(listAdd);
                downEle.style.display="none";
                myScroll.refresh();
            }
        })

    }




})