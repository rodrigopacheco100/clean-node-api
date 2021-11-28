/* eslint-disable max-len */
export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
