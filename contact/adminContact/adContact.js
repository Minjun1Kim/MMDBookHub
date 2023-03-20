const feedbackTableBody = document.querySelector('#feedback-table tbody');

function loadFeedback() {
  feedbackTableBody.innerHTML = '';
  let feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];

  feedbackData.forEach((feedback, index) => {
    const row = document.createElement('tr');
    const feedbackCells = [
      index + 1,
      feedback.name,
      feedback.email,
      feedback.book,
      feedback.message,
      feedback.rating,
      new Date(feedback.timestamp).toLocaleString(),
    ];

    feedbackCells.forEach((cell) => {
      const cellElement = document.createElement('td');
      cellElement.innerText = cell;
      row.appendChild(cellElement);
    });

    const dismissCell = document.createElement('td');
    const dismissButton = document.createElement('button');
    dismissButton.innerText = 'Dismiss';
    dismissButton.classList.add('dismiss-button');
    dismissButton.addEventListener('click', () => {
      feedbackData.splice(index, 1);
      localStorage.setItem('feedback', JSON.stringify(feedbackData));
      row.remove();
    });
    dismissCell.appendChild(dismissButton);
    row.appendChild(dismissCell);

    const replyCell = document.createElement('td');
    const replyButton = document.createElement('button');
    replyButton.innerText = 'Reply';
    replyButton.classList.add('reply-button');
    replyButton.addEventListener('click', () => {
      const emailLink = `mailto:${feedback.email}?subject=Re: ${feedback.book}`;
      window.location.href = emailLink;
    });
    replyCell.appendChild(replyButton);
    row.appendChild(replyCell);

    feedbackTableBody.appendChild(row);
  });
}

const dismissAllButton = document.querySelector('#dismiss-all-button');

function dismissAllFeedback() {
  localStorage.removeItem('feedback');
  feedbackTableBody.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  loadFeedback();
});

dismissAllButton.addEventListener('click', () => {
  dismissAllFeedback();
});
