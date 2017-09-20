/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const cheerio = require('cheerio')


function parseId($) {
  let elements = $('.ct-general .navigation a')
  let id = null
  elements.each((i, element) => {
    let attr = $(element).attr('href')
    let urlWithoutFilm = attr.substr(6)
    let idInString = urlWithoutFilm.substr(0, urlWithoutFilm.indexOf('-'))
    let parsedId = parseInt(idInString)
    id = id || parsedId
    if (id !== parsedId) {
      id = 'unknown'
      return false
    }
  })
  return id
}

function parseTitle($) {
  let element = $('.content .header h1')[0]
  let content = $(element).text().split("(")[0]
  return content.trim()
}

function parseType($) {
  let element = $('.content .header h1')[0]
  const headLineText = $(element).text();
  let content = headLineText.indexOf('(') != -1 ? $(element).text().split("(")[1] : headLineText;
  return content.trim().replace(/[()']/g,'') || null
}

function parseNames($) {
  let elements = $('.content .names li')
  return elements.map((i, element) => {
    let country = $(element).find('img').attr('alt')
    let name = $(element).find('h3').text()
    return {
      language: country.trim(),
      title: name.trim(),
    }
  }).get()
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
  let onlyRegular = timeWhole.substring(0, timeWhole.indexOf('min'))
  if (timeWhole.indexOf('x') != -1 ){
     onlyRegular = timeWhole.substring(timeWhole.lastIndexOf('x'), timeWhole.lastIndexOf('min'))
  }
  return parseInt(onlyRegular.replace(/\D/g,''))
}
function parseScore($) {
  let element = $('#rating').find('.average')[0]
  let content = $(element).text()
  let withoutPercent = content.substr(0, content.indexOf('%'))
  return parseInt(withoutPercent)
}

function parsePeople(people) {
  const $ = cheerio
  return people.map((i, element) => {
    let name = $(element).text().trim()
    let href = $(element).attr('href')
    let idInString = href.substring(href.indexOf('/', 1) + 1, href.indexOf('-'))
    let id = parseInt(idInString)
    return {id, name}
  }).get()
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
  return $('#plots ul').text().replace(/\s+/g,' ').trim()
}

function parsePoster($) {
  const poster = $('#poster img').attr('src').split('?')[0];
  return poster.indexOf('https:') != -1 ? poster : ('https:' + poster);
}
/**
 *
 * @param html
 * @param cb
 * @returns {Film}
 */
module.exports = (html) => {
  let $ = cheerio.load(html)
  return {
    id: parseId($),
    title: parseTitle($),
    type: parseType($),
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
    poster: parsePoster($)
  }
}
