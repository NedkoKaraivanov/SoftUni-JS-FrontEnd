function modernTimes(text) {

    let textArr = text.split(" ");

    let specialWords = [];

    for (let i = 0; i < textArr.length; i++) {
        let currentWord = textArr[i];

        if (currentWord.includes("#") && currentWord.length > 1) {

            let isValid = true;

            for (let j = 1; j < currentWord.length; j++) {
                let symbol = currentWord[j].charCodeAt();
                if ((symbol >= 65 && symbol <= 90) || (symbol >= 97 && symbol <= 122)) {
                    continue;
                } else {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                specialWords.push(currentWord.replace("#", ""));
            }
        }
        
    }

    for (const word of specialWords) {
        console.log(word);
    }
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');