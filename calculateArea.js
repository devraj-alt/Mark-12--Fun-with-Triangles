const inputs = document.querySelectorAll('.area-input');
const submitButton = document.querySelector('#calculate-btn');
const displayAnswer = document.querySelector('#display-answer');


function heightAndBaseofTrangle(h, b) {
    const heightBase = h * b;
    return heightBase;
}


function calculateAreaOfTriangle() {
    const heightBase = heightAndBaseofTrangle(Number(inputs[0].value), Number(inputs[1].value));
    const areaOfTriangle = heightBase / 2
    displayAnswer.innerText = "The Area of Triangle is " + areaOfTriangle + " cm";
}


submitButton.addEventListener('click', calculateAreaOfTriangle);