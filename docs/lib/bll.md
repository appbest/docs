# quick.bll

bll 常用方法

## quick.bll 使用

```js
{
  date,
  array,
  getAge,
  getType,
  getYearWeek,
  getMonthWeek,
  isNull,
  isArray,
  isInt,
  isPhone,
  isBool,
  isStorage,
  isWeb,
  isWeChat,
  toReg,
  toHide,
  toMac,
  toDate,
  toFloat,
  toDecimal,
  toMoney,
  toRound,
  addFloat,
  mul,
  trim,
  parse,
  format,
  random,
  randomCode,
  run,
  fun,
  funCode,
  zeroFill,
};

// 项目引入
import { bll } from 'quick.lib';
```

## Date 日期时间

<CodeRun dll="bll" editable>

```js
let obj = {
  gap: bll.date.gap('2020-10-05', '2020-10-1'),
  diff: bll.date.diff('2020-10-05'),
  sec: bll.date.sec(337200),
  sec_tag: bll.date.sec(337200, [
    '<i>天</i>',
    '<i>小时</i>',
    '<i>分</i><em>',
    '秒</em>',
  ]), // 0.3.8 版本支持tag标签
  add: bll.date.add('d', 1, new Date()),
  range: bll.date.range('2020-01-01', '2025-01-01'),
};

//返回 输出国际标准时间（ISO），减少了8个小时 兼容safari
obj.toDate = bll.toDate('2000-01-01 1:2:7');

return obj;
```

</CodeRun>

### `gap` 时间差计算

```js
/**
  * 时差计算表示
  * @param {String} start 开始时间，默认当前
  * @param {String} end 结束时间，默认当前
  * 返回 {
        sec: 0, 时间差秒
        tip: '', 提示剩余/过期
        text: ''，时间内容
      }
  */
bll.date.gap(start, end);
```

### `diff` 时间间隔显示

```js
  /**
   * 时间差显示
   * @param {*} dateTime 时间字符串
   * 返回 gap(start) 刚刚 多少天或者小时或分钟
   */
  bll.date.diff(dateTime) {},
```

### `sec` 时间秒转倒计时

- `0.3.8` 新增 tag

```js
/**
 * 时间秒数转为 秒/分/时/天
 * @param {number} timer 需转换的时间秒数
 * @param {array} tag 默认显示的标签['天', '小时', '分', '秒']
 * @returns 返回文本 天，小时，分钟，秒
 */
bll.date.sec(date);
```

### `add` 日期增加

```js
 /**
  日期 增加数字 new Date().add("d",1)
  @param interval 年(y)、月(m)、日(d)、小时(h)、分(n)、秒(s)、周(w)、季度(q)
  @param number 增加的数量
  @param dtTmp 初始日期时间
  */
  bll.date.add(strInterval, Number, dtTmp) {},
```

### `range` 日期间隔

```js
  /**
   * 日期间隔
   * @param {*} start 开始日期
   * @param {Date} end 结束日期
   * @param {*} _year 年后缀
   * @param {*} _mn 月后缀
   * @param {*} _day 天后缀
   */
  bll.date.range(start, end, _year = '年', _mn = '个月', _day = '天') {},
```

### `expire` 时间戳到期转换

```js
/**
 * 时间戳到期转换
 * @param {*} ns 时间戳
 * @param {*} i 取出的显示层级(1-5)
 * 返回 年/月/日/时/分
 */
bll.date.expire(ns, i);
```

### `timeLocal` 时间戳转时间

<CodeRun dll="bll" editable>

```js
/**
 * 时间戳转换为时间
 * @param {*} ns 时间戳
 */

return {
  // 取出当前时间戳
  timestamp: bll.date.timeLocal(new Date().getTime()),
  // 时间戳到期转换
  expire: bll.date.expire(300037200, 5),
};
```

</CodeRun>

## Array 方法

<CodeRun dll="bll"  editable>

```js
let arr = ['a', 'b', 'c', 'd'];
return {
  // 判断参数是否是数组其中之一
  test: bll.array.test('c', arr),
  // 查找
  find: bll.array.find(arr, 'c'),
  // 删除
  del: bll.array.del(arr, 'c'),
};
```

</CodeRun>

### `del` 删除数组

```js
  /**
   * 删除数组 splice
   * @param {*} arr 源数组
   * @param {*} value 删除的内容
   * @param {*} length 删除内容位置后的数量
   */
   bll.array.del(arr, value, length = 1) {
```

### `find` 查内容所在的序号

```js
  /**
   * 查找内容所在的序号位置,没有为 -1
   * @param {*} arr 数组[]
   * @param {*} value 内容
   * @param {boolean} last 默认从前查询
   * indexOf() 从数组的开头（位置0）开始向后查找。
   * lastIndexOf() 从数组的末尾开始向前查找。
   */
  bll.array.find(arr, value, last = false) {}
```

### `test` 判断内容是否在数组中

```js
/**
 * 判断参数是否是数组其中之一 oneOf
 * @param {*} value 参数
 * @param {*} arr 数组
 */
bll.array.test(value, arr);
```

## `getType` 判断值类型

判断值类型，返回对象类型小写,比 typeof 更明确

<CodeRun dll="bll"  editable>

```js
/**
 * 判断值类型
 * @param {*} val 初始值
 * 返回对象类型
 */
//bll.getType(val);

return {
  date: bll.getType(new Date()),
  _date: typeof new Date(),
  string: bll.getType('2020-10-05'),
  _string: typeof '2020-10-05',
  num: bll.getType(337200),
  _num: typeof 337200,
  json: bll.getType({ d: 1 }),
  _json: typeof { d: 1 },
  jsonArr: bll.getType([{ d: 1 }]),
  _jsonArr: typeof [{ d: 1 }],
  array: bll.getType(['a', 'b']),
  _array: typeof ['a', 'b'],
};
```

</CodeRun>

## `getAge` 按生日计算年龄

<CodeRun dll="bll"  editable>

```js
/**
 * 按生日计算年龄
 * @param {*} start 生日
 * @param {*} _year 年后缀
 * @param {*} _mn 月后缀
 * @param {*} _day 天后缀
 */
// bll.getAge(start, (_year = '岁'), (_mn = '个月'), (_day = '天'));
return bll.getAge('2000-01-01');
```

</CodeRun>

## `isNull` 检查对象或内容是否为空

```js
/**
 * 检查对象是否为空或者内容是空
 * @param {*} data 任意对象，包括json
 */
bll.isNull(data){};
```

<CodeRun dll="bll"  editable>

```js
let val = { d: 1 };
let arr = ['a', 'b', 'c'];

return {
  isNull: bll.isNull(val),
  isArray: bll.isArray(arr),
  isInt: bll.isInt('345'),
  isPhone: bll.isPhone('18912345678'),
  isBool: bll.isBool('trueaaa'),
  isStorage: bll.isStorage(),
  trim: bll.trim(` str,dsfs  fffs `),
};
```

</CodeRun>

## `isInt` 判断是否为数字

```js
/**
 * 判断是否为数字
 * @param {*} str 文本内容
 */
bll.isInt (str){};
```

## `isPhone` 判断是否为手机号

```js
/**
 * 校验手机号码：以1开头，长度为11位即可
 * @param {*} str 手机号码
 * @param {*} regex 手机号码验证规则 /^1[3456789][0-9]{9}$/
 */
bll.isPhone(str, regex = /^1[3456789][0-9]{9}$/) {};
```

## `isBool` 判断是否为真

```js
/**
 * 判断字符串是否布尔值
 * @param {*} str 字符串
 */
bll.isBool(str) {};
```

## `isStorage` 判断支持 h5 存储

```js
/**
 * 测试是否支持 h5存储
 */
bll.isStorage() {};
```

## `isWeb` 判断是浏览器或小程序

```js
/**
 * 是否是h5浏览器或者mp小程序,可用window对象
 */
bll.isWeb() {};
```

## `isWeChat` 判断是否微信浏览器

```js
/**
 * 判断是否微信端浏览
 * @param {*} ua window.navigator.userAgent.toLowerCase()
 */
bll.isWeChat(ua) {};
```

## `toReg` 替换正则格式化

<CodeRun dll="bll"  editable>

```js
/**
 * replace 替换正则格式化
 * 201910061220 转为 2019-10-06 12:20
 * @param {*} str 数字内容
 * @param {*} reg 正则格式
 * @param {*} code 输出格式描述
 */
//bll.toReg(str,reg = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/,code = '$1-$2-$3 $4:$5');

return {
  toReg: bll.toReg('201910061220'),
  toHide: bll.toHide('18922222222'),
  toMac: bll.toMac('ffddeerrttee'),
};
```

</CodeRun>

## `toHide` 隐藏显示内容

```js
/**
 * 转换显示格式 内容部分隐藏为*
 * @param {*} str 内容
 * @param {*} reg 正则
 * @param {*} code 保留符号
 */
bll.toHide(str, reg = /(\d{3})(\d{4})(\d{4})/, code = '$1****$3') {};
```

## `toMac` 转换 MAC 格式

```js
/**
 * 转为 MAC 格式ff-dd-ee-rr-tt
 * @param {*} mac
 */
bll.toMac(mac) {};
```

## `toDate` 字符串转时间

```js
/**
 * 时间字符串转为时间
 * @param {*} str 时间字符串
 * 返回 输出国际标准时间（ISO），减少了8个小时 兼容safari
 */
bll.toDate(str);
```

## `toFloat` 字符转金额浮点 money

<CodeRun dll="bll"  editable>

```js
/**
 * 字符转金额,与money对应使用
 * @param {*} str 字符串
 * 返回浮动数字parseFloat
 */
//bll.toFloat(str);

return {
  toFloat: bll.toFloat('12.8'),
  addFloat: bll.addFloat('12.8', 3),
  toDecimal: bll.toDecimal('12.84365', 3),
  toMoney: bll.toMoney(18112.87565),
  toRound: bll.toRound(18112.87565),
};
```

</CodeRun>

## `addFloat` 加减法浮点

```js
/**
 * 加减法  解决计算精度不准确问题的解决办法
 * @param {*} value 初始数字
 * @param {*} arg 加减数字
 * 返回 js浮点数
 */
bll.addFloat(value, arg);
```

## `mul` 乘法浮点运算

```js
/**
 * 乘法浮点运算，解决小数
 * @param {*} arg1 乘数
 * @param {*} arg2 乘数
 *  @param {number} d 保留的位数
 */
bll.mul(arg1, arg2, d);
```

## `toDecimal` 金额格式化并补位数

```js
/**
 * 金额格式化并补位数
 * @param {*} priceNum 初始金额数字
 * @param {*} len 保留小数位数
 * @param {*} dir 默认补全小数位
 * 不进行4舍5入法
 */
bll.toDecimal(priceNum, len, (dir = 'f'));
```

## `toMoney` 数字转换为金额显示

```js
/**
 * 数字转换为金额显示
 * @param {*} s 初始数字
 * @param {*} n 小数位数
 * @param {*} symbol 符号"￥"
 * 返回￥千位，小数位
 */
bll.toMoney(s, n, (symbol = '￥'));
```

## `toRound` 四舍五入法

```js
/**
 * 四舍五入法
 * 解决 toFixed 遇到坑
 * @param {*} val 初始值
 * @param {*} num 转换位数
 */
bll.toRound(val, (num = 2));
```

## `trim` 清除前后空格

```js
/**
 * 清除前后空格
 * @param {*} str 初始字符串
 */
bll.trim(str);
```

## `parse` 字符串（单引号）转 Jaon

<CodeRun dll="bll"  editable>

```js
/**
 * 字符串（单引号非标json等）转换为Jaon
 * @param {*} str 传入字符串
 *  String.toJson()
 */

return {
  // 文本转为数组
  arr: bll.parse('[1,2,3,4,5]'),
  // 非标符号转换为json
  json: bll.parse(`{'id':0,'name':'名称'}`),
};
```

</CodeRun>

## getYearWeek 年度第几周

- `v3.0.3`

<CodeRun dll="bll"  editable>

```js
/**
 * 年度第几周
 * @param {Date} _dt 查询日期
 * @returns
 */
return bll.getYearWeek(new Date());
```

</CodeRun>

## getMonthWeek 当月第几周

- `v3.0.3`

<CodeRun dll="bll"  editable>

```js
/**
 * 当月第几周
 * @param {Date} _dt 查询日期
 * @returns
 */
return bll.getMonthWeek(new Date());
```

</CodeRun>

## format 日期时间格式化

- `v3.0.3`

- [日期原生函数](../guide/h5/date.md)
- [日期扩展函数](./init.md#date-日期扩展)

<CodeRun dll="bll"  editable>

```js
/**
 * 时间格式化为字符串
 * @param {*} rule 格式化
 * @param {*} time 初始时间 new Date()
 * @param {Array} week 星期[日，一，二]
 * format("yyyy-MM-dd HH:mm:ss:S",new Date())
 * 年(y) 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、豪秒(S)
 * 周(W)、周(w)、年度第几周(E)、当月第几周(e)、季度(q)
 */
//bll.format(rule, time, week);

let obj = {
  // 时间格式化
  format: bll.format('yyyy-MM-dd HH:mm:ss.S', new Date()),
  Weeks: bll.format('yyyy年 第E周 MM月 第e周', new Date()),
  week: bll.format('MM月dd日 W', new Date(), [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ]),
};

// 原生扩展写法
obj.q = new Date().format(' 第q季度 W  MM月dd日');
obj.time = new Date().format('yyyy w');

return obj;
```

</CodeRun>

## `random` 生成随机数(易重复)

```js
/**
 * 生成伪随机数
 * @param {*} n 取出的最小位数
 * @param {*} m 取出的最大位数 建议大于9999
 */
bll.random(n, m){};
```

## `randomCode` 生成随机字符串

<CodeRun dll="bll" >

```js
/**
 * 生成随机字符串码 (不易重复)
 * @param {*} max 取出位数
 * @param {*} arr 自定义数组,默认不填
 */
//bll.randomCode(max, arr){};

return {
  random: bll.random(1, 999),
  randomCode: bll.randomCode(6),
};
```

</CodeRun>

## `zeroFill` 按指定位数向前补 0

<CodeRun dll="bll">

```js
/**
 * 按指定位数向前补 0
 * @param {*} num 初始值
 * @param {*} n 标准位数
 */
// bll.zeroFill(num, n);

return {
  zeroFill: bll.zeroFill(1, 3),
};
```

</CodeRun>

## 正则匹配取出内容

<CodeRun dll="bll">

```js
let str = '123{xxxx}456[我的]789123[你的]456(1389090)789';
let regex1 = /\((.+?)\)/g; // () 小括号
let regex2 = /\[(.+?)\]/g; // [] 中括号
let regex3 = /\{(.+?)\}/g; // {} 花括号，大括号

return {
  // 输出是一个数组
  regex1: str.match(regex1),
  regex2: str.match(regex2),
  regex3: str.match(regex3),
};
```

</CodeRun>

## `run` 执行动态`js`代码

```js
/**
 * 立即执行动态js代码
 * @param {*} code return 代码
 * @param {array,string} pars 附加传入的参数名或数组
 * @param {*} value pars 传入参数值
 */
const run = (code, pars, value) => {};
```

## `fun` 构造函数

```js
/**
 * 构造闭包函数，来自funCode
 * @param {*} code 函数代码字符串
 * @param {*} pars 附加参数
 * @returns new Function
 */
const fun = function (code, pars) {};
```

## `funCode` 解析代码 `function`

```js
/**
 * 解析函数代码,支持ed6语法
 * @param {*} code function 函数代码字符串
 * @param {*} pars 附加传入参数
 * @returns {array} [code,pars]
 */
const funCode = function (code, pars) {};
```

<CodeRun dll="bll" editable>

```js
// 动态传入文本js代码,构造为执行函数
let _code = `(resp) => {
      console.log('td', resp);
      console.log('传入的参数集合：', arguments);
      const {message} =window.$plus;
      message.info(resp);
      // 自定义的函数,获取附加传入的
      // test(user);
      return arguments;
    }`;

// console.log(_code);

// 压缩代码
// const { html } = window.$plus.quick;
// _code = html.mini(_code);
// console.log('mini', _code);

// 调用测试函数
// function test(resp) {
//   console.log('exit', resp);
// }

// 解析代码
// const _array = bll.funCode(_code, ['a', 'b']);
// console.log('body', _array);
// //增加传入参数名
// _array[1].push('test');
// // 立即执行
// bll.run(_array[0], _array[1], test);

// 构造函数,除了代码内的 resp, 另外附加 test 参数
const func = bll.fun(_code, ['user']);
// 执行函数，并传入test 测试函数
return func('我是参数resp', '我是参数user');
//return _code;
```

</CodeRun>
