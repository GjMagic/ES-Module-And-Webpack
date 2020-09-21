const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    // publicPath: 'dist/'
  },
  optimization: {
    // usedExports: true, // 只输出使用的模块（标记）
    // concatenateModules: true, // 把所有模块尽量合并到一个函数里
    // minimize: true,    // 压缩使用的模块（清除）
    sideEffects: true,
  },
  devServer: {
    contentBase: 'public',
    proxy: {
      '/api': {
        // http://localhost:8080/api/users => https://api.github.com/api/users
        target: 'https://api.github.com',
        // http://localhost:8080/api/users => https://api.github.com/users
        pathRewrite: {
          '^/api': ''
        },
        // 不能使用localhost:8080 作为请求Github的主机名
        changeOrigin: true,
      }
    },
    // hot: true,
    // hotOnly: true,
  },
  // devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ]
    }, {
      test: /\.png$/,
      use: {
        loader: 'url-loader', // 10kb以下的文件用url-loader模块打包，超过10kb的仍然会用file-loader打包
        options: {
          limit: 10 * 1024
        }
      }
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Html-Webpack-plugin',
      template: './src/index.html'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // 开发阶段最好不要使用这个插件
    /* new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
        to: 'public'
      }]
    }) */
    new webpack.DefinePlugin({
      API_BASE_URL: JSON.stringify('https://api.example.com'),
    })
  ]
}