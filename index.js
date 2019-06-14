// --------------------------The First Dice----------------------------------
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageSource);


// ------------------------The Second Dice------------------------------------
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);


// ---------------------Checking for a Winner----------------------------------
if (randomNumber1 === randomNumber2) { //Result for DRAW
  document.querySelector(".result").textContent = "DRAW!";
  document.querySelector(".result").classList.add("draw");
  document.querySelectorAll("p")[0].innerHTML = "<b>Throw again!</b> ";
  document.querySelectorAll("p")[1].innerHTML = "<b>Throw again!</b> ";

} else if (randomNumber1 > randomNumber2) { //------ IF 1st player Wins-------
  document.querySelector(".result").textContent = "Player 1 WIN!";
  document.querySelector(".result").classList.add("player1Win");
  document.querySelectorAll("p")[0].innerHTML = "✌️ <b>I Win!</b> ";
  document.querySelectorAll("p")[1].innerHTML = "Let`s play again! ";
} else if (randomNumber1 < randomNumber2) { //----- IF Second player wins-------
  document.querySelector(".result").textContent = "Player 2 WIN!";
  document.querySelector(".result").classList.add("player2Win");
  document.querySelectorAll("p")[0].innerHTML = "Let`s play again!! ";
  document.querySelectorAll("p")[1].innerHTML = "<b>I Win!</b> ✌️   ";
}
