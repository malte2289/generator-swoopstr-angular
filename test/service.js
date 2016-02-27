'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-swoopstr-angular:service', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments("test")
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/test.service.js'
    ]);
  });

  it('rename functions', function() {
    assert.fileContent('src/test.service.js', "Test");
  })
});
