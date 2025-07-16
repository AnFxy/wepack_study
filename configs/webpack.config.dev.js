const ip = require('ip').address()
const defaultPort = 8087
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: defaultPort,
    onListening: (devServer) => {
      printServerAddress()
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
  ],
  stats: {
    all: false,
    errors: true,
    warnings: true
  }
}

function printServerAddress() {
  console.log(`\n\x1b[32mwebpack 编译成功！\x1b[0m`)
  console.log(`\x1b[36m🚀 服务器已启动！\x1b[0m`)
  console.log(`🚀 Your application is running here: \x1b[33mhttp://${ip}:${defaultPort}\n\x1b[0m`)
}

