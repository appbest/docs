# Input 输入框

基本表单组件，用来输入信息。

## Input 输入示例

<CodeRun auto editable>

```vue
<template>
  <Form label-width="20%" label-mark="：">
    <Field label="文本">
      <Input v-model="the.code" placeholder="Enter LoginCode" autofocus />
    </Field>
    <Field label="密码">
      <Input
        v-model="the.password"
        type="password"
        placeholder="Enter password"
      />
    </Field>
    <Field label="数字">
      <Input v-model="the.GID" type="number" disabled="disabled" />
    </Field>
    <Field label="数字">
      <Input
        v-model="the.GID"
        named="GID"
        placeholder="请输入组织ID"
        type="number"
        icon="icon-sousuo"
        @onEvent="onInputEvent"
      />
    </Field>
    <Field label="文本">
      <Textarea
        v-model="the.text"
        placeholder="请输入多行文本框"
        spellcheck="false"
        rows="3"
        @onEvent="onRespEvent"
      />
    </Field>
  </Form>
</template>

<script>
export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const { reactive } = $plus.vue;

    const the = reactive({
      password: 'abc',
      code: '',
      GID: 123,
      text: '标题\r\n内容',
    });

    const onInputEvent = (resp) => {
      console.log(resp);
      switch (resp.cmd) {
        case 'clear':
          break;
        case 'password':
          break;
      }
    };

    return { the, onInputEvent };
  },
};
</script>
```

</CodeRun>

## Input props

| 属性          | 说明                                                                                       | 类型    | 默认值   |
| ------------- | ------------------------------------------------------------------------------------------ | ------- | -------- |
| named `0.4.2` | 组件命名                                                                                   | String  | input    |
| type          | 输入框类型 `text`, `textarea`,`password`, `url`, `email`, `date`, `number`,`tel`           | String  | text     |
| v-model       | 双向绑定数据                                                                               | String  | -        |
| clearable     | 是否显示清空按钮,触发事件名`clear`                                                         | Boolean | true     |
| icon          | 输入框扩展图标,触发事件名`InputPlus`                                                       | String  | -        |
| disabled      | 设置输入框为禁用，可复制，不能接收焦点,设置后文字的颜色会变成灰色                          | string  | disabled |
| readonly      | 设置输入框为只读,可复制使用 Tab 键切换到该字段,可选择,可以接收焦点，还可以选中或拷贝其文本 | string  | true     |

## Input events

| 事件名  | 说明                                                                  | 值     |
| ------- | --------------------------------------------------------------------- | ------ |
| onEvent | 点击触发回调事件                                                      |        |
| cmd     | 指令类别 `clear` 清除内容,`password` 显示密码,`InputPlus`扩展图标触发 | string |
| named   | 自定义组件命名                                                        | string |
| data    | 交互数据                                                              | string |
| event   | 触发组件对象$event，用于位置等                                        | string |

## Input slot 插槽

| 名称           | 说明           |
| -------------- | -------------- |
|                | 插入输入框头部 |
| append `0.4.8` | 输入框尾部     |
