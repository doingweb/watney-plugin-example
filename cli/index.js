const inquirer = require('inquirer');

/**
 * Example CLI function.
 *
 * Plugin CLIs are meant to assist with configuration by
 * handling things like retrieving API access tokens
 * and device pairing.
 *
 * This function gets awaited when a user selects the plugin
 * from the main CLI.
 *
 * @param {Object} app The Watney app.
 */
module.exports = async function exampleCli(app) {
  let answers = await inquirer.prompt([
    {
      name: 'option1',
      message: 'Select an option 1',
      type: 'list',
      choices: ['A', 'B', 'C', 'D']
    },
    {
      name: 'option2',
      message: 'Select an option 2',
      type: 'list',
      choices: ['A', 'B', 'C', 'D']
    }
  ]);

  console.log(`Option 1: ${answers.option1}`);
  console.log(`Option 2: ${answers.option2}`);
};
