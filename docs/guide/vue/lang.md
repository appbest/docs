# lang 国际化

安装类库

- [vue-i18n]()

## 国际化语言 vue-i18n

- lang.js 配置

```js
/** 国际化 */
const lang = {
  // 默认
  locale: 'zh',
  messages: {
    // 英文
    en: {
      home: {
        title: '主题',
        game: '游戏',
      },
    },
    // 中文
    zh: {
      home: {
        title: 'Title',
        game: 'Game',
      },
    },
  },
};

export { lang };
```

## vue 2.x 使用 lang

- 模板与 js 内使用

```vue
<template>
  <div>{{ lang.title }}</div>
</template>

<script>
export default {
  // 根节点
  setup(props, { root }) {
    /**
     * 取出语言
     * @returns
     */
    const langFun = () => {
      // 取出节点
      const _lang = root.$t('home');
      // if (!the.btn.isSms) {
      //   //非计数状态下
      //   the.btn.smsText = _lang.smsText;
      // }
      return _lang;
    };

    /** 动态计算语言*/
    const lang = computed(langFun);

    // 调用
    console.log('lang', langFun().title);

    return {
      lang,
    };
  },
};
</script>
```

## vue 2.x 多语言引入

- main.js

```js
/** 国际化 */
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

/** 国际化语言 */
import { lang } from './components/lang.js';
Vue.prototype._i18n = new VueI18n(lang);
```

## uni i18n

- [i18n](https://uniapp.dcloud.net.cn/collocation/i18n)
- [plus.os.language](http://www.html5plus.org/doc/zh_cn/device.html#plus.os.language)

所有 js 都运行在系统 Webview 环境中，可以直接使用 H5 标准 API 获取当前系统设置的语言：

```js
var lan = navigator.language || navigator.browserLanguage;
console.log(lan);
```
