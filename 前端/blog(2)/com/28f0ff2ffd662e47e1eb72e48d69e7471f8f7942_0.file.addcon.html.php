<?php
/* Smarty version 3.1.30, created on 2016-10-24 03:16:23
  from "C:\wamp\www\blog\tpl\admin\addcon.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580d60e7653d57_80242857',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '28f0ff2ffd662e47e1eb72e48d69e7471f8f7942' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\tpl\\admin\\addcon.html',
      1 => 1477064144,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580d60e7653d57_80242857 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
upload.js"><?php echo '</script'; ?>
>
	
	<style>
.imgbox{
 	width:200px;
}
.img{
	width:200px;
	height:150px;display:none;
}
.progress{
	width:0;
	height:30px;display:none;
	border:1px solid black;
	background:red;text-align: center;
}
	</style>
</head>
<body>
	<form action="index.php?m=admin&c=show&a=addconcon"method="post">
	所属分类<select name="pid" id="">
		<option value="0">一级分类</option>
		<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['trees']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
			<option value="<?php echo $_smarty_tpl->tpl_vars['v']->value['cid'];?>
"><?php echo $_smarty_tpl->tpl_vars['v']->value['cname'];?>
</option>
		<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

	</select>
	<br>
	标题：<input type="text" name="title"><br>
    内容：<textarea name="con" id="" cols="30" rows="10"></textarea><br>
    上传文件：<input type="file" class="file">
    <div class="imgbox">
    	<img src="" alt="" class="img">
    	<div class="progress"></div>
    </div><br>
    url：<br>
    文章类型：
    普通文章：<input type="radio" value="0" name="status" checked>
    登录文章：<input type="radio" value="1" name="status"><br>
    <input type="hidden" value="" name="imgurl">
	<input type="submit"value="添加内容">
	</form>
</body>
</html>
<?php echo '<script'; ?>
>
    var one=document.getElementsByClassName("file")[0];
    var two=document.getElementsByClassName("progress")[0];
    var three=document.getElementsByTagName("img")[0];
    var uploadObj = new upload("index.php?m=admin&c=show&a=upload",one,two,three,function(e){
        document.getElementsByName("imgurl")[0].value=e;
    });
    uploadObj.up();
	<?php echo '</script'; ?>
><?php }
}
