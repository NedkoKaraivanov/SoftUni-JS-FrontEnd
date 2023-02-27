function vacation(countPeople, typeGroup, dayOfWeek) {

    let pricePerDay;
    let totalPrice;

    if (typeGroup === "Students") {

        switch (dayOfWeek) {
            case "Friday":
                pricePerDay = 8.45;
                break;
            case "Saturday":
                pricePerDay = 9.80;
                break;
            case "Sunday":
                pricePerDay = 10.46;
                break;
        }

        if (countPeople >= 30) {
            totalPrice = (countPeople * pricePerDay) * 0.85;
        } else {
            totalPrice = countPeople * pricePerDay;
        }

    } else if (typeGroup === "Business") {

        switch (dayOfWeek) {
            case "Friday":
                pricePerDay = 10.90;
                break;
            case "Saturday":
                pricePerDay = 15.60;
                break;
            case "Sunday":
                pricePerDay = 16;
                break;
        }

        if (countPeople >= 100) {
            totalPrice = pricePerDay * (countPeople - 10);
        } else {
            totalPrice = pricePerDay * countPeople;
        }

    } else if (typeGroup === "Regular") {
        switch (dayOfWeek) {
            case "Friday":
                pricePerDay = 15;
                break;
            case "Saturday":
                pricePerDay = 20;
                break;
            case "Sunday":
                pricePerDay = 22.50;
                break;
        }

        if (countPeople >= 10 && countPeople <= 20) {
            totalPrice = (pricePerDay * countPeople) * 0.95;
        } else {
            totalPrice = pricePerDay * countPeople;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday"
    )