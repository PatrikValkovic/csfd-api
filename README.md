# CSFD 

[![Build Status](https://travis-ci.org/PatrikValkovic/csfd-api.svg?branch=dev)](https://travis-ci.org/PatrikValkovic/csfd-api) [![Coverage Status](https://coveralls.io/repos/github/PatrikValkovic/csfd-api/badge.svg?branch=dev)](https://coveralls.io/github/PatrikValkovic/csfd-api?branch=dev)

csfd.cz API that scrap HTML.

Made by Patrik Valkovič


## Install

```
npm install --save csfd-api
```

## Methods

Every method return promise

## Implemented

Just a few things are implement now:
- Parsing of search results (only films and people)
- Parsing of info about film
- Parsing of info about person
- Partial parsing of serials

## Usage

Searching for film: 

```ecmascript 6
const csfd = require('csfd')
const results = await csfd.search('matrix')
//...
results.films[?] === {
    id: 9499, 
    name: 'Matrix',
}
//...
```

Get info about film:

```ecmascript 6
const csfd = require('csfd')
const film = await csfd.film(9499)
film === {
    id: 9499,
    title: "Matrix",
    titles: [
        {language:"USA", title:"The Matrix"},
        {language:"Slovensko",title:"Matrix"},
    ],
    genre:["Akční","Sci-Fi"],
    shotPlaces:["USA"],
    year:1999,
    length:131,
    score:90,
    directors:[
        {id:3112,name:"Lilly Wachowski"},
        {id:3113,name:"Lana Wachowski"}],
    "screenplay":[
        {id:3112,name:"Lilly Wachowski"},
        {id:3113,name:"Lana Wachowski"}
    ],
    music:[{id:63014,name:"Don Davis"}],
    actors:[
        {id:46,name:"Keanu Reeves"},
        //...
        ],
    content: "Uvěříte neuvěřitelnému! ...",
    poster: "http://img.csfd.cz/..."
}

```

### Serials

Library partially allow to parse informations about serials.  
Library parse it standard way as film, but from version 1.1.0 output also contain information about type. These properties are null for standard films.

```ecmascript 6
const csfd = require('csfd')
const film = await csfd.film(263138)
film === {
    id: 263138,
    title: "Hra o trůny",
    type: "TV seriál",
    length: 3639,
    serialLength: {
			episodes: 67,
			length: 60,
    }
}
```

## Roadmap

- Serial parsing
- Users parsing
- Comments parsing
- Parsing of ranking

All help and pull requests are welcome.


## License

MIT
