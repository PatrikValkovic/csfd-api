'use strict';

var cheerio = require('cheerio'),
  Q = require('q');

module.exports = function(search, cb) {

  this.data = [];
  var deferred = Q.defer();
  cb = cb ? cb : function(){};

  this.processData = function(data){
    var $ = cheerio.load(data);

    $('#search-films .ui-image-list li').each(function(i, e) {
      var obj = {};

      obj.title = $(e).find('h3 a').text();
      obj.url = 'http://www.csfd.cz' + $(e).find('h3 a').attr('href');
      obj.image = $(e).find('img').attr('src');
      obj.id = obj.url.match(/film\/(\d+)\-/)[1];
      obj.genres = $(e).find('h3 + p').text() ? this.trimArray($(e).find('h3 + p').text().split(',')[0].split('/')) : [];
      obj.countries = $(e).find('h3 + p').text() ? this.trimArray($(e).find('h3 + p').text().split(',')[1].split('/')) : [];
      obj.directors = $(e).find('p + p').text().split('Hrají:')[0] ? this.trimArray( this.removeLineBreaks($(e).find('p + p').text().split('Hrají:')[0].replace('Režie:', '')).split(',') ) : [];
      obj.actors = $(e).find('p + p').text().split('Hrají:')[1] ? this.trimArray( this.removeLineBreaks($(e).find('p + p').text().split('Hrají:')[1]).split(',') ) : [];

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
