<?php
class main{
	function __construct(){
		$this->smarty=new Smarty();
		$this->smarty->setTemplateDir("tpl/admin");
		$this->smarty->setCompileDir("com");
		$this->smarty->assign("CSS_PATH",CSS_PATH);
		$this->smarty->assign("JS_PATH",JS_PATH);
        $this->smarty->assign("IMG_PATH",IMG_PATH);


	}
}

?>