const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundl.js',
        path: path.resolve(__dirname, 'dist')
    }
}