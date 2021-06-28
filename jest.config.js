module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/services.js"],
  coverageDirectory: "test/coverage",
  coverageProvider: "v8",
  testEnvironment: "node",

  testMatch: [
    "**/test/**/*.test.js?(x)"
  ],

};
