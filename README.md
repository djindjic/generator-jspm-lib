> [Yeoman](http://yeoman.io) generator

Yeoman generator for creating ES6 javascript libraries with [JSPM](http://jspm.io/).
Generated directory is configured to work with testing stack: [karma-jspm](https://github.com/Workiva/karma-jspm), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), [Sinon](http://sinonjs.org/), [Travis](https://travis-ci.org/), [Sauce Labs](https://saucelabs.com/)

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

##JSPM linking (with watching)

```bash
gulp jspm-link
```

##Depoly new release to GitHub

```bash
gulp deploy-master
```

##Testing

```bash
karma start
```

##Deploy to npm
It is recommended by jspm to release your libraries to npm endpoint.
You can setup travis to automaticaly publish your lib to npm by running this command:

```bash
travis setup npm
```

For more details see travis [documentation](http://docs.travis-ci.com/user/deployment/npm/).

##Using your library
In any jspm project you can install your library with this command:

```bash
jspm install github:USER/REPO
```

or

```bash
jspm install npm:REPO
```

or make a pull request to [JSPM Reigistry](https://github.com/jspm/registry)

##Setup Travis and Sauce Labs

1. Sign up to [Travis](https://travis-ci.org) and [Sauce Labs](https://saucelabs.com/opensauce).
2. [Sync](https://travis-ci.org/profile) your Travis with GitHub account and [enable](https://travis-ci.org/profile) repository which you want to build.
3. Add travis environment variables by web interface or command line:
  1. Go to Travis settings for your new lib and add followed [environment variables](http://blog.travis-ci.com/2014-08-22-environment-variables/) for sauce labs:
    - SAUCE_USERNAME with your registered Sauce Labs username
    - SAUCE_ACCESS_KEY with your Sauce Labs access key which you can find at lower left angle of [account](https://saucelabs.com/account) page
  2. Or run followed commands ([travis cli](https://github.com/travis-ci/travis.rb#env) required):
  ```bash
  travis env set SAUCE_USERNAME my_sauce_user
  travis env set SAUCE_ACCESS_KEY my_sauce_key
  ```

##Set GitHub authentification
```bash
travis env set JSPM_AUTH "$(node -pe 'JSON.parse(process.argv[1]).endpoints.github.auth' "$(cat ~/.jspm/config)")"
```