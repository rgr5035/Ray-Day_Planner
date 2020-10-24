

$('#currentDay').html(moment().format('dddd, MMMM Do YYYY'));

$('.description').each(function(index, value) {
        

    var currentHour = $(this).attr("data-hour");
        
    if (currentHour < moment().hour()) {
        $(this).addClass("past");
    } else if (currentHour == moment().hour()) {
        $(this).addClass("present");
    } else if (currentHour > moment().hour()) {
        $(this).addClass("future");
    
    }
        //JSON parse, look to see if I need this                                                                                                              
    })


$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

      // $(".description").each(function ()  {

      //   var hourNUm = `hour-${$(this).attr("data-hour")}`

      //   $(this).val(localStorage.getItem(hourNum));

      // })

$('.saveBtn').on('click', function(e) {
      
    e.preventDefault();
    
    var textInput = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    
    localStorage.setItem(hour, textInput);

});
