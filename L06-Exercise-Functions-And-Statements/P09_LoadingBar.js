function loadingBar(number) {

    let countSymbolsFilled = number / 10;
    let countSymbolsLeft = 10 - countSymbolsFilled;

    if (countSymbolsFilled < 10) {
        console.log(`${number}% [${"%".repeat(countSymbolsFilled)}${".".repeat(countSymbolsLeft)}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
    }

}

loadingBar(30);