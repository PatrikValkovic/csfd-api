/**
 * Created by Patrik Valkovic
 * 02/13/2021
 */

'use strict'

const assert = require('assert')
const chai = require('chai')
chai.use(require('chai-subset'))
const csfd = require('../../lib/csfd')


describe('It should parse live comments for film', function () {

  it('Should parse live comments of Matrix', async function () {
    const parsed = await csfd.comments(9499)
    chai.expect(parsed.comments).to.deep.include.members([{
      author: {
        id: 95,
        name: 'golfista',
      },
      rating: 5,
      content: 'Určitě jeden ze tří nejlepších Sci-fi co znám s perfektním scénářem a režií. Převratné triky a převratný vícekanálový zvuk. Střílecí scéna v hale mezi sloupy je určitě jednou z těch nezapomenutelných. Pokud chcete udělat sousedům radost, pak volume doprava ! :)',
      date: new Date(2003, 4, 13),
    }])
    chai.expect(parsed.comments).to.deep.include.members([{
      author: {
        id: 837448,
        name: 'Bogrant',
      },
      rating: 4,
      content: 'Právom nazývané sci-fi kult, minimálne už len vďaka perfektnej trikovej sekvencii, akčnej choreografii či scenáristickej vypiplanosti, ale aby som Matrix nazval aj mojím favoritom a jedným z naozaj top filmov histórie, na to by som ho potreboval vidieť ešte aspoň dvadsaťkrát, čo neviem či sa v tomto živote niekedy stane.',
      date: new Date(2021, 1, 13),
    }])
    chai.expect(parsed.comments).to.deep.include.members([{
      author: {
        id: 87876,
        name: 'B.e.n.Q',
      },
      rating: 3,
      content: 'Mně to prostě nějak extra nezaujalo. Hlavně mi tady neukamenujte :D Přijde mi to jako normální obyčejný sci-fi film :D Všechny 3 díly. Takže u každého filmu dám stejný komentář :D :) Sorráč :D',
      date: new Date(2013, 3, 21),
    }])
    chai.expect(parsed.comments).to.deep.include.members([{
      author: {
        id: 433430,
        name: 'Terezinka198',
      },
      rating: 0,
      content: 'Najde se zde nějaká čistá duše, která mi vysvětlí, o čem to mělo být? Jsem osoba sci-fi naprosto nechápající...',
      date: new Date(2016, 6, 28),
    }])
  })

})
