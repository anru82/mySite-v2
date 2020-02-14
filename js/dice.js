// change images

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImages1 = ("images/dice" + randomNumber1 + ".png");
var diceImages2 = ("images/dice" + randomNumber2 + ".png");
document.querySelector(".img1").setAttribute("src", diceImages1);
document.querySelector(".img2").setAttribute("src", diceImages2);

// change images


// change title

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// change title
