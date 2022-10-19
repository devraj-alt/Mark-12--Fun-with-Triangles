const inputs = document.querySelectorAll(".area-input");
const submitButton = document.querySelector("#calculate-btn");
const displayAnswer = document.querySelector("#display-answer");

function heightAndBaseofTrangle(h, b) {
  if (h > 0 && b > 0) {
    const heightBase = h * b;
    return heightBase;
  } else {
    return null;
  }
}

function calculateAreaOfTriangle() {
  const heightBase = heightAndBaseofTrangle(
    Number(inputs[0].value),
    Number(inputs[1].value)
  );
  if (heightBase) {
    const areaOfTriangle = heightBase / 2;
    displayAnswer.innerText =
      "The Area of Triangle is " + areaOfTriangle + " cm";
  } else {
    displayAnswer.innerText = "Invalid input";
  }
}

submitButton.addEventListener("click", calculateAreaOfTriangle);
