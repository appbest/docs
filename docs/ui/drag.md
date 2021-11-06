# Drag 拖拽窗体

桌面可拖动窗体,带缩放功能

- [frame 多窗口](./frame.md) 建议跨组件使用

## Drag 拖拽窗体

<CodeRun editable>

```vue
<template>
  <div>
    测试
    <Drag
      title=" Drag 拖拽窗体"
      :show="show"
      :move="move"
      @onEvent="onDragEvent"
    >
      我可拖拽
    </Drag>
  </div>
</template>

<script>
export default {
  setup() {
    /** 弹窗按钮触发事件 */
    const onDragEvent = (resp) => {
      console.log('onDragEvent', resp);
      // 弹窗回调事件
    };

    // 窗口配置参数
    const move = {
      // 默认值
      width: 640,
      height: 480,
      top: 200,
      left: 400,
      // 多个窗体 间距
      space: 50,
      // space: fontSize(),
    };

    /** 显示控制 */
    const show = {
      /** 显示头部栏 */
      head: true,
      /** 显示工具栏按钮 */
      btn: true,
      /** max 按钮 */
      max: true,
      /** 最小化按钮 */
      min: true,
      /** 是否允许拖动 */
      move: true,
      /** 关闭按钮 */
      close: true,
    };

    return {
      onDragEvent,
      move,
      show,
    };
  },
};
</script>
```

</CodeRun>

## Tag Props

| 属性          | 说明                 | 类型          | 默认值       |
| ------------- | -------------------- | ------------- | ------------ |
| named `0.4.2` | 组件命名             | String,Number | drag         |
| title         | 头部描述             | String        |              |
| max           | 是否以最大化显示窗口 | Boolean       | false        |
| css           | 指定样式名           | String        | qv-drag-base |
| show          | 显示控制             | json          | {}           |
| move          | 指定移动位置参数     | json          | {}           |

- show

```json
{
  /** 显示头部栏 */
  "head": true,
  /** 显示工具栏按钮 */
  "btn": true,
  /** max 按钮 */
  "max": true,
  /** 最小化按钮 */
  "min": true,
  /** 是否允许拖动 */
  "move": true,
  /** 显示关闭按钮 */
  "close": true
}
```
