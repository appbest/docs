# Vue3.x 新手上路

## 前言

vue 3 已经于 `2020-09-21` 正式发布，对比 vue 2 有很大的区别。这里会介绍其中的一些区别和新增的用法，以帮助开发者更快上手 vue 3。

## vue3 新特性

### 性能

1. 双向响应原理由 Object.defineProperty 改为基于 ES6 的 Proxy，使其颗粒度更大，速度更快，且消除了之前存在的警告；
2. 重写了 Vdom ，突破了 Vdom 的性能瓶颈
3. 进行了模板编译的优化
4. 进行了更加高效的组件初始化

### [composition-api 组合式 API](https://composition-api.vuejs.org/zh/api.html)

这是 vue 3 的一个核心变更，就是把同一个业务逻辑的代码（数据，计算属性，方法...）放在一块，能提供更棒的逻辑复用和代码组织。旧版本的 created,beforeCreaded 钩子函数已废弃，用新的 setup 代替。

### 全局 API

创建示例方法改变了

在 vue 2.x 中

```js
import Vue from 'vue';
import App from './App.vue';

Vue.config.ignoredElements = [/^app-/];
Vue.use(/* ... */);
Vue.mixin(/* ... */);
Vue.component(/* ... */);
Vue.directive(/* ... */);

Vue.prototype.customProperty = () => {};

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

在 vue 3.x 中

```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.isCustomElement = (tag) => tag.startsWith('app-');
app.use(/* ... */);
app.mixin(/* ... */);
app.component(/* ... */);
app.directive(/* ... */);

app.config.globalProperties.customProperty = () => {};

app.mount(App, '#app');
```

## vue 3.x 废弃内容

- beforeCreate、created
- filters
- keycode
- inline-template
- data-object
- on,off 和 \$once

## vue 生命周期

- 与 2.x 版本生命周期相对应的组合式 API

beforeCreate -> 使用 setup()
created -> 使用 setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
errorCaptured -> onErrorCaptured

## 依赖注入 provide

- provide 和 inject 提供依赖注入，功能类似 2.x 的 provide/inject。两者都只能在当前活动组件实例的 setup() 中调用。

- inject 接受一个可选的的默认值作为第二个参数。如果未提供默认值，并且在 provide 上下文中未找到该属性，则 inject 返回 undefined。

### Tree-shaking

vue3 不会把所有的 api 都全局引入，需要自己按需引入。

```js
// <!-- vue 2.x -->
import Vue from 'vue' Vue.nextTick(() => {}) const obj = Vue.observable({})

// <!-- vue 3.x -->
import Vue, { nextTick, observable } from 'vue' Vue.nextTick // undefined
nextTick(() => {}) const obj = observable({})
```

### teleport 组件

teleport 组件它只是单纯的把定义在其内部的内容转移到目标元素中，在元素结构上不会产生多余的元素，当然也不会影响到组件树，它相当于透明的存在。为什么要有这个组件？为了有更好的代码组织体验。比如：有时，组件模板的一部分在逻辑上属于此组件，但从技术角度来看(如：样式化需求），最好将模板的这一部分移动到 DOM 中的其他位置。

比如：一些 UI 组件库的 模态窗、对话框、通知，下拉菜单等需要通过 z-index 来控制层级关系，如果都只是在不同的组件或者元素层级中，那么 z-index 的层级顺序就难以保证。可能你会说很多 UI 库不是都已经是这样的实现了的吗？至于这个 UI 库是如何实现的，我猜应该是直接操作 DOM。为什么还要提供这个 teleport 组件呢？可能是因为 vue 本身的使命使然：尽量不让开发者直接操作 DOM，这些事都统一由 VUE 来完成。开发者可以把更多的时间放在业务的开发上。

```html
<teleport to="#modals">
  <div>A</div>
</teleport>
<teleport to="#modals">
  <div>B</div>
</teleport>

<!-- result-->
<div id="modals">
  <div>A</div>
  <div>B</div>
</div>
```

### Suspense 插槽

加载异步组件，在异步组件加载完成成并完全渲染之前 suspense 会先显示 #fallback 插槽的内容 。

```html
<Suspense>
  <template>
    <Suspended-component />
  </template>
  <template #fallback> Loading... </template>
</Suspense>
```

`#fallback` 其实是插件 `v-slot` 的简写，而第一个 `template` 没有给，则为默认插槽。

### 指令动态参数

指令名，事件名，插槽名，都可以使用变量来定义了。

```html
<!-- v-bind with dynamic key -->
<div v-bind:[key]="value"></div>

<!-- v-bind shorthand with dynamic key -->
<div :[key]="value"></div>

<!-- v-on with dynamic event -->
<div v-on:[event]="handler"></div>

<!-- v-on shorthand with dynamic event -->
<div @[event]="handler"></div>

<!-- v-slot with dynamic name -->
<foo>
  <template v-slot:[name]> Hello </template>
</foo>

<!-- v-slot shorthand with dynamic name -->
<!-- pending #3 -->
<foo>
  <template #[name]> Default slot </template>
</foo>
```

### Fragments

不再限制 template 只有一个根节点。
render 函数也可以返回数组了，有点像 React.Fragments

### Better TypeScript Support

更好的类型推导，使得 Vue3 把 TypeScript 支持得非常好

## vue3 变更

### 插槽 slot 语法

在 vue3 中合二为一

```html
<!-- vue 2.x -->
<foo>
  <bar slot="one" slot-scope="one">
    <div slot-scope="bar">{{ one }} {{ bar }}</div>
  </bar>

  <bar slot="two" slot-scope="two">
    <div slot-scope="bar">{{ two }} {{ bar }}</div>
  </bar>
</foo>

<!-- vue 3.x -->
<foo>
  <template v-slot:one="one">
    <bar v-slot="bar">
      <div>{{ one }} {{ bar }}</div>
    </bar>
  </template>

  <template v-slot:two="two">
    <bar v-slot="bar">
      <div>{{ two }} {{ bar }}</div>
    </bar>
  </template>
</foo>
```

简写

```html
<TestComponent>
  <template #one="{ name }">Hello {{ name }}</template>
</TestComponent>
```

### v-model

1. 原来的方式保留

```html
<input v-model="foo" />
```

2. 可绑定多个 v-model

```html
<InviteeForm v-model:name="inviteeName" v-model:email="inviteeEmail" />
```

其实上面这种方式就相当于之前的 .sync 。

3. 额外处理

```html
<Comp v-model:foo.trim="text" v-model:bar.number="number" />
```

我们可以给这个属性添加额外的处理

### transition

当 `<transition>` 作为组件的根元素时，外部切换不会触发过渡效果

vue 2.x

```vue
<!-- modal component -->
<template>
  <transition>
    <div class="modal"><slot /></div>
  </transition>
</template>

<!-- usage -->

<modal v-if="showModal">hello</modal>
```

vue 3.x

```vue
<!-- modal component -->
<template>
  <transition>
    <div v-if="show" class="modal"><slot /></div>
  </transition>
</template>

<!-- usage -->

<modal :show="showModal">hello</modal>
```

也就是说我们只能在 `<transition>` 内使用切换。

## Router 路由

- [Router 路由](https://next.router.vuejs.org/zh/introduction.html)

适合版本：Version: Vue (2.x / 3.x) Vue Router (3.x / 4.x)

#### router-link 变动

router-link 添加 scoped-slot API 和 custom 属性，并移除了 tag 属性和 event 属性。

添加 scoped-slot 有什么用呢？以前只能通过 active-class 来改变元素样式的，现在有了 scoped-slot 之后，我们就更加灵活了，可以根据 scoped-slot 回传的状态自定义，不管是样式还是类。

```html
<router-link to="/" custom v-slot="{ href, navigate, isActive }">
  <li :class="{ 'active': isActive }">
    <a :href="href" @click="navigate">
      <Icon>home</Icon><span class="xs-hidden">Home</span>
    </a>
  </li>
</router-link>
```

新版本的 Router 就更加的纯粹，只提供给我们一些参数，让我们自己利用这些参数来实现不同的场景。

#### meta 合并

```js
{
  path: '/parent',
  meta: { requiresAuth: true, isChild: false },
  children: [
    { path: 'child', meta: { isChild: true }}
  ]
}
```

当访问 /parent/child 时，子路由中的 meta 如下：

```js
{ requiresAuth: true, isChild: true }
```

合并策略与 Object.assign 类似

#### 路由匹配所有

```js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'All',
    component: () => import(/* webpackChunkName: "All" */ '../views/Home.vue'),
  },
];
```

这里有一个需要注意的就是 vue-router 匹配所有路由的写法已经改变了，不是旧版本的 \* ，在新的版本里写法参考上面的示例代码

#### 获取当前路由信息

```js
import router from '../router';
export default {
  setup() {
    const currentRoute = router.currentRoute.value;
    console.log(currentRoute);
  },
};
```

引入的 router 为我们通过 createRouter() 方法创建的对象

```js
import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
```

routes 路由为我们定义的路由数组，跟旧版本的一样。

### 属性值修正

| 表达式            | 正常       | 最终处理成        |
| ----------------- | ---------- | ----------------- |
| :attr="null"      | /          | draggable="false" |
| :attr="undefined" | /          | /                 |
| :attr="true"      | foo="true" | draggable="true"  |
| :attr="false"     | /          | draggable="false" |
| :attr="0"         | foo="0"    | draggable="true"  |
| attr=""           | foo=""     | draggable="true"  |
| attr="foo"        | foo="foo"  | draggable="true"  |
| attr              | foo=""     | draggable="true"  |

新版本处理方式：

| 表达式            | 正常        | 最终处理成        |
| ----------------- | ----------- | ----------------- |
| :attr="null"      | /           | /                 |
| :attr="undefined" | /           | /                 |
| :attr="true"      | foo="true"  | draggable="true"  |
| :attr="false"     | foo="false" | draggable="false" |
| :attr="0"         | foo="0"     | draggable="0"     |
| attr=""           | foo=""      | draggable=""      |
| attr="foo"        | foo="foo"   | draggable="foo"   |
| attr              | foo=""      | draggable=""      |

在新版本中基本保持了原样，也就是我们给元素添加什么属性值，vue 处理完后还是什么属性值。

### 动态路由

适用版本 Router 4

添加了几个方法

- router.addRoute(route: RouteRecord) 动态添加路由
- router.removeRoute(name: string | symbol)，动态删除路由
- router.hasRoute(name: string | symbol): boolean ，判断路由是否存在
- router.getRoutes(): RouteRecord[] 获取路由列表

```js
router.addRoute({
  path: '/new-route',
  name: 'NewRoute',
  component: NewRoute,
});

// add to the children of an existing route
router.addRoute('ParentRoute', {
  path: 'new-route',
  name: 'NewRoute',
  component: NewRoute,
});

router.removeRoute('NewRoute');

// normalized version of the records added
const routeRecords = router.getRoutes();
```

## vue3 组件

### 组件传值之 props 与 attrs 的区别

1、props 要先声明才能取值，attrs 不用先声明

2、props 声明过的属性，attrs 里不会再出现

3、props 不包含事件，attrs 包含

4、props 支持 string 以外的类型，attrs 只有 string 类型
