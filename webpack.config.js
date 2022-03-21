const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')
const { VueLoaderPlugin }  = require('vue-loader')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry : './src/index.ts',
  output : {
    filename : 'index.js',
    path :  __dirname + '/dist'
  },
  module : {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-typescript',
                {
                  allExtensions: true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          },
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackplugin({
      filename: 'index.html',
      template: path.resolve(__dirname + '/public', 'index.html')
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: { 
    host: 'localhost',
    port: 8888,
    hot: true
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue', '.json' ], // 配置ts文件可以作为模块加载
  }
}
