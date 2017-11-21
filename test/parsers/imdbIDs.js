/**
 * Created by Patrik Valkovic
 * 21.11.2017.
 */

'use strict'

const fs = require('fs')
const chai = require('chai')
chai.use(require('chai-subset'))
const filmParser = require('../../lib/parsers').film

describe('Should parse IMDB ID\'s for films', function(){
  it('Pirates of the Caribbean', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbean.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      imdbId: 'tt0449088',
    })
  })

  it('The of The Lord of the Rings', function () {
    const content = fs.readFileSync(`${__dirname}/sites/TheLordOfTheRings.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      imdbId: 'tt0167260',
    })
  })

  it('Type of Pulp Fiction', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PulpFiction.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      imdbId: 'tt0110912',
    })
  })
})

describe('Should parse IMBD ID\' for series', function(){
  it('Should parse Game of thrones', function () {
    const content = fs.readFileSync(`${__dirname}/sites/GameOfThronesSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      imdbId: 'tt0944947',
    })
  })

  it('Should parse Futurama', function () {
    const content = fs.readFileSync(`${__dirname}/sites/FuturamaSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      imdbId: 'tt0149460',
    })
  })

  it('Should parse Spongebob', function () {
    const content = fs.readFileSync(`${__dirname}/sites/SpongebobSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      imdbId: 'tt0206512',
    })
  })

  it('Should parse Three shorts from Miami', function () {
    const content = fs.readFileSync(`${__dirname}/sites/ThreeShortsMiami.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      imdbId: null,
    })
  })
})
