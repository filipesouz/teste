const webpack = require('webpack')
module.exports = {
    mode:'development',
    entrey:'./src/principal.js',
    output: {
        filename:'principal.js',
        path:__dirname + '/public'
    }
}