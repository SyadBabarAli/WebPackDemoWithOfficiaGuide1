const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//module.exports = {

module.exports = (env) => {
    // Use env.<YOUR VARIABLE> here:
    console.log('Goal: ', env.goal); // 'local'
    console.log('Production: ', env.production); // true

    return {

        mode: 'development',
        entry: {
            index: './src/index.js',
            print: './src/print.js',
        },
        devtool: 'inline-source-map',
        devServer: {
            static: './dist',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Development',
            }),
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        optimization: {
            runtimeChunk: 'single',
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
    };
};