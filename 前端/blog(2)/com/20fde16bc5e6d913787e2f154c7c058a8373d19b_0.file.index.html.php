<?php
/* Smarty version 3.1.30, created on 2016-11-01 16:35:42
  from "E:\azml\wamp\www\blog\tpl\index\index.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5818b64e290777_84823385',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '20fde16bc5e6d913787e2f154c7c058a8373d19b' => 
    array (
      0 => 'E:\\azml\\wamp\\www\\blog\\tpl\\index\\index.html',
      1 => 1478014529,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.html' => 1,
  ),
),false)) {
function content_5818b64e290777_84823385 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
common.css">
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
indexqt.css">
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
jquery.js"><?php echo '</script'; ?>
>
	<style>
.worklista{
	width: 490px;
    height: 100px;
    display:block;
}
.worklistbox{
	height:330px;
	overflow: hidden;
}
.content{
	width:100px;
	overflow: hidden;
}
	</style>
</head>
<!-- http://www.aiimg.com/web/201010/14999.html -->
<body class="body">
	<?php $_smarty_tpl->_subTemplateRender("file:header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

	<div class="bodybox">
		<div class="welcome">
			Welcome to my website!
		</div>
	<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
032.jpg" alt="" width="" class="backgroundimg"></div>
	<div class="indexbox">
		<div class="navbox">
			<ul class="nav">
				<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['data']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
				<li class="first">
					<a href="index.php?m=index&c=index&a=lists&cid=<?php echo $_smarty_tpl->tpl_vars['v']->value['cid'];?>
" class="firstnav"><?php echo $_smarty_tpl->tpl_vars['v']->value["cname"];?>
<img src="<?php echo IMG_PATH;?>
hover.gif" alt="" class="hover"></a>
					<ul class="sonbox">
						<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['v']->value["son"], 'v1');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v1']->value) {
?>
						<li class="son">
							<a href="index.php?m=index&c=index&a=lists&cid=<?php echo $_smarty_tpl->tpl_vars['v1']->value['cid'];?>
"><?php echo $_smarty_tpl->tpl_vars['v1']->value["cname"];?>
</a>
						</li>
						<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

					</ul>
				</li>
				<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

			</ul>
		</div>
		<div class="line">
			<div class="lineleft"></div>
			<div class="lineright"></div>
		</div>
		<div class="aboutme">
			<h4>about me</h4>
			<div class="aboutmebox">
				<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
me.jpg" alt="" width="200" style="float:left">
				<div class="information">
					<p>Remember, the brick walls are there for a reason.The brick walls are not there to keep us out.The brick walls are there to give us a chance to show how badly we want someting.Because the brick walls are there to stop the people who don't want it badly enough.They're there to stop the other people.</p>
					<ul class="introduce">
						<li>网名：陳默</li>
						<li>职业：Web前端制作、网站制作</li>
						<li>QQ技术交流群：1004635391</li>
						<li>Email：1004635391@qq.com</li>
					</ul>
					<li class="more">more about me</li>
			    </div>
			</div>
		</div>
		<div class="line">
			<div class="lineleft"></div>
			<div class="lineright"></div>
		</div>
		<div class="work">
			<h4>knoweledge is infinite</h4>
			<ul class="worklistbox">
				<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['lists']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
				<li class="worklist">
					<a href="<?php echo $_smarty_tpl->tpl_vars['v']->value['url'];?>
" class="worklista">
					<img src="<?php echo $_smarty_tpl->tpl_vars['v']->value['imgurl'];?>
" alt="" class="workimg">
                    <ul class="content">
                    	<li><?php echo $_smarty_tpl->tpl_vars['v']->value['title'];?>
</li>
                    	<li>查看更多</li>
                    </ul>
	                </a>
				</li>
				<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

				<!-- <li class="worklist">
					<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
php.png" alt="" class="workimg">
				                    <ul class="content">
				                    	<li>php语法</li>
				                    	<li>与后台联系</li>
				                    </ul>
				</li>
				<li class="worklist">
					<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
php.png" alt="" class="workimg">
				                    <ul class="content">
				                    	<li>php语法</li>
				                    	<li>与后台联系</li>
				                    </ul>
				</li>
				<li class="worklist">
					<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
php.png" alt="" class="workimg">
				                    <ul class="content">
				                    	<li>php语法</li>
				                    	<li>与后台联系</li>
				                    </ul>
				</li>
				<li class="worklist">
					<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
php.png" alt="" class="workimg">
				                    <ul class="content">
				                    	<li>php语法</li>
				                    	<li>与后台联系</li>
				                    </ul>
				</li>
				<li class="worklist">
					<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
php.png" alt="" class="workimg">
				                    <ul class="content">
				                    	<li>php语法</li>
				                    	<li>与后台联系</li>
				                    </ul>
				</li> -->
			</ul>
		</div>
        <div class="line">
			<div class="lineleft"></div>
			<div class="lineright"></div>
		</div>
		<div class="photo">
			<h4>my photo gallery</h4>
			<ul>
				<li class="photobox">
					<div class="photos">
					<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
057.png" alt=""></div>
					<div class="photofont">gallery #回忆</div>
				</li>
				<li class="photobox">
					<div class="photos">
					<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
056.png" alt=""></div>
					<div class="photofont">gallery #ლ(°◕‵ƹ′◕ლ)</div>
				</li>
				<li class="photobox">
					<div class="photos">
					<img src="<?php echo $_smarty_tpl->tpl_vars['IMG_PATH']->value;?>
054.png" alt=""></div>
					<div class="photofont">gallery #觅~蜜~幂</div>
				</li>
			</ul>
		</div>
		<div class="line">
		</div>


		<div class="kongjian"></div>
	</div>
</body>
</html>
<?php echo '<script'; ?>
>
//首页效果
	var ch=document.documentElement.clientHeight;
    $(".bodybox").css("height",ch);
    $(".welcome").click(function(){
    	$(".bodybox").slideUp();
    	$(".indexbox").slideDown();
    })

//导航悬浮效果
    $(".first").hover(function(){
        $(this).find("img").show();
        $(this).find(".sonbox").finish();
        $(this).find(".sonbox").slideDown();
    },function(){
        $(this).find(".sonbox").finish();
        $(this).find(".sonbox").slideUp();
        $(this).find("img").hide();
    })


<?php echo '</script'; ?>
><?php }
}
