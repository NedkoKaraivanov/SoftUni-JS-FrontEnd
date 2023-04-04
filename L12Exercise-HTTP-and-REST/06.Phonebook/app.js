function attachEvents() {
    const phonebookContainer = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadPhoneBookHandler);
    createBtn.addEventListener('click', phoneBookHandler);

    async function loadPhoneBookHandler() {
        try {
            const phoneBookRes = await fetch(BASE_URL);
            let phoneBookData = await phoneBookRes.json();
            phoneBookData = Object.values(phoneBookData);
            phonebookContainer.innerHTML = '';
            for (const { phone, person, _id } of phoneBookData) {
                const li = document.createElement('li');
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.id = _id;
                deleteBtn.addEventListener('click', deletePhoneBookHandler);
                li.textContent = `${person}: ${phone}`;
                li.appendChild(deleteBtn);
                phonebookContainer.appendChild(li);
            }
        } catch (err) {
            console.error(err);
        }

    }

    function phoneBookHandler() {
        const person = personInput.value;
        const phone = phoneInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }

        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadPhoneBookHandler();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
    }

    async function deletePhoneBookHandler() {
        const id = this.id; //this points to the element, that the event is attached to (deleteBtn) = event.currentTarget.id
        const httpHeaders = {
            method: 'DELETE'
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json()) //We don't need it (the response)
            .then(loadPhoneBookHandler)
            .catch((err) => {
                console.error(err);
            })

    }
}

attachEvents();