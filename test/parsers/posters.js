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


describe('Correct urls of posters', function () {

  it('Pirates of the Caribbean film', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbean.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      poster: 'https://img.csfd.cz/files/images/film/posters/158/605/158605415_6f7387.jpg',
    })
  })

  it('The Lord of the Rings film', function () {
    const content = fs.readFileSync(`${__dirname}/sites/TheLordOfTheRings.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      poster: 'https://img.csfd.cz/files/images/film/posters/158/600/158600814_9bc57f.jpg',
    })
  })

  it('Pulp Fiction film', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PulpFiction.html`)
    const parsed = filmParser(content)
    const vzor = {
      poster: 'https://img.csfd.cz/files/images/film/posters/158/336/158336635_61bc7c.jpg',
    }
    chai.assert.containSubset(parsed, vzor)
  })

  it('Game of Thrones series', function () {
    const content = fs.readFileSync(`${__dirname}/sites/GameOfThronesSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      poster: 'https://img.csfd.cz/files/images/film/posters/000/351/351505_fc527f.jpg',
    })
  })

  it('Futurama series', function () {
    const content = fs.readFileSync(`${__dirname}/sites/FuturamaSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      poster: 'https://img.csfd.cz/files/images/film/posters/158/295/158295491_04580f.jpg',
    })
  })

  it('Futurama series with HTTPS', function () {
    const content = fs.readFileSync(`${__dirname}/sites/FuturamaSerialWithDirectImageLink.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      poster: 'https://img.csfd.cz/files/images/film/posters/158/295/158295491_04580f.jpg',
    })
  })

  it('Spongebob serial', function () {
    const content = fs.readFileSync(`${__dirname}/sites/SpongebobSerial.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      poster: 'https://img.csfd.cz/files/images/film/posters/158/026/158026775_08f97b.jpg',
    })
  })

  it('Should parse Three shorts from Miami', function () {
    const content = fs.readFileSync(`${__dirname}/sites/ThreeShortsMiami.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      poster: null,
    })
  })

})
