var through=require("./through.js");
module.exports=(function () {
    return function () {
        return through.obj(function (a,b,c) {
       a.contents.forEach(function (obj) {
     obj.content=obj.content.toString().toUpperCase();
       })
            this.push(a);
            c();
        })
    }
})()