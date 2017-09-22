/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const assert = require('assert')
const chai = require('chai')
chai.use(require('chai-subset'))
const filmParser = require('../../lib/parsers').film


describe('Parsing of sites about film', function () {

  it('Should parse Pirates of the Caribbean film', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbean.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
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
        {id: 38, name: 'Yun-fat Chow'},
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
        {id: 49807, name: 'Dominic Scott Kay'},
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
      content: 'V pokračování filmu PIRÁTI Z KARIBIKU: TRUHLA MRTVÉHO MUŽE, který v roce 2006 lámal rekordy, nacházíme naše hrdiny Willa Turnera (Orlando Bloom) a Elizabeth Swannovou (Keira Knightley) v okamžiku, kdy se přidali ke kapitánu Barbossovi (Geoffrey Rush) a zoufale pátrají po kapitánu Jacku Sparrowovi (Johnny Depp), aby ho osvobodili z pasti ve skříňce Davyho Jonese, která mu zatemňuje mysl – zatímco strašidelná loď duchů Bludný Holanďan a Davy Jones, pod kontrolou Východní indické obchodní společnosti rozsévají zkázu všude po sedmi mořích.Období pirátů se blíží ke svému konci, ale dosud nebyla vyřešena konečná rozepře. Will Turner se plaví na daleký východ, aby našel magické mapy, které mu pomohou najít skříňku Davyho Jonese a zachránit svého přítele Jacka Sparrowa. Jacka zachrání, ale… Davy Jones, lord Cutler Beckett, zuřivý asijský pirát Sao Feng a starší kapitán James Norrington zformovali nepřátelské spojenectví, které ohrožuje Jacka Sparrowa, Willa Turnera, Elizabeth Swann, jejich nového přítele kapitána Barbossu a všechny piráty na světě. Aby dosáhl vítězství, musí Jack se svou posádkou plout mimo okraj mapy, do nezmapovaného teritoria sedmi moří. Na Shipwreck Island (Ostrov vraků) až na konec světa.(oficiální text distributora) Kapitán Jack Sparrow (Johnny Depp) sa napriek temnému zakončeniu TRUHLICE MŔTVEHO MUŽA vracia a spolu s ním všetky obľúbené postavy úspešnej pirátskej trilógie Gorea Verbinského a Jerryho Bruckheimera! PIRÁTI KARIBIKU: NA KONCI SVETA sľubujú monumentálnu porciu špičkových trikov ILM, svojský zmysel pre humor, bombastickú výpravu a dej na prasknutie nabitý udalosťami a postavami. Okrem milovaného Jacka sa totiž vracia i množstvo ďalších postáv, z nich každá sleduje vlastné záujmy. V hre je odvážny kováč Will (Orlando Bloom) a jeho prekliaty otec (Stellan Skarsgård) a krásna snúbenica Elizabeth (Keira Knightleyová), ale i lovec pirátov lord Beckett (Tom Hollander) a vlastné srdce naprieč svetovými moriami hľadajúci kapitán Bludného Holanďana Davy Jones (digitálny Bill Nighy). Novou postavou sa stáva slávny ázijský pirát Sao Feng (Chow Yun-Fat) a Sparrowov prepitý otec (líder skupiny Rolling Stones Keith Richards) . Ten sa pripája na výpravu za svojim synom až na opačný koniec sveta, pričom družinu vedie vopred neodhadnuteľný, fenomenálne sa vrátiaci milovník zelených jabĺk a niekdajší kapitán Čiernej perly, Hector Barbossa (Geoffrey Rush).(tron)',
    })
  })

  it('Should parse The Lord of the Rings film', function () {
    const content = fs.readFileSync(`${__dirname}/sites/TheLordOfTheRings.html`)
    const parsed = filmParser(content)

    chai.assert.containSubset(parsed, {
      id: 4712,
      title: 'Pán prstenů: Návrat krále',
      titles: [
        {
          language: 'USA',
          title: 'The Lord of the Rings: The Return of the King',
        },
        {
          language: 'Slovensko',
          title: 'Pán prsteňov: Návrat kráľa',
        },
      ],
      genre: [
        'Fantasy',
        'Dobrodružný',
        'Akční',
      ],
      shotPlaces: [
        'USA',
        'Nový Zéland',
      ],
      year: 2003,
      length: 201,
      score: 90,
      directors: [
        {
          id: 11,
          name: 'Peter Jackson',
        },
      ],
      screenplay: [
        {id: 72205, name: 'Fran Walsh'},
        {id: 72206, name: 'Philippa Boyens'},
        {id: 11, name: 'Peter Jackson'},
      ],
      music: [
        {
          id: 62277,
          name: 'Howard Shore',
        },
      ],
      actors: [
        {id: 165, name: 'Elijah Wood'},
        {id: 69116, name: 'Noel Appleby'},
        {id: 168, name: 'Billy Boyd'},
        {id: 169, name: 'Dominic Monaghan'},
        {id: 167, name: 'Sean Astin'},
        {id: 74, name: 'Ian McKellen'},
        {id: 166, name: 'Viggo Mortensen'},
        {id: 60, name: 'Orlando Bloom'},
        {id: 97, name: 'Liv Tyler'},
        {id: 81, name: 'Christopher Lee'},
        {id: 62, name: 'Cate Blanchett'},
        {id: 76, name: 'John Rhys-Davies'},
        {id: 4354, name: 'Bernard Hill'},
        {id: 124, name: 'Brad Dourif'},
        {id: 4352, name: 'Miranda Otto'},
        {id: 11781, name: 'Marton Csokas'},
        {id: 102, name: 'Hugo Weaving'},
        {id: 4353, name: 'Karl Urban'},
        {id: 170, name: 'Sean Bean'},
        {id: 4355, name: 'David Wenham'},
        {id: 13424, name: 'John Noble'},
        {id: 13883, name: 'Andy Serkis'},
        {id: 6326, name: 'Bruce Spence'},
        {id: 11, name: 'Peter Jackson'},
        {id: 64124, name: 'Lawrence Makoare'},
        {id: 33786, name: 'Billy Jackson'},
        {id: 47731, name: 'Bret McKenzie'},
        {id: 50740, name: 'Sala Baker'},
        {id: 52031, name: 'Joel Tobeck'},
        {id: 52339, name: 'Alan Howard'},
        {id: 56931, name: 'Peter Tait'},
        {id: 59415, name: 'John Bach'},
        {id: 171, name: 'Ian Holm'},
        {id: 66484, name: 'Bruce Hopkins'},
        {id: 20986, name: 'Pete Smith'},
        {id: 68605, name: 'Jed Brophy'},
        {id: 70350, name: 'Bruce Phillips'},
        {id: 74156, name: 'Shane Rangi'},
        {id: 3829, name: 'Harry Sinclair'},
        {id: 197864, name: 'Ali Astin'},
        {id: 208294, name: 'Ian Hughes'},
        {id: 67568, name: 'Andrew Lesnie'},
        {id: 33794, name: 'Richard Taylor'},
      ],
      content: 'Nadchází čas rozhodující bitvy o přežití Středozemě. Putování jednotlivých členů Společenstva prstenu se dostává do poslední a rozhodující fáze. Čaroděj Gandalf, elf Legolas a trpaslík Gimli spěchají s dědicem trůnu Aragornem na pomoc zemi Gondor, která odolává ohromnému Sauronovu vojsku. Hobiti Frodo a Sam se v doprovodu Gluma snaží dostat hluboko do země Mordor, kde musí v ohních Hory osudu zničit magický Prsten moci. Jedině tak bude síla mocného pána temnot Saurona zlomena. Podaří se jim naplnit poslání Společenstva a zachránit Středozem? A za jakou cenu?(oficiální text distributora)',
    })
  })

  it('Should parse Pulp Fiction film', function () {
    const content = fs.readFileSync(`${__dirname}/sites/PulpFiction.html`)
    const parsed = filmParser(content)
    const vzor = {
      id: 8852,
      title: 'Pulp Fiction: Historky z podsvětí',
      titles: [
        {
          language: 'USA',
          title: 'Pulp Fiction',
        },
        {
          language: 'Slovensko',
          title: 'Pulp Fiction: Historky z podsvetia',
        },
      ],
      genre: [
        'Drama',
        'Krimi',
      ],
      shotPlaces: [
        'USA',
      ],
      year: 1994,
      length: 154,
      score: 91,
      directors: [
        {
          id: 2120,
          name: 'Quentin Tarantino',
        },
      ],
      screenplay: [
        {id: 2120, name: 'Quentin Tarantino'},
        {id: 3965, name: 'Roger Avary'},
      ],
      music: [],
      actors: [
        {id: 115, name: 'John Travolta'},
        {id: 425, name: 'Samuel L. Jackson'},
        {id: 477, name: 'Tim Roth'},
        {id: 180, name: 'Uma Thurman'},
        {id: 149, name: 'Christopher Walken'},
        {id: 3, name: 'Bruce Willis'},
        {id: 280, name: 'Harvey Keitel'},
        {id: 878, name: 'Amanda Plummer'},
        {id: 517, name: 'Rosanna Arquette'},
        {id: 911, name: 'Eric Stoltz'},
        {id: 896, name: 'Ving Rhames'},
        {id: 7207, name: 'Maria de Medeiros'},
        {id: 20043, name: 'Peter Greene'},
        {id: 36913, name: 'Duane Whitaker'},
        {id: 20775, name: 'Paul Calderon'},
        {id: 1973, name: 'Frank Whaley'},
        {id: 3376, name: 'Burr Steers'},
        {id: 24644, name: 'Phil LaMarr'},
        {id: 36977, name: 'Bronagh Gallagher'},
        {id: 2120, name: 'Quentin Tarantino'},
        {id: 95, name: 'Steve Buscemi'},
        {id: 5178, name: 'Joseph Pilato'},
        {id: 27350, name: 'Angela Jones'},
        {id: 9618, name: 'Julia Sweeney'},
        {id: 86751, name: 'Laura Lovelace'},
        {id: 6041, name: 'Alexis Arquette'},
        {id: 47648, name: 'Lawrence Bender'},
        {id: 54587, name: 'Kathy Griffin'},
        {id: 63952, name: 'Michael Gilden'},
        {id: 34587, name: 'Dick Miller'},
        {id: 127837, name: 'Don Blakely'},
        {id: 218510, name: 'Stephen Hibbert'},
        {id: 235105, name: 'Karen Maruyama'},
        {id: 277860, name: 'Emil Sitka'},
      ],
      content: 'Nejkultovnější z kultovních filmů 90. let je autorskou Biblí Quentina Tarantina, který v tomto opusu definoval základní prvky své režisérské poetiky a vytvořil dílo rozněcující náročné kritiky na festivalu v Cannes, levicové a pravicové intelektuály i zedníky dopřávající si po těžké šichtě trochu oddychu. Pulp Fiction je multižánrovým opusem, který přetéká fetišistickými detaily a popkulturními odkazy a zároveň dokonale funguje jako svrchovaně napínavý film rozvržený do inovativní příběhové struktury. Chcete vidět homosexuální znásilnění sbližující dva nepřátele na život a na smrt?(AČFK) Pohled do losangeleského podsvětí zamořeného drogovými dealery spletený do několika historek. Barevné, až nadsmyslné scény z tajemných barů, obrázky "běžného" života gangsterů, kteří musí čistit vyhrazené území pro svého šéfa, to vše je strhujícím opusem, jehož stvořitelem nemůže být nikdo jiný než hollywoodský scénárista a režisér Quentin Tarantino.(H.C.E.) Tři na první pohled nesouvisející historky z krvavého podsvětí tvoří jeden příběh plný stylizovaného násilí, drog, dnes už kultovních dialogů a hlavně absurdních situací a nečekaných dějových zvratů...Pulp FictionZlodějíček Pumpkin s přítelkyní Honey Bunny se v kavárně domlouvají na další loupeži. Honey Bunny má skvělý nápad – vybrat přítomným kapsy a peněženky. Polibek pro štěstí a se zbraní v ruce se Pumpkin zvedá od svého stolu. Ještě netuší, že to nebude jen tak obyčejné přepadení, protože u nedalekého stolu sedí velmi zvláštními událostmi dne zmatený gangster Jules Winnfield... Toho dne ráno se Jules se svým parťákem Vincentem Vegou vypravili vyřídit kšeft svého mafiánského bosse Marselluse Wallaceho. Vincent se vrátil z tříletého pobytu v Evropě a Marsellus ho pověřil bavením své manželky Mii, zatímco on bude mimo L. A. Má s ní zajít někam na večeři a dát na ni pozor... Vincent Vega a žena Marcelluse Wallaceho Když Vincent s Julesem dorazí k šéfovi, je u něj zrovna boxer Butch. Jeho kariéra je u konce a Marsellus mu nařizuje, aby svůj poslední zápas pustil v pátém kole. Marsellus si tak má přijít na slušné peníze... Vincent si ještě potom zajde koupit koks, aby přežil večer s Wallaceovou paničkou. Ukáže se ale, že Mia je mladá a plná energie, kterou bere mimo jiné i z drog. Na večer mají zamluvený stůl v podniku „Mazaný králíček", hospodě pro fanoušky Elvise Presleyho a dalších hvězd. Během večeře se dají do řeči, celkem si padnou do oka. Mia donutí Vincenta zúčastnit se soutěže v tancování twistu, kterou vyhrají. Po návratu do domu si Vincent odskočí a během té chvíle, se Mia předávkuje koksem a upadne do šoku. Vypadá to, že umírá. Vincent musí rychle jednat...Zlaté hodinky V domě Coolidgeových se objeví kapitán Koons. Je to voják, který sloužil spolu s panem Coolidgem ve Vietnamu a chce předat malému Butchovi zlaté náramkové hodinky. Butch se o přestávce mezi dvěma koly boxu probudí z této vzpomínky – snu. Hrdost mu nedovolí zápas prohrát. Zápas vyhraje – boxera dokonce zabije. Musí ale rychle prchnout před Wallacem. Utíká do taxíku, ve kterém se seznámí se zvědavou Esmeraldou. Ta by chtěla vědět, jaké to je zabít člověka. Butch to ale neví, o jeho smrti se dozvěděl až v taxíku. Neměl moc na výběr – jakmile se proslechlo, že má Butch prohrát, sázkaři rozbořili stánky bookmakerům. Navíc jeho protivník si ani pořádně nezašněroval rukavice, jinak by mohl žít. Esmeralda ho odveze do motelu, a za příplatek slíbí mlčenlivost. V pokoji už na Butche čeká jeho milenka Fabienne. Společně se chystají opustit L. A. a odletět někam do Tichomoří. Peněz mají dost – Butch nechal vsadit na své vítězství. Ráno ale zjistí, že Fabienne zabalila vše potřebné, kromě jeho zlatých hodinek. Butch se neskutečně rozčílí – měly pro něj obrovskou hodnotu. Musí se teď pro ně vrátit do bytu a doufat, že tam na něj nečekají gangsteři...Situace kolem Bonnie Opět se vracíme do rána, kdy Vincent s Julesem vtrhli do bytu mladíků, aby vyzvedli Marsellusův kufr. Ve vedlejší místnosti je schovaný jeden z Brettových kamarádů s revolverem v ruce. Jakmile Jules zastřelí Bretta a jeho kamaráda, vyběhne ven a začne po nich zběsile střílet. Netrefí se však ani jednou a gangsteři ho rozstřílí. Jules to považuje za zázrak – Bůh prý odklonil kulky, které je měly stoprocentně zabít. V místnosti už kromě nich zůstane jen Marvin, který se krčí u dveří. Toho si vezmou jako rukojmí a jedou za Marsellusem. V autě Jules přemítá o zázraku. Je rozhodnutý – bylo to znamení a dnes skončí s dráhou zločinu, už nebude zabíjet ani vydírat. Vincent tomu nemůže uvěřit. Otočí se na zadní sedadlo, kde mlčky sedí Marvin, a ptá se ho na jeho názor. Jak ale Jules najede na hrbol, Vincent omylem rozstřelí Marvinovu hlavu po celém autě. Musejí něco udělat, auto je celé od krve...(TV Prima) Scenárista, režisér a herec Quentin Tarantino (nar. 1963) je bezesporu jedním z nejvýznamnějších tvůrců současného světového filmu. Zaujal už svojí celovečerní prvotinou Gauneři (1991) a svým druhým filmem Pulp Fiction – historky z podsvětí (1994) jen potvrdil své dominantní postavení mezi postmoderními režiséry. Scénář filmu vznikl důmyslným propojením tří povídek spjatých se světem zločinu, jež jsou vyprávěny bez ohledu na časovou posloupnost a nakonec vytvoří uzavřený kruh. Původní název filmu, odkazující k pokleslé krvákové literatuře, dokonale souzní s tím, co se děje na plátně. Výbuchy brutálního násilí jsou odlehčeny velmi černým humorem a jedna bizarní situace za druhou ústí do ještě bizarnějších konců. Kromě novátorského scénáře a jisté režie film zaujme i přehlídkou mimořádných hereckých výkonů přesně obsazených představitelů, mj. Johna Travolty a Samuela L. Jacksona (zabijáci Vincent a Jules), Bruce Willise (unavený boxer Butch), Tima Rotha a Amandy Plummerové (milenecká dvojice, chystající se k přepadení) či Umy Thurmanové (gangsterská manželka Mia). Snímek byl uveden v soutěži MFF v Cannes 1994, odkud si odnesl nejvyšší ocenění, Zlatou palmu. Členové Americké akademie ho nominovali na Oscara v sedmi kategoriích (mj. i za nejlepší film a režii), ale zlatou sošku nakonec dostal pouze scénář filmu. V témže roce dominoval v rámci nezávislé tvorby a získal celkem čtyři Independent Spirit Awards (Ceny nezávislého ducha), a sice za nejlepší film, režii, scénář a herecký výkon v hlavní mužské roli (Samuel L. Jackson).(Česká televize) Jedním slovem: kult. Letos uplynulo dvacet let od jeho premiéry a tento možná lehce překvapivý poklad světové kinematografie dokazuje, že si onen status skutečně zaslouží. Nechronologicky seřazené příhody zalidněné prohnilými, ale přesto nebezpečně sympatickými figurkami navíc prošly digitální omlazovací kúrou.(Letní filmová škola) Vincent Vega (John Travolta) a Jules Winnfield (Samuel L. Jackson) sú dvaja nerozluční treťotriedni gangstri v službách obávaného Marsellusa Wallace (Ving Rhames). Pred dokončením jedného "jobu" prezradí Vincent Julesovi, že Pán Veľký (teda Marsellus) ho požiadal, aby sa postaral o jeho sexy manželku Miu (Uma Thurman), kým bude na Floride. Vincent to považuje za skúšku lojality, v ktorej musí za každú cenu obstáť.Butch Coolidge (Bruce Willis) je boxér, ktorého kariéra sa chýli ku koncu. Keďže v boxe neexistuje liga veteránov, bude sa jednoducho musieť zmieriť s tým, že už je out, a prijať Marsellusovu lákavú ponuku - vziať prachy, prehrať v piatom kole a odletieť si užívať so svojou milovanou Fabienne (Maria de Medeiros) na slnečný Karibik. Ale aké je to bojovať s vedomím, že tentokrát je to naposledy? Dovolí mu pýcha a hrdosť prehrať a tým pádom skoncovať so svojou kariérou?Pumpkin (Tim Roth) a Honey Bunny (Amanda Plummer), párik mladých amatérskych zlodejíkov si vysedáva v reštaurácií a analyzuje pracovný život. Vylučovacou metódou prídu na to, že v čase, keď sa neoplatí vykrádať banky, obchody s alkoholom ani benzínové pumpy je najlepším terčom lúpeže reštaurácia. A prečo nie tá, v ktorej práve sedia? Nasleduje rýchle rozdelenie úloh, bozk pre šťastie a samotná lúpež. Osudová lúpež...Tri na prvý pohľad nesúvisiace historky z krvavého podsvetia tvoriace jeden príbeh plný štylizovaného násilia, drog, dnes už kultových dialógov a hlavne absurdných situácií a nečakaných dejových zvratov. Postmoderná analýza zvráteného života zločincov, Božej vôle, vyrovnávania si účtov, masáže nôh a prekladu názvov hamburgerov zožala obrovský celosvetový úspech ako medzi divákmi, tak aj u kritiky. Za najkultovejší film 90. rokov si režisér a scenárista Quentin Tarantino (zo 7 nominácií) odniesol Oscara za najlepší scenár a nemalý úspech zožala snímka aj na prestížnych svetových filmových festivaloch v rokoch 1994 a 1995.(oficiální text distributora)',
    }
    chai.assert.containSubset(parsed, vzor)
  })

  it('Should return unknown id', function(){
    const content = fs.readFileSync(`${__dirname}/sites/PulpFictionUnknownId.html`)
    const parsed = filmParser(content)
    assert.strictEqual(parsed.id,'unknown')
  })
})
