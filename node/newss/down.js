var request=require("request");
var cheerio=require("cheerio");
var mysql=require("./mysql");
var async=require("async");

module.exports.readCategory=function (url,callback) {
    request(url,function (error,head,body) {
        var $=cheerio.load(body);
        var catarr=[];
        var arr=[];
        $(".col_nav ul li").each(function (index,obj) {
            if(index==2||index==3||index==4||index==6){
                catarr.push($(this).find("a"))
            }
        })
        for(var i=0;i<catarr.length;i++){
            var obj={};
            var text=catarr[i].html();
            var url=catarr[i].attr("href");
            text=unescape(text.replace(/&#x/g,"%u").replace(/;/g,""));
            obj.text=text;
            obj.curl=url;
            arr.push(obj);
        }
        callback(arr);
    })
}



module.exports.readList=function (url,callback) {
    request(url,function (error,head,body) {
        var $=cheerio.load(body);
        var urlarr=[];
        $(".juti_list").each(function(){
            var listurl=$(this).find("a").attr("href");
            urlarr.push(listurl);
        })
        callback(urlarr);
    })
}


module.exports.readArc=function (url,callback) {
    request(url,function (error,head,body) {
        var $=cheerio.load(body);
        var obj={};
        var imgs="";
        var atit=$("#artical_topic").html()?$("#artical_topic").html():"";
        atit=unescape(atit.replace(/&#x/g,"%u").replace(/;/g,""));
        obj.atite=atit;
        var acon=$("#main_content").html()?$("#main_content").html():"";
        acon=acon.replace(/<img[^src]+src=("[^"]+)/g,function(one,tow){
            imgs+=tow+";";
            return one;
        }).replace(/<[^>]+>|<\/[^>]+>/g,"").replace(/\n/g,"");
        acon=unescape(acon.replace(/&#x/g,"%u").replace(/;/g,""));
        obj.acon=acon;
        obj.aimg=imgs.slice(0,-1);

        callback(obj);
    })
}







// module.exports.readCategory=function (url,callback) {
//     request("http://news.ifeng.com",function (error,head,body) {
//         var $=cheerio.load(body);
//         var catarr=[];
//         $(".col_nav ul li").each(function (index,obj) {
//             if(index==2||index==3||index==4||index==6){
//                 catarr.push($(this).find("a"))
//             }
//         })
//         var arr=[];
//         for(var i=0;i<catarr.length;i++){
//             var text=catarr[i].html();
//             var url=catarr[i].attr("href");
//             text=unescape(text.replace(/&#x/g,"%u").replace(/;/g,""));
//             var obj={text:text,url:url};
//             arr.push(obj);
//         }
//         callback(arr);
//     })
// }