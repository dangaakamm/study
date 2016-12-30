<?php
/* Smarty version 3.1.30, created on 2016-10-24 18:13:18
  from "E:\azml\wamp\www\blog\tpl\index\login.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580e331ec13a47_80393998',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '16212ab7cab2ce7d9c44d52179a2a893b0b6ae83' => 
    array (
      0 => 'E:\\azml\\wamp\\www\\blog\\tpl\\index\\login.html',
      1 => 1477279934,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580e331ec13a47_80393998 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
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
		<form action="index.php?m=index&c=login&a=checkLogin" method="post">
			<h4>用户登录页面</h4>
			<div class="user">
				用户名: <input type="text" name="username">
				<br>
				<div class="error"></div>
			</div>
			<div class="pass">
				用户名: <input type="password" name="password">
				<br>
				<div class="error"></div>
			</div>
			<input type="submit" value="登录">
			点击<a href="index.php?m=index&c=login&a=reg">这里</a>注册
		</form>
	</div>                                              
</body>
</html><?php }
}
