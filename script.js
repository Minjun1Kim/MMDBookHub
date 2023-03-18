const navigation = document.querySelector('.navigation');

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

document.getElementById('username').textContent = username;

const toggleButton = document.getElementById('dark-mode-toggle');
		const body = document.body;

		toggleButton.addEventListener('click', () => {
			body.classList.toggle('dark-mode');
		});