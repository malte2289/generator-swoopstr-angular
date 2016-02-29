'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var fs = require('fs-extra');


describe('generator-swoopstr-angular:test', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/test'))
      .withArguments("angular-test component-test service")

      .on('end', done);
  });

  it('create test file ', function () {
    assert.file([
      'test/component-test.service.spec.js'
    ]);
  });
});
