# Loading 加载进度条

## 说明

创建一个显示页面加载、异步请求、文件上传等的加载进度条。

<!-- [Subscribe](./Subscribe.md)采用组件订阅事件方式，管理进度条 -->

## 全局进度条

`teleport` 把组件转移到目标元素中 (可选方式)

- index.html

```html
<body>
  <div id="appTopBody"></div>
  <div id="app"></div>
  <div id="endOfBody"></div>
  <script type="module" src="/src/main.js"></script>
</body>
```

- App.vue

```vue
<template>
  <!-- 注入到index.html > #appTopBody -->
  <teleport to="#appTopBody">
    <!-- LoadingBar 全局加载进度组件 -->
    <LoadingBar />
</template>
```

## 网络请求

- request.js

```js
import fly from 'flyio';
import { quick } from 'qveui';

/**
 * 添加请求拦截器
 */
fly.interceptors.request.use((config, promise) => {
  quick.Loading.start(); //开始加载进度条
  return config;
});

/**
 * 添加响应拦截器，响应拦截器会在then/catch处理之前执行
 */
fly.interceptors.response.use(
  (response, promise) => {
    quick.Loading.finish(); //结束进度条
    return promise.resolve(response.data);
  },
  (err, promise) => {
    quick.Loading.finish(); //结束进度条
    return promise.reject(err);
  }
);
const request = fly;
export { request };
```

## 页面使用

<CodeRun auto editable>

```vue
<template>
  <div class="test-load-page">
    <dl>
      <dt>局部</dt>
      <dd>
        <LoadingBar named="test" style="top:1rem" color="error" />
      </dd>
      <dd>
        <Button @click="btnLoad('start', 'test')"> 进度条开始 </Button>
        <Button @click="btnLoad('finish', 'test')"> 进度条结束 </Button>

        <Button @click="btnLoad('update', 'test')"> 指定进度 </Button>
      </dd>
    </dl>

    <dl>
      <dt>全局</dt>

      <dd>
        <Button @click="btnLoad('start')"> 进度条开始 </Button>
        <Button @click="btnLoad('finish')"> 进度条结束 </Button>

        <Button @click="btnLoad('update')"> 指定进度 </Button>
      </dd>
    </dl>

    <dl>
      <dt>订阅事件</dt>
      <dd>
        <Button @click="btnSubscribe('keys')"> 所有订阅事件ID </Button>
      </dd>
      <dd>{{ the.keys }}</dd>
      <dd></dd>
    </dl>
  </div>
</template>

<script>
export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    const the = reactive({
      url: '/page/help/index',
      keys: [],
    });

    const btnLoad = (val, named) => {
      named = named || 'base';
      let resp;
      switch (val) {
        /** 进度开始 */
        case 'start':
          // console.log(qveui);
          resp = $plus.loading.start(null, named);
          console.log(JSON.stringify(resp));
          break;

        case 'finish': // 加载完成
          resp = $plus.loading.finish(named);
          console.log(JSON.stringify(resp));
          break;
        case 'update':
          console.log(val);
          resp = $plus.loading.update(
            {
              start: false,
              show: true,
              percent: 30,
            },
            named
          );
          console.log(JSON.stringify(resp));
          break;
      }
    };

    // 当前监听的事件ID
    const btnSubscribe = (val) => {
      switch (val) {
        case 'keys':
          // 全局组件keys
          the.keys = $plus.ui.subscribe.keys();
          // console.log()
          break;
      }
    };

    return { btnLoad, btnSubscribe, the };
  },
};
</script>
<style lang="less">
.test-load-page {
  dl {
    padding: 0.5rem;
    dt {
      padding: 0.5rem;
      font-size: 0.8rem;
    }
    dd {
      padding: 0.5rem;
    }
  }
}
</style>
```

</CodeRun>

## API

### Loading instace

| 函数名 | 说明     | 参数          | 默认值                                |
| ------ | -------- | ------------- | ------------------------------------- |
| start  | 开始加载 | 订阅 id,optis | {start: true,show: true,percent: 0}   |
| finish | 完成加载 | 订阅 id,optis | {start: false,show: false,percent: 0} |

### LoadingBar props

- 样式名字 progress.less

| 属性名  | 说明                                 | 类型    | 默认值         |
| ------- | ------------------------------------ | ------- | -------------- |
| id      | 组件订阅事件名称,为空不订阅          | String  | on-loading-bar |
| named   | 组件名称，用于组件实例区分           | String  | -              |
| percent | 进度条宽度%                          | Number  | 0              |
| color   | 进度条颜色,可选值为`primary` `error` | String  | primary        |
| show    | 是否显示进度条                       | Boolean | false          |
