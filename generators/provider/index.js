var yeoman = require('yeoman-generator');
var base = require('./../../base.js');
var fs = require('fs');
module.exports = base.extend({
  writing: function(){
    var me = this;
    this._templateAngularFile('_.provider.js', me._getFileName()+'.provider.js');
  },
  install: function(){
    this._generateTest('provider');
  },
  fileSuffix: 'provider'
});
