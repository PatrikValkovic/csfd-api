/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const assert = require('assert')
const chai = require('chai')
chai.use(require('chai-subset'))
const filmParser = require('../../lib/parsers').film


describe('Parsing of empty type for films', function () {

  it('Type of Pirates of the Caribbean', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbean.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      type: null,
      title: 'Piráti z Karibiku: Na konci světa',
    })
  })

  it('The of The Lord of the Rings', function () {
    const content = fs.readFileSync(`${__dirname}/sites/TheLordOfTheRings.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      type: null,
    })
  })

  it('Type of Pulp Fiction', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PulpFiction.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      type: null,
    })
  })
})
