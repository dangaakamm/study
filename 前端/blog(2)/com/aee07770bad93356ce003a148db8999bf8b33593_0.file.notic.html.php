<?php
/* Smarty version 3.1.30, created on 2016-10-24 05:38:00
  from "C:\wamp\www\blog\tpl\index\notic.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580d82185a5675_77881589',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'aee07770bad93356ce003a148db8999bf8b33593' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\tpl\\index\\notic.html',
      1 => 1476861268,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580d82185a5675_77881589 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>message</title>
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
jquery.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
notic.js"><?php echo '</script'; ?>
>
	<style>
.box{
	width:300px;
	height:300px;
	position:absolute;
	left:0;
	right:0;
	top:0 ;
	bottom:0;
	margin:auto;
	/*line-height: 300px;*/
	text-align: center;
	border:1px solid black;
}
span{
	color:red;
}
.noticTitle{
	text-align: center;width:100%;
	height:30px;
}
	</style>
</head>
<body>
	<div class="box">
		<div class="noticTitle"><?php echo $_smarty_tpl->tpl_vars['noticTitle']->value;?>
</div>
		<span url="<?php echo $_smarty_tpl->tpl_vars['noticUrl']->value;?>
">3</span>秒后返回<?php echo $_smarty_tpl->tpl_vars['noticPage']->value;?>
<br>
		没有跳转请点击<a href="<?php echo $_smarty_tpl->tpl_vars['noticUrl']->value;?>
">这里</a>
	</div>
</body>
</html>
<?php }
}
