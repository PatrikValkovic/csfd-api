'use strict';

const request = require('request-promise');
const parsers = require('./parsers')
const builder = require('./urlBuilder')

/**
 * Main csfd object
 * @type {object}
 */
const csfd = module.exports.csfd = {};
/**
 * Configuration
 * @type {Object}
 */
csfd.config = {};



csfd.search = async (text) => {
  const html = await request(builder.search(text))
  return parsers.search(html)
}

csfd.film = async (id) => {
  const html = await request(builder.film(id))
  return parsers.film(html)
}

csfd.person = async (text) => {
  const html = await request(builder.person(text))
  return parsers.person(html)
}
