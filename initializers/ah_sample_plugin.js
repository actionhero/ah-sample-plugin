module.exports = {
  start: function(api, next){

    var middleware = {
      name: 'ah-sample-plugin-middleware',
      global: true,
      priority: 1000,
      postProcessor: function(data, done){
        data.connection.response._time = String(new Date());
        data.connection.response._message = api.config['ah-sample-plugin'].message;
        done();
      }
    };

    api.actions.addMiddleware(middleware);

    next();
  }
};
