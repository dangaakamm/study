$(function(){
	$("form").submit(function(e){
		if($(":text").val()==""){
			alert("用户名不能为空");
			e.preventDefault();
			// location.href=""
		}
		if($(":password").val()==""){
			alert("密码不能为空");
			return false;
		}
	})
})