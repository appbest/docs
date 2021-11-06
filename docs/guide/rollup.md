# rollup 打包

Rollup 是一个模块打包器
Rollup 支持 Tree-shaking
静态分析代码中的 import ，排除未使用的代码

## rollup vue 2.x

`yarn add -D -W rollup rollup-plugin-terser rollup-plugin-vue@5.1.9 vue-template-compiler`

- rollup
- rollup-plugin-terser - 代码压缩
- rollup-plugin-vue@5.1.9 - 将单文件组件编译成 JS 代码
  注意要指定版本，因为这个插件的最新版本编译 Vue3.0 的组件
- vue-template-compiler - rollup-plugin-vue 编译 SFC 需要的依赖
