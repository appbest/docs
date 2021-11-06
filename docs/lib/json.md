# quick.json

Json 方法

## quick.json 使用

```js
// 方法名
export {
  test,
  isNull,
  isString,
  toString,
  toFrom,
  toValue,
  toUrl,
  toStyle,
  fromUrl,
  fromStyle,
  from,
  find,
  findAll,
  copy,
  bind,
  map,
  makeTree,
  makeFormat,
  parseOne,
};

// 项目引入
import { json } from 'quick.lib';
```

- 在线测试

<CodeRun dll="json" editable>

```js
let val = { d: 1, time: new Date() };
let arr = [
  { d: 2 },
  {
    tip: 'as',
    data: [{ time: new Date() }, { arr: [1, 2, 3, 4] }],
  },
];

let obj = {
  //是否为json对象非json数组
  test: json.test(val),
  nullJson: json.isNull({}),
  nullArr: json.isNull([]),
  isString: json.isString(`[{"d":1}]`),
  toString: json.toString(arr),
  toUrl: json.toUrl(val),
};

obj.json = json.fromUrl(obj.toUrl);

return obj;
```

</CodeRun>

## `test` 验证是 json 对象

```js
/**
 * 判断是否为json对象非json数组
 * @param {*} obj 初始对象
 */
json.test(obj);
```

## `isNull` 判断内容子项是否为空

```js
/**
 * 判断Json内容是否为空
 * @param {*} json 对象
 */
json.isNull(json);
```

## `isString` 判断标准 json 字符串

```js
/**
 * 判断标准json字符串
 * @param {*} string Json 双引号字符串
 * JSON.parse
 */
json.isString(string);
```

## `toString` Json 转字符串

```js
/**
 * 转换为字符串
 * @param {*} o
 * @param {*} callback 回调处理
 *  @param {*} opts 附加参数：制表符 \t
 * JSON.stringify
 */
json.toString(o, callback, opts);
```

## `toFrom` json 对象转字符串

<CodeRun dll="json" editable>

```js
/**
 * 对象转字符串
 * @param {*} o json
 * @param {*} callback 回调处理(k,v,index)
 */
// const toFrom = (o, callback);

let _json = {
  name: 'mariya',
  age: 17,
};

return {
  toFrom: json.toFrom(_json, function (key, value, index) {
    let _mark = '';
    if (index > 0) {
      // 加上分割符号
      _mark += '&';
    }

    return _mark + key + '=' + json.toValue(value);
  }),
};
```

</CodeRun>

## `toValue` json 值转换输出

<CodeRun dll="json" editable>

```js
/**
 * json 子值转换输出
 * @param {*} val 值
 * @param {*} type 指定类型，默认为空getType(val)
 */
// const toValue = (val, type)

let _json = {
  name: 'lee',
  age: 18,
};

return 'name=' + json.toValue(_json.name) + '&age=' + json.toValue(_json.age);
```

</CodeRun>

## `toStyle` json 转 style 样式

<CodeRun dll="json" editable>

```js
/**
 * 转为style 样式
 * @param {*} o
 */
return json.toStyle({
  color: 'red',
  'font-size': '14px',
});
```

</CodeRun>

## `toUrl` Json 转换为 URL 参数

```js
/**
 * 将Json对象转换为URL参数
 * @param {*} object 初始json对象
 * @param {*} isEncoded 是否转码 encodeURIComponent
 * 返回 key=val&key2=val2
 */
json.toUrl(object, isEncoded){};
```

## `fromUrl` url 参数格式转为 json

<CodeRun dll="json" editable>

```js
/**
 * 将url参数格式转为json
 * @param {*} str 需格式的str
 * url格式如：?1=默认&2=网关&3=光纤
 * 返回 json.from(str,/([^?&]+)=([^?&]+)/g)
 */
// const fromUrl = str => {
//   return from(str, /([^?&]+)=([^?&]+)/g);
// };

let _param = 'key=1&page=/home/index';

return json.fromUrl(_param);
```

</CodeRun>

## `fromStyle` 样式字符串转为 json

<CodeRun dll="json" editable>

```js
/**
 * 将样式转为json
 * @param {*} str 样式字符串
 *  返回 json.from(str,/([^;]+):([^;]+);/g)
 */
// const fromStyle = str => {
//   return from(str, /([^;]+):([^;]+);/g);
// };

let _styled = 'color:red;font-size:22px;';

return json.fromStyle(_styled);
```

</CodeRun>

## `from` 字符串正则转为 json

<CodeRun dll="json" editable>

```js
/**
 * 字符串正则转为json
 * @param {string} str 初始字符串
 * @param {*} param 自定义正则
 * @param {*} isEncoded 默认不转码 encodeURIComponent
 */
// const from = (str, param = /([^?&]+)=([^?&]+)/g, isEncoded = false)

let str = '?key=1&page=/home/index';
// 数据库选项定义参数格式转为 json
let _ls = '0:初始, 1:正常, 2:已审, 3:撤审,4:删除';

// 布尔值转为json
let _bool = 'false:否,true:是';

let _json = 'false: "否1", true: "是2"';

return {
  url: json.from(str),
  ls: json.from(_ls, /([^?,]+):([^?,]+)/g),
  bool: json.from(_bool, /([^?,]+):([^?,]+)/g),
  obj: json.from(_json, /([^?,]+):([^?,]+)/g),
  int: _ls.replace(/[^0-9.]/g, ''), //正则替换数字和小数点以外的
};
```

</CodeRun>

## `find` Json 数组查找对象

> 异步查找 Json 数组并且回调，默认返回第一条

<CodeRun dll="json" styled="height:20rem"  editable>

```js
let data = [
  { d: 1, k: 'ac' },
  {
    d: 2,
    k: 'us',
  },
  {
    d: 3,
    k: 'us',
    list: [
      { id: 8, name: 'dd' },
      {
        id: 9,
        name: 'dd',
        list: [
          { id: 18, name: 'dd' },
          { id: 29, name: 'dd' },
        ],
      },
    ],
  },
  { d: 4, k: 'ac' },
];

/**
 * 异步查找Json数组并且回调，默认返回第一条
 * @param {*} option 查找条件
 * {data:查找数组,where:查找的条件,subs:查找子项关键字,where,callback}
 * where:'data.ID===9 && data.Title==="abc"'
 * callback(对象,level:层次,序号){ //return -1;取出全部}
 */
return json.find({
  // 数据源
  data,
  // 搜索子项节点
  subs: 'list',
  // 查询条件
  where: ' data.id==18&& data.name=="dd" ',
  //异步回调(对象,level:层次,序号)
  callback: function (obj, level, index) {
    console.log('k:' + level, index, JSON.stringify(obj));
    if (obj) {
      // 找到对象
      alert('k:' + level + ';' + JSON.stringify(obj));

      /** 设置返回值等于 -1 会继续查询直到数据全部搜索完毕 */
      //return -1; 取出全部
    } else {
      // 全部搜索完毕，未找到对象
    }
  },
});
```

</CodeRun>

## `findAll` Json 异步搜索返回数组

<CodeRun dll="json" styled="height:20rem"  editable>

```js
let data = [
  {
    d: 2,
    k: 'us',
    list: [
      {
        id: 24,
        name: 'dd',
        list: [
          { id: 77, name: 'dd' },
          {
            id: 78,
            name: 'dd',
            list: [
              { id: 88, name: 'dd' },
              { id: 89, name: 'dd' },
            ],
          },
        ],
      },
      { id: 56, name: 'dd' },
    ],
  },

  { d: 4, k: 'ac' },
];

/**
 * 异步查找Json数组并且回调，取出全部,并返回层次与序号
 * @param {*} option 查找条件
 * {data:查找数组,where:查找的条件,subs:查找子项关键字,where,callback}
 * where:'data.ID===9 && data.Title==="abc"'
 * callback([对象数组],[level:层次,index:序号]){}
 */
return json.findAll({
  data,
  subs: 'list',
  where: 'data.name=="dd"',
  // 异步回调([找到的对象数组],[level:层次,index:序号])
  callback: function (list, pars) {
    console.log('ls:', pars, JSON.stringify(list));
    alert('ls:' + JSON.stringify(list));
  },
});
```

</CodeRun>

## `copy` 深度拷贝

```js
/**
 * 深度拷贝 DeepCopy
 * @param {*} json 初始值
 * 返回新内存对象
 */
json.copy(json);
```

## `bind` Json 数据绑定模板

<CodeRun dll="json" ubb editable>

```js
let _json = { id: 9, name: 'a', title: 'b', list: [{ id: 1 }, { id: 2 }] };
let _template = '<ul><li>{id}</li><li>{name}</li></ul>';

/**
 * 模板与Json 数据绑定
 * @param {*} json 绑定的数据{user,name}
 * @param {*} template 绑定的模板 <ul><li>{user}</li><li>{name}</li></ul>
 */
return json.bind(_json, _template);
```

</CodeRun>

## `map` 对象转换为数组

<CodeRun dll="json" editable>

```js
let _json = { id: 9, name: 'a', title: 'b', list: [{ id: 1 }, { id: 2 }] };

/**
 * 对象转换为数组
 * @param {*} json json对象
 * @param {*} callback 回调处理方法(val,key,json)
 */
let obj = json.map(_json, function (val, key, json) {
  let _item = { id: json.id };
  _item[key] = val;
  return _item;
});
return JSON.stringify(obj);
```

</CodeRun>

## `makeTree` Json 树结构显示

<CodeRun dll="json" editable>

```js
let _json = { id: 9, name: 'a', title: 'b', list: [{ id: 1 }, { id: 2 }] };

/**
 * 转为Json树结构
 * @param {*} json 对象
 * 返回 map数组
 */
let obj = json.makeTree(json);
return JSON.stringify(obj);
```

</CodeRun>

## `makeFormat` 格式化显示

<CodeRun dll="json" editable>

```js
let _json = { id: 9, name: 'a', title: 'b', list: [{ id: 1 }, { id: 2 }] };

// JSON.stringify(_json, null, 2);

/**
 * json格式化换行显示
 * @param {string,object} value json文本内容支持非标
 * @param {*} space 缩进的数量,默认2
 */
return json.makeFormat(_json, 4);
```

</CodeRun>

## `parseOne` 双引号与非标单引号字符串转为 json

<CodeRun dll="json" editable>

```js
let _str = `{
            'id':  9,
            'name':  "a",
            "title":  "b",
            "list":  [{"id":1},{"id":2}]
}
`;

/**
 * 转换双引号与非标 单引号字符串
 * @param {string} json
 * 返回 bll.parse(str)
 */
return json.parseOne(_str);
```

</CodeRun>
