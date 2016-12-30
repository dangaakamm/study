$(function(){
    var myScroll;
    function loaded () {
    myScroll = new IScroll('#wrapper', {
        bounceEasing: 'elastic',
        bounceTime: 1200 ,
        mouseWheel:true,
        bounce:true
    });

    myScroll.on("scrollStart", function () {
        if(myScroll.y==myScroll.maxScrollY){
            down();
        }
        if(myScroll.y==0){
            // up();
        }
    })

    var downEle=document.getElementsByClassName("down")[0];
    var upEle=document.getElementsByClassName("up")[0];
    var ul=document.querySelector("ul");
    function down(){
        downEle.style.display="block";
        myScroll.refresh();

        setTimeout(function () {
            for(var i=0;i<5;i++){
                $("<li>"+i+"</li>").appendTo(ul);
            }

            downEle.style.display="none";
            myScroll.refresh();
        },2000)
    }

    function up(){
        upEle.style.display="block";

        setTimeout(function () {
            for(var i=0;i<5;i++){
                $("<li>news"+i+"</li>").prependTo(ul);
            }
            upEle.style.display="none";
            myScroll.refresh();
        },2000)
    }
    }

    document.addEventListener('touchmove', function (e) { e.preventDefault(); })



// var neirong=document.getElementsByClassName("neirong")[0];
// var myScroll = new IScroll('#wrapper', {
//     bounceEasing: 'elastic',
//     bounceTime: 1200 ,
//     mouseWheel:true,
//     bounce:true,
//     click:true
// });
// myScroll.on("scrollStart",function(){
//     if(myScroll.y==myScroll.maxScrollY){
//         down();
//     }
//     if(myScroll.y==0){
//         up();
//     }
// })
// var upEle=$(".up")[0];
// var downEle=$(".down")[0];
// var scroller=$(".scroller")[0];
// function up(){
//     upEle.style.display="block";
//     setTimeout(function(){
//         upEle.style.display="none";
//     },1000)
// }
// function down(){
//     downEle.style.display="block";
//     myScroll.refresh();
//     setTimeout(function(){
//         var news=document.createElement("div");
//         // news.class="neirong";
//         // news.appendChild()
//         // news.style.cssText="font-size:0.3rem;text-align:center;";
//         // news.innerHTML=neirong.innerHTML;
//         // console.log(news.innerHTML)
//         $("#scroller").appendChild(".neirong");
//         downEle.style.display="none";
//         myScroll.refresh();
//     },2000)
// }
//
})