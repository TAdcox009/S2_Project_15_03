"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

 Author: Todd Adcox Jr
 Date:   4-22-19    


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/


// Adds an event listener that runs the writeSessionValues() variable when the page loads.

window.addEventListener("load", writeSessionValues);

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