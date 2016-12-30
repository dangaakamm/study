<?php
/* Smarty version 3.1.30, created on 2016-10-24 15:55:35
  from "E:\wamp\www\php\tpl\index\lists.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580e12d78cf856_74446919',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'f55a74d879fe0ba3f20da8c08441651fe95b52d0' => 
    array (
      0 => 'E:\\wamp\\www\\php\\tpl\\index\\lists.html',
      1 => 1477290914,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:tpl/index/header.html' => 1,
  ),
),false)) {
function content_580e12d78cf856_74446919 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php $_smarty_tpl->_subTemplateRender("file:tpl/index/header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<ul>
    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['data']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
    <?php if ($_smarty_tpl->tpl_vars['v']->value["status"] == 0) {?>
    <li>
        <a href="<?php echo $_smarty_tpl->tpl_vars['v']->value['url'];?>
"><?php echo $_smarty_tpl->tpl_vars['v']->value["title"];?>
</a>
    </li>
    <?php } else { ?>
    <li>
        <a href="index.php?m=index&c=show&a=show&sid=<?php echo $_smarty_tpl->tpl_vars['v']->value['sid'];?>
"><?php echo $_smarty_tpl->tpl_vars['v']->value["title"];?>
</a>
        <span>(VIP文章)</span>
    </li>
    <?php }?>
    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

</ul>
</body>
</html><?php }
}
