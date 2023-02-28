function multiplicationTable(number) {

    let n = number;
    let result = 0;

    for (let i = 1; i <= 10; i++) {
        result = i * n;
        console.log(`${n} X ${i} = ${result}`);
    }
}

multiplicationTable([5]);