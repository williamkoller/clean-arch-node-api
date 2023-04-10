module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/infra/ioc/**/*.module.ts',
    '!<rootDir>/src/infra/config/**/*.module.ts',
    '!<rootDir>/src/infra/cryptography/**/*.module.ts',
    '!<rootDir>/src/infra/database/**',
    '!<rootDir>/src/presentation/**',
    '!<rootDir>/src/main/**/**/**/**/*.usecase.ts',
    '!<rootDir>/src/infra/config/environment-config/environment-config.validation.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 100,
      statements: 90,
    },
  },
};
