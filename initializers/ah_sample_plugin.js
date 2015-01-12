module.exports = {
  start: function(api, next){
    api.actions.postProcessors.push(function(connection, actionTemplate, toRender, next){
      connection.response._time    = String(new Date());
      connection.response._message = api.config['ah-sample-plugin'].message;
      next(connection, toRender);
    });
  }
};
