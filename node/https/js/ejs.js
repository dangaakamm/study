var counter=3;
function incCounter() {
    return ++counter;
}
incCounter();
console.log(counter);
module.exports.counter=counter;
module.exports.incIounter=incCounter;