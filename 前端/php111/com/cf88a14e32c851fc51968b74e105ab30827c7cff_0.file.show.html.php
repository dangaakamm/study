<?php
/* Smarty version 3.1.30, created on 2016-10-24 16:13:03
  from "E:\wamp\www\php\tpl\index\show.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_580e16ef9b9ae3_89700494',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'cf88a14e32c851fc51968b74e105ab30827c7cff' => 
    array (
      0 => 'E:\\wamp\\www\\php\\tpl\\index\\show.html',
      1 => 1477318381,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:tpl/index/header.html' => 1,
  ),
),false)) {
function content_580e16ef9b9ae3_89700494 (Smarty_Internal_Template $_smarty_tpl) {
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
<style>
    body,html{
        margin:0;
        padding:0;
        width:100%;
        height:100%;
    }
    .box{
        width:200px;
        height:200px;
        position: fixed;
        left:0;
        right:0;
        bottom:0;
        top:0;
        margin:auto;
        display:none;

    }
    .asck{
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.6);
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        display:none;
    }
    b{
        cursor:pointer;
    }
    .close{
        text-align: right;
    }
</style>
<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['JS_PATH']->value;?>
jquery-3.1.0.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
>
    $(function(){
        $("#but1").click(function(){
            var val = $("textarea:eq(0)").val();
            $.ajax({
                url:"index.php?m=index&c=message&a=addmessage",
                type:"post",
                data:{
                    con:val,
                    sid:<?php echo $_smarty_tpl->tpl_vars['sid']->value;?>

                },
                dataType:"json",
                success:function(e){
                    if(e.result=="ok"){
                        var li =  $("<li><span></span>></li>").appendTo($(".message")).html(val);
                        $("<b>").appendTo(li).html("点击回复");
                    }else if(e.result == "error"){
                        location.href = "index.php?m=index&c=login&a=login";
                    }
                }
            })
        })
        var mid;
        $(".message").on("click","b",function(){
           mid =  $(this).parent().attr("attr");
            currentEle=$(this).parent();
            $(".box").toggle(100);
            $(".asck").toggle(100);
        })
        $(".close").click(function(){
            $(".box").toggle(100);
            $(".asck").toggle(100);
        })
        $("#but2").click(function(){
            var val = $("textarea:eq(1)").val();
            $.ajax({
                url:"index.php?m=index&c=message&a=addreply",
                type:"post",
                data:{
                    mid:mid,
                    con:val
                },
                dataType:"json",
                success:function(e){
                   if(e.result == "ok"){
                       $("<li></li>").appendTo( currentEle.find(".son")).html(val);
                   }
                }
            })
        })
    })
<?php echo '</script'; ?>
>
<body>
<?php $_smarty_tpl->_subTemplateRender("file:tpl/index/header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['data']->value, 'v');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
?>
<h1><?php echo $_smarty_tpl->tpl_vars['v']->value["title"];?>
</h1>
<p><?php echo $_smarty_tpl->tpl_vars['v']->value["con"];?>
</p>
<img src="<?php echo $_smarty_tpl->tpl_vars['v']->value['imgurl'];?>
" alt="">
<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

<div>
    留言：
    <textarea name="con" cols="30" rows="10"></textarea>
    <input type="button" value="留言" id="but1">
</div>
<div class="asck"></div>
<div>
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
                <il><?php echo $_smarty_tpl->tpl_vars['v1']->value["con"];?>
</il>
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
<div class="box">

    回复：
    <div class="close">
    X
    </div>
    <textarea name="" cols="30" rows="10"></textarea>
    <input type="button" value="回复" id="but2">
</div>
</body>
</html><?php }
}
