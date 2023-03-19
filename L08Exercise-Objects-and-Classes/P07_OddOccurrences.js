function oddOccurrences(input) {

    let occurrences = {};

    let elementsArr = input.toLowerCase().split(" ");

    console.log();
    for (const element of elementsArr) {
        if (!occurrences.hasOwnProperty(element)) {
            occurrences[element] = 1;
        } else {
            occurrences[element] += 1;
        }
    }

    let output = "";
    Object.keys(occurrences).forEach(element => {
        if (occurrences[element] % 2 != 0) {
            output += `${element} `;
        }
    })

    console.log(output);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');