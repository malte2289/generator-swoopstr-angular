var yeoman = require('yeoman-generator');
var base = require('./../../base.js');
var fs = require('fs');
module.exports = base.extend({
  writing: function(){
    var me = this;
    this._templateAngularFile('_.controller.js', me._getFileName()+'.controller.js')

    var path = this.destinationPath(me._getPath(me._getFileName()) +'.controller.js');

    var data= this.fs.read(path, 'utf8');
    var result = data.replace(/Ctrl/g,me.context.componentName+"Ctrl");
    this.fs.write(path, result);
  },
  install: function(){
    this._generateTest('controller');
  }
});

