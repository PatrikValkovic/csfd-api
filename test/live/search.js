/**
 * Created by Patrik Valkovic
 * 8/8/17.
 */

'use strict'

const should = require('should')
const assert = require('assert')
const csfd = require('../../lib/csfd')


describe('It should parse live data from search', function () {

  it('Should parse base information based on startrek search', function (done) {
    csfd.search('startrek')
      .then((results) => {
        results.films.should.containDeep([
          {id: 335282, name: 'Star Trek: Do neznáma'},
          {id: 69502, name: 'Star Trek: Enterprise'},
          {id: 73509, name: 'Star Trek World Tour'},
        ])
        results.people.should.be.eql([])
        done()
      })
  })

})
