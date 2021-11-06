# subscribe 事件订阅

适用于单页跨组件,全局事件触发

## subscribe 使用

| 属性    | 说明                         |
| ------- | ---------------------------- |
| `$on`   | 订阅监听(订阅 Id,触发事件)   |
| `$emit` | 发送订阅(订阅 Id,发送的数据) |
| `keys`  | 所有订阅的事件 Id            |

## Vue 组件订阅

- 监听组件

```js
import onMounted from 'vue';
import { subscribe } from 'quick.lib';
export default {
  setup() {
    // 接收事件订阅
    let onId = 'on-form-item-add';
    subscribe.$on(onId, (resp) => {
      console.log('接收订阅名：', onId, resp);
      //返回给发送事件
      return { finish: true, data: { named: onId, resp } };
    });

    onMounted(() => {
      // 组件加载完毕发送事件
      subscribe.$emit('on-form-item-add', {
        cmd: 'msg',
        title: '加载完了',
      });
    });
  },
};
```

## subscribe 事件订阅

<CodeRun dll="Subscribe" editable>

```js
// import { Subscribe } from 'quick.lib';

/**
 * 全局组件事件订阅
 */
const subscribe = new Subscribe();
// 自定义事件订阅名
const subscribeNamed = 'on-sub-test';

// 订阅事件事件监听
subscribe.$on(subscribeNamed, function (resp) {
  //console.log('ubb', resp);
  alert('收到消息\r\n' + JSON.stringify(resp));
  switch (resp.cmd) {
    case 'clear':
      // 清除全部事件
      subscribe.clear();
      break;
  }
  //返回给发送事件
  return { finish: true, data: { named: subscribeNamed, resp } };
});

// 全局组件keys
let resp = { keys: subscribe.keys() };
// 发送事件
resp.send = subscribe.$emit(subscribeNamed, {
  cmd: 'msg',
  title: '清除所有监听',
});

// resp.send = subscribe.$emit(subscribeNamed, {
//   cmd: 'clear',
//   title: '清除所有监听',
// });

return resp;
```

</CodeRun>

## subscribe 订阅名

<CodeRun dll="Subscribe" editable>

```js
/** 事件订阅 */
// import { Subscribe } from 'quick.lib';
/**
 * 全局组件事件订阅
 */
const subscribe = new Subscribe();
// 全局组件keys
let _keys = subscribe.keys();

return _keys;
```

</CodeRun>
