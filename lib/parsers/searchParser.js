/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const cheerio = require('cheerio')


function parseFilms($) {
  const containers = $('#search-films').find('.content ul')
  const detailContainer = containers.first()
  const moreFilmsContainer = containers.length === 2 ? containers[1] : null
  const detailedFilms = $(detailContainer).find('li .subject a').map((i, el) => {
    const href = $(el).attr('href')
    const idInString = href.substring(href.indexOf('/', 1) + 1, href.indexOf('-'))
    const id = parseInt(idInString)
    const name = $(el).text().trim()
    return {id, name}
  })
  let moreFilms = []
  if (moreFilmsContainer !== null)
    moreFilms = $(moreFilmsContainer).find('li a').map((i, el) => {
      const href = $(el).attr('href')
      const idInString = href.substring(href.indexOf('/', 1) + 1, href.indexOf('-'))
      const id = parseInt(idInString)
      const name = $(el).text().trim()
      return {id, name}
    })
  Array.prototype.push.apply(detailedFilms, moreFilms)
  return detailedFilms.get()
}


function parsePeople($) {
  const containers = $('#search-creators').find('.content ul')
  const detailContainer = containers.first()
  const morePeopleContainer = containers.length === 2 ? containers[1] : null
  const detailedActors = $(detailContainer).find('li .subject a').map((i, el) => {
    const href = $(el).attr('href')
    const idInString = href.substring(href.indexOf('/', 1) + 1, href.indexOf('-'))
    const id = parseInt(idInString)
    const name = $(el).text().trim()
    return {id, name}
  })
  let moreActors = []
  if (morePeopleContainer !== null)
    moreActors = $(morePeopleContainer).find('li a').map((i, el) => {
      const href = $(el).attr('href')
      const idInString = href.substring(href.indexOf('/', 1) + 1, href.indexOf('-'))
      const id = parseInt(idInString)
      const name = $(el).text().trim()
      return {id, name}
    })
  Array.prototype.push.apply(detailedActors, moreActors)
  return detailedActors.get()
}


module.exports = (html) => {
  const $ = cheerio.load(html)
  return {
    films: parseFilms($),
    people: parsePeople($),
  }
}
