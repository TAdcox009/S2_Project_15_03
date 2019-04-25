"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

 Author: Todd Adcox Jr
 Date:   4-22-19   
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

// 4. Return to the mas_register.js file in your editor. Directly below the initial comment section, insert an event listener for the window load event. Run an anonymous function in response to the event containing the following commands:
window.addEventListener("load", function () {
  // a. Call the calcCart() function (which you will create shortly).
  calcCart();

  // b. Create an onclick event handler for the regSubmit button that runs the sessionTest() function when the button is clicked.
  document.getElementById("regSubmit").onclick = sessionTest;

  // c. Create onblur event handlers for the input boxes with the IDs: fnBox, lnBox, groupBox, mailBox, phoneBox, and banquetBox, running the calcCart() function in response to each event.
  document.getElementById("fnBox").onblur = calcCart;
  document.getElementById("lnBox").onblur = calcCart;
  document.getElementById("groupBox").onblur = calcCart;
  document.getElementById("mailBox").onblur = calcCart;
  document.getElementById("phoneBox").onblur = calcCart;
  document.getElementById("banquetBox").onblur = calcCart;

  // d. Create an onchange event handler for the sessionBox selection list, running the calcCart() function when the selection list is changed.


  // e. Create an onclick event handler for the mediaCB check box, running the calcCart() function in response.


});