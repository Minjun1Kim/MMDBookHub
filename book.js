// Get the query parameter from the URL
const params = new URLSearchParams(window.location.search);
const bookId = params.get('book');

// Load book data based on the bookId
const books = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    summary: 'Summary of Book 1'
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
    summary: 'Summary of Book 2'
  },
  {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
    summary: 'Summary of Book 3'
  }
];

const book = books.find(book => book.id === parseInt(bookId));

// Display the book data on the page
const titleElem = document.querySelector('#title');
const authorElem = document.querySelector('#author');
const summaryElem = document.querySelector('#summary');

titleElem.textContent = book.title;
authorElem.textContent = book.author;
summaryElem.textContent = book.summary;