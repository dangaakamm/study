<?php
 session_start();
define("ROOT_PATH",dirname($_SERVER["SCRIPT_FILENAME"])."/");
	 
define("WEB_PATH","http://".$_SERVER["HTTP_HOST"].dirname($_SERVER["REQUEST_URI"])."/");
define("WEB_URL","http://".$_SERVER["HTTP_HOST"].$_SERVER["SCRIPT_NAME"]);

define("CSS_PATH",WEB_PATH."static/css/");
define("UPLOAD_PATH",ROOT_PATH."upload/");
define("JS_PATH",WEB_PATH."static/js/");
define("IMG_PATH",WEB_PATH."static/img/");

include ROOT_PATH."public/db.class.php";
include ROOT_PATH."libs/smarty/smarty.class.php";
include ROOT_PATH."libs/main.class.php";
include ROOT_PATH."libs/index.class.php";
include ROOT_PATH."libs/route.class.php";


$route=new route();
 
?>