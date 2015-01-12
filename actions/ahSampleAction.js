exports.action = {
  name: 'ahSampleAction',
  description: 'I say hello from middleware',
  inputs: {},

  run: function(api, connection, next){
    connection.response.message = api.config['ah-sample-plugin'].message;
    next(connection, true);
  }
};
