<?php
class indexControl extends main{
	function index(){
		if(isset($_SESSION["adminlogin"])){
			$this->smarty->assign("auser",$_SESSION["auser"]);
			$this->smarty->display("index.html");
			
		}else{
			$this->smarty->display("login.html");
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
		if($db->field("auser='{$auser}',apass='{$apass}'")->insert()>0){
			 $this->smarty->assign("noticeTitle","注册成功");
			  $this->smarty->assign("noticeCon","登录页"); 
			  $this->smarty->assign("noticeUrl","index.php?m=admin&a=login");
			  $this->smarty->display("notice.html");

		}else{
			 $this->smarty->assign("noticeTitle","注册失败");
			  $this->smarty->assign("noticeCon","注册页"); 
			  $this->smarty->assign("noticeUrl","index.php?m=admin&a=reg");
			  $this->smarty->display("notice.html");
		}
	}
	function checkLogin(){
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
		$data=$db->select();
		foreach ($data as $v){
			 if($v["auser"]==$auser){
                if($v["apass"]==$apass){
                	$_SESSION["adminlogin"]=1;
                	$_SESSION["auser"]=$auser;
                	$_SESSION["aid"]=$v["aid"];
                	$_SESSION["atime"]=$v["atime"];
              $this->smarty->assign("noticeTitle","登录成功");
			  $this->smarty->assign("noticeCon","主页"); 
			  $this->smarty->assign("noticeUrl","index.php?m=admin&a=index");
			  $this->smarty->display("notice.html");
			  exit;

                }
			 }
		}
		  $this->smarty->assign("noticeTitle","登录失败");
			  $this->smarty->assign("noticeCon","登录页"); 
			  $this->smarty->assign("noticeUrl","index.php?m=admin&a=login");
			  $this->smarty->display("notice.html");
	}
	function outlogin(){
	    unset($_SESSION["adminlogin"]);
        unset($_SESSION["aid"]);
        unset($_SESSION["auser"]);
        unset($_SESSION["atime"]);
        $this->smarty->assign("noticeTitle","退出成功");
        $this->smarty->assign("noticeCon","登录页");
        $this->smarty->assign("noticeUrl","index.php?m=admin");
        $this->smarty->display("notice.html");
    }
}
?>