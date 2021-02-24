import Store from './storage.js';

//UI class
export default class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr')

        function checkRead(read) {
          if (read == 'Read') {
            return 'checked';
          }
          return '';
        }

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td class="status"><div class="form-check form-switch">
        <input
          class="form-check-input read"
          type="checkbox"
          id="flexCheck"
          ${checkRead(book.read)}
        />
        <label class="form-check-label" for="flexCheck">${book.read}</label>
      </div></td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
        list.appendChild(row);
    }

    static clearFields() {

    }


    static deleteBook(el) {

      }

   static showAlert(message, className) {

   }
}
