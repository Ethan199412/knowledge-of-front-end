const path = require('path')

const MODE = {
    DEV: 'development',
    PROD: 'production'
}

const PORT = 3003

const PUBLIC_PATH = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: PUBLIC_PATH,
        filename: 'bundle.js',
        publicPath: 'http://localhost:' + PORT + '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    // {
                    //     loader: 'babel-loader'
                    // },
                    'ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    mode: MODE.DEV,
    devServer: {
        // static: {
        //     directory: path.resolve(__dirname, 'public'),
        // },
        contentBase: path.resolve(__dirname, 'public'),
        port: PORT,
    },
    devtool: 'eval-cheap-module-source-map'
}