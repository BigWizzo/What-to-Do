import Store from './storage.js';
import Project from './projects.js';

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
        UI.addRemoveButton();
    }

    static addProjects(prjc) {
        const menu = document.querySelector('#v-pills-tab');
        const button = tabProjectBtn(prjc);
        const buttonDel = delProjectBtn();
        button.innerText = `${prjc.proTitle}`;
        menu.appendChild(buttonDel);
        menu.appendChild(button);
        const content = document.querySelector('#v-pills-tabContent');
        const target = toDosDisplayer(prjc);
        content.appendChild(target);
    }

    static addButton() {
      const content = document.querySelector('#v-pills-tabContent');
      const addButton = document.createElement('div');
        addButton.setAttribute("class","btn btn-light addbtn w-100 bolder text-primary shadow mt-3");
        addButton.innerText = "+";
        addButton.addEventListener('click', e => {
            showModal();
          })  
        content.appendChild(addButton);
    }

    static deleteToDo(el) {
      // if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      // }
    }

    static addRemoveButton() {
     const deleteBtns = document.querySelectorAll('#delete');
     deleteBtns.forEach(function (item){
       item.addEventListener('click', (e) => {
         UI.deleteToDo(item);
         let identifier = item.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.innerText;
         Store.removeToDo(identifier);
       })
     });
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
    continueContainer.classList.toggle('show-modal');
}

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const todoTitle = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#duedate').value;
    const priority = document.querySelector('#priority').value;
    const notes = document.querySelector('#notes').value;
    const proTitle = document.querySelector('#project').value;
    const checkInput = document.querySelector('#flexCheckChecked');
    function checkValue(read) {
        if (read.checked) {
          return 'Done';
        }
        return 'Not Done';
      }
    
      const check = checkValue(checkInput);
  
    showModal();

    const project = new Project(proTitle);
    let newTodos = {
      todoTitle: todoTitle,
      desc: description,
      dueDate: dueDate,
      priority: priority,
      notes: notes,
      checkList: check,
      time: new Date().getTime()
    }
    // const project = Store.checkExistence(tempProject);
    project.todos.push(newTodos);
    
    UI.addProjects(project);
    Store.addToDo(project, newTodos);
})

const delProjectBtn = () => {
  const buttonDel = document.createElement('a');        
  buttonDel.setAttribute("class", "d-flex justify-content-center m-1");
  buttonDel.setAttribute("id", "delete-project");
  buttonDel.innerHTML = `
  <i class="far fa-trash-alt dissapear"></i>
  `;
  return buttonDel;
}

const tabProjectBtn = (prjc) => {
  const button = document.createElement('a');          
  button.setAttribute("class", "nav-link");
  button.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}-tab`);
  button.setAttribute("data-toggle", "pill");
  button.setAttribute("href", `#v-pills-${UI.urlSlug(prjc.proTitle)}`);
  button.setAttribute("role", "tab");
  button.setAttribute("aria-controls", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
  button.setAttribute("aria-selected", "false");
  return button;
}

const toDosDisplayer = (prjc) => {
  const target = document.createElement('div');
  target.setAttribute("class", "tab-pane fade");
  target.setAttribute("id", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
  target.setAttribute("aria-labelledby", `v-pills-${UI.urlSlug(prjc.proTitle)}`);
  target.setAttribute("role", "tabpanel");
  prjc.todos.forEach(function(todo) {
      const todoItem = document.createElement('div');
      todoItem.setAttribute("class", "row");
      todoItem.innerHTML = `
      <div class="col-10 row">
      <div class="col-12 col-md-6 row">
      <li class="d-none">${todo.time}</li>
      <li class="col">${todo.todoTitle}</li>
      <li class="col">${todo.description}</li>
      <li class="col">${todo.dueDate}</li>
      </div>
      <div class="col-12 col-md-6 row">
      <li class="col">${todo.priority}</li>
      <li class="col">${todo.notes}</li>
      <li class="col">${todo.checkList}</li>
      </div>
      </div>
      <div class="col-2 row">
      <span class="col-6" id="delete"><a href="#" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt"></i></a></span>
      <span class="col-6"><a href="#" class="btn btn-primary btn-sm delete"><i class="far fa-edit"></i></a></span>
      </div>
      `
      ;
      target.appendChild(todoItem);
  });
  return target;
}


