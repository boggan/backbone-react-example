const
    path = require("path"),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    BUILD_DIR = path.resolve(__dirname, "dist/debug/"),
    SRC_DIR = path.resolve(__dirname, "src/");

// config
module.exports = {
    entry: path.join(SRC_DIR, "loader.js"),
    mode: "development",
    output: {
        path: BUILD_DIR,
        libraryTarget: "umd",
        libraryExport: 'default',
        filename: "helloFactory.js",
    },
    target: "web",
    devtool: 'inline-source-map', // inline-source-map -- cheap-source-map
    plugins: [
        new CleanWebpackPlugin({
            verbose: false
        })
    ],
    resolve: {
        modules: [
            path.resolve(),
            'node_modules',
            'src/',
            'src/components/'
        ]
    },
    module: {
        rules: [{
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ['style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}