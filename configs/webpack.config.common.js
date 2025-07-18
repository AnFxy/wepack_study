const path = require('path')
const { VueLoaderPlugin } = require('vue-loader/dist')

module.exports = {
  entry: './src/main.js',
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                ['postcss-preset-env',]
              ]
            }
          } 
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg|ico)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]-[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 2024
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
}
