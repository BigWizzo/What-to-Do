import Project from '../components/projects';

describe('Project class', () => {
  const myProject = new Project('test1');

  it('myProject should have the same name given', () => {
    expect(myProject.proTitle).toEqual('test1');
  });

  it('myProject should not have another name from the given one', () => {
    expect(myProject.proTitle).not.toEqual('not correct');
  });

  it('todos should be an array', () => {
    expect(myProject.todos).toEqual([]);
  });

  it('todos array should be empty', () => {
    expect(myProject.todos).not.toEqual([1, 2, 3, 4]);
  });
});