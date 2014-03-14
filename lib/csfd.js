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
csfd.search = require(__dirname + '/api/search');

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


csfd.search('matrix');
