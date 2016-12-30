var str=`
<div>
 <%=abc%>     <!--asp .net语法-->
<%if(abc){%>
  <strong><%=abc%></strong>;
<%}%>
<%for(var i=0;i<10;i++){%>
 <em><%=i%></em>
<%}%>
</div>
`;
function complie(str){
    var obj={abc:"我是字符串"};
    var tpl=str.replace(/\n/g,"\\n").replace(/<%=([\s\S]+?)%>/g,function(a,b){
        return  "'+"+b+"+'";
    }).replace(/<%([\s\S]+?)%>/g,function(a,b){
        return  "'\n"+b+"tpl+='";
    })
    tpl="with(obj){\nvar tpl='"+tpl+"';\n return tpl}";
    return new Function("obj",tpl);
    // console.log(a(obj));
}
function render(str,data) {
    if(typeof str=="string"){
       return complie(str)(data);
    }else if(typeof str=="function"){
        return str(data);
    }
}
module.exports.render=render;
module.exports.complie=complie;




// var str="<div><%=abc%></div>";
// // var obj={abc:"我是谁"};
// var tpl=str.replace(/<%=([\s\S]+?)%>/g,function (a,b) {
//     return "'+obj."+b+"+'";
// })
// console.log(tpl);
// tpl="tpl='"+tpl+"';\nreturn tpl";
// console.log(tpl);
// var a=new Function("obj","with(obj){return abc}");
// console.log(a({abc:"我是谁"}))