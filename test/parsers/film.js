/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const filmParser = require('../../lib/parsers').film


describe('Parsing of sites about film', function () {

  it('Should parse Pirates of the Caribbean film', async function(){
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbean.html`)
    const parsed = await filmParser(content)
  })

  it('Should parse The Lord of the Rings film', async function(){
    const content = fs.readFileSync(`${__dirname}/sites/TheLordOfTheRings.html`)
    const parsed = await filmParser(content)
  })

  it('Should parse Pulp Finction film', async function(){
    const content = fs.readFileSync(`${__dirname}/sites/PulpFiction.html`)
    const parsed = await filmParser(content)
  })

})
