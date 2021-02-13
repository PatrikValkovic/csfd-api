/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

/**
 * @class TranslateTitle
 *
 * @property {string} language
 * @property {string} title
 */

/**
 * @class ShortenEntity
 *
 * @property {number} id
 * @property {string} name
 */

/**
 * @class ShortenFilm
 * @property {number} id
 * @property {string} name
 * @property {number} year
 * @property {string} searchName
 * @property {string} type
 */

/**
 * @class Film
 *
 * @property {number} id
 * @property {string} title
 * @property {string} type
 * @property {TranslateTitle[]} titles
 * @property {string[]} genre
 * @property {string[]} shotPlaces
 * @property {number} year
 * @property {number} length
 * @Property {SerialLength} serialLength
 * @property {number} score
 *
 * @property {ShortenEntity[]} directors
 * @property {ShortenEntity[]} screenplay
 * @property {ShortenEntity[]} music
 * @property {ShortenEntity[]} actors
 *
 * @property {string} content
 * @property {string} poster
 */

 /**
 * @class SerialLength
 *
 * @property {number} episodes
 * @property {number} length
 */

/**
 * @class Person
 *
 * @property {number} id
 * @property {string} name
 * @property {Date} birthday
 * @property {string} residence
 *
 * @property {string} bibliography
 * @property {ShortenEntity[]} films
 */

/**
 * @class SearchResult
 *
 * @property {ShortenFilm[]} films
 * @property {ShortenEntity[]} people
 */

/**
 * @class Comments
 *
 * @property {Comment[]} comments
 */

/**
 * @class Comment
 *
 * @property {ShortenEntity} author
 * @property {number} rating
 * @property {string} content
 * @property {Date} date
 */


/** @type Film */
const film = {
  id: 0,
  title: '',
  type: '',
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
  serialLength: {
    episodes: 2,
	length: 60
  },
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
  poster: ''
}


/** @type SearchResult */
const searchResult = {
  films: [
    {
      id: 0,
      name: '',
      type: '',
      year: 0
    },
  ],
    people: [
  {
    id: 0,
    name: '',
  },
]
}

/** @type Person */
const person = {
  id: 0,
  name: '',
  birthday: new Date(1950,1,1),
  residence: '',
  bibliography: '',
  films: [
    {
      id: 0,
      name: ''
    }
  ]
}

/** @type Comments */
const comments = {
  comments: [{
    author: {
      id: 0,
      name: ' '
    },
    rating: 1,
    content: '',
    date: new Date(),
  },{
    author: {
      id: 0,
      name: ' '
    },
    rating: 1,
    content: '',
    date: new Date(),
  }],
}
