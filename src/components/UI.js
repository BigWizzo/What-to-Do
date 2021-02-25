import Store from './storage.js';


const projects = Store.getProjects();
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
            UI.addProjects(project,index)
        });
        showProjects()
    }

    
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
        target.innerHTML = `${projects[index].todos.map((todo) => {
            showToDos(todo)
            console.log(showToDos(index));
        })}`;
        menu.appendChild(button);
        content.appendChild(target);
    }
};

 const showToDos = (todo) => {
    const row = document.createElement('ul')
    
    row.innerHTML = `
    <li>${todo.todoTitle}</li>
    <li>${todo.description}</li>
    <li>${todo.dueDate}</li>
    <li>${todo.priority}</li>
    <li>${todo.notes}</li>
    <li>${todo.checkList}</li>
    <li><a href="#" class="btn btn-danger btn-sm delete">X</a></li>`;
    return row;
}

const showProjects = () => {
    const list = document.querySelectorAll('.nav-link');
    
    list.forEach(project => {
        project.addEventListener('click', e => {
            console.log(e.target.id);
        })
    })
}