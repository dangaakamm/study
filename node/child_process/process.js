onmessage=function (ev) {
    var num=ev.data.num;
    setInterval(function () {
        postMessage({msg:"紫禁城"})
    },num)
}