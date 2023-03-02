function revealWords(words, text) {

    let wordsArr = words.split(", ");

    let textArr = text.split(" ");
    for (let i = 0; i < textArr.length; i++) {
         let currentWord = textArr[i];

         if (currentWord.includes("*")) {
            for (let j = 0; j < wordsArr.length; j++) {
                currentElement = wordsArr[j];

                if (currentWord.length === currentElement.length) {
                    textArr[i] = currentElement;
                    break;
                }
                
            }
         }

    }

    console.log(textArr.join(" "));
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);