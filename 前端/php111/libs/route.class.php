<?php
class route{
	protected static $module;
	protected static $control;
	protected static $action;
	protected static $param;
	function __construct(){
		// 通过self方式调用
		self::info();
		self::init();
	}
	protected static function init(){
		$url=ROOT_PATH.self::$module."/".self::$control."Control.class.php";
 
		if(is_file($url)){
			include $url;
			$classname=self::$control."Control";
            if(class_exists($classname)) {
                $obj = new $classname;
                if (method_exists($obj, self::$action)) {
                    call_user_func_array(array($obj, self::$action), array(self::$param));
                }else{
                    echo self::$action."此方法不存在";
                }
            }else{
                echo $classname."此类名不存在";
            }
		}else{
		    echo $url."这个类名不存在";
        }
	}
	protected static function info(){
		self::$module=isset($_GET["m"])&&!empty($_GET["m"])?$_GET["m"]:"index";
		self::$control=isset($_GET["c"])&&!empty($_GET["c"])?$_GET["c"]:"index";
		self::$action=isset($_GET["a"])&&!empty($_GET["a"])?$_GET["a"]:"index";

		$id=isset($_GET["id"])?$_GET["id"]:"";
		$cid=isset($_GET["cid"])?$_GET["cid"]:"";
		$uid=isset($_GET["uid"])?$_GET["uid"]:"";
		$pid=isset($_GET["pid"])?$_GET["pid"]:"";
        $sid=isset($_GET["sid"])?$_GET["sid"]:"";

        self::$param=array(
           "id"=>$id,
           "cid"=>$cid,
           "uid"=>$uid,
           "pid"=>$pid,
            "sid"=>$sid
       	);

	}
}
 
?>