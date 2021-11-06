import{_ as t,r as e,o,c,b as l,w as r,a,d as n,e as s}from"./app.e2658e45.js";const I='{"title":"\u6570\u636E\u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"Listor \u6570\u636E\u67E5\u8BE2\u5217\u8868","slug":"listor-\u6570\u636E\u67E5\u8BE2\u5217\u8868"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5E95\u90E8\u4E0E\u6C42\u548C","slug":"\u81EA\u5B9A\u4E49\u5E95\u90E8\u4E0E\u6C42\u548C"},{"level":2,"title":"\u52FE\u9009\u89E6\u53D1\u4E8B\u4EF6","slug":"\u52FE\u9009\u89E6\u53D1\u4E8B\u4EF6"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u76D1\u542C\u4E8B\u4EF6","slug":"\u81EA\u5B9A\u4E49\u76D1\u542C\u4E8B\u4EF6"},{"level":2,"title":"tpl.listor \u53C2\u6570","slug":"tpl-listor-\u53C2\u6570"},{"level":2,"title":"\u9501\u5B9A\u67E5\u8BE2\u914D\u7F6E","slug":"\u9501\u5B9A\u67E5\u8BE2\u914D\u7F6E"},{"level":3,"title":"\u5916\u952E\u914D\u7F6E","slug":"\u5916\u952E\u914D\u7F6E"},{"level":2,"title":"\u5217\u5BBD\u5EA6","slug":"\u5217\u5BBD\u5EA6"},{"level":2,"title":"Listor props","slug":"listor-props"},{"level":2,"title":"Listor slot","slug":"listor-slot"}],"relativePath":"qve/listor.md","lastUpdated":1636215949247}',u={},i=a('',3),k=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"<!-- \u5217\u8868\u7EC4\u4EF6 -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("test-list-page"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Listor")]),s(),n("span",{class:"token attr-name"},":config"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.config"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onEvent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onListorEvent"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("TextJson")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.config"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("test-json"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"rows"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("10"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("props"),n("span",{class:"token punctuation"},","),s(" context")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" _tpl "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      sql`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
      field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token constant"},"ID"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),s(`
        Code`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7D22\u5F15\u7F16\u7801'"),n("span",{class:"token punctuation"},","),s(`
        App_ID`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E94\u7528ID'"),n("span",{class:"token punctuation"},","),s(`
        PageType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7C7B\u522B'"),n("span",{class:"token punctuation"},","),s(`
        State`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9875\u9762\u72B6\u6001'"),n("span",{class:"token punctuation"},","),s(`
        Path`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u6C42\u8DEF\u5F84'"),n("span",{class:"token punctuation"},","),s(`
        Title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9875\u9762\u6807\u9898'"),n("span",{class:"token punctuation"},","),s(`
        Description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u529F\u80FD\u8BF4\u660E'"),n("span",{class:"token punctuation"},","),s(`
        MenuTitle`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u83DC\u5355\u6807\u9898'"),n("span",{class:"token punctuation"},","),s(`
        MenuIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u83DC\u5355\u56FE\u6807'"),n("span",{class:"token punctuation"},","),s(`
        MenuOpen`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u83DC\u5355\u6253\u5F00\u6A21\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
        CodeLang`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4EE3\u7801\u8BED\u8A00'"),n("span",{class:"token punctuation"},","),s(`
        CodeVersion`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4EE3\u7801\u7248\u672C'"),n("span",{class:"token punctuation"},","),s(`
        CodeTime`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4EE3\u7801\u66F4\u65B0'"),n("span",{class:"token punctuation"},","),s(`
        CodeSource`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6E90\u4EE3\u7801'"),n("span",{class:"token punctuation"},","),s(`
        CodeCompile`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F16\u8BD1\u4EE3\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token constant"},"SF_ID"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F16\u8F91\u72B6\u6001'"),n("span",{class:"token punctuation"},","),s(`
        MUser_ID`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F16\u8F91\u8005'"),n("span",{class:"token punctuation"},","),s(`
        U_Time`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F16\u8F91\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// \u7ED3\u5408\u67E5\u8BE2"),s(`
      `),n("span",{class:"token comment"},'// "join": {'),s(`
      `),n("span",{class:"token comment"},'//   "MUser_ID": {'),s(`
      `),n("span",{class:"token comment"},'//     "table": "QF_User",'),s(`
      `),n("span",{class:"token comment"},'//     "title": "LastFirst"'),s(`
      `),n("span",{class:"token comment"},"//   },"),s(`
      `),n("span",{class:"token comment"},'//   "App_ID": {'),s(`
      `),n("span",{class:"token comment"},'//     "table": "QF_AppInfo",'),s(`
      `),n("span",{class:"token comment"},'//     "title": "Title",'),s(`
      `),n("span",{class:"token comment"},'//     "field": "ID"'),s(`
      `),n("span",{class:"token comment"},"//   }"),s(`
      `),n("span",{class:"token comment"},"// },"),s(`
      attr`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token constant"},"ID"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Int64'"),n("span",{class:"token punctuation"},","),s(`
          pk`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          r`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        Code`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        App_ID`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Int32'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
          j`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u5916\u952E\u67E5\u8BE2"),s(`
          c`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'panel'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u8C03\u7528\u7684\u9762\u677F"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        PageType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Int32'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
          ls`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1:api\u63A5\u53E3,2:menu\u83DC\u5355,3:vue\u7EC4\u4EF6,5:html'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        State`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Int32'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
          ls`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1:\u6682\u505C,2:\u542F\u7528,3:\u505C\u7528,4:\u5220\u9664'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        Path`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2147483647"),n("span",{class:"token punctuation"},","),s(`
          tip`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u6C42\u65F6\u8FDB\u884C\u6743\u9650\u9A8C\u8BC1'"),n("span",{class:"token punctuation"},","),s(`
          w`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        Title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          w`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        Description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        MenuTitle`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
          d`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        MenuIcon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        MenuOpen`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        CodeLang`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        CodeVersion`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0.0.1'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        CodeTime`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'DateTime'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'getdate()'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        CodeSource`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2147483647"),n("span",{class:"token punctuation"},","),s(`
          g`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'encode'"),n("span",{class:"token punctuation"},","),s(`
          h`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          c`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'code'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        CodeCompile`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'String'"),n("span",{class:"token punctuation"},","),s(`
          max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2147483647"),n("span",{class:"token punctuation"},","),s(`
          g`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'encode'"),n("span",{class:"token punctuation"},","),s(`
          h`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token constant"},"SF_ID"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Int32'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
          r`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          e`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          a`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        MUser_ID`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Int64'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
          r`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          e`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        U_Time`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          t`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'DateTime'"),n("span",{class:"token punctuation"},","),s(`
          n`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          v`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'getdate()'"),n("span",{class:"token punctuation"},","),s(`
          r`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          e`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"/** \u6570\u636E\u4E0E\u6309\u94AE\u6743\u9650*/"),s(`
      act`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1,2,3,4,5,6,7,8,9,10,16'"),n("span",{class:"token punctuation"},","),s(`
      keys`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        primary`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),s(`
        auth`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'SF_ID'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"/** \u67E5\u8BE2\u6392\u5E8F */"),s(`
      sort`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"/** \u81EA\u5B9A\u4E49\u6570\u636E\u7F16\u8F91ui */"),s(`
      editor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"/** \u81EA\u5B9A\u4E49\u6570\u636E\u5217\u8868ui */"),s(`
      listor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u81EA\u5B9A\u4E49\u67E5\u8BE2\u5206\u9875"),s(`
        `),n("span",{class:"token comment"},"//paged: null,"),s(`
        `),n("span",{class:"token comment"},"/*\u67E5\u8BE2\u7EC4\u5408*/"),s(`
        `),n("span",{class:"token comment"},"// select: {},"),s(`
        `),n("span",{class:"token comment"},"// /* \u67E5\u8BE2\u6761\u4EF6\u7B26\u53F7*/"),s(`
        `),n("span",{class:"token comment"},"// options: ["),s(`
        `),n("span",{class:"token comment"},"//   {"),s(`
        `),n("span",{class:"token comment"},"//     value: '=',"),s(`
        `),n("span",{class:"token comment"},"//     label: '=',"),s(`
        `),n("span",{class:"token comment"},"//   }"),s(`
        `),n("span",{class:"token comment"},"// ],"),s(`
        `),n("span",{class:"token comment"},"// /** \u4E0D\u663E\u793A\u7684\u5217 */"),s(`
        `),n("span",{class:"token comment"},"// cut: ['CodeSource'],"),s(`
        show`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// 2\u65B0\u589E"),s(`
          btnNew`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// 4\u5220\u9664"),s(`
          btnDel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// 6\u5BA1\u6838"),s(`
          btnAudit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// 7 \u8D85\u7EA7\u64A4\u5BA1"),s(`
          btnRevoke`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// 8\u64E6\u9664"),s(`
          btnErase`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// \u591A\u4E2A\u6761\u4EF6\u67E5\u8BE2\u6846\u72B6\u6001"),s(`
          dialog`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"/* \u8868\u683C\u662F\u5426\u5141\u8BB8\u52FE\u9009*/"),s(`
          check`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// \u662F\u5426\u663E\u793A\u7F16\u8F91\u5668"),s(`
          editor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u5217\u5BBD\u5EA6"),s(`
        `),n("span",{class:"token comment"},"// width:100,"),s(`
        `),n("span",{class:"token comment"},"// \u8868\u5408\u8BA1\u5217"),s(`
        `),n("span",{class:"token comment"},"// sum: {"),s(`
        `),n("span",{class:"token comment"},"//   // \u662F\u5426\u663E\u793A\u5408\u8BA1\u5217"),s(`
        `),n("span",{class:"token comment"},"//   show: false,"),s(`
        `),n("span",{class:"token comment"},"//   // \u5408\u8BA1\u6307\u5B9A\u5217, \u9ED8\u8BA4\u4E0D\u914D\u7F6E\u5168\u8868\u5408\u8BA1"),s(`
        `),n("span",{class:"token comment"},"//   keys: [],"),s(`
        `),n("span",{class:"token comment"},"// }"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s("$plus"),n("span",{class:"token punctuation"},"."),s("vue"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"/** \u7EC4\u4EF6\u53C2\u6570 */"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" the "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      config`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u67E5\u8BE2\u6570\u636E\u6E90, \u9ED8\u8BA4true \u53D6\u670D\u52A1\u5668"),s(`
        isHttp`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u6570\u636E\u8BF7\u6C42\u6E90\u914D\u7F6E"),s(`
        http`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// \u8BF7\u6C42\u5730\u5740"),s(`
          url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// \u8BF7\u6C42\u53C2\u6570"),s(`
          data`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            tpl`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u81EA\u5B9A\u4E49\u754C\u9762"),s(`
        tpl`),n("span",{class:"token operator"},":"),s(" _tpl"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},`/**
     * \u5217\u8868\u7F16\u8F91\u5668\u4E8B\u4EF6\u76D1\u542C
     */`),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onListorEvent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onListorEvent'"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" the"),n("span",{class:"token punctuation"},","),s(" onListorEvent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("less"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".test-list-page"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 1rem"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token selector"},".test-json"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 70%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br"),n("span",{class:"line-number"},"127"),n("br"),n("span",{class:"line-number"},"128"),n("br"),n("span",{class:"line-number"},"129"),n("br"),n("span",{class:"line-number"},"130"),n("br"),n("span",{class:"line-number"},"131"),n("br"),n("span",{class:"line-number"},"132"),n("br"),n("span",{class:"line-number"},"133"),n("br"),n("span",{class:"line-number"},"134"),n("br"),n("span",{class:"line-number"},"135"),n("br"),n("span",{class:"line-number"},"136"),n("br"),n("span",{class:"line-number"},"137"),n("br"),n("span",{class:"line-number"},"138"),n("br"),n("span",{class:"line-number"},"139"),n("br"),n("span",{class:"line-number"},"140"),n("br"),n("span",{class:"line-number"},"141"),n("br"),n("span",{class:"line-number"},"142"),n("br"),n("span",{class:"line-number"},"143"),n("br"),n("span",{class:"line-number"},"144"),n("br"),n("span",{class:"line-number"},"145"),n("br"),n("span",{class:"line-number"},"146"),n("br"),n("span",{class:"line-number"},"147"),n("br"),n("span",{class:"line-number"},"148"),n("br"),n("span",{class:"line-number"},"149"),n("br"),n("span",{class:"line-number"},"150"),n("br"),n("span",{class:"line-number"},"151"),n("br"),n("span",{class:"line-number"},"152"),n("br"),n("span",{class:"line-number"},"153"),n("br"),n("span",{class:"line-number"},"154"),n("br"),n("span",{class:"line-number"},"155"),n("br"),n("span",{class:"line-number"},"156"),n("br"),n("span",{class:"line-number"},"157"),n("br"),n("span",{class:"line-number"},"158"),n("br"),n("span",{class:"line-number"},"159"),n("br"),n("span",{class:"line-number"},"160"),n("br"),n("span",{class:"line-number"},"161"),n("br"),n("span",{class:"line-number"},"162"),n("br"),n("span",{class:"line-number"},"163"),n("br"),n("span",{class:"line-number"},"164"),n("br"),n("span",{class:"line-number"},"165"),n("br"),n("span",{class:"line-number"},"166"),n("br"),n("span",{class:"line-number"},"167"),n("br"),n("span",{class:"line-number"},"168"),n("br"),n("span",{class:"line-number"},"169"),n("br"),n("span",{class:"line-number"},"170"),n("br"),n("span",{class:"line-number"},"171"),n("br"),n("span",{class:"line-number"},"172"),n("br"),n("span",{class:"line-number"},"173"),n("br"),n("span",{class:"line-number"},"174"),n("br"),n("span",{class:"line-number"},"175"),n("br"),n("span",{class:"line-number"},"176"),n("br"),n("span",{class:"line-number"},"177"),n("br"),n("span",{class:"line-number"},"178"),n("br"),n("span",{class:"line-number"},"179"),n("br"),n("span",{class:"line-number"},"180"),n("br"),n("span",{class:"line-number"},"181"),n("br"),n("span",{class:"line-number"},"182"),n("br"),n("span",{class:"line-number"},"183"),n("br"),n("span",{class:"line-number"},"184"),n("br"),n("span",{class:"line-number"},"185"),n("br"),n("span",{class:"line-number"},"186"),n("br"),n("span",{class:"line-number"},"187"),n("br"),n("span",{class:"line-number"},"188"),n("br"),n("span",{class:"line-number"},"189"),n("br"),n("span",{class:"line-number"},"190"),n("br"),n("span",{class:"line-number"},"191"),n("br"),n("span",{class:"line-number"},"192"),n("br"),n("span",{class:"line-number"},"193"),n("br"),n("span",{class:"line-number"},"194"),n("br"),n("span",{class:"line-number"},"195"),n("br"),n("span",{class:"line-number"},"196"),n("br"),n("span",{class:"line-number"},"197"),n("br"),n("span",{class:"line-number"},"198"),n("br"),n("span",{class:"line-number"},"199"),n("br"),n("span",{class:"line-number"},"200"),n("br"),n("span",{class:"line-number"},"201"),n("br"),n("span",{class:"line-number"},"202"),n("br"),n("span",{class:"line-number"},"203"),n("br"),n("span",{class:"line-number"},"204"),n("br"),n("span",{class:"line-number"},"205"),n("br"),n("span",{class:"line-number"},"206"),n("br"),n("span",{class:"line-number"},"207"),n("br"),n("span",{class:"line-number"},"208"),n("br"),n("span",{class:"line-number"},"209"),n("br"),n("span",{class:"line-number"},"210"),n("br"),n("span",{class:"line-number"},"211"),n("br"),n("span",{class:"line-number"},"212"),n("br"),n("span",{class:"line-number"},"213"),n("br"),n("span",{class:"line-number"},"214"),n("br"),n("span",{class:"line-number"},"215"),n("br"),n("span",{class:"line-number"},"216"),n("br"),n("span",{class:"line-number"},"217"),n("br"),n("span",{class:"line-number"},"218"),n("br"),n("span",{class:"line-number"},"219"),n("br"),n("span",{class:"line-number"},"220"),n("br"),n("span",{class:"line-number"},"221"),n("br"),n("span",{class:"line-number"},"222"),n("br"),n("span",{class:"line-number"},"223"),n("br"),n("span",{class:"line-number"},"224"),n("br"),n("span",{class:"line-number"},"225"),n("br"),n("span",{class:"line-number"},"226"),n("br"),n("span",{class:"line-number"},"227"),n("br"),n("span",{class:"line-number"},"228"),n("br"),n("span",{class:"line-number"},"229"),n("br"),n("span",{class:"line-number"},"230"),n("br"),n("span",{class:"line-number"},"231"),n("br"),n("span",{class:"line-number"},"232"),n("br"),n("span",{class:"line-number"},"233"),n("br"),n("span",{class:"line-number"},"234"),n("br"),n("span",{class:"line-number"},"235"),n("br"),n("span",{class:"line-number"},"236"),n("br"),n("span",{class:"line-number"},"237"),n("br"),n("span",{class:"line-number"},"238"),n("br"),n("span",{class:"line-number"},"239"),n("br"),n("span",{class:"line-number"},"240"),n("br"),n("span",{class:"line-number"},"241"),n("br"),n("span",{class:"line-number"},"242"),n("br"),n("span",{class:"line-number"},"243"),n("br"),n("span",{class:"line-number"},"244"),n("br"),n("span",{class:"line-number"},"245"),n("br"),n("span",{class:"line-number"},"246"),n("br"),n("span",{class:"line-number"},"247"),n("br"),n("span",{class:"line-number"},"248"),n("br"),n("span",{class:"line-number"},"249"),n("br"),n("span",{class:"line-number"},"250"),n("br"),n("span",{class:"line-number"},"251"),n("br"),n("span",{class:"line-number"},"252"),n("br"),n("span",{class:"line-number"},"253"),n("br"),n("span",{class:"line-number"},"254"),n("br"),n("span",{class:"line-number"},"255"),n("br"),n("span",{class:"line-number"},"256"),n("br")])],-1),b=a(`__VP_STATIC_START__<h2 id="\u81EA\u5B9A\u4E49\u5E95\u90E8\u4E0E\u6C42\u548C" tabindex="-1">\u81EA\u5B9A\u4E49\u5E95\u90E8\u4E0E\u6C42\u548C <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5E95\u90E8\u4E0E\u6C42\u548C" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/** \u5217\u8868\u7F16\u8F91 */</span>
<span class="token keyword">const</span> _listor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F20\u5165\u5408\u8BA1\u5217</span>
  sum<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;App_ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u5E95\u90E8</span>
  foots<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token constant">ID</span><span class="token operator">:</span> <span class="token string">&#39;\u5408&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">Code</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          value <span class="token operator">+=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>Code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6C42\u548C</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u52FE\u9009\u89E6\u53D1\u4E8B\u4EF6" tabindex="-1">\u52FE\u9009\u89E6\u53D1\u4E8B\u4EF6 <a class="header-anchor" href="#\u52FE\u9009\u89E6\u53D1\u4E8B\u4EF6" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/** \u5217\u8868\u7F16\u8F91 */</span>
<span class="token keyword">const</span> tpl <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5217\u8868\u6269\u5C55\u914D\u7F6E</span>
  listor<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u6309\u94AE</span>
    btns<span class="token operator">:</span> <span class="token punctuation">{</span>
      btnAddTree<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u6DFB\u52A0\u6811\u8282\u70B9&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u76D1\u542C\u4E8B\u4EF6\u89E6\u53D1</span>
    events<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">/** \u81EA\u5B9A\u4E49\u6309\u94AE\u89E6\u53D1(listor \u5BF9\u8C61) */</span>
      <span class="token function-variable function">btnAddTree</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;btnAddTree&#39;</span><span class="token punctuation">,</span> the<span class="token punctuation">.</span>tree<span class="token punctuation">.</span>onItem<span class="token punctuation">,</span> resp<span class="token punctuation">.</span>table<span class="token punctuation">.</span>checkList<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u81EA\u5B9A\u4E49\u76D1\u542C\u4E8B\u4EF6" tabindex="-1">\u81EA\u5B9A\u4E49\u76D1\u542C\u4E8B\u4EF6 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u76D1\u542C\u4E8B\u4EF6" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/** \u5217\u8868\u7F16\u8F91 */</span>
<span class="token keyword">const</span> tpl <span class="token operator">=</span> <span class="token punctuation">{</span>
  listor<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u76D1\u542C\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u4E8B\u4EF6\u540D\u4E0D\u80FD\u91CD\u590D</span>
    events<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u540E\u53F0\u914D\u7F6E\u4F20\u5165\u662F function \u51FD\u6570\u4EE3\u7801</span>
      App_ID<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  
        (resp) =&gt; {
          console.log(&#39;td.App_ID&#39;, resp);
          console.log(&#39;\u4F20\u5165\u7684\u53C2\u6570\u96C6\u5408\uFF1A&#39;, arguments);

          //  console.log(&#39;td.App_ID&#39;, resp);
          const { message } = window.$plus.ui;
          message.info(resp.data.ID);

        } </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token comment">// \u524D\u7AEF\u53EF\u4EE5\u76F4\u63A5\u5199\u51FD\u6570</span>
      <span class="token function-variable function">Code</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(&#39;td.App_ID&#39;, resp);</span>
        <span class="token comment">//  console.log(&#39;\u4F20\u5165\u7684\u53C2\u6570\u96C6\u5408\uFF1A&#39;, arguments);</span>

        <span class="token comment">//  console.log(&#39;td.Code&#39;, resp);</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>$plus<span class="token punctuation">.</span>ui<span class="token punctuation">;</span>
        message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token constant">ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/** \u63A7\u4EF6\u5185\u5168\u5C40\u4E8B\u4EF6\u5B9A\u4E49\uFF0C\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D\u8BF7\u52FF\u91CD\u540D */</span>
<span class="token keyword">let</span> useEvents <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u6DFB\u52A0\u6309\u94AE\u4E8B\u4EF6
   */</span>
  <span class="token function-variable function">btnAdd</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> _win <span class="token operator">=</span> <span class="token function">openEditor</span><span class="token punctuation">(</span>
      <span class="token string">&#39;\u65B0\u589E&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        cmd<span class="token operator">:</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span>
        ui<span class="token operator">:</span> the<span class="token punctuation">.</span>tpl<span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">_resp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(&#39;onEditorEvent&#39;, _win)</span>
        <span class="token comment">// \u7A97\u53E3\u56DE\u8C03</span>
        <span class="token function">onEditorEvent</span><span class="token punctuation">(</span>_resp<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5173\u95ED\u7A97\u53E3</span>
          _win<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// \u67E5\u8BE2\u6700\u65B0\u6570\u636E</span>
          <span class="token function">httpSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u5BA1\u6838\u6309\u94AE */</span>
  <span class="token function-variable function">btnAudit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">httpApi</span><span class="token punctuation">(</span><span class="token string">&#39;audit&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u64A4\u9500\u5BA1\u6838 */</span>
  <span class="token function-variable function">btnResc</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">httpApi</span><span class="token punctuation">(</span><span class="token string">&#39;resc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u6807\u8BB0\u5220\u9664\u6309\u94AE */</span>
  <span class="token function-variable function">btnDel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">btnDelEvent</span><span class="token punctuation">(</span><span class="token string">&#39;del&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u7269\u7406\u5220\u9664 */</span>
  <span class="token function-variable function">btnErase</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">btnDelEvent</span><span class="token punctuation">(</span><span class="token string">&#39;erase&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7269\u7406\u64E6\u9664</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u641C\u7D22\u6309\u94AE */</span>
  <span class="token function-variable function">btnSearch</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">httpSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u663E\u793A\u66F4\u591A\u6309\u94AE */</span>
  <span class="token function-variable function">btnMore</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// case &#39;more&#39;:</span>
    <span class="token comment">//   // \u663E\u793A\u66F4\u591A\u6309\u94AE</span>
    the<span class="token punctuation">.</span>show<span class="token punctuation">.</span>dialog <span class="token operator">=</span> <span class="token operator">!</span>the<span class="token punctuation">.</span>show<span class="token punctuation">.</span>dialog<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u91CD\u7F6E\u521D\u59CB\u5316\u6309\u94AE */</span>
  <span class="token function-variable function">btnInit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u8868\u5934\u5217\u5173\u95ED\u663E\u793A */</span>
  <span class="token function-variable function">btnThCut</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5173\u95ED\u663E\u793A\u5217</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>the<span class="token punctuation">.</span>select<span class="token punctuation">.</span>sort<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53D6\u51FA\u4E0D\u663E\u793A\u7684\u5B57\u6BB5</span>
      the<span class="token punctuation">.</span>row<span class="token punctuation">.</span>cut <span class="token operator">=</span> the<span class="token punctuation">.</span>select<span class="token punctuation">.</span>sort<span class="token punctuation">;</span>
      <span class="token comment">// the.row.cut = bindFieldCut(the.select.sort, the.row.cut);</span>
      <span class="token comment">// \u6E05\u7A7A\u5F53\u524D\u9009\u62E9</span>
      the<span class="token punctuation">.</span>select<span class="token punctuation">.</span>sort <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token function">bindTplColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u52FE\u9009\u9700\u8981\u5173\u95ED\u663E\u793A\u7684\u5217&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">btnTdSum</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u662F\u5426\u663E\u793A\u6C42\u548C\uFF0C\u6392\u9664\u5408\u8BA1\u7684\u5217</span>
    <span class="token comment">//if (the.select.sort.length &gt; 0) {</span>
    <span class="token comment">// \u6E05\u7A7A\u5F53\u524D\u9009\u62E9</span>
    the<span class="token punctuation">.</span>table<span class="token punctuation">.</span>sumField <span class="token operator">=</span> the<span class="token punctuation">.</span>select<span class="token punctuation">.</span>sort<span class="token punctuation">;</span>
    <span class="token comment">// \u6E05\u7A7A\u5F53\u524D\u9009\u62E9</span>
    the<span class="token punctuation">.</span>select<span class="token punctuation">.</span>sort <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// if(the.table.sumField)</span>
    the<span class="token punctuation">.</span>table<span class="token punctuation">.</span>foots <span class="token operator">=</span> <span class="token function">BindSum</span><span class="token punctuation">(</span>the<span class="token punctuation">.</span>tpl<span class="token punctuation">.</span>listor<span class="token punctuation">.</span>foots<span class="token punctuation">,</span> the<span class="token punctuation">.</span>table<span class="token punctuation">.</span>sumField<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// } else {</span>
    <span class="token comment">//   message.info(&#39;\u8BF7\u52FE\u9009\u9700\u8981\u6392\u9664\u5408\u8BA1\u7684\u5217&#39;);</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br></div></div><h2 id="tpl-listor-\u53C2\u6570" tabindex="-1">tpl.listor \u53C2\u6570 <a class="header-anchor" href="#tpl-listor-\u53C2\u6570" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> listor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/** \u6307\u5B9A\u663E\u793A\u7684\u8868\u5934[] */</span>
  th<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token comment">/*\u67E5\u8BE2\u7EC4\u5408*/</span>
  select<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/** \u67E5\u8BE2\u6392\u5E8F\u7684\u5B57\u6BB5\uFF0C\u9ED8\u8BA4\u662FID */</span>
    sort<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">/**  \u67E5\u8BE2\u6A21\u5F0F\uFF1A\u964D\u5E8F\u8FD8\u662F\u5347\u5E8F*/</span>
    desc<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u67E5\u8BE2\u7684\u5B57\u6BB5,\u9ED8\u8BA4\u7B49\u4E8E tpl.field*/</span>
    terms<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u9009\u62E9\u7684\u67E5\u8BE2\u6761\u4EF6\u7B26\u53F7*/</span>
    cate<span class="token operator">:</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u67E5\u8BE2\u5B57\u6BB5 */</span>
    field<span class="token operator">:</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u8F93\u5165\u7684\u67E5\u8BE2\u5185\u5BB9 */</span>
    word<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">/**\u662F\u5426\u5F00\u542F\u591A\u6761\u4EF6\u67E5\u8BE2*/</span>
    cate_more<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u9700\u9501\u5B9A\u4E0D\u53EF\u4FEE\u6539\u7684\u67E5\u8BE2\u5B57\u6BB5 */</span>
    lock<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u4F20\u5165\u67E5\u8BE2\u7EC4\u5408\u6761\u4EF6 */</span>
    where<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* \u67E5\u8BE2\u6761\u4EF6\u7B26\u53F7*/</span>
  options<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">&#39;\u2260&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;&lt;&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">&#39;&lt;&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;&lt;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">&#39;&gt;=&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;&gt;=&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u5168\u6587\u6392\u9664\u76F8\u4F3C</span>
      value<span class="token operator">:</span> <span class="token string">&#39;likeNot&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;\u2260%&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u5168\u6587\u76F8\u4F3C</span>
      value<span class="token operator">:</span> <span class="token string">&#39;like&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u4ECE\u5934\u90E8\u76F8\u4F3C</span>
      value<span class="token operator">:</span> <span class="token string">&#39;likeE&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;&lt;%&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u4ECE\u5C3E\u90E8\u76F8\u4F3C</span>
      value<span class="token operator">:</span> <span class="token string">&#39;likeB&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;&gt;%&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u590D\u6570\u67E5\u8BE2 1,2,3,4</span>
      value<span class="token operator">:</span> <span class="token string">&#39;in&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;in&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u65E5\u671F\u533A\u95F4</span>
      value<span class="token operator">:</span> <span class="token string">&#39;between&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;T+1&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u4E0D\u663E\u793A\u7684\u5217 */</span>
  cut<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;CodeSource&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  show<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u663E\u793A\u5DE5\u5177\u680F</span>
    toolbar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u66F4\u591A\u6309\u94AE</span>
    btnMore<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">/* \u8868\u683C\u662F\u5426\u5141\u8BB8\u52FE\u9009*/</span>
    check<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u663E\u793A\u7F16\u8F91\u5668</span>
    editor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5206\u9875\u680F</span>
    paged<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u66F4\u591A\u9009\u9879\u6846</span>
    dialog<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8868\u683C\u5217\u81EA\u5B9A\u4E49\u5E73\u5747\u5BBD\u5EA6</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8868\u5408\u8BA1\u5217</span>
  sum<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u662F\u5426\u663E\u793A\u5408\u8BA1\u5217</span>
    show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5408\u8BA1\u6307\u5B9A\u5217, \u9ED8\u8BA4\u4E0D\u914D\u7F6E\u5168\u8868\u5408\u8BA1</span>
    keys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u67E5\u8BE2\u5206\u9875\u53C2\u6570 */</span>
  paged<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u524D\u9875\u7801</span>
    index<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6BCF\u9875\u53D6\u6570\u636E\u6761\u6570</span>
    size<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5206\u9875\u6570</span>
    sizes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u603B\u6761\u6570 */</span>
    count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br></div></div><h2 id="\u9501\u5B9A\u67E5\u8BE2\u914D\u7F6E" tabindex="-1">\u9501\u5B9A\u67E5\u8BE2\u914D\u7F6E <a class="header-anchor" href="#\u9501\u5B9A\u67E5\u8BE2\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li>v1.0.9 \u9879\u76EE\u8FD0\u884C\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u6839\u636E\u4E0D\u901A\u7684\u6743\u9650\uFF0C\u9501\u5B9A\u7528\u6237\u67E5\u8BE2\u7684\u6761\u4EF6\u3002</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/** \u5217\u8868\u7F16\u8F91 */</span>
<span class="token keyword">let</span> listor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u67E5\u8BE2\u7EC4\u5408*/</span>
  select<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/** \u6307\u5B9A\u67E5\u8BE2\u7684\u5B57\u6BB5*/</span>
    terms<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token constant">ID</span><span class="token operator">:</span> <span class="token string">&#39;\u7F16\u53F7&#39;</span><span class="token punctuation">,</span> RadiusCode<span class="token operator">:</span> <span class="token string">&#39;\u670D\u52A1\u5668\u7F16\u7801&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u9700\u9501\u5B9A\u4E0D\u53EF\u4FEE\u6539\u7684\u67E5\u8BE2\u5B57\u6BB5 */</span>
    lock<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;QF_Group_ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7EC4\u5408\u67E5\u8BE2, \u6761\u4EF6q\u5FC5\u987B\u653E\u6700\u540E,\u65E0\u6B64\u53C2\u6570\u9ED8\u8BA4\u4E3A&#39;=&#39;</span>
    where<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> QF_Group_ID<span class="token operator">:</span> <span class="token number">256</span><span class="token punctuation">,</span> q<span class="token operator">:</span> <span class="token string">&#39;&lt;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u5916\u952E\u914D\u7F6E" tabindex="-1">\u5916\u952E\u914D\u7F6E <a class="header-anchor" href="#\u5916\u952E\u914D\u7F6E" aria-hidden="true">#</a></h3><ul><li>\u5916\u952E\u5173\u7CFB\u914D\u7F6E</li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;MUser_ID&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QF_User&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LastFirst&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;LoginCode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QF_UserPhoneJoin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;primary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Phone&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Department,NickName&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u5916\u952E\u5217\u8868\u663E\u793A\u914D\u7F6E</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> tpl <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u663E\u793A\u5B57\u6BB5</span>
  field<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>
    LoginCode<span class="token operator">:</span> <span class="token string">&#39;\u767B\u9646\u8D26\u6237&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u663E\u793A\u7684\u5B57\u6BB5\u4E0E\u663E\u793A\u540D\u79F0</span>
    <span class="token string">&#39;t.LoginCode.Department&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5B57\u6BB5\u5C5E\u6027</span>
  attr<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      t<span class="token operator">:</span> <span class="token string">&#39;Int64&#39;</span><span class="token punctuation">,</span>
      pk<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      r<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    LoginCode<span class="token operator">:</span> <span class="token punctuation">{</span>
      t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
      n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      max<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      r<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token comment">// \u9ED8\u8BA4\u4E0D\u914D\u7F6E\uFF0C\u5C06\u7528\u5916\u952E\u67E5\u8BE2\u6700\u540E\u5B57\u6BB5\u5185\u5BB9\u8FDB\u884C\u66FF\u6362\u663E\u793A\uFF0C \u8BBE\u7F6E\u4E3ALoginCode\uFF0C\u4E0D\u8FDB\u884C\u5916\u952E\u66FF\u6362\u663E\u793A</span>
      j<span class="token operator">:</span> <span class="token string">&#39;NickName&#39;</span><span class="token punctuation">,</span>
      tip<span class="token operator">:</span> <span class="token string">&#39;\u9ED8\u8BA4\u4F1A\u5458\u624B\u673A\u53F7\u7801&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5217\u8868\u53C2\u6570\u914D\u7F6E</span>
  listor<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u663E\u793A\u5B57\u6BB5\u5217\u8868</span>
    th<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;LoginCode&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t.LoginCode.NickName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t.LoginCode.Department&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u67E5\u8BE2\u914D\u7F6E</span>
    select<span class="token operator">:</span> <span class="token punctuation">{</span>
      lock<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;QF_Group_ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      where<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          QF_Group_ID<span class="token operator">:</span> <span class="token number">256</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u5217\u5BBD\u5EA6" tabindex="-1">\u5217\u5BBD\u5EA6 <a class="header-anchor" href="#\u5217\u5BBD\u5EA6" aria-hidden="true">#</a></h2><ul><li>Listor \u6240\u6709\u5217\u5E73\u5747\u5BBD\u5EA6</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> listor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8868\u683C\u5217\u81EA\u5B9A\u4E49\u5E73\u5747\u5BBD\u5EA6</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u5355\u5217\u5BBD\u5EA6</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> tpl <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C5E\u6027\u53C2\u6570</span>
  attr<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u5B57\u6BB5</span>
    title<span class="token operator">:</span> <span class="token punctuation">{</span>
      w<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="listor-props" tabindex="-1">Listor props <a class="header-anchor" href="#listor-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>named</td><td>\u7EC4\u4EF6\u547D\u540D</td><td>string</td><td>listor</td></tr><tr><td>config</td><td>tpl \u914D\u7F6E\u6A21\u677F</td><td>Object</td><td></td></tr><tr><td>list</td><td>\u4F20\u5165\u7684\u6570\u636E</td><td>Array</td><td></td></tr></tbody></table><h2 id="listor-slot" tabindex="-1">Listor slot <a class="header-anchor" href="#listor-slot" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63D2\u5165\u4F4D\u7F6E</th></tr></thead><tbody><tr><td>-</td><td>\u4E3B\u4F53\u5185\u5BB9</td></tr><tr><td>tools</td><td>\u5DE5\u5177\u680F</td></tr><tr><td>more</td><td>\u6269\u5C55\u9009\u9879\u5E95\u90E8</td></tr></tbody></table>__VP_STATIC_END__`,25);function m(d,g,h,v,f,_){const p=e("CodeRun");return o(),c("div",null,[i,l(p,{auto:"",editable:""},{default:r(()=>[k]),_:1}),b])}var y=t(u,[["render",m]]);export{I as __pageData,y as default};
