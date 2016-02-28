'use strict';
var path = require('path');
var fs = require('fs-extra');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-swoopstr-angular:provider', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/provider'))
      .inTmpDir(function (dir) {
        var done2 = this.async();
        // `dir` is the path to the new temporary directory
        fs.copy(path.join(__dirname, '../test/bower.json'), dir + '/bower.json', done2);
      })
      .withArguments("test")
      .on('end', done);
  });

  it('create provider file', function () {
    assert.file([
      'src/test.provider.js'
    ]);
  });

});
