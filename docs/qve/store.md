# store 全局状态

- [原始数据类型 symbol](../guide/h5/es6.md#symbol) 保证全局唯一

- [提供 Provide / 注入 Inject](https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html)

## 注入用户 Inject

- 局部使用

```js
// 引入全局状态
import { useGlobalStore } from '../../store';
export default {
  setup() {
    // 外挂写法
    //  const { useGlobalStore } = window.$plus.store;
    //调用 inject 函数时，通过指定的数据名称，获取到父级共享的数据
    const store = useGlobalStore();
    console.log('place:', JSON.stringify(store.user));
  },
};
```

## vue 3.x 引入 createStore

- main.js

```js
import { createApp } from 'vue';
import App from './App.vue';

// 全局状态引入
import { createStore } from './store';
createApp(App).use(createStore()).mount('#app');
```

## vue 2.x provideStore

- main.js 无需引入 createStore

- App.vue 进行全局注入 provideStore

```vue
<script>
// 全局注入
import { provideStore } from './store';
export default {
  provide: provideStore,
};
</script>
```

## store 全局状态

- src/store/index.js

```js
import { inject } from '@/components/vue.api.js';
import { AppModel, UserModel } from './models.js';

/**
 * 全局关键字
 */
const StoreSymbol = 'global-store';
//const StoreSymbol = Symbol ? Symbol('global-store') : 'global-store';

/**
 * 全局应用对象
 */
const StateModel = { app: new AppModel(), user: new UserModel() };

/**
 * vue 3 创建全局状态
 * app.use(createStore())
 */
const createStore = () => {
  // console.log('createStore', 'Store');
  return {
    install(app) {
      // 初始化，用户对象
      // console.log('install Store', StateModel);

      // 全局绑定
      app.provide ? app.provide(StoreSymbol, StateModel) : '';
      //provide(StoreSymbol, StateModel);
    },
  };
};

/**
 * App.vue注册全局对象状态,vue 2.x
 * @returns
 */
const provideStore = () => {
  let data = {};
  data[StoreSymbol] = StateModel;
  return data;
};

/**
 * 取出全局状态
 */
const useGlobalStore = () => inject(StoreSymbol);

/**
 * 获取全局用户信息
 */
const useGlobalUser = () => {
  const store = useGlobalStore();
  return store.user || {};
};

/**
 * 获取全局应用信息
 */
const useGlobalApp = () => {
  const store = useGlobalStore();
  return store.app || {};
};

export {
  createStore,
  provideStore,
  StateModel,
  useGlobalStore,
  useGlobalUser,
  useGlobalApp,
};
```
