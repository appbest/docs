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
