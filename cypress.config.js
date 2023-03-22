const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '36eeu3',
  pageLoadTimeout: 80000,
  defaultCommandTimeout: 80000,
  viewportWidth: 375,
  viewportHeight: 667,
  projectId: '36eeu3',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress_Template_Test_Report'
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});