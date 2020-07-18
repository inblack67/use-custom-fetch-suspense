
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./use-custom-fetch-suspense.cjs.production.min.js')
} else {
  module.exports = require('./use-custom-fetch-suspense.cjs.development.js')
}
