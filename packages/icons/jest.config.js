module.exports = {
  ...require('../../jest.config.base'),
  preset: 'react-native',
  testEnvironment: 'jsdom',
  rootDir: '../..',
  roots: [`<rootDir>/packages/icons`],
  testMatch: ['<rootDir>/packages/icons/test/**/*.[jt]s?(x)'],
}
