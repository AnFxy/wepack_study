const webpackMerge = require('webpack-merge')
const commonConfig = require('./configs/webpack.config.common.js')

module.exports = (env) => {
  const envConfig = require(`./configs/webpack.config.${env.NODE_ENV}.js`)
  return webpackMerge.merge(commonConfig, envConfig)
}