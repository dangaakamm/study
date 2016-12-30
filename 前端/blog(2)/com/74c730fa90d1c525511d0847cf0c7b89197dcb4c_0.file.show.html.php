<?php
/* Smarty version 3.1.30, created on 2016-10-24 11:34:37
  from "C:\wamp\www\blog\tpl\index\show.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580dd5add766d8_46319072',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '74c730fa90d1c525511d0847cf0c7b89197dcb4c' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\tpl\\index\\show.html',
      1 => 1477301655,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580dd5add766d8_46319072 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
common.css">
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
show.css">
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
jquery.js"><?php echo '</script'; ?>
>
</head>
<body>
	<div class="con">
		
		<div class="conbox">
			<h1><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h1>
			<p><?php echo $_smarty_tpl->tpl_vars['con']->value;?>
<br>
				<img src="<?php echo $_smarty_tpl->tpl_vars['imgurl']->value;?>
" alt="" width="200">
			</p>
			<div class="line">
				<div class="lineleft"></div>
				<div class="lineright"></div>
			</div>
			<div class="messagebox">
				<h2>给我留言</h2>
				留言请<a href="" style="color:#fff">登录</a><br>
				<br>
				留言主题：<input type="text" name="title"><br><br>
				留言内容：<textarea name="con" id="" cols="30" rows="10"></textarea><br>
				<input type="button" value="留言" name="message">
				<ul class="liuyanbox">
					<li>
						<span>1.留言</span>&nbsp;&nbsp;&nbsp;点击<input type="button" value="回复">
						<ul class="replybox">
							<li>h</li>
							<li>h</li>
							<li>h</li>
						</ul>
					</li>
					<li>2.留言</li>
					<li>3.留言</li>
				</ul>
				<div class="replys">
	                <div class="reply">
	                	回复留言：<textarea name="reply" id="" cols="30" rows="10"></textarea>
	                	<input type="button" value="回复">
	                	<div class="del">x</div>
	                </div>
                </div>
			</div>
		</div>
    </div>

</body>
</html>
<?php echo '<script'; ?>
>
	
<?php echo '</script'; ?>
><?php }
}
