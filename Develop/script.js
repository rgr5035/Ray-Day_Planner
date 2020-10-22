//variable declarations stored in global memory
var dateDisplay = document.getElementById('currentDay');
var timeColor = document.querySelectorAll('#text-color');
var saveBtnEl = document.getElementById('saveBtn');
var docText = document.querySelector('.description');

//displays the current date and time
dateDisplay.textContent = moment().format('LLLL');

function setColor() {
timeColor.setAttribute("class", "future");
}
 setColor();

//function to run code block of changing background color of text area based on the time
// function changeTimingColors () {

// if (moment().isSame('hour')) {
//     timeColor.setAttribute("class", "present");
// } else if (moment().isBefore('hour')) {
//     timeColor.setAttribute("class", "past");
// } else if (moment().isAfter('hour')) {
//     timeColor.setAttribute("class", "future");
// }}

// changeTimingColors();


//event handler for 'save' button to store text in local storage
saveBtnEl.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Im clicked');

    // var savedInput = 
})