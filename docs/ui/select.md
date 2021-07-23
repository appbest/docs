# Select 选择器

## 说明

用于选择数据

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <Select v-model="the.type" @onEvent="onSizeEvent">
      <option v-for="(item, index) in the.typeList" :key="index" :value="index">
        {{ item }}
      </option>
    </Select>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    const the = reactive({
      type: 2,
      typeList: ['初始', '正常', '已审', '撤审', '删除'],
    });

    const onSizeEvent = (res) => {
      switch (res.cmd) {
        case 'change':
          break;
      }
    };

    return { the, onSizeEvent };
  },
};
</script>
```

</CodeRun>

## API

### Select props

| 属性    | 说明         | 类型   | 默认值 |
| ------- | ------------ | ------ | ------ |
| v-model | 双向绑定数据 | String | -      |

### Select events

| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| onEvent | 点击触发回调事件 | json   |

#### Events cmd `change`

| 参数名 | 说明           | 类型    |
| ------ | -------------- | ------- |
| value  | 选中值的索引   | Number  |
| event  | 选中事件的回调 | Boolean |

### Option props

| 属性  | 说明         | 类型             | 默认值 |
| ----- | ------------ | ---------------- | ------ |
| value | 选择值，必填 | String or Number | -      |
