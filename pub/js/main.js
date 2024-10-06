'use strict';

const navButton = document.querySelector("#nav-button");
const navList = document.querySelectorAll("nav ul li");
navButton.addEventListener('click', function () {
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.toggle("hidden");
    }
});

const history = [];
document.getElementById('plus').addEventListener('click', function() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    let result = number1 + number2;
    document.getElementById('result').textContent = `${result}`;
    const historyChoose = document.getElementById('choose-history').value;
    if (historyChoose == 'yes') {
        history.push(`${number1} + ${number2} = ${result}`);
    };
    changeHistory();
});
document.getElementById('minus').addEventListener('click', function() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    let result = number1 - number2;
    document.getElementById('result').textContent = `${result}`;
    const historyChoose = document.getElementById('choose-history').value;
    if (historyChoose == 'yes') {
        history.push(`${number1} - ${number2} = ${result}`);
    };
    changeHistory();
});
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    let result = number1 * number2;
    document.getElementById('result').textContent = `${result}`;
    const historyChoose = document.getElementById('choose-history').value;
    if (historyChoose == 'yes') {
        history.push(`${number1} * ${number2} = ${result}`);
    };
    changeHistory();
});
document.getElementById('devide').addEventListener('click', function() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    let result = Math.round((number1 / number2)*100) /100   ;
    document.getElementById('result').textContent = `${result}`;
    const historyChoose = document.getElementById('choose-history').value;
    if (historyChoose == 'yes') {
        history.push(`${number1} / ${number2} = ${result}`);
    };
    changeHistory();
});
document.getElementById('clear-history').addEventListener('click', function() {
    history.length = 0;
    changeHistory();
});
function changeHistory() {
    const historyElement = document.getElementById('historyContainer');
    historyElement.innerHTML = '';
    history.forEach(function(item) {
        const div = document.createElement('div');
        div.textContent = item;
        // div.className = 'history-item';
        historyElement.appendChild(div);
    });
};