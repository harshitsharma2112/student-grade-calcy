const englishMarks = document.getElementById("english-marks");
const scienceMarks = document.getElementById("science-marks");
const mathsMarks = document.getElementById("maths-marks");
const hindiMarks = document.getElementById("hindi-marks");
const computerMarks = document.getElementById("computer-marks");
const form = document.getElementById('form-data');
const footerSide = document.getElementById('footer-side');
const resetButton = document.getElementById('reset-button');
const percentageElement = document.getElementById('percentage');
const totalNumberElement = document.getElementById('total-number');
const gradeElement = document.getElementById('grade');
const statusElement = document.getElementById('status');

function percent(result){
    return (100*result)/500;
}

function grade(percentage){
    if (percentage>=90) {
        return 'A'
    }
    else if (percentage >= 80 & percentage <= 89) {
        return 'B'
    }
    else if (percentage >= 70 & percentage <= 79) {
        return 'C'
    }
    else if (percentage >= 60 & percentage <= 69) {
        return 'D'
    }
    else if (percentage >= 33 & percentage <= 59) {
        return 'E'
    }
    else{
        return 'F'
    }
}

function statusFunction(percentage){
    if (percentage >= 33) {
        return 'Pass'
    }
    else{
        return 'Fail'
    }
}

function formDataFunction(event){
    event.preventDefault();

    let englishValue = +englishMarks.value;
    let scienceValue = +scienceMarks.value;
    let mathsValue = +mathsMarks.value;
    let hindiValue = +hindiMarks.value;
    let computerValue = +computerMarks.value;

    let result = englishValue + scienceValue + mathsValue + hindiValue + computerValue;
    footerSide.style.display = 'block';

    totalNumberElement.textContent = result;

    let percentage = percent(result);
    percentageElement.textContent = percentage;

    let gradeValue = grade(percentage);
    gradeElement.textContent = gradeValue;

    let statusValue = statusFunction(percentage);
    statusElement.textContent = statusValue;


}

function resetButtonFunction(){
    footerSide.style.display = 'none';
}

form.addEventListener('submit', formDataFunction);
resetButton.addEventListener('click', resetButtonFunction)
