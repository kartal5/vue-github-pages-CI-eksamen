const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8080', // Change this if your dev server runs on a different port
    specPattern: 'cypress/e2e/**/*.spec.js', // Ensure this matches your test file pattern
  },
});
