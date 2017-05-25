module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // module: {
    //     loader: [{
    //         loader: 'babel-loader',
    //         query: {
    //             presets: ['react', 'es2015']
    //         },
    //         test: /\.jsx?$/,
    //         exclude: /(node_module|bower_components)/
    //     }]
    // }
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
}