const packageName = 'icons'

module.exports = {
  ...require('../../jest.config.base'),
  preset: 'react-native',
  testEnvironment: 'jsdom',
  rootDir: '../..',
  roots: [`<rootDir>/packages/${packageName}`],
  testMatch: [`<rootDir>/packages/${packageName}/test/**/*.[jt]s?(x)`],
}
