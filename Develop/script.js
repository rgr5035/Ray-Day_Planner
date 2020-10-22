//variable declarations stored in global memory

var dateDisplay = document.getElementById('currentDay');
var timeColor = document.getElementById('text-color');

//displays the current date and time
dateDisplay.textContent = moment().format('LLLL');

function changeTimingColors () {

if (moment().isSame('LLLL')) {
    timeColor.setAttribute("class", "present");
} }

changeTimingColors();