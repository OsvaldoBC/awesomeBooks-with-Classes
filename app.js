// Import modules

// Book Class : Represent a Book
import Book from './modules/addBook.js';

// Store Class : Handles Storage
import getBooks from './modules/storage.js';

// UI Class : Handle User Interfase Tasks
import displayBooks from './src/modules/UI.js';


const addBook = (book) => {
  const books = getBooks();

  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

const removeBook = (id) => {
  const books = getBooks();

  books.forEach((book, index) => {
    if (book.id === id) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
};


// Event: Display Books
document.addEventListener('DOMContentLoaded', displayBooks());

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get values from form
  const title = document.querySelector('#bookTitle').value;
  const author = document.querySelector('#bookAuthor').value;

  // Generate random number per seconds
  const id = Date.now().toString();

  // Instantiate book
  const book = new Book(title, author, id);

  // Add book to UI
  addBookToList(book);

  // Add book to store
  addBook(book);

  // Clear fields
  clearFields();
});

// Event: Remove a book
document.querySelector('.booksList').addEventListener('click', (e) => {
  const id = document.querySelector('.id');

  // Remove book from UI
  deleteBook(e.target);

  // Remove from store
  removeBook(id.textContent);
});

// Display date using Luxon
document.getElementById('date-time').innerHTML = DateTime.now().toFormat('DDD t');

const list = document.getElementById('list');
const book1 = document.getElementById('book');
const contact = document.getElementById('contact');

list.addEventListener('click', () => {
  document.querySelector('.card').style.display = 'flex';
  document.querySelector('.dataForm').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});

book1.addEventListener('click', () => {
  document.querySelector('.card').style.display = 'none';
  document.querySelector('.dataForm').style.display = 'flex';
  document.querySelector('.contact').style.display = 'none';
});

contact.addEventListener('click', () => {
  document.querySelector('.card').style.display = 'none';
  document.querySelector('.dataForm').style.display = 'none';
  document.querySelector('.contact').style.display = 'flex';
});