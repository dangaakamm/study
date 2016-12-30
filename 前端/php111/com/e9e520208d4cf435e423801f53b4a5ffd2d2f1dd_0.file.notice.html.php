<?php
/* Smarty version 3.1.30, created on 2016-10-24 16:08:48
  from "E:\wamp\www\php\tpl\index\notice.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580e15f001e396_87203732',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e9e520208d4cf435e423801f53b4a5ffd2d2f1dd' => 
    array (
      0 => 'E:\\wamp\\www\\php\\tpl\\index\\notice.html',
      1 => 1477281318,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580e15f001e396_87203732 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo CSS_PATH;?>
notice.css">
	<?php echo '<script'; ?>
 src="<?php echo JS_PATH;?>
jquery-3.1.0.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
>
     $(function(){
     	var num=3;
     	setInterval(function(){
     		num--;
     		if(num==0){
     			location.href=$("span").attr("aa");
     		}
     		$("span").html(num);
     	},1000)
     })

	<?php echo '</script'; ?>
>
</head>
<body>
	<div class="notice_box">
		 <div class="noticeTitle"><?php echo $_smarty_tpl->tpl_vars['noticeTitle']->value;?>
</div>
		 <div class="noticeCon">
		 	<span aa=<?php echo $_smarty_tpl->tpl_vars['noticeUrl']->value;?>
>3</span>
		 	秒后跳转<?php echo $_smarty_tpl->tpl_vars['noticeCon']->value;?>

		 	<p>为跳转单击<a href="<?php echo $_smarty_tpl->tpl_vars['noticeUrl']->value;?>
">此处</a></p>
		 </div>

	</div>
</body> 
</html>
<?php }
}
