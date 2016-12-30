<?php
class loginControl extends main{
	function __construct(){
        if(isset($_SESSION["adminlogin"])){

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
	
}
?>