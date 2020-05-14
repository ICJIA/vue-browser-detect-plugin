const { resolve } = require('path')

module.exports = function nuxtBrowserDetect() {
  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'browser-detect-plugin.js'
  })
}

module.exports.meta = require('../package.json')