This website allows you to book an appointment with one of our great mentor.
The website show the shift available for each mentor 
the client choose one and enter his information that's will be stored.

* next amelioration needed : delete the shift that booked.
* iterate on the list on mentors read from the json file and display it on the website
(for now I did just a static list of 6 mentors on the index.html )

features :

1- Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app.
   - in the fuction submitForm1, I used an array to retrieve the informmation in the form. 

2- Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.
    - in the function initialisation on script.js, read the data stored in the json file and later will be dispalyed in the form.

3-Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).
    - the function validateEmail use a regular expression to validate an email.

4-Create a function that accepts two or more input parameters and returns a value that is calculated or determined by the inputs.
 - function initializeShifts

5- Retrieve data from a third-party API and use it to display something within your app.
   function getRandomActivity() call an API to get a random activity. An inteval of 5 seconds is set to call this function and get new activity each 5 seconds.