// index.js - purpose and description here
// Author: Jason Rodriguez
// Date: 05/03/2023

// Constants

// Functions
function sortUsername() {
  var userName = window.prompt("Hello, please tell me your name so I can fix it");
  console.log("userName =", userName);
 // In the above code I am basically splitting the string into an array because strings cant be sorted
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
// In the above code I then sort the array 
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort=", nameArraySort);
// When its finished sorting it turns back into a string, basically joined
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted=", nameSorted);
  
  return nameSorted;

}

document.writeln("Fixed your name :) :", sortUsername(), "</br>");
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
