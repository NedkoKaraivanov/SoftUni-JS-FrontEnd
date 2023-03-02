function pascalCaseSplitter(singleString) {

    let resultArr = [];

    let startIndex;
    let endIndex;
    let countCapital = 0;

    for (let i = 0; i < singleString.length; i++) {

        let currentSymbol = singleString[i].charCodeAt();
            
        if (currentSymbol >= 65 && currentSymbol <= 90) {
            countCapital++;

            if (countCapital > 1) {
                endIndex = i;
                resultArr.push(singleString.substring(startIndex, endIndex));
                startIndex = 0;
                endIndex = 0;
                countCapital = 1;
            }

            startIndex = i;
        }
    }

    resultArr.push(singleString.substring(startIndex));

    console.log(resultArr.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');