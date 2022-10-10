// UI class: Handles UI Task

import Store from "./storage.js";

export default class UI {
    static displayBooks() {
      const books = Store.getBooks();
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('.ContentListBook');

      const row = document.createElement('tr');
      row.innerHTML = `
      <td class="title">"${book.title}" </td>
      <td class="author">"${book.author} </td>
      <td class="id"> "${book.id}" </td>
      <td> <button class="del">Remove</button> </td>
      `;
      list.appendChild(row);
    }

    static deleteBook(el) {
      if (el.classList.contains('del')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static clearFields() {
      document.querySelector('.title-Book').value = '';
      document.querySelector('.Author-Book').value = '';
    }
  }

