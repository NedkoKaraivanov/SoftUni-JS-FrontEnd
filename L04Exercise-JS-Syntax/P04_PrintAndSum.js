function printAndSum(numStart, numEnd) {

    let sum = 0;
    let output = "";

    for (let i = numStart; i <= numEnd; i++) {
        output = output + i + " ";
        sum += i;
    }

    console.log(output);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);