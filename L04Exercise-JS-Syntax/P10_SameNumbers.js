function sameNumbers(number) {

    let sum = 0;
    let isSameNumbers = true;

    let arr = number.toString().split("");
    
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = Number(arr[i]);
        sum += currentNumber;
        if (i > 0) {
            let previousNumber = Number(arr[i - 1]);
            if (currentNumber !== previousNumber) {
                isSameNumbers = false;
            }
        }
    }

    console.log(isSameNumbers);
    console.log(sum);
}

sameNumbers(1234);