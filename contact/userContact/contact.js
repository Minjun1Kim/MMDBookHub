const contactForm = document.getElementById('contact-form');

const bookSelect = document.getElementById('book');
const bookArray = JSON.parse(localStorage.getItem('bookArray'));

if (bookArray) {
  bookArray.forEach((book) => {
    const option = document.createElement('option');
    option.value = book.id;
    option.textContent = book.title;
    bookSelect.appendChild(option);
  });
}

const ratingStars = document.querySelectorAll('input[type="radio"][name="rating"]');

function countSelectedStars() {
  let count = 0;
  ratingStars.forEach((star, index) => {
    if (star.checked) {
      count = 5 - index;
    }
  });
  return count;
}

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = contactForm.querySelector('#name').value;
  const email = contactForm.querySelector('#email').value;
  const book = bookSelect.options[bookSelect.selectedIndex].text; // Get the selected book title
  const message = contactForm.querySelector('#message').value;
  let rating = countSelectedStars();

  // Create new feedback object with current date and time
  const now = new Date();
  const newFeedback = {
    name: name, // Add name to feedback object
    email: email, // Add email to feedback object
    book: book, // Add book title to feedback object
    rating: rating, // Add rating to feedback object
    message: message, // Add message to feedback object
    timestamp: now, // Add timestamp to feedback object
    status: 'undismissed' // Add status to feedback object
  };
  
  // Get existing feedback array from localStorage, or create empty array if it doesn't exist
  let feedbackList = JSON.parse(localStorage.getItem('feedback')) || [];

  feedbackList.push(newFeedback);

  localStorage.setItem('feedback', JSON.stringify(feedbackList));

  contactForm.reset();

  alert('Thank you for your feedback!');
});
