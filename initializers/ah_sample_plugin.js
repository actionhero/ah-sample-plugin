var ah_sample_plugin = function(api, next){

  api.actions.postProcessors.push(function(connection, actionTemplate, toRender, next){
    connection.response._time = String(new Date());
    next(connection, toRender);
  });
  
  next();
}

/////////////////////////////////////////////////////////////////////
// exports
exports.ah_sample_plugin = ah_sample_plugin;
