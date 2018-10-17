/**
 * @jest-environment node
 */

import initStoryshots from '@storybook/addon-storyshots';
//
initStoryshots();

// function sum(a, b) {
//   return a + b;
// }
test('adds 1 + 2 to equal 3', () => {
  expect(3).toBe(3);
});
// module.exports = sum;

// import initStoryshots from '@storybook/addon-storyshots';
// initStoryshots({
//   /* configuration options */
// });
