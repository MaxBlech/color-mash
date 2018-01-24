var content = document.getElementById("content");
var colors = ["blue", "red", "green", "yellow", "purple", "magenta", "black", "white", "grey"];

(function () {
  for (var i = 0; i <= 4800; i++) {
    var pixelContainer = document.createElement("div");
    pixelContainer.classList.add("pixel-container");
    content.appendChild(pixelContainer);
  }
})();

var divs = document.getElementsByClassName("pixel-container");

function shuffleColor() {
  for (var i = 0; i < divs.length; i++) {
    var index = Math.floor(Math.random() * colors.length);
    var pick = colors[index];
    divs[i].style.background = pick;
  }
}
