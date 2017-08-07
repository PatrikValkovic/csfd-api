/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const cheerio = require('cheerio')

function parseId($) {
  const element = $('.biography a')[0]
  const href = $(element).attr('href')
  const id = href.substring(href.indexOf('/', 1) + 1, href.indexOf('-'))
  return parseInt(id)
}

function parseName($) {
  const element = $('.content .info h1')[0]
  return $(element).text().trim()
}

function parseBirthday($) {
  const element = $('.content .info li')[0]
  const textNodes = $(element).contents().filter((i, el) => el.type === 'text')
  const textDate = $(textNodes[0]).text().trim()
  const dateInText = textDate.split(' ')[1]
  const splitedDate = dateInText.split('.')
  const num = splitedDate.map(x => parseInt(x))
  return new Date(num[2], num[1], num[0])
}

function parseResidence($) {
  const element = $('.content .info li')[0]
  const textNodes = $(element).contents().filter((i, el) => el.type === 'text')
  return $(textNodes[textNodes.length - 1]).text().trim()
}

function parseBiography($) {
  const linkBiography = $('.content span').filter((i, el) => $(el).text() === 'biografie 1')[0]
  const container = $(linkBiography).parents('.content')[0]
  const biographyParagraph = $(container).find('p')[0]
  const biography = $(biographyParagraph).text()
  return biography.replace(/\s+/g, ' ').trim()
}


function parseFilms($) {
  const mainHeadings = $('#filmography .header h2')
  const filmographyHeading = mainHeadings.filter((i, el) => $(el).text() === 'Herecká filmografie')
  if (filmographyHeading.length === 0)
    return []
  const wholeContainer = $(filmographyHeading[0]).parents('div.th')[0]
  const allHeadings = $(wholeContainer).find('.content h4')
  const filmsHeading = allHeadings.filter((i, el) => $(el).text().trim() === 'Filmy')[0]
  const containerForFilms = $(filmsHeading).next('table')
  const allLinks = containerForFilms.find('tr td a')
  const films = allLinks.map((i, el) => {
    const link = $(el).attr('href')
    const idInString = link.substring(link.indexOf('/', 1) + 1, link.indexOf('-'))
    const name = $(el).text().trim()
    return {id: parseInt(idInString), name}
  })
  return films.get()
}

module.exports = (html) => {
  const $ = cheerio.load(html)
  return {
    id: parseId($),
    name: parseName($),
    birthday: parseBirthday($),
    residence: parseResidence($),
    bibliography: parseBiography($),
    films: parseFilms($),
  }
}
