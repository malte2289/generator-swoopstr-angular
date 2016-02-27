'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-swoopstr-angular:controller', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/controller'))
      .withArguments("test")
      .on('end', done);
  });

  it('create controller file', function () {
    assert.file([
      'src/test.controller.js'
    ]);
  });

  it('rename ctrl function name', function() {
    assert.fileContent('src/test.controller.js', 'TestCtrl');
  })
});
