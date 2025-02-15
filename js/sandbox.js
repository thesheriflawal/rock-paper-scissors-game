// Prevent animation on load
setTimeout(() => {
  document.body.classList.remove("preload");
}, 500);

// DOM
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRUles = document.querySelector(".modal");

const CHOICES = [
  {
    name: "paper",
    beats: ["rock", "spock"],
  },
  {
    name: "scissors",
    beats: ["paper", "lizard"],
  },
  {
    name: "rock",
    beats: ["scissors", "lizard"],
  },
  {
    name: "lizard",
    beats: ["spock", "paper"],
  },
  {
    name: "spock",
    beats: ["scissors", "rock"],
  },
];

const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results_result");

const resultWinner = document.querySelector(".results_winner");
const resultText = document.querySelector(".results_text");
const playAgainBtn = document.querySelector(".play-again");
const scoreNumber = document.querySelector(".score_number");
let score = 0;

// Game Logic
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function choose(choice) {
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displyWinner([choice, aichoice]);
}

function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}

function displayResults(results) {
  resultDivs.forEach((resultDiv, idx) => {
    setTimeout(() => {
      resultDiv.innerHTML = `
      <div class="choice ${results[idx].name}">
      <img src="images/icon-${results[idx].name}.svg" alt="${results[idx].name}" />
      </div>
      `;
    }, idx * 1000);
  });

  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
}

function displyWinner(results) {
  setTimeout(() => {
    const userWins = isWinner(results);
    const aiWins = isWinner(results.reverse());

    if (userWins) {
      resultText.innerHTML = "you win";
      resultDivs[0].classList.toggle("winner");
      keepScore(1);
    } else if (aiWins) {
      resultText.innerHTML = "you lose";
      resultDivs[1].classList.toggle("winner");
      keepScore(-1);
    } else {
      resultText.innerHTML = "draw";
    }
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  }, 1000);
}

function keepScore(point) {
  score += point;
  scoreNumber.innerText = score;
}

function isWinner(results) {
  return results[0].beats.includes(results[1].name);
}

// Play Again
playAgainBtn.addEventListener("click", () => {
  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");

  resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
  });

  resultText.innerHTML = "";
  resultWinner.classList.toggle("hidden");
  resultsDiv.classList.toggle("show-winner");
});

// Show/ Hide Rules
btnRules.addEventListener("click", () => {
  modalRUles.classList.toggle("show-modal");
});
btnClose.addEventListener("click", () => {
  modalRUles.classList.toggle("show-modal");
});
// modalClose.addEventListener("click", () => {
//   modalRUles.classList.toggle("show-modal");
// });
