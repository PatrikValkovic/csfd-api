/**
 * Created by Patrik Valkovic
 * 2/13/2021
 */

'use strict'

const fs = require('fs')
const chai = require('chai')
chai.use(require('chai-subset'))
const filmParser = require('../../lib/parsers').film


describe('Parsing related movies', function () {

  it('Should parse Pirates of the Caribbean related movies', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbean.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      related: [{
        id: 297350,
        name: 'Pirates of the Caribbean 6',
      },{
        id: 290818,
        name: 'Piráti z Karibiku: Salazarova pomsta',
      },{
        id: 252716,
        name: 'Piráti z Karibiku: Na vlnách podivna',
      },{
        id: 194904,
        name: 'Piráti z Karibiku: Truhla mrtvého muže',
      },{
        id: 43513,
        name: 'Piráti z Karibiku: Prokletí Černé perly',
      }]
    })
  })

  it('Should parse The Lord of the Rings related movies', function () {
    const content = fs.readFileSync(`${__dirname}/sites/TheLordOfTheRings.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      related: [
        {id: 322679, name: 'Hobit: Bitva pěti armád'},
        {id: 238304, name: 'Hobit: Šmakova dračí poušť'},
        {id: 232938, name: 'Hobit: Neočekávaná cesta'},
        {id: 256926, name: 'Lov na Gluma'},
        {id: 189742, name: 'Zrození naděje'},
        {id: 4713, name: 'Pán prstenů: Dvě věže'},
        {id: 4711, name: 'Pán prstenů: Společenstvo Prstenu'},
        {id: 211588, name: 'Hobitit'},
        {id: 331341, name: 'Skazočnoje putěšestvije mistera Bilbo …'},
        {id: 33111, name: 'Return of the King, The'},
        {id: 13477, name: 'Pán prstenů'},
        {id: 74902, name: 'Hobbit, The'},
        {id: 310276, name: 'Hobit'},
      ]
    })
  })

  it('Should parse Pulp Fiction related movies', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PulpFiction.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      related: []
    })
  })
})
