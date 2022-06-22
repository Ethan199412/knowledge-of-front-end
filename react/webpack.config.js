const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
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
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3002,
    publicPath: "http://localhost:3002/dist/",
    historyApiFallback: {
      rewrites:[{
        from:'/ref',
        to:'/'
      },{
        from:'/context',
        to:'/'
      },{
        from:'/hoc',
        to:'/'
      },{
        from:'/redux-thunk',
        to:'/'
      }]
    }
  },
  devtool:'eval-cheap-module-source-map',
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  // ]
};