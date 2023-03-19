function dictionary(input) {

    let dictionary = {};

    for (const element of input) {
        let currentElement = JSON.parse(element);
        let currentElementArr = Object.entries(currentElement);
        let term = currentElementArr[0][0];
        let description = currentElementArr[0][1];

        dictionary[term] = description;
    }

    let dictionaryArr = Object.keys(dictionary)
    .sort((key1, key2) => key1.localeCompare(key2))
    .forEach(key => console.log(`Term: ${key} => Definition: ${dictionary[key]}`));
    

    
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );