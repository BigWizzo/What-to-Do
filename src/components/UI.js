/* eslint-disable no-use-before-define, max-len, eqeqeq */
import Store from './storage';

const deleteProject = () => {
  const deleteBtns = document.querySelectorAll('#delete-project');
  deleteBtns.forEach((item) => {
    item.addEventListener('click', (e) => {
      const identifier = e.target.parentElement.previousSibling.innerText;
      UI.deletePrTab(e.target);
      Store.removePr(identifier);
    });
  });
};

const editToDo = () => {
  const editBtns = document.querySelectorAll('#edit');
  editBtns.forEach((item) => {
    item.addEventListener('click', (e) => {
      const identifier = item.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.innerText;
      showModal();
      UI.fillFields(identifier);
      updateForm(identifier);
      UI.deletePrTab(e.target);
      Store.removePr(identifier);
    });
  });
};

const updateForm = (identifier) => {
  const form = document.querySelector('#todo-form');
  form.id = 'update-form';
  form.lastElementChild.value = 'Update To Do';
  form.lastElementChild.addEventListener('click', (e) => {
    e.preventDefault();
    const todoTitle = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due-date').value;
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
    const newTodos = {
      todoTitle,
      desc: description,
      dueDate,
      priority,
      notes,
      checkList: check,
      time: identifier,
    };
    const project = proTitle;
    Store.updateToDo(newTodos, project);
  });
};

const showModal = () => {
  const continueContainer = document.querySelector('.form-container');
  continueContainer.classList.toggle('show-modal');
};

const delProjectBtn = () => {
  const buttonDel = document.createElement('a');
  buttonDel.setAttribute('class', 'd-flex justify-content-center m-1');
  buttonDel.setAttribute('id', 'delete-project');
  buttonDel.innerHTML = `
  <i class="far fa-trash-alt dissapear"></i>
  `;
  return buttonDel;
};

const tabProjectBtn = (prjc) => {
  const button = document.createElement('a');
  button.setAttribute('class', 'nav-link');
  button.setAttribute('id', `v-pills-${UI.urlSlug(prjc.proTitle)}-tab`);
  button.setAttribute('data-toggle', 'pill');
  button.setAttribute('href', `#v-pills-${UI.urlSlug(prjc.proTitle)}`);
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-controls', `v-pills-${UI.urlSlug(prjc.proTitle)}`);
  button.setAttribute('aria-selected', 'false');
  return button;
};

const toDosDisplayer = (prjc) => {
  const target = document.createElement('div');
  target.setAttribute('class', 'tab-pane fade');
  target.setAttribute('id', `v-pills-${UI.urlSlug(prjc.proTitle)}`);
  target.setAttribute('aria-labelledby', `v-pills-${UI.urlSlug(prjc.proTitle)}`);
  target.setAttribute('role', 'tabpanel');
  prjc.todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.setAttribute('class', 'row border-bottom pb-2 mt-2');
    todoItem.innerHTML = `
      <div class="col-10 row">
      <div class="col-12 col-md-6 row">
      <li class="d-none">${todo.time}</li>
      <li class="col">${todo.todoTitle}</li>
      <li class="col">${todo.desc}</li>
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
      <span class="col-6"><a href="#" id="edit" class="btn btn-primary btn-sm ml-1"><i class="far fa-edit"></i></a></span>
      </div>
      `;
    target.appendChild(todoItem);
  });
  return target;
};

const allToDosDisplayer = (prjc) => {
  const target = document.createElement('div');
  prjc.todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.setAttribute('class', 'row border-bottom pb-2 mt-2');
    todoItem.innerHTML = `
      <div class="col-12 col-md-6 row">
      <li class="d-none">${todo.time}</li>
      <li class="col">${todo.todoTitle}</li>
      <li class="col">${todo.desc}</li>
      <li class="col">${todo.dueDate}</li>
      </div>
      <div class="col-12 col-md-6 row">
      <li class="col">${todo.priority}</li>
      <li class="col">${todo.notes}</li>
      <li class="col">${todo.checkList}</li>
      </div>
      `;
    target.appendChild(todoItem);
  });
  return target;
};

// UI class
class UI {
  static urlSlug(title) {
    return title
      .split(/\W/)
      .filter(obj => obj !== '')
      .join('-')
      .toLowerCase();
  }

  static displayProjects() {
    const projects = Store.getProjects();
    UI.addAllToDos(projects);
    projects.forEach((project) => {
      UI.addProjects(project);
    });
    UI.addButton();
    UI.addRemoveButton();
    deleteProject();
    editToDo();
  }

  static addProjects(prjc) {
    const menu = document.querySelector('#v-pills-tab');
    const button = tabProjectBtn(prjc);
    const buttonDel = delProjectBtn();
    button.innerText = `${prjc.proTitle}`;
    menu.appendChild(button);
    menu.appendChild(buttonDel);
    const content = document.querySelector('#v-pills-tabContent');
    const target = toDosDisplayer(prjc);
    content.appendChild(target);
  }

  static addAllToDos(prjcts) {
    const content = document.querySelector('#v-pills-home');
    prjcts.forEach((prjct) => {
      const target = allToDosDisplayer(prjct);
      content.appendChild(target);
    });
  }

  static addButton() {
    const content = document.querySelector('#v-pills-tabContent');
    const addButton = document.createElement('div');
    addButton.setAttribute('class', 'btn btn-light addbtn w-100 bolder text-primary shadow mt-3');
    addButton.innerText = '+';
    addButton.addEventListener('click', e => {
      e.stopPropagation();
      showModal();
    });
    content.appendChild(addButton);
  }

  static deleteToDo(el) {
    el.parentElement.parentElement.remove();
  }

  static deletePrTab(el) {
    el.parentElement.previousSibling.remove();
    el.parentElement.remove();
  }

  static addRemoveButton() {
    const deleteBtns = document.querySelectorAll('#delete');
    deleteBtns.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        UI.deleteToDo(item);
        const identifier = item.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.innerText;
        Store.removeToDo(identifier);
      });
    });
  }

  static fillFields(time) {
    const projects = Store.getProjects();
    projects.forEach((project) => {
      project.todos.forEach((todo) => {
        if (todo.time == time) {
          document.querySelector('#title').value = todo.todoTitle;
          document.querySelector('#description').value = todo.desc;
          document.querySelector('#due-date').value = todo.dueDate;
          document.querySelector('#priority').value = todo.priority;
          document.querySelector('#notes').value = todo.notes;
          const title = document.querySelector('#project');
          title.value = project.proTitle;
          title.disabled = true;
        }
      });
    });
  }
}

export {
  showModal,
  UI,
  deleteProject,
  updateForm,
  delProjectBtn,
  tabProjectBtn,
  toDosDisplayer,
  allToDosDisplayer,
};
/* eslint-enable no-use-before-define, max-len, eqeqeq */
