const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

baseConfig.mode('development')
baseConfig.devtool('source-map')
baseConfig.devServer.port(8080)

module.exports = baseConfig.toConfig()

// module.exports = merge(baseConfig, {
//   // https://webpack.js.org/configuration/dev-server/
//   mode: 'development',
//   devtool: 'source-map',
//   devServer: {
//     port: 8080,
//   },
// })
