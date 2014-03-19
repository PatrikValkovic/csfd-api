'use strict';

var request = require('request');

/**
 * Main csfd object
 * @type {object}
 */
var csfd = module.exports.csfd = {};
/**
 * Configuration
 * @type {Object}
 */
csfd.config = {};

/**
 * All methods
 * @type {functions}
 */
csfd.searchMovie = require(__dirname + '/api/searchMovie');
csfd.searchActor = require(__dirname + '/api/searchActor');
csfd.movieDetail = require(__dirname + '/api/movieDetail');
csfd.actorDetail = require(__dirname + '/api/actorDetail');

/**
 * Helper method for retrieving the url with data
 * @param  {string}   url to get
 * @param  {Function} cb  callback function
 * @return {this}
 */
csfd.getUrl = function(url, cb) {
  request(url).on('response',  function (res) {
    var data;
    res.on('data', function (chunk) {
      data += chunk.toString();
    });
    res.on('end', function () {
      cb(data);
    });
    res.on('error', function (err) {
      cb(err);
    });
  });
  return this;
};

csfd.trimArray = function(array){
  return array.map(function(element){return element.trim();});
};

csfd.removeLineBreaks = function(string){
  return string.replace(/(\r\n|\n|\r|\t)/gm, '');
};
