const path = require('path')

const src = path.resolve('./client/index.js')
const dist = path.resolve('./public')
console.log(src, dist)

module.exports = {
  entry: src,
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      '/api': {
        target: {
          host: '127.0.0.1',
          protocol: 'http:',
          port: 3000
        },
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}