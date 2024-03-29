# Vue 组件

## vue 修饰符

- stop 阻止事件继续传播
- prevent 阻止标签默认行为
- capture 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
- self 只当在 event.target 是当前元素自身时触发处理函数
- once 事件将只会触发一次
- passive 告诉浏览器你不想阻止事件的默认行为
- native [vue 2.x]触发组件绑定一些事件，[vue 3.x]已经默认触发

## ASCII 键盘码修饰符

键盘和鼠标各个键位对应的 ASCII 码值

- keyCode 按下键盘都会触发 `shout`各键对应的 ASCII 码值
  `<input type="text" @keyup.keyCode="shout(4)">`
  `if(event.keyCode<48||event.keyCode>57)event.returnValue=false; //禁止非数字字符输入 `

## click 修饰符

- @click.prevent.self 会阻止所有的点击
- @click.self.prevent 只会阻止对元素自身的点击

- @click.capture
  <!-- 添加事件监听器时使用事件捕获模式 -->
  <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
  `<div @click.capture="doThis" />`

## form 修饰符

- 提交事件不再重载页面
  `<form v-on:submit.prevent="onSubmit"></form>`

- 只有修饰符
  `<form v-on:submit.prevent></form>`

- passive 告诉浏览器你不想阻止事件的默认行为
  滚动事件的默认行为 (即滚动行为) 将会立即触发 ,而不会等待 `onScroll` 完成
  这其中包含 `event.preventDefault()` 的情况
  `<div v-on:scroll.passive="onScroll">...</div>`

## v-model 修饰符

- v-model.number
  使用修饰符.number 可以将输入的数据转换为 Number 类型，否则虽然你输入的是数字.

- v-model.trim
  如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符
  `<input v-model.trim="msg">`
- v-model.lazy
  input 在输入时，span 里的内容不做改变，当 input 失去焦点，触发 change 事件后 改变 span 的内容
  `<input v-model.lazy="msg" @change="show">`

## props 双向绑定

```js
export default {
  props: {
    /**
     * 双向绑定的代码内容
     */
    modelValue: {
      type: [String, Object, Array],
      default: null,
    },
  },
  setup(props, { emit }) {
    const btnSave = (event) => {
      let _value = 'test';
      // 收到同步更新
      emit('update:modelValue', _value);
    };
  },
};
```

## props validator 验证器

- vue props 下有验证器 validator 验证数据返回 true false 后，false 给 default 值

```js
import { bll } from 'quick.lib';
export default {
  props: {
    /** 名称 */
    named: {
      type: [String, Number],
      default: '',
    },
    /**是否显示关闭按钮 */
    closable: Boolean,
    /** 主题颜色 */
    css: {
      // required: true, // 定义该 prop 是否是必填项
      //验证数据
      validator(value) {
        return bll.array.test(value, [
          'default',
          'info',
          'primary',
          'success',
          'error',
          'warning',
        ]);
      },
      // 默认值
      default() {
        return 'default';
      },
    },
  },
};
```


## defineCustomElement web 组件

- 通过 defineCustomElement 方法创建原生自定义组件。也可以通过这种方式发布组件出去给别人

```js
// main.js
import { defineCustomElement } from "vue"

const MyVueElement = defineCustomElement({
    // 通用 vue 组件选项
    props:["foo"],
    render(){
        return h("div", "my-vue-element:" + this.foo)
    },
    // 仅适用于 defineCustomElement, css将被注入到 shadow root
    style: [`div { border: 1px solid red }`]
})

customElements.define("my-vue-element", MyVueElement)

```

- 然后在 vite.config.js 里配置白名单

```js

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // vue 将跳过 my-vue-element 解析
                    isCustomElement: (tag) => tag === "my-vue-element"
                }
            }
        })
    ]
})

```
- 然后使用

```js
<my-vue-element foo="foo" />
```


##  v-memo 缓存模板部分

`vue 3.2`

它可以缓存模板中的一部分，从而提升速度。比如说大量 v-for 的列表，只创建一次，就不会再更新了，直接用缓存，就是用内存换时间
下面这样组件重新渲染时，如果 valueA 和 valueB 没有变化，div 将跳过此组件和其子组件的所有更新

```html
<div v-memo="[valueA, valueB]">
    ...
</div>
```

还有像下面这样，部分缓存。需要注意的是在 `v-memo` 里面不能用 `v-for`

```html
<div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
    ...
</div>
```