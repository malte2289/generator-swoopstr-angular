'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  constructor: function(){

    yeoman.generators.Base.apply(this, arguments);


    this.argument('moduleName', {type: String, required: true});
    this.argument('componentName', {type: String, required: true});
    this.argument('type', {type: String, required: true})
  },

  writing: function () {
    var me = this;
    var path = this.destinationPath('test/' + me.componentName + '.' + me.type +'.spec.js');
    this.fs.copyTpl(
      me.templatePath('_.spec.js'),
      path,
      {
        'moduleName': me.moduleName,
        'componentName': me.componentName
      }
    );

    var data= this.fs.read(path, 'utf8');
    var result = data.replace(/component/g,me.componentName);
    this.fs.write(path, result);
  }


});
