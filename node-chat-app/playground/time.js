var moment = require("moment");


var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
date.add(1, "year").subtract(9, "months");
console.log(date.format("MMM Do YYYY, h:mm a"));

// var date = new Date();
// var month = ["Jan", "Feb"];
// console.log(date.getMonth());