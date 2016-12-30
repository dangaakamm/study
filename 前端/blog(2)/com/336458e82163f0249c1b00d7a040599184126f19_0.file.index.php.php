<?php
/* Smarty version 3.1.30, created on 2016-10-24 07:50:17
  from "C:\wamp\www\blog\index.php" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580da119d4a692_10606101',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '336458e82163f0249c1b00d7a040599184126f19' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\index.php',
      1 => 1477044402,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580da119d4a692_10606101 (Smarty_Internal_Template $_smarty_tpl) {
echo '<?php
';?>header("Content-Type:text/html;charset=utf-8");
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
<?php echo '?>';
}
}
