# Quick Docs

> 基于 VitePress 搭建的技术文档模板

使用最新 vue3.x 开发编写技术文档, 发布常用的工具库与 UI 库

## yarn 与 npm

建议使用 yarn

| 属性           | yarn                       | npm                                          |
| -------------- | -------------------------- | -------------------------------------------- |
| 初始化         | yarn init                  | npm init                                     |
| 安装依赖       | yarn install 或者 yarn     | npm install 或者 npm i                       |
| 新增依赖       | yarn add qveui             | npm install qveui --save 或者 npm i qveui    |
| 新增依赖       | yarn add -D qveui          | npm i -D qveui                               |
| 删除依赖       | yarn remove qveui          | npm uninstall qveui --save 或者 npm un qveui |
| 更新依赖       | yarn upgrade               | npm update                                   |
| 全局安装或删除 | yarn global remove vue-cli | npm uninstall vue-cli -g 或者 npm -g vue-cli |
| 同时下载多个   | yarn add axios vue-axios   | npm install --save axios vue-axios           |

## yarn 安装

`npm install -g yarn`

## link 软连接本地组件库

开发过程中，两个或多个项目之间相互依赖时，可以使用 link 将一个项目链接到另一个项目。
不需要每次都发布项目`npm publish`

示例名称:qvui-rc

修改 package.json > name

- 源模块项目文件夹下执行

```sh
# 新项目先进行初始化生成 package.json 并配置名称
 npm init

# 创建软连接 link

yarn link

# or

npm link

```

- 连接这个库的项目文件夹下执行

```sh
# 连接 qvui-rc
yarn link qvui-rc
# 取消连接
yarn unlink qvui-rc
# or
npm link qvui-rc
```

- 项目和模块在同一个目录下，可以使用相对路径

npm link ../packages

- 解除 link

解除项目和模块 link，项目目录下，npm unlink 模块名

解除模块全局 link，模块目录下，npm unlink 模块名

## npm esbuild 版本报错

npm v7 以上有个 Bug,需要执行以下安装

`node node_modules/esbuild/install.js`

## npm 查看全局配置

`npm config ls`

## npm 设置成淘宝源

`npm config set registry https://registry.npm.taobao.org`

## npm 查看源配置

`npm config get registry`

## cnpm

安装国内镜像
`npm install cnpm -g`

## nrm 源镜像

- [nrm 安装路径](https://blog.csdn.net/zhuzicc/article/details/101023144)
- [nrm ERR_INVALID_ARG_TYPE 解决方法](https://blog.csdn.net/qq_42046421/article/details/113851930)

- 安装
  `npm install nrm -g`

- 显示源
  `nrm ls`

```bash
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

- 切换源
  `nrm use npm`

## gulp-sass

语法都是一样的，gulp-sass 只是将 npm 换成 cnpm
`cnpm install --save-dev gulp-sass`

`yarn global add node-sass`

遇到报错请安装 `node-sass`

## node-sass

`npm install --global windows-build-tools --save`

`npm i -g node-sass`
或者 `cnpm i -g node-sass`

执行 `npm rebuild node-sass`

## node-gyp

1. 安装 Visual C ++构建环境：[Visual Studio 构建工具](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools)

`npm config set msbuild_path “C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Current\Bin\MSBuild.exe”`

2. 安装 [Python 2.7](https://www.python.org/downloads/)（v3.x.x 不支持），安装后要配置环境变量。
   成功后执行 `npm config set python python2.7`
3. 执行 `npm config set msvs_version 2017`

4. 安装 gyp 命令：
   `npm i -g node-gyp`
   `npm install --global node-gyp@latest`

## SSH Key

这里的 xxxxx@xxxxx.com 只是生成的 sshkey 的名称，并不约束或要求具体命名为某个邮箱

- 生成按照提示完成三次回车，即可生成 ssh key
  `ssh-keygen -t rsa -C xxxxx@xxxxx.com`
- 通过查看 ~/.ssh/id_rsa.pub 文件内容，获取到你的 public key 内容
  `cat ~/.ssh/id_rsa.pub`

- 复制生成的内容，更新到： https://github.com/settings/keys

- 绑定 Key,会提示是否 continue,输入 yes 后程序会自动连接，如果要求登录，直接输入登录信息即可
  `ssh -T git@gitee.com`

## git 命令

- [建议使用 vscode git](./guide/vscode.md)

```sh
# 克隆拉取代码
git clone https://github.com/appbest/qveui-vue3-admin.git
```

- 常用命令

```sh

# 1.查看git配置
  git config --global -l
# 2.检查环境变量
  env|grep -i proxy
# 新建 main 分支，并转至 main 分支
git checkout -b main

# 合并两个分支
git merge main

# 提交
add commit

# 将本地 main 分支的推送至远程
git push -u origin main

# 删除分支
git push origin --delete main

```

## 刷新 dns hosts

`ipconfig /flushdns`

## 最常用的镜像地址：

- https://github.com.cnpmjs.org
- https://hub.fastgit.org

## Git 报错

### OpenSSL SSL_read: Connection was reset, errno 10054 错误解决

首先，造成这个错误很有可能是网络不稳定，连接超时导致的，
如果再次尝试后依然报错，可以执行下面的命令。

打开 Git 命令页面，执行 git 命令脚本：修改设置，解除 ssl 验证

git config --global http.sslVerify "false"

## svn

- [svn 官网下载](https://tortoisesvn.net/downloads.html)

### svn 图标

Windows Explorer Shell 支持的 Overlay Icon 最多 15 个，Windows 自身使用了 4 个，只剩 11 个可扩展使用，如果你开启微软 OneDrive，可能这 11 个位置都被占用，Windows 内部就是按图标名称的字母顺序来优先显示的，导致 Tortoise 图标无法显示。

- svn 版本库图标不见修复方法

  只在名字前面加空格, 三个六个空格随意,只要比其它的文件夹名更深就能排前面，然后进程里面重启 explorer 程序就可以了

- 进入注册表路径
  `\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\ShellIconOverlayIdentifiers `

- 命令方式进入
  `win+R ` -> `regedit ` 进入注册表，修改名称排序

- 推荐方式
  文件夹右键菜单 -> `TortoiseSVN` -> `settings` -> `Icon Overlays` -> `Overlay Handlers` -> `start registry editor`
