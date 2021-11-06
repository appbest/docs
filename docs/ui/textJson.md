# TextJson json 文本转换框

用于 Json 数据的标准转换

## TextJson 示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <TextJson
      v-model="the.body"
      placeholder="请输入json"
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
      body: { a: 1, b: 2, c: 'test' },
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

## TextJson Props

| 属性           | 说明                   | 类型    | 默认值 |
| -------------- | ---------------------- | ------- | ------ |
| v-model        | 双向绑定数据           | String  | -      |
| placeholder    | 占位字符               | String  | -      |
| rows           | 文本框的行数           | Number  | -      |
| format `0.4.2` | 初始内容是否格式化显示 | Boolean | false  |
| named `0.4.2`  | 组件命名               | String  | json   |

## TextJson onEvent

- 点击转换时触发

| 参数名        | 说明                                              | 类型    |
| ------------- | ------------------------------------------------- | ------- |
| cmd           | jsonUpdate:更新内容触发,error:错误触发,clear:清除 | Boolean |
| named `0.4.2` | 组件命名                                          | String  |
| type `0.4.2`  | 组件初始传入值类型,String,Object                  | String  |
| data          | 转换之后的事件数据                                | String  |
| format        | 是否格式化显示为 string                           | Boolean |
| event         | 组件触发对象                                      | Boolean |
| message       | error 错误提示                                    | String  |
