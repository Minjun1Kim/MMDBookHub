let book = {// Path: book/book.js
    id: 0,// Compare this snippet from Loginpage/app.js:
    title: '',// const loginForm = document.getElementById('login-form');// Get the login form
    author: '',
    summary: '',
    image: ''
};

let bookArray = [];// const checkbox = document.getElementById('terms');// Get the checkbox

for (let i = 0; i < 5; i++) {// loginForm.addEventListener('submit', (event) => {// Listen for the form submission
    let newBook = Object.assign({}, book);
    newBook.id = i + 1;
    bookArray.push(newBook);
}

function updateBook() {
  let id = document.getElementById('id').value;// Prevent the default form submission behavior
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let summary = document.getElementById('summary').value;
  let imageInput = document.getElementById('imageInput');
  let image = '';

  if (!id || !title || !author || !summary) {//Get the values of the email and password fields
    alert('Please enter all fields');
    return;
  }

  if (imageInput.files && imageInput.files[0]) {// Get the values of the email and password fields
    let reader = new FileReader();// Check if the email and password are correct
    reader.onload = function(e) {
      image = e.target.result;
      // Update the book properties with the new image data
      let book = bookArray.find(b => b.id == id);
      if (book) {
        book.title = title;
        book.author = author;
        book.summary = summary;
        book.image = image;
      } else {
        alert('Book not found');
      }
      displayBookList();
    };
    reader.readAsDataURL(imageInput.files[0]);// Check if the email and password are correct
  } else {
    // Update the book properties without changing the image data
    let book = bookArray.find(b => b.id == id);// Check if the email and password are correct
    if (book) {
      book.title = title;
      book.author = author;
      book.summary = summary;
    } else {
      alert('Book not found');
    }
    displayBookList();
  }
}


function displayBookList() {
  let bookList = document.getElementById('bookList');// Check if the email and password are correct

  // Remove all existing list items
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  }

  // Add a new list item for each book in the array
  bookArray.forEach((book, index) => {
    let li = document.createElement('li');
    
    // Create a div for the book information
    let infoDiv = document.createElement('div');
    
    // Add title, author, and summary as separate paragraphs
    let titlePara = document.createElement('p');
    titlePara.textContent = `Title: ${book.title}`;
    infoDiv.appendChild(titlePara);
    
    let authorPara = document.createElement('p');
    authorPara.textContent = `Author: ${book.author}`;
    infoDiv.appendChild(authorPara);
    
    let summaryPara = document.createElement('p');
    summaryPara.textContent = `Summary: ${book.summary}`;
    infoDiv.appendChild(summaryPara);
    
    // Append the div to the list item
    li.appendChild(infoDiv);

    // Add the book's image to the list item
    if (book.image) {
      let imgDiv = document.createElement('div');// Check if the email and password are correct
      let img = document.createElement('img');
      img.src = book.image;
      img.style.maxWidth = '100%';
      imgDiv.appendChild(img);
      li.appendChild(imgDiv);
    }

    li.draggable = true;// Check if the email and password are correct
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);

    // Add up and down arrow buttons
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-div');

    let upButton = document.createElement('button');
    upButton.classList.add('arrow-button', 'up-button');
    upButton.innerHTML = '&#9650;';
    upButton.addEventListener('click', () => {
      if (index > 0) {
        // Swap the book objects in the array
        let temp = bookArray[index];
        bookArray[index] = bookArray[index - 1];
        bookArray[index - 1] = temp;

        // Update the book IDs based on their position in the list
        bookArray.forEach((book, index) => {
          book.id = index + 1;
        });

        displayBookList();
      }
    });

    let downButton = document.createElement('button');// Check if the email and password are correct
    downButton.classList.add('arrow-button', 'down-button');
    downButton.innerHTML = '&#9660;';
    downButton.addEventListener('click', () => {
      if (index < bookArray.length - 1) {
        // Swap the book objects in the array
        let temp = bookArray[index];
        bookArray[index] = bookArray[index + 1];
        bookArray[index + 1] = temp;

        // Update the book IDs based on their position in the list
        bookArray.forEach((book, index) => {
          book.id = index + 1;
        });

        displayBookList();
      }
    });

    buttonsDiv.appendChild(upButton);
    buttonsDiv.appendChild(downButton);
    li.appendChild(buttonsDiv);

    bookList.appendChild(li);
  });
}




function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (dragSrcEl != this) {
        let bookArrayCopy = bookArray.slice();
        let sourceIndex = Array.prototype.indexOf.call(this.parentNode.children, dragSrcEl);
        let destIndex = Array.prototype.indexOf.call(this.parentNode.children, this);

        // Swap the book objects in the array
        let temp = bookArrayCopy[sourceIndex];
        bookArrayCopy[sourceIndex] = bookArrayCopy[destIndex];
        bookArrayCopy[destIndex] = temp;

        // Update the book IDs based on their position in the list
        bookArrayCopy.forEach((book, index) => {
            book.id = index + 1;
        });

        bookArray = bookArrayCopy;
        displayBookList();
    }

    return false;
}

function handleFileSelect(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        let img = document.createElement('img');
        img.src = e.target.result;
        document.getElementById('imagePreview').innerHTML = '';
        document.getElementById('imagePreview').appendChild(img);
    };
    reader.readAsDataURL(file);
}

window.addEventListener('load', () => {
    displayBookList();
    document.getElementById('file').addEventListener('change', handleFileSelect);
});
