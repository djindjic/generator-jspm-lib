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
      'Welcome to the ' + chalk.red('JspmLib Generator') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'githubUserName',
        message: 'Please eneter you github username?',
        store   : true
      }];

    this.prompt(prompts, function (props) {
      this.githubUserName = props.githubUserName;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.copy('gitignore', '.gitignore');
      this.copy('jshintrc', '.jshintrc');
      this.copy('karma.conf.js', 'karma.conf.js');
      this.copy('travis.yml', '.travis.yml');
      this.directory('lib', 'lib');
      this.directory('test', 'test');

      var context = { 
        repo: this.appname,
        user: this.githubUserName 
      };

      this.template('gulpfile.js', 'gulpfile.js', context);
      this.template('README.md', 'README.md', context);
      this.template('package.json', 'package.json', context);
    },
  },

  install: function () {
    this.npmInstall();
  },
  end: function () {
    this.spawnCommand('jspm', ['install',  '-y']);
  }
});
