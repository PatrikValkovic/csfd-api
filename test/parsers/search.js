/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const assert = require('assert')
const searchParser = require('../../lib/parsers').search


describe('Parsing of search sites', function () {

  it('Should parse Quentin Tarantino from search page', async function () {
    const content = fs.readFileSync(`${__dirname}/sites/QuentinTarantinoSearch.html`)
    const parsed = await searchParser(content)
    assert.deepStrictEqual(parsed, {
      films: [
        {id: 308772, name: 'Tarantino\'s Mind'},
        {id: 322063, name: 'Tarantino, le disciple de Hong-Kong'},
        {id: 63695, name: 'Tarantino XX - 20 Years of Filmmaking'},
      ],
      people: [
        {id: 2120, name: 'Quentin Tarantino'},
        {id: 53819, name: 'Paul Tarantino'},
        {id: 67762, name: 'Lisa Catara'},
        {id: 98009, name: 'Tony Tarantino'},
      ],
    })
  })

  it('Should parse Pirates of the Caribbean film from search page', async function () {
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbeanSearch.html`)
    const parsed = await searchParser(content)
  })

  it('Should parse Kit Harington from search page', async function () {
    const content = fs.readFileSync(`${__dirname}/sites/KitHaringtonSearch.html`)
    const parsed = await searchParser(content)
  })

})
