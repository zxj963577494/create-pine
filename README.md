# create-pine

Creates a react application using the command line.

[![NPM version](https://img.shields.io/npm/v/create-pine.svg?style=flat)](https://npmjs.org/package/create-pine)
[![NPM downloads](http://img.shields.io/npm/dm/create-pine.svg?style=flat)](https://npmjs.org/package/create-pine)

## Usage

```bash
$ yarn create pine [appName]
```

## Usage Example

```bash
$ yarn create pine

? Do you want to use a full boilerplate? (y/N)

? Do you want to use typescript? (y/N)
```

## FAQ

### `yarn create pine` command failed

这个问题基本上都是因为没有添加 yarn global module 的路径到 PATH 环境变量引起的。

先执行 `yarn global bin` 拿到路径，然后添加到 PATH 环境变量里。

```bash
$ yarn global bin
/usr/local/bin
```

你也可以尝试用 npm，

```bash
$ npm create pine
```

或者手动安装 create-pine，并执行他，

```bash
$ npm install create-pine -g
$ create-pine
```

## LICENSE

MIT
