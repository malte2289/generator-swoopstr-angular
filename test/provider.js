'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-swoopstr-angular:provider', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/provider'))
      .withArguments("test")
      .on('end', done);
  });

  it('create provider file', function () {
    assert.file([
      'src/test.provider.js'
    ]);
  });

});
