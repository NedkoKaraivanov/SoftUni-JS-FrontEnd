function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons
        .forEach((button) => {
            button.addEventListener('click', toggleInformation);
        });

    function toggleInformation(event) {
        const btn = event.currentTarget;
        const currentProfile = btn.parentElement;
        const children = Array.from(currentProfile.children);
        const unlockRadioInput = children[4];
        const additionInformationDiv = children[9];

        if (unlockRadioInput.checked) {
            if (btn.textContent === 'Show more') {
                additionInformationDiv.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                additionInformationDiv.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}