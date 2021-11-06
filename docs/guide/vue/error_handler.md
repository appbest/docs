# vue 错误

- errorCaptured

- warnHandler

## index.html

```html
<html>
  <head>
    <style lang="less">
      // 页面调试信息
      .appTeleportTestBody {
        position: fixed;
        z-index: 9999;
        width: 100%;
        bottom: 0;
        background-color: #333;
        overflow: auto;
        dl {
          font-size: 0.6rem;
          color: #888;
          dt {
            color: #fff;
            cursor: pointer;
            padding: 0.5rem;
            background-color: #bb3333;
            margin-right: 0.5rem;
          }
          dt,
          dd {
            display: inline-block;
          }
        }
      }
    </style>
  </head>
  <body>
    <div id="appTopOfBody"></div>
    <div id="app"></div>
    <div id="appFootOfBody"></div>
    <!-- 错误提示 -->
    <div id="appTeleportTestBody" class="appTeleportTestBody"></div>
  </body>
</html>
```

## errorHandler 全局错误机制

- /components/index.js

```js
/**
 * vue 组件挂载
 * @param {*} app
 * @param {*} opts
 */
const install = function (app, opts) {
  // 判断是否安装
  if (install.installed) return;

  /**  全局错误处理 */
  app.config.errorHandler = (err, vm, info) => {
    // 处理错误
    console.error('vue.errorHandler', vm);
    // 处理错误
    let _err = `发生错误：${err.message}`;
    try {
      _err += `，${info}`;
      // vue 2.x
      _err += '，组件:' + (vm.$vnode ? `${vm.$vnode.tag}` : '');
    } catch {
      // console.error('vue.errorHandler', vm);
    }
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    document.getElementById('appTeleportTestBody').innerHTML +=
      '<dl><dt onclick="this.parentNode.parentNode.innerHTML=\'\'">X</dt><dd>' +
      _err +
      '</dd></dl>';
  };
};

// 导出该组件
export default {
  install,
};
```

## main.errorHandler 引入

- vue 2.x

```js
import Vue from 'vue';
// 全局公共组件与第三方组件库
import startup from './components/index.js';
Vue.use(startup);
```

- vue 3.x

```js
import { createApp } from 'vue';
import App from './App.vue';
// 引入组件库与外挂
import startup from './components/index.js';
createApp(App).use(startup);
```
