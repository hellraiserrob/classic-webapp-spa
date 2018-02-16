const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

// function pugPage(name, extension) {
//   return new HtmlWebpackPlugin({
//     filename: name + '.html',
//     template: `./src/templates/pages/${name}.${extension}`,
//     minify: false
//   });
// }

// Our function that generates our html plugins
function generateHtmlPlugins (templateDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1]
    // Create new HTMLWebpackPlugin with options
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      minify: false
    })
  })
}

// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('./src/templates/pages')


// function nunjucksPage(name) {
//     return new HtmlWebpackPlugin({
//         filename: name + '.html',
//         template: './src/templates/pages/' + name + '.nunjucks'
//     })
// }


module.exports = {
  stats: 'minimal',
  devtool: 'cheap-module-source-map',
  entry: './src/scripts/index.js',
  // output: {
  //     filename: 'bundle.js',
  //     path: path.resolve(__dirname, 'dist')
  // },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      // loader: "eslint-loader"
      use: [{
        loader: 'babel-loader'
      },
        'eslint-loader'
      ]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader!eslint-loader'
        },
        extractCSS: true
      }
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      })
    }, {
      test: /\.pug$/,
      loader: 'pug-loader',
      query: {
        pretty: true
      }
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }, {
      test: /\.test$/,
      use: 'mocha-loader',
      exclude: /node_modules/,
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    // compress: true,
    port: 9000,
    watchContentBase: true
  },
  plugins: [

    // pugPage('index'),
    // pugPage('form'),


    // new HtmlWebpackPlugin({
    //     filename: 'index.html',
    //     template: './src/templates/layout.html'
    // }),

    // new HtmlWebpackPlugin({
    //     filename: 'index.html',
    //     template: './src/index.pug'
    // }),

    // new HtmlWebpackPlugin({
    //     filename: 'test.html',
    //     template: './src/test.pug'
    // }),

    // new HtmlWebpackPlugin({
    //     template: './src/index.pug'
    // }),
    // new HtmlWebpackPlugin({

    //     filename: './src/test.html',
    //     template: './src/test.pug'
    // }),
    new ExtractTextPlugin('styles.css')
  ].concat(htmlPlugins),
};