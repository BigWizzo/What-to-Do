import Project from './projects.js';

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
        console.log(todo.time)
        if (projects.some((element) => element.proTitle === project.proTitle) == false || projects.length === 0) {
            console.log('nothing found'); // execute push method
            projects.push(project);
            localStorage.setItem('projects', JSON.stringify(projects));
        } else {
            for (let i = 0; i <= projects.length - 1; i++) {
                if (projects[i].proTitle == project.proTitle) {
                    projects[i].todos.push(todo);
                    console.log('array has elements and duplicate is found THIS WILL BE #BREAK#'); // duplicate found
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
                if(todo.time == time) {
                    console.log(todo.time)
                    project.todos.splice(index, 1);
                }
            });
        });

        localStorage.setItem('projects', JSON.stringify(projects))
    }
    
}
