exports.action = {
  name: 'ahSampleAction',
  description: 'I say hello from middleware',
  inputs: {
    required: [],
    optional: []
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next){
    console.log(api.config)
    connection.response.message = api.config['ah-sample-plugin'].message;
    next(connection, true);
  }
};
