
//setting the current date in the #currentDay class header of HTML
$('#currentDay').html(moment().format('dddd, MMMM Do YYYY'));


//for each loop to determine the hour timing of each block to correctly color-code to past, present or future
$('.description').each(function(index, value) {
        
    //setting the variable currentHour to the attribute 'data-hour' found in the textarea
    var currentHour = $(this).attr("data-hour");
        
    if (currentHour < moment().hour()) {
        $(this).addClass("past");
    } else if (currentHour == moment().hour()) {
        $(this).addClass("present");
    } else if (currentHour > moment().hour()) {
        $(this).addClass("future");
    }
    })

//setting local Storage to each <section> with the id of #hour-
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


//setting the onClick event handler to the .saveBtn <button> to save text into local storage
$('.saveBtn').on('click', function(e) {
      
    e.preventDefault();
    
    var textInput = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    
    localStorage.setItem(hour, textInput);

});
