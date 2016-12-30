<?php
/* Smarty version 3.1.30, created on 2016-10-19 18:00:35
  from "E:\azml\wamp\www\blog\tpl\admin\reg.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580798a32857c0_51210799',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '056434d44c3cbd2b3780e649cd366e0bb41f282d' => 
    array (
      0 => 'E:\\azml\\wamp\\www\\blog\\tpl\\admin\\reg.html',
      1 => 1476862140,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580798a32857c0_51210799 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
jquery.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
reg.js"><?php echo '</script'; ?>
>
	<style>
body{
	width:100%;
}
.box{
	width:300px;
	height:300px;
	box-shadow:0 0 5px #000;
	position:absolute;
	left:0;color:#fff;
	right:0; top:0; bottom:0;
	margin:auto;
	padding:20px;
	background:#f94877;
	border-radius:5px;
}
.box form a{
	color:#498BBF;
}
h4{
	font-size: 20px;
	text-align: center;
	color:#fff;
	font-weight: bold;
}
.user,.pass{
	margin:20px;
	color:#fff;
}
input{
	border-radius:10px;
	padding:10px;
}
.logoreg{
	width:100%;
	margin-top:30px;
	display:inline-block;
	text-align: center;
}
	</style>
</head>
<body class="bodys">
	<div class="box">
		<form action="index.php?m=admin&a=addUser" method="post">
			<h4>后台注册页面</h4>
			<div class="user">
				用户名: <input type="text" name="auser">
				<br>
				<div class="error"></div>
			</div>
			<div class="pass">
				用户名: <input type="password" name="apass">
				<br>
				<div class="error"></div>
			</div>
			<input type="submit" value="注册">
			点击<a href="index.php?m=admin&a=login">这里</a>登录
		</form>
	</div>                                              
</body>
</html><?php }
}
