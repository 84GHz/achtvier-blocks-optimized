var webpack = require('webpack');
var glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractNormalCSS = new ExtractTextPlugin("style.css");
const ExtractEditorCSS = new ExtractTextPlugin("editor.css");

var config = {
    // TODO: Add common Configuration
    module: {},
};

// here we compile the block js and scss
var blockconfig = Object.assign({}, config, {
  entry: ['./block-library/src/mainindex.js','./block-library/src/style.scss','./block-library/src/editor.scss'],
  output: {
    path: __dirname + '/build',
    filename: 'index.js',
    library: 'achtvier-blocks-optimized',
    libraryTarget: 'umd'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
            {
                test: /.style\.scss$/i,
                use: ExtractNormalCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
              {
                test: /.editor\.scss$/i,
                use: ExtractEditorCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }

    ]

  },

  plugins: [
    ExtractNormalCSS,
    ExtractEditorCSS
  ]
});

// here we compile the external js assets, that are to be loaded;
var assetconfig =  Object.assign({}, config, {
  entry: glob.sync("./asset-library/src/**/*.js"),
  output: {
    path: __dirname + '/build/assets',
    filename: 'avassets.js',
    library: 'achtvier-blocks-optimized',
    libraryTarget: 'umd'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]

  },
});

/*
if (process.env.AVB_WEBPACK === 'build_min') {

  config.output.path = './build/';
  config.output.filename = config.output.filename.replace(/\.js$/, '.min.js');
}
*/

module.exports = [blockconfig, assetconfig];
