const http=require("http");

var serve=http.createServer(function (req,res) {
    // var status=req.url.substr(1);
    console.log(req)
    res.writeHeader(status,{'content-Type':'text/plain'});
    // res.end(http.STATUS_CODES[status])
}).listen(3000);