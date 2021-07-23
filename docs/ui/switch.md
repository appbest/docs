# Switch 开关

## Switch 开关

在两种状态间切换时用到的开关选择器。

## Switch 代码示例

<CodeRun auto editable>

```vue
<template>
  <Switch v-model="the.value" @onEvent="onSwitch" />
</template>

<script>
export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const { reactive } = $plus.vue;

    const the = reactive({
      value: true,
    });

    const onSwitch = (resp) => {
      console.log('onSwitch', resp);
      // $plus.message.info('收到事件', {
      //   text: JSON.stringify(resp),
      //   // pars: '点击传递的参数',
      //   // 不自动关闭
      //   timeout: 0,
      // });
    };

    return { the, onSwitch };
  },
};
</script>
```

</CodeRun>

## Switch props

| 属性             | 说明                   | 类型                    | 默认值   |
| ---------------- | ---------------------- | ----------------------- | -------- |
| named `0.4.3`    | 组件命名               | String                  | switch   |
| v-model          | 双向绑定数据           | String, Number, Boolean | -        |
| disabled `0.4.8` | 设置为禁用，会变成灰色 | string                  | disabled |

## Switch events

| 事件名      | 说明             | 返回值 |
| ----------- | ---------------- | ------ |
| onEvent     | 点击触发回调事件 | json   |
| cmd `0.4.3` | `switch`         |        |

#### Events cmd `switch`

| 参数名  | 说明     | 类型    |
| ------- | -------- | ------- |
| named   | 组件命名 | String  |
| checked | 是否开启 | Boolean |
| event   | 触发对象 | Object  |
