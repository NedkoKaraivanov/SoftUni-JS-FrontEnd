function factorialDivision(firstNum, secondNum) {

    let firstNumFactorial = calculateFactorial(firstNum);
    let secondNumFactorial = calculateFactorial(secondNum);

    console.log((firstNumFactorial / secondNumFactorial).toFixed(2));

    function calculateFactorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i; 
        }

        return result;
    }
}

factorialDivision(5, 2);