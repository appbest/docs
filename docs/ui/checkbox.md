# Checkbox 多选框

基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <Checkbox value="all" @onEvent="onCheckEvent" /> 全选
  <Checkbox
    v-for="(item, index) in the.typeList"
    :named="'check_' + index"
    :key="index"
    v-model="the.typeCk"
    :value="index"
  >
    {{ item }};
  </Checkbox>
</template>

<script>
export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    const the = reactive({
      typeCk: [3],
      typeList: ['初始', '正常', '已审', '撤审', '删除'],
    });

    const onCheckEvent = (resp) => {
      console.log('onCheckEvent:', resp);

      //{ cmd: "check", named: "check_2", id: "check_2_WqrvhfyD", value: 2, checked: true }
      // { cmd: "check", named: "check_0", id: "check_0_UKEueUBf", value: 0, checked: false }
      //resp.value 是组件自定义绑定值，根据实际应用定义
    };

    return { the, onCheckEvent };
  },
};
</script>
```

</CodeRun>

## Checkbox props

| 属性          | 说明               | 类型    | 默认值 |
| ------------- | ------------------ | ------- | ------ |
| named `0.4.3` | 组件命名           | String  | check  |
| value         | 只在单独使用时有效 | Boolean | false  |
| v-model       | 双向绑定数据       | String  | -      |

## Checkbox events

| 事件名      | 说明             | 返回值 |
| ----------- | ---------------- | ------ |
| onEvent     | 点击触发回调事件 | json   |
| cmd `0.4.3` | `check`          | json   |

## Checkbox cmd `check`

| 参数名  | 说明           | 类型    |
| ------- | -------------- | ------- |
| named   | 组件名         | String  |
| id      | 控件的随机名称 | String  |
| value   | 绑定的值       | String  |
| checked | 是否选中       | Boolean |
