const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x6bmkv',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://automationpratice.com.br",
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
