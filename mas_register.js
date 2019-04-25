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

// An event listener for the window load event which will un an anonymous function in response.
window.addEventListener("load", function () {

   // Calls the calcCart() function.
   calcCart();

   // Creates an onclick event for the buttom that will run the sessionTest() function.
   document.getElementById("regSubmit").onclick = sessionTest;

   // Creates an onblur event for the input boxes and running the calcCart function.   
   document.getElementById("fnBox").onblur = calcCart;
   document.getElementById("lnBox").onblur = calcCart;
   document.getElementById("groupBox").onblur = calcCart;
   document.getElementById("mailBox").onblur = calcCart;
   document.getElementById("phoneBox").onblur = calcCart;
   document.getElementById("banquetBox").onblur = calcCart;

  // Creates an onchange event for the selection list and runs the calcCart() function when a selection list is changed.
   document.getElementById("sessionBox").onchange = calcCart;
// An onclick event for the mediaCB check box, running the calcCart() function in response. 
   document.getElementById("mediaCB").onclick = calcCart;
});

//This function is to provide a validation test for the conference session selection list.
function sessionTest() {
   confSession = document.getElementById("sessionBox");
   // Tests whether the selected index of the sesssionBox is equal to -1. If it is then the custom message “Select a Session Package”, will display.
   if (confSession.selectedIndex === -1) {
         confSession.setCustomValidity("Select a Session Package");
// If the selected index is equal to -1 then no message appears because the user put in the correct data.
   } else {
         confSession.setCustomValidity("");
   }
}

// This functions purpose is to calculate the registration cost and to save information about the customer’s choices while filling out the form.
function calcCart() {
   //  The variable confName stores the value firstName and lastName .
   sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;

// Stores the values of the group, email, phoneNumber, and banquetGuests fields in below variables. 
   sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;
   sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;
   sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;
   sessionStorage.confBanquet = document.forms.regForm.elements.banquetBox.value;

// Multiplies the value of the banquetGuests field by 55 and storesd the result in the session storage variable confbanquetcost. 
   sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;


   var selectedIndex = document.getElementById("sessionBox").selectedIndex;

// Tests if the selected index of the sessionBox is not equal to -1  otherwise store an empty text string and the value 0 respectively. 
   if (selectedIndex != -1) {
         sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text;
         sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox[selectedIndex].value;
   } else {
         sessionStorage.confSession = "";
         sessionStorage.confSessionCost = 0;
   }

   // If the user decides to purchase a media pack for $115 then its added to their total if they don't then nothing is added to their total for the pack.
   if (document.forms.regForm.elements.mediaCB.checked) {
         sessionStorage.confPack = "yes";
         sessionStorage.confPackCost = 115;
   } else {
         sessionStorage.confPack = "no";
         sessionStorage.confPackCost = 0;
   }
   // f.	Calculate the total registration cost.
   sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confPackCost);

   // Calls the writeSessionValues() function. 
   writeSessionValues();
}



// Displays the values of the session storage variables.
function writeSessionValues() {

// Sets the text content of span elements to the values of the session storage variables.
   document.getElementById("regName").textContent = sessionStorage.confName;
   document.getElementById("regGroup").textContent = sessionStorage.confGroup;
   document.getElementById("regEmail").textContent = sessionStorage.confMail;
   document.getElementById("regPhone").textContent = sessionStorage.confPhone;
   document.getElementById("regSession").textContent = sessionStorage.confSession;
   document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;
   document.getElementById("regPack").textContent = sessionStorage.confPack;

   // Displays the total amount.
   document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
}