/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const cheerio = require('cheerio')
const filmParser = require('./filmParser')

function parseFilms($) {
  const containers = $('#search-films').find('.content ul')
  const detailContainer = containers.first()
  const moreFilmsContainer = containers.length === 2 ? containers[1] : null
  const profileFilmContainer = $("#profile");
  if(profileFilmContainer.length === 1){
    const film = filmParser($.html());
    return [{
      id: film.id,
      name: film.title,
      year: film.year,
      type: film.type
    }]
  }
  else {
    const detailedFilms = $(detailContainer).find('li').map((i, el) => {
      const a = $(el).find('.subject a');
      const href = $(a).attr('href')
      const idInString = href.substring(href.indexOf('/', 1) + 1, href.indexOf('-'))
      const id = parseInt(idInString)
      const name = $(a).text().trim()
      const info = $(el).find('div p').first().text();
      const yearInString = info.substring(info.lastIndexOf(',') + 1, info.length).trim()
      const year = parseInt(yearInString);
      const searchName = $(el).find('.search-name').text().replace(/[()']/g, '') || null;
      const type = $(el).find('.film-type').text().replace(/[()']/g, '') || null;
      return {id, name, year, searchName, type}
    })
    let moreFilms = []
    if (moreFilmsContainer !== null)
      moreFilms = $(moreFilmsContainer).find('li').map((i, el) => {
        const a = $(el).find('a');
        const href = $(a).attr('href')
        const idInString = href.substring(href.indexOf('/', 1) + 1, href.indexOf('-'))
        const id = parseInt(idInString)
        const name = $(a).text().trim()
        const yearInString = $(el).find('.film-year').text().replace(/[()']/g, '')
        const year = parseInt(yearInString);
        const searchName = $(el).find('.search-name').text().replace(/[()']/g, '') || null;
        const type = $(el).find('.film-type').text().replace(/[()']/g, '') || null;
        return {id, name, year, searchName, type}
      })
    Array.prototype.push.apply(detailedFilms, moreFilms)
    return detailedFilms.get()
  }
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
