module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/mocks/fileMock.js',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    '@cloud-design/(.*)$': '<rootDir>packages/$1/src',
  },
}
