/**
 * Created by Patrik Valkovic
 * 21.11.2017.
 */

'use strict'

const fs = require('fs')
const chai = require('chai')
chai.use(require('chai-subset'))
const filmParser = require('../../lib/parsers').film

describe('Should parse films with multiple parts', function () {
  it('Arn', function () {
    const content = fs.readFileSync(`${__dirname}/sites/Arn.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      length: 2 * 75,
      serialLength: {
        episodes: 2,
        length: 75,
      },
    })
  })

  it('Dinotopie', function () {
    const content = fs.readFileSync(`${__dirname}/sites/Dinotopie.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      length: 3 * 82,
      serialLength: {
        episodes: 3,
        length: 82,
      },
    })
  })

  it('Joan of Arc', function () {
    const content = fs.readFileSync(`${__dirname}/sites/JoanOfArc.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      length: 2 * 90,
      serialLength: {
        episodes: 2,
        length: 90,
      },
    })
  })

  it('Velka dobrodruzstvi ctyrlistku', function () {
    const content = fs.readFileSync(`${__dirname}/sites/VelkaDobrodruzstviCtyrlistku.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      length: 72,
      serialLength: {
        episodes: 4,
        length: 15,
      },
    })
  })
})
