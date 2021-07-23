# quick.cache 缓存

封装库 `cache`缓存, 会检查当前环境是否支持`storage`存储，
比如苹果的无痕浏览器，不支持`storage`存储，将自动转为`cookie`存储

## quick.cache 使用

```js
// 项目引入
import { Cache } from 'quick.lib';
```

<CodeRun dll="Cache" editable>

```js
/**
 * new Cache 构造
 * @param {json} _opts 初始化配置 {mode:1_标准,2_cookie,key:应用的key,name:存储的主键名}
 */
const cache = new Cache({
  // 存储前缀
  pre: '$docs',
  // 存储应用的key
  key: '123',
  // 存储的主键key名
  name: 'test',
});

// 默认不配置参数构造
//const cache = new Cache();

let data = {
  id: 10192,
  name: '测试存储',
};

let obj = {
  // 取出当前缓存对象的配置参数
  // opts: cache.getOpts(),
  // 当前支持的存储方式
  mode: cache.getOpts().mode === 1 ? 'h5存储' : 'cookie存储',
  set: cache.setCache(data),
  val: cache.getCache(),
};

// 读取存储 true：取出存储的格式内容，默认为空，只取出存储内容
//obj.all: cache.getCache(true),

// 删除当前存储
//obj.del=cache.removeCache();

return obj;
```

</CodeRun>

## cache cookie localStorage 存储

- iPhone 11 以下手机 wifi 重定向弹出浏览器不支持 localStorage

```js
/**
 * new Cache 构造
 * @param {json} _opts 初始化配置 {mode:1 localStorage,2 cookie,key:应用的key,name:存储的主键名}
 */
const cache = new Cache({
  // 指定存储到 1:localStorage,2:cookie
  mode: 2,
  // 存储前缀
  pre: '$docs',
  // 存储应用的key
  key: '123',
  // 存储的主键key名
  name: 'test',
});
```

## `getOpts` 读取缓存配置参数

```js
  /**
   * 当前缓存的参数
   */
  cache.getOpts() {}
```

## `setOpts` 更新缓存配置参数

```js
  /**
   * 更新缓存参数
   * @param {*} _opts
   */
  cache.setOpts(_opts) {}
```

## `setCache` 写入缓存数据

```js
  /**
   * 缓存格式写入
   * @param {object} data 写入内容
   * @param {object} type 存储类型，为空默认getType判断
   * 存储的格式化{data:'存储的内容',type:'存储内容的类型',ts:存储的时间戳}
   */
  cache.setCache(data, type) {}
```

## `getCache` 读取缓存内容

```js
  /**
   * 取出存储内容
   * @param {boolean} all 为空只取出格式化内容,或取出全部存储格式化内容
   */
 cache.getCache(all) {}
```

## `removeCache` 删除指定内容

```js
  /**
   * 删除指定内容
   * @param {*} key 自定义key,为空默认opts.name
   */
  cache.removeCache(key) {}
```

## `setSession` 写入缓存会话

```js

  /**
   * 写入当前会话
   * @param {object} data 写入内容
   * @param {object} type 存储类型，默认为空
   * 存储的格式化{key,{data:'实际存储的内容',t:存储的时间戳}}
   */
  cache.setSession(data, type) {}
```

### `removeSession()` 删除缓存会话

```js
  /**
   * 删除当前会话
   * @param {*} key 自定义key,为空默认opts.name
   */
  cache.removeSession(key) {}
```

### `getSession()` 读取缓存会话

```js
  /**
   * 取出当前会话
   * @param {boolean} all 只取出实际内容,或取出存储格式全部
   */
  cache.getSession(all) {}
```
