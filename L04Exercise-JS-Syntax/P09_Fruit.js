function fruit(typeFruit, grams, pricePerKilo) {

    let kilograms = grams / 1000;
    let finalPrice = kilograms * pricePerKilo;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${typeFruit}.`);
}

fruit('orange', 2500, 1.80);