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
    csfd.person(65871)
      .then((person) => {
        person.name.should.be.equal('Kit Harington')
        person.birthday.getTime().should.be.equal(new Date(1986, 12, 26).getTime())
        person.films.should.containDeep([{
          id: 405784,
          name: 'Brimstone',
        }])
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
