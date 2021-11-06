# compositio-api

当迁移到 Vue 3 时，只需简单的将 @vue/composition-api 替换成 vue 即可。你现有的代码几乎无需进行额外的改动。

## 组合式 compositio-api

- [composition-api](https://github.com/vuejs/composition-api/blob/master/README.zh-CN.md)
- [官方文档](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)

## vue 2.x 迁移

- 安装 compositio-api

```
npm i @vue/composition-api
```

- 使用

```js
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);

// 在组件中使用
import { ref, reactive } from '@vue/composition-api';
```
