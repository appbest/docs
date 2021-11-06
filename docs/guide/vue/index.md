# vue 3

vue 3.x 正式版本已经发布，更快，更小！

- [vue 3.x 中文文档](https://v3.cn.vuejs.org/)
- [vue 3.x](https://github.com/vuejs/vue-next)
- [vue 3.x 更新说明](https://github.com/vuejs/vue-next/blob/master/CHANGELOG.md)

## Vue Electron 脚手架

- [Electron 文档](https://www.debugger.wiki/article/html/1606895640411576)



## vue 2.x 兼容

- [vue.config 配置](https://cli.vuejs.org/config/).

## vue2 click

vue 3.x 与 vue 2.x 差异
Vue2.x 官方文档关于父子组件通讯的原则，父组件通过 prop 传递数据给子组件，子组件触发事件给父组件。
但父组件想在子组件上监听自己的 click 的话，需要加上 native 修饰符

- `@click.native` 是给组件绑定原生事件

vue 2.x 组件需要修饰符号

`<Icon type="icon-mima" @click.native="btnEvent" />`

### script error 跨域错误

`script error.`有时也被称为跨域错误。
当网站请求并执行一个托管在第三方域名下的脚本时，就可能遇到该错误。
最常见的情形是使用 CDN 托管 JS 资源。
出于安全考虑，浏览器会刻意隐藏其他域的 JS 文件抛出的具体错误信息，这样做可以有效避免敏感信息无意中被不受控制的第三方脚本捕获。

- 方法 1 添加属性 crossorigin="anonymous" 不建议,此方法兼容性问题

  此步骤的作用是告知浏览器以匿名方式获取目标脚本。这意味着请求脚本时不会向服务端发送潜在的用户身份信息（例如 Cookies、HTTP 证书等）。
  `<script src="http://another-domain.com/app.js" crossorigin="anonymous"></script>`

- 方法 2 添加跨域 HTTP 响应头：
  注意：大部分主流 CDN 默认添加了 Access-Control-Allow-Origin 属性。
  完成上述两步之后，即可通过 window.onerror 捕获跨域脚本的报错信息

### ios wifi Error DOM Exception 18

- vue 路由问题导致，wifi 弹出 ios 浏览器，不支持报错 history.pushState & DOM Exception 18

  https://github.com/vuejs/vue-router/issues/564
  `This is a bug related to Safari. Using history: false should fix your issue. I'm closing because of inactivity. If you're still facing this problem consider opening a new issue with a reproduction`

- iPhone6 浏览器测试 log 中提示 SecurityError (DOM Exception 18)

- HTML5 Web Demo 报错 (Uncaught Error: SECURITY_ERR: DOM Exception 18)
  错误指向此行:
  History.replaceState({location:href}, "", href);

- DOM Exception 18 通常意味着你超过了设备允许的配额(50MB),尽管在某些环境中它是因为 Apple 删除了 WebSQL 支持(例如 WKWebView).

- https://github.com/pouchdb/pouchdb/issues/4234
