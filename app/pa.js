var main=require("./main.js");
var CronJob = require('cron').CronJob;
new CronJob('* */2 * * * *', function() {
    process.send("正在爬");
    main();
}, null, true, 'America/Los_Angeles');