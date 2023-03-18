const feedbackTableBody = document.querySelector('#feedback-table tbody');
const dismissSelectedButton = document.querySelector('#dismiss-selected-button');

function loadFeedback() {
  const feedbackList = document.querySelector('#feedback-table tbody');

  // Clear current feedback list
  feedbackList.innerHTML = '';

  // Get stored feedback data from local storage
  let feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];

  // Iterate over feedback data and create a new row for each feedback
  feedbackData.forEach((feedback, index) => {
    const row = document.createElement('tr');

    // Add feedback data to the row
    const feedbackCells = [
      index + 1,
      feedback.name,
      feedback.email,
      feedback.subject,
      feedback.message,
      new Date(feedback.timestamp).toLocaleString(),
    ];

    feedbackCells.forEach((cell) => {
      const cellElement = document.createElement('td');
      cellElement.innerText = cell;
      row.appendChild(cellElement);
    });

    // Add checkbox to mark feedback as dismissed
    const checkboxCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        row.classList.add('dismissed');
        setTimeout(() => {
          feedbackData.splice(index, 1);
          localStorage.setItem('feedback', JSON.stringify(feedbackData));
          row.remove();
        }, 500);
      }
    });
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);

    // Add reply button to send email to user
    const replyCell = document.createElement('td');
    const replyButton = document.createElement('button');
    replyButton.innerText = 'Reply';
    replyButton.classList.add('reply-button');
    replyButton.addEventListener('click', () => {
      const emailLink = `mailto:${feedback.email}?subject=Re: ${feedback.subject}`;
      window.location.href = emailLink;
    });
    replyCell.appendChild(replyButton);
    row.appendChild(replyCell);

    // Add row to feedback list
    feedbackList.appendChild(row);
  });
}

const dismissAllButton = document.querySelector('#dismiss-all-button');

function dismissAllFeedback() {
  localStorage.removeItem('feedback');
  feedbackTableBody.innerHTML = '';
}


document.addEventListener('DOMContentLoaded', () => {
  // Load feedback data from local storage and populate the feedback table
  loadFeedback();
});

dismissAllButton.addEventListener('click', () => {
    dismissAllFeedback();
});
  