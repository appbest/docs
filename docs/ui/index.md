# Quick Vue UI

基于 vue3.0 的组合式 API，重构每一个组件。此版本不会兼容 vue2.x

- [qveui 发布包更新](https://www.npmjs.com/package/qveui)

# 快速使用

- 下载开箱即用模板
  [qveui-template ](https://gitee.com/qve/qveui-vue3-admin)

- 解压到文件夹，在终端中执行

```sh
# 安装
yarn

## 测试
yarn dev

## 打包
yarn build

## 本地运行
yarn preview
```

## 组件库配置

- 现有项目中引入

```sh
## 现有项目中独立引入库
yarn i qveui
```

- startup.js

```js
// 引入组件库
import qveui from 'qveui'
import 'qveui/dist/fonts/iconfont.css'
import 'qveui/dist/styles/index.less'

// 引入网络请求
import { request, fail } from './utils/request.js'

// 引入网络请求
import * as configURL from './config/url.js'

// 可自定义导航组件
import Nav from './Nav/Top.vue'

// 组件
const components = {
  Nav,
}

const install = function (app, opts) {
  console.log('install')

  // 判断是否安装
  if (install.installed) return

  Object.keys(components).forEach((key) => {
    app.component(key, components[key])
  })

  app.use(qveui, {
    // prefix:'自定义组件使用前缀，避免跟其它项目组件重名'
    //输出日志
    log: opts.log || { isPrint: true },
    config: {
      ui: {
        // 是否小屏幕
        isMobile: document.body.clientWidth < 1024,
      },
    },
  })

  /** 全局绑定quick 调用 */
  app.config.globalProperties.$url = configURL
  app.config.globalProperties.$ui = qveui
}

// 导出该组件
export default {
  install,
}
```

## main.js 中挂载

```js
import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from './router'
// 引入状态
import store from './store'

// 引入组件库与外挂
import startup from './components/startup.js'

createApp(App)
  .use(router)
  .use(store)
  .use(startup, {
    //输出日志
    log: { isPrint: true },
  })
  .mount('#app')
```

## App.vue 动态响应

```vue
<template>
  <!-- 注入到index.html > #appTopBody -->
  <teleport to="#appTopBody">
    <!-- LoadingBar 全局加载进度组件 -->
    <LoadingBar />
    <!-- Message 全局提示通知组件 -->
    <Message />
  </teleport>
  <!-- router 全局路由 -->

  <router-view></router-view>

  <teleport to="#endOfBody">
    <!-- Frames 全局浮动窗口组件 -->
    <Frames :mobile="frameMobile" :specs="frameSpecs" />
  </teleport>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'App',
  setup() {
    //const $plus = window.$plus;
    // const {ref} = window.$plus.vue;

    // 浮窗初始化 是否小屏幕尺寸，全屏打开
    const frameMobile = ref(false)
    // 浮窗基础参数配置
    const frameSpecs = ref({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    })

    const onResize = () => {
      // 页面基础字体 缩放
      const rem = html.fontRem()

      // 初始化 基础字体大小
      fontSize(rem.fontSize)

      // 小屏幕尺寸，全屏打开
      frameMobile.value = rem.offsetWidth < 1024 ? true : false

      // 窗体宽度
      frameSpecs.value = {
        width: rem.offsetWidth,
        height: document.body.clientHeight,
      }

      // console.log(
      //   'App.frameSpecs:' + frameMobile.value,
      //   JSON.stringify(frameSpecs.value)
      // );
      // console.log('App.onResize:' + frameMobile.value, rem);
    }

    onMounted(() => {
      // 执行基础字体缩放
      onResize()
      // 窗口发生变化时
      window.onresize = onResize
    })

    return { frameMobile, frameSpecs }
  },
}
</script>
```

## 引入独立组件

- 引入组件方式

```js
import { Message } from 'qvui'
Message.info('请填写完整')
```

- 全局变量方式

```js
import { getCurrentInstance } from 'vue'

export default {
  setup() {
    // 引入上下文
    const { ctx } = getCurrentInstance()
    ctx.$qve.Message.info('请填写完整')
  },
}
```

## 组件名

```js
{
  Icon,
  Badge,
  Tag,
  Toolbar,
  Card,
  Tabs,
  Input,
  Textarea,
  Textjson,
  TextUbb,
  Button,
  ButtonGroup,
  Tooltip,
  Select,
  Poptip,
  Switch,
  Form,
  Field,
  LoadingBar,
  Table,
  Paged,
  Tree,
  TreeNode,
  TreeJson,
  TreeJsonItem,
  Menu,
  MenuItem,
  Notice,
  Frames,
  HandleHeight,
  HandleWidth,
  Col,
  Message,
  Row,
  /** 对话框 */
  Modal,
  /** 可拖到浮窗 */
  Drag,
  Checkbox,
  Radio,
  RadioGroup,
  DatePanel,
  DatePicker,
  DateBar,
  TimePicker,
  ImgLazy,
  ImgGlass,
  Mask,
  // CodeRun,
}
```

## 组件规范

### emit 组件事件

```vue
<template>
  <div>
    <Icon type="icon-cuo" @click="btnClear" />
  </div>
</template>

<script>
export default {
  props: {
    /** 组件自定义命名 */
    named: {
      type: [String, Number],
      default: 'my',
    },
  },
  setup(props, { emit, attrs }) {
    /** 点击清除事件 */
    const btnClear = (event) => {
      // 组件回调事件
      emit('onEvent', {
        cmd: 'clear',
        named: props.named,
        data: '交互数据',
        event,
      })
    }

    return { btnClear }
  },
}
</script>
```

便于通用事件监听处理，建议按一下方式发送事件交互

| 事件名  | 说明                 | 值     |
| ------- | -------------------- | ------ |
| onEvent | 点击触发回调事件     | json   |
| cmd     | 指令类别             | string |
| named   | 组件命名             | string |
| data    | 交互数据             | string |
| event   | 触发组件，用于位置等 | string |

## 注意事项

- 如果出现以下错误，则执行`node ./node_modules/esbuild/install.js`安装一个 esbuild.exe

```js
events.js:292
      throw er; // Unhandled 'error' event
      ^

Error: spawn E:\SVN\vue\vite\work\branches\3.1.5\node_modules\esbuild\esbuild.exe ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:269:19)
    at onErrorNT (internal/child_process.js:465:16)
    at processTicksAndRejections (internal/process/task_queues.js:80:21)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
    at onErrorNT (internal/child_process.js:465:16)
    at processTicksAndRejections (internal/process/task_queues.js:80:21) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'spawn E:\\SVN\\vue\\vite\\work\\branches\\3.1.5\\node_modules\\esbuild\\esbuild.exe',
  path: 'E:\\SVN\\vue\\vite\\work\\branches\\3.1.5\\node_modules\\esbuild\\esbuild.exe',
  spawnargs: [ '--service=0.9.7', '--ping' ]
}
```
