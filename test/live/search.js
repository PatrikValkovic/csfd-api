/**
 * Created by Patrik Valkovic
 * 8/8/17.
 */

'use strict'

const should = require('should')
const assert = require('assert')
const csfd = require('../../lib/csfd')


describe('It should parse live data about people', function () {

  it('Should parse base information about Kit Harington', function (done) {
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

  it('Should parse base information about Kit Harington', function (done) {
    csfd.person(166)
      .then((person) => {
        person.name.should.be.equal('Viggo Mortensen')
        person.birthday.getTime().should.be.equal(new Date(1958, 10, 20).getTime())
        person.films.should.containDeep([
          {id: 4711, name: 'Pán prstenů: Společenstvo Prstenu',},
          {id: 4713, name: 'Pán prstenů: Dvě věže',},
          {id: 4712, name: 'Pán prstenů: Návrat krále',},
        ])
        done()
      })
  })

})
