/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const searchParser = require('../../lib/parsers').search


describe('Parsing of search sites', function () {

  it('Should parse Quentin Tarantino from search page', async function(){
    const content = fs.readFileSync(`${__dirname}/sites/QuentinTarantinoSearch.html`)
    const parsed = await searchParser(content)
  })

  it('Should parse Pirates of the Caribbean film from search page', async function(){
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbeanSearch.html`)
    const parsed = await searchParser(content)
  })

  it('Should parse Kit Harington from search page', async function(){
    const content = fs.readFileSync(`${__dirname}/sites/KitHaringtonSearch.html`)
    const parsed = await searchParser(content)
  })

})
