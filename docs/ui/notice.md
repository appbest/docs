# Notice 通知提醒

## 说明

在界面右上角显示可关闭的全局通知，常用于以下场景：

- 通知内容带有描述信息
- 系统主动推送

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <Notice
    title="测试消息"
    :show="true"
    type="warning"
    style="top:2rem;right:2rem"
  >
    <div style="padding:0.4rem;padding-top:0">
      <Icon type="icon-star" /> 我是自动关闭的
    </div>
  </Notice>
</template>
```

</CodeRun>

## API

### Notice props

| 属性     | 说明                                                   | 类型    | 默认值          |
| -------- | ------------------------------------------------------ | ------- | --------------- |
| title    | 通知提醒的标题                                         | String  | -               |
| show     | 通知提醒是否显示                                       | Boolean | `false`         |
| type     | 通知提醒的类型，可选`info`,`success`,`warning`,`error` | String  | `info`          |
| style    | 自定义样式                                             | String  | -               |
| closable | 是否可以关闭                                           | Boolean | `true`          |
| id       | 组件启用订阅名，为空不订阅                             | String  | `on-notice-bar` |
| timeout  | 关闭时间                                               | Number  | `30`            |

<!--
```json
{
  /** 主题 */
  "title": {
    "type": String,
    "default": ""
  },
  /** 内容 */
  "text": {
    "type": String,
    "default": ""
  },
  /** 类别 */
  "type": {
    // 验证输入值是否在此范围
    "validator"(value) {
      return bll.array.test(value, [
        "info",
        "error",
        "success",
        "warning",
        "loading"
      ]);
    },
    "default": null
  },
  /** 是否显示 */
  "show": {
    "type": Boolean,
    "default": true
  },
  /** 动画名 */
  "name": {
    "type": String,
    "default": null
  },
  /** 自定义样式 */
  "styles": {
    "type": String,
    "default": ""
  },
  /** 是否可关闭 */
  "closable": {
    "type": Boolean,
    "default": true
  },
  /** 组件启用订阅名，为空不订阅 */
  "id": {
    "type": String,
    "default": "on-notice-bar"
  },
  /** 超时关闭 */
  "timeout": {
    "type": Number,
    "default": uiKeys.message.timeOut || 30
  }
}
``` -->
