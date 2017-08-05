/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const assert = require('assert')
const filmParser = require('../../lib/parsers').film


describe('Parsing of sites about film', function () {

  it('Should parse Pirates of the Caribbean film', async function () {
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbean.html`)
    const parsed = await filmParser(content)
    assert.deepStrictEqual(parsed, {
      id: 221904,
      title: 'Piráti z Karibiku: Na konci světa',
      titles: [
        {
          language: 'USA',
          title: 'Pirates of the Caribbean: At World\'s End',
        },
        {
          language: 'Slovensko',
          title: 'Piráti z Karibiku: Na konci sveta',
        },
      ],
      genre: [
        'Dobrodružný',
        'Akční',
        'Fantasy',
        'Komedie',
      ],
      shotPlaces: [
        'USA',
      ],
      year: 2007,
      length: 161,
      score: 66,
      directors: [{id: 3371, name: 'Gore Verbinski',},],
      screenplay: [
        {id: 72832, name: 'Ted Elliott',},
        {id: 72840, name: 'Terry Rossio',},
      ],
      music: [{id: 62265, name: 'Hans Zimmer',},
      ],
      actors: [
        {id: 331, name: 'Johnny Depp'},
        {id: 60, name: 'Orlando Bloom'},
        {id: 2240, name: 'Keira Knightley'},
        {id: 2078, name: 'Geoffrey Rush'},
        {id: 465, name: 'Jonathan Pryce'},
        {id: 12132, name: 'Bill Nighy'},
        {id: 38, name: 'chow/">Yun-fat Chow'},
        {id: 18731, name: 'Tom Hollander'},
        {id: 157, name: 'Stellan Skarsgård'},
        {id: 33818, name: 'Mackenzie Crook'},
        {id: 13402, name: 'Jack Davenport'},
        {id: 46484, name: 'David Bailie'},
        {id: 4834, name: 'Naomie Harris'},
        {id: 26795, name: 'Keith Richards'},
        {id: 33539, name: 'Lee Arenberg'},
        {id: 35282, name: 'JB Blanc'},
        {id: 23339, name: 'Ghassan Massoud'},
        {id: 44164, name: 'Martin Klebba'},
        {id: 44881, name: 'Reggie Lee'},
        {id: 47443, name: 'Mark Hildreth'},
        {id: 49807, name: 'kay/">Dominic Scott Kay'},
        {id: 49845, name: 'Marshall Manesh'},
        {id: 50288, name: 'Kevin McNally'},
        {id: 50287, name: 'David Schofield'},
        {id: 53905, name: 'Art Hsu'},
        {id: 54786, name: 'Vanessa Branch'},
        {id: 56097, name: 'Hakeem Kae-Kazim'},
        {id: 19973, name: 'Omid Djalili'},
        {id: 68457, name: 'Stany Coppet'},
        {id: 86646, name: 'Patrick Hume'},
        {id: 90171, name: 'Jonny Rees'},
        {id: 100705, name: 'Peter Donald Badalamenti II'},
        {id: 130717, name: 'Sergio Calderón'},
        {id: 184148, name: 'Barnett O\'Hara'},
        {id: 217800, name: 'Christopher Adamson'},
        {id: 224783, name: 'Dermot Keaney'},
        {id: 225121, name: 'Andy Beckwith'},
        {id: 229045, name: 'David Meunier'},
        {id: 18738, name: 'Marcel Iureș'},
        {id: 263120, name: 'Chris M. Allport'},
        {id: 276433, name: 'Lauren Maher'},
        {id: 283277, name: 'Ned Wertimer'},
        {id: 307472, name: 'Natalie Victoria'},
      ],
      content: 'V pokračování filmu PIRÁTI Z KARIBIKU: TRUHLA MRTVÉHO MUŽE, který v roce 2006 lámal rekordy, nacházíme naše hrdiny Willa Turnera (Orlando Bloom) a Elizabeth Swannovou (Keira Knightley) v okamžiku, kdy se přidali ke kapitánu Barbossovi (Geoffrey Rush) a zoufale pátrají po kapitánu Jacku Sparrowovi (Johnny Depp), aby ho osvobodili z pasti ve skříňce Davyho Jonese, která mu zatemňuje mysl – zatímco strašidelná loď duchů Bludný Holanďan a Davy Jones, pod kontrolou Východní indické obchodní společnosti rozsévají zkázu všude po sedmi mořích.Období pirátů se blíží ke svému konci, ale dosud nebyla vyřešena konečná rozepře. Will Turner se plaví na daleký východ, aby našel magické mapy, které mu pomohou najít skříňku Davyho Jonese a zachránit svého přítele Jacka Sparrowa. Jacka zachrání, ale… Davy Jones, lord Cutler Beckett, zuřivý asijský pirát Sao Feng a starší kapitán James Norrington zformovali nepřátelské spojenectví, které ohrožuje Jacka Sparrowa, Willa Turnera, Elizabeth Swann, jejich nového přítele kapitána Barbossu a všechny piráty na světě. Aby dosáhl vítězství, musí Jack se svou posádkou plout mimo okraj mapy, do nezmapovaného teritoria sedmi moří. Na Shipwreck Island (Ostrov vraků) až na konec světa.(oficiální text distributora)\nKapitán Jack Sparrow (Johnny Depp) sa napriek temnému zakončeniu TRUHLICE MŔTVEHO MUŽA vracia a spolu s ním všetky obľúbené postavy úspešnej pirátskej trilógie Gorea Verbinského a Jerryho Bruckheimera! PIRÁTI KARIBIKU: NA KONCI SVETA sľubujú monumentálnu porciu špičkových trikov ILM, svojský zmysel pre humor, bombastickú výpravu a dej na prasknutie nabitý udalosťami a postavami. Okrem milovaného Jacka sa totiž vracia i množstvo ďalších postáv, z nich každá sleduje vlastné záujmy. V hre je odvážny kováč Will (Orlando Bloom) a jeho prekliaty otec (Stellan Skarsgård) a krásna snúbenica Elizabeth (Keira Knightleyová), ale i lovec pirátov lord Beckett (Tom Hollander) a vlastné srdce naprieč svetovými moriami hľadajúci kapitán Bludného Holanďana Davy Jones (digitálny Bill Nighy). Novou postavou sa stáva slávny ázijský pirát Sao Feng (Chow Yun-Fat) a Sparrowov prepitý otec (líder skupiny Rolling Stones Keith Richards) . Ten sa pripája na výpravu za svojim synom až na opačný koniec sveta, pričom družinu vedie vopred neodhadnuteľný, fenomenálne sa vrátiaci milovník zelených jabĺk a niekdajší kapitán Čiernej perly, Hector Barbossa (Geoffrey Rush).(tron)',
    })
  })

  it('Should parse The Lord of the Rings film', async function () {
    const content = fs.readFileSync(`${__dirname}/sites/TheLordOfTheRings.html`)
    const parsed = await filmParser(content)

  })

  it('Should parse Pulp Finction film', async function () {
    const content = fs.readFileSync(`${__dirname}/sites/PulpFiction.html`)
    const parsed = await filmParser(content)
  })

})
