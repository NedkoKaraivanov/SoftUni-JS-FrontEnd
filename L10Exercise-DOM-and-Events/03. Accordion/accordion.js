function toggle() {
    const btnElement = document.getElementsByClassName('button')[0];
    const extraDiv = document.getElementById('extra');

    if (btnElement.textContent === 'More') {
        extraDiv.style.display = 'block';
        btnElement.textContent = 'Less';
    } else {
        extraDiv.style.display = 'none';
        btnElement.textContent = 'More';
    }
}