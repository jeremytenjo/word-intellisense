const forwardSlash = require('./forwardSlash')

/**
 * Supports Mac and Windows
 * @example
 * splitPath('/project/heoo')
 *
 * returns ['project', 'heoo']
 */
module.exports = function splitPath(path) {
  console.log({ forwardSlash })
  return path.split(forwardSlash)
}
