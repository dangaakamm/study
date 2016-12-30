<?php
/* Smarty version 3.1.30, created on 2016-10-21 10:04:29
  from "C:\wamp\www\blog\tpl\admin\showedit.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5809cc0db4c582_27328533',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5415f5eafffa3b5f65fedf81989bd6269c0a6c4a' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\tpl\\admin\\showedit.html',
      1 => 1476953393,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5809cc0db4c582_27328533 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form action="index.php?m=admin&c=cat&a=catedit&cid=<?php echo $_smarty_tpl->tpl_vars['cid']->value;?>
"method="post">
	所属分类<select name="pid" id="">
		<option value="0">一级分类</option>
		<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['trees']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
			<option value="<?php echo $_smarty_tpl->tpl_vars['v']->value['cid'];?>
" <?php if ($_smarty_tpl->tpl_vars['pid']->value == $_smarty_tpl->tpl_vars['v']->value["cid"]) {?> selected <?php }?>><?php echo $_smarty_tpl->tpl_vars['v']->value["cname"];?>
</option>
		<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

	</select>
	<br>
	分类的名字
	<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['cname']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
	<input type="text"name="cname" value="<?php echo $_smarty_tpl->tpl_vars['v']->value['cname'];?>
"><br>
	<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

	<input type="submit"value="修改">
	</form>
</body>
</html><?php }
}
