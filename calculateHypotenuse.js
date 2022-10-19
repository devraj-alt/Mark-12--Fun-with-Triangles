const sides = document.querySelectorAll(".input-field");
const submitButton = document.querySelector("#submit-btn");
const displayAnswer = document.querySelector("#display-answer");

function calculateSumOfSquares(a, b) {
  if (a > 0 && b > 0) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
  } else {
    return null;
  }
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  if (sumOfSquares) {
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    displayAnswer.innerText =
      "Hypotenuse is " + lengthOfHypotenuse.toFixed(2) + " cm";
  } else {
    displayAnswer.innerText = "Invalid Input";
  }
}

submitButton.addEventListener("click", calculateHypotenuse);
