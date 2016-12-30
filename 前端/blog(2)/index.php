<?php
header("Content-Type:text/html;charset=utf-8");
// echo "<pre>";
// var_dump($_SERVER);
define("ROOT_PATH",dirname($_SERVER["SCRIPT_FILENAME"])."/");
define("WEB_PATH","http://".$_SERVER["HTTP_HOST"].dirname($_SERVER["REQUEST_URI"])."/");
define("WEB_URL","http://".$_SERVER["HTTP_HOST"].$_SERVER["SCRIPT_NAME"]);
// echo ROOT_PATH;
 // echo WEB_PATH;
// echo WEB_URL;
define("CSS_PATH",WEB_PATH."static/css/");
define("JS_PATH",WEB_PATH."static/js/");
define("UPLOAD_PATH",WEB_PATH."upload/");
define("IMG_PATH",WEB_PATH."static/img/");
include ROOT_PATH."public/db.class.php";
include ROOT_PATH."libs/smarty/Smarty.class.php";
include ROOT_PATH."libs/route.class.php";
include ROOT_PATH."libs/main.class.php";
include ROOT_PATH."libs/index.class.php";
$route=new route();
$route->init();
?>