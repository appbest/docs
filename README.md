# 前端文档

> 基于`vitepress` 搭建在线文档模板,支持 markdown 标题搜索,`vue3` 组件与 `js` 代码运行

可快速搭建 vue 3.x 项目技术文档。

- [vitepress 官方](https://vitepress.vuejs.org/)
- [gitee 在线文档](https://qve.gitee.io/docs/)
- [github pages 在线文档](https://appbest.github.io/docs/)
- [markdown 代码运行与搜索组件](https://www.npmjs.com/package/quick.run)

## 快速开始

- 克隆项目

```bash

git clone git@github.com:appbest/docs.git

```

- 安装

```bash
# yarn 安装
yarn

# 调试
yarn docs:dev

# 打包
yarn docs:build
```

## vite 解决引用组件热更问题

清除缓存目录，

`/node_modules/.vite_opt_cache`

## 重要提示

- 需修改源码二级目录路径问题，参考文档底部
- <strong>调试时可删除</strong>
- 编译缓存目录 `/node_modules/.vite`
- 更新搜索数据源`keywords.json`,删除将生成最新数据源

## 更新

- [更新说明](./CHANGELOG.md)

### 0.2.0

- `qve` 升级到 0.2.2

## 文档组件

- packages 文件夹

### `CodeRun` 代码在线调试

`<CodeRun dll="json" styled="height:20rem" ubb editable>`

```js
// js 在线测试执行代码
return 'test';
```

`</CodeRun>`

## 项目依赖

- [quick.lib](https://www.npmjs.com/package/quick.lib)
- [quick.run](https://www.npmjs.com/package/quick.run)

- [vitePress](https://github.com/vuejs/vitepress)

## 发布文档

- vitepress 0.8.1 及以下需要，当前项目无需更新。

### 图标目录

发布到服务器时需要将源图标文件夹 `/docs/fonts` 内容复制到打包的 `/dist/` 目录

### 域名二级目录路径问题

- 目录名与文件名，请使用小写

  需要发布为二级目录时，调试正常正式发布时会导致路径错误，
  需要修改以下文件。

  `node_modeules\vitepress\dist\client\app\utils.js`

  第 20 行（把整个 base 路径删除了导致 Bug 修改为 1 正常取值）

  ```js
  //pagePath = pagePath.slice(base.length).replace(/\//g, '_') + '.md';

  // 网站路径替换为文档目录
  pagePath = 'docs/' + pagePath.slice(base.length);
  pagePath = pagePath.replace(/\//g, '_') + '.md';
  // console.log(base,pagePath);
  ```

## git 入门

```sh

# 初始化
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:appbest/docs.git
git push -u origin main

```

## github pages 部署

```sh
#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
# npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 pages https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:appbest/docs.git master:gh-pages

```
