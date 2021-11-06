# Tooltip 文字提示

## 说明

文字提示气泡框，鼠标悬停时显示

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div class="tooltip-page">
    <Tooltip content="时间选择"
      >鼠标过来试试 <Icon type="icon-gantan"
    /></Tooltip>
  </div>
</template>
<style lang="less">
.tooltip-page {
  margin-left: 5rem;
}

.qv-icon {
  margin: 0.25rem;
  font-size: 1rem;
  color: red;
}
</style>
```

</CodeRun>

## API

### Tooltip props

| 属性    | 说明     | 类型  | 默认值 |
| ------- | -------- | ----- | ------ |
| content | 提示内容 | Sting | -      |
