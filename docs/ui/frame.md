# Frames 浮动窗口

用来展示信息，或者引导用户操作。

- [把手功能](./handle.md) 可拖到调整窗口大小，自适应。
- [Drag 拖拽窗体](./drag.md) 浮动窗体集合的基础组件

## Frames 拖拽弹窗

<CodeRun auto editable>

```vue
<template>
  <div class="test-win-page">
    <Input v-model="the.frameId" style="width:5rem" />
    <ButtonGroup>
      <Button type="info" @click="btnFramed('close')"> 关闭指定id窗口 </Button>
      <Button type="error" @click="btnFramed('clear')"> 关闭所有窗口 </Button>

      <Button type="primary" @click="btnWin"> 弹窗 </Button>
    </ButtonGroup>
    <Button type="primary" @click="btnWin('pull')"> 全屏弹窗 </Button>

    <Button @click="btnWin('model')"> 组件窗口 </Button>

    <Button @click="btnWin('render')"> 多彩函数窗口 </Button>

    <Button @click="btnWin('html')"> Html窗口 </Button>

    <Button @click="btnWin('size')"> Html窗口 指定大小 </Button>
  </div>
</template>

<script>
export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const { reactive, markRaw, h } = $plus.vue;

    const the = reactive({
      frameId: ''
    });

    // 窗口总数
    let framed_count = 0;

    const btnWin = (type) => {
      let _val = {};
      switch (type) {
        case 'model':
          //  console.log('model', List)
          _val = {
            title: '组件窗口',
            //body: '<h5>body</h5',
            model: {
              // 进行非全局组件需标记
              //  component: markRaw(TextPage),
              props: {
                modelValue: { d: 1 }
              },
              component: 'TextJson'
            },
            /** 监听窗口回调 */
            onEvent: (_resp) => {
              console.log('win.on', _resp);
            },
            onClose: (_resp) => {
              // console.log('win.model.close', _resp);
              // 自定义关闭方法
              _resp.close();
            }
          };

          break;

        case 'render':
          _val = {
            title: '函数组件窗口',
            css: 'test-win-skin',
            move: {
              width: 200,
              height: 300
            },
            show: {
              // 隐藏头部
              // head: false,
              close: false
            },
            model: {
              props: {
                title: '测试组件传参数'
              },

              // 函数组件
              component: (props, { emit }) => {
                /**
                 * named 组件原生命名进行回调触发，
                 * 由于是多窗口模式，需要表面来源的窗口命名
                 * 需要加入 byNamed:当前窗口命名，才能接收
                 *
                 * */
                let _resp = { cmd: 'init', named: 'render', data: props.title };
                // 来源窗口组件命名
                _resp.byNamed = win.named;

                const btn = () => {
                  emit('onEvent', _resp);
                };

                const btnClose = () => {
                  emit('onEvent', { cmd: 'close', byNamed: win.named });
                };

                const btnTop = () => {
                  emit('onEvent', { cmd: 'top', byNamed: win.named });
                };

                return h('div', [
                  h('Button', { onClick: btn }, `${props.title}`),
                  h('Button', { onClick: btnClose }, '调用窗口事件关闭'),
                  h('Button', { onClick: btnTop }, '调用窗口置定')
                ]);
                // return () => (
                //   <div>
                //     <span>Hello</span> jsx
                //   </div>
                // )
              }
            },
            /** 监听组件回调 */
            onEvent: (resp) => {
              console.log('win.render', resp);
            }
          };
          break;
        case 'html':
          _val = {
            body: '<h2>默认窗口尺寸</h2>',
            title: 'html窗口'
          };
          break;

        case 'size':
          _val = {
            title: '指定大小',
            body: '<h2>body</h2>',
            move: {
              width: 300,
              height: 300,
              left: framed_count * 10,
              top: framed_count * 10
            }
          };
          break;

        case 'pull':
          _val = {
            body: '<h2>body</h2>',
            title: '<b>html</b>全屏窗口',
            max: true,
            show: {
              /** 显示头部栏 */
              //  head: true,
              /** 显示工具栏按钮 */
              //  btn: true,
              /** max 按钮 */
              max: false
              /** 最小化按钮 */
              // min: false,
            },
            move: {
              width: 300,
              height: 200
            }
          };
          break;

        default:
          $plus.frame.open(
            `网页可见区域宽：document.body.clientWidth
网页可见区域高：document.body.clientHeight
网页可见区域宽：document.body.offsetWidth (包括边线的宽)
网页可见区域高：document.body.offsetHeight (包括边线的宽)
网页正文全文宽：document.body.scrollWidth
网页正文全文高：document.body.scrollHeight
网页被卷去的高：document.body.scrollTop
网页被卷去的左：document.body.scrollLeft
网页正文部分上：window.screenTop
网页正文部分左：window.screenLeft
屏幕分辨率的高：window.screen.height
屏幕分辨率的宽：window.screen.width
屏幕可用工作区高度：window.screen.availHeight
屏幕可用工作区宽度：window.screen.availWidth`,
            'JS获取浏览器窗口大小 获取屏幕，浏览器，网页高度宽度',
            {
              onClose: (opts) => {
                console.log(JSON.stringify(opts));
                // $plus.message.info('点击关闭')
                // 返回当前对话框对象
                confirm({
                  title: '全局订阅事件对话框',
                  body: '<p>是否关闭当前窗口？</p>',
                  // 按钮事件
                  onEvent: (val) => {
                    console.log('JSON.stringify(opts)', val);
                    switch (val.cmd) {
                      case 'ok':
                        // 关闭当前窗口
                        opts.close && opts.close();
                        //对话框确认
                        setTimeout(function () {
                          // $plus.confirm({ show: false })
                          // 异步强制关闭指定窗口，不触发onClose 事件
                          //$plus.frame.close(resp.data.named, true)

                          // 关闭对话框
                          val.close && val.close();
                        }, 2000);

                        break;
                      case 'close':
                      case 'cancel':
                        // 对话框取消
                        // 关闭对话框
                        val.close && val.close();
                        break;
                    }

                    message.info('点击：' + val.cmd);

                    // console.log('ModalEvent', val)
                  }
                });
              }
            }
          );
          break;
      }

      /** 创建一个窗口 */
      const win = $plus.frame.open(_val);

      // 窗体创建完成
      if (win && win.finish) {
        // 返回当前窗口id,用于更新管理
        the.frameId = win.named;
        framed_count = win.data.count;
        console.log(the.frameId);
      }
    };

    /**
     * 弹窗事件
     */
    const btnFramed = (cmd) => {
      let resp;
      switch (cmd) {
        case 'close':
          if (the.frameId) {
            console.log(the.frameId);
            resp = $plus.frame.close(the.frameId);
            console.log('btnFramed:' + cmd, JSON.stringify(resp));
          }
          break;

        case 'clear':
          resp = $plus.frame.clear();
          console.log(JSON.stringify(resp));
          break;
      }
    };

    return { the, btnWin, btnFramed };
  }
};
</script>
```

<style lang='less'>
.test-win-skin {
  background-color: rgba(255, 0, 0, 0.5);
}
</style>

</CodeRun>

## Frames win 全局弹窗

- App.vue 全局引入

```vue
<template>
  <teleport to="#endOfBody">
    <!-- Frames 全局浮动窗口组件 -->
    <Frames :mobile="framed" :specs="frameSpecs" />
  </teleport>
</template>

<script>
import { onMounted, ref } from 'vue';
import { html } from 'quick.lib';

export default {
  name: 'App',
  setup() {
    //const {ref} = window.$plus.vue;
    //  console.log('quick.lib', version)

    // 浮窗初始化 是否小屏幕尺寸，全屏打开
    const frameMobile = ref(false);
    // 浮窗基础参数配置
    const frameSpecs = ref({});

    const onResize = () => {
      // 页面基础字体 缩放
      let size = html.fontRem();

      if (size.offsetWidth < 1024) {
        // 小屏幕尺寸，默认全屏显示
        frameMobile.value = true;
        frameSpecs.value = {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
      }

      console.log('App.onResize:' + frameMobile.value, size);
    };

    onMounted(() => {
      // 执行基础字体缩放
      onResize();
      // 窗口发生变化时,响应式布局
      window.onresize = onResize;
    });

    return { frameMobile, frameSpecs };
  }
};
</script>
```

## 弹窗事件监听 byNamed

```js
import { frame } from 'qvui';

import { frame } from 'qvui';

const win = frame.open({
  model: {
    props: {
      title: '测试组件传参数'
    },
    // 函数组件
    component: (props, { emit }) => {
      /**
       * named 组件原生命名进行回调触发，
       * 由于是多窗口模式，需要表面来源的窗口命名
       * 需要加入 byNamed:当前窗口命名，才能接收
       *
       * */
      let _resp = { cmd: 'init', named: 'render', data: props.title };
      // 来源窗口组件命名
      _resp.byNamed = win.named;

      emit('onEvent', _resp);
    }
  },
  /** 监听组件回调 */
  onEvent: (resp) => {
    console.log('win.render', resp);
  },
  onClose: (opts) => {
    console.log(JSON.stringify(opts));
  }
});

frame.open({
  model: {
    props: {
      modelValue: { d: 1 }
    },
    /**
     TextPage 
     组件内部需要接收创建窗口的命名
    {
      props:{
        named
      },
      setup(props,{emit}){
        // byNamed 参数是传出当前窗口的命名
         emit('onEvent', {byNamed:props.named});
      }
    }
    */
    // 全局注册组件名
    component: 'TextPage'
    // 进行非全局组件需标记
    //  component: markRaw(TextPage),
  },
  /** 监听窗口回调 */
  onEvent: (resp) => {
    console.log('win.on', resp);
  },
  onClose: (opts) => {
    console.log(JSON.stringify(opts));
  }
});
```

## 浮窗参数 open

::: tip
项目引入时定义，外挂弹窗方法
:::

```js
import { frame } from 'qvui';

// 项目外挂方式打开
//const {frame} = window.$plus.ui

frame.open('标题', '内容', { onClose: (e) => {} });
```

- 传递参数

| 参数   | 说明                     | 类型   | 默认值 |
| ------ | ------------------------ | ------ | ------ |
| 第一个 | 浮窗标题                 | String | -      |
| 第二个 | 浮窗内容                 | String | -      |
| 第三个 | 浮窗参数，onClose(event) | json   | -      |

## 浮窗方法

- 传递对象

```js
const win=frame.open({title:''...});

// 关闭指定的窗口(窗口命名)
frame.close(win.named);

//清除所有弹窗方法
frame.clear();

```

## Frames 属性

| 参数            | 说明                           | 类型    | 默认值 |
| --------------- | ------------------------------ | ------- | ------ |
| named           | 组件订阅命名,默认值,为空不订阅 | String  | frames |
| mobile          | 手机端显示                     | Boolean | false  |
| max             | 以最大化显示窗口               | Boolean | false  |
| specs           | 初始窗体配置参数               | Object  | -      |
| dynamic `0.4.3` | 是否动态响应 specs 参数配置    | Boolean | false  |

specs

```js
// 浮窗传入配置参数
let specs = {
  width: document.body.clientWidth,
  height: document.body.clientHeight,
  top: 0,
  left: 0,
  space: fontSize() // 默认间距 config字体大小
};

// 传入specs参数,frames会按比例适配默认参数
if (!_max) {
  //不是全屏就按比例缩小窗口
  specs.top = parseInt(specs.height * 0.05);
  specs.left = parseInt(specs.width * 0.1);
  specs.width = parseInt(specs.width * 0.75);
  specs.height = parseInt(specs.height * 0.7);
}
```

## Frames 订阅事件

| 事件名  | 说明           |
| ------- | -------------- |
| open    | 创建新的浮窗   |
| close   | 关闭指定名浮窗 |
| clear   | 移除所有浮窗   |
| confirm | 创建对话框     |

## Frame.open 参数

| 参数                    | 说明                                         | 类型     | 默认值       |
| ----------------------- | -------------------------------------------- | -------- | ------------ |
| title                   | 标题                                         | String   | -            |
| body                    | 内容,html                                    | String   | -            |
| model                   | 组件对象                                     | Object   | -            |
| [move](./##Frame.model) | 自定义窗口位置 px：width:300,height,top,left | Object   | -            |
| [show](./##Frame.show)  | 自定义窗口组件显示                           | Object   | -            |
| css `0.4.2`             | 样式名                                       | String   | qv-drag-base |
| onEvent                 | 事件监听回调                                 | Funciton | -            |
| onClose                 | 自定义关闭事件拦截                           | Funciton | -            |

### Frame.open.model

| 参数      | 说明                           | 类型            | 默认值 |
| --------- | ------------------------------ | --------------- | ------ |
| props     | 模板参数                       | Object          | -      |
| component | 模板内容，可以传递组件或者方法 | Object,Funciton | -      |

### Frame.open.show

| 参数          | 说明                 | 类型 | 默认值 |
| ------------- | -------------------- | ---- | ------ |
| head          | 显示头部栏           | Bool | true   |
| btn           | 显示工具栏按钮       | Bool | true   |
| max           | 显示工具栏最大化按钮 | Bool | true   |
| min           | 显示工具栏最小化按钮 | Bool | true   |
| move          | 是否允许拖动         | Bool | true   |
| close `0.4.2` | 显示关闭按钮         | Bool | true   |
