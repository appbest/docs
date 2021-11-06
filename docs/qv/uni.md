# uni 开发差异

- [uni-app](https://github.com/dcloudio/uni-app/issues)

## iconfont 阿里字体图标

- 登陆 iconfont 官网，创建自己的项目，找到需要的图标加入购物车，然后添加到项目中
- 生成 unicode ,点击下载至本地，解压
- 将解压后的文件放入 `static/fonts/` 目录

- 修改文件路径`/static/fonts/iconfont.css`

  ```css
  @font-face {
    font-family: 'iconfont'; /* Project id 2482387 */
    src: url('~@/static/fonts/iconfont.woff2?t=1621379940889') format('woff2'), url('~@/static/fonts/iconfont.woff?t=1621379940889')
        format('woff'),
      url('~@/static/fonts/iconfont.ttf?t=1621379940889') format('truetype');
  }
  ```

- 修改为本地引入方式
- 在 App.vue 中全局引入该文件
  `@import "./static/fonts/iconfont.css";`

-

## easycom 引入组件库

此方案引入，支持 h5 与微信小程序中使用。

- [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)

传统 vue 组件，需要安装、引用、注册，三个步骤后才能使用组件。
easycom 将其精简为一步。
只要组件安装在项目的 components 目录下，并符合 components/组件名称/组件名称.vue 目录结构。就可以不用引用、注册，直接在页面中使用。
如下：

- pages.json

```json
{
  // 加载组件库
  "easycom": {
    "autoscan": true,
    "custom": {
      "nav-top-bar": "@/components/bar/nav-top.vue", // 匹配components目录内的vue文件
      "cell-nas": "@/components/cell/nas.vue" // 匹配components目录内的vue文件
      // "^uni-(.*)": "@/components/uni-$1.vue", // 匹配components目录内的vue文件
      // "^vue-file-(.*)": "packageName/path/to/vue-file-$1.vue" // 匹配node_modules内的vue文件
    }
  }
}
```

## 传参

provide,inject【无法响应式实时更新，uni-app 框架中不建议使用】
$attrs,$listeners 这个在浏览器中可以，但是在 uni-app 框架中不支持
牵涉到多层传参或多页面传参建议使用【uni-app 框架建议使用 vuex】【浏览器端建议使用 Vue.prototype】
