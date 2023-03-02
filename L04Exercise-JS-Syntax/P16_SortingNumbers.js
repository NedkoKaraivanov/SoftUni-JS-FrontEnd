function sortingNumbers(numbersArr) {
        
    numbersArr.sort((num1, num2) => {
        let result = num1 - num2;
        return result;
    });

    let resultArr = [];

    for (let i = 0; i < Math.trunc(numbersArr.length / 2); i++) {
        resultArr.push(numbersArr[i]);
        resultArr.push(numbersArr[numbersArr.length - i - 1]);
    }

    if (numbersArr.length % 2 === 1) {
            resultArr.push(numbersArr[Math.trunc(numbersArr.length / 2)])
    }

    return resultArr;
}

sortingNumbers([1, 65, 3, 52, 48, 70, 63, 31, -3, 18, 56]);