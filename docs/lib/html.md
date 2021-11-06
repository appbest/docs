# quick.html

页面方法

## quick.html 使用

```js
// 方法名
export { tagDel, fontRem, getUrlPars, fullScreen, unpack, mini };

// 项目引入
import { html } from 'quick.lib';
```

## tagDel 清除 html 标签

|   名称   |  类型  | 默认值 | 说明            |
| :------: | :----: | :----: | :-------------- |
|   str    | string |        | html 代码       |
| isDelUbb |  bool  | false  | 是否清理 ubb 码 |

<CodeRun dll="html" editable>

```js
let _str = '<div>123</div>';
return html.tagDel(_str, true);
```

</CodeRun>

## `fontRem` 计算基础字体

根据屏幕大小动态调整显示,响应式缩放字体 rem

<CodeRun dll="html" editable>

```js
// 根据屏幕大小动态调整显示尺寸，基数20px
let opts = {
  /** 基础值 */
  size: 20,
  width: 750, //ui画布宽度2x
  base: 1, //基础放大倍数
  max: 1.2, //最大倍数
  min: 0.8, //最小倍数
};
// 页面基础字体 缩放
let size = html.fontRem(opts, function (val) {
  // 自定义回调方法
});
return [typeof size, JSON.stringify(size)];
```

</CodeRun>

## `window.onresize` 响应式缩放

窗口发生变化时，调整字体大小

```js
// 窗口发生变化时，调整字体大小
window.onresize = function () {
  // 页面基础字体 缩放
  let size = html.fontRem();
  console.log('onResize:' + version, size);
};
```

## `getUrlPars` 获取`url`请求参数

<CodeRun dll="html" editable>

```js
/**
 * 获取url请求参数
 * @param {*} name 参数名称
 * @param {*} url 指定地址 空默认location.href
 */

let _str = 'http://xxx.com?id=123&name=acdd';
return html.getUrlPars('id', _str);
```

</CodeRun>

## `fullScreen` 全屏显示

<CodeRun dll="html" editable>

```js
/**
 * html 全屏显示
 * @param {*} _fulls 是否全屏
 */
return html.fullScreen(true);
```

</CodeRun>

## `unpack` compile 组件模板解包

<CodeRun dll="html" ubb editable>

```js
/**
 * vue组件compile模板解包为Json
 * @param {*} text = 'vue.compile模板 html'
 * 返回
 * {
 * js:{body:'代码内容',attr:'属性'},
 * template:{body,attr},
 * version:'数字版本比较更新',
 * style:{body,attr,lang:'css/less'}
 * }
 */

let _tpl = `
<template ver="10">
<div class="page">test</div>
</template>
<script> 
export default {
  setup () {
     console.log('test')
  }
 }
</script>
<style lang="less">
.page{
  color: #frfrfr;
}
</style>
`;

return html.unpack(_tpl);
```

</CodeRun>

## `mini` html 与 JS 代码压缩

<CodeRun dll="html" ubb mini editable>

```js
/**
 * 压缩html 代码
 * @param {*} _html 代码内容
 * @param {*} ignoreCase 忽略压缩的步骤
 * {step:'保留注释',step_a:'保留<!--注释',step_c:'保留html标签间的多余空白',step_d:'保留每行代码前后空白'
 * ,step_e:'保留js代码处理;号',step_f:'保留换行'}
 */

let _tpl = `
<template ver="10">
<!-- 测试 -->
<div class="page">test</div>
</template>
<script> 
export default {
  setup () {
    // 测试
    console.log('test')
    /** 
     * 
     * 测试
     * */
  }
 }
</script>
<style lang="less">
.page{
  color: #frfrfr;
}
</style>
`;

let _opts = {
  // 保留注释不去除
  // step: true,
  // 保留<!--注释'
  step_a: true,
  // 保留换行
  // step_f: true,
};

let resp = html.mini(_tpl, _opts);
// console.log('mini', resp);
//alert('压缩完成\r\n' + resp);
return resp;
```

</CodeRun>
