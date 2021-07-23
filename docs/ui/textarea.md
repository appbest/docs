# Textarea 多行文本框

cols 和设置宽度，通过 rows 设置高度

## Textarea 多行文本框

<CodeRun auto editable>

```vue
<template>
  <Textarea
    v-model="the.text"
    placeholder="请输入多行文本框"
    spellcheck="false"
    cols="300"
    rows="20"
    @onEvent="onRespEvent"
  />
</template>

<script>
export default {
  setup() {
    const $plus = window.$plus;
    const { reactive } = $plus.vue;

    const the = reactive({
      text: '多行文本框\r 测试 \n',
    });

    const onRespEvent = (resp) => {
      console.log('tree', resp);
    };

    return {
      the,
      onRespEvent,
    };
  },
};
</script>
```

</CodeRun>
