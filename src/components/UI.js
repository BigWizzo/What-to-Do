import Store from './storage.js';
//UI class
export default class UI {
    static urlSlug(title) {
          return title
            .split(/\W/)
            .filter(obj => {
              return obj !== "";
            })
            .join("-")
            .toLowerCase();
    }
    static displayProjects() {
        const projects = Store.getProjects();
        projects.forEach((project) => {
        UI.addProjects(project);
        });
        UI.addButton();
    }
    static addProjects(prjc) {
        const menu = document.querySelector('#v-pills-tab');
        const button = document.createElement('a');        
        button.setAttribute("class", "nav-link");
        button.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}-tab`);
        button.setAttribute("data-toggle", "pill");
        button.setAttribute("href", `#v-pills-${UI.urlSlug(prjc.proTitle)}`);
        button.setAttribute("role", "tab");
        button.setAttribute("aria-controls", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        button.setAttribute("aria-selected", "false");
        button.innerText = `${prjc.proTitle}`;
        menu.appendChild(button);
        console.log(prjc.todos);
        const content = document.querySelector('#v-pills-tabContent');
        const target = document.createElement('div');
        target.setAttribute("class", "tab-pane fade");
        target.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        target.setAttribute("aria-labelledby", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        target.setAttribute("role", "tabpanel");
        prjc.todos.forEach(function(todo) {
            // const todosWrap = document.querySelector(`#v-pills-${UI.urlSlug(prjc.proTitle)}`);
            const todoItem = document.createElement('div');
            console.log(todo.todoTitle);
            todoItem.innerHTML = `<li class="long">${todo.todoTitle}</li>
            <li class="long">${todo.description}</li>
            <li class="short">${todo.dueDate}</li>
            <li class="short">${todo.priority}</li>
            <li class="long">${todo.notes}</li>
            <li class="short">${todo.checkList}</li>
            <li class="short"><a href="#" class="btn btn-danger btn-sm delete">X</a></li>`;
            target.appendChild(todoItem);
        });
        content.appendChild(target);
    }

    static addButton() {
      const content = document.querySelector('#v-pills-tabContent');
      const addButton = document.createElement('div');
        addButton.setAttribute("class","btn btn-light addbtn w-100 bolder text-primary");
        addButton.innerText = "+";
        addButton.addEventListener('click', e => {
            showModal();
          })  
        content.appendChild(addButton);
    }

    static clearFields() {
    }
    static deleteBook(el) {
      }
   static showAlert(message, className) {
   }
}

const showModal = () => {
    const continueContainer = document.querySelector('.form-container')
    continueContainer.classList.toggle('show-modal')
}
