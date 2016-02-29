'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var base = require('./../../base.js');
var _ = require('lodash');

module.exports = base.extend({

  constructor: function(){

    yeoman.generators.Base.apply(this, arguments);


    this.argument('moduleName', {type: String, required: true});
    this.argument('componentName', {type: String, required: true});
    this.argument('type', {type: String, required: true})
    this.fileSuffix =  this.type + '.spec'
  },
  initializing: function()
  {
    var me = this;
    this.context = {
      moduleName: me.moduleName,
      componentName: _.kebabCase(me.componentName)
    };

  },

  writing: function () {
    var me = this;
    var path = this.destinationPath(me._getPath());
    this.fs.copyTpl(
      me.templatePath('_.spec.js'),
      path,
      me.context
    );

    var data= this.fs.read(path, 'utf8');
    var result = data.replace(/component/g,me.componentName);
    this.fs.write(path, result);
  },

  angularBasePath: 'test'


});
