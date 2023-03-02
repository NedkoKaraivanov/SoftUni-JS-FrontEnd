function findSubstring(searchedWord, text) {

    let isFound = false;

    let textArr = text.split(" ");

    for (let word of textArr) {
        
        if (word.toLowerCase() === searchedWord.toLowerCase()) {
            isFound = true;
            console.log(searchedWord);
            break;
        }
    }

    if (!isFound) {
        console.log(`${searchedWord} not found!`);
    }
}

findSubstring('javascript',
'JavaScript is the best programming language'
);