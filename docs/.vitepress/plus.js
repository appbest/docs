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
    text: 'plugin',
    link: '/plugin/',
  },
  {
    text: 'lib',
    link: '/lib/',
  },
  {
    text: 'qvui',
    link: '/qv/',
  },
  {
    text: 'qveui',
    link: '/ui/',
  },
  {
    text: 'qve',
    link: '/qve/',
  },
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
  '/plugin/': [
    {
      text: '快速使用',
      link: 'index',
    },

    {
      text: 'markdown 语法',
      link: 'markdown',
    },
    {
      text: '搜索插件',
      link: 'search',
    },
    {
      text: '图表插件',
      link: 'graphs',
    },
    {
      text: '时序图插件',
      link: 'sequence',
    },
    {
      text: '代码组件插件',
      link: 'run',
    },
  ],
  // 如果你不需要文档版本功能，只需去掉2.0，1.0文件夹，将md文件直接放在components文件夹下
  '/lib/': [
    {
      text: '安装使用',
      link: 'index',
    },
    {
      text: '原生扩展',
      link: 'init',
    },
    {
      text: 'BLL',
      link: 'bll',
    },
    {
      text: 'Json',
      link: 'json',
    },
    {
      text: 'Lib',
      link: 'lib',
    },
    {
      text: 'Html',
      link: 'html',
    },
    {
      text: 'Xml',
      link: 'xml',
    },
    {
      text: 'Cache',
      link: 'cache',
    },
    {
      text: 'Cookie',
      link: 'cookie',
    },
    {
      text: 'Storage',
      link: 'storage',
    },
    {
      text: 'Subscribe',
      link: 'subscribe',
    },
    {
      text: 'View',
      link: 'view',
    },
  ],
  '/ui/': [
    {
      text: '安装使用',
      link: 'index',
    },
    {
      text: '全局配置',
      link: 'config',
    },
    {
      text: '全局接口',
      link: 'global',
    },
    {
      text: 'Icon 图标',
      link: 'icon',
    },

    {
      text: 'Grid 栅格',
      link: 'grid',
    },
    {
      text: 'Badge 徽标数',
      link: 'badge',
    },
    {
      text: 'Button 按钮',
      link: 'button',
    },
    {
      text: 'Tooltip 小提示',
      link: 'tooltip',
    },
    {
      text: 'Tag 标签',
      link: 'tag',
    },

    {
      text: 'Card 卡片',
      link: 'card',
    },
    {
      text: 'Tabs 标签页',
      link: 'tabs',
    },
    {
      text: 'Paged 分页',
      link: 'paged',
    },
    {
      text: 'Loading 加载',
      link: 'loading',
    },
    {
      text: 'Input 输入框',
      link: 'input',
    },
    {
      text: 'Textarea 输入框',
      link: 'textarea',
    },
    {
      text: 'TextJson ',
      link: 'textJson',
    },
    {
      text: 'TextUbb',
      link: 'textUbb',
    },
    {
      text: 'Switch 开关',
      link: 'switch',
    },
    {
      text: 'Radio 单选框',
      link: 'radio',
    },
    {
      text: 'Checkbox 多选框',
      link: 'checkbox',
    },
    {
      text: 'Select 选择器',
      link: 'select',
    },
    {
      text: 'DatePicker 时间日期',
      link: 'datePicker',
    },
    {
      text: 'ImgGlass 图片背景',
      link: 'imgGlass',
    },
    {
      text: 'ImgLazy 图片懒加载',
      link: 'imgLazy',
    },
    {
      text: 'Table 表格',
      link: 'table',
    },
    {
      text: 'Form 表单',
      link: 'form',
    },
    {
      text: 'Tree 树组件',
      link: 'tree',
    },
    {
      text: 'TreeJson 树',
      link: 'treeJson',
    },
    {
      text: 'Menu 导航菜单',
      link: 'menu',
    },
    {
      text: 'Message 消息',
      link: 'message',
    },
    {
      text: 'Notice 通知提醒',
      link: 'notice',
    },
    {
      text: 'Frame 弹窗拖拽',
      link: 'frame',
    },
    {
      text: 'Drag 拖拽窗口',
      link: 'drag',
    },
    {
      text: 'Modal 对话框',
      link: 'modal',
    },
    {
      text: 'Poptip 气泡提示',
      link: 'poptip',
    },
    {
      text: 'Handle 拖把手',
      link: 'handle',
    },
    {
      text: 'Mask 遮罩',
      link: 'mask',
    },
    {
      text: 'validator 规则验证',
      link: 'validator',
    },
  ],
  '/qve/': [
    {
      text: '快速上手',
      link: 'index',
    },
    {
      text: '组件模板',
      link: 'tpl',
    },
    {
      text: 'Http 请求',
      link: 'http',
    },
    {
      text: '全局状态',
      link: 'store',
    },
    {
      text: '数据列表',
      link: 'listor',
    },
    {
      text: '动态表单',
      link: 'editor',
    },
    {
      text: '查询面板',
      link: 'PanelListor',
    },
    {
      text: '动态控件',
      link: 'control',
    },
    {
      text: '代码编辑器',
      link: 'CodeEditor',
    },
    {
      text: '异步动态组件',
      link: 'asyncModel',
    },
    {
      text: '及时通信',
      link: 'io',
    },
    {
      text: '路由配置',
      link: 'router',
    },
  ],
  '/qv/': [
    {
      text: '介绍',
      link: 'index',
    },
    {
      text: 'uni',
      link: 'uni',
    },
  ],
  '/guide/': [
    {
      text: '介绍',
      link: 'index',
    },
    {
      text: 'vscode',
      link: 'vscode',
    },
    {
      text: 'rollup',
      link: 'rollup',
    },

    {
      text: 'Vue',
      link: 'vue/index',
      children: [
        {
          text: '介绍',
          link: 'index',
        },
        {
          text: 'vue 兼容性',
          link: 'base',
        },
        {
          text: 'vue 错误机制',
          link: 'error_handler',
        },
        {
          text: 'vue3.x 新手上路',
          link: 'start',
        },
        {
          text: 'JSX',
          link: 'jsx',
        },
        {
          text: '组件',
          link: 'component',
        },
        {
          text: 'vue 2.x兼容',
          link: 'compositio-api',
        },
        {
          text: 'lang 国际化',
          link: 'lang',
        },
        {
          text: 'vite',
          link: 'vite',
        },
      ],
    },
    {
      text: 'h5',
      link: 'h5/index',
      children: [
        {
          text: '原生介绍',
          link: 'index',
        },
        {
          text: 'css 样式',
          link: 'css',
        },
        {
          text: 'ES6',
          link: 'es6',
        },
        {
          text: 'json',
          link: 'json',
        },
        {
          text: '日期原生',
          link: 'date',
        },
        {
          text: '语法高亮',
          link: 'prismjs',
        },
      ],
    },
    {
      text: '腾讯',
      link: 'tx/index',
      children: [
        {
          text: '微信开发',
          link: 'index',
        },
        {
          text: 'taro',
          link: 'taro',
        },
      ],
    },
  ],
  // 必须放最后
  '/': [
    {
      text: '开始',
      link: 'index',
    },
    {
      text: '关于',
      link: 'about',
    },
    {
      text: 'vue3.x 新手上路',
      link: 'guide/vue/start',
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
