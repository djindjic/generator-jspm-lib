> [Yeoman](http://yeoman.io) generator

Yeoman generator for creating ES6 javascript libraries with [JSPM](http://jspm.io/).
Generated directory is configured to work with testing stack:

[karma-jspm](https://github.com/Workiva/karma-jspm),

[mocha](http://mochajs.org/),

[chai](http://chaijs.com/),

[sinon](http://sinonjs.org/),

[travis](https://travis-ci.org/)


##Installing generator

```bash
npm install -g yo
npm install -g generator-jspm-lib
```

##Scaffolding library

```bash
mkdir mylib & cd mylib
yo jspm-lib
```

Generator will ask you for your github username which will be used for jspm configuration.

##JSPM linking (with watching)

```bash
gulp jspm-link
```

##Depoly new release to github

```bash
gulp deploy-master
```

##Testing

```bash
karma start
```

##Using your library
In any jspm project you can install your library with this command:

```bash
jspm install github:USER/REPO
```

or make a pull request to [JSPM Reigistry](https://github.com/jspm/registry)