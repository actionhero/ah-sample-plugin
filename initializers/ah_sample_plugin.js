const {api, Initializer} = require('actionhero')

module.exports = class Middleware extends Initializer {
  constructor () {
    super()
    this.name = 'ah-sample-plugin-middleware'
  }

  start () {
    const middleware = {
      name: 'ah-sample-plugin-middleware',
      global: true,

      preProcessor: (data) => {
        data._startingTime = (new Date()).getTime()
      },

      postProcessor: (data) => {
        const delta = (new Date()).getTime() - data._startingTime
        const responseKey = api.config['ah-sample-plugin'].timingKey
        data.response[responseKey] = delta
      }
    }

    api.actions.addMiddleware(middleware)
  }
}
