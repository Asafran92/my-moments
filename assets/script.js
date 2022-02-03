var currentDay = document.querySelector("#currentDay");


//setting up current day
var currentDayStart = moment().format('DD-MM-YYYY');
    console.log(currentDayStart);

currentDay = currentDayStart.textContent;
$("#currentDay").append(currentDayStart);
$("#currentDay").addClass("lead");
