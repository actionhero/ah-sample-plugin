exports.action = {
  name: 'ahSampleAction',
  description: 'I say hello from middleware',
  inputs: {},

  run: function(api, data, next){
    data.connection.response.message = api.config['ah-sample-plugin'].message;
    next(connection, true);
  }
};
