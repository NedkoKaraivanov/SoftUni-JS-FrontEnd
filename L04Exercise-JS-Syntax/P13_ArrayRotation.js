function arrayRotation(array, countRotations) {

    countRotations %= array.length;

    for (let i = 1; i <= countRotations; i++) {

        let firstElement = array.shift();

        array.push(firstElement);
    }

    console.log(array.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);