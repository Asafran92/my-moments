var currentDay = document.querySelector("#currentDay");


//setting up current day
var currentDayStart = moment().format('MM-DD-YYYY');
    console.log(currentDayStart);

currentDay = currentDayStart.textContent;
$("#currentDay").append(currentDayStart);
$("#currentDay").addClass("lead");

//get row description into local storage
//var saveTasks = function() {
//    localStorage.setItem("input", JSON.stringify(input));
//}
//$(".saveBtn").on("click", "input", function() {
//    saveTasks;
//});

//var saveTasksObject = {"p": "input"};
//localStorage.setItem("saveTasksObject", JSON.stringify(saveTasksObject));
//$(".saveBtn").on("click", "input", function(){
//    localStorage.setItem("p", "input");
//});

//$("#9 .description").val(localStorage.setItem);
localStorage.setItem('time-block', 'description');