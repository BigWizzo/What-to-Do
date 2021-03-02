/* eslint-disable no-restricted-globals, max-len */
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
    if (projects.some((element) => element.proTitle === project.proTitle) === false || projects.length === 0) {
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    } else {
      for (let i = 0; i <= projects.length - 1; i += 1) {
        if (projects[i].proTitle.to_i === project.proTitle.to_i) {
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
      if (prjct.proTitle.to_i === project.to_i) {
        prjct.todos.forEach((todo, index) => {
          if (todo.time.to_i === newTodos.time.to_i) {
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
      if (project.proTitle.to_i === name.to_i) {
        projects.splice(index, 1);
      }
    });

    localStorage.setItem('projects', JSON.stringify(projects));
  }
}
/* eslint-enable no-restricted-globals, max-len */
