# 常用

js 常用原生函数

## w3school

- [w3school](https://www.w3school.com.cn/)

在 W3School，你可以找到你所需要的所有的网站建设教程。
从基础的 HTML 到 CSS，乃至进阶的 XML、SQL、JS、PHP 和 ASP.NET。

## 页面屏幕尺寸

网页可见区域宽：document.body.clientWidth
网页可见区域高：document.body.clientHeight
网页可见区域宽：document.body.offsetWidth (包括边线的宽)
网页可见区域高：document.body.offsetHeight (包括边线的宽)
网页正文全文宽：document.body.scrollWidth
网页正文全文高：document.body.scrollHeight
网页被卷去的高：document.body.scrollTop
网页被卷去的左：document.body.scrollLeft
网页正文部分上：window.screenTop
网页正文部分左：window.screenLeft
屏幕分辨率的高：window.screen.height
屏幕分辨率的宽：window.screen.width
屏幕可用工作区高度：window.screen.availHeight
屏幕可用工作区宽度：window.screen.availWidth

## JS 常用原生函数

### Array 数组

| 数组方法        | 说明                               |
| --------------- | ---------------------------------- |
| toString()      | 将数组转换成字符串                 |
| toLocalString() | 将数组转换成本地约定的字符串       |
| join()          | 将数组元素连接起来以构建一个字符串 |

<CodeRun editable>

```js
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; //定义数组
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; //定义数组

//定义多维数组
let c = [
  [1, [2, 3], [4, 5]],
  [6, [7, [8, 9], 0]],
];

let res = {
  // s: a.toString(), //把数组转换为字符串,返回字符串“1,2,3,4,5,6,7,8,9,0”
  s: a + '', //转字符串
  //  cs: c.toString(), //把数组转换为字符串
  //  la: a.toLocalString(), //主要区别在于能够使用用户所在地区特定的分隔符
  str: a + ',' + b, //数组连接操作
  lj: a.join('=='), //指定分隔符,返回字符串“1==2==3==4==5”
  indexOf: a.indexOf(3),
};

res.type = typeof res.s; //返回类型
res.arr = res.s.split(','); //按指定符号分割，返回数组

return res;
```

</CodeRun>

## async await 异步并行

<CodeRun editable>

```js
const sum = async (int) => {
  return int++;
};

return {
  one: sum(55),
  two: sum(60),
};
```

</CodeRun>
