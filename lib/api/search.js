'use strict';

var request = require('request');
var cheerio = require('cheerio');

var getUrl = function(url, cb) {
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
};

module.exports = function(search) {

  var reg = /id="search-films"/g;

  getUrl('http://www.csfd.cz/hledat/?q=' + search, function(data){
    var $ = cheerio.load(data);
    $('#search-films .ui-image-list h3 a').each(function(i, e) {
      console.log($(e).text());
    });

  });

};
