<?php
/* Smarty version 3.1.30, created on 2016-10-19 17:07:08
  from "E:\azml\wamp\www\blog\tpl\admin\showAdd.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58078c1c5b8d84_55834903',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '58787c0e71bb7c76e3d01c888116e1954c8fe02c' => 
    array (
      0 => 'E:\\azml\\wamp\\www\\blog\\tpl\\admin\\showAdd.html',
      1 => 1476889101,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58078c1c5b8d84_55834903 (Smarty_Internal_Template $_smarty_tpl) {
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
