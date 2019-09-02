const chalk = require('chalk');
const clone = require('download-git-repo');
const ora = require('ora');
const symbol = require('log-symbols');
const fs = require('fs');

function init(args) {
  if (args.length > 2) {
    console.log(chalk.green('\r\nUsages:'));
    console.log(chalk.green('  demo init <template> <project-name>\r'));
  } else {
    download(args[0], args[1]);
  }
}

// 获取github地址
function getRepoUrl(template) {
  const repoUrl = 'wozien/my-webpack-template';
  let branch;

  switch (template) {
    case 'es6':
      branch = 'master';
      break;
    case 'vue':
      branch = 'vue';
      break;
  }

  // 违法参数
  if (!branch) {
    console.log(chalk.red('illegal parameters <template>'));
    return false;
  }

  return repoUrl + '#' + branch;
}

// 下载github模板
function download(template, projectName) {
  const url = getRepoUrl(template);
  if (url) {
    if (!fs.existsSync(projectName)) {
      let loading = ora('download template...');
      loading.start();

      // 下载模板
      clone(
        url,
        projectName,
        () => {
          loading.succeed();
          console.log(symbol.success, chalk.green('Project initialization finished!'));
        },
        () => {
          loading.fail();
        }
      );
    } else {
      console.log(chalk.red('The project already exists'));
    }
  }
}

module.exports = init;
