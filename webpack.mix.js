const mix = require('laravel-mix')
const path = require('path')
const tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue({
        version: 3,
        extractStyles: true,
        globalStyles: false,
    })
    .postCss('resources/css/app.css', 'public/css', [tailwindcss])

// New Alias plugin
mix.alias({
    '@': path.resolve('resources/js'),
})

// config eslint
mix.webpackConfig({
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                test: /\.(js|vue)?$/,
            },
        ],
    },
})
