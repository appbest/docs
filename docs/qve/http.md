# http

## Api 请求

- [webApi 规范](https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0)

- [Content-Type](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type)

## CRUD 增删改查

配合后台端请求

```js
const { http } = window.$plus;

// 默认是 get
let pars = {
  url: 'api url 地址',
  data: {
    user: 'test',
  },
};

// data.cmd 后端定义操作指令，不是必须，

// 后端删除 HttpDelete
// pars.method = 'delete'
// pars.data.cmd: 'erase'  //不是必须

// HttpPost 新增
// pars.method = 'post';
// pars.data.cmd: 'add'  //新增指令
// pars.data.cmd: 'del'  //删除指令
// pars.data.cmd: 'audit'  //标准审核指令
// pars.data.cmd: 'resc'  //撤销审核指令

// HttpPut 更新数据
// pars.method = 'put';

// PATCH 局部更新，后端未启用
// pars.method = 'patch';

http(pars)
  .then((resp) => {
    console.log('http', resp);
  })
  .catch((err) => {
    console.log('http.error', err);
  });
```

## http 组件挂载

- index.js

```js
/** 引入项目组件库 */
import qve from 'qve';
// 请求地址配置
import * as url from '../router/url.js';
// 引入{request:网络请求,fail:失败}
import { request, fail } from './utils/request.js';

/**
 * vue 组件挂载
 * @param {*} app
 * @param {*} opts
 */
const install = function (app, opts) {
  opts = opts || {
    //输出日志
    log: { isPrint: true },
    // 外挂
    plus: true,
    // 初始化原生函数扩展
    init: true,
  };

  // 引入项目库
  app.use(qve, {
    ...opts,
    config: {
      app: {
        // http认证的应用key '0001',
        key: '',
        // http认证的应用Key 对应的授权验证码
        secret: '',
      },
      http: {
        /** 请求配置 */
        setting: {
          // 跨域时是否发送cookie
          withCredentials: true,

          baseURL: url.host.base, // 配置服务器地址
        },
        // 请求库
        request,
        // 请求失败处理
        fail,
      },
    },
  });
};

if (typeof window !== 'undefined') {
  /**
   *  初始化 index.html 外挂配置参数
   *  var $appInitConfig={host:{base:''}}
   */
  const initConfig = (_InitConfig) => {
    if (_InitConfig) {
      console.log('$appInitConfig', _InitConfig);
      // 自定义服务器地址 url
      if (_InitConfig.host) {
        for (let key in _InitConfig.host) {
          url.host[key] = _InitConfig.host[key];
        }
      }
    }
  };

  /** 外部组件挂载  */
  initConfig(window.$appInitConfig);
}

/**
 * 导出项目组件库
 */
export * from 'qve';

// 导出该组件
export default {
  install,
};
```

- url 配置文件

```js
let host = {
  /**
   * 数据请求服务器地址process.env.BASE_API
   */
  base: '',

  /** 推送服务器 */
  io: 'wss://io.apwlan.com',
};

// 开发环境测试服务器
if (process.env.NODE_ENV === 'development') {
  host.base = 'http://localhost:5000';
}

export { host };
```

## FromBody

- webapi `[FromBody]string value` 获取不到 ajax post 的数据的解决方法

- post 请求字符串

```js
http({
  url:'',
  data:'"你好"' //关键是内容需要加引号
}, {
  headers:{
    // 自定义请求头部
    'content-type':'application/json;charset=utf-8'
    // "content-type": "text/plain"
    // 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
}).then(resp => {
    console.log('resp', resp)
}).catch(error => {
    console.log('error', error)
}
```
