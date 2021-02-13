/**
 * Created by Patrik Valkovic
 * 02/13/2021
 */

'use strict'

const cheerio = require('cheerio')

/**
 * @param _
 * @param {Node} commentElement
 * @returns {Comment}
 */
function parseComment(_, commentElement){
  let $ = cheerio

  let authorLink = $('.author a', commentElement)
  let authorName = authorLink.text()
  let authorId = parseInt(
    authorLink.attr('href')
    .split('/uzivatel/')[1]
    .split('-')[0]
  )

  let altText = $('img.rating', commentElement).attr('alt')
  let rating = altText ? altText.length : 0

  let postElement = $('p.post', commentElement)
  let dateElement = $('.date', postElement)
  let dateText = dateElement.text()
  dateText = dateText.substr(1, dateText.length-2)
  let dateSplit = dateText.split('.')
  let date = new Date(parseInt(dateSplit[2]), parseInt(dateSplit[1]), parseInt(dateSplit[0]))

  dateElement.remove()
  let content = postElement.text().trim().replace(/  +/g, ' ');

  return {
    author: {
      id: authorId,
      name: authorName
    },
    rating,
    date,
    content
  }
}

/**
 *
 * @param html
 * @returns {Comments}
 */
module.exports = (html) => {
  let $ = cheerio.load(html)
  const commentsElements = $('.content ul.ui-posts-list li');
  const comments = [...commentsElements.map(parseComment)];
  return {
    comments,
  }
}
