<?php
/* Smarty version 3.1.30, created on 2016-10-18 10:59:39
  from "C:\wamp\www\10.17\tpl\show.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5805e47b9e3718_56707101',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'cc49c1abee8e1246d51da102508d5813932bfdf6' => 
    array (
      0 => 'C:\\wamp\\www\\10.17\\tpl\\show.tpl',
      1 => 1476780980,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5805e47b9e3718_56707101 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
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
				标题：<h1><?php echo $_smarty_tpl->tpl_vars['v']->value["title"];?>
</h1>
			</div><br>
			<div>
				内容：<p><?php echo $_smarty_tpl->tpl_vars['v']->value["con"];?>
</p>
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
