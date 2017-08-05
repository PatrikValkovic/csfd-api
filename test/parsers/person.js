/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const personParser = require('../../lib/parsers').person


describe('Parsing of sites about person', function () {

  it('Should parse info about Hans Zimmer', async function(){
    const content = fs.readFileSync('sites/HansZimmer.html')
    const parsed = await personParser(content)
  })

  it('Should parse info about Johnny Depp', async function(){
    const content = fs.readFileSync('sites/JohnnyDepp.html')
    const parsed = await personParser(content)
  })

  it('Should parse info about Kit Harington', async function(){
    const content = fs.readFileSync('sites/KitHarington.html')
    const parsed = await personParser(content)
  })

  it('Should parse info about Quentin Tarantino', async function(){
    const content = fs.readFileSync('sites/QuentinTarantino.html')
    const parsed = await personParser(content)
  })

})
