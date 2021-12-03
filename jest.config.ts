module.exports = {
    preset: 'ts-jest',
    clearMocks: true,
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    },
    transform: {
        '^.+\\.(js|ts|tsx)$': 'ts-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageReporters: ['text', 'html', 'json'],
    coverageDirectory: '<rootDir>/coverage/',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'js'],
    moduleNameMapper: {
        '@/(.+)$': '<rootDir>/src/$1'
    },
}