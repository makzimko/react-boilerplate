module.exports = {
  rootDir: './',
  roots: ['<rootDir>/src/'],
  testRegex: '.spec.jsx?$',
  testURL: 'http://localhost',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/jestSetupScript.js',
  coverageDirectory: '<rootDir>/coverage',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
