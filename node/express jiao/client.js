var http=require("http");
var opt={
    hostname:"localhost",
    port:3000,
    method:"post",
    path:"/add",
    headers:{"content-type":"application/x-www-form-urlencoded"}
}


// setInterval(function(){
var client=http.request(opt,function(res){
    res.on("data",function(data){
        console.log(data);
    })
})
client.write("username=zhangsan&password=123456");
client.end();
// },1000)
