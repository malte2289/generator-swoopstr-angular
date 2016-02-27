'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-swoopstr-angular:factory', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments("test")
      .on('end', done);
  });

  it('create factory file', function () {
    assert.file([
      'src/test.service.js'
    ]);
  });

  it('rename factory function name', function() {
    assert.fileContent([
      ['src/test.service.js', "Test"]
    ]);
  })
});
