export default class Project {
  constructor(proTitle, todoTitle, description, dueDate, priority, notes, checkList) {
    this.proTitle = proTitle
    this.todos = []
    this.todos.todo = {}
    this.todos.todo.todoTitle = todoTitle
    this.todos.todo.desc = description
    this.todos.todo.dueDate = dueDate
    this.todos.todo.priority = priority
    this.todos.todo.notes = notes
    this.todos.todo.checkList = checkList
  }
}