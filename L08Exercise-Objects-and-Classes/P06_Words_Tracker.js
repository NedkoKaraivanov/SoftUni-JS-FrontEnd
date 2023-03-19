function wordsTracker(input) {
    let matchingWords = {};

    let searcherWordsArr = input[0].split(" ");
    let textArr = input.slice(1);
    for (const searchedWord of searcherWordsArr) {
        matchingWords[searchedWord] = 0;

        for (const word of textArr) {

            if (searchedWord === word) {
                matchingWords[word] += 1;
            }
        }
    }

    let sortedMatchingWords = Object.keys(matchingWords)
        .sort((wordA, wordB) => matchingWords[wordB] - matchingWords[wordA])
        .forEach(word => console.log(`${word} - ${matchingWords[word]}`));
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);