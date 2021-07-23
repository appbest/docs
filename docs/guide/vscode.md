# vscode 开发环境

[[TOC]]

- [visualstudio 开发工具](https://code.visualstudio.com/)

## vscode 插件

- Vetur —— 语法高亮、智能感知、Emmet 等包含格式化功能
  - Alt+Shift+F （格式化全文）
  - Ctrl+K Ctrl+F（格式化选中代码，两个 Ctrl 需要同时按着）
- EsLint —— 语法纠错，自动格式化保存
- Prettier - Code formatter ——— 格式化代码

- 安装以下，可实现项目编辑与发布一致性
- [Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/) —— md 文档编写插件
- Mermaid Markdown Syntax Highlighting - md 图表插件
- TortoiseSVN - svn 插件

## minify js 压缩插件

- minify - 单个 js 文件压缩,用于原生代码压缩

- 压缩命令如下：
  按 `F1` 或者 `Ctrl + Shift + P`
  搜索：minify 然后执行压缩

## markdown mddir 目录

生成 `markdown` 目录结构插件

```sh
# 安装全局插件
npm install mddir -g

# 运行将会生成目录结构文档 directoryList.md
mddir
```

## 快捷键

- Ctrl+/ —— 注释
- Shift+Ctrl+F —— 设置代码格式

## vscode 快捷键模板 vue

- 打开 VSCODE 编辑器，依次选择 `文件` -> `首选项` -> `用户代码片段`
- 此时，会弹出一个搜索框，我们输入 vue
- 选择 vue 后，VSCODE 会自动打开一个名字为 vue.json 的文件，
- 复制以下内容到这个文件中：

```json
{
  "Print to console": {
    "prefix": "vue",
    "body": [
      "<!-- $0 -->",
      "<template>",
      "  <div></div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  components: {},",
      "  props: {},",
      "  data () {",
      "    return {};",
      "  },",
      "  computed: {},",
      "  mounted: {},",
      "  methods: {},",
      "  setup (props, { emit, attrs }) {",
      "    return {};",
      "  }",
      "}",
      "",
      "</script>",
      "<style lang='less' scoped>",
      "</style>"
    ],
    "description": "Log output to console"
  }
}
```

保存后关闭这个文件。
新建一个名为 demo.vue 的文件，输入 vue 按下 enter，就会自动生成内容啦

## 保存自动格式化

- 打开 `文件` > `进入首选项` > `设置`
- 在搜索框内输入 `format on save` 找到格式化
- 勾选 `Editor：Format On Save`。
  这样当编辑完成后，ctrl+s 保存文件的时候就会格式化文件

## 结尾加分号

- 打开 `文件` ->`首选项` ->`设置 settings` -> `用户`
- 在搜索框内输入 `prettier.semi`

## 个性化配置

- [prettier 配置](https://prettier.io/docs/en/configuration.html)

  > 文件>首选项>设置> 用户 settings

- 历史版本配置

```js
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  //  #让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  //  #去掉代码结尾的分号
  "prettier.semi": false,
  //  #使用带引号替代双引号
  "prettier.singleQuote": true,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #这个按用户自身习惯选择
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // #vue组件中html代码格式化样式
    }
  },
  "explorer.confirmDelete": false
  /** 格式化stylus, 需安装Manta's Stylus Supremacy插件
"stylusSupremacy.insertColons": false, // 是否插入冒号
"stylusSupremacy.insertSemicolons": false, // 是否插入分好
"stylusSupremacy.insertBraces": false, // 是否插入大括号
"stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
"stylusSupremacy.insertNewLineAroundBlocks": false // 两个选择器中是否换行
*/
}
```

- 最新版本配置

```json
{
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  "prettier.cssEnable": ["css", "less", "scss"],
  // 使能每一种语言默认格式化规则
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.javascriptEnable": ["javascript", "javascriptreact"],
  //  #让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  // "prettier.useEditorConfig": false,
  //  #使用带引号替代双引号
  "prettier.singleQuote": true,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #这个按用户自身习惯选择
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // #vue组件中html代码格式化样式
    },
    "prettier": {
      "semi": false, // 格式化不加分号
      "singleQuote": true // 格式化以单引号为主
    }
  }
}
```

## vscode 禁止运行脚本错误

- 管理员身份运行`vscode`

  终端执行 `get-ExecutionPolicy` 显示 `Restricted` 表受限制

  - 解决：执行 `set-ExecutionPolicy RemoteSigned`;
    再执行 `get-ExecutionPolicy` 显示 `RemoteSigned` 表示完成

## vscode 使用 git

- 下载 git
  git 快速下载地址: https://npm.taobao.org/mirrors/git-for-windows/

- 工具

  -[tortoisegit](https://tortoisegit.org/download/)

- gitee 使用示例

```sh
# git 初始化
git init

# 连接到仓库
git remote add origin git@gitee.com:qve/qveui-vue3-admin.git

# 推送到仓库
git pull origin master

# 查看本地地址
git remote -v

# 删除地址
git remote remove origin

```
