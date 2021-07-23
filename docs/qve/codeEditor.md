tags:[CodeEditor,代码编辑器]
categories:[技术]

# CodeEditor 代码编辑器

基于 prismjs 实现的轻量级代码编辑器,支持自定义引用样式与语法。

特点：

- 语法高亮
- 行号
- 动态编辑
- 光标控制
- [prismjs 介绍](../guide/h5/prismjs.md)
- [官网下载自定义样式与 js](https://prismjs.com/download.html)

## CodeEditor 组件代码编辑

- 目前 ESLint 有两种流派`Airbnb`和`Standard` 前者推荐加分号，后者不推荐

- 注意行号样式匹配问题。JS 代码结尾需要加分号

<CodeRun auto>

```vue
<template>
  <div class="test-code-page">
    <CodeEditor
      class="body"
      :lang="the.code.lang"
      :text="the.code.body"
      @onEvent="onCodeEditorEvent"
    >
      <template v-slot:tools>
        <Icon type="icon-shezhi" title="设置" @click="the.show = !the.show" />

        <Select v-model="the.code.lang" @onEvent="onLangEvent">
          <option
            v-for="(key, index) in the.code.langList"
            :key="index"
            :value="key"
          >
            {{ key }}
          </option>
        </Select>
      </template>

      <!-- 模板内容 -->
      let _str = ' 77.88888 '; let _jsonstr = `{id:123}`;
    </CodeEditor>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    const { reactive } = window.$plus.vue;

    const the = reactive({
      code: {
        /** 代码语言类别 */
        lang: 'vue',
        langList: [
          'vue',
          'c#',
          'js',
          'css',
          'html',
          'md',
          'ts',
          'py',
          'sql',
          'xml-doc',
          'json',
          'bash',
          'c',
        ],
        title: '在线帮助',
        path: '/page/help/index',
        // 版本
        version: '0.0.1',
        // 编译后代码
        code: '',
        // 源代码
        body: '',
      },
    });

    const onCodeEditorEvent = (resp) => {
      console.log('onCodeEditorEvent', resp);
      the.code.body = resp.value;
    };

    const onLangEvent = (data) => {
      console.log('onLangEvent', the.code.lang, data);
    };

    return { the, onCodeEditorEvent, onLangEvent };
  },
};
</script>
```

</CodeRun>

## CodeEditor props

| 属性             | 说明             | 类型    | 默认值                                          |
| ---------------- | ---------------- | ------- | ----------------------------------------------- |
| named `0.4.2`    | 组件命名         | String  | input                                           |
| v-model          | 双向绑定数据     | String  | -                                               |
| disabled         | 设置输入框为只读 | Boolean | false                                           |
| lang             | 代码语言         | String  | vue                                             |
| css              | 样式             | String  | qv-code-dark                                    |
| focus            | 设置为焦点       | Boolean | false                                           |
| tabSize          | 空格间距         | Number  | 2                                               |
| newPaddingChars  | 新节点起始定义   | Array   | ['{', '>', ':']                                 |
| selfClosingChars | 结束节点定义     | Object  | {open: ['{', '(', '['],close: ['}', ')', ']'],} |

## CodeEditor events

| 事件名  | 说明                         | 值     |
| ------- | ---------------------------- | ------ |
| onEvent | 点击触发回调事件             |        |
| cmd     | 图标触发指令 `update` 更新值 | string |
| named   | 自定义组件命名               | string |
| value   | 代码内容                     | string |

## CodeEditor slot

| 名称  | 说明     |
| ----- | -------- |
| tools | 工具栏   |
| 无    | 主体内容 |

## prism 引用高亮与样式

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QVE</title>

    <!-- 引用样式-->
    <link href="/static/plus/prism/tom/prism.css" rel="stylesheet" />
  </head>

  <body>
    <div id="appTopBody"></div>
    <div id="app"></div>
    <div id="endOfBody"></div>

    <!-- 引用代码的 script 标签加上手动 data-manual 标记-->
    <script src="/static/plus/prism/tom/prism.js" data-manual></script>
  </body>
</html>
```

## 语法高亮配置 PrismJS

版本: 1.22.0
主题：tomorrow
语法：languages=markup+css+clike+javascript+bash+c+csharp+json+json5+plsql+python+sql+typoscript+xml-doc
外挂：line-highlight，line-numbers，highlight-keywords，normalize-whitespace

[https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+c+csharp+json+json5+plsql+python+sql+typoscript+xml-doc&plugins=line-highlight+line-numbers+highlight-keywords+normalize-whitespace](https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+c+csharp+json+json5+plsql+python+sql+typoscript+xml-doc&plugins=line-highlight+line-numbers+highlight-keywords+normalize-whitespace)
