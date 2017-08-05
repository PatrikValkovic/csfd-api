'use strict';
var should = require('should'),
  csfd = require('../index.js'),
  fs = require('fs');

describe('Globals: ', function(){
  it('CSFD object should have all methods', function () {
    csfd.should.be.type('object');
    csfd.searchMovie.should.be.type('function');
  });
});

/**
 * Search movie tests
 */
describe('Search Movie fake data', function(){
  it('We should get proper movie', function (done) {

    fs.readFile('test/fixtures/searchMovie.html', function (err, data) {
      var temp =  csfd.getUrl;
      csfd.getUrl = function(url, cb){
        cb(data);
      };

      csfd.searchMovie('matrix').then(function(data){
        data[0].title.should.be.equal('Matrix');
        data[0].url.should.be.equal('http://www.csfd.cz/film/9499-matrix/');
        data[0].image.should.be.equal('//img.csfd.cz/files/images/film/posters/000/008/8959_fa7690.jpg?h180');
        data[0].id.should.be.equal('9499');
        data[0].genres[0].should.be.equal('Akční');
        data[0].countries[0].should.be.equal('USA');
        data[0].directors[0].should.be.equal('Andy Wachowski');
        data[0].actors[0].should.be.equal('Keanu Reeves');
        csfd.getUrl = temp;
        done();
      });
    });
  });
});

describe('Search Movie real data', function(){
  it.skip('We should get proper movie', function (done) {
    csfd.searchMovie('matrix').then(function(data){
      data[0].title.should.be.equal('Matrix');
      data[0].url.should.be.equal('http://www.csfd.cz/film/9499-matrix/');
      data[0].image.should.be.equal('//img.csfd.cz/files/images/film/posters/000/008/8959_fa7690.jpg?h180');
      data[0].id.should.be.equal('9499');
      data[0].genres[0].should.be.equal('Akční');
      data[0].countries[0].should.be.equal('USA');
      data[0].directors[0].should.be.equal('Andy Wachowski');
      data[0].actors[0].should.be.equal('Keanu Reeves');
      done();
    });
  });
});

/**
 * Search actor tests
 */
describe('Search Actor fake data', function(){
  it('We should get proper actor', function (done) {

    fs.readFile('test/fixtures/searchActor.html', function (err, data) {
      var temp =  csfd.getUrl;
      csfd.getUrl = function(url, cb){
        cb(data);
      };

      csfd.searchActor('Brad Pitt').then(function(data){
        data[0].title.should.be.equal('Brad Pitt');
        data[0].url.should.be.equal('http://www.csfd.cz/tvurce/5-brad-pitt/');
        data[0].image.should.be.equal('//img.csfd.cz/files/images/creator/photos/000/267/267330_0640be.jpg?w100h132crop');
        data[0].id.should.be.equal('5');
        data[0].roles[0].should.be.equal('herec');
        data[0].dateBirth.should.be.equal('18.12.1963');
        data[0].placeBirth.should.be.equal('Shawnee, Oklahoma, USA');
        csfd.getUrl = temp;
        done();
      });
    });
  });
});

describe('Search Actor real data', function(){
  it.skip('We should get proper actor', function (done) {
    csfd.searchActor('Brad Pitt').then(function(data){
      data[0].title.should.be.equal('Brad Pitt');
      data[0].url.should.be.equal('http://www.csfd.cz/tvurce/5-brad-pitt/');
      data[0].image.should.be.equal('//img.csfd.cz/files/images/creator/photos/000/267/267330_0640be.jpg?w100h132crop');
      data[0].id.should.be.equal('5');
      data[0].roles[0].should.be.equal('herec');
      data[0].dateBirth.should.be.equal('18.12.1963');
      data[0].placeBirth.should.be.equal('Shawnee, Oklahoma, USA');
      done();
    });
  });
});
