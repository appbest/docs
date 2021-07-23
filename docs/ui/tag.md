# Tag 标签

## Tag 说明

进行简单的标记

## Tag innerHTML 示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <Tag
      v-for="(item, index) in the.tag.css"
      :key="index"
      :named="index"
      :css="item"
      closable
      @onEvent="onTagEvent"
    >
      {{ item }}
    </Tag>
  </div>
</template>

<script>
// import { reactive } from 'vue';

export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    const the = reactive({
      tag: {
        key: '',
        css: ['default', 'info', 'primary', 'success', 'error', 'warning'],
      },
    });

    /** 标签事件 */
    const onTagEvent = (resp) => {
      switch (resp.cmd) {
        case 'close':
          // 关闭
          the.tag.css.splice(parseInt(resp.named), 1);
          break;
        case 'click':
          $plus.message.info(resp.event.target.innerHTML + ':' + resp.named);
          // console.log('onTagEvent:', resp.named, resp.event.target.innerHTML);
          // $plus.router.push('/Api/ClassTree/' + resp.named + '?title=' + resp.event.target.innerHTML)
          break;
        default:
          console.log('onTagEvent:', resp);
          break;
      }
    };
    return { the, onTagEvent };
  },
};
</script>
```

</CodeRun>

## Tag Props

| 属性          | 说明                                                                        | 类型          | 默认值    |
| ------------- | --------------------------------------------------------------------------- | ------------- | --------- |
| named `0.4.2` | 组件命名,配合 v-for，并支持关闭事件                                         | String,Number | tag       |
| css           | 标签的颜色，可选`default`, `info`, `primary`, `success`, `error`, `warning` | String        | `default` |
| closable      | 是否可以关闭                                                                | Boolean       | `false`   |

## Tag Events

| 属性    | 说明     | 返回值 |
| ------- | -------- | ------ |
| onEvent | 点击事件 | Json   |

#### Events cmd `click`

- 点击触发

| 参数名 | 说明         | 类型          |
| ------ | ------------ | ------------- |
| named  | 组件命名     | String,Number |
| event  | 点击事件回调 | Object        |

#### Events cmd `close`

- 关闭触发

| 参数名 | 说明     | 类型          |
| ------ | -------- | ------------- |
| named  | 组件命名 | String,Number |
