var express=require("express");
var mysql=require("./mysql");
var async=require("async");
var body=require("body-parser");
var app=express();
app.listen(8899);
app.use(body.urlencoded({ extended: false }));
var child_process=require("child_process");
child_process.fork("pachong.js");

app.set("views","./views");
app.set("view engine","ejs");
app.use(express.static('public'));

app.get("/",function(req,res){
    mysql.query("select * from category",function(error,rows){
        res.render("index",{categorys:rows})
    })
})
/*app.get("/home/",function(req,res){
    var homes={};
    var categorys={};

    async.series([
        function(cb){

            mysql.query("select * from category",function(error,rows){
                categorys={categorys:rows};
                homes.categorys=categorys;console.log(categorys);
            })


            //cb();
        },
        function(cb){
            var lists0={};

            mysql.query("select * from article where pid=0",function(error,rows){
            lists0={lists0:rows};

 })
            homes.lists0=lists0;
            cb();
        },
    function(cb){
        var lists1={};

        mysql.query("select * from article where pid=1",function(error,rows){
            lists1={lists1:rows};

        })
        homes.lists1=lists1;
        cb();
    },
    function(cb){
        var lists2={};

        mysql.query("select * from article where pid=2",function(error,rows){
            lists2={lists2:rows};

        })
        homes.lists2=lists2;
        cb();
    },
        function(cb){
            var lists3={};

            mysql.query("select * from article where pid=3",function(error,rows){
                lists3={lists3:rows};

            })
            homes.lists3=lists3;
            cb();
        },

    function(cb){
        var lists4={};
        mysql.query("select * from article where pid=4",function(error,rows){
            lists4={lists4:rows};

        })
        homes.lists4=lists4;
        cb();
    }
    ],function(){
        res.render("home",homes)
    })


})*/
app.get("/home/",function(req,res){
    mysql.query("select * from article",function(error,rows){
        res.render("home",{lists:rows})
    })
})
app.get("/list/:id",function(req,res){
    var cid=req.params.id;
    mysql.query("select * from article where cid="+cid+" limit 0,5",function(error,rows){
        res.render("list",{lists:rows})
    })
})

app.get("/show/:id",function(req,res){
    var id=req.params.id;
    mysql.query("select * from article where id="+id,function(error,rows){
        res.render("show",{shows:rows})
    })
})
app.get("/list-video/",function(req,res){
    mysql.query("select * from article order by id desc",function(error,rows){
        res.render("list-video",{categorys:rows})
    })
})
app.get("/pe/",function(req,res){
    mysql.query("select * from category",function(error,rows){
        res.render("pe",{categorys:rows})
    })
})
app.get("/about-me/",function(req,res){
    mysql.query("select * from category",function(error,rows){
        res.render("about-me",{categorys:rows})
    })
})
app.get("/login/",function(req,res){
    mysql.query("select * from category",function(error,rows){
        res.render("login",{categorys:rows})
    })
})
app.get("/reg/",function(req,res){
    mysql.query("select * from category",function(error,rows){
        res.render("reg",{categorys:rows})
    })
})
app.post("/ajax",function(req,res){
    var cid=req.body.cid;
    var num=req.body.num*5;
    mysql.query("select * from article where cid="+cid+" limit "+num+",5",function(error,rows){
        if(!error){
            console.log(rows)
            res.send(rows);
        }

    })
})




