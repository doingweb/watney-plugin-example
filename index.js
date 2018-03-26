const { WatneyPlugin } = require('watney-app');

module.exports = class ExamplePlugin extends WatneyPlugin {
  static get id() {
    return 'example';
  }

  static get description() {
    return 'An example Watney plugin.';
  }

  /**
   * Create an instance of our plugin.
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
