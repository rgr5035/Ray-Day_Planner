# Ray-Day_Planner

Assignment Overview

    This week's homework requirement was to create a work day scheduler, with time blocks that will actively color change based on the current time, and will show either as past (grey), present (red), or future (green). Additionally, the text enrtered into the time blocks will be saved into local storage and will remain saved even if the page is reloaded or exited and re-entered. By using moment.js, I was also able to have the current date showing in the jumbotron header of the page.

Time Block Colors

    The time blocks were formatted utilizing the grid system by being placed in rows along with notated columms for each div. In order to generate the correct color for past, present, or future, I utilized the moment.js site and created an if/else statement for each color class to correspond with the correct hour of the day.

Text-area storage

    By utilizing local storage and assigning each row with a specific id, I was able to set the event handler on the 'save' button to save whatever content was entered by the user. If the user leaves or refreshes the page, the text will remain saved in the sepcified time block text area.

Screenshot

    ![image](https://user-images.githubusercontent.com/70773240/97114486-620fe580-16b6-11eb-8c26-104e0d62365b.png)

Links to Github & Live Site

    Github: https://github.com/rgr5035/Ray-Day_Planner

    Live Site: https://rgr5035.github.io/Ray-Day_Planner/
