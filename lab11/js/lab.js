// index.js - mess around with libraries and JQuery
// Author: Jason Rodriguez
// Date: 05/17/2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
$("#challenge").append("<button id='c-button'>Button</button>");
$("#problem").append("<button id='p-button'>Button</button>");
$("#reflection").append("<button id='r-button'>Button</button>");
$("#results").append("<button id='t-button'>Button</button>");


//$("#c-button").click(function(){
  $(this).parent().toggleClass("special");
//})

$("#p-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#t-button").click(function(){
  $(this).parent().toggleClass("special");
})

