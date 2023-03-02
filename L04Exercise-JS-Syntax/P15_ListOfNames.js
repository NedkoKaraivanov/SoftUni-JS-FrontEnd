function listOfNames(namesArr) {

    namesArr.sort((a,b) => {
        let result = a.localeCompare(b);
        return result;
    }).forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"])