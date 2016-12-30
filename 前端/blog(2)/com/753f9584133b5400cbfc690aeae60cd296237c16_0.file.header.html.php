<?php
/* Smarty version 3.1.30, created on 2016-10-24 07:47:05
  from "C:\wamp\www\blog\tpl\index\header.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580da0590a7ec0_82515861',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '753f9584133b5400cbfc690aeae60cd296237c16' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\tpl\\index\\header.html',
      1 => 1477288011,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580da0590a7ec0_82515861 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php ob_start();
echo $_smarty_tpl->tpl_vars['indexlogin']->value;
$_prefixVariable1=ob_get_clean();
if ($_prefixVariable1) {?>
	欢迎 <?php echo $_smarty_tpl->tpl_vars['username']->value;?>
 进入
	<a href="index.php?m=index&c=login&a=logout">
		注销
	</a>
	<?php } else { ?>
	<a href="index.php?m=index&c=login&a=login">
		登录
	</a>
	<a href="index.php?m=index&c=login&a=reg">
		注册
	</a>
	<?php }?>
</body>
</html><?php }
}
