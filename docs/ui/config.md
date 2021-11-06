# config 组件配置

## ui.config 组件配置

- 0.4.1
  - `fontSize`

## config 动态响应

```vue
<template>
  <!-- Frames 全局浮动窗口组件 -->
  <Frames :mobile="frameMobile" :specs="frameSpecs" />
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
  name: 'App',
  setup() {
    //const $plus = window.$plus;
    // const {ref} = window.$plus.vue;

    // 浮窗初始化 是否小屏幕尺寸，全屏打开
    const frameMobile = ref(false);
    // 浮窗基础参数配置
    const frameSpecs = ref({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    });

    const onResize = () => {
      // 页面基础字体 缩放
      const rem = html.fontRem();

      // 初始化 基础字体大小
      fontSize(rem.fontSize);

      // 小屏幕尺寸，全屏打开
      frameMobile.value = rem.offsetWidth < 1024 ? true : false;

      // 窗体宽度
      frameSpecs.value = {
        width: rem.offsetWidth,
        height: document.body.clientHeight,
      };

      // console.log(
      //   'App.frameSpecs:' + frameMobile.value,
      //   JSON.stringify(frameSpecs.value)
      // );
      // console.log('App.onResize:' + frameMobile.value, rem);
    };

    onMounted(() => {
      // 执行基础字体缩放
      onResize();
      // 窗口发生变化时
      window.onresize = onResize;
    });

    return { frameMobile, frameSpecs };
  },
};
</script>
```

## 配置全局坐标 z-index

> 全局统一动态计算 z-index 值

```js
/**
 * 组件库配置
 */
const config = {
  /** 日志配置 */
  log: {
    /** 是否打印输出 */
    isPrint: false,
  },
  /** 组件配置 */
  ui: {
    /** 字体默认大小 */
    fontSize: 20,
    /** 全局组件深度 */
    zIndex: 9,
    // 是否手机端
    isMobile: true,
    /** 消息组件 */
    message: {
      /**全局默认自动关闭时间 15分之一秒 */
      timeOut: 20,
    },
    /** 拖拽窗体 */
    drag: {
      min: {
        // 最小默认宽度
        width: 300,
        // 默认高度
        height: 32,
      },
    },
  },
};

/**
 * 更新全局配置
 * @param {object} opts 需要更新的json参数最多3层
 */
config.bind = (opts) => {
  //  console.log(opts, 'bindConfig');
  if (opts) {
    // 自定义全局配置
    for (let p in opts) {
      // console.log(p, 'bindConfig');
      // 查找第一层变量,是否是对象
      if (json.test(config[p])) {
        // 查找第二层变量,是否有变量
        for (let p2 in opts[p]) {
          //  console.log(p2, 'bindConfig');
          if (json.test(config[p][p2])) {
            // 查找第三层变量,是否有变量
            for (let p3 in opts[p][p2]) {
              //   console.log(p3, 'bindConfig');
              config[p][p2][p3] = opts[p][p2][p3];
            }
          } else {
            // 替换第二层变量
            config[p][p2] = opts[p][p2];
          }
        }
      } else {
        // 添加新变量
        config[p] = opts[p];
      }
    }
  }

  // 初始化判断是否为小屏幕设备
  //config.ui.isMobile = document.body.clientWidth < 1024;
  // console.log('config.bind', opts);
};

/**
 * 全局浮动层深度叠加
 * @param {number} _value 默认是+1
 * @returns  ui.zIndex,最高999
 */
const zIndexAdd = (_value) => {
  _value = _value || 1;
  config.ui.zIndex = config.ui.zIndex + _value;
  if (config.ui.zIndex > 9999) {
    config.ui.zIndex = 9;
  }
  return config.ui.zIndex;
};

/**
 * 查询配置是否小屏幕设备
 * @param {Boolean} _value 设置是否小屏幕
 * @returns
 */
const isMobile = (_value) => {
  if (_value != null) {
    config.ui.isMobile = _value;
  }
  return config.ui.isMobile;
};

/**
 * 更新基础字体大小
 * @param {Number} _value 设置字体大小
 * @returns
 */
const fontSize = (_value) => {
  if (_value != null) {
    config.ui.fontSize = _value;

    config.ui.drag.min = {
      // 最小默认宽度
      width: _value * 15,
      // 默认高度
      height: _value * 1.6,
    };
  }
  return config.ui.fontSize;
};

export { config, zIndexAdd, isMobile, fontSize };
```
