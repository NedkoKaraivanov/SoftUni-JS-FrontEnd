function printMatrix(number) {
    return new Array(number).fill(new Array(number).fill(number))
    .forEach(row => console.log(row.join(" ")));

}

printMatrix(5);

