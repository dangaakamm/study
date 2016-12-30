$(function(){ 
	$("form").submit(function(){
		if($(":text").val()==""){
			alert("用户名不能为空")
			return false;
		}
		if($(":password").val()==""){
			alert("用户名不能为空")
			return false;
		}
	})
})