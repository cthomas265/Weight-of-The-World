var time = {};



var rightNow = moment().format("MMM Do YY");

var Time = function () {
    $("#currentDay").append(rightNow);
}

Time ();


// //convert to moment object
// var auditTask = function(taskEl) {
//     var date = $(taskEl)
//         .find("span")
//         .text()
//         .trim();
    
//     var currentTime = moment(date, "L").set("hour", 17);
    
//     // if time is in the past, add "badge-danger" class
//     if (time.isBefore(moment())) {
//         $(taskEl)
//         .find("span")
//         .addClass("badge-danger");
//     }
//     else if (Math.abs(moment().diff(time, "days")) <= 2) {
//         $(taskEl).addClass("list-group-item-warning");
//     }
// };

