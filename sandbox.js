const rulesBtn = document.querySelector(".rules-btn button");
const rules = document.querySelector(".rules-backgroud-close");
const closeRules = document.querySelector(".close-rules-div");

rulesBtn.addEventListener("click", () => {
  rules.style.display = "block";
});

closeRules.addEventListener("click", () => {
  rules.style.display = "none";
});
