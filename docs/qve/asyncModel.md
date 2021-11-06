# asyncModel

## component 动态组件

## asyncModel 异步动态组件

<CodeRun auto>

```vue
<!-- 远程页面 -->
<template>
  <AsyncModel
    :url="the.url"
    :body="the.body"
    :cached="the.isCache"
    @onEvent="asyncEvent"
  />
</template>

<script>
export default {
  props: {
    // 远程服务器代码路径
    url: {
      type: String,
      // 指定默认的值
      default: null,
    },
  },
  setup(props, { emit }) {
    // 全局引用
    const { reactive } = window.$plus.vue;
    const _router = router.currentRoute.value;
    const the = reactive({
      url: props.url || _router.path,
      body: '',
      isCache: false,
    });

    return { the };
  },
};
</script>
```

</CodeRun>
