
function compile(str) {
    var tpl=str.replace(/\r\n/g,"\\n").replace(/<%=([\s\S]+?)%>/g,function (a,b) {
        return "'+"+b+"+'";
    }).replace(/<%([\s\S]+?)%>/g,function (a,b) {
        return "'\n"+b+"tpl+='";
    });
    tpl="with(obj){\nvar tpl='"+tpl+"';\nreturn tpl}";
    // console.log(tpl)
    return new Function("obj",tpl);
}
function render(str,obj) {
    if (typeof str=="string"){
       return compile(str)(obj)
    }
    if (typeof str=="function"){
       return str(obj)
    }
}
module.exports.render=render;
module.exports.compile=compile;
