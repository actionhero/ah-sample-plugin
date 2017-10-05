# ah-sample-plugin

[![CircleCI](https://circleci.com/gh/actionhero/ah-sample-plugin.svg?style=svg)](https://circleci.com/gh/actionhero/ah-sample-plugin)

I am a simple sample plugin for actionhero.  I don't do much, as I am just an example.
I will add timing information to each action, using a response key defined in a new config file.  If `api.config['ah-sample-plugin'].timingKey = delta`, all actions would now have `response.delta`.

## Install

```bash
npm install ah-sample-plugin --save
```

Then add it to your project's `./config/plugins.js`:
```js
exports['default'] = {
  plugins: (api) => {
    return {
      'ah-sample-plugin': { path: __dirname + '/../node_modules/ah-sample-plugin' }
    }
  }
}
```

Create a new config file, `./config/ah-sample-plugin.js`:
```js
exports.default = {
  'ah-sample-plugin': (api) => {
    return { timingKey: 'delta' }
  }
}
```
