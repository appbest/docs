# Paged 分页

## 说明

有大量数据时需要分页切换展示

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <Paged
    :count="the.paged.count"
    :current="the.paged.index"
    :page-size="the.paged.size"
    :page-size-opts="the.paged.sizes"
    :pre-length="2"
    :next-length="2"
    @onEvent="pagedEvent"
  />
</template>

<script>
export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const { reactive } = window.$plus.vue;

    const the = reactive({
      paged: {
        // 查询地址
        api: '',
        // 查询模板类型 1:接口属性,2:只查询数据，不返回属性,其它自定义
        tpl: 2,
        // 查询条件
        where: [],
        // 查询扩展参数
        par: null,
        // 扩展外键查询
        join: null,
        // 当前页码
        index: 1,
        // 每页取数据条数
        size: 5,
        // 分页数
        sizes: [5, 10, 30, 50, 100],
        /** 总条数 */
        count: 21,
        // 是否小型分页
        // small: true,
        // 最大页码按钮数
        // max: 4,
        // 页码按钮
        // layout: 'count, sizes, prev, pager, next, jumper',
      },
    });

    /** 分页触发事件 */
    const pagedEvent = (val) => {
      console.log('paged', JSON.stringify(val));
      switch (val.cmd) {
        case 'change':
          the.paged.index = val.index;
          break;
        case 'size':
          the.paged.size = val.data;
          break;
      }
    };

    return { the, pagedEvent };
  },
};
</script>
```

</CodeRun>

## API

### Paged props

| 属性               | 说明             | 类型    | 默认值              |
| ------------------ | ---------------- | ------- | ------------------- |
| named              | 组件命名         | String  | paged               |
| count              | 总条数           | Number  | 0                   |
| pageSize           | 每页条数         | Number  | 5                   |
| pageSizeOpts       | 多条页数         | Array   | [5, 10, 20, 30, 40] |
| current            | 当前页码         | Number  | 1                   |
| preText            | 前翻文字         | String  | -                   |
| preLength `0.4.1`  | 向前显示多少页   | Number  | 4                   |
| nextLength `0.4.1` | 向后显示多少页   | Number  | 4                   |
| nextText           | 后翻文字         | String  | -                   |
| disabled           | 禁止按钮事件触发 | Boolean | false               |
