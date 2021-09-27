const inputs = document.querySelectorAll('.angles');
const button = document.querySelector('#calculate-btn');
const displayAnswer = document.querySelector('#display-answer')

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles
}

function isTrangle() {
    sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if (sumOfAngles === 180) {
        displayAnswer.innerText = 'Its a Triangle'
    } else {
        displayAnswer.innerText = 'Its not a Triangle'
    }
}

button.addEventListener('click', isTrangle);