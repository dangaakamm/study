<?php
class indexControl extends main{
	function index(){
        if(isset($_SESSION["adminlogin"])){
        	$this->smarty->assign("auser",$_SESSION["auser"]);
            $this->smarty->display("index.html");
        }else{
        	$this->login();
        }
	}
	function login(){
		$this->smarty->display("login.html");
	}
	function reg(){
		$this->smarty->display("reg.html");
	}
	function addUser(){
		$db=new db("admin");
		if(isset($_POST["auser"])){
			$auser=$_POST["auser"];
		}else{
			$this->login();
			exit;
		}
		if(isset($_POST["apass"])){
			$apass=md5($_POST["apass"]);
		}else{
			$this->login();
			exit;
		}
		if($db->field("auser='{$auser}',apass='{$apass}'")->insert()){
			$this->smarty->assign("noticTitle","注册成功");
			$this->smarty->assign("noticPage","登录页面");
			$this->smarty->assign("noticUrl","index.php?m=admin&a=login");
			$this->smarty->display("notic.html");
		}else{
			$this->smarty->assign("noticTitle","注册失败");
			$this->smarty->assign("noticPage","注册页面");
			$this->smarty->assign("noticUrl","index.php?m=admin&a=reg");
			$this->smarty->display("notic.html");
		}
	}
	function checkLogin(){
        $db=new db("admin");
		if($_POST["auser"]){
			$auser=$_POST["auser"];
		}else{
			$this->login();
		}
		if($_POST["apass"]){
			$apass=md5($_POST["apass"]);
		}else{
			$this->login();
		}
		$data=$db->select();
		foreach($data as $v){
			if($v["auser"]==$auser&&$v["apass"]==$apass){
				$_SESSION["adminlogin"]=1;
				$_SESSION["auser"]=$auser;
				$_SESSION["apass"]=$apass;
				$_SESSION["aid"]=$v["aid"];
				$this->smarty->assign("noticTitle","登录成功");
				$this->smarty->assign("noticPage","主页面");
				$this->smarty->assign("noticUrl","index.php?m=admin");
				$this->smarty->display("notic.html");
				exit;
			}
		}
		$this->smarty->assign("noticTitle","登录失败");
		$this->smarty->assign("noticPage","登录页面");
		$this->smarty->assign("noticUrl","index.php?m=admin&a=login");
		$this->smarty->display("notic.html");
	}
	private function checkSession(){
        if(!isset($_SESSION['userlogin'])){
        	$this->login();
        	exit;
        }
	}
}
?>