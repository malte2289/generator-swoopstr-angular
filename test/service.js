'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var fs = require('fs-extra');

describe('generator-swoopstr-angular:service', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/service'))
      .inTmpDir(function (dir) {
        var done2 = this.async();
        // `dir` is the path to the new temporary directory
        fs.copy(path.join(__dirname, '../test/bower.json'), dir + '/bower.json', done2);
      })
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
    assert.fileContent('src/test.service.js', "test-modul");
  })
});
