var yeoman = require('yeoman-generator');
var base = require('./../../base.js');
var fs = require('fs');
module.exports = base.extend({
  writing: function(){
    var me = this;
    this._templateAngularFile('_.directive.js', me._getFileName()+'.directive.js');

    var path = this.destinationPath(me._getPath(me._getFileName()) +'.directive.js');

    var data= this.fs.read(path, 'utf8');
    var result = data.replace(/DRIV/g,me.context.componentName);
    this.fs.write(path, result);
  }
});
