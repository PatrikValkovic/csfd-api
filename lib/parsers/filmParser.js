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
  let content = $(element).text().split('(')[0]
  return content.trim()
}

function parseType($) {
  const element = $('.content .header h1')[0]
  const typeElement = $(element).find('.film-type')
  if (typeElement.length === 0)
    return null
  const typeText = $(typeElement[0]).text()
  return typeText.trim().replace(/[()']/g, '')
}

function parseNames($) {
  let elements = $('.content .names li')
  return elements
    .map((i, element) => {
      let country = $(element).find('img').attr('alt')
      let name = $(element).find('h3').text()
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

function parseLength($, film) {
  let element = $('.content .origin')[0]
  let wholeLine = $(element).text()
  let timeWhole = wholeLine.substr(wholeLine.lastIndexOf(',') + 1)
  //format __ h __ min (Minutáž: __x__min) nebo __ min (Minutáž: __x__min)
  if (timeWhole.indexOf('(') !== -1 && timeWhole.indexOf('x') !== -1 && timeWhole.indexOf('(') < timeWhole.indexOf('x')) {
    let inBrackets = timeWhole.split('(')[1]
    let justTime = inBrackets.split(':')[1].split('min')[0]
    let timeParts = justTime.split('x')
    film.serialLength = {
      episodes: parseInt(timeParts[0].trim()),
      length: parseInt(timeParts[1].trim()),
    }
    let beforeBracket = timeWhole.split('(')[0]
    let justHoursAndMinutes = beforeBracket.split('min')[0]
    if(justHoursAndMinutes.includes('h')){
      let hoursAndMinutes = justHoursAndMinutes.split('h')
      let hours = parseInt(hoursAndMinutes[0].trim())
      let minutes = parseInt(hoursAndMinutes[1].trim())
      film.length = hours * 60 + minutes;
    }
    else {
      film.length = parseInt(justHoursAndMinutes.trim());
    }
  }
  //format __x__ min
  else if (timeWhole.indexOf('x') !== -1) {
    let justTime = timeWhole.split(' ')[1]
    let timeParts = justTime.split('x')
    film.serialLength = {
      episodes: parseInt(timeParts[0].replace(/\D/g, '')),
      length: parseInt(timeParts[1].replace(/\D/g, '')),
    }
    film.length = film.serialLength.episodes * film.serialLength.length
  }
  //just __min
  else {
    let onlyRegular = timeWhole.substring(0, timeWhole.indexOf('min'))
    film.length = parseInt(onlyRegular.replace(/\D/g, ''))
    film.serialLength = null
  }
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
  return $('#plots').find('ul').text().replace(/\s+/g, ' ').trim()
}

function parsePoster($) {
  const posterContainer = $('#poster')
  if (posterContainer.length === 0)
    return null
  const poster = posterContainer.find('img').attr('src').split('?')[0]
  return poster.indexOf('http') !== -1 ? poster : ('https:' + poster)
}

function parseImdb($) {
  const imdbLink = $(".imdb")
  if (imdbLink.length === 0)
    return null
  // CSFD imdbLink href looks like this http://www.imdb.com/title/tt0892769/combined
  // Corresponding IMDB ID is tt0892769
  return imdbLink.parent()[0].attribs.href.split("/")[4]
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
    imdbId: parseImdb($),
  }
  parseLength($, film)
  return film
}
