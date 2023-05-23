// index.js - make a simple conditional
// Author: Jason Rodriguez
// Date: 05/22/2023

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "RavenClaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p> The sorting Hat has sorted you inot " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})


