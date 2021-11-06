# Message 消息提示

## 说明

信息反馈组件，在右上角显示，并自动消失。有多种不同的提示状态可选择。

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <Button type="dashed" @click="btnInfo('all')"> 按钮触发消息提示 </Button>
    <Button type="error" @click="btnInfo('error')"> 消息error </Button>
    <Button type="warning" @click="btnInfo('warning')"> 消息warning </Button>
    <Button type="success" @click="btnInfo('success')"> 消息success </Button>
    <Button type="info" @click="btnInfo('info')"> 消息info </Button>
    <Button type="text" @click="btnInfo('text')"> 内容消息text </Button>
    <Button type="primary" @click="btnInfo('clear')">
      <Badge dot> 清除所有消息 </Badge>
    </Button>

    <notice
      title="测试消息"
      :show="true"
      type="warning"
      style="top:2rem;right:2rem"
    >
      <div style="padding:0.4rem;padding-top:0">
        <Icon type="icon-star" /> 我是自动关闭的
      </div>
    </notice>
  </div>
</template>

<script>
export default {
  setup(props, { refs }) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;
    const getCurrentInstance = $plus.getCurrentInstance;
    const message = $plus.message;

    /** 消息框 */
    const btnInfo = (type) => {
      // const message =$plus.message;
      let resp;
      switch (type) {
        case 'clear':
          resp = message.clear();
          break;
        case 'error':
          resp = message.error('网络异常提示！', { pars: 'errorid121212' });
          break;
        case 'warning':
          resp = message.warning('网络警告提示！', {
            text: '网络警告内容',
            pars: { id: 5 },
          });
          break;
        case 'success':
          resp = message.success('成功提示！');
          break;
        case 'info':
          resp = message.info('info提示！', {
            text: '消息提示内容',
            pars: '点击传递的参数',
            // 不自动关闭
            timeout: 0,
          });
          break;
        case 'text':
          resp = message.text('消息提示', {
            text: '消息提示内容',
            pars: '点击传递的参数',
            // 不自动关闭
            timeout: 0,
          });
          break;
        default:
          resp = message.notice({
            title: '点击标题的参数',
            /** 传入点击标题的参数 */
            pars: 'ddd',
            text: `<p>网页可见区域宽：document.body.clientWidth</p>
网页可见区域高：<b>document.body.clientHeight</b>
网页可见区域宽：document.body.offsetWidth (包括边线的宽)
网页可见区域高：document.body.offsetHeight (包括边线的宽)
屏幕可用工作区宽度：window.screen.availWidth`,
            timeout: 80,
            type: 'success', //'info', 'error', 'success', 'warning', 'loading'
          });
      }
      console.log('message', resp);
    };

    return { btnInfo };
  },
};
</script>
```

</CodeRun>

## API

<!-- ### Message props

| 属性  | 说明                                                          | 类型    | 默认值 |
| ----- | ------------------------------------------------------------- | ------- | ------ |
| type  | 消息类型，可选值为 `error`,`warning`,`success`, `info`,`text` | String  | `info` |
| title | 消息标题                                                      | String  | -      |
| show  | 是否显示                                                      | Boolean | `true` | -->

### Message instance

::: tip 实例类别

- `Message.info(config);`

- `Message.error(config);`
- `Message.warning(config);`
- `Message.success(config);`
- `Message.text(config);`

:::

- config 参数说明

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| 第一个 | 提示标题 | String | -      |
| 第二个 | 配置参数 | Object | -      |

- 配置参数说明

| 参数名  | 说明                   | 类型   | 默认值 |
| ------- | ---------------------- | ------ | ------ |
| text    | 消息内容               | String | -      |
| pars    | 点击传递的参数         | String | -      |
| timeout | 消失时间,为`0`时不消失 | Number | -      |

::: tip
清除所有消息提示
:::

```js
Message.clear();
```
