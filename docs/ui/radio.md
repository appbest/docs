# Radio 单选框

## 说明

基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

## 代码示例

- 单独使用

<CodeRun auto editable>

```vue
<template>
  <div>
    <Radio v-model="the.data" :value="1" @onEvent="onBtnRadio">是</Radio>

    <Radio v-model="the.data" :value="0" @onEvent="onBtnRadio" />
    否0
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    const the = reactive({
      data: {
        bool: false,
      },
    });

    const onBtnRadio = (res) => {
      console.log(res);
    };
    return { the, onBtnRadio };
  },
};
</script>
```

</CodeRun>

- 使用 RadioGroup 进行多个分组使用

<CodeRun auto editable>

```vue
<template>
  <div>
    <RadioGroup v-model="the.data" :list="the.radioGroupList" />
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    const the = reactive({
      data: 2,
      radioGroupList: {
        0: '初始',
        1: '正常',
        2: '已审',
        3: '撤审',
        4: '删除',
      },
    });

    return { the };
  },
};
</script>
```

</CodeRun>

## API

### Radio Props

| 属性          | 说明         | 类型    | 默认值 |
| ------------- | ------------ | ------- | ------ |
| named `0.4.8` | 组件命名     | String  | radio  |
| v-model       | 双向绑定数据 | String  | -      |
| value         | 参数值       | Boolean | -      |

### Radio events

| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| onEvent | 点击触发回调事件 | json   |

#### Events cmd `change`

- 选中触发

| 参数名  | 说明                  | 类型    |
| ------- | --------------------- | ------- |
| value   | props 的 value 参数值 | String  |
| checked | 是否选中              | Boolean |

### RadioGroup props

| 属性          | 说明               | 类型   | 默认值     |
| ------------- | ------------------ | ------ | ---------- |
| named `0.4.8` | 组件命名           | String | radioGroup |
| list          | 单选框的内容和状态 | Object | -          |
| v-model       | 双向绑定数据       | String | -          |
| onEvent       | 点击触发回调事件   | json   | -          |
