'use strict';

var cheerio = require('cheerio');

module.exports = function(search) {

  this.getUrl('http://www.csfd.cz/hledat/?q=' + search, function(data){
    var $ = cheerio.load(data);
    $('#search-films .ui-image-list h3 a').each(function(i, e) {
      console.log($(e).text());
    });

  });

};
