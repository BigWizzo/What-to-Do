import Store from './storage.js';

//UI class
export default class UI {
    static urlSlug(title) {
          return title
            .split(/\W/)
            .filter(obj => {
              return obj !== "";
            })
            .join("-")
            .toLowerCase();
    }

    static displayProjects() {
        const projects = Store.getProjects();
        
        projects.forEach((project) => UI.addProjects(project));
    }

    static displayToDos() {
        const projects = Store.getProjects();

        projects[1].todos.forEach((project) => UI.addToDoToList(project));
    }

    static addProjects(prjc) {
        const menu = document.querySelector('#v-pills-tab');
        const button = document.createElement('button');
        const content = document.querySelector('#v-pills-tabContent');
        const target = document.createElement('div');

        button.setAttribute("class", "nav-link");
        button.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        button.setAttribute("data-bs-toggle", "pill");
        button.setAttribute("data-bs-target", `#v-pills-${UI.urlSlug(prjc.proTitle)}`);
        button.setAttribute("type", "button");
        button.setAttribute("role", "tab");
        button.setAttribute("aria-controls", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        button.setAttribute("aria-selected", "false");
        button.innerText = `${prjc.proTitle}`;

        target.setAttribute("class", "tab-pane fade");
        target.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        target.setAttribute("aria-labelledby", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        target.setAttribute("role", "tabpanel");
        target.innerText = `${prjc.proTitle}`;
        menu.appendChild(button);
        content.appendChild(target);
    }

    static addToDoToList(todo) {
        const list = document.querySelector('#to-do-list');

        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${todo.todoTitle}</td>
        <td>${todo.description}</td>
        <td>${todo.dueDate}</td>
        <td>${todo.priority}</td>
        <td>${todo.notes}</td>
        <td>${todo.checkList}</td>
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
