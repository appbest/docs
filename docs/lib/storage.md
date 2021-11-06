# quick.storage

建议使用封装库`cache`,可检查当前环境是否支持`storage`存储，
比如苹果的无痕浏览器，不支持`storage`存储，将自动转为`cookie`存储

- localStorage、sessionStorage 是 Html5 的特性,IE7 以下浏览器不支持

- [建议使用封装库 cache](./cache.md)

## quick.storage 使用

<CodeRun dll="storage" editable>

```js
let data = {
  id: 999,
  name: '测试存储',
};

let _key = 'lib_test';

let obj = {
  setlocal: storage.local.setItem(_key + '_json', JSON.stringify(data)),
  getlocal: storage.local.getItem(_key + '_json'),
  setsession: storage.session.setItem(_key, JSON.stringify(data)),
  getsession: storage.session.getItem(_key),
};

// storage.local.clear();
// storage.session.clear();
// storage.local.removeItem(_key + '_json');
// storage.session.removeItem(_key);

return obj;
```

</CodeRun>

## storage.local 浏览器存储

- localStorage 生命周期是永久

### `local.setItem` 写入缓存

```js
 /**
   * 写入缓存
   * @param {string} key 关键词
   * @param {object} content 内容
   */
  setItem: (key, content) => {},
```

### `local.getItem` 读取缓存

```js
  /**
   * 读取缓存
   * @param {string} key 关键词
   */
  getItem: (key) => {},
```

### `local.removeItem` 删除缓存

```js
  /**
   * 异步移除存储关键字内容
   *  @param {string} key 关键词
   */
  removeItem: (key) => {},
```

### `local.clear` 清空缓存

```js
  /**
   * 清空本地存储
   */
  clear: () => {},
```

## storage.session 当前会话存储

-sessionStorage 生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过 sessionStorage 存储的数据也就被清空了

### `session.setItem` 写入当前会话

```js
/**
 * 写入当前会话
 *  @param {string} name 关键词
 */
setItem(name, content);
```

### `session.getItem` 读取会话

```js
/**
 * 获取当前会话
 * @param {*} name 存储关键词
 */
getItem(name);
```

### `removeItem` 删除当前会话

```js
/**
 * 异步移除存储关键字内容
 *  @param {string} name 关键词
 */
removeItem(name);
```

### `clear` 清空当前会话

```js
  /**
   * 清空当前会话
   */
  clear(),
```
