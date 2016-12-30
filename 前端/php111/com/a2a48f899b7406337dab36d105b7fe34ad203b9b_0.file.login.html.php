<?php
/* Smarty version 3.1.30, created on 2016-10-24 16:07:55
  from "E:\wamp\www\php\tpl\index\login.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580e15bb152b65_50994832',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a2a48f899b7406337dab36d105b7fe34ad203b9b' => 
    array (
      0 => 'E:\\wamp\\www\\php\\tpl\\index\\login.html',
      1 => 1477281317,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580e15bb152b65_50994832 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<?php echo '<script'; ?>
 src="<?php echo JS_PATH;?>
jquery-3.1.0.js"><?php echo '</script'; ?>
>
	<link rel="stylesheet" href="<?php echo CSS_PATH;?>
main.css">
	 
</head> 
<body style="background-image:url(http://localhost/php/static/img/界面登陆.png)">
	<div class="box">
		<form action="index.php?m=index&c=login&a=checkLogin" method="post">
		<h1>登录页</h1>
		<div class="user">
			<span>用户名</span>
			<input type="text" autocomplete="off" name="username">
		</div>
		<div class="pass">
			<span>密&nbsp码</span>
			<input type="password" name="password">
		</div>
		<div class="submit">
			<input type="submit" value="登录">
			<a href="index.php?m=index&c=login&a=reg">注册</a>
		</div>
		</form>
	</div>
</body>
</html><?php }
}
