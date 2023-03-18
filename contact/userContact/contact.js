const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = contactForm.querySelector('#name').value;
  const email = contactForm.querySelector('#email').value;
  const subject = contactForm.querySelector('#subject').value;
  const message = contactForm.querySelector('#message').value;

  // Create new feedback object with current date and time
  const now = new Date();
  const newFeedback = {
    name: name,
    email: email,
    subject: subject,
    message: message,
    timestamp: now,
    status: 'undismissed'
  };

  // Get existing feedback array from localStorage, or create empty array if it doesn't exist
  let feedbackList = JSON.parse(localStorage.getItem('feedback')) || [];

  feedbackList.push(newFeedback);

  localStorage.setItem('feedback', JSON.stringify(feedbackList));

  contactForm.reset();

  alert('Thank you for your feedback!');
});
