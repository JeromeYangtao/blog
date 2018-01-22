const util = require('util')

function log () {
  process.stdout.write(
    util.format.apply(this, arguments)
  )
}