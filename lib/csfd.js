'use strict';

var config = {
  url: 'http://www.csfd.cz'
};

var csfd = module.exports.csfd = function() {

  this.config = config;
  this.search = require(__dirname + '/api/search');

};


var test = new csfd().search('matrix');
