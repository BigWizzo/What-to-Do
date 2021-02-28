import Project from './projects.js';

export default class Store {
    static getProjects() {
        // let projects = [];
        // const project1 = new Project("First");
        // const project2 = new Project("Second");
        // const project3 = new Project("Third");
        // project1.todos.push({
            // todoTitle: "titleoftodoadded",
            // desc: "something",
            // dueDate: "10/03",
            // priority: "high",
            // notes: "no notes",
            // checkList: "its not done"
        // })
        // project1.todos.push({
            // todoTitle: "titleoftodoadded",
            // desc: "something",
            // dueDate: "10/03",
            // priority: "high",
            // notes: "no notes",
            // checkList: "its not done"
        // })
        // project2.todos.push({
            // todoTitle: "titleoftodoadded",
            // desc: "something",
            // dueDate: "10/03",
            // priority: "high",
            // notes: "no notes",
            // checkList: "its not done"
        // })
        // project1.todos.push({
            // todoTitle: "titleoftodoadded",
            // desc: "something",
            // dueDate: "10/03",
            // priority: "high",
            // notes: "no notes",
            // checkList: "its not done"
        // })
        // projects.push(project1);
        // projects.push(project2);
        // projects.push(project3);
        let projects;
        if (localStorage.getItem('projects') === null) {
            projects = [];
        } else {
            projects = JSON.parse(localStorage.getItem('projects'));
        }

        return projects;
    }
    
    static addToDo(project) {
        const projects = Store.getProjects();
        // if (projects.indexOf(project.proTitle)) {
        // console.log(projects.indexOf(project.proTitle))
        // }
        if (projects.length === 0) {
            console.log('array is empty');
            projects.push(project);
            localStorage.setItem('projects', JSON.stringify(projects));
        }

        // for (let i = 0; i <= projects.length - 1; i++) {
           //   console.log(projects[i].proTitle)
            if (projects.some(project => project.proTitle)){
                console.log(project)
                console.log((project.proTitle));
                console.log('array has elements and title is found');
              //   console.log(projects[i])
                // projects[i].todos.push();
            } else {
                console.log((project.proTitle));
                console.log('project title not found');
                // projects.push(project);
                // localStorage.setItem('projects', JSON.stringify(projects));
            }
        // }
        // projects.push(project);
        // localStorage.setItem('projects', JSON.stringify(projects));
    }
    
    // static checkExistence(project){
    //     let newProject = project;
    //     projects.forEach(el => {
    //         if (el.proTitle === project.proTitle) {
    //             newProject = el;
    //         }
    //     })
    //     console.log(newProject);
    //     return newProject;
    // }
    
    static removeToDo() {
        
    }
    
}
// const projects = Store.getProjects();