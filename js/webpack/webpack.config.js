const path = require("path");
const webpack = require("webpack");

const port = 3006

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // { loader: 'thread-loader', options: { workers: 3 } },
          {
            loader: 'babel-loader',
            options: {
              // 启用缓存机制，在重复打包未改变过的模块时防止二次编译，同时加快打包速度
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            // 不仅提升了性能，也解决了 ts-loader 和 thread-loader 兼容性问题
            options: {
              happyPackMode: true
            }
          },
        ],
        exclude: /(node_modules|bower_components|dist)/,
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.ts', '.tsx', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port,
    publicPath: `http://localhost:${port}/dist/`,
    historyApiFallback: {
      rewrites: [{
        from: '/ref',
        to: '/'
      }, {
        from: '/context',
        to: '/'
      }, {
        from: '/hoc',
        to: '/'
      }, {
        from: '/redux-thunk',
        to: '/'
      }]
    }
  },
  devtool: 'eval-cheap-module-source-map',
};