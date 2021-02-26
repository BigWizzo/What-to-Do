import Project from './projects.js';

export default class Store {
    static getProjects() {
        let projects = [];
        const project1 = new Project("First");
        const project2 = new Project("Second");
        const project3 = new Project("Third");
        project1.todos.push({
            todoTitle: "titleoftodoadded",
            desc: "something",
            dueDate: "10/03",
            priority: "high",
            notes: "no notes",
            checkList: "its not done"
        })
        project1.todos.push({
            todoTitle: "titleoftodoadded",
            desc: "something",
            dueDate: "10/03",
            priority: "high",
            notes: "no notes",
            checkList: "its not done"
        })
        project2.todos.push({
            todoTitle: "titleoftodoadded",
            desc: "something",
            dueDate: "10/03",
            priority: "high",
            notes: "no notes",
            checkList: "its not done"
        })
        project1.todos.push({
            todoTitle: "titleoftodoadded",
            desc: "something",
            dueDate: "10/03",
            priority: "high",
            notes: "no notes",
            checkList: "its not done"
        })
        projects.push(project1);
        projects.push(project2);
        projects.push(project3);

        return projects;
    }
    
    static addToDo(project) {
        const projects = this.getProjects();
        projects.push(project);
        console.log(projects);
    }

    static removeToDo() {

    }

}