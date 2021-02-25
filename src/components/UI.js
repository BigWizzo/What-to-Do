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
        
        projects.forEach((project, index) => UI.addProjects(project, index));
    }

    // static displayToDos() {
        // const projects = Store.getProjects();
// 
        // projects[1].todos.forEach((todo) => UI.addToDoToList(todo));
    // }

    static addProjects(prjc, index) {
        const menu = document.querySelector('#v-pills-tab');
        const button = document.createElement('a');
        const content = document.querySelector('#v-pills-tabContent');
        const target = document.createElement('div');
        
        button.setAttribute("class", "nav-link");
        button.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}-tab`);
        button.setAttribute("data-toggle", "pill");
        button.setAttribute("href", `#v-pills-${UI.urlSlug(prjc.proTitle)}`);
        button.setAttribute("role", "tab");
        button.setAttribute("aria-controls", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        button.setAttribute("aria-selected", "false");
        button.innerText = `${prjc.proTitle}`;

        target.setAttribute("class", "tab-pane fade");
        target.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        target.setAttribute("aria-labelledby", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
        target.setAttribute("role", "tabpanel");
        target.innerHTML = `
          <table class="table">
            <thead>
              <tr>
                <th scope="col">${prjc.proTitle}, ${index}</th>
                <th scope="col">Description</th>
                <th scope="col">Due date</th>
                <th scope="col">Priority</th>
                <th scope="col">Notes</th>
                <th scope="col">Checklist</th>
              </tr>
            </thead>
            <tbody id="to-do-list">
              <tr>
                 <td>${prjc.proTitle}, ${index}</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
              </tr>
            </tbody>
          </table>
        `;
        menu.appendChild(button);
        content.appendChild(target);
        // const list = document.querySelector('#to-do-list');
        // const row = document.createElement('tr')
        // list.appendChild(row);
    }

    static clearFields() {

    }


    static deleteBook(el) {

      }

   static showAlert(message, className) {

   }
}
