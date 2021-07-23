# Modal 对话框

## 说明

展示信息或引导用户操作。

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <Modal
      title="注销提示"
      body="是否需要注销当前用户？"
      :show="the.modal.show"
      @onEvent="ModalEvent"
    >
      <h5>当前组件创建</h5>
    </Modal>

    <Button @click="the.modal.show = true"> 打开当前对话框 </Button>
    <Button @click="btnConfirm"> 打开订阅对话框 </Button>
  </div>
</template>

<script>
export default {
  setup(props, { refs }) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;
    const getCurrentInstance = $plus.getCurrentInstance;

    const the = reactive({
      modal: {
        show: false,
      },
    });

    /**
     * 对话框按钮触发事件
     */
    const ModalEvent = (val) => {
      console.log('ModalEvent', val);
      switch (val.cmd) {
        case 'ok':
          //对话框确认
          the.modal.show = !the.modal.show;
          $plus.message.info('点击确认');
          break;
        case 'close':
        case 'cancel':
          // 对话框取消
          the.modal.show = !the.modal.show;
          $plus.message.info('点击取消');
          break;
      }
    };

    // 订阅方式打开全局对话框
    const btnConfirm = () => {
      let _resp = {
        title: '全局订阅事件对话框',
        body: '<p>通过订阅事件调用全局对话框</p><p>Content of dialog</p>',
        // 按钮事件
        onEvent: (val) => {
          console.log('onEvent', val);
          switch (val.cmd) {
            case 'ok':
              //对话框确认
              setTimeout(function () {
                // 关闭对话框
                resp.data.show = false;
                val.close();
              }, 1000);

              break;
            case 'close':
            case 'cancel':
              // 对话框取消
              resp.data.show = false;
              break;
          }
          $plus.message.info('点击：' + val.cmd);
        },
        // 自定义按钮
        btns: [
          {
            cmd: 'cancel',
            text: '不卖了',
          },
          {
            cmd: 'ok',
            type: 'primary',
            /** 是否显示加载图标 */
            loading: true,
            text: '继续购买',
          },
        ],
      };

      switch (val) {
        case 'error':
          _resp.type = 'error';
          break;
        default:
          break;
      }

      // 返回当前对话框对象
      console.log('confirm', _resp);
      let resp = $plus.confirm(_resp);
      console.log('confirm.resp', resp);
    };

    return { the, ModalEvent, btnConfirm };
  },
};
</script>
```

</CodeRun>

## API

### Modal props

| 属性          | 说明                       | 类型           | 默认值 |
| ------------- | -------------------------- | -------------- | ------ |
| named `0.4.2` | 组件触发事件名称           | String         | modal  |
| title         | 对话框标题                 | String         | -      |
| body          | 对话框内容，可写 html 标签 | String         | -      |
| footerHide    | 隐藏底部按钮 `footer-hide` | Boolean        | false  |
| width         | 对话框宽度                 | Number, String | 25rem  |
| show          | 显示或隐藏                 | Boolean        | false  |
| closed        | 显示或隐藏关闭按钮         | Boolean        | false  |
| btns          | 自定义按钮                 | Array          | -      |

<!-- - props 参数默认值

```json
  /** 组件命名 */
    named: {
      type: [String, Number],
      default: 'modal'
    },
    /** 主题 */
    title: {
      type: String,
      default: null,
    },
    /** 内容 */
    body: {
      type: String,
      default: null,
    },
    /** 类别 */
    type: {
      validator (value) {
        return bll.array.test(value, ['info', 'error', 'success', 'warning']);
      },
      default: null
    },
    /** 是否显示 */
    show: {
      type: Boolean,
      default: true
    },
    /** 是否显示关闭按钮 */
    closed: {
      type: Boolean,
      default: true
    },
    /** 是否显示按钮栏 */
    footerHide: {
      type: Boolean,
      default: false
    },
    /** 按钮定义 */
    btns: {
      type: Array,
      default () {
        return [{
          cmd: 'cancel',
          text: '取消',
        }, {
          cmd: 'ok',
          text: '确认',
          type: 'primary',
          /** 是否显示加载图标 */
          loading: true,

        }];
      }
    }
``` -->

### Modal events

| 事件名  | 说明                 | 返回值 |
| ------- | -------------------- | ------ |
| onEvent | 按钮点击触发回调事件 | json   |

#### Events cmd `ok`

| 参数名 | 说明           | 类型     |
| ------ | -------------- | -------- |
| item   | 返回的整个对象 | Object   |
| event  | 点击事件       | Object   |
| close  | 关闭当前对象   | Function |

### Modal instance

::: tip
通过以下方法来使用
:::

```js
// 全局关闭当前对话框
$plus.confirm({ show: false });

const confirm = () => {
  // 返回当前对话框对象
  $plus.confirm({
    title: '全局订阅事件对话框',
    body: '<p>是否关闭当前窗口？</p>',
    // 按钮事件
    btnEvent: (val) => {
      switch (val.event) {
        case 'ok':
          //对话框确认
          setTimeout(function () {
            // 关闭当前对话框
            $plus.confirm({ show: false });
            // 异步强制关闭指定窗口，不触发onClose 事件
            $plus.frame.close(resp.data.id, true);
          }, 5000);
          break;
        case 'close':
        case 'cancel':
          // 对话框取消
          $plus.confirm({ show: false });
          break;
      }
      $plus.message.info('点击：' + val.event);
      console.log('ModalEvent', val);
    },
  });
};
```

### Modal slot

| 名称   | 说明               |
| ------ | ------------------ |
| footer | 可自定义按钮等组件 |
