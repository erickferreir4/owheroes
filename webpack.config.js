const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = (env) => {

    return {
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        "style-loader",
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                        },
                    },
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images'
                    }
                },
            ],
        },

        devServer: {
            historyApiFallback: true,
            //proxy: {
            //    '/api': {
            //        target: 'http://localhost:3000',
            //        secure: false
            //    }
            //},
            contentBase: path.join(__dirname, 'public')
        },

        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './public/index.html',
                minify: false,
                chunks: ['index'],
                //favicon: "./public/favicon.png"
            }),

            new Dotenv({path: env.dev == 'true' ? './environments/.env-development': './environments/.env-production'}),

            //new CopyWebpackPlugin({
            //    patterns: [
            //        //{ from: "public/images", to: "images" },
            //        //{ from: "public/video", to: "video" },
            //        //{ from: "public/audio", to: "audio" },
            //    ],
            //})
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
    }
};
