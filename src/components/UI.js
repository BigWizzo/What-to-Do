import Store from './storage.js';
import Table from "./table";

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
        
        projects.forEach((project, index) => {
            UI.addProjects(project)
            showToDos(index)
        });
        showProjects()
    }

    
    static addProjects(prjc) {
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
        target.innerHTML = `${Table()}`;
        menu.appendChild(button);
        content.appendChild(target);
    }
}

 const showToDos = (i) => {
    const projects = Store.getProjects();
    const list = document.querySelectorAll('.to-do-list');
    list.forEach(project => {
    projects[i].todos.forEach((todo) => {
    const row = document.createElement('tr')
    
    row.innerHTML = `
    <td>${todo.todoTitle}</td>
    <td>${todo.description}</td>
    <td>${todo.dueDate}</td>
    <td>${todo.priority}</td>
    <td>${todo.notes}</td>
    <td>${todo.checkList}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
    project.appendChild(row);
        });
        })
}

const showProjects = () => {
    const list = document.querySelectorAll('.nav-link');
    
    list.forEach(project => {
        project.addEventListener('click', e => {
            console.log(e.target.id);
        })
    })
}