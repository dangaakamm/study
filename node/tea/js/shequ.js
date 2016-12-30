$(function () {
    var myScroll = new IScroll('#wrapper', {
        // bounceEasing: 'elastic',
        // bounceTime: 1200 ,
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
            upEle.style.display="none";
        },1000)
    }
    function down(){
        var neirong=document.querySelector(".shequ_con");
        downEle.style.display="block";
        myScroll.refresh();
        setTimeout(function(){
            var news=document.createElement("div");
            news.class="neirong";
            news.innerHTML=neirong.innerHTML;
            $("#scroller").append(news);
            downEle.style.display="none";
            myScroll.refresh();
        },2000)
    }
})