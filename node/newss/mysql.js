// var mysql=require("mysql");
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'newss'
// });
//
// connection.connect();
//
// connection.query(`insert into category (cname,curl) values ('${cname}','${curl}')`, function(err, result) {
//     if (err) throw err;
//     if(result){
//         res.render("message")
//     }
// });
// module.exports=connection;


var mysql=require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'newss'
});

connection.connect();
module.exports=connection;