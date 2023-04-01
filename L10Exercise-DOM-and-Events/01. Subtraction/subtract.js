function subtract() {
    const firstInput = document.getElementById('firstNumber');
    const secondInput = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    let firstNum = Number(firstInput.value);
    let secondNum = Number(secondInput.value);
    let resultAfterSubtract = firstNum - secondNum;

    result.textContent = resultAfterSubtract;
}