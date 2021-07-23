# JSX

## JSX 语法

- [jsx-Babel 插件](https://github.com/vuejs/jsx-next)

```
npm i -D @vue/babel-plugin-jsx
```

.babelrc

```
{
  "plugins": ["@vue/babel-plugin-jsx"]
}
```

## Jsx vue

vue 组件

```js
@vitejs/plugin-vue-jsx


import vueJsx from '@vitejs/plugin-vue';

const config = {
  plugins: [vueJsx()],
};
module.exports = config;

```

## vue-template-compiler

```js
module.exports = {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    // 带完整组件编译执行
    vue: 'vue/dist/vue.esm-bundler.js',
  },
};
```

```js
const compiler = require('vue-template-compiler');

const result = compiler.compile(`
  <div id="test">
    <div>
      <p>This is my vue render test</p>
    </div>
    <p>my name is {{myName}}</p>
  </div>`);

console.log(result);
```
