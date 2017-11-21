/**
 * Created by Patrik Valkovic
 * 9/22/17.
 */

'use strict'

const fs = require('fs')
const chai = require('chai')
chai.use(require('chai-subset'))
const filmParser = require('../../lib/parsers').film

describe('Should parse series with correct title and type', function () {

  it('Should parse Game of Thrones', function () {
    const content = fs.readFileSync(`${__dirname}/sites/GameOfThronesSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      title: 'Hra o trůny',
      type: 'TV seriál',
    })
  })

  it('Should parse Futurama', function () {
    const content = fs.readFileSync(`${__dirname}/sites/FuturamaSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      title: 'Futurama',
      type: 'TV seriál',
    })
  })

  it('Should parse Spongebob', function () {
    const content = fs.readFileSync(`${__dirname}/sites/SpongebobSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      title: 'Spongebob v kalhotách',
      type: 'TV seriál',
    })
  })

  it('Should parse Three shorts from Miami', function () {
    const content = fs.readFileSync(`${__dirname}/sites/ThreeShortsMiami.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      title: 'Tři výstřely',
      type: 'epizoda',
    })
  })

})
