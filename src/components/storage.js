/* eslint-disable no-restricted-globals, eqeqeq */

export default class Store {
  static getProjects() {
    let projects;
    if (localStorage.getItem('projects') === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }

    return projects;
  }

  static addToDo(project, todo) {
    const projects = Store.getProjects();
    const checkSome = projects.some((element) => element.proTitle === project.proTitle);
    if (checkSome === false || projects.length === 0) {
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    } else {
      for (let i = 0; i <= projects.length - 1; i += 1) {
        if (projects[i].proTitle === project.proTitle) {
          projects[i].todos.push(todo);
          localStorage.setItem('projects', JSON.stringify(projects));
        }
      }
    }
    location.reload();
  }

  static removeToDo(time) {
    const projects = Store.getProjects();

    projects.forEach((project) => {
      project.todos.forEach((todo, index) => {
        if (todo.time === time) {
          project.todos.splice(index, 1);
        }
      });
    });

    localStorage.setItem('projects', JSON.stringify(projects));
  }

  static updateToDo(newTodos, project) {
    const projects = Store.getProjects();

    projects.forEach((prjct) => {
      if (prjct.proTitle === project) {
        prjct.todos.forEach((todo, index) => {
          if (todo.time == newTodos.time) {
            prjct.todos[index] = newTodos;
          }
        });
      }
    });

    localStorage.setItem('projects', JSON.stringify(projects));
    location.reload();
  }

  static removePr(name) {
    const projects = Store.getProjects();

    projects.forEach((project, index) => {
      if (project.proTitle === name) {
        projects.splice(index, 1);
      }
    });

    localStorage.setItem('projects', JSON.stringify(projects));
  }
}

/* eslint-enable no-restricted-globals, eqeqeq */
