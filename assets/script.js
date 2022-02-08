hoursOfDay = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var currentDay = document.querySelector("#currentDay");


//setting up current day
var currentDayStart = moment().format('MM-DD-YYYY');
console.log(currentDayStart);

currentDay = currentDayStart.textContent;
$("#currentDay").append(currentDayStart);
$("#currentDay").addClass("lead");

//get row description into local storage

var container = document.querySelector(".container");


for (i = 0; i < hoursOfDay.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("row", "time-block");
    newDiv.innerHTML = `<div class="col-md-1 hour">${hoursOfDay[i]}</div>
    <textarea class="col-md-10 description" id="${hoursOfDay[i]}"></textarea>
    <button class="col-md-1 saveBtn" data-hour="${hoursOfDay[i]}"><i class="fas fa-save"></i></button>`;
    container.appendChild(newDiv);
}

var arrayOfBtns = document.querySelectorAll('.saveBtn')
// console.log(arrayOfBtns)

arrayOfBtns.forEach(
    function (button) {
        button.addEventListener(
            "click", function () {
                // console.log(button.dataset.banana)
                var correspondingText = document.getElementById(button.dataset.hour)
                console.log(correspondingText.value)
            }
        )
    }
)