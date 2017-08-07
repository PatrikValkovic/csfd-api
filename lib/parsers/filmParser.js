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

function parseTitle($){
  let element = $('.content .header h1')[0]
  let content = $(element).text()
  return content.trim()
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
    titles: [
      {
        language: '',
        title: '',
      },
    ],
    genre: [
      '',
      '',
    ],
    shotPlaces: [
      '',
      '',
    ],
    year: 2000,
    length: 120,
    score: 80,
    directors: [
      {
        id: 0,
        name: '',
      },
    ],
    screenplay: [
      {
        id: 0,
        name: '',
      },
    ],
    music: [
      {
        id: 0,
        name: '',
      },
    ],
    actors: [
      {
        id: 0,
        name: '',
      },
    ],
    content: '',
  }
}
