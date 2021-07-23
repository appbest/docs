# UBB 组件

## Ubb 组件

用于 ubb 与 html 标准转换

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <TextUbb
      v-model="the.body"
      placeholder="请输入ubb"
      rows="15"
      @onEvent="onEvent"
    />
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const { reactive } = $plus.vue;

    const the = reactive({
      body: '&lt;b&gt;123&lt;/b&gt;',
    });

    const onEvent = (resp) => {
      console.log('json', resp);
    };

    return { the, onEvent };
  },
};
</script>
```

</CodeRun>

## TextUbb Props

| 属性           | 说明                     | 类型    | 默认值 |
| -------------- | ------------------------ | ------- | ------ |
| v-model        | 双向绑定数据             | String  | -      |
| disabled       | 是否只读                 | Boolean | false  |
| clearable      | 是否显示清空按钮         | Boolean | false  |
| format `0.4.2` | 初始内容是否格式化为 ubb | Boolean | false  |
| named `0.4.2`  | 组件触发事件名称         | String  | ubb    |

## TextUbb onEvent

- 点击转换时触发

| 参数名  | 说明                                        | 类型    |
| ------- | ------------------------------------------- | ------- |
| cmd     | format:格式化触发,error:错误触发,clear:清除 | Boolean |
| named   | 组件命名                                    | String  |
| data    | 转换之后的事件数据                          | String  |
| format  | 是否格式化显示为 string                     | Boolean |
| event   | 组件触发对象                                | Boolean |
| message | error 错误提示                              | String  |
