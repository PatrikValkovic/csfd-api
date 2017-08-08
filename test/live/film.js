/**
 * Created by Patrik Valkovic
 * 8/8/17.
 */

'use strict'

const should = require('should')
const assert = require('assert')
const csfd = require('../../lib/csfd')


describe('It should parse live data about film', function () {

  it('Should parse base information about How to train a dragon', function (done) {
    csfd.film(234768)
      .then((film) => {
        film.id.should.be.equal(234768)
        film.title.should.be.equal('Jak vycvičit draka')
        film.actors.should.containDeep([
          {id: 7679, name: 'Craig Ferguson'},
        ])
        film.directors.should.containDeep([
          {id: 5082, name: 'Chris Sanders'},
        ])
        done()
      })
  })

})
