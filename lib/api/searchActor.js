'use strict';

var cheerio = require('cheerio'),
  Q = require('q');

module.exports = function(search, cb) {

  this.data = [];
  var deferred = Q.defer();
  cb = cb ? cb : function(){};

  this.processData = function(data){
    var $ = cheerio.load(data);

    $('').each(function(i, e) {
      var obj = {};


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
