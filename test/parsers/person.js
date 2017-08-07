/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const assert = require('assert')
const personParser = require('../../lib/parsers').person


describe('Parsing of sites about person', function () {

  it('Should parse info about Hans Zimmer', function () {
    const content = fs.readFileSync(`${__dirname}/sites/HansZimmer.html`)
    const parsed = personParser(content)
    const expect = {
      id: 62265,
      name: 'Hans Zimmer',
      birthday: new Date(1957, 9, 12),
      residence: 'Frankfurt nad Mohanem, Hessen, Západní Německo',
      bibliography: 'Hans Florian Zimmer se narodil 12. září roku 1957 v německém Frankfurtu nad Mohanem. Během dospívání se přesunul do Londýna, kde navštěvoval školu Hurtwood House. Dle vlastních slov se mu hudba stala nejbližším přítelem po brzké smrti jeho otce. Začínal s klávesami a syntezátory, s hudbou pomáhal například synthpopové skupině The Buggles a o něco později italským new wave hudebníkům Krisma.Roku 1980 se v Londýně stal partnerem filmového skladatele Stanleyho Myerse, který dělal hudbu mj. pro Lovce Jelenů (1978). Během své spolupráce začali míchat klasický orchestrální projev s prvky elektroniky. V osmdesátých letech se podíleli na hudbě k několika filmům. Zlomovým se pro Zimmera stal rok 1988. Barry Levinson sháněl hudebního skladatele pro svůj film RAIN MAN a jeho žena mu doporučila právě Zimmera, od nějž se jí líbil soundtrack k dramatu A WORLD APART. Z Rain Mana se stal oscarový hit a nominaci získal i v hudební kategorii.Roku 1989 komponoval hudbu k dalšímu oscarovému vítězi, ŘIDIČI SLEČNY DAISY. V témže roce ho objevil slavný Ridley Scott, pro nějž Zimmer dělal hudbu ke snímku BLACK RAIN a o dva roky později i k THELMĚ A LOUISE. Roku 1992 odjel do Afriky, aby čerpal inspiraci ve zdejší hudbě pro film THE POWER OF ONE, nastudovat potřeboval především typické africké chorály a bubny. Na základě tohoto soundtracku si ho studio Disney vybralo pro animovaný hit LVÍ KRÁL (1994), který se stal mezníkem v Zimmerově kariéře. Kromě zlatého glóbu a ceny grammy si odnesl i Oscara. Ceny získával i muzikál na totéž téma, který těžil právě ze Zimmerova soundtracku. Do konce tisíciletí si oscarovou nominaci v sekci hudba vysloužily ještě filmy THE PREACHER\'S WIFE (1996), AS GOOD AS IT GETS (1997) a THIN RED LINE (1998), vše samozřejmě pod Zimmerovo taktovkou, jednu další nominaci sdílel se Stephenem Schwartzem za animovaného PRINCE EGYPTSKÉHO (1998). Velice populární je jeho na Oscara opět nominovaná hudba ke GLADIÁTOROVI (2000), která se stala jedním z nejlépe prodávaných soundtracků vůbec. Hans se zde opět spojil s Ridleym Scottem, s nímž pak spolupracoval ještě v BLACK HAWK DOWN (2001). Od té doby skládal hudbu k mnoha úspěšným filmům, mezi něž patří mj. Nolanův TEMNÝ RYTÍŘ, druhý a třetí díl PIRÁTŮ Z KARIBIKU nebo POSLEDNÍ SAMURAJ. Věrný stále zůstává i animovaným filmům.Charakteristickým by se na jeho práci dalo označit používání hudebních prvků z kultur, v nichž se odehrává příběh filmu. Velmi zručně také míchá syntezátory s orchestrální hudbou.Hans Zimmer žije v Los Angeles se svou ženou Suzanne a má čtyři děti, z toho jedno z předchozího manželství.',
      films: [
        {id: 449589, name: 'Hans Zimmer Live on Tour'},
        {id: 134060, name: 'Musik im Spiegel der Gefühle'},
      ],
    }

    assert.deepStrictEqual(parsed, expect)
  })

  it('Should parse info about Johnny Depp', function () {
    const content = fs.readFileSync(`${__dirname}/sites/JohnnyDepp.html`)
    const parsed = personParser(content)
    const expect = {
      id: 331,
      name: 'Johnny Depp',
      birthday: new Date(1963, 6, 9),
      residence: 'Owensboro, Kentucky, USA',
      bibliography: '„Nechci, aby moje děti skočily na lep pouličním dealerům. To jim radši koupím jointa sám.“ - Johnny DeppCelým jménem John Christopher Depp II se narodil 9. června 1963 v Owensboro ve státě Kentucky, jako nejmladší ze čtyř sourozenců. Jeho otec byl inženýr a matka v domácnosti. Následně se s rodinou přestěhovali na Floridu, kde chodil na střední školu. Jeho rodiče se rozvedli, když mu bylo 15 a on už v té době bral drogy a kradl. Jeho velkým koníčkem byla hra na kytaru. Dokonce si založil vlastní kapelu a jejich největším úspěchem bylo, když dělali předskokany Iggymu Popovi, se kterým se později Depp setkal i před kamerou v pár filmech a svěřil mu i malou roličku ve svém režijním počinu BOJOVNÍK (1997).V roce 1983 se oženil s Lori Anne Allison (o dva roky později se rozvedli), která pracovala u filmu jako maskérka. A právě ona udělala pro jeho hereckou kariéru první a nejdůležitější krok. Seznámila ho totiž s Nicolasem Cagem, který ho poté představil svému agentovi. Jeho první film byla dnes už kultovní NOČNÍ MŮRA V ELM STREET (1984), ztvárnil tam malou roli a koupil to od Freddyho Krugera. Po Noční můře začal chodit na herecké kurzy a poté získal malou roli vojáka/tlumočníka ve Stoneově ČETĚ (1986). O rok později začal účinkovat v populárním seriálu JUMP STREET 21. Jenže tuto práci za chvíli začal nenávidět. Neviděl tam žádný posun, žádnou perspektivu. Sám o tom prohlásil, že si připadal jen jako výplň mezi reklamami. Ze smlouvy se nemohl vykroutit, tak se rozhodl proto, aby ho prostě vyrazili. Do práce chodil pozdě, v turbanu a mluvil s indickým přízvukem, či nosil jeansy s americkou vlajkou v rozkroku. Na vyhazov nemusel čekat dlouho a jeho skutečná kariéra se mohla rozjet.V roce 1990 natočil dva filmy, muzikál CRY-BABY (ve snímku si zahrál výše zmiňovaný Iggy Pop), kde uplatnil svoje kytarové a pěvecké nadání (mimochodem dost podobné Elvisu Presleymu) a STŘIHORUKÉHO EDWARDA, kde zazářil a dokonce se šíleně zamiloval do Winony Ryderové. S režisérem Edwarda Timem Burtonem si padli do oka a spolupracovali spolu ještě mnohokrát a vždy to stálo za to. Následoval výborný ARIZONA DREAM (1991) Emira Kusturici či podle mnohých nejlepší "hallströmovka" CO ŽERE GILBERTA GRAPEA (1993), kde se objevil i mladičký Leonardo DiCaprio. Ve filmu BENNY A JOON (1993) dostal opět typicky "deppovskou" roli, malinko ujetého chlápka, co dělá topinky žehličkou a ovládá všelijaké cirkusácké kousky. Po další spolupráci s Timem Burtonem ED WOOD (1994) si zahrál v pro Deppa dost netradičním filmu V POSLEDNÍ CHVÍLI (1995). Netradičním, protože se jedná o obyčejný mainstreamový thriller a Johnnyho filmy a role jsou většinou něčím ujeté.Reputaci si napravil v meditativním westernu plném černého humoru MRTVÝ MUŽ (1995). Snímek režíroval král nezávislého filmu Jim Jarmusch a Depp se tam opět setkal s Iggy Popem. Po poněkud slabším filmu DON JUAN DE MARCO (1995), kde se objevil po boku svého velkého (a v tom filmu i dost tlustého) přítele Marlona Branda, přišel rok 1997, který je pro Deppa stěžejní kvůli jeho prvnímu režijnímu počinu BOJOVNÍK. Obsadil své známé a kámoše (ano, Marlon Brando hraje cosi jako hlavního záporáka) a vznikl opravdu ponurý film, který dělá čest Deppovu jménu, je to totiž opravdu depka. Ve stejném roce ještě stihl zazářit vedle Al Pacina a Michaela Madsena v mafiánském filmu KRYCÍ JMÉNO DONNIE BRASCO.V roce 1998 si vzal Johnnyho na paškál Terry Gilliam. Johnny si oholil vlasy a jedna z jeho nejvíc crazy rolí byla na světě. Nonstop zfetovaný novinář Raoul Duke ve filmu STRACH A HNUS V LAS VEGAS je opravdu nezapomenutelný. Tento film je adaptací stejnojmenné knihy, s jejíž autorem byl Depp velký kamarád. Když autor zemřel, chtěl, aby se jeho popel vystřelil do vesmíru. Johnny slíbil, že to celé zaplatí. Ve filmu si poprvé zahrál s Beniciem Del Torem a Christinou Ricci, vedle které se taky dost často objevuje.Rok 1999 se nese v duchu hororů. První na řadu přišel opět Tim Burton a jeho skvěle výtvarně stylizovaná OSPALÁ DÍRA. Dále Roman Polanski světu představil svojí satanskou DEVÁTOU BRÁNU a do třetice všeho děsivého průměrná ASTRONAUTOVA ŽENA. Při natáčení DEVÁTÉ BRÁNY si Depp s Polanským moc nerozuměli a tak si jednoho večera Johnny zašel na panáka do hospody, kde se seznámil s Vanesou Paradis, do které se šíleně zamiloval. Dnes už s ní má dvě děti. Rok 2000 byl rokem vedlejších rolí. Ve filmu NEŽ SE SETMÍ si zahrál dokonce role dvě! Kubánského důstojníka a kubánského trasvestitního vězně, který je mistrem pašování kontrabandu v análu. Ve smutném filmu MUŽ, KTERÝ PLAKAL hraje cikána, co se zamiluje do Christiny Ricci, bohužel jim vše překazí zlomyslní náckové, kteří rozpoutají druhou světovou. Do třetice všeho dobrého přichází veselá ČOKOLÁDA, kde si zahrál opět cikána/muzikanta.V roce 2001 Johnny Depp navštěvuje Prahu při natáčení detektivního hororu Z PEKLA. Dále hraje ve filmu KOKAIN, který pojednává o vzestupu a pádu jednoho z největších drogových bossů. Kromě Deppa v něm skvěle hraje i smyslná Penelope Cruz. V roce 2002 měl hrát ve filmu Terryho Gilliama MUŽ, KTERÝ ZABIL DONA QUIJOTEA. Bohužel kvůli neuvěřitelné smůle a všudypřítomným problémům natáčení krachlo. Vše je zachyceno v dokumentu ZTRACEN V LA MANCHA. V roce 2003 přichází další zlom v jeho kariéře. Přijal totiž roli ve vysokorozpočtovém blockbusteru PIRÁTI Z KARIBIKU a mohl svůj nevšední herecký projev předvést i klasickému mainstreamovému publiku. Ve filmu mimo Deppa hráli i komerční ikony Orlando Bloom a (v té době) vycházející hvězdička Keira Knightley. Převážně ale díky Johnnymu Deppovi se film stal neuvěřitelným komerčním hitem (Deppovým vůbec prvním) a zadělal si i na další dvě pokračování. Johnny byl za svůj výkon dokonce poprvé nominován na Oscara (zde je vidět, že na Oscarech dost záleží i na tržbách, protože Depp měl i nepopíratelně lepší role).Dále si zahrál další bizarní figuru v nevalně přijatém (ale podle mě hodně dobrém) filmu KDYSI DÁVNO V MEXIKU (2003). Po thrilleru TAJEMNÉ OKNO (2004) přišla další oscarová nominace ve chvílemi až nechutně dojemném HLEDÁNÍ ZEMĚ NEZEMĚ (2004). V roce 2005 opět ve spolupráci s přítelem Timem Burtonem zaznamenal Depp svůj další kasovní trhák KARLÍK A TOVÁRNA NA ČOKOLÁDU. V další, protentokrát loutkové, burtonovce MRTVÁ NEVĚSTA namluvil hlavní postavu. V roce 2006 byl konečně uveden historický, dekadentní film LIBERTIN, jehož premiéra se dlouho odkládala, což se odrazilo na ne moc úžasných kasovních výsledcích.Johnny Depp je postava pro současný film velice přínosná. Jeho život byl dost pestrý, je idolem žen a v roce 2003 byl magazínem People zvolen za nejvíc sexy muže planety. Chodil například s topmodelkou Kate Moss a prý se spolu koupali ve vaně plné šampaňského. Vlastní populární klub Viper Room, kde se stala tragédie, díky které přestal brát drogy. Před vchodem zemřel jeho dobrý kamarád River Phoenix (bratr populárního Joaquina). Kvůli Vanese Paradis slevil ze svého bouřlivého chování, žije na venkově ve Francii a věnuje se hlavně rodině a dětem. Hlavně díky nim hraje v trošku veselejších filmech, protože chce, aby se měli na co koukat. Své postavení sexsymbolu prý nechápe a jediné, co mu na sobě přijde výjimečné, je jeho cit pro módu. Doufejme, že se ještě hodně dlouho budeme moct kochat jeho nesporným hereckým talentem.',
      films: [
        {id: 403861, name: 'Fantastic Beasts and Where to Find Them 2'},
        {id: 198088, name: 'Gnomeo & Juliet: Sherlock Gnomes'},
        {id: 425894, name: 'The Invisible Man'},
        {id: 469819, name: 'LAbyrinth'},
        {id: 285324, name: 'London Fields'},
        {id: 290818, name: 'Piráti z Karibiku: Salazarova pomsta'},
        {id: 53978, name: 'Vražda v Orient expresu'},
        {id: 348061, name: 'Alenka v říši divů: Za zrcadlem'},
        {id: 352314, name: 'Fantastická zvířata a kde je najít'},
        {id: 426735, name: 'Funny or Die Presents: Donald Trump\'s the Art of the Deal: The Movie'},
        {id: 384438, name: 'Yoga Hosers'},
        {id: 283586, name: 'Black Mass: Špinavá hra'},
        {id: 308315, name: 'Mortdecai: Grandiózní případ'},
        {id: 313398, name: 'Čarovný les'},
        {id: 353868, name: 'Mroží muž'},
        {id: 329244, name: 'Transcendence'},
        {id: 314636, name: 'Klikaři'},
        {id: 248295, name: 'Osamělý jezdec'},
        {id: 243202, name: 'Temné stíny'},
        {id: 254016, name: '21 Jump street'},
        {id: 268601, name: 'Jack a Jill'},
        {id: 252716, name: 'Piráti z Karibiku: Na vlnách podivna'},
        {id: 248882, name: 'Rango'},
        {id: 134315, name: 'Rumový deník'},
        {id: 235922, name: 'Alenka v říši divů'},
        {id: 271230, name: 'Cizinec'},
        {id: 234303, name: 'Imaginárium Dr. Parnasse'},
        {id: 236238, name: 'Veřejní nepřátelé'},
        {id: 69886, name: 'Bloopers of the Caribbean'},
        {id: 221904, name: 'Piráti z Karibiku: Na konci světa'},
        {id: 224930, name: 'Sweeney Todd: Ďábelský holič z Fleet Street'},
        {id: 194904, name: 'Piráti z Karibiku: Truhla mrtvého muže'},
        {id: 135983, name: 'Karlík a továrna na čokoládu'},
        {id: 194882, name: 'Mrtvá nevěsta Tima Burtona'},
        {id: 179078, name: 'A žili spolu šťastně až na věky'},
        {id: 116457, name: 'Hledání Země Nezemě'},
        {id: 134333, name: 'Libertin'},
        {id: 117678, name: 'Tajemné okno'},
        {id: 43513, name: 'Piráti z Karibiku: Prokletí Černé perly'},
        {id: 43393, name: 'Tenkrát v Mexiku'},
        {id: 14321, name: 'Kokain'},
        {id: 13286, name: 'Z pekla'},
        {id: 4085, name: 'Čokoláda'},
        {id: 16125, name: 'Muž, který plakal'},
        {id: 15337, name: 'Než se setmí'},
        {id: 14889, name: 'Astronautova žena'},
        {id: 7353, name: 'Devátá brána'},
        {id: 1080, name: 'Ospalá díra'},
        {id: 5059, name: 'Jak se neztratit v L.A.'},
        {id: 3303, name: 'Strach a hnus v Las Vegas'},
        {id: 18585, name: 'Bojovník'},
        {id: 15316, name: 'Cannes Man'},
        {id: 14513, name: 'Krycí jméno Donnie Brasco'},
        {id: 4742, name: 'Mrtvý muž'},
        {id: 382, name: 'V poslední chvíli'},
        {id: 18588, name: 'Don Juan DeMarco'},
        {id: 1072, name: 'Ed Wood'},
        {id: 17683, name: 'Benny a Joon'},
        {id: 4099, name: 'Co žere Gilberta Grapea'},
        {id: 5449, name: 'Arizona Dream'},
        {id: 10239, name: 'Freddyho smrt - Poslední noční můra'},
        {id: 9537, name: 'Cry-Baby'},
        {id: 1073, name: 'Střihoruký Edward'},
        {id: 8759, name: 'Četa'},
        {id: 18118, name: 'Slow Burn'},
        {id: 19458, name: 'Soukromý víkend'},
        {id: 1761, name: 'Noční můra v Elm Street'},
      ],
    }

    assert.deepStrictEqual(parsed, expect)
  })

  it('Should parse info about Kit Harington', function () {
    const content = fs.readFileSync(`${__dirname}/sites/KitHarington.html`)
    const parsed = personParser(content)
    assert.deepStrictEqual(parsed, {
      id: 65871,
      name: 'Kit Harington',
      birthday: new Date(1986, 12, 26),
      residence: 'Londýn, Anglie, Velká Británie',
      bibliography: 'Kit Harington (nar. 1987) je britský filmový, televizní a divadelní herec. Navštěvoval základní školu v Southfieldu v letech 1992 a 1998. Pak pokračoval ve studiích na Chantry High School (střední škola), mezi roky 1998 a 2003. Dále pak studoval Worcesterskou vysokou školu, kde studoval drama a divadelní vědy, v letech 2003 a 2005. Mladý Kit chtěl vždy být buď kameramanem, vojenským zpravodajem či novinářem. Konečně dostudoval v roce 2008, střední školu mluvené herní řeči a dramatu, na University of London, v Londýně, Anglie.Harington hraje postavu Jona Sněha v seriálu televize HBO Game of Thrones (2011) - HRA O TRŮNY po boku Seana Beana. Jedná se o jeden z nejúspěšnějších seriálů v dějinách HBO. Kladná vlna kritiky přichází jak z řad diváků, tak z řad filmových kritiků. Skvělá hudba, efekty, či kostýmy, to vše seriál zahrnuje. Dále pak se má objevit po boku S. Beana, v nadcházejícím hororu SILENT HILL 3D: ZJEVENÍ jako Vincent. Sám říká, že by si nejraději zahrál pod taktovkou Ridleyho Scotta či Martina Scorceseho.V letech 2008 až 2009, hrál hlavní roli Alberta Narracotta za produkce Royal National Theatre (Královské divadlo) v Londýně ve hře WAR HORSE (Válečný kůň).',
      films: [
        {id: 398606, name: 'The Death and Life of John F. Donovan'},
        {id: 405784, name: 'Brimstone'},
        {id: 339855, name: 'MI-5: Vyšší dobro'},
        {id: 381757, name: 'Sedm dní v pekle'},
        {id: 295082, name: 'Jak vycvičit draka 2'},
        {id: 336324, name: 'Pompeje'},
        {id: 235491, name: 'Sedmý syn'},
        {id: 332093, name: 'Testament mládí'},
        {id: 245640, name: 'Návrat do Silent Hill 3D'},
      ],
    })
  })

  it('Should parse info about Quentin Tarantino', function () {
    const content = fs.readFileSync(`${__dirname}/sites/QuentinTarantino.html`)
    const parsed = personParser(content)

    const expect = {
      id: 2120,
      name: 'Quentin Tarantino',
      birthday: new Date(1963, 3, 27),
      residence: 'Knoxville, Tennessee, USA',
      bibliography: 'Quentin Tarantino se narodil 27. března roku 1963 v americkém Knoxville teprve šestnáctileté Connie Tarantinové. Své jméno Quentin dostal podle matčiny oblíbené televizní postavy Quinta ze seriálu "Gunsmoke". Quentinův otec byl jistý Tony Tarantino, který rodinu opustil když byl Quentin ještě malinký. Jeho dětství a dospívání ovlivnily nejen filmy, ale pop kultura obecně. Televizní seriály, komiksy, populární hudba, to vše jako mladý hltal ve velkém a stále neměl dost. O nic jiného se nezajímal a tehdy už bylo téměř jasné, že tenhle člověk skončí u filmu. Quentin odmítal jíst cokoliv jiného než Hot-Dogy nebo hamburgery. Bezradná Connie proto musela všechna ostatní jídla nazývat těmito dvěma jmény, aby Quentin něco snědl. Pěkné začátky popkulturního tvůrce, který to neměl vůbec jednoduché, ale nepředbíhejme.V Los Angeles začal navštěvovat školu herectví a přivydělával si jako vyhazovač v pornokině. Po skončení studia si dvaadvacetiletý Quentin našel práci v prestižní videopůjčovně VideoArchives na Manhattan Beach (kde získal přezdívku "magor z videopůjčovny"), kde nonstop sledoval filmy, znal nespočet filmů (dokázal odvyprávět každou scénu). Lidé říkavali, že je to jeho "filmová škola", ale Quentin řekl, že je to spíš jeho žurnál a on hlavním kritikem. Zde se seznámil s Rogerem Avarym, se kterým začal psát scénáře. Společně tráví celé dny přisátí očima k obrazovce televize. Sledují všechny možné filmy, které jim přišly pod ruku. Quentin si pouští řadu scén několikrát, zpomaleně, pozpátku, studoval tvar scény, ale i střih, hudbu, hereckou práci, vedení dialogu - prostě všechno možné. Jak sám řekl: „Když se mě lidi ptají, zda jsem chodil do filmové školy, odpovídám, že jsem chodil na filmy.“Později se Tarantino přihlásil na kurzy herectví, aby dostával aspoň nějaké role, byl nucený i lhát. Když psali s Rogerem Avarym scénáře, chtěli je i skutečně zrealizovat, ale žádné studio na Quentinovy scénáře nepřistoupilo. Tak se rozhodli natočit film sami. Jmenoval se MY BEST FRIEND\'S BIRTHDAY, ten však po vyvolání Quentin nedokáže sestříhat do konečné verze, protože studio ve kterém stříhal svůj film zachvátil požár a drtivá většina materiálu lehla popelem.Quentina to zdaleka neodradilo a píše scénáře dál, kdy využívá některé myšlenky právě z MY BEST FRIEND\'S BIRTHDAY a píše scénář ke krvavé road-movie s názvem PRAVDIVÁ ROMANCE (později zrežíroval Tony Scott), který prodává. Asi o rok později pracuje na scénáři k filmu TAKOVÍ NORMÁLNÍ ZABIJÁCI (zrežíroval Oliver Stone), který posléze také prodá za malé peníze, navíc bez šance zabránit úpravám scénářů. Proti Scottově úpravě filmu neměl námitky, ale na rozsáhlých úpravách Stonea ke scénáři nenechal nitku suchou: „Kdyby mi ho alespoň ukradl“, řekl při této příležitosti.O Tarantina scénáristu je velký zájem o Tarantina režiséra naopak takřka nulový. Ale Tarantino se nevzdává a píše třetí scénář k filmu GAUNEŘI, kde je rozhodnutý jej sám zrežírovat. Film GAUNEŘI má být superlevný film natočený za své honoráře. Ale scénář se velmi líbil Harvey Keitelovi, který ho finančně podpořil. Z černobílé gangsterky začal Quentin natáčet film barevný s pravou technikou a skutečnými herci. Film má mezi filmovými fanoušky velký úspěch a GAUNEŘI se stávají ihned kultovní záležitostí. Ovšem mnohem zajímavější než obsah byla rafinovaná struktura vyprávění. Úžasný způsob režie udržuje diváka stále v napětí a nutí ho přemýšlet. Ne všem se ale snímek zalíbil. Odpůrci poukazovali na nedostatek morálních hodnot a přílišného násilí, například v legendární scéně s odřezávání ucha. Tarantino odpověděl: „Násílí je tolik přehnané a komiksově nadsazené, že má v člověku spíš vzbudit smích než zhnusení“.Nyní je Tarantinova pozice taková, že může natočit jakýkoliv film s podmínkou, že se musí vejít do rozpočtu 10 milionů dolarů - Tarantino tuto podmínku beze zbytku plní, když se rozhodne natočit film PULP FICTION: HISTORKY Z PODSVĚTÍ. Scénář začíná psát v Amsterdamu, pro filmovou společnost Miramax a jistě netuší co způsobí. Z filmu PULP FICTION přímo prýští Tarantinova láska k filmům. At\' už jde o kameru, dialogy, účesy, postavy nebo volbu zbraní, je tenhle film nabit odkazy na různé filmy z celé historie kinematografie. Inspiroval se vším možným... Teenegerskými filmy z 50. let, filmy noir ze 40. a 50.let, obdobím blaxploitation. Kombinuje staré filmové příběhy s moderním stylem natáčení filmů. Quentin si pojistil, že jeho film bude naprosto unikátní. Jedna z příjemných záležitostí ohledně filmu je, že vám připomene spoustu snímků. Když se dozvíte o tom, jaké odkazy PULP FICTION obsahuje, možná vás to přiměje k tomu, že budete chtít vidět filmy, které Quentina ovlivnily. PULP FICTION skáče sem a tam mezi jednotlivými příběhy, v prostoru i v čase. Pro mladé filmaře to může být novinka, ale tahle metoda byla použita mnohokrát. Rozesetá struktura vyprávění je k vidění i u takových klasik jako Občan Kane. Quentin se nechal touto metodou inspirovat spíš z knížek než z filmů. Podle Quentina by filmaři měli mít při budování příběhu stejnou svobodu jako spisovatelé. Líbí se mu ta myšlenka, že má stejné možnosti jako spisovatelé při psaní knížek, může vyprávět víc příběhů, do kterých navzájem promlouvají postavy. Quentin říká: "Je super, když porušíte to pravidlo lineárního vyprávění, když pak koukáte na publikum, vidíte, že jste narušili jejich klid. Najednou vidí, že musí dávat pozor a všechno ostražitě sledovat. Úplně cítíte, jak jsou přikovaní v sedačkách. Občas je zábava, sledovat je, jak se snaží "stíhat" film. Popravdě, kdybych napsal PULP FICTION jako knížku, nikdo by tuhle záležitost s odlišnou strukturou neřešil. Ostatně není proč, v knížkách je tohle naprosto běžné". Quentin zvýrazňuje literární inspiraci i dalšími prvky vyprávění. Film ve kterém probíhají tři paralelní děje, které se protnou úžasným způsobem v doprovodu geniálních dialogů a výborné hudby oslnil nejen diváky po celém světě, ale i filmové kritiky. Pulp Fiction získává cenu v Cannes za nejlepší film. Kvalitu ocenili i samotní akademici, kteří mu udělili Oscara v kategorii nejlepší scénář.Teď už je Quentin za vodou a může si plnit své sny. V roce 1997 vzniká třetí Quentinův film JACKIE BROWN. Film byl přijatý rozpačitě, protože každý čekal další Pulp Fiction, ale nic takového se nekonalo. Quentin se k relativnímu neúspěchu odmítal vyjadřovat a stáhl se do soukromí, aby se nakonec vrátil v roce 2003 s akčním kung-fu filmem KILL BILL, kterou napsal pro Umu Thurman. Do práce se vrhnul s vervou, možná až přílišnou, neboť délka filmu se pohybovala okolo 180 minut, tedy tří hodin. Nakonec Miramax přišel s řešením - KILL BILL půjde do kin rozdělen na dva díly. Volume 1 byl naplněn hektolitry krve a bojovými scénami. Volume 2 je plný tarantinovských dialogů a černého humoru. Film měl obrovský úspěch.V roce 2005 se Quentin režisérsky podílel na snímku velkého přítele Roberta Rodrigueze SIN CITY - MĚSTO HŘÍCHU. Byl pozván, aby natočil rozsáhlou scénu v autě. To, co by za normálních podmínek točil týden, měl s Rodriguezovým stylem hotové za jeden den. Tarantino měl zcela volnou ruku. Byl na natáčení skvěle připraven a vše měl doladěné do nejmenších detailů.Přichází další celovečerní snímek GRINDHOUSE: Auto zabiják, který je po velmi zběsilém KILL BILL návratem do starých kolejí. Do kolejí dialogů a pomalu se rozjíždějících scén. Rozhovory se vracejí ke Gaunerům, tanečními scénami a hudbou k Pulp Fiction. Film je precizně zpracován, výborné auto honičky na plný plyn a fantastické kaskadérské kousky.V roce 2008 zasáhla filmový svět zpráva z festivalu v Cannes, kde Tarantino oznámil, že připravovaný scénář k válečnému snímku HANEBNÝ PANCHARTI je hotový, že na konci léta začne natáčet a přesně za rok snímek přiveze do Cannes. Co řekl, to splnil. V roce 2009 je na stříbrném plátně Quentin Tarantino se svým filmem, který je nominován na 8 Oscarů.V roce 2012 si Quentin splňuje svůj dlouholetý sen, natáčí western NESPOUTANÝ DJANGO. Vynikající námět z prostředí amerického otrokářství s hollywoodskými hvězdami jako je Leonardo DiCaprio, Samuel L. Jackson nebo Christoph Waltz.V roce 2014 miří Quentin do Colorada točit nový Western The Hateful Eight, který málem nevzniknul kvůli úniku scénáře. Quentin Tarantino jej ale nakonec trochu přepsal, přehodnotil situaci a po Nespoutaném Djangovi nás vezme zpátky na divoký západ, který je v jeho podání obzvlášť krutým místem.V Quentinových filmech se skoro vždy objevuje akce, násílí i krvavé scény, a to i přesto, že se nejedná o typický hororový film. Quentin sám přiznal, že je velkým fanouškem splatter hororů. Quentin říká: "Jsem vypravěč, rád experimentuji, točím věci, které jste ještě neviděli, popř. si pohrávám, a tak předělávám věci, které jste viděli už stokrát". Quentin často ve filmech využívá kavárny a nejrůznější jídelny. Záběr z kufru je jedním z nejoblíbenějších Quentinových úhlů pohledu. Quentin vymyslel svou vlastní značku cigaret s názvem Red Apple. Tarantino se nikdy netajil tím, že v podstatě natáčí variace na své oblíbené filmy. Nazývá Umu Thurmanovou svou múzou. Mezi jeho oblíbené tvůrce patří například Sergio Leone, Martin Scorsese, Brian De Palma nebo Dario Argento. Quentin plánuje odejít od filmu v 60 letech a chce se zaměřit na psaní románů a filmové literatury. I kdyby už nikdy Quentin nerežíroval, neprodukoval nebo nehrál, navždy zůstane jedním z velikánů světového filmu.',
      films: [
        {id: 362228, name: 'Osm hrozných'},
        {id: 321529, name: 'Je prostě báječná'},
        {id: 294824, name: 'Nespoutaný Django'},
        {id: 117077, name: 'Hanebný pancharti'},
        {id: 265176, name: 'Pýcha národa'},
        {id: 226028, name: 'Deník mrtvých'},
        {id: 229384, name: 'Grindhouse: Auto zabiják'},
        {id: 221616, name: 'Grindhouse: Planeta Teror'},
        {id: 229980, name: 'Nemilosrdný střelec'},
        {id: 457858, name: 'The Big Fat Anniversary Quiz'},
        {id: 183558, name: 'Muppets\' Wizard of Oz, The'},
        {id: 136304, name: 'Kill Bill 2'},
        {id: 44485, name: 'Planet of the Pitts'},
        {id: 43483, name: 'Kill Bill'},
        {id: 13933, name: 'Malý Nicky - Satan Junior'},
        {id: 34703, name: 'God Said, \'Ha!\''},
        {id: 8850, name: 'Jackie Brown'},
        {id: 10527, name: 'Krvavá romance'},
        {id: 7744, name: 'Od soumraku do úsvitu'},
        {id: 5802, name: 'Sex po telefonu'},
        {id: 7743, name: 'Čtyři pokoje'},
        {id: 7741, name: 'Desperado'},
        {id: 22755, name: 'Johnny zapíná rádio'},
        {id: 34701, name: 'Coriolis Effect, The'},
        {id: 8852, name: 'Pulp Fiction: Historky z podsvětí'},
        {id: 22753, name: 'Sleep with Me'},
        {id: 11131, name: 'Somebody to Love'},
        {id: 29644, name: 'Eddie Presley'},
        {id: 8853, name: 'Gauneři'},
        {id: 179086, name: 'Vegetables'},
        {id: 117078, name: 'My Best Friend\'s Birthday'},
        {id: 301498, name: 'Love Birds in Bondage'},
      ],
    }

    assert.deepStrictEqual(parsed, expect)
  })

  it('Should return no films, because person is not actor', function () {
    const content = fs.readFileSync(`${__dirname}/sites/HansZimmerWithoutActing.html`)
    const parsed = personParser(content)
    const expect = {
      id: 62265,
      name: 'Hans Zimmer',
      birthday: new Date(1957, 9, 12),
      residence: 'Frankfurt nad Mohanem, Hessen, Západní Německo',
      bibliography: 'Hans Florian Zimmer se narodil 12. září roku 1957 v německém Frankfurtu nad Mohanem. Během dospívání se přesunul do Londýna, kde navštěvoval školu Hurtwood House. Dle vlastních slov se mu hudba stala nejbližším přítelem po brzké smrti jeho otce. Začínal s klávesami a syntezátory, s hudbou pomáhal například synthpopové skupině The Buggles a o něco později italským new wave hudebníkům Krisma.Roku 1980 se v Londýně stal partnerem filmového skladatele Stanleyho Myerse, který dělal hudbu mj. pro Lovce Jelenů (1978). Během své spolupráce začali míchat klasický orchestrální projev s prvky elektroniky. V osmdesátých letech se podíleli na hudbě k několika filmům. Zlomovým se pro Zimmera stal rok 1988. Barry Levinson sháněl hudebního skladatele pro svůj film RAIN MAN a jeho žena mu doporučila právě Zimmera, od nějž se jí líbil soundtrack k dramatu A WORLD APART. Z Rain Mana se stal oscarový hit a nominaci získal i v hudební kategorii.Roku 1989 komponoval hudbu k dalšímu oscarovému vítězi, ŘIDIČI SLEČNY DAISY. V témže roce ho objevil slavný Ridley Scott, pro nějž Zimmer dělal hudbu ke snímku BLACK RAIN a o dva roky později i k THELMĚ A LOUISE. Roku 1992 odjel do Afriky, aby čerpal inspiraci ve zdejší hudbě pro film THE POWER OF ONE, nastudovat potřeboval především typické africké chorály a bubny. Na základě tohoto soundtracku si ho studio Disney vybralo pro animovaný hit LVÍ KRÁL (1994), který se stal mezníkem v Zimmerově kariéře. Kromě zlatého glóbu a ceny grammy si odnesl i Oscara. Ceny získával i muzikál na totéž téma, který těžil právě ze Zimmerova soundtracku. Do konce tisíciletí si oscarovou nominaci v sekci hudba vysloužily ještě filmy THE PREACHER\'S WIFE (1996), AS GOOD AS IT GETS (1997) a THIN RED LINE (1998), vše samozřejmě pod Zimmerovo taktovkou, jednu další nominaci sdílel se Stephenem Schwartzem za animovaného PRINCE EGYPTSKÉHO (1998). Velice populární je jeho na Oscara opět nominovaná hudba ke GLADIÁTOROVI (2000), která se stala jedním z nejlépe prodávaných soundtracků vůbec. Hans se zde opět spojil s Ridleym Scottem, s nímž pak spolupracoval ještě v BLACK HAWK DOWN (2001). Od té doby skládal hudbu k mnoha úspěšným filmům, mezi něž patří mj. Nolanův TEMNÝ RYTÍŘ, druhý a třetí díl PIRÁTŮ Z KARIBIKU nebo POSLEDNÍ SAMURAJ. Věrný stále zůstává i animovaným filmům.Charakteristickým by se na jeho práci dalo označit používání hudebních prvků z kultur, v nichž se odehrává příběh filmu. Velmi zručně také míchá syntezátory s orchestrální hudbou.Hans Zimmer žije v Los Angeles se svou ženou Suzanne a má čtyři děti, z toho jedno z předchozího manželství.',
      films: [],
    }

    assert.deepStrictEqual(parsed, expect)
  })

  it('Should return no films, because person not play in any film', function () {
    const content = fs.readFileSync(`${__dirname}/sites/HansZimmerWithoutFilms.html`)
    const parsed = personParser(content)
    const expect = {
      id: 62265,
      name: 'Hans Zimmer',
      birthday: new Date(1957, 9, 12),
      residence: 'Frankfurt nad Mohanem, Hessen, Západní Německo',
      bibliography: 'Hans Florian Zimmer se narodil 12. září roku 1957 v německém Frankfurtu nad Mohanem. Během dospívání se přesunul do Londýna, kde navštěvoval školu Hurtwood House. Dle vlastních slov se mu hudba stala nejbližším přítelem po brzké smrti jeho otce. Začínal s klávesami a syntezátory, s hudbou pomáhal například synthpopové skupině The Buggles a o něco později italským new wave hudebníkům Krisma.Roku 1980 se v Londýně stal partnerem filmového skladatele Stanleyho Myerse, který dělal hudbu mj. pro Lovce Jelenů (1978). Během své spolupráce začali míchat klasický orchestrální projev s prvky elektroniky. V osmdesátých letech se podíleli na hudbě k několika filmům. Zlomovým se pro Zimmera stal rok 1988. Barry Levinson sháněl hudebního skladatele pro svůj film RAIN MAN a jeho žena mu doporučila právě Zimmera, od nějž se jí líbil soundtrack k dramatu A WORLD APART. Z Rain Mana se stal oscarový hit a nominaci získal i v hudební kategorii.Roku 1989 komponoval hudbu k dalšímu oscarovému vítězi, ŘIDIČI SLEČNY DAISY. V témže roce ho objevil slavný Ridley Scott, pro nějž Zimmer dělal hudbu ke snímku BLACK RAIN a o dva roky později i k THELMĚ A LOUISE. Roku 1992 odjel do Afriky, aby čerpal inspiraci ve zdejší hudbě pro film THE POWER OF ONE, nastudovat potřeboval především typické africké chorály a bubny. Na základě tohoto soundtracku si ho studio Disney vybralo pro animovaný hit LVÍ KRÁL (1994), který se stal mezníkem v Zimmerově kariéře. Kromě zlatého glóbu a ceny grammy si odnesl i Oscara. Ceny získával i muzikál na totéž téma, který těžil právě ze Zimmerova soundtracku. Do konce tisíciletí si oscarovou nominaci v sekci hudba vysloužily ještě filmy THE PREACHER\'S WIFE (1996), AS GOOD AS IT GETS (1997) a THIN RED LINE (1998), vše samozřejmě pod Zimmerovo taktovkou, jednu další nominaci sdílel se Stephenem Schwartzem za animovaného PRINCE EGYPTSKÉHO (1998). Velice populární je jeho na Oscara opět nominovaná hudba ke GLADIÁTOROVI (2000), která se stala jedním z nejlépe prodávaných soundtracků vůbec. Hans se zde opět spojil s Ridleym Scottem, s nímž pak spolupracoval ještě v BLACK HAWK DOWN (2001). Od té doby skládal hudbu k mnoha úspěšným filmům, mezi něž patří mj. Nolanův TEMNÝ RYTÍŘ, druhý a třetí díl PIRÁTŮ Z KARIBIKU nebo POSLEDNÍ SAMURAJ. Věrný stále zůstává i animovaným filmům.Charakteristickým by se na jeho práci dalo označit používání hudebních prvků z kultur, v nichž se odehrává příběh filmu. Velmi zručně také míchá syntezátory s orchestrální hudbou.Hans Zimmer žije v Los Angeles se svou ženou Suzanne a má čtyři děti, z toho jedno z předchozího manželství.',
      films: [],
    }

    assert.deepStrictEqual(parsed, expect)
  })

})
