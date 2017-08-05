# CSFD 
[![Build Status](https://travis-ci.org/PatrikValkovic/csfd-api.svg?branch=dev)](https://travis-ci.org/PatrikValkovic/csfd-api) [![Coverage Status](https://coveralls.io/repos/github/PatrikValkovic/csfd-api/badge.svg?branch=dev)](https://coveralls.io/github/PatrikValkovic/csfd-api?branch=dev)

CSFD json api


## Install

```
npm install --save csfd
```

## Methods

Every method accept callback as last parameter, but also return a promise

### Search Movie

```
var csfd = require('csfd');
csfd.searchMovie('matrix').then(function(data){
	console.log(data);
});
```

### Search Actor

```
var csfd = require('csfd');
csfd.searchActor('Brad Pitt').then(function(data){
	console.log(data);
});
```

## License

MIT
