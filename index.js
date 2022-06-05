const incrementBtn = document.getElementById("increment");
const countDisplay = document.getElementById("count-display");

let currCount = 0;
incrementBtn.addEventListener("click", () => {
  currCount++;
  countDisplay.innerText = currCount;
});
