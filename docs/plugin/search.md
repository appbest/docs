# Search 搜索组件

将会根据 md 文档标题生成搜索数据源，支持多级路径搜索。
暂时不支持内容全文检索。

## Search.plus 搜索源数据

- 通过启用配置引入配置文件`plus.js` 创建 `keywords.json` 搜索数据源

::: warning 特别注意
root.base 部署到二级地址，测试时注意此路径
:::

```js
/**
 * 全站路径配置 0.1.2
 */
const root = {
  /** 部署的二级地址 */
  base: '/docs',
  // 搜索的文件名地址，默认是根目录下,与Layout.vue 搜索数据源同步
  keyword: '\\keywords.json',
  /** 当前项目根目录地址 */
  path: '',
};

/**
 * 顶部导航
 */
const nav = [
  { text: '主页', link: '/' },
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '更多',
    link: '',
    items: [
      {
        text: 'IconFont 图标',
        link: '/fonts/demo_index.html?v=0.2',
      },
      { text: '码云', link: 'https://gitee.com/qve/docs' },
      { text: 'Github', link: 'https://github.com/appbest/' },
      { text: 'NPM lib', link: 'https://www.npmjs.com/package/quick.lib' },
    ],
  },
];

/**
 * 左侧导航分类
 */
let sidebar = {
  '/guide/': [
    {
      text: '介绍',
      link: 'index',
    },
    {
      text: 'h5',
      link: 'h5/index',
      // 二级路径
      children: [
        {
          text: '原生介绍',
          link: 'index',
        },
      ],
    },
  ],
};

const path = require('path');
/**
 * 根目路径
 * @param {*} dir 指定的路径
 * @returns 返回完整路径
 */
const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

// 当前项目目录
root.path = resolve('../../');

/**
 * 路径补全处理
 * @param {*} data 侧边栏
 * @returns
 */
const pathJoin = (data) => {
  let _sidebar = {};

  // 路径处理
  for (let k in data) {
    // let _key = k != '/' ? root.base + k : k;
    // console.log('sidebar', k);
    data[k].forEach((e) => {
      // console.log('sidebar.' + k, e);
      // 补充路径
      e.link = k + e.link;
      if (e.children) {
        // 有下级
        let _chpath = e.link.replace(/index$/gi, '');
        e.children.forEach((item) => {
          // 补充路径
          item.link = _chpath + item.link;
        });
      }
    });

    _sidebar[k] = data[k];
  }

  return _sidebar;
};

sidebar = pathJoin(sidebar);

//console.log('sidebar', sidebar);

/**
 * 初始化页面的搜索数据
 */
const { KeywordInit } = require('quick-plugin-md/search/');
KeywordInit(sidebar, root.keyword, root.path);

//console.log(sidebar);

/**
 * markdown-it 外挂
 * @param {*} md 对象
 */
const usePlus = (md) => {
  // use more markdown-it plugins!
  md.use(require('quick-plugin-md/language/'), {
    // 无需标签根据第一行代码自动转为图形组件
    // tags: ['gitGraph', 'classDiagram', 'sequenceDiagram', 'gantt'],
    // /** 默认标签*/
    // default: 'mermaid',
    // // 输出日志
    // log: true,
    // // 自定义markdown标签对应转换的模板组件名
    // template: {
    //   // mermaid 标签转为 组件定义
    //   // mermaid: '<mermaid code="{code}"></mermaid>',
    //   mermaid: '<mermaid>{code}</mermaid>',
    //   pie: '<PieCode>{code}</PieCode>',
    // },
  });
};

module.exports = { resolve, usePlus, root, nav, sidebar };
```

## 站内搜索组件 search

```vue
<template>
  <Layout>
    <template #sidebar-top>
      <!-- 搜索 -->
      <SearchBar @onEvent="SearchEvent" :words="keywords" />
    </template>
  </Layout>
</template>

<script>
import { useRouter, useSiteData } from 'vitepress';
import theme from 'vitepress/dist/client/theme-default/index.js';
//import { Layout } from 'vitepress/dist/client/theme-default/index.js';
const Layout = theme.Layout;

/**
 * 搜索根目下的全局数据，与plus配置一致
 */
import keywords from '@/keywords.json';

export default {
  components: { Layout },
  setup() {
    const siteData = useSiteData();
    /** 路由 */
    const router = useRouter();
    /** 搜索事件触发 */
    const SearchEvent = (data) => {
      // 发布根目录
      let _url = siteData.value.base + data.url.substr(1);
      // let _url = data.url;
      //  console.log('SearchEvent：' + siteData.value.base, _url);
      // 路由跳转
      router.go(_url);
    };

    return { keywords, SearchEvent };
  },
};
</script>
```

- props

| 属性  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| words | 搜索数据源 | String |        |
