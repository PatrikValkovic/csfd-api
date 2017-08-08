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

## Usage

Searching for film: 

```ecmascript 6
var csfd = require('csfd')
const results = await csfd.search('matrix')

...
results[?] === {
    id: 9499, 
    name: 'Matrix',
}
...
```

Get info about film:

```ecmascript 6
var csfd = require('csfd')
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
    content: "Uvěříte neuvěřitelnému! ..."
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
