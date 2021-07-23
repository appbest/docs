# Markdown

## [markdown-it 插件开发](https://markdown-it.docschina.org/)

## markdown 语法

-[在线语法手册](https://www.w3cschool.cn/markdownyfsm/)

### 目录 Table of Contents

- 语法

```cs
[[toc]]
```

- 示例
  [[toc]]

### 表格 Tables

- 语法

```cs
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

- 示例

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

### 表情 Emoji :tada:

- 语法

```cs
:tada: :100:
```

- 示例

:tada: :100:

### 提示 Default Title

- 语法

```cs
::: tip
This is a tip
:::

::: warning
This is a warning
:::
```

- 示例

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

### 自定义提示 Custom Title

::: danger STOP
Danger zone, do not proceed
:::

### 高亮代码 Highlighting

高亮代码，并指定标记行

Line Highlighting in Code Blocks

- 语法

`js{3-5}`

- 示例

```js{3-5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
