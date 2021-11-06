# 高亮代码

> Prism 是一个轻量级的，稳健的，优雅简洁的语法高亮插件

- [官网](http://prismjs.com/)

## 自动高亮

引入 Prism 的 CSS 和 JS 文件

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="themes/prism.css" rel="stylesheet" />
  </head>
  <body>
    <div>
      <!-- 代码高亮片段-->
      <pre>
       <code class="language-css">
        p { color: red }
      </code>
      </pre>
    </div>
    <script src="prism.js"></script>
  </body>
</html>
```

## 手动高亮

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="themes/prism.css" rel="stylesheet" />
  </head>
  <body>
    <div id="editer">
      <!-- 代码高亮片段-->
      <pre>
       <code class="language-css">
        p { color: red }
      </code>
      </pre>
    </div>
    <!-- 引用代码的 script 标签加上手动 data-manual 标记-->
    <script src="prism.js" data-manual></script>
    <script>
      // 手动使用
      window.Prism = window.Prism || {};
      window.Prism.manual = true;

      window.onload = function () {
        const prism = window.Prism;
        if (prism.languages[lang]) {
          const code = prism.highlight(
            '需要高亮的代码',
            prism.languages[lang],
            lang
          );
          console.log(lang, code);
        }
      };
    </script>
  </body>
</html>
```

## 支持的语言

```js
Markup - markup
CSS - css
C-like - clike
JavaScript - javascript
ABAP - abap
ActionScript - actionscript
Apache Configuration - apacheconf
APL - apl
AppleScript - applescript
AsciiDoc - asciidoc
ASP.NET (C#) - aspnet
AutoIt - autoit
AutoHotkey - autohotkey
Bash - bash
BASIC - basic
Batch - batch
Bison - bison
Brainfuck - brainfuck
Bro - bro
C - c
C# - csharp
C++ - cpp
CoffeeScript - coffeescript
Crystal - crystal
CSS Extras - css-extras
D - d
Dart - dart
Diff - diff
Docker - docker
Eiffel - eiffel
Elixir - elixir
Erlang - erlang
F# - fsharp
Fortran - fortran
Gherkin - gherkin
Git - git
GLSL - glsl
Go - go
Groovy - groovy
Haml - haml
Handlebars - handlebars
Haskell - haskell
Haxe - haxe
HTTP - http
Icon - icon
Inform 7 - inform7
Ini - ini
J - j
Jade - jade
Java - java
JSON - json
Julia - julia
Keyman - keyman
Kotlin - kotlin
LaTeX - latex
Less - less
LOLCODE - lolcode
Lua - lua
Makefile - makefile
Markdown - markdown
MATLAB - matlab
MEL - mel
Mizar - mizar
Monkey - monkey
NASM - nasm
nginx - nginx
Nim - nim
Nix - nix
NSIS - nsis
Objective-C - objectivec
OCaml - ocaml
Oz - oz
PARI/GP - parigp
Parser - parser
Pascal - pascal
Perl - perl
PHP - php
PHP Extras - php-extras
PowerShell - powershell
Processing - processing
Prolog - prolog
Protocol Buffers - protobuf
Puppet - puppet
Pure - pure
Python - python
Q - q
Qore - qore
R - r
React JSX - jsx
reST (reStructuredText) - rest
Rip - rip
Roboconf - roboconf
Ruby - ruby
Rust - rust
SAS - sas
Sass (Sass) - sass
Sass (Scss) - scss
Scala - scala
Scheme - scheme
Smalltalk - smalltalk
Smarty - smarty
SQL - sql
Stylus - stylus
Swift - swift
Tcl - tcl
Textile - textile
Twig - twig
TypeScript - typescript
Verilog - verilog
VHDL - vhdl
vim - vim
Wiki markup - wiki
YAML - yaml

```

## 插件-plugins

- 线条突出显示 - Line Highlight
- 行号 - Line Numbers
- 显示隐形 - Show Invisibles
- Autolinker - Autolinker
- Web 平台文档 - WebPlatform Docs
- 自定义类 - Custom Class
- 文件突出显示 - File Highlight
- 显示语言 - Show Language
- JSONP 亮点 - JSONP Highlight
- 突出显示关键字 - Highlight Keywords
- 删除初始换行符 - Remove initial line feed
- 预览器 - Previewers
- 自动加载磁带机 - Autoloader
- 保持标记 - Keep Markup
- 命令行 - Command Line
- 非转义标记 - Unescaped Markup
- 规范化空白 - Normalize Whitespace
- 数据 URI 突出显示 - Data-URI Highlight
- 工具栏 - Toolbar
- 复制到剪贴板按钮 - Copy to Clipboard Button
