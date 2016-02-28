var yeoman = require('yeoman-generator');
var base = require('./../../base.js');
var fs = require('fs');
module.exports = base.extend({
  writing: function() {
    var me = this;
    this._templateAngularFile('_.factory.js', me._getFileName() + '.service.js')

    var path = this.destinationPath(me._getPath(me._getFileName()) + '.service.js');
    var data = this.fs.read(path, 'utf8');
    var result = data.replace(/FAC/g, me.context.componentName);
    this.fs.write(path, result);
  },
  install: function(){
    this._generateTest('service');
  }
});
