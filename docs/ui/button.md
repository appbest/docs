# Button 按钮

`0.3.9`

## 说明

基础组件，触发业务逻辑时使用。

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div class="button-page">
    <Button @click="btnEvent">Default</Button>
    <Button type="primary" @click="btnEvent">Default</Button>

    <Button type="dashed" @click="btnEvent">Dashed</Button>
    <Button type="text" @click="btnEvent">Text</Button>
    <br /><br />
    <Button type="info" @click="btnEvent">Info</Button>
    <Button type="success" @click="btnEvent">Success</Button>
    <Button type="warning" @click="btnEvent">Warning</Button>
    <Button type="error" @click="btnEvent">Error</Button>

    圆形小尺寸按钮
    <Button size="small" shape="circle" icon="icon-jiantou" @click="btnEvent" />

    <Button loading long icon="icon-sousuo" @click="btnEvent"> Primary </Button>
  </div>
</template>

<script>
export default {
  setup() {
    // const { message } = window.$plus;
    const message = window.$plus.message;

    const btnEvent = () => {
      console.log('btnEvent');
      message.info('点击了');
    };

    return { btnEvent };
  },
};
</script>

<style lang="less">
.button-page .qv-btn {
  margin: 0.25rem;
}
</style>
```

</CodeRun>

## API

### Button props

| 属性     | 说明                                                                                                        | 类型    | 默认值  |
| -------- | ----------------------------------------------------------------------------------------------------------- | ------- | ------- |
| type     | 按钮类型，可选值为 `default`、`primary`、`dashed`、`text`、`info`、`success`、`warning`、`error` 或者不设置 | String  | default |
| size     | 按钮尺寸，`small`, `large`, `default`                                                                       | String  | default |
| shape    | 圆形按钮，`circle`, `circle-outline`                                                                        | String  | null    |
| icon     | 按钮图标                                                                                                    | String  |         |
| loading  | 是否显示加载                                                                                                | Boolean | false   |
| disabled | 是否禁用                                                                                                    | Boolean | false   |
| long     | 是否按钮的长度为 100%                                                                                       | Boolean | false   |

### Button events

| 事件名 | 说明             | 返回值 |
| ------ | ---------------- | ------ |
| click  | 点击触发回调事件 |        |
