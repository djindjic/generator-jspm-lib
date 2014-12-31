'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('JspmLib') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'githubUserName',
        message: 'Please eneter you github username?',
        store   : true
      }, {
        type    : 'input',
        name    : 'name',
        message : 'Your project name',
        default : this.appname // Default to current folder name
    }];

    this.prompt(prompts, function (props) {
      this.githubUserName = props.githubUserName;
      this.name = props.name;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.copy('gitignore', '.gitignore');
      this.copy('package.json', 'package.json');
      this.copy('jshintrc', '.jshintrc');
      this.copy('karma.conf.js', 'karma.conf.js');
      this.copy('travis.yml', '.travis.yml');
      this.directory('lib', 'lib');
      this.directory('test', 'test');

      var context = { 
        repo: this.name,
        user: this.githubUserName 
      };

      this.template('gulpfile.js', 'gulpfile.js', context);
      this.template('README.md', 'README.md', context);
    },
  },

  install: function () {
    this.npmInstall();
  },
  end: function () {
    this.spawnCommand('jspm', ['install',  '-y']);
  }
});
