import { testUtil } from '../utils'

test('test util', () => {
  expect(testUtil()).toEqual('test util')
})

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('URL.createObjectURL', () => {
  const file = { preview: 'blob:http://example.com' }
  expect(URL.createObjectURL(file)).toEqual(file.preview)
})
