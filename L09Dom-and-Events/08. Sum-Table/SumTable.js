function sumTable() {
    const trElements = Array.from(document.querySelectorAll('td:nth-child(even)'));
    trElements.forEach(elem => console.log(elem));
    let lastTrElement = document.getElementById('sum');
    let sum = 0;
    for (let index = 0; index < trElements.length - 1; index++) {
        sum += Number(trElements[index].textContent);
    }

    lastTrElement.textContent = sum;
}