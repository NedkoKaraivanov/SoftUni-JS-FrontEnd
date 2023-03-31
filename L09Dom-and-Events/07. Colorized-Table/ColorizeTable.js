function colorize() {
    const trElements = Array.from(document.querySelectorAll('tr:nth-child(even)'));
    trElements
        .forEach((tr) => {
            tr.style.background = 'Teal'
        });
}
