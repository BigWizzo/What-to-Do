const main = require('../components/main');

test('initial display of tabs', () => {
  expect(Tabs.createTabs().to_s).toMatch(/content/);
});


