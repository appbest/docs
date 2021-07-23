# CodeRun 代码运行组件

实现 markdown 中测试编辑运行 js 代码或者 vue 组件

- [vscode 插件自动加分号](../guide/vscode.md#结尾加分号)

::: warning
特别注意 js 代码行结束需要加分号，建议使用 vscode 插件自动处理。
:::

## JS 运行可编辑代码

<CodeRun lang='js' auto editable>

```js
let resp = {
  test: 'testjs',
};

return resp;
```

</CodeRun>

## Vue 运行编辑组件

<CodeRun auto editable>

```vue
<template>
  <div class="code-index-page">
    <button @click="onTagEvent">点击加消息数</button> {{ the.tag.text }}
  </div>
</template>

<script>
// 在线调试不支持引入
//import { reactive } from 'vue';

export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const { reactive } = $plus.vue;
    // 组件变量
    const the = reactive({
      tag: {
        text: 9,
      },
    });

    /** 标签事件 */
    const onTagEvent = () => {
      console.log('onTagEvent:', the.tag.text);
      the.tag.text = the.tag.text + 1;
    };

    return { the, onTagEvent };
  },
};
</script>

<style lang="less">
.code-index-page {
  button {
    margin: 0.5rem;
  }
}
</style>
```

</CodeRun>

## CodeRun 属性

`<CodeRun dll="json" styled="height:20rem" ubb editable>`

| 属性     | 说明                           | 类型    | 默认值   |
| -------- | ------------------------------ | ------- | -------- |
| editable | 代码可编辑                     | Boolean | false    |
| auto     | 初始自动执行                   | Boolean | false    |
| mini     | 不执行压缩 unmini,默认需要压缩 | Boolean | false    |
| ubb      | 不执行解码 ubb,默认需要转换    | Boolean | false    |
| styled   | code 层样式定义                | String  |          |
| lang     | 运行的语言 `js` `vue`          | String  | vue      |
| pars     | 初始传入组件绑定的参数         | -       | 私有参数 |

组件内包含的代码需要加语言类别，目前只支持 `js` `vue`
