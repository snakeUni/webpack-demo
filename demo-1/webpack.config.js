const path = require('path')

module.exports = {
  mode: 'none',
  entry: './file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'file.bundle.js'
  }
}
