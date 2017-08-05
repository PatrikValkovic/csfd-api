/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const filmParser = require('./filmParser')
const personParser = require('./personParser')
const searchParser = require('./searchParser')

module.exports = {
  film: filmParser,
  person: personParser,
  search: searchParser,
}
