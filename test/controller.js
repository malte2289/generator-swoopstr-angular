'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var fs = require('fs-extra');

describe('generator-swoopstr-angular:controller', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/controller'))
      .inTmpDir(function (dir) {
        var done2 = this.async();
        // `dir` is the path to the new temporary directory
        fs.copy(path.join(__dirname, '../test/bower.json'), dir + '/bower.json', done2);
      })
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
