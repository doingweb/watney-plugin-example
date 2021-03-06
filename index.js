const { WatneyPlugin } = require('watney-app');

module.exports = class ExamplePlugin extends WatneyPlugin {
  /**
   * The ID for this plugin. Must be unique. Should be consistent with the module name.
   *
   * @readonly
   * @static
   */
  static get id() {
    return 'example';
  }

  /**
   * A description of the plugin.
   *
   * @readonly
   * @static
   */
  static get description() {
    return 'An example Watney plugin.';
  }

  /**
   * The CLI function for the plugin.
   *
   * Will be passed the Watney app and awaited when a user selects this plugin in the main CLI.
   *
   * @readonly
   * @static
   */
  static get cli() {
    return require('./cli');
  }

  /**
   * Create an instance of the plugin.
   *
   * @param {Object} config The config object from the Watney config for this plugin.
   *   Watney will look in its config for a property with the same name as the static `id`
   *   getter above (in this case, "example").
   */
  constructor(config) {
    super(config);

    this.logger.log('Plugin has been constructed.');
  }

  /**
   * Initialize the plugin.
   *
   * Time-intensive and other async operations that are required to set up the plugin,
   * (e.g., authenticating and establishing other connections to APIs) go here.
   *
   * This will be awaited before scripts are run.
   *
   */
  async init() {
    this.logger.log('Initializing our plugin!');

    // Setting properties on the plugin object makes them available to scripts.
    // For example:
    //   let { message } = app.plugins.get('example');
    this.message = 'This message came from the example plugin.';

    await super.init();
  }
};
