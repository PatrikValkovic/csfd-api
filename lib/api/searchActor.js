'use strict';

var cheerio = require('cheerio'),
  Q = require('q');

module.exports = function(search, cb) {

  this.data = [];
  var deferred = Q.defer();
  cb = cb ? cb : function(){};

  this.processData = function(data){
    var $ = cheerio.load(data);

    $('#search-creators .ui-image-list li').each(function(i, e) {
      var obj = {};

      obj.title = $(e).find('h3 a').text();
      obj.url = 'http://www.csfd.cz' + $(e).find('h3 a').attr('href');
      obj.image = $(e).find('img').attr('src');
      obj.id = obj.url.match(/tvurce\/(\d+)\-/)[1];
      obj.roles = this.trimArray($(e).find('h3 + p').text().split('/'));
      obj.dateBirth = $(e).find('h3 + p + p').text().replace('nar. ', '');
      obj.placeBirth = $(e).find('h3 + p + p + p').text();

      this.data.push(obj);
    }.bind(this));
  };


  this.getUrl('http://www.csfd.cz/hledat/?q=' + search, function(data){
    this.processData(data);
    deferred.resolve(this.data);
    cb(this.data);
  }.bind(this));

  return deferred.promise;

};
