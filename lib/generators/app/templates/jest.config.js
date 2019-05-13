module.exports = {
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: ['.*\\.test\\.jsx?$', '.*\\.test\\.tsx?$'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js}', 'src/**/*.{ts}', 'src/**/*.{jsx}', 'src/**/*.{jsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss)$':
      'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
};
