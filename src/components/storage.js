//Store class
export default class Store {
    static getProjects() {
        let projects = [{
            proTitle: 'First',
            todos: [
                {
                    todoTitle: 'first todo',
                    description: 'go do stuff',
                    dueDate: 'today',
                    priority: 'high',
                    notes: 'no notes',
                    checkList: 'not done'
                },
                {
                    todoTitle: 'second todo',
                    description: 'go do stuff',
                    dueDate: 'today',
                    priority: 'high',
                    notes: 'no notes',
                    checkList: 'not done'
                }
            ]
        },
        {
            proTitle: 'Second',
            todos: [
                {
                    todoTitle: 'wow wow 1',
                    description: 'go do stuff 1',
                    dueDate: 'today',
                    priority: 'high',
                    notes: 'no notes',
                    checkList: 'not done'
                },
                {
                    todoTitle: 'makes sense? 1',
                    description: 'go do stuff 1',
                    dueDate: 'today',
                    priority: 'high',
                    notes: 'no notes',
                    checkList: 'not done'
                }
            ]
        },
        {
            proTitle: 'Third',
            todos: [
                {
                    todoTitle: 'wow wow 2',
                    description: 'go do stuff 2',
                    dueDate: 'today',
                    priority: 'high',
                    notes: 'no notes',
                    checkList: 'not done'
                },
                {
                    todoTitle: 'makes sense? 2',
                    description: 'go do stuff 2',
                    dueDate: 'today',
                    priority: 'high',
                    notes: 'no notes',
                    checkList: 'not done'
                }
            ]
        }]

        return projects;
    }

    static addToDo() {

    }

    static removeToDo() {

    }

}