const displayCalculator = document.querySelector('.displayCalculator');
function insertNumbers(num) {
    if (displayCalculator.innerHTML.length < 15) {
        displayCalculator.innerHTML += num;
    }
}
function backSpace() {
    displayCalculator.innerHTML = displayCalculator.innerHTML.substring(0, displayCalculator.innerHTML.length - 1);
}
function clearCharacters() {
    displayCalculator.innerHTML = '';
}
function insertOperators(num) {
    const lastOperator = displayCalculator.innerHTML[displayCalculator.innerHTML.length - 1];
    if (lastOperator == '+' || lastOperator == '-' || lastOperator == '*' || lastOperator == "/") {
        displayCalculator.innerHTML = displayCalculator.innerHTML.substring(0, displayCalculator.innerHTML.length - 1);
        displayCalculator.innerHTML += num;
    }
    else {
        displayCalculator.innerHTML += num;
    }
}
function result() {
    if (eval(displayCalculator.innerHTML) !== undefined) {
        displayCalculator.innerHTML = eval(displayCalculator.innerHTML);
    }
    else {
        displayCalculator.innerHTML += '';
    }
}
