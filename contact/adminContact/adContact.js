const feedbackTableBody = document.querySelector('#feedback-table tbody');// Get stored feedback data from local storage
const dismissSelectedButton = document.querySelector('#dismiss-selected-button');// Get stored feedback data from local storage

function loadFeedback() {// Clear current feedback list
  const feedbackList = document.querySelector('#feedback-table tbody');// Clear current feedback list

  // Clear current feedback list
  feedbackList.innerHTML = '';// Get stored feedback data from local storage

  // Get stored feedback data from local storage
  let feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];// Iterate over feedback data and create a new row for each feedback

  // Iterate over feedback data and create a new row for each feedback
  feedbackData.forEach((feedback, index) => {
    const row = document.createElement('tr');// Add feedback data to the row

    // Add feedback data to the row
    const feedbackCells = [// Add checkbox to mark feedback as dismissed
      index + 1,// Add checkbox to mark feedback as dismissed
      feedback.name,// Add checkbox to mark feedback as dismissed
      feedback.email,// Add checkbox to mark feedback as dismissed
      feedback.subject,// Add checkbox to mark feedback as dismissed
      feedback.message,
      new Date(feedback.timestamp).toLocaleString(),
    ];

    feedbackCells.forEach((cell) => {// Add reply button to send email to user
      const cellElement = document.createElement('td');// Add reply button to send email to user
      cellElement.innerText = cell;// Add reply button to send email to user
      row.appendChild(cellElement);// Add reply button to send email to user
    });

    // Add checkbox to mark feedback as dismissed
    const checkboxCell = document.createElement('td');// Add checkbox to mark feedback as dismissed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {// Add checkbox to mark feedback as dismissed
      if (checkbox.checked) {
        row.classList.add('dismissed');
        setTimeout(() => {// Add checkbox to mark feedback as dismissed
          feedbackData.splice(index, 1);
          localStorage.setItem('feedback', JSON.stringify(feedbackData));
          row.remove();
        }, 500);
      }
    });
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);

    // Add reply button to send email to user
    const replyCell = document.createElement('td');// Add reply button to send email to user
    const replyButton = document.createElement('button');// Add reply button to send email to user
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

const dismissAllButton = document.querySelector('#dismiss-all-button');// Get stored feedback data from local storage

function dismissAllFeedback() {// Clear current feedback list
  localStorage.removeItem('feedback');
  feedbackTableBody.innerHTML = '';
}


document.addEventListener('DOMContentLoaded', () => {// Load feedback data from local storage and populate the feedback table
  // Load feedback data from local storage and populate the feedback table
  loadFeedback();
});

dismissAllButton.addEventListener('click', () => {// Clear current feedback list
    dismissAllFeedback();// Clear current feedback list
});
  