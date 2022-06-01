const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',
    entry: './src/assets/js/app.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.otf/,
          type: 'asset/source'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
};
