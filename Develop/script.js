//variable declarations stored in global memory

var dateDisplay = document.getElementById('currentDay');


//displays the current date and time
dateDisplay.textContent = moment().format('LLLL');

