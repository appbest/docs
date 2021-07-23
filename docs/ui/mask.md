# Mask

`0.3.9`

## Mask 遮罩组件

<CodeRun auto>

```vue
<template>
  <div>
    <Button @click="btnEvent">显示遮罩</Button>
    <div v-if="isShow" :style="styled">Heelo ! 我是Mask容器，点外层关闭</div>
    <Mask v-if="isShow" opacity="0.8" @onEvent="onMaskEvent" />
  </div>
</template>

<script>
export default {
  setup() {
    const { ref } = window.$plus.vue;

    const isShow = ref(false);

    const styled = ref('');

    const btnEvent = () => {
      isShow.value = true;
    };

    /** 遮罩层 触发事件 */
    const onMaskEvent = (resp) => {
      console.log('onMaskEvent', resp);
      // 取出遮罩坐标，计算容器的坐标
      switch (resp.cmd) {
        case 'zIndex':
          // 设置容器内的坐标
          styled.value =
            'position: absolute;background-color: #fff;padding:2rem; z-index:' +
            (resp.zIndex + 1);
          break;
        case 'click':
          // 遮罩点击事件，可关闭自己
          isShow.value = false;
          break;
      }
    };

    return { isShow, btnEvent, onMaskEvent, styled };
  },
};
</script>
```

</CodeRun>

## Mask props

| 属性    | 说明                       | 类型   | 默认值 |
| ------- | -------------------------- | ------ | ------ |
| named   | 组件命名，可自定义区分事件 | String | mask   |
| opacity | 透明度 0.5                 | String | null   |

### Mask events

| 事件名  | 说明                 | 返回值 |
| ------- | -------------------- | ------ |
| onEvent | 监听组件回调触发事件 | json   |

```json
{
  "cmd": "触发事件",
  "named": "组件命名",
  "zIndex": "纵向坐标",
  "event": "触发对象"
}
```
