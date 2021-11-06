# quick.xml

## quick.xml 使用

```js
export { toCore, toJson };
```

## `toJson` xml 转为 json

<CodeRun dll="xml"  editable>

```js
/**
 * 转为json 对象
 * @param {*} xml 内容
 * @param {*} opts 输出的格式配置参数
 * opts:{format:内容格式化方法,默认去除空格，换行等}
 */
// const toJson = (xml, opts) => {}

let _xml = `<person><name>张三</name><age>19</age><gender>男</gender></person>`;

return {
  toJson: xml.toJson(_xml),
};
```

</CodeRun>

## `toCore` xml 适配 core 注释,转为 json

```js
/**
 * 适配core注释,转为json
 * @param {*} jsonDoc toJson转换对象
 */
const toCore = jsonDoc =>()
```
