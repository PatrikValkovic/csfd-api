/**
 * Created by Patrik Valkovic
 * 02/13/2021
 */

'use strict'

const fs = require('fs')
const chai = require('chai')
chai.use(require('chai-subset'))
const commentsParser = require('../../lib/parsers').comments


describe('Parsing of comments', function () {

  it('Should parse comments of Saw', function () {
    const content = fs.readFileSync(`${__dirname}/sites/SawComments.html`)
    const parsed = commentsParser(content)
    chai.expect(parsed.comments).to.deep.include.members([{
      author: {
        id: 95,
        name: 'golfista',
      },
      rating: 5,
      content: 'Shodou náhod jsem si všiml, že píšu tisící komentář - tak to byla asi správná volba filmu na dnešní večer ! :) ... Tentokrát jsem si o filmu nic nepřečetl dopředu, neviděl jsem zdejší komentáře (jenom umístění v TOP 200) a udělal jsem dobře. Sice jsem čekal něco úplně jiného, ale o to víc jsem byl příjemně překvapen.... Originální, skvěle napsaný a výborně zrežírovaný thriller - prostě jasné čtyři ****. Za ten konec ovšem, to musím dát pátou ... už se těším na druhou projekci.',
      date: new Date(2005, 2, 15),
    }])
    chai.expect(parsed.comments).to.deep.include.members([{
      author: {
        id: 35488,
        name: 'baruss',
      },
      rating: 5,
      content: 'Zrejme sa tento komentár medzi inými stratí. Možno sa niekto bude diviť čo hľadá tento film v mojej top 10. Ako Horor, ako triller, ako krimi tento film patrí do veľmi schopného nadpriemeru. Ale ako drama, ktorá polemizuje nad ľudskými životmi, ktorá poukazuje na to ako dokážu ľudia svoj jediný (ospravedlňujem sa tým čo veria v reinkarnáciu) pokus žiť premárniť, ako drama tento film exceluje. Ešte nikdy som tak veľmi nezdieľaľ svoje názory so záporným hrdinom. Jigsaw má moju plnú podporu, vo všetkom s ním súhlasím !!!',
      date: new Date(2006, 12, 16),
    }])
    chai.expect(parsed.comments).to.deep.include.members([{
      author: {
        id: 1375,
        name: 'spaiky',
      },
      rating: 5,
      content: 'Tak neco tak genialniho a zaroven brutalniho jsem uz dlouho nevidel! Neuveritelna atmosfera vas zcela pohlti az do necekaneho konce. Rozhodne doporucuju shlednout! Jeden z nejlepsich filmu posledni doby',
      date: new Date(2005, 2, 23),
    }])
    chai.expect(parsed.comments).to.deep.include.members([{
      author: {
        id: 676076,
        name: 'PanPyzamo',
      },
      rating: 4,
      content: 'Saw jsem sledoval s přáteli na kamarádovy narozeniny. Nikdo z nás film předtím neviděl a tak to byl pro nás všechny “first feel“. Všichni jsme po skončení byly spokojeni. Co se mi na Saw líbí nejvíce je, že buduje atmosféru a nikoliv na vás neháže lekačky, což bohužel spousta hororů dělá. Příběh je převážně o dvou postavách, které jsou spolu v jedné místnosti a snaží se uniknout a přesně tohle dělá z tohoto filmu tak kvalitní, jak je. Čeká vás plno nečekaných momentů, kdy si budete říkat, zda hlavní postavy přežijí, ale to vše vyvrcholí na konci a právě asi tak posledních 5 minut filmu jsou naprosto luxusní. Všechno tu kvalitu podtrhuje soundtrack, který sice nepatří k těm nejlepším, ale rozhodně není špatný a osobně jsem ho měl i po skončení filmu tak hodinu v hlavě. Celkově tento film doporučuji. 8/10',
      date: new Date(2021, 1, 9),
    }])
  })

  it('Should parse comments of Matrix', function () {
    const content = fs.readFileSync(`${__dirname}/sites/MatrixComments.html`)
    const parsed = commentsParser(content)
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
