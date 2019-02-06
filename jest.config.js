module.exports = {
  rootDir: './',
  roots: ['<rootDir>/src/'],
  testRegex: '.spec.js$',
  testURL: 'http://localhost',
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
