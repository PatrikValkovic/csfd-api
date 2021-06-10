/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const cheerio = require('cheerio')


function parseId($) {
  let elements = $('link[rel="alternate"]')
  return elements.first()
                 .map((_, element) => {
                   let attr = $(element).attr('href')
                   let urlWithoutFilm = attr.substr('https://www.csfd.cz/film/'.length)
                   let idInString = urlWithoutFilm.substr(0, urlWithoutFilm.indexOf('-'))
                   return parseInt(idInString)
                 })
                 .filter(Number.isInteger)[0]
}

function parseTitle($) {
  let element = $('h1[itemprop="name"]')[0]
  let content = $(element).text().split('(')[0]
  return content.trim()
}

function parseType($) {
  const element = $('header.film-header')[0]
  const typeElement = $(element).find('.type')
  if (typeElement.length === 0)
    return null
  const typeText = $(typeElement[0]).text()
  return typeText.trim().replace(/[()']/g, '')
}

function parseNames($) {
  let container = $('header.film-header ul.film-names')
  container.find('.more-name-link').remove()
  let elements = container.find('li')
  return elements.map((_, element) => {
      let country = $(element).find('img').attr('alt')
      let name = $(element).text()
      if (!country || !name)
        return null;
      return {
        language: country.trim(),
        title: name.trim(),
      }
    })
    .filter((i, e) => !!e)
    .get()
}

function parseGenres($) {
  let element = $('.film-info-content .genres')[0]
  return $(element).text().split('/').map(s => s.trim())
}

function parseShotPlaces($) {
  let element = $('.film-info-content .origin')[0]
  let wholeLine = $(element).text()
  let places = wholeLine.substr(0, wholeLine.indexOf(','))
  let splitted = places.split('/')
  return splitted.map(x => x.trim())
}

function parseYear($) {
  let element = $('.film-info-content .origin span[itemprop="dateCreated"]')[0]
  const yearString = $(element).text()
  return parseInt(yearString) || null
}

function parseLength($, film) {
  let element = $('.film-info-content .origin')[0]
  let wholeLine = $(element).text()
  let timeWhole = wholeLine.substr(wholeLine.indexOf(',', wholeLine.indexOf(',') + 1)+1).trim()
  //format __ h __ min (...) nebo __ min (...)
  if (timeWhole.indexOf('(') !== -1) {
    let leftBracket = timeWhole.indexOf('(')
    timeWhole = timeWhole.substr(0, leftBracket).trim()
  }
  //format __x__ min
  if (timeWhole.indexOf('x') !== -1) {
    let justTime = timeWhole.split(' ')[1]
    let timeParts = justTime.split('x')
    film.serialLength = {
      episodes: parseInt(timeParts[0].replace(/\D/g, '')),
      length: parseInt(timeParts[1].replace(/\D/g, '')),
    }
    film.length = film.serialLength.episodes * film.serialLength.length
  }
  //just __min
  let onlyRegular = timeWhole.substring(0, timeWhole.indexOf('min'))
  film.length = parseInt(onlyRegular.replace(/\D/g, ''))
}

function parseScore($) {
  let element = $('.box-rating-container meta[itemprop="ratingValue"]')[0]
  let content = $(element).attr('content')
  return parseFloat(content)
}

function parsePeople($, people) {
  return people.map((i, element) => {
    let name = $(element).text().trim()
    let href = $(element).attr('href')
    let idInString = href.substring(href.indexOf('/', 1) + 1, href.indexOf('-'))
    let id = parseInt(idInString)
    return {id, name}
  }).get()
}

function parsePeopleBasedOnGroup($, group) {
  let elements = $('.film-info-content .creators h4')
  let element = elements.filter((i, element) => {
    const content = $(element).text().trim()
    return content === group
  })[0]
  let parent = $(element).parent()
  parent.find('.span-more-small').remove()
  let people = parent.find('a')
  return parsePeople($, people)
}

function parseDirectors($) {
  let elements = $('.film-info-content .creators span[itemprop="director"] a')
  return parsePeople($, elements)
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
  let container = $('.plot-full')
  container.find('.span-more-small').remove()
  let content = container.text().replace(/\s+/g, ' ').trim()
  return content
}

function parsePoster($) {
  const posterContainer = $('.film-posters')
  if (posterContainer.length === 0)
    return null
  const poster = posterContainer.find('img').attr('src')
  return poster.indexOf('http') !== -1 ? poster : ('https:' + poster)
}

function parseSidebarList($, element){
  const entities = $(element).parents('section').find('.box-content .film-title-nooverflow a')
  const result = entities.map((_,entity) => {
    const name = $(entity).text().trim()
    const id = parseInt($(entity).attr('href').substr('/film/'.length).split('-')[0])
    return {id,name}
  })
  return result;
}

function parseSimilar($){
  const similarTags = $('aside.aside-movie-profile section.box h3')
  const similarTag = similarTags.filter((_,elem) => $(elem).text().trim() === "Podobné")[0]
  return parseSidebarList($, similarTag)
}

function parseRelated($){
  const relatedTags = $('aside.aside-movie-profile section.box h3')
  const relatedTag = relatedTags.filter((_,elem) => $(elem).text().trim() === "Související")[0]
  return parseSidebarList($, relatedTag)
}

/**
 *
 * @param html
 * @returns {Film}
 */
module.exports = (html) => {
  let $ = cheerio.load(html)
  let film = {
    id: parseId($),
    title: parseTitle($),
    type: parseType($),
    titles: parseNames($),
    genre: parseGenres($),
    shotPlaces: parseShotPlaces($),
    year: parseYear($),
    score: parseScore($),
    directors: parseDirectors($),
    screenplay: parseScreenplay($),
    music: parseMusic($),
    actors: parseActors($),
    content: parseContent($),
    poster: parsePoster($),
    similar: parseSimilar($),
    related: parseRelated($),
  }
  parseLength($, film)
  return film
}
