/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const cheerio = require('cheerio')


function parseId($) {
  let elements = $('div.header h2 a')
  let id = null
  elements.each((i, element) => {
    let attr = $(element).attr('href')
    let urlWithoutFilm = attr.substr(6)
    let idInString = urlWithoutFilm.substr(0, urlWithoutFilm.indexOf('-'))
    let parsedId = parseInt(idInString)
    id = id || parsedId
    if (id !== parsedId) {
      //TODO error?
    }
  })
  return id
}

function parseTitle($) {
  let element = $('.content .header h1')[0]
  let content = $(element).text()
  return content.trim()
}

function parseNames($) {
  let elements = $('.content .names li')
  let names = elements.map((i, element) => {
    let country = $(element).find('img').attr('alt')
    let name = $(element).find('h3').text()
    return {
      language: country.trim(),
      title: name.trim(),
    }
  })
  return names
}

function parseGenres($) {
  let element = $('.content .genre')[0]
  return $(element).text().split('/').map(g => g.trim())
}
function parseShotPlaces($) {
  let element = $('.content .origin')[0]
  let wholeLine = $(element).text()
  let places = wholeLine.substr(0, wholeLine.indexOf(','))
  let splitted = places.split('/')
  return splitted.map(x => x.trim())
}
function parseYear($) {
  let element = $('.content .origin span')[0]
  const yearString = $(element).text()
  return parseInt(yearString)
}
function parseLength($) {
  let element = $('.content .origin')[0]
  let wholeLine = $(element).text()
  let timeWhole = wholeLine.substr(wholeLine.lastIndexOf(',') + 1)
  let onlyRegular = timeWhole.substr(0, timeWhole.indexOf('min'))
  return parseInt(onlyRegular)
}
function parseScore($) {
  let element = $('#rating .avarage')[0]
  let content = $(element).text()
  let withoutPercent = content.substr(0, content.indexOf('%'))
  return parseInt(withoutPercent)
}

function parsePeople(people) {
  const $ = cheerio
  return people.map((i, element) => {
    let name = $(element).text().trim()
    let href = $(element).attr('href')
    let idInString = href.substr(href.indexOf('/', 1) + 1, href.indexOf('-', 8))
    let id = parseInt(idInString)
    return {id, name}
  })
}
function parsePeopleBasedOnGroup($, group) {
  let elements = $('.content .creators h4')
  let element = elements.filter((i, element) => {
    const content = $(element).text().trim()
    return content === group
  })[0]
  let people = $(element).parent().find('a')
  return parsePeople(people)
}

function parseDirectors($) {
  let elements = $('.content .creators span[itemprop=director] a')
  return parsePeople(elements)
}

function parseScreenplay($) {
  return parsePeopleBasedOnGroup($, 'Scénář:')
}

function parseMusic($) {
  return parsePeopleBasedOnGroup($, 'Hudba:')
}

function parseActors($) {
  return parsePeopleBasedOnGroup($, 'Hrají:')
}

function parseContent($) {
  return $('#plots ul').text().trim()
}
/**
 *
 * @param html
 * @param cb
 * @returns {Film}
 */
module.exports = (html, cb) => {
  let $ = cheerio.load(html)
  return {
    id: parseId($),
    title: parseTitle($),
    titles: parseNames($),
    genre: parseGenres($),
    shotPlaces: parseShotPlaces($),
    year: parseYear($),
    length: parseLength($),
    score: parseScore($),
    directors: parseDirectors($),
    screenplay: parseScreenplay($),
    music: parseMusic($),
    actors: parseActors($),
    content: parseContent($),
  }
}
