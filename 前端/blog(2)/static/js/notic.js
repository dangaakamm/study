$(function(){
	var url=$("span").attr("url");
	var num=3;
    setInterval(function(){
        num--;
        $("span").html(num);
        if(num==0){
        	location.href=url;
        }
    },1000)
})