$(function () {
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
    var cid=location.pathname.slice(location.pathname.lastIndexOf("/")+1);
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
            url:"/index",
            type:"post",
            data:{num:num,cid:cid},
            success:function(e){
                console.log(e);
                flag=true;
                var listAdd;
                for(var i=0;i<5;i++){
                    listAdd+=`<a href="/show/<%=lists[i].id%>" class="con1">
                        <div class="con1_left con1_left4"><img src="/static/img/<%=imgarr[0]%>"></div>
                        <div class="con1_right">
                            <p class="tit"><%=lists[i].atit%></p>
                            <span class="cons4">12.04</span>
                            <span class="cons3"></span>
                            <span class="cons2">6771</span>
                        </div>
                    </a>`
                }

                $("#wrapper .con1").append(listAdd);
                downEle.style.display="none";
                myScroll.refresh();
            }
        })

    }

})