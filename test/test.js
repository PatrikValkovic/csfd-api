'use strict';
var assert = require('assert');
var should = require('should');

describe('Globals: ', function(){
  it('Object should exist', function () {
    assert(true);
    this.should.be.exactly(this);
  });
});
