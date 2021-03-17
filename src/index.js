import './scss/styles.scss';
import Tabs from './components/main';
import { UI, showModal } from './components/UI';
import Store from './components/storage';
import Todo from './components/todos';
import Project from './components/projects';

document.addEventListener('DOMContentLoaded', UI.displayProjects);
Tabs.createTabs();

const receiveValues = () => {
  document.querySelector('#todo-form').addEventListener('submit', (e) => {
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
    showModal();

    const project = new Project(proTitle);
    const newTodos = new Todo(todoTitle, description, dueDate, priority, notes, check);
    project.todos.push(newTodos);

    UI.addProjects(project);
    Store.addToDo(project, newTodos);
});
};
receiveValues();