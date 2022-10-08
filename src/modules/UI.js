// UI class: Handles UI Task
export default class UI {
    static displayBooks() {
      const books = store.getBooks();
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('.booksList');
      const section = document.createElement('section');
      section.classList.add('list-holder');
  
      section.innerHTML = `<ul class="book-section">
        <div class="book-caption">
            <li class="title">"${book.title}"</li>
            <li class="by">by</li>
            <li class="author">${book.author}</li>
            <li class="id">${book.id}</li>
        </div>
        <div>
            <li>
            <button class="del">Remove</button>
            </li>
        </div>
    </ul>
    `;
      list.appendChild(section);
    }
  
    static deleteBook(el) {
      if (el.classList.contains('del')) {
        el.parentElement.parentElement.parentElement.parentElement.remove();
      }
    }
  
    static clearFields() {
      document.querySelector('#BookTitle').value = '';
      document.querySelector('#BookAuthor').value = '';
    }
  }
  module.exports = UI;
