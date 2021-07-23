# Card 卡片

`0.4.2` 基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。

## Card 示例

<CodeRun auto editable>

```vue
<template>
  <div class="card-page">
    <Card :styles="'padding: 0.1rem;'">
      <template #title>
        <p>
          <Icon type="icon-star" />
          今天报告
        </p>
      </template>
      <!--卡片右上角-->
      <template #extra>
        <Button size="small" shape="circle" icon="icon-suo" @click="btnEvent" />
      </template>

      内容
    </Card>
  </div>
</template>
<script>
export default {
  setup(props, context) {
    const btnEvent = (cmd) => {
      console.log(cmd);
    };

    return { btnEvent };
  },
};
</script>

<style lang="less">
.card-page {
  .qv-card {
    width: 18.5rem;
    margin-top: 0.25rem;
    margin-left: 0.25rem;
    display: inline-block;
  }
}
</style>
```

</CodeRun>

## Card props

| 属性      | 说明                               | 类型   | 默认值 |
| --------- | ---------------------------------- | ------ | ------ |
| bordered  | 是否显示边框，建议在灰色背景下使用 | bool   | true   |
| hoverShow | 禁用鼠标悬停显示阴影               | bool   | false  |
| shadow    | 卡片阴影                           | bool   | false  |
| styles    | 卡片内容样式                       | String | -      |

## Card slot

| 名称  | 说明                                      |
| ----- | ----------------------------------------- |
| title | 自定义卡片标题，`<p>`标签包裹文字类型标题 |
| extra | 额外显示的内容，在右上角                  |
|       | 卡片主体内容                              |
