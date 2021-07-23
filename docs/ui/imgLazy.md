# ImgLazy 图片懒加载

## 说明

滚动到图片所在位置再加载图片，能够加快页面渲染速度和节省带宽

### 代码示例

```vue
<template>
  <ImgLazy class="vail-code-img" :src="the.imgUrl" @onEvent="onImgEvent" />
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const the = reactive({
      imgUrl:
        'https://cn.bing.com/th?id=OHR.FatBearWeek_ZH-CN2381854464_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
    });

    /** 图片延迟加载触发事件 */
    const onImgEvent = (resp) => {
      console.log('onImgEvent', resp);
      switch (resp.cmd) {
        case 'onerror':
          consloe.log('加载超时');
          break;
      }
    };

    return { the, onImgEvent };
  },
};
</script>
```

## API

### ImagLazy props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| src  | 图片地址 | String | -      |

### ImagLazy events

| 事件名  | 说明                 | 返回值 |
| ------- | -------------------- | ------ |
| onEvent | 加载延迟触发回调事件 | json   |

#### Events cmd `init`

- 加载初始化

| 参数名 | 说明     | 类型   |
| ------ | -------- | ------ |
| src    | 加载地址 | String |

#### Events cmd `onload`

- 加载完成

| 参数名 | 说明     | 类型   |
| ------ | -------- | ------ |
| src    | 加载地址 | String |
| timer  | 时间     | Number |

#### Events cmd `onerror`

| 参数名 | 说明     | 类型   |
| ------ | -------- | ------ |
| src    | 加载地址 | String |
| timer  | 超时时间 | Number |
