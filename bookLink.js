function getBookArray() {
    const bookArrayJSON = localStorage.getItem('bookArray');
    if (!bookArrayJSON) return [];
    return JSON.parse(bookArrayJSON);
  }
  
  function getBookById(id) {
    const bookArray = getBookArray();
    return bookArray.find(book => book.id === id);
  }
  
  function getBookIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'), 10);
    return bookId;
  }
  
  function displayBookInfo(book) {
    if (!book) return;
  
    const bookImage = document.getElementById('book-image');
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const bookSummary = document.getElementById('book-summary');
  
    bookImage.src = book.image;
    bookImage.alt = book.title;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = `by ${book.author}`;
    bookSummary.textContent = book.summary;
  }
  
  const bookId = getBookIdFromUrl();
  const book = getBookById(bookId);
  displayBookInfo(book);
  