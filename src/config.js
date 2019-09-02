const vesion = '1.0.0';

const actionMap = {
  init: {
    command: 'init <template> <project-name>',
    description: 'create a new app with template webpack config',
    usages: ['demo init <template> <project-name>']
  }
};

module.exports = {
  vesion,
  actionMap
};
