<?php
/* Smarty version 3.1.30, created on 2016-10-20 13:13:19
  from "C:\wamp\www\blog\tpl\admin\showcat.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5808a6cfe8c327_07137380',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '0980ad17e0f5a2baf260cd3fe87e384d2a330093' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\tpl\\admin\\showcat.html',
      1 => 1476961988,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5808a6cfe8c327_07137380 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
bootstrap/css/bootstrap.min.css">
</head>
<body>
	<table class="table table-striped table-bordered table-hover text-center">
		<tr>
			<th class="text-center">id</th>
			<th class="text-center">分类名称</th>
			<th class="text-center">所属分类</th>
			<th class="text-center">操作</th>
		</tr>
		<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['trees']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
		<tr>
			<td><?php echo $_smarty_tpl->tpl_vars['v']->value["cid"];?>
</td>
			<td><?php echo $_smarty_tpl->tpl_vars['v']->value["cname"];?>
</td>
			<td><?php echo $_smarty_tpl->tpl_vars['v']->value["pid"];?>
</td>
			<td>
				<a href="?m=admin&c=cat&a=del&cid=<?php echo $_smarty_tpl->tpl_vars['v']->value['cid'];?>
" class="btn btn-success">删除</a>
				<a href="?m=admin&c=cat&a=showedit&cid=<?php echo $_smarty_tpl->tpl_vars['v']->value['cid'];?>
" class="btn btn-success">修改</a>
			</td>
		</tr>
		<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

	</table>
</body>
</html><?php }
}
