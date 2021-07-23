# Css 样式

## css 替换 important

项目中，需要覆盖原来的 css 样式，可以使用`!important`

```less
.sidebar {
  // 原来定义值
  width: 20rem;
}

.sidebar {
  // 以新值替换
  width: 16rem !important;
}
```

## flex 兼容

flex 布局分为旧版本 dispaly: box;，过渡版本 dispaly: flex box;，以及现在的标准版本 display: flex;。
所以只是写新版本的语法形式，是肯定存在兼容性问题的。

- 支持版本

  - Android
    2.3 开始就支持旧版本 display:-webkit-box;
    4.4 开始支持标准版本 display: flex;
  - IOS
    6.1 开始支持旧版本 display:-webkit-box;
    7.1 开始支持标准版本 display: flex;
  - PC
    ie10 开始支持，但是 IE10 的是-ms 形式的。

- 盒子的兼容性写法

写法的顺序一定要按最新到最旧的顺序，否则不起作用

```less
// 部署兼容
.flex() {
  display: -webkit-flex; // 新版本语法: Chrome 21+
  display: flex; //  新版本语法: Opera 12.1, Firefox 22+
  display: -webkit-box; // 老版本语法: Safari, iOS, Android browser, older WebKit browsers.
  display: -moz-box; //  老版本语法: Firefox (buggy)
  display: -ms-flexbox; //  混合版本语法: IE 10
}

.box {
  .flex();
}
```

- 子元素的兼容性写法

```css
.flex1 {
    -webkit-flex: 1;        /* Chrome */
    -ms-flex: 1             /* IE 10 */
    flex: 1;                /* NEW, Spec - Opera 12.1, Firefox 20+ */
    -webkit-box-flex: 1     /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1;       /* OLD - Firefox 19- */
}
```
