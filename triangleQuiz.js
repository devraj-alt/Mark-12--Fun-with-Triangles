const myForm = document.querySelector('.quiz-form');
const button = document.querySelector('#submit-btn');
const displayAnswer = document.querySelector('.display-answer');

const correctAnswers = ['90°', 'right angle', 'Equilateral', 'Hypotenuse', 'Scalene'];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(myForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }

    displayAnswer.innerText = "Your Score is " + score;
}


button.addEventListener('click', calculateScore);