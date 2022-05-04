import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
      global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
      }
  },
  projects: ["<rootDir>", "<rootDir>/packages/*"],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  verbose: true,
};

export default config;