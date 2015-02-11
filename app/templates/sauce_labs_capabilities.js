var pkg = require('./package.json');

module.exports.capabilities = {
  sl_firefox: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Linux',
    version: '14',
    name: pkg.name + " (build: " + process.env.TRAVIS_BUILD_NUMBER + ")"
  },
  sl_ios_safari: {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.8',
    version: '6',
    name: pkg.name + " (build: " + process.env.TRAVIS_BUILD_NUMBER + ")"
  }//,
  // sl_ie_9: {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer',
  //   platform: 'Windows 7',
  //   version: '9',
  //   name: pkg.name + " (build: " + process.env.TRAVIS_BUILD_NUMBER + ")"
  // }
};
