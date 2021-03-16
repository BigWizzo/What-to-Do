import { showModal } from '../components/UI';

describe('Display todo Form', () => {
  document.body.innerHTML = '<div id="form-container></div>';

  it('Should add show class to the element', () => {
    showModal();
    const element = document.querySelector('#form-container');
    expect(element.getAttribute('class')).toBe('show-modal');
  });
});

// test('initial display of tabs', () => {
//   expect(showModal).toMatch(/content/);
// });