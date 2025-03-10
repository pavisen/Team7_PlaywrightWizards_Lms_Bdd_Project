module.exports = {
  default: {
    require: ["tests/stepDefinitions/*.js", "tests/hooks/hooks.js"],
    paths: ["tests/features/**/*.feature"],
    format: ["progress", "json:reports/cucumber-report.json"],
    parallel: process.env.PARALLEL || 1,
    dryRun: false, // Set to false to actually run scenarios
    tags:  "@smoke", 

  },
};