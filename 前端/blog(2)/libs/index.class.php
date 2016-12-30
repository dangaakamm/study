<?php
class index{
	function __construct(){
		session_start();
		$this->smarty=new Smarty();
		$this->smarty->setTemplateDir("tpl/index");
		$this->smarty->setCompileDir("com");
		$this->smarty->assign("CSS_PATH",CSS_PATH);
		$this->smarty->assign("JS_PATH",JS_PATH);
		$this->smarty->assign("IMG_PATH",IMG_PATH);
		if(isset($_SESSION["indexlogin"])){
			$this->smarty->assign("username",$_SESSION["username"]);
			$this->smarty->assign("indexlogin",$_SESSION["indexlogin"]);
		}else{
			$this->smarty->assign("username",0);
			$this->smarty->assign("indexlogin",0);
		}
	}
}
?>