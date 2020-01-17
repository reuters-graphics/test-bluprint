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
  preInstall: () => console.log('Starting...'),
  postInstall: () => console.log('All done!'),
};
