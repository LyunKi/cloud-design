const { defaults: tsjPreset } = require('ts-jest/presets')
const path = require('path')

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    `${__dirname}/config/jest/jest-setup.js`,
  ],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${__dirname}/config/jest/mocks/fileMock.js`,
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    '@cloud-design/(.*)$': path.resolve(__dirname, 'packages/$1/src'),
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
