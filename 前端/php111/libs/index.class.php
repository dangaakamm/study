<?php
 class index{
    function __construct(){
        $this->smarty = new Smarty();
        $this->smarty->setTemplateDir("tpl/index");
        $this->smarty->setCompileDir("com");
        $this->smarty->assign("CSS_PATH",CSS_PATH);
        $this->smarty->assign("JS_PATH",JS_PATH);
        $this->smarty->assign("IMG_PATH",IMG_PATH);
        if(isset($_SESSION["userlogin"])){
            $this->smarty->assign("userlogin",$_SESSION["userlogin"]);
            $this->smarty->assign("username",$_SESSION["username"]);
        }else{
            $this->smarty->assign("userlogin",0);
            $this->smarty->assign("username",0);
        }
    }
 }
?>