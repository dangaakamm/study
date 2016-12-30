$(function(){
    var newval,oldval;
    $("table").on("dblclick","td[attr]",function(){
        $(this).attr("contenteditable",true).focus();
       oldval = $(this).html();
    })
    $("table").on("blur","td[attr]",function(){
        $(this).attr("contenteditable",false);
        newval = $(this).html();
        if(newval != oldval){
            var that = this;
            $.ajax({
                url:"index.php?m=admin&c=show&a=update",
                type:"POST",
                data:{
                    sid:$(that).parent().find("td:eq(0)").html(),
                    attr:$(that).attr("attr"),
                    val:newval
                },
                success:function(e){
                    if(e=="ok"){
                        alert("修改成功");
                    }
                }
            })
        }
    })
})