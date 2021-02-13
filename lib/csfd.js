'use strict'
const fs = require('fs')
const got = require('got')
const parsers = require('./parsers')
const builder = require('./urlBuilder')

/**
 * Main csfd object
 * @type {object}
 */
const csfd = module.exports = {}
/**
 * Configuration
 * @type {Object}
 */
csfd.config = {}


/**
 * Search films and people on csfd.cz
 * @param {string} text Text to search
 * @returns {Promise<SearchResult>}
 */
csfd.search = async (text) => {
  const html = await got(builder.search(text))
  return parsers.search(html.body)
}

/**
 * Find film by ID
 * @param {number} id ID of person
 * @returns {Promise<Film>}
 */
csfd.film = async (id) => {
  const html = await got(builder.film(id))
  return parsers.film(html.body)
}

/**
 * Find person by id
 * @param {number} id ID of person
 * @returns {Promise<Person>}
 */
csfd.person = async (id) => {
  let html = await got(builder.person(id))
  return parsers.person(html.body)
}
/**
 * Parse all comments for a movie
 * @param {number} id ID of movie
 * @returns {Promise<Comments>}
 */
csfd.comments = async (id) => {
  let html = await got(builder.comments(id))
  return parsers.comments(html.body)
}
