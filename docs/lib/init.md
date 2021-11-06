# quick.init

## quick.init 原生函数扩展

```js
// 初始化原生函数扩展
quick.init();
```

## String 字符串扩展

<CodeRun dll="bll" editable>

```js
let _str = ' 77.88888 ';

let _jsonstr = `{id:123}`;

let _timestr = `2020-12-01`;

let resp = {
  // // 和使用原生方法一致
  trim: _str.trim(),
  json: _jsonstr.toJson(),
  money: _str.toFloat(),
  time: _timestr.toDate(),
};

//console.log('ubb', resp);
//alert('完成\r\n' + resp);
return resp;
```

</CodeRun>

### `trim` 清除前后空格

```js
/*
 * 清除空格
 */
String.prototype.trim(){};
```

### `toJson` 字符串转

```js
/*
 * 字符串转换为Json对象
 */
String.prototype.toJson() {};
```

### `toFloat` 字符串转金额

```js
/*
 *字符转金额,与money 对应使用
 */
String.prototype.toFloat = function () {
  return toFloat(this);
};
```

### `toDate` 字符串转时间

```js
/*
 *替代 new Date() 字符串转标准时间 兼容IOS
 */
String.prototype.toDate = function () {
  return toDate(this);
};
```

## Date 日期扩展

- [日期原生函数](../guide/h5/date.md)
- [bll.format 日期函数](./bll.md#format-日期时间格式化)

<CodeRun dll="bll" editable>

```js
let _time = new Date();

let resp = {
  // 年(y)、月(m)、日(d)、小时(h)、分(n)、秒(s)、周(w)、季度(q)
  day: _time.add('d', 1),
  // 年(y) 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、豪秒(S)、周(W)、周(w)、季度(q)
  format: _time.format('yyyy年MM月dd日 W q季度'),
  getMilliseconds: _time.format('yyyy-MM-dd HH:mm:ss.S'), //毫秒
};
return resp;
```

</CodeRun>

### `add`日期增加

```js
/**
  日期 增加数字 new Date().add("d",1)
  @param interval 年(y)、月(m)、日(d)、小时(h)、分(n)、秒(s)、周(w)、季度(q)
  @param number 增加的数量
 */
Date.prototype.add =
  Date.prototype.add ||
  function (strInterval, Number) {
    return date.add(strInterval, Number, this);
  };
```

### `format`日期转为字符串

```js
/**
 * 时间格式化为字符串
 * new Date().format("yyyy-MM-dd HH:mm:ss:S")
 * 年(y) 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、豪秒(S)、周(W)、周(w)、季度(q)
 */
Date.prototype.format =
  Date.prototype.format ||
  function (arg) {
    return format(arg, this);
  };
```

### `toJSON`日期转为字符串

```js
/*
 * 重写时间的toJSON方法
 * JSON.stringify时间转换调用toJSON
 */
Date.prototype.toJSON = function () {
  return this.format('yyyy-MM-dd hh:mm:ss'); //自定义的个时间格式化函数
};
```

## Number 数字扩展

<CodeRun dll="bll" editable>

```js
let _val = 1892.2378;

let resp = {
  // 四舍五入法
  toRound: _val.toRound(2),
  // 数字转金额
  toMoney: _val.toMoney(3),
  add: _val.add(-1892),
};
return resp;
```

</CodeRun>

### `toRound` 四舍五入

```js
/**
 * 四舍五入法
 * 解决 toFixed 遇到坑。
 * @param {*} num 保留位数
 */
Number.prototype.toRound =
  Number.prototype.toRound ||
  function (num) {
    return toRound(this, num);
  };
```

### `toMoney` 数字转金额

```js
/**
 * 数字转换为金额(小数位数,符号,千位标识,小数点标识)
 * @param {*} n 小数位数
 * @param {*} symbol 符号"￥"
 */
Number.prototype.toMoney =
  Number.prototype.toMoney ||
  function (n, symbol = '￥') {
    return toMoney(this, n, symbol);
  };
```

### 加减数字 `addFloat()`

```js
/**
 * 处理js浮点数计算精度不准确问题的解决办法
 *
 * @param {*} arg 加减 数字
 */
Number.prototype.add =
  Number.prototype.add ||
  function (arg) {
    return addFloat(this, arg);
  };
```
