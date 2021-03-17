import Store from '../components/storage';

describe('Store', () => {
  it('Store is a function', () => {
    expect(typeof Store).toBe('function');
  });

  it('getProjects is a function', () => {
    expect(typeof Store.getProjects).toBe('function');
  });

  it('addToDo is a function', () => {
    expect(typeof Store.addToDo).toBe('function');
  });

  it('removeToDo is a function', () => {
    expect(typeof Store.removeToDo).toBe('function');
  });

  it('updateToDo is a function', () => {
    expect(typeof Store.updateToDo).toBe('function');
  });

  it('removePr is a function', () => {
    expect(typeof Store.removePr).toBe('function');
  });
});