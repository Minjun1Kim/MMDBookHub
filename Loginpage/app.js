const loginForm = document.getElementById('login-form');// Get the login form
const checkbox = document.getElementById('terms');// Get the checkbox

loginForm.addEventListener('submit', (event) => {// Listen for the form submission
  event.preventDefault(); // Prevent the default form submission behavior
  // Get the values of the email and password fields
  // const email = loginForm.email.value;
  const username = loginForm.username.value;// Get the values of the email and password fields
  const password = loginForm.password.value;// Get the values of the email and password fields
  
  // Check if the username and password are correct for admin
  if(checkbox.checked){// Check if the email and password are correct (this is just an example)
  if (username === 'admin' && password === 'password') {
    // Redirect the user to the admin page
    window.location.href = "/Admin_page/book.html";// Redirect the user to the admin page
  } else {
    // Redirect the user to the main page
    localStorage.setItem('userName', username);// Redirect the user to the main page
    window.location.href = 'index.html';// Redirect the user to the main page
  }
}});