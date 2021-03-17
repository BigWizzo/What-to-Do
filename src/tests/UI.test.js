import {
  showModal,
  UI,
  deleteProject,
  updateForm,
  delProjectBtn,
  tabProjectBtn,
  toDosDisplayer,
  allToDosDisplayer,
} from '../components/UI';

describe('UI', () => {
  it('ShowModal is a function', () => {
    expect(typeof showModal).toBe('function');
  });

  it('UI is a function', () => {
    expect(typeof UI).toBe('function');
  });

  it('urlSlug is a function', () => {
    expect(typeof UI.urlSlug).toBe('function');
  });

  it('displayProjects is a function', () => {
    expect(typeof UI.displayProjects).toBe('function');
  });

  it('addProjects is a function', () => {
    expect(typeof UI.addProjects).toBe('function');
  });

  it('addAllToDos is a function', () => {
    expect(typeof UI.addAllToDos).toBe('function');
  });

  it('addButton is a function', () => {
    expect(typeof UI.addButton).toBe('function');
  });

  it('deleteToDo is a function', () => {
    expect(typeof UI.deleteToDo).toBe('function');
  });

  it('deletePrTab is a function', () => {
    expect(typeof UI.deletePrTab).toBe('function');
  });

  it('addRemoveButton is a function', () => {
    expect(typeof UI.addRemoveButton).toBe('function');
  });

  it('fillFields is a function', () => {
    expect(typeof UI.fillFields).toBe('function');
  });

  it('deleteProject is a function', () => {
    expect(typeof deleteProject).toBe('function');
  });

  it('updateForm is a function', () => {
    expect(typeof updateForm).toBe('function');
  });

  it('delProjectBtn is a function', () => {
    expect(typeof delProjectBtn).toBe('function');
  });

  it('tabProjectBtn is a function', () => {
    expect(typeof tabProjectBtn).toBe('function');
  });

  it('toDosDisplayer is a function', () => {
    expect(typeof toDosDisplayer).toBe('function');
  });

  it('allToDosDisplayer is a function', () => {
    expect(typeof allToDosDisplayer).toBe('function');
  });
});