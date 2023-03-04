function sumEvenAndOddDigits(number) {

    let numberInString = number.toString();
    let sumEven = 0;
    let sumOdd = 0;

    for (const digitInString of numberInString) {
        let digit = Number(digitInString);
        if (digit % 2 === 0) {
            sumEven += digit;
        } else {
            sumOdd +=digit;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

sumEvenAndOddDigits(1000435);