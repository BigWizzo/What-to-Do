import Todo from '../components/todos';

describe('Todo class', () => {
  const todoTest = new Todo('test1', 'testing', 'dueDate', 'priority', 'notes', 'check');

  it('Todo name should be test1', () => {
    expect(todoTest.todoTitle).toEqual('test1');
  });

  it('Todo name should not be another name', () => {
    expect(todoTest.todoTitle).not.toEqual('wrong');
  });

  it('Todo description should be testing', () => {
    expect(todoTest.desc).toEqual('testing');
  });

  it('Todo description should not be another description', () => {
    expect(todoTest.desc).not.toEqual('wrong');
  });

  it('DueDate should be dueDate', () => {
    expect(todoTest.dueDate).toEqual('dueDate');
  });

  it('DueDate should not be another dueDate', () => {
    expect(todoTest.dueDate).not.toEqual('wrongDueDate');
  });

  it('priority should be priority', () => {
    expect(todoTest.priority).toEqual('priority');
  });

  it('priority should not be another priority', () => {
    expect(todoTest.priority).not.toEqual('Wrong priority');
  });

  it('Notes should be notes', () => {
    expect(todoTest.notes).toEqual('notes');
  });

  it('Notes should not be another notes', () => {
    expect(todoTest.notes).not.toEqual('wrong notes');
  });

  it('Check should be check', () => {
    expect(todoTest.checkList).toEqual('check');
  });

  it('Check should not be another check', () => {
    expect(todoTest.checkList).not.toEqual('wrong check');
  });
});