# 虚拟视图

极简单页视图组件,用于活动展示等

## `view` 双向绑定组件

<CodeRun dll="View" editable>

```js
//quick.View 双向绑定测试

let app = new View({
  template: `<div><input type="text" v-model="msg"  placeholder="输入试试"> {{msg}}</div>`,
  data: {
    msg: '',
  },
}).mount('#code-model-bind'); // 指定绑定对象id

return app.data.msg;
```

</CodeRun>

## 浏览器单页视图测试

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>代码在线测试</title>
    <link rel="stylesheet" href="./index.css" />
  </head>

  <body>
    <div id="app" class="app-test"></div>
    <script src="lib/quick.min.js"></script>
    <!-- 组件模板 -->
    <script id="qvm-template" type="text/html">
      <dl>
        <dt>quick.lib {{version}}</dt>
        <dd>当前存储模式： {{mode}}</dd>
        <dd><input type="text" v-model="text" /> {{text}}</dd>
        <dd>
          <button class="primary" onclick="btnRun()">运行测试</button>
        </dd>
      </dl>
      <div class="code-resp" v-html="msg"></div>
    </script>

    <script>
      // 初始化扩展函数绑定
      quick.init();

      const onResize = () => {
        // 页面基础字体 缩放
        let size = quick.html.fontRem();
        console.log('onResize', size);
      };

      onResize();

      window.onresize = onResize;

      var app = new quick.View({
        template: document.querySelector('#qvm-template').innerHTML,
        data: {
          version: quick.version,
          mode: quick.cache.getOpts().mode === 1 ? 'storage' : 'cookie',
          text: '测试内容',
          msg: '',
        },
      });

      function btnRun() {
        app.data.msg =
          new Date().format('yyyy-MM-dd hh:mm:ss') + '<br />' + app.data.text;
      }
    </script>
  </body>
</html>
```
