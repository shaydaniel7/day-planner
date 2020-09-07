var militaryTime;
var timeArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// function calls
getCurrentDay();
getCurrentTime();
getCurrentDate();
fillColor();
saveEventText();

//functions
function getCurrentDay() {
    $("#currentDay").text(moment().format("dddd"));
}

function getCurrentDate() {
    $("#currentDate").text(moment().format("MMM Do, YYYY"));
}

function getCurrentTime() {
    $("#currentTime").text(moment().format("h:mma"));
    militaryTime = (moment().format("HH"));
}

function fillColor() {
    for (var i = 0; i < timeArray.length; i++) {
        if (militaryTime > timeArray[i]) {
            $("#slot" + timeArray[i]).addClass("past");
        } else if (militaryTime == timeArray[i]) {
            $("#slot" + timeArray[i]).addClass("present");
        } else {
            $("#slot" + timeArray[i]).addClass("future");
        }
    }
}

function saveEventText() {

    $(".eventText").each(function () {
        var buttonId = $(this).siblings(".saveButton").attr("id");
        var eventText = localStorage.getItem(buttonId);
        $(this).val(eventText);
    })
}

saveEventText(); 
// save button event listener
$(".saveButton").on("click", function() {
    var evTime = $(this).attr("id");
    var evText = $(this).siblings(".eventText").val();
    localStorage.setItem(evTime, evText);
})

// clear button event listener
$("#clearButton").on("click", function () {
    var clear
    clear = $(".eventText").val("");
    localStorage.clear();
    return;
})

