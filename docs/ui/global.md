# global

全局组件交互方法与接口

## global 全局接口

- [loading 加载](./loading.md)
- [message 消息](./message.md)
- [frame 弹窗](./frame.md)
- [confirm 对话框](./modal.md)

- subscribe
- SubscribeGlobalNamed
- emitSubscribeGlobal
- onSubscribeGlobal
- getRandomCode

## subscribe 全局订阅

全局组件订阅交互

## subscribe 订阅名

- [subscribe 方法](../lib/subscribe.md)

组件库中调用

<CodeRun dll="Subscribe" editable>

```js
/**
 * 全局组件事件订阅
 */
const { subscribe } = window.$plus.ui;

// 全局订阅keys
let _keys = subscribe.keys();

return _keys;
```

</CodeRun>
