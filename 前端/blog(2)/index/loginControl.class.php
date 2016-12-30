<?php
class loginControl extends index{

	function login(){
		$this->smarty->display("login.html");
	}
	function reg(){
		$this->smarty->display("reg.html");
	}
	function addUser(){
		$db=new db("user");
		if(isset($_POST["username"])){
			$username=$_POST["username"];
		}else{
			$this->login();
			exit;
		}
		if(isset($_POST["password"])){
			$password=md5($_POST["password"]);
		}else{
			$this->login();
			exit;
		}
		if($db->field("username='{$username}',password='{$password}'")->insert()){
			$this->smarty->assign("noticTitle","注册成功");
			$this->smarty->assign("noticPage","登录页面");
			$this->smarty->assign("noticUrl","index.php?m=index&c=login&a=login");
			$this->smarty->display("notic.html");
		}else{
			$this->smarty->assign("noticTitle","注册失败");
			$this->smarty->assign("noticPage","注册页面");
			$this->smarty->assign("noticUrl","index.php?m=index&c=login&a=reg");
			$this->smarty->display("notic.html");
		}
	}
	function checkLogin(){
        $db=new db("user");
		if($_POST["username"]){
			$username=$_POST["username"];
		}else{
			$this->login();
		}
		if($_POST["password"]){
			$password=md5($_POST["password"]);
		}else{
			$this->login();
		}
		$data=$db->select();
		foreach($data as $v){
			if($v["username"]==$username&&$v["password"]==$password){
				$_SESSION["indexlogin"]=1;
				$_SESSION["username"]=$username;
				$_SESSION["password"]=$password;
				$_SESSION["uid"]=$v["uid"];
				$this->smarty->assign("noticTitle","登录成功");
				$this->smarty->assign("noticPage","主页面");
				if(isset($_SESSION["currenturl"])){
					$this->smarty->assign("noticUrl",$_SESSION["currenturl"]);
					unset($_SESSION["currenturl"]);
				}else{
					$this->smarty->assign("noticUrl","index.php");
				}
				$this->smarty->display("notic.html");
				exit;
			}
		}
		$this->smarty->assign("noticTitle","登录失败");
		$this->smarty->assign("noticPage","登录页面");
		$this->smarty->assign("noticUrl","index.php?m=index&c=login&a=login");
		$this->smarty->display("notic.html");
	}



	function logout(){
        unset($_SESSION["indexlogin"]);
		unset($_SESSION["username"]);
		unset($_SESSION["password"]);
		unset($_SESSION["uid"]);
		$this->smarty->assign("noticTitle","退出成功");
		$this->smarty->assign("noticPage","主页面");
		$this->smarty->assign("noticUrl","index.php");
		$this->smarty->display("notic.html");
		
	}
}
?>