const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'index.ts'),
    output: {
        filename: 'principal.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
export {};
