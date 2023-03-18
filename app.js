const loginForm = document.getElementById('login-form');
const checkbox = document.getElementById('terms');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  // Get the values of the email and password fields
  // const email = loginForm.email.value;
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  
  // Check if the email and password are correct (this is just an example)
  if(checkbox.checked){
  if (username === 'admin' && password === 'password') {
    // Redirect the user to the admin page
    window.location.href = 'book.html';
  } else {
    // Redirect the user to the main page
    // localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', username);
    window.location.href = 'min_page.html';
  }
}});