var content = document.getElementById("content");
var colors = ["cyan", "yellow", "magenta"];

(function () {
  for (var i = 0; i <= 4800; i++) {
    var pixelContainer = document.createElement("div");
    pixelContainer.classList.add("pixel-container");
    content.appendChild(pixelContainer);
  }
})();

var divs = document.getElementsByClassName("pixel-container");
var letters = document.getElementsByClassName("letter-container");

function shuffleHeader () {
  for (var i = 0; i < letters.length; i++) {
    var index = Math.floor(Math.random() * colors.length);
    var pick = colors[index];
    letters[i].style.color = pick;
  }
}
function addColor () {
  var color = document.getElementById("color-picker").value;
  colors.push(color);
}
function clearColors () {
  colors = ["cyan", "yellow", "magenta"];
  for (var i = 0; i < divs.length; i++) {
    // var index = Math.floor(Math.random() * colors.length);
    // var pick = colors[index];
    divs[i].style.background = "";
  }
}
function whitening() {
  for (var i = 0; i < letters.length; i++) {
    letters[i].style.color = "#ffffff";
  }
}
function shuffleColor() {
  for (var i = 0; i < divs.length; i++) {
    var index = Math.floor(Math.random() * colors.length);
    var pick = colors[index];
    divs[i].style.background = pick;
  }
}
shuffleColor();