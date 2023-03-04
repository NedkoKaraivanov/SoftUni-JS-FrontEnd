function calculations(firstNum, secondNum, thirdNum) {
    const sum = (a, b) => a + b;
    const subtract = (mySum, num) => mySum - num;

    let result = subtract(sum(firstNum, secondNum), thirdNum);
    console.log(result);
}