# Hello VitePress

- [vitepress 官网](https://vitepress.vuejs.org/)

## VitePress 全局配置

- [配置文档](https://vitepress.vuejs.org/guide/global-computed.html)

> .vitepress>config.js

```js
{
  base: '/',
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  head: [],
  locales: {},
  themeConfig:{}
}
```

## 显示行号 Line Numbers

```js{3}
module.exports = {
  markdown: {
    lineNumbers: true,
  },
};
```

## 配置 markdown

```js
module.exports = {
  markdown: {
    // 描点 options for markdown-it-anchor
    anchor: { permalink: false },

    // 目录 options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // 自定义外挂 use more markdown-it plugins!
      md.use(require('markdown-it-xxx'));
    },
  },
};
```

## 注册组件 vue

Using Vue in Markdown

```js
// 默认主题
import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('VueExample', VueExample);
  },
};
```

- markdown 全局使用组件

```md
# Vue Click Away

<VueClickAwayExample />
```

## 插件 markdown-it

```js
module.exports = {
  markdown: {
    config: (md) => {
      // 第三方语言处理插件
      md.use(require('quick-plugin-md/language/'));
    },
  },
};
```

## 插件 markdown-it 使用 Vue

```js
module.exports = {
  markdown: {
    config: (md) => {
      // 第三方语言处理插件
      md.use(require('quick-plugin-md/language/'), {
        // 插件配置参数
        // 无需标签根据第一行代码自动转为图形组件
        tags: ['gitGraph', 'classDiagram', 'sequenceDiagram', 'gantt'],
        //默认标签
        default: 'mermaid',
        // 输出日志
        log: true,
        // 自定义markdown标签对应转换的模板组件名
        template: {
          // mermaid 标签转为 组件定义并传参，需要注意传入内容转码
          // mermaid: '<mermaid code="{code}"></mermaid>',
          mermaid: '<mermaid>{code}</mermaid>',
          // Vue 组件名对应 标签语言名，code 为内容
          VueExample: '<VueExample>{code}</VueExample>',
        },
      });
    },
  },
};
```

## 主题 themeConfig

```js

{
  locales: {},
  repo: 'vuejs/vitepress',
  docsDir: 'docs',
  editLinks: true,
  editLinkText: 'Edit this page on GitHub',
  lastUpdated: 'Last Updated',
  nav: [...],
  sidebar: { ... }
}

```
