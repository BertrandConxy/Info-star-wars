/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  // ...
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  setupFilesAfterEnv: ['@testing-library/jest-dom'],
}
