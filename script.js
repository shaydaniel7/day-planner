getCurrentDay();
getCurrentTime ();

//functions
function getCurrentDay () { 
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
}

function getCurrentTime () { 
    $("#currentTime").text(moment().format("hh:mm:ss"));
}

