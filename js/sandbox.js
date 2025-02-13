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
    beats: "rock",
  },
  {
    name: "paper",
    beats: "spock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "scissors",
    beats: "lizard",
  },
  {
    name: "spock",
    beats: "scissors",
  },
  {
    name: "spock",
    beats: "rock",
  },
  {
    name: "lizard",
    beats: "spock",
  },
  {
    name: "lizard",
    beats: "paper",
  },
  {
    name: "rock",
    beats: "lizard",
  },
  {
    name: "rock",
    beats: "scissors",
  },
];

const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results_result");

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
}

function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}

function displayResults(results) {
  resultDivs.forEach((resultDiv, idx) => {});
}

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
