/**
 * Created by Patrik Valkovic
 * 9/22/17.
 */

'use strict'

const fs = require('fs')
const chai = require('chai')
chai.use(require('chai-subset'))
const filmParser = require('../../lib/parsers').film

describe('Should parse series with correct length', function () {

  it('Should parse Game of thrones with correct length', function () {
    const content = fs.readFileSync(`${__dirname}/sites/GameOfThronesSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      length: 60 * 60 + 39,
      serialLength: {
        episodes: 67,
        length: 60,
      },
    })
  })

  it('Should parse Futurama with correct length', function () {
    const content = fs.readFileSync(`${__dirname}/sites/FuturamaSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      length: 45 * 60 + 36,
      serialLength: {
        episodes: 124,
        length: 22,
      },
    })
  })

  it('Should parse Spongebob with correct length', function () {
    const content = fs.readFileSync(`${__dirname}/sites/SpongebobSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      length: 220 * 25,
      serialLength: {
        episodes: 220,
        length: 25,
      },
    })
  })


})
