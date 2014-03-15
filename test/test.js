'use strict';
var assert = require('assert'),
  should = require('should'),
  csfd = require('../index.js');

describe('Globals: ', function(){
  it('CSFD object should exist', function () {
    assert(true);
    csfd.should.be.type('object');
  });
});
