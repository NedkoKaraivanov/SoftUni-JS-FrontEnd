function sumDigits(number) {
    let sum = 0;

        let numberArr = number.toString().split(""); 

        numberArr.forEach(element => {
            sum += Number(element);
        });

    console.log(sum);
}

sumDigits(245678);