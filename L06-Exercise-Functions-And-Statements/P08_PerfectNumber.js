function perfectNumber(number) {

    let sum = 0;

    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            sum += i;
        }    
    }

    if (number > 0 && (number === sum)) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(9);