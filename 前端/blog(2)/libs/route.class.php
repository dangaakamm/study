<?php
class route {
	static $module;//内部调用
	static $control;
	static $action;
	static $param;
	public function init(){//初始化
		self::$module=self::getM();
		self::$control=self::getC();
		self::$action=self::getA();
		self::$param=self::getP();
		$url=ROOT_PATH.self::$module."/".self::$control."Control.class.php";
        if(is_file($url)){
        	include $url;
        	$classname=self::$control."Control";
        	if(class_exists($classname)){
	        	$obj=new $classname();//方法
	        	if(method_exists($obj, self::$action)){
	        		call_user_func_array(array($obj,self::$action),array(self::$param));//对象 方法 参数
	        	}else{
	        		echo $url."里不存在".self::$action."方法";
	        	}
	        }else{
	        	echo $url.$classname."类不存在";
	        }
        }else{
        	echo $url."该文件不存在";
        }
	}
	public function getM(){
		return (isset($_GET["m"])&&!empty($_GET["m"]))?$_GET["m"]:"index";
	}
	public function getC(){
		return (isset($_GET["c"])&&!empty($_GET["c"]))?$_GET["c"]:"index";
	}
	public function getA(){
		return (isset($_GET["a"])&&!empty($_GET["a"]))?$_GET["a"]:"index";
	}
	public function getP(){
		$id=isset($_GET["id"])?$_GET["id"]:"";
		$cid=isset($_GET["cid"])?$_GET["cid"]:"";
		$uid=isset($_GET["uid"])?$_GET["uid"]:"";
		$pid=isset($_GET["pid"])?$_GET["pid"]:"";
		return array(
			"id"=>$id,
			"cid"=>$cid,
			"uid"=>$uid,
			"pid"=>$pid
			);
	}
}
?>