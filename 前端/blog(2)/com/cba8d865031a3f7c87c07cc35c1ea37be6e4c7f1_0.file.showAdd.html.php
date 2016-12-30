<?php
/* Smarty version 3.1.30, created on 2016-10-20 03:55:01
  from "C:\wamp\www\blog\tpl\admin\showAdd.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580823f55d05d2_07643449',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'cba8d865031a3f7c87c07cc35c1ea37be6e4c7f1' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\tpl\\admin\\showAdd.html',
      1 => 1476889102,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580823f55d05d2_07643449 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form action="index.php?m=admin&c=cat&a=addcat"method="post">
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
	分类的名字<input type="text"name="cname"><br>
	<input type="submit"value="添加分类">
	</form>
</body>
</html><?php }
}
