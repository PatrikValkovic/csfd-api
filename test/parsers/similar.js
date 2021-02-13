/**
 * Created by Patrik Valkovic
 * 2/13/2021
 */

'use strict'

const fs = require('fs')
const chai = require('chai')
chai.use(require('chai-subset'))
const filmParser = require('../../lib/parsers').film


describe('Parsing similar movies', function () {

  it('Should parse Pirates of the Caribbean similar movies', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbean.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      similar: [
        {id: 349774, name: 'Piráti'},
        {id: 285924, name: 'Ostrov pokladů'},
        {id: 251517, name: 'Ostrov pokladů'},
        {id: 229847, name: 'Ostrov pokladů'},
        {id: 225949, name: 'Piráti ostrova pokladů'},
        {id: 18251, name: 'Planeta pokladů'},
        {id: 270270, name: 'Ostrov pokladů: Poklad kapitána Flinta'},
        {id: 15229, name: 'Ostrov pokladů'},
        {id: 120294, name: 'Return to Treasure Island'},
        {id: 4156, name: 'Ostrov hrdlořezů'},
        {id: 14268, name: 'Ostrov pokladů'},
        {id: 241033, name: 'Ostrov sokrovišč'},
        {id: 269148, name: 'Ostrov pokladů'},
        {id: 83902, name: 'Ostrov pokladů'},
        {id: 83885, name: 'Silverův návrat na ostrov pokladů'},
        {id: 20291, name: 'Treasure Island'},
        {id: 139440, name: 'Ostrov pokladů'},
        {id: 153481, name: 'Takaradžima'},
        {id: 157578, name: 'Treasure Island'},
        {id: 102651, name: 'Ostrov pokladů'},
        {id: 4536, name: 'Ostrov pokladů'},
        {id: 189089, name: 'Ostrov sokrovishch'},
        {id: 113272, name: 'Poklad na ostrově'},
        {id: 101420, name: 'Poklad na ostrově'},
        {id: 299603, name: 'Adventures of Long John Silver, The'},
        {id: 109364, name: 'Return to Treasure Island'},
        {id: 36749, name: 'Long John Silver'},
        {id: 46806, name: 'Ostrov pokladů'},
        {id: 99413, name: 'Ostrov sokrovishch'},
        {id: 2812, name: 'Ostrov pokladů'},
        {id: 47801, name: 'Treasure Island'},
        {id: 85598, name: 'Treasure Island'},
      ]
    })
  })

  it('Should parse The Lord of the Rings similar movies', function () {
    const content = fs.readFileSync(`${__dirname}/sites/TheLordOfTheRings.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      similar: [
        {id: 295160, name: 'Chronicles of Narnia: The Silver Chair …'},
        {id: 278676, name: 'Chronicles of Narnia: The Magician\'s …'},
        {id: 243146, name: 'Letopisy Narnie: Plavba Jitřního …'},
        {id: 221770, name: 'Letopisy Narnie: Princ Kaspian'},
        {id: 130148, name: 'Letopisy Narnie: Lev, čarodějnice a …'},
        {id: 128777, name: 'Letopisy Narnie - Stříbrná židle'},
        {id: 21920, name: 'Letopisy Narnie - Princ Kaspian a …'},
        {id: 221211, name: 'Letopisy Narnie - Lev, čarodějnice a …'},
        {id: 40344, name: 'Lion, the Witch and the Wardrobe, The'},
        {id: 221210, name: 'Lion, the Witch and the Wardrobe, The'},
      ]
    })
  })

  it('Should parse Pulp Fiction similar movies', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PulpFiction.html`)
    const parsed = filmParser(content)
    chai.assert.containSubset(parsed, {
      similar: [
        {id: 474814, name: 'Podfu(c)k'},
        {id: 296815, name: 'Sedm psychopatů'},
        {id: 233547, name: 'RocknRolla'},
        {id: 228433, name: 'V Bruggách'},
        {id: 224953, name: 'Nula od Nuly pojde'},
        {id: 134238, name: 'Po krk v extázi'},
        {id: 133980, name: 'Střílejte na Francouze!'},
        {id: 14787, name: 'Formula 51'},
        {id: 129240, name: 'Sbal prachy a vypadni 2'},
        {id: 7700, name: 'Podfu(c)k'},
        {id: 7698, name: 'Sbal prachy a vypadni'},
      ]
    })
  })
})
