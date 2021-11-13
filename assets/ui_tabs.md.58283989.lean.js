import{_ as t,r as e,o,c,b as p,w as l,d as n,e as s,a as r}from"./app.7408f20e.js";const x='{"title":"Tabs \u6807\u7B7E\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"Tabs \u9009\u9879\u5361","slug":"tabs-\u9009\u9879\u5361"},{"level":2,"title":"Tabs props","slug":"tabs-props"},{"level":3,"title":"Tabs.list props","slug":"tabs-list-props"},{"level":2,"title":"Tabs slot","slug":"tabs-slot"},{"level":2,"title":"Tabs events","slug":"tabs-events"}],"relativePath":"ui/tabs.md","lastUpdated":1636638874733}',u={},i=n("h1",{id:"tabs-\u6807\u7B7E\u9875",tabindex:"-1"},[s("Tabs \u6807\u7B7E\u9875 "),n("a",{class:"header-anchor",href:"#tabs-\u6807\u7B7E\u9875","aria-hidden":"true"},"#")],-1),k=n("p",null,"\u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6\uFF0C\u5E38\u7528\u4E8E\u5E73\u7EA7\u533A\u57DF\u5927\u5757\u5185\u5BB9\u7684\u7684\u6536\u7EB3\u548C\u5C55\u73B0\u3002",-1),b=n("h2",{id:"tabs-\u9009\u9879\u5361",tabindex:"-1"},[s("Tabs \u9009\u9879\u5361 "),n("a",{class:"header-anchor",href:"#tabs-\u9009\u9879\u5361","aria-hidden":"true"},"#")],-1),d=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"<!-- \u5E2E\u52A9 -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Tabs")]),s(`
      `),n("span",{class:"token attr-name"},":list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.tabs.list"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":active"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.tabs.active"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"closable"),s(`
      `),n("span",{class:"token attr-name"},"scrolled"),s(`
      `),n("span",{class:"token attr-name"},"@onEvent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onTabsEvent"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#qv-tabs-2"),n("span",{class:"token punctuation"},">")]),s(" \u63D2\u69FD\u5185\u5BB9 2 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#qv-tabs-3"),n("span",{class:"token punctuation"},">")]),s(" \u63D2\u69FD\u5185\u5BB9 3 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#qv-tabs-4"),n("span",{class:"token punctuation"},">")]),s(" \u63D2\u69FD\u5185\u5BB9 4 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Tabs")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token comment"},"// \u5F15\u7528\u65B9\u5F0F"),s(`
`),n("span",{class:"token comment"},"//import { reactive, h } from '../../components/vue.api';"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u5916\u6302vue"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" h "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s("$plus"),n("span",{class:"token punctuation"},"."),s("vue"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" the "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      tabs`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        active`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        list`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u67B6\u6784\u5173\u7CFB'"),n("span",{class:"token punctuation"},","),s(`
            dot`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            body`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'<b>html \u5185\u5BB9\uFF0C\u4E0D\u662F\u7528\u63D2\u69FD</b>'"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u67B6\u6784\u5206\u7EC4'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token comment"},"// dot: true,"),s(`
            `),n("span",{class:"token comment"},'// tip: "item.tip",'),s(`
            model`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              props`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"' \u51FD\u6570\u7EC4\u4EF6 \u4F20\u5165\u7684\u53C2\u6570'"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token comment"},"// \u8FDB\u884C\u7EC4\u4EF6\u6807\u8BB0"),s(`
              `),n("span",{class:"token comment"},"//  component: Help,"),s(`
              `),n("span",{class:"token comment"},"// \u51FD\u6570\u7EC4\u4EF6"),s(`
              `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("props"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" emit "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"//let _text = props.text || ''"),s(`

                `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"btnEvent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'btnEvent'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                  `),n("span",{class:"token function"},"emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onEvent'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" cmd"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'init'"),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token operator"},":"),s(" props"),n("span",{class:"token punctuation"},"."),s("title "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

                `),n("span",{class:"token comment"},"//  return h('div', `${props.title}`)"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),s(`
                    `),n("span",{class:"token string"},"'Button'"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                      `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'bar'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                      style`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" margin"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'10px'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token comment"},"// attrs: attrs,"),s(`
                      onClick`),n("span",{class:"token operator"},":"),s(` btnEvent
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("props"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
                  `),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

                `),n("span",{class:"token comment"},"// return () => ("),s(`
                `),n("span",{class:"token comment"},"//   <div>{props.text}</div>"),s(`
                `),n("span",{class:"token comment"},"// )"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token comment"},"/** \u76D1\u542C\u7EC4\u4EF6\u56DE\u8C03 */"),s(`
            `),n("span",{class:"token function-variable function"},"onEvent"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
              the`),n("span",{class:"token punctuation"},"."),s("tabs"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("tip "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'99'"),n("span",{class:"token punctuation"},";"),s(`
              console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onEvent'"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E94\u7528\u6388\u6743'"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u670D\u52A1\u5668'"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7EC4\u7EC7\u5217\u8868'"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// \u672C\u5730\u7EC4\u4EF6\u5F15\u5165"),s(`
    `),n("span",{class:"token comment"},"// const EditPage = () => import('../views/EditPage.vue');"),s(`
    `),n("span",{class:"token comment"},"// the.tabs.list.push({"),s(`
    `),n("span",{class:"token comment"},"//   title: '\u5916\u6302\u7EC4\u4EF6',"),s(`
    `),n("span",{class:"token comment"},"//   dot: true,"),s(`
    `),n("span",{class:"token comment"},"//   // \u6DFB\u52A0\u7EC4\u4EF6"),s(`
    `),n("span",{class:"token comment"},"//   model: {"),s(`
    `),n("span",{class:"token comment"},"//     props: {"),s(`
    `),n("span",{class:"token comment"},"//       title: '\u7EC4\u4EF6\u4F20\u5165\u7684\u53C2\u6570'"),s(`
    `),n("span",{class:"token comment"},"//     },"),s(`
    `),n("span",{class:"token comment"},"//     component: markRaw(EditPage)"),s(`
    `),n("span",{class:"token comment"},"//   }"),s(`
    `),n("span",{class:"token comment"},"// });"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onTabsEvent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onTabsEvent'"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},"."),s("cmd"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'click'"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token comment"},"// \u6807\u7B7E\u70B9\u51FB\u5207\u6362\u89E6\u53D1"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'close'"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token comment"},"// \u6807\u7B7E\u70B9\u51FB\u5173\u95ED\u89E6\u53D1"),s(`
          the`),n("span",{class:"token punctuation"},"."),s("tabs"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},"."),s("index"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" the"),n("span",{class:"token punctuation"},","),s(" onTabsEvent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br")])],-1),m=r('',8);function h(g,v,f,_,y,T){const a=e("CodeRun");return o(),c("div",null,[i,k,b,p(a,{auto:"",editable:""},{default:l(()=>[d]),_:1}),m])}var E=t(u,[["render",h]]);export{x as __pageData,E as default};