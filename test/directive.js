'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-swoopstr-angular:directive', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments("test")
      .on('end', done);
  });

  it('create directive file', function () {
    assert.file([
      'src/test.directive.js'
    ]);
  });

  it('rename directive function name', function() {
    assert.fileContent('src/test.directive.js', "function Test");
  })
});
