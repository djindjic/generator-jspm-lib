> [Yeoman](http://yeoman.io) generator

Yeoman generator for creating ES6 javascript libraries with [JSPM](http://jspm.io/).
Generated directory is configured to work with testing stack: [karma-jspm](https://github.com/Workiva/karma-jspm), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), [Sinon](http://sinonjs.org/), [Travis](https://travis-ci.org/), [Sauce Labs](https://saucelabs.com/)

#Instalation

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

Generator will ask you for your GitHub username which will be used for jspm configuration.

##Setup Travis with Github and Sauce Labs

1. We assume you have registered [GitHub](https://github.com/join), [NPM](https://www.npmjs.com/signup), [Travis](https://travis-ci.org) and [Sauce Labs](https://saucelabs.com/opensauce) accounts

2. Install [travis cli](https://github.com/travis-ci/travis.rb#env) by:
```bash
gem install travis
```

3. Enable you new lib repo for travis build by running comman:
```bash
travis enable
```

4. Add travis [environment variables](http://blog.travis-ci.com/2014-08-22-environment-variables/) by command line:
  ```bash
  travis env set SAUCE_USERNAME my_sauce_user
  travis env set SAUCE_ACCESS_KEY my_sauce_key
  ```
  
5. Set GitHub authentification to avoid GitHub rate limit:
```bash
travis env set JSPM_AUTH "$(node -pe 'JSON.parse(process.argv[1]).endpoints.github.auth' "$(cat ~/.jspm/config)")"
```

6. Enable NPM deployment from travis build
```bash
travis setup npm
```
It is recommended by jspm to release your libraries to npm endpoint.
For more details see travis [documentation](http://docs.travis-ci.com/user/deployment/npm/).

#Development workflow

##JSPM linking (with watching)

```bash
gulp jspm-link
```

##Depoly new release to NPM

```bash
gulp deploy-master
```

##Testing

```bash
karma start
```

#Using your library
In any jspm project you can install your library with this command:

```bash
jspm install npm:REPO
```

or make a pull request to [JSPM Reigistry](https://github.com/jspm/registry)
