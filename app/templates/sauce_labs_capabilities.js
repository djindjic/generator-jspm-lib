module.exports.capabilities = {
  sl_firefox: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Linux',
    version: '31'
  },
  sl_ios_safari: {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.8',
    version: '6'
  },
  sl_ie_9: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '9'
  }
};
