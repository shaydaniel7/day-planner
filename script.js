var militaryTime;
var timeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

getCurrentDay();
getCurrentTime();
fillColor();

//functions
function getCurrentDay() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
}

function getCurrentTime() {
    $("#currentTime").text(moment().format("hh:mm"));
    militaryTime = (moment().format("HH"));
}

function fillColor() {
    for (var i = 0; i < timeArray.length; i++) {
        console.log(document.getElementById("slot" + timeArray[i]));
        if (militaryTime > timeArray[i]) {
            $("#slot" + timeArray[i]).addClass("past");
        } else if (militaryTime == timeArray[i]) {
            $("#slot" + timeArray[i]).addClass("present");

        } else {
            $("#slot" + timeArray[i]).addClass("future");

        }

    }

}

