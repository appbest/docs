# Input 输入框

基本表单组件，用来输入，兼容 vue 2.x 与 vue 3.x

- [v-model 文档](https://www.vue3js.cn/docs/zh/guide/migration/v-model.html#%E4%BB%8B%E7%BB%8D)

## 兼容性处理

- 重点将 vue2.x 默认参数名 value,更新为 vue 3.x 的参数名 modelValue

```vue
<!-- 组件 -->
<template>
  <div class="qv-input">
    <input :value="modelValue" @input="onInput" class="qv-input-value" />
  </div>
</template>
<script>
export default {
  model: {
    // 重点将 vue2.x 默认参数名 value,更新为 vue 3.x 的参数名modelValue
    prop: 'modelValue',
    event: 'input',
  },
  setup() {
    /**
     * 输入触发
     * @param {*} event 对象
     */
    const onInput = (event) => {
      // console.log('onInput', event.target.value);
      // 更新 vue2.x
      emit('input', event.target.value);
      // 同步更新 vue 3.x
      emit('update:modelValue', event.target.value);
    };

    return { onInput };
  },
};
</script>
```
