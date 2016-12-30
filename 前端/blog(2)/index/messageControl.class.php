<?php
class messageControl extends index{
	function add(){
		if(isset($_SESSION["indexlogin"])){
			$title=$_POST["title"];
			$con=$_POST["con"];
			$sid=$_POST["sid"];
			$uid=$_SESSION["uid"];
			$db=new db("message");
			if($db->field("title='{$title}',con='{$con}',sid='{$sid}',uid='{$uid}'")->insert()){
				echo '{"result":"ok"}';
			}
		}else{
			echo '{"result":"error"}';
			// $_SESSION["currenturl"]="index.php?m=index&c=show&a=show&id={$sid}";
		}
		
	}

	function reply(){
		if(isset($_SESSION["indexlogin"])){
			$mid=$_POST["mid"];
			$con=$_POST["con"];
			$uid=$_SESSION["uid"];
			$db=new db("replay");
			if($db->field("con='{$con}',uid='{$uid}',mid='{$mid}'")->insert()){
				echo '{"result":"ok"}';
			}
		}else{
			$this->smarty->assign("noticTitle","留言请登录");
			$this->smarty->assign("noticPage","跳转至登录页面页面");
			$this->smarty->assign("noticUrl","index.php?c=login&a=login");
			$this->smarty->display("notic.html");
		}
		
	}
}
?>