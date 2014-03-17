# CSFD [![Build Status](https://secure.travis-ci.org/danielhusar/csfd.png?branch=master)](http://travis-ci.org/danielhusar/csfd)

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
