webpack 常用配置脚手架工具，可用于快速原型开发

## 安装

```bash
npm i @wozien/demo-cli -g
```

## 用法

```bash
demo -h

Usage: demo <command> [options]

Options:
  -V, --version                   output the version number
  -h, --help                      output usage information

Commands:
  init <template> <project-name>  create a new app with template webpack config
```

## 例子

```bash

# 初始化一个es6模板的项目
demo init es6 my-project

# # 初始化一个开发vue组件的webpack配置项目
demo init vue my-vue-component
```
