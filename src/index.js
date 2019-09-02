#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const config = require('./config');
const init = require('./init');

// 命令行配置
const actionMap = config.actionMap || {};

Object.keys(actionMap).forEach(key => {
  const action = actionMap[key];
  program
    .command(action.command)
    .description(action.description)
    .action(() => {
      const args = process.argv.slice(3);
      switch (key) {
        case 'init':
          init(args);
          break;
      }
    });
});

// demo 不带参数时
if (!process.argv.slice(2).length) {
  program.outputHelp(make_green);
}

function make_green(txt) {
  return chalk.green(txt);
}

program.name('demo').usage('<command> [options]');

program.version(config.version).parse(process.argv);
