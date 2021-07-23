# Quick.lib

一个快速开发的前端库

- [quick.lib 发布包更新](https://www.npmjs.com/package/quick.lib)

## quick 引入

```bash

# 安装
npm i quick.lib
```

### 全局引入

组件库

- components/index.js

```js
// 引入组件库
import quick from 'quick.lib';

// 项目自定义组件
const components = {};

const install = function (app) {
  // 判断是否安装
  if (install.installed) return;
  // 引入组件
  Object.keys(components).forEach((key) => {
    app.component(key, components[key]);
  });

  let opts = {
    // 初始原生扩展函数
    init: true,
    // 全局绑定调用$quick,
    global: true,
    //输出日志
    log: { isPrint: true },
  };

  // 全局引入
  app.use(quick, opts);
  /** vue 3.x 全局绑定quick 调用 */
  // app.config.globalProperties.$quick = quick;
  /** vue 2.x 绑定全局调用 */
  // app.prototype.$quick = quick;
};

// 导出该组件
export default {
  install,
};
```

- 主文件 main.js

```js
import { createApp } from 'vue';
import App from './App.vue';

// 引入组件库与外挂
import startup from './components/index.js';

createApp(App).use(startup).mount('#app');
```

## 按需引入

- 测试 test.vue

```html
<!-- 测试 -->
<template>
  <div>
    <dl>
      <dt>bll 方法测试</dt>
      <dd></dd>
    </dl>
  </div>
</template>

<script>
  // 按需引入，非全局使用
  import { bll } from 'quick.lib';
  export default {
    setup(props, context) {
      let resp = bll.oneOf('small', ['small', 'large', 'default']);
      console.log(resp);
      return {};
    },
  };
</script>
<style lang="less" scoped></style>
```

## 网页引入

请先下载 quick.min.js

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test Quick</title>
  </head>
  <body>
    <div id="app">page</div>
    <script src="~/quick/lib/quick.min.js?v=0.2.5"></script>
    <script>
      try {
        // 初始化原生扩展
        quick.init();

        console.log(quick.version);
      } catch (e) {
        console.log(e);
      }
    </script>
  </body>
</html>
```

## config 配置

```js
/**
 * 组件库配置
 */
const config = {
  /** 日志配置 */
  log: {
    /** 是否打印输出 */
    isPrint: false,
  },
  cookie: {
    /** 默认30天过期 */
    maxAgeMinute: 43200,
  },
};
```
