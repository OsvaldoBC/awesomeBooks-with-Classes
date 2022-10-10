// Book Class : Represent a Book
import Book from './src/modules/addBook.js';

// Store Class : Handles Storage
import Store from './src/modules/storage.js';

// UI Class : Handle User Interfase Tasks
import UI from './src/modules/UI.js';

// Luxon library
import { DateTime } from './src/modules/luxon.js';

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

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
  UI.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a book
document.querySelector('.ContentListBook').addEventListener('click', (e) => {
  const id = document.querySelector('.id');

  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove from store
  Store.removeBook(id.textContent);
});

// Display date using Luxon
document.getElementById('dateTime').innerHTML = DateTime.now().toFormat('DDD t');

const list = document.getElementById('list');
const book1 = document.getElementById('add-book');
const contact = document.getElementById('contact');

list.addEventListener('click', () => {
  document.querySelector('.listBook').style.display = 'flex';
  document.querySelector('.inputData').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});

book1.addEventListener('click', () => {
  document.querySelector('.listBook').style.display = 'none';
  document.querySelector('.inputData').style.display = 'flex';
  document.querySelector('.contact').style.display = 'none';
});

contact.addEventListener('click', () => {
  document.querySelector('.listBook').style.display = 'none';
  document.querySelector('.inputData').style.display = 'none';
  document.querySelector('.contact').style.display = 'flex';
});