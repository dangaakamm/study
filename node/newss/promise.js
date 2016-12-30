var async=require("async");
async.series([
    function(callback){
        setTimeout(function () {
            console.log(1);
            callback(null,"one");
        },1000)
    },
    function(callback){
        setTimeout(function(){
            console.log(2);
            callback(null,"two");
        },1000)
    }
],
function (error,results) {
    console.log(results);
});