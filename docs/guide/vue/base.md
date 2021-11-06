# vue 版本

## vue 3.2.x

性能提升
响应式的优化
更高效的 ref 实现，读取提升约 260%，写入提升约 50%
依赖收集速度提升约 40%
减少内存消耗约 17%
模板编译器优化
创建元素 VNodes 速度提升约 200%
- Web Components：自定义 web 组件
- New SFC Features：新的单文件组件特性
- Effect Scope API： effect 作用域，用来直接控制响应式副作用的释放时间(computed 和 watchers)。这是底层库的更新
- SSR：服务端渲染优化。@vue/server-renderer包加了一个ES模块创建，与Node.js解耦，使在非Node环境用@vue/serve-render做服务端渲染成为可能，比如(Workers、Service Workers)

### useContext 废弃

由于 expose、slots、emit、attrs 都不能通过 useContext 获取了，随之而来的是下面几个

```js
//原来的 useContext 是这样的，现在下面这个都不能用了
import { useContext } from "vue"
const { expose, slots, emit, attrs } = useContext()

// 新的代替方式
import { useAttrs, useSlots } from "vue"
const attrs = useAttrs()
const slots = useSlots()
```

### defineExpose 新增组件引入
不需要通过 import 引入，向下面这样直接使用，功能一样，对外暴露属性和方法

```js
defineExpose({
    name:"沐华"
    someMethod(){
        console.log("这是子组件的方法")
    }
})
```

### defineEmit 改名

```js
// 原来引入
// import { defineEmit } from "vue"

// 新的直接使用
defineEmits(["getName","myClick"])
```
