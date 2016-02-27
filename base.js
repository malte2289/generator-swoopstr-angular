//var base = module.exports = {
//  test: function(){
//    console.log('test');
//  }
//}
var yeoman = require('yeoman-generator');

var base = module.exports = yeoman.generators.Base.extend({

  constructor: function(){
    yeoman.generators.Base.apply(this, arguments);
    var me = this;
    me.argument('name', { type: String, desc: "name of class to generate", required: true});

    this.initializing();
  },
  initializing: function()
  {
    var me = this;
    this.context = {
      moduleName: me._getModuleFromName(me.name),
      componentName: me._getComponentFromName(me.name)
    };
  },
  _templateAngularFile: function(src, dist, context)
  {
    if(typeof context === 'undefined'){
      context = this.context;
    }
    this.fs.copyTpl(this.templatePath(src), this.destinationPath(this._getPath(dist)), context);
  },
	/**
   *
   * @param {string} name
   * @private
   */
  _getModuleFromName: function(name){
    var nameSplitted = name.split(".");

    if(nameSplitted.length === 1){
      return this.appname;
    }else{
      return this.appname+"."+nameSplitted.slice(0, -1).join('.');
    }
  },
  _getComponentFromName: function(name)
  {
    name = name.split(".").pop();
    var firstLetter = name.substr(0,1).toUpperCase();
    return firstLetter + name.substr(1);
  },
  _getFileName: function(){
    return this.context.componentName.toLowerCase()
  },
  _getPath: function(fileName){
    var me = this;
    var pathArray = this.context.moduleName.split('.');
    pathArray.push(fileName);
    pathArray.unshift(me.angularBasePath);
    pathArray.splice(1, 1);
    return pathArray.join('/');
  },
  angularBasePath: 'src'

});
