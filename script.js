const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('open');
});

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

document.getElementById('username').textContent = username;

