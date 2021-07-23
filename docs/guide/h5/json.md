# JSON 原生函数

## stringify 转字符串

stringify 是支持三个参数

<CodeRun dll="json" editable>

```js
let obj = { d: 133, m: 'acd', time: new Date() };

//console.log(obj);

let resp = [
  // 标准转字符串
  JSON.stringify(obj),
  // 输出过滤处理
  JSON.stringify(obj, function (key, val) {
    // getType 自定义函数获取类型
    console.log(key, val, typeof val);

    return val;
  }),
];

//每一个层级比上一个多一个制表符
console.log(JSON.stringify(obj, null, '\t'));

//每一个层级比上一个多10个空格
return JSON.stringify(resp, null, 10);
```

</CodeRun>

### json 转义

<CodeRun editable>

```js
let obj = { test: '测试转义' };

let str = JSON.stringify(obj);
console.log('转换为字符串', str);

console.log('转换为字符串，带转义符号', JSON.stringify(str));
```

</CodeRun>
