async function loadRepos() {
	const username = document.getElementById('username');
	const usernameValue = username.value;
	const BASE_URL = 'https://api.github.com/users/'
	const list = document.getElementById('repos');

	list.innerHTML = '';

	try {
		const allRepos = await fetch(`${BASE_URL}${usernameValue}/repos`);
		const data = await allRepos.json();
		
		let fullName = '';
		let url = '';
		for (const obj of data) {
			debugger;
			fullName = obj.full_name;
			url = obj.html_url;
			
			let newLi = document.createElement('li');
			let newAnchor = document.createElement('a');
			newAnchor.setAttribute('href', url);
			newAnchor.textContent = fullName;
			newLi.appendChild(newAnchor);
			list.appendChild(newLi);
		}
	} catch (err) {
		let errLi = document.createElement('li');
		errLi.textContent(err.message);
		list.appendChild(errLi);
	}


}