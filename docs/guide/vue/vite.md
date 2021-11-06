# vite

新一代快速打包工具

## vite.config 配置

- [打包配置](https://cn.vitejs.dev/guide/build.html)

Vue 打包后出现一些 map 文件,修改项目下

- vite.config.js

```js
module.exports = {
  // 服务
  server: {
    // 启动端口
    port: 8080,
  },
  // 别名
  alias: {
    // 本地路径定义
    '@': path.resolve(__dirname, 'src'),
    // 带完整组件编译执行, 3.x 路径
    //vue: 'vue/dist/vue.esm-bundler.js',
     // 带完整组件编译执行, 2.x 路径
    // vue: 'vue/dist/vue.esm.js'
  },
  // 扩展
  plugins: []
  // 生成保留 map 源文件
  productionSourceMap: false,
};
```

## vue2.x

### 兼容 IE

IE 不支持 Promise 解决办法（可搜索 polyfill）
引入 `<script type="text/javascript" src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6"></script>`

### esbuild

- 编译报错

  当针对旧版浏览器时，无法使用 esbuild 作为缩小器，因为 esbuild 缩小不是旧版安全的
  `Can't use esbuild as the minifier when targeting legacy browsers because esbuild minification is not legacy safe`
  需要关闭压缩，以兼容 IE

```js
module.exports = {
  // 本地路径

  build: {
    // 兼容IE 测试
    target: 'es2015'
    // 关闭压缩
    minify: false,
    // minify: 'esbuild',
  }
}
```
