// var currentHr = moment().hour();
var timeBlock = $('.time-block');
var currentHr = moment().hour();

//displays current date and time in jumbotron
var Time = function () {
    document.getElementById("currentDay").innerHTML = moment().format(
        "MMMM Do YYYY, h:mm:ss a"
    );
    currentHr = moment().hour();
};
setInterval(Time, 1000);

$(".saveBtn").on("click", function () {
    // Get nearby values in JQuery
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, text);
});

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


// function to change color of textarea based on time
for (var i = 0; i < timeBlock.length; i++) {
    var time = timeBlock[i].id;
    var textArea = timeBlock[i].children[1];
    var timeHour = parseInt(time.substring(4, time.length));

    if (timeHour < currentHr) {
        textArea.classList.add("past");
    } else if (timeHour === currentHr) {
        textArea.classList.add("present");
    } else {
        textArea.classList.add("future");
    }
}