const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  // https://webpack.js.org/configuration/dev-server/
  mode: 'development',
  devServer: {
    port: 8080,
  },
})
