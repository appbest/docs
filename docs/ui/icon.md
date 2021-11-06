# Icon 图标

## 说明

- [基于阿里图标 iconfont](https://www.iconfont.cn/)

- [本项目图标库](https://qve.gitee.io/docs/fonts/demo_index.html?v=0.5)

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div class="icon-group">
    <Icon type="icon-star" />
    <Icon type="icon-suo" />
  </div>
</template>

<style lang="less">
.icon-group i {
  margin: 0.25rem;
  font-size: 2em;
  color: red;
}
</style>
```

</CodeRun>

## API

### Icon props

| 属性  | 说明                                    | 类型             | 默认值 |
| ----- | --------------------------------------- | ---------------- | ------ |
| type  | 图标的名称与样式名称                    | String           | -      |
| size  | 图标的大小 数字值单位：px，可自定义 rem | Number or String | -      |
| color | 图标的颜色 同 css 的 color              | String           | -      |
