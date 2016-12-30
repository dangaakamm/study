mygulp.task("default",function () {
    mygulp.src("aa/").pipe(up()).pipe(mygulp.dest("bb"));
})