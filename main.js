var divs = document.getElementsByClassName("pixel-container");
var colors = ["blue", "red", "green"];

function shuffleColor() {
  for (var i = 0; i < divs.length; i++) {
    var index = Math.floor(Math.random() * colors.length);
    var pick = colors[index];
    divs[i].style.background = pick;
  }
}
