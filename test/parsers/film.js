/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const filmParser = require('../../lib/parsers').film


describe('Parsing of sites about film', function () {

  it('Should parse Pirates of the Caribbean film', async function(){
    const content = fs.readFileSync('sites/PiratesOfTheCaribbean.html')
    const parsed = await filmParser(content)
  })

  it('Should parse The Lord of the Rings film', async function(){
    const content = fs.readFileSync('sites/TheLordOfTheRings.html')
    const parsed = await filmParser(content)
  })

  it('Should parse Pulp Finction film', async function(){
    const content = fs.readFileSync('sites/PulpFinction.html')
    const parsed = await filmParser(content)
  })

})
