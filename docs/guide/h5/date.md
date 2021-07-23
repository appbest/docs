# Date 日期函数

- [日期扩展函数](../../lib/init.md#date-日期扩展)
- [bll.format 日期函数](../../lib/bll.md#format-日期时间格式化)

## Invalid Date

`new Date()` 参与计算会自动转换为从 1970.1.1 开始的毫秒数
解决 IE、firefox 浏览器下 JS 的 new Date()的值为 Invalid Date、NaN-NaN 的问题

<CodeRun editable>

```js
let _date = {};
_date.sa = '2016-01-01 00:00:00';

_date.sar = new Date(_date.sa.replace(new RegExp(/-/gm), '/')); //将所有的'-'转为'/'即可

_date.sc = new Date().format('yyyy-MM-dd HH:mm:ss.S'); //扩展转换 返回这个值Invalid Date，转换失败

_date.scr = new Date(_date.sc); //Date Fri Jan 01 2016 00:00:00 GMT+0800 (中国标准时间)
console.log('转换', _date);
return _date;
```

</CodeRun>

## Date 日期兼容

不同的浏览器还是存在差异的，以下列出了所有浏览器都支持的方式。

<CodeRun editable>

```js
let _date = {};

_date.sb = new Date().toISOString(); // '2021-03-13T04:07:03.972Z' //ISO 时间格式
_date.sl = new Date().toLocaleTimeString(); //获取当前时间

_date.a = new Date(2011, 01, 07); // yyyy, mm-1, dd
_date.b = new Date(2011, 01, 07, 11, 05, 00); // yyyy, mm-1, dd, hh, mm, ss
_date.c = new Date('02/07/2011'); // "mm/dd/yyyy"
_date.d = new Date('02/07/2011 11:05:00'); // "mm/dd/yyyy hh:mm:ss"
_date.e = new Date(1297076700000); // milliseconds
_date.f = new Date('Mon Feb 07 2011 11:05:00 GMT'); // ""Day Mon dd yyyy hh:mm:ss GMT/UTC

const getYearWeek = function (_time) {
  let d1 = new Date(_time);
  let d2 = new Date(_time);
  d2.setMonth(0);
  d2.setDate(1);
  let rq = d1 - d2;
  let days = Math.ceil(rq / (24 * 60 * 60 * 1000));
  let num = Math.ceil(days / 7);
  return num;

  /*
    date1是当前日期
    date2是当年第一天
    d是当前日期是今年第多少天
    用d + 当前年的第一天的周差距的和在除以7就是本年第几周
    */

  let _args = {
    y: _time.getFullYear(), //年
    m: _time.getMonth() + 1, //月份
    d: _time.getDate(), //日
  };

  _args.end = new Date(_args.y, parseInt(_args.m) - 1, _args.d);
  _args.start = new Date(_args.y, 0, 1);

  _args.diff = Math.round(
    (_args.end.valueOf() - _args.start.valueOf()) / 86400000
  );

  _args.ww = _args.diff + (_args.start.getDay() + 1 - 1);

  console.log('getYearWeek', _args);

  return Math.ceil(_args.ww / 7);
};

_date.w = getYearWeek(new Date());

return _date;
```

</CodeRun>
