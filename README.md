# CSFD 

[![Build Status](https://travis-ci.org/PatrikValkovic/csfd-api.svg?branch=dev)](https://travis-ci.org/PatrikValkovic/csfd-api) [![Coverage Status](https://coveralls.io/repos/github/PatrikValkovic/csfd-api/badge.svg?branch=dev)](https://coveralls.io/github/PatrikValkovic/csfd-api?branch=dev)

csfd.cz API that scraps HTML.

Made by Patrik Valkovič


## Install

```
npm install --save csfd-api
```

## Return values

Every method returns promise

## Implemented

Just a few things are implemented for now:
- Parsing of search results (only movies and people)
- Parsing of movie info
- Parsing of person info
- Partial parsing of TV shows

## Usage

Searching for movie: 

```ecmascript 6
const csfd = require('csfd-api')
const results = await csfd.search('matrix')
//...
results.films[?] === {
    id: 9499, 
    name: 'Matrix',
}
//...
```

Getting movie info:

```ecmascript 6
const csfd = require('csfd-api')
const film = await csfd.film(9499)
film === {
    id: 9499,
    imdbId: 'tt0133093',
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

### TV shows

Library partially allows to parse TV shows information.  
It is parsed same way as movie, but since version 1.1.0 output also contain information about type. These properties are null for the movies.

```ecmascript 6
const csfd = require('csfd-api')
const film = await csfd.film(263138)
film === {
    id: 263138,
    imdbId: 'tt0944947',
    title: "Hra o trůny",
    type: "TV seriál",
    length: 3639,
    serialLength: {
        episodes: 67,
        length: 60
    }
}
```

## Roadmap

- TV show parsing
- User parsing
- Comments parsing
- Parsing of lists

All help and pull requests are welcomed.


## License

MIT
