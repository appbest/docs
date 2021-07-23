# ImgGlass 图片背景

## 说明

用于背景图片的展示

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div class="page-bg">
    <ImgGlass
      :src="the.imgGlassUrl"
      :filter="the.imgGlassFilter"
      @click="onImgGlass"
    />
  </div>
</template>

<script>
export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;
    const onMounted = $plus.vue.onMounted;

    const imgGlassList = [
      [
        'https://cn.bing.com/th?id=OHR.FatBearWeek_ZH-CN2381854464_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        'filter:blur(0);',
      ],
      [
        'https://cn.bing.com/th?id=OHR.LaragangaMoth_ZH-CN2013788793_1024x768.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        'filter:blur(0) brightness(90%);',
      ],
      [
        'https://cn.bing.com/th?id=OHR.FraserRiver_ZH-CN1625992097_1024x768.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        '',
      ],
      [
        'https://cn.bing.com/th?id=OHR.GreatBlueShark_ZH-CN1757082635_1024x768.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        'filter:blur(0);',
      ],
    ];

    const the = reactive({
      /** 图片地址 */
      imgGlassUrl: '',
      /** 图片效果 */
      imgGlassFilter: null,
    });

    /** 毛玻璃效果触发更新 */
    const onImgGlass = () => {
      // _imgArr.length  - 期望的最大值
      let _int = parseInt(Math.random() * imgGlassList.length, 10);

      console.log('onImgGlass', _int);

      the.imgGlassUrl = imgGlassList[_int][0];
      the.imgGlassFilter = imgGlassList[_int][1];
    };

    onMounted(() => {
      onImgGlass();
    });

    return { the, onImgGlass };
  },
};
</script>
```

</CodeRun>

## API

### ImgGlass props

| 属性   | 说明                    | 类型            | 默认值            |
| ------ | ----------------------- | --------------- | ----------------- |
| src    | 图片地址                | String or Array | -                 |
| filter | 图片`filter:blur()`属性 | String          | `filter:blur(0);` |

### ImgGlass Events

| 事件名 | 说明             | 返回值 |
| ------ | ---------------- | ------ |
| click  | 点击触发回调事件 | json   |
