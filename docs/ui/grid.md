# Grid 栅格布局

## 说明

采用了 24 栅格系统，将区域进行 24 等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。

定义了 `col` 行和 `row` 列

- 使用 `row` 在水平方向创建一行
- 将一组 `col` 插入在 `row` 中
- 在每个 `col` 中，键入自己的内容
- 通过设置 `col` 的 `span` 参数，指定跨越的范围，其范围是 1 到 24
- 每个 `row`中的 `col` 总和应该为 24

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div class="grid-group">
    <Row>
      <Col span="4" style="background-color:aqua;">col-4</Col>
      <Col span="12" style="background-color:red;">col-12</Col>
      <Col span="8" style="background-color:aqua;">col-8</Col>
    </Row>
    <Row>
      <Col span="12" style="background-color:red;">col</Col>
      <Col span="12" style="background-color:aqua;">col</Col>
    </Row>
    <Row>
      <Col span="8" style="background-color:aqua;">col</Col>
      <Col span="4" style="background-color:red;">col</Col>
      <Col span="8" style="background-color:aqua;">col</Col>
      <Col span="4" style="background-color:red;">col</Col>
    </Row>
  </div>
</template>

<style>
.grid-group {
}
</style>
```

</CodeRun>

## API

### Col props

| 属性 | 说明                                                                | 类型   | 默认值 |
| ---- | ------------------------------------------------------------------- | ------ | ------ |
| span | 栅格的占位格数，可选值为 0~24 的整数，为 0 时，相当于`display:none` | String | -      |
