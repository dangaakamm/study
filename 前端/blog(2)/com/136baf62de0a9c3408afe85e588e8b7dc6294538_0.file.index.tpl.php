<?php
/* Smarty version 3.1.30, created on 2016-10-18 11:10:55
  from "C:\wamp\www\10.17\tpl\index.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5805e71f0356e5_89301869',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '136baf62de0a9c3408afe85e588e8b7dc6294538' => 
    array (
      0 => 'C:\\wamp\\www\\10.17\\tpl\\index.tpl',
      1 => 1476781851,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5805e71f0356e5_89301869 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
index.css">
</head>
<body>
	<ul>
		<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['aa']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
		<li>
			<div>
				用户名：<a href="?m=admin&c=show&a=show&id=<?php echo $_smarty_tpl->tpl_vars['v']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['v']->value["title"];?>
</a>
			</div><br>
			<div>
				<!-- 密码：<span><?php echo $_smarty_tpl->tpl_vars['v']->value["con"];?>
</span> -->
			</div>
		</li>
		<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

	</ul>
</body>
</html><?php }
}
