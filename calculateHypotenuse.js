const sides = document.querySelectorAll(".input-field");
const submitButton = document.querySelector("#submit-btn");
const displayAnswer = document.querySelector("#display-answer");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

  displayAnswer.innerText =
    "Hypotenuse is " + lengthOfHypotenuse.toFixed(2) + " cm";
}

submitButton.addEventListener("click", calculateHypotenuse);
