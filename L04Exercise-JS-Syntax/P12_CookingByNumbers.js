function cookingByNumbers(...input) {

    let index = 0;
    let resultNumber = Number(input[index]);
    index++;

    while (index < input.length) {
        let currentCommand = input[index];

        switch (currentCommand) {

            case "chop":
                resultNumber /= 2;
                break;
            case "dice":
                resultNumber = Math.sqrt(resultNumber);
                break;
            case "spice":
                resultNumber += 1;
                break;
            case "bake":
                resultNumber *= 3;
                break;
            case "fillet":
                resultNumber *= 0.8;
                break;
        }

        console.log(resultNumber);

        index++;
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');