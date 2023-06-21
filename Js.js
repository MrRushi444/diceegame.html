document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".roll-button");

  button.addEventListener("click", function () {
    document.getElementById("diceSound");
    diceSound.play();
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document
      .querySelector(".img1")
      .setAttribute("src", "images/dice" + randomNumber1 + ".png");

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document
      .querySelector(".img2")
      .setAttribute("src", "images/dice" + randomNumber2 + ".png");

    var h1 = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
      h1.textContent = "🔻 Player 1 Wins";
      p1.classList.add("winner");
      p2.classList.remove("winner");
    } else if (randomNumber1 < randomNumber2) {
      h1.textContent = "Player 2 Wins 🔻";
      p1.classList.remove("winner");
      p2.classList.add("winner");
    } else {
      h1.textContent = "It's a Draw";
      p1.classList.add("winner");
      p2.classList.add("winner");
    }
  });
});
