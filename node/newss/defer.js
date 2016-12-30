function defer(callback) {
    return new Promise(function (relove,reject) {
        callback(relove,reject);
    })
}
defer(function (relove,reject) {
    setTimeout(function () {
        console.log(1);
        relove();
    },1000)
}).then(function () {
   return defer(function (relove,reject) {
        setTimeout(function () {
            console.log(2);
            relove();
        },1000)
    })
})