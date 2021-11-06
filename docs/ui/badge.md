# Badge 徽标数

`0.3.9`

## 说明

主要用于通知未读数的角标，提醒用户点击。

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <Badge dot>消息</Badge>
    <Badge dot="99">消息数</Badge>
  </div>
</template>
```

</CodeRun>

## Badge props

| 属性 | 说明                          | 类型                  | 默认值 |
| ---- | ----------------------------- | --------------------- | ------ |
| dot  | 显示小红点,或者自定义显示内容 | Boolean,String,Number | true   |
