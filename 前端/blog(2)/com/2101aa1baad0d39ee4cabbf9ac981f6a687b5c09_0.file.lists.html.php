<?php
/* Smarty version 3.1.30, created on 2016-10-24 09:57:30
  from "C:\wamp\www\blog\tpl\index\lists.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580dbeea89ef57_30013972',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '2101aa1baad0d39ee4cabbf9ac981f6a687b5c09' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\tpl\\index\\lists.html',
      1 => 1477290995,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580dbeea89ef57_30013972 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
common.css">
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
lists.css">
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
jquery.js"><?php echo '</script'; ?>
>
</head>
<body class="body">
	<div class="indexbox">
		<div class="navbox">
			<ul class="nav">
				<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['data']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
				<li class="first">
					<a href="<?php echo $_smarty_tpl->tpl_vars['v']->value['url'];?>
"><?php echo $_smarty_tpl->tpl_vars['v']->value["title"];?>
</a>
				</li>
				<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

			</ul>
		</div>
	</div>
</body>
</html>
<?php echo '<script'; ?>
>
	
<?php echo '</script'; ?>
><?php }
}
