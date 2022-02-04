var currentDay = document.querySelector("#currentDay");


//setting up current day
var currentDayStart = moment().format('MM-DD-YYYY');
    console.log(currentDayStart);

currentDay = currentDayStart.textContent;
$("#currentDay").append(currentDayStart);
$("#currentDay").addClass("lead");

//get row description into local storage
