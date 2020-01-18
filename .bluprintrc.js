module.exports = {
  bluprint: '^0.0.1',
  name: 'test bluprint',
  renderer: 'mustache',
  category: 'tests,
  prompts: [],
  statics: {},
  ignore: [],
  justCopy: [],
  rename: {},
  dependencies: [],
  preInstall: function(){ console.log('Starting...'); },
  postInstall: function(){ console.log('All done!'); },
};
