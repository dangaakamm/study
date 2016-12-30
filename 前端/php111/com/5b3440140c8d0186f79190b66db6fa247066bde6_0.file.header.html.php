<?php
/* Smarty version 3.1.30, created on 2016-10-24 15:55:34
  from "E:\wamp\www\php\tpl\index\header.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580e12d60246b6_09001798',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5b3440140c8d0186f79190b66db6fa247066bde6' => 
    array (
      0 => 'E:\\wamp\\www\\php\\tpl\\index\\header.html',
      1 => 1477289945,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_580e12d60246b6_09001798 (Smarty_Internal_Template $_smarty_tpl) {
ob_start();
echo $_smarty_tpl->tpl_vars['userlogin']->value;
$_prefixVariable1=ob_get_clean();
if ($_prefixVariable1) {?>
欢迎 <?php echo $_smarty_tpl->tpl_vars['username']->value;?>
 回来
<a href="index.php?m=index&c=login&a=loginOut">注销</a>
<?php } else { ?>
<a href="index.php?m=index&c=login&a=login">登录</a>
<a href="index.php?m=index&c=login&a=reg">注册</a>
<?php }
}
}
