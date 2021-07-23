# Poptip 气泡提示

`0.3.9`

## Poptip 气泡提示

<CodeRun auto editable>

```vue
<template>
  <div class="poptip-page">
    <Button type="primary" @click="btnEvent">显示</Button>
    <Poptip v-if="isShow" float>
      <ul class="menu">
        <li>全局测试列表</li>
        <li>测试列表2</li>
      </ul>
    </Poptip>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 使用外挂方式引入
    const { ref } = window.$plus.vue;

    const isShow = ref(false);
    // const styled = ref('');

    const btnEvent = () => {
      isShow.value = !isShow.value;
    };

    return { isShow, btnEvent };
  },
};
</script>

<style lang="less">
.poptip-page {
  //菜单栏
  .qv-poptip {
    // 整体位置
    right: 0.05rem;
    &:before {
      // 顶部箭头的位置
      left: 80%;
    }
  }
}
</style>
```

</CodeRun>

## Poptip props

| 属性          | 说明                                        | 类型    | 默认值 |
| ------------- | ------------------------------------------- | ------- | ------ |
| float         | 是否浮动显示                                | Boolean | flase  |
| named `0.4.0` | 组件命名，可自定义区分事件                  | String  | mask   |
| arrow `0.5.3` | 组件样式名，默认带箭头，可自定义箭头 css 名 | String  | arrow  |

### Poptip events

| 事件名          | 说明                 | 返回值 |
| --------------- | -------------------- | ------ |
| onEvent `0.4.0` | 监听组件回调触发事件 | json   |

```json
{
  "cmd": "zIndex",
  "named": "组件命名",
  "zIndex": "纵向坐标值"
}
```

## Poptip class

| 属性         | 说明           | 默认值 |
| ------------ | -------------- | ------ |
| menu `0.5.3` | 按菜单列表显示 |        |
