//var base = module.exports = {
//  test: function(){
//    console.log('test');
//  }
//}
var yeoman = require('yeoman-generator');
var _ = require('lodash');

var base = module.exports = yeoman.generators.Base.extend({

  constructor: function(){
    yeoman.generators.Base.apply(this, arguments);
    var me = this;
    me.argument('name', { type: String, desc: "name of class to generate", required: true});
    me.argument('basePath', {type: String, required: false, defaults: 'src' });
    me.option('ignore-test');

    this.initializing();
  },
  initializing: function()
  {
    var me = this;
    this.context = {
      moduleName: me._getModuleFromName(me.name),
      componentName: me._getComponentFromName(me.name)
    };
    me.angularBasePath =  me.basePath;

    console.log(this.context);
  },
  _templateAngularFile: function(src, dist, context)
  {
    if(typeof context === 'undefined'){
      context = this.context;
    }
    this.fs.copyTpl(this.templatePath(src), this.destinationPath(this._getPath()), context);

  },
	/**
   *
   * @param {string} name
   * @private
   */
  _getModuleFromName: function(name){
    var nameSplitted = name.split(".");
    var module = this.fs.readJSON(this.destinationPath('bower.json'));
    module = module.name;
    if(nameSplitted.length === 1){
      return module;
    }else{
      return module +"."+nameSplitted.slice(0, -1).join('.');
    }
  },
  _getComponentFromName: function(name)
  {
    name = name.split(".").pop();
    var firstLetter = name.substr(0,1).toUpperCase();
    return firstLetter + name.substr(1);
  },
  _getFileName: function(){
    return _.kebabCase(this.context.componentName);
  },
  _getFolderName: function(){
    return _.kebabCase(this.context.moduleName);
  },
  _getPath: function(){
    var me = this;
    var pathArray = this.context.moduleName.split('.');
    var fileName = _.compact([me._getFileName(), me.fileSuffix, 'js']).join('.');
    pathArray.push(fileName);
    pathArray.unshift(me.angularBasePath);
    pathArray.splice(1, 1);

    console.log(pathArray);
    return pathArray.join('/');
  },
  _generateTest: function(type){
    if(!this['ignore-test']) {
      this.composeWith('swoopstr-angular:test', {
          args: [
            this.context.moduleName, this.context.componentName, type
          ],
          options: {nested: true, appName: this.appName}
        },
        {
          local: __dirname + '/generators/test'

        })
    }
  },
  fileSuffix: ''

});
