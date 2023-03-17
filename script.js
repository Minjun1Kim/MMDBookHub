const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('open');
});

// Assuming you have retrieved the username from the login form
document.cookie = `username=${username}`;
// Retrieve the value of the username cookie
const cookieValue = document.cookie.split('; ')
  .find(row => row.startsWith('username='))
  ?.split('=')[1];

// Display the username on the page
if (cookieValue) {
  const usernameDisplay = document.createElement('div');
  usernameDisplay.textContent = `Welcome, ${cookieValue}!`;
  document.body.appendChild(usernameDisplay);
}
// Find the HTML element with the ID 'messageContainer'
const messageContainer = document.getElementById('messageContainer');

// Set the content of the messageContainer
messageContainer.innerHTML = 'Hello, this is a message displayed using JavaScript!';
