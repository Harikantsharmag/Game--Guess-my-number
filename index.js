// Declare variables for random number and score
let random;
let i = 20;

// Selecting the check and reset buttons
let btnCheck = document.querySelector(".check");
let btnAgain = document.querySelector(".again");

// Generate a random number between 1 and 20
random = Math.floor(Math.random() * 20 + 1);

// Function to update high score if current score is higher
function highScore() {
  if (
    Number(document.querySelector(".high-score").textContent) <
    Number(document.querySelector(".score").textContent)
  ) {
    document.querySelector(".high-score").textContent =
      document.querySelector(".score").textContent;
  }
}

// Game logic when "Check" button is clicked
btnCheck.addEventListener("click", function () {
  let guessNumber = parseInt(document.querySelector(".guess").value);
  let reaction = document.querySelector(".reaction");
  
  // Validate if the input is between 1 and 20
  if (guessNumber > 20 || guessNumber < 1 || !guessNumber) {
    alert("❗ Please enter a valid number between 1 and 20");
  } else if (guessNumber == random) {
    // If the guess is correct, display success message and update score
    reaction.textContent = "🎉 Correct Number !";
    document.querySelector(".unknown-num").textContent = random;
    document.querySelector(".score").textContent = i;
    highScore();
    document.querySelector("body").style.backgroundColor = "#47c47f";
  } else if (guessNumber > random) {
    // If guess is too high, reduce score and show message
    reaction.textContent = "Too High !";
    i = i - 1;
    document.querySelector(".score").textContent = i;
    document.querySelector("body").style.backgroundColor = "#cc5e5e";
  } else if (guessNumber < random) {
    // If guess is too low, reduce score and show message
    reaction.textContent = "Too Less !";
    i = i - 1;
    document.querySelector(".score").textContent = i;
    document.querySelector("body").style.backgroundColor = "#cc5e5e";
  }
});

// Reset the game when "Again" button is clicked
btnAgain.addEventListener("click", function () {
  // Reset score, random number, input field, and feedback
  i = 20;
  random = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".guess").value = "";
  document.querySelector(".unknown-num").textContent = "?";
  document.querySelector(".reaction").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "rgb(32, 31, 32)";
  document.querySelector(".score").textContent = 20;
});
