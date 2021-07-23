# quick.cookie

Cookie 是小甜饼的意思。顾名思义，cookie 确实非常小，它的大小限制为 4KB 左右。它的主要用途有保存登录信息，比如你登录某个网站市场可以看到“记住密码”，这通常就是通过在 Cookie 中存入一段辨别用户身份的数据来实现的。

- [建议使用封装库 cache](./cache.md)

## quick.cookie 使用

```js
// 项目引入
import { cookie } from 'quick.lib';
```

<CodeRun dll="cookie" editable>

```js
let data = {
  id: 999,
  name: '测试存储',
};

let _key = 'lib_test';

let obj = {
  setJson: cookie.setJson(_key + '_json', data),
  getJson: cookie.getJson(_key + '_json'),
  setItem: cookie.setItem(_key, JSON.stringify(data)),
  getItem: cookie.getItem(_key),
};

// 取出所有缓存的名称
obj.keys = cookie.keys();

// cookie.clear();
// cookie.removeItem(_key);

return obj;
```

</CodeRun>

## `setJson` 保存对象

```js
  /**
   * 保存对象(名称,值,参数)
   * @param {*} name 名称
   * @param {*} value 内容
   * @param {object} opts 参数
   * {maxAge:'过期以秒数',path:'子目录访问权限',domain:'访问域',secure:'仅用于 https 传输'}
   */
  setJson(name, value, opts) {},
```

## `getJson` 获取全部对象

```js
 /**
   * 获取cookie 全部对象
   */
  getJson() {},
```

## `setItem` 写入存储对象

```js
  /**
   * 存储
   * @param {*} name 名称
   * @param {*} value 内容
   * @param {*} maxAgeMinute 过期分钟数,默认空为config.cookie.maxAgeMinute
   */
  setItem(name, value, maxAgeMinute) {},
```

## `getItem` 读取指定对象

```js
  /**
   * 获取cookie 指定内容名称
   * @param {*} name 名称
   */
  getItem(name) {},
```

## `removeItem` 删除指定对象

```js
  /**
   * 移除cookie
   * @param {*} name 存储值名
   * @param {*} encode 是否需要解码
   */
  removeItem(name, encode = true) {},
```

## `clear` 删除所有对象

```js
 /**
   * 清除cookie所有对象
   */
  clear() {}
```

## `keys` 读取所有对象名称

```js
  /**
   * 取出所有缓存的名称
   */
  keys() {},
```
