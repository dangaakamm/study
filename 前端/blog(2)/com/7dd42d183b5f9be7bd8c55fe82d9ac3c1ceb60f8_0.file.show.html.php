<?php
/* Smarty version 3.1.30, created on 2016-10-26 18:28:04
  from "E:\azml\wamp\www\blog\tpl\index\show.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5810d9940026f2_57777929',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '7dd42d183b5f9be7bd8c55fe82d9ac3c1ceb60f8' => 
    array (
      0 => 'E:\\azml\\wamp\\www\\blog\\tpl\\index\\show.html',
      1 => 1477499207,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.html' => 1,
    'file:tpl/index/header.html' => 1,
  ),
),false)) {
function content_5810d9940026f2_57777929 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
common.css">
	<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['CSS_PATH']->value;?>
show.css">
	<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
jquery.js"><?php echo '</script'; ?>
>
    <style>
.replybox{
    color:#fff;
}
    </style>
</head>
<body>
    <?php $_smarty_tpl->_subTemplateRender("file:header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

	<div class="con">
		<div class="conbox">
			<h1><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h1>
			<p><?php echo $_smarty_tpl->tpl_vars['con']->value;?>
<br>
				<img src="<?php echo $_smarty_tpl->tpl_vars['imgurl']->value;?>
" alt="" width="200">
			</p>
			<div class="line">
				<div class="lineleft"></div>
				<div class="lineright"></div>
			</div>
			<div class="messagebox">
				<h2>给我留言</h2>
				留言请<a href="" style="color:#fff">登录</a><br>
				<br>
				留言主题：<input type="text" name="title"><br><br>
				留言内容：<textarea name="con" id="" cols="30" rows="10"></textarea><br>
				<input type="button" value="留言" name="message">
				<ul class="liuyanbox">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['message']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?> 
					<li attr="<?php echo $_smarty_tpl->tpl_vars['v']->value['mid'];?>
">
						<span><?php echo $_smarty_tpl->tpl_vars['v']->value["title"];?>
<br>内容<?php echo $_smarty_tpl->tpl_vars['v']->value["con"];?>
</span>&nbsp;&nbsp;&nbsp;
                        <input type="button" value="点击回复" class="btn2">
						<ul class="replybox">
                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['v']->value["son"], 'v1');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v1']->value) {
?> 
							<li>回复：<?php echo $_smarty_tpl->tpl_vars['v1']->value["con"];?>
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
				<div class="replys">
	                <div class="reply">
	                	回复留言：<textarea name="con" id="" cols="30" rows="10"></textarea>
	                	<input type="button" value="回复" id="reply">
	                	<div class="del">x</div>
	                </div>
                </div>
			</div>
		</div>
    </div>

</body>
</html>
<?php echo '<script'; ?>
>
    $(":button").eq(0).click(function(){
        var title=$("input[name=title]").val();
        var con=$("textarea[name=con]").val();
        $.ajax({
            url:"index.php?c=message&a=add",
            data:{
                title:title,
                con:con,
                sid:<?php echo $_smarty_tpl->tpl_vars['sid']->value;?>

            },
            dataType:"json",
            type:"post",
            success:function(e){
                if(e.result=="ok"){
                    var lispan=$("<li attr='+e.mid+'><span></span></li>").appendTo(".liuyanbox").html(title+"<br>内容"+con);
                    $("<input type='button' value='点击回复' class='btn2'>").appendTo(lispan);
                    alert("留言成功");
                }else{
                    alert("留言失败");
                    location.href="index.php?m=index&c=login&a=login&id=<?php echo $_smarty_tpl->tpl_vars['sid']->value;?>
";
                }
            }
        })
    })
    var currentEle;
    var mid;
	$(".liuyanbox").delegate(".btn2","click",function(){
        var ww=$(window).width();
        var wh=$(window).height();
		$(".replys").css({
            width:$(window).width(),
            height:$(window).height(),
            background:"rgba(0,0,0,0.7)",
            position:"fixed",
            left:0,top:0
        }).toggle();
        mid=$(this).parent().attr("attr");
        currentEle=$(this).parent();


	})
	$(".del").click(function(){
		$(".replys").css({
			display:"none"
		});
	})
    
	$("#reply").click(function(){
        var hf=$("textarea").eq(1).val();
        $.ajax({
            url:"index.php?c=message&a=reply",
            type:"post",
            data:{
                con:hf,
                mid:mid
            },
            dataType:"json",
            success:function(e){
                if(e.result=="ok"){
                    $("<li>").appendTo(currentEle.find(".replybox")).html("回复："+hf);
                    alert("回复成功");
                }else if(e.result=="error"){
                    alert("回复失败");
                    location.href="index.php?m=index&c=login&a=login&id=<?php echo $_smarty_tpl->tpl_vars['sid']->value;?>
";
                }
            }

        })

    })
<?php echo '</script'; ?>
>



<!-- <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        html,body{
            width:100%;height:100%;
        }
        b{
            cursor: pointer;
        }
        .box{
            width:200px;height:200px;
            position: fixed;
            background:#fff;
            left:0;right:0;bottom: 0;
            top:0;margin:auto;
            display: none;
        }
        .close{
            text-align: right;
            cursor: pointer;
        }
        .mask{
            display: none;
        }
    </style>
    <?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
jquery.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
>
        $(function(){
            //提交留言
          $("#btn1").click(function(){
                 var val=$("textarea:eq(0)").val();
                 var obj={
                     sid:<?php echo $_smarty_tpl->tpl_vars['sid']->value;?>
,
                     con:val
                 };
                 $.ajax({
                     url:"index.php?m=index&c=message&a=add",
                     data:obj,
                     type:"post",
                     dataType:"json",
                     success:function(e){
                            if(e.result=="ok"){
                                var li=$("<li><span></span></li>").appendTo(".message").html(val);
                                $("<b>").appendTo(li).html("点击回复");
                            }else if(e.result=="error"){
                                location.href="index.php?m=index&c=login&a=login";
                            }
                     }

                 })



             })


            var mid;
            var currentEle;
            $(".message").delegate("b","click",function(){
                $(".mask").css({
                    width:$(window).width(),
                    height:$(window).height(),
                    background:"rgba(0,0,0,0.7)",
                    position:"fixed",
                    left:0,top:0
                })
                $(".mask").toggle();
                $(".box").toggle(100);
                mid=$(this).parent().attr("attr");
                currentEle=$(this).parent();
            })


            $(".close").click(function(){
                $(".mask").toggle();
                $(this).parent().toggle(100);
            })

            $("#btn2").click(function(){
                var val=$("textarea:eq(1)").val();
                $.ajax({
                    url:"index.php?m=index&c=message&a=replay",
                    type:"post",
                    data:{
                        con:val,
                        mid:mid
                    },
                    dataType:"json",
                    success:function(e){

                        if(e.result=="ok"){
                               $("<li>").appendTo( currentEle.find(".son")).html(val);

                        }else{
                            alert("回复失败");
                        }

                        $(".mask").toggle();
                        $(".box").toggle(100);
                    }
                })
            })




        })
    <?php echo '</script'; ?>
>
</head>
<body>

<?php $_smarty_tpl->_subTemplateRender("file:tpl/index/header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php echo $_smarty_tpl->tpl_vars['sid']->value;?>

  <h1><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h1>
   <p>
       <img src="<?php echo $_smarty_tpl->tpl_vars['imgurl']->value;?>
" alt="" width="200">
       <?php echo $_smarty_tpl->tpl_vars['con']->value;?>

   </p>

  留言:<textarea name="con"  cols="30" rows="10" ></textarea>
    <br>
    <input type="button" value="留言" id="btn1">


   <ul class="message">
     <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['arr']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
        <li attr="<?php echo $_smarty_tpl->tpl_vars['v']->value['mid'];?>
">
            <span><?php echo $_smarty_tpl->tpl_vars['v']->value["con"];?>
</span>
            <b>点击回复</b>
            <ul class="son">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['v']->value["son"], 'v1');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v1']->value) {
?>
                  <li><?php echo $_smarty_tpl->tpl_vars['v1']->value["con"];?>
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

<div class="mask"></div>
   <div class="box">
       <div class="close">
           X
       </div>
       回复内容:<textarea name="con"  cols="30" rows="10"></textarea>
       <input type="button" value="回复" id="btn2">
   </div>


</body>
</html> --><?php }
}
