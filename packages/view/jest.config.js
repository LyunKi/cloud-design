module.exports = {
  ...require('../../jest.config.base'),
  preset: 'react-native',
  testEnvironment: 'jsdom',
  rootDir: '../..',
  roots: [`<rootDir>/packages/view`],
  testMatch: ['<rootDir>/packages/view/test/**/*.[jt]s?(x)'],
}
