export default class Todo {
  constructor(todoTitle, description, dueDate, priority, notes, check) {
    this.todoTitle = todoTitle;
    this.desc = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checkList = check;
    this.time = new Date().getTime();
  }
}