const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Loads next.config.js and .env files into the test environment.
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way so next/jest can load the async Next.js config.
module.exports = createJestConfig(customJestConfig);
