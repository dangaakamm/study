<?php
/* Smarty version 3.1.30, created on 2016-10-21 08:21:21
  from "C:\wamp\www\blog\tpl\admin\index.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5809b3e173ce33_53806603',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e79b98ad4e73912002c59ce41b69f7dc40f9e315' => 
    array (
      0 => 'C:\\wamp\\www\\blog\\tpl\\admin\\index.html',
      1 => 1477030878,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5809b3e173ce33_53806603 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<!-- <link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
index.css"> -->
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
jquery.js"><?php echo '</script'; ?>
>
	<style>
	*{
		box-sizing:border-box;
	}
body,html{
	width:100%;
	height:100%;
	margin:0;
	padding:0;
	overflow: hidden;
}
header{
	width:100%;
	height:20%;
	text-align: center;
	line-height: 120px;
	font-size: 25px;
	border-bottom:1px solid black;
}
.con{
	width:100%;
	height:80%;
}
.left{
	height:100%;
    width:19%;
    float:left;border-right:1px solid black;
}
.right{
	width:80%;
    float:left;
	height:100%;
}
iframe{
	width:100%;
	height:100%;
}
.son{
	display:none;
}
.sonfirst{
	display:block;
}
	</style>
</head>
<body>
	<header>
		欢迎<?php echo $_smarty_tpl->tpl_vars['auser']->value;?>
进入后台管理系统
	</header>
	<div class="con">
		<div class="left">
			<ul>
				<li class="first">
					<span>用户管理</span>
					<ul class="son sonfirst">
						<li class="">
							<a href="index.php?m=admin&c=cat&a=showadd" >查询用户</a>
						</li>
						<li>
							<a href="index.php?m=admin&c=cat&a=showadd" target="iframes">添加用户</a>
						</li>
					</ul>
				</li>
				<li class="first">
					<span>分类管理</span>
					<ul class="son">
						<li>
							<a href="?m=admin&c=cat&a=showcat" target="iframes">查询分类</a>
						</li>
						<li>
							<a href="?m=admin&c=cat&a=showadd" target="iframes">添加分类</a>
						</li>
					</ul>
				</li>
				<li class="first">
					<span>内容管理</span>
					<ul  class="son">
						<li>
							<a href="index.php?m=admin&c=show&a=showadd" target="iframes">查询内容</a>
						</li>
						<li>
							<a href="index.php?m=admin&c=show&a=addcon" target="iframes">添加内容</a>
						</li>
					</ul>
				</li>
				<li class="first">
					<span>留言管理</span>
					<ul  class="son">
						<li>
							<a href="index.php?m=admin&c=cat&a=showadd">查询留言</a>
						</li>
						<li>
							<a href="index.php?m=admin&c=cat&a=showadd">添加留言</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="right">
			<iframe src="" frameborder="0" name="iframes"></iframe>
		</div>
	</div>
	
</body>
</html>
<?php echo '<script'; ?>
>
	$("span").click(function(){
		$("span").next().finish();
		$("span").next().slideUp();
		$(this).next().slideDown();
	})
<?php echo '</script'; ?>
><?php }
}
