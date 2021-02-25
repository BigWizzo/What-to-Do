//Store class
export default class Store {
    static getProjects() {
        let projects = [
            {
                proTitle: 'First',
                todos: {
                   todo: {
                        todoTitle: 'first todo 1',
                        description: 'go do stuff',
                        dueDate: 'today',
                        priority: 'high',
                        notes: 'no notes',
                        checkList: 'not done'
                    },
                   todo: {
                        todoTitle: 'second todo 1',
                        description: 'go do stuff',
                        dueDate: 'today',
                        priority: 'high',
                        notes: 'no notes',
                        checkList: 'not done'
                    }
                }
            },
            {
                proTitle: 'second',
                todos: {
                   todo: {
                        todoTitle: 'second todo 1',
                        description: 'go do stuff',
                        dueDate: 'today',
                        priority: 'high',
                        notes: 'no notes',
                        checkList: 'not done'
                    },
                   todo: {
                        todoTitle: 'second todo 2',
                        description: 'go do stuff',
                        dueDate: 'today',
                        priority: 'high',
                        notes: 'no notes',
                        checkList: 'not done'
                    }
                }
            },
            {
                proTitle: 'third',
                todos: {
                   todo: {
                        todoTitle: 'third todo 1',
                        description: 'go do stuff',
                        dueDate: 'today',
                        priority: 'high',
                        notes: 'no notes',
                        checkList: 'not done'
                    },
                   todo: {
                        todoTitle: 'third todo 2',
                        description: 'go do stuff',
                        dueDate: 'today',
                        priority: 'high',
                        notes: 'no notes',
                        checkList: 'not done'
                    }
                }
            },
        ]

        return projects;
    }

    static addToDo() {

    }

    static removeToDo() {

    }

}