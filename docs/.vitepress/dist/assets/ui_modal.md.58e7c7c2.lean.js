import{_ as e,r as o,o as p,c,b as l,w as u,f as r,a,d as n,e as s}from"./app.e2658e45.js";const x='{"title":"Modal \u5BF9\u8BDD\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":2,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Modal props","slug":"modal-props"},{"level":3,"title":"Modal events","slug":"modal-events"},{"level":3,"title":"Modal instance","slug":"modal-instance"},{"level":3,"title":"Modal slot","slug":"modal-slot"}],"relativePath":"ui/modal.md","lastUpdated":1636215949373}',i={},k=a('',4),b=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Modal")]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u6CE8\u9500\u63D0\u793A"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"body"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u662F\u5426\u9700\u8981\u6CE8\u9500\u5F53\u524D\u7528\u6237\uFF1F"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.modal.show"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@onEvent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ModalEvent"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h5")]),n("span",{class:"token punctuation"},">")]),s("\u5F53\u524D\u7EC4\u4EF6\u521B\u5EFA"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h5")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Modal")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.modal.show = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" \u6253\u5F00\u5F53\u524D\u5BF9\u8BDD\u6846 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btnConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" \u6253\u5F00\u8BA2\u9605\u5BF9\u8BDD\u6846 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("props"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" refs "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u4F7F\u7528\u5916\u6302\u65B9\u5F0F\u5F15\u5165\uFF0C\u5177\u4F53\u67E5\u770Bdemo"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" $plus "),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s("$plus"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" reactive "),n("span",{class:"token operator"},"="),s(" $plus"),n("span",{class:"token punctuation"},"."),s("vue"),n("span",{class:"token punctuation"},"."),s("reactive"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" getCurrentInstance "),n("span",{class:"token operator"},"="),s(" $plus"),n("span",{class:"token punctuation"},"."),s("getCurrentInstance"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" the "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      modal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        show`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},`/**
     * \u5BF9\u8BDD\u6846\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6
     */`),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"ModalEvent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ModalEvent'"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},"."),s("cmd"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'ok'"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token comment"},"//\u5BF9\u8BDD\u6846\u786E\u8BA4"),s(`
          the`),n("span",{class:"token punctuation"},"."),s("modal"),n("span",{class:"token punctuation"},"."),s("show "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("the"),n("span",{class:"token punctuation"},"."),s("modal"),n("span",{class:"token punctuation"},"."),s("show"),n("span",{class:"token punctuation"},";"),s(`
          $plus`),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u70B9\u51FB\u786E\u8BA4'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'close'"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'cancel'"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token comment"},"// \u5BF9\u8BDD\u6846\u53D6\u6D88"),s(`
          the`),n("span",{class:"token punctuation"},"."),s("modal"),n("span",{class:"token punctuation"},"."),s("show "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("the"),n("span",{class:"token punctuation"},"."),s("modal"),n("span",{class:"token punctuation"},"."),s("show"),n("span",{class:"token punctuation"},";"),s(`
          $plus`),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u70B9\u51FB\u53D6\u6D88'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// \u8BA2\u9605\u65B9\u5F0F\u6253\u5F00\u5168\u5C40\u5BF9\u8BDD\u6846"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"btnConfirm"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" _resp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5168\u5C40\u8BA2\u9605\u4E8B\u4EF6\u5BF9\u8BDD\u6846'"),n("span",{class:"token punctuation"},","),s(`
        body`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'<p>\u901A\u8FC7\u8BA2\u9605\u4E8B\u4EF6\u8C03\u7528\u5168\u5C40\u5BF9\u8BDD\u6846</p><p>Content of dialog</p>'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u6309\u94AE\u4E8B\u4EF6"),s(`
        `),n("span",{class:"token function-variable function"},"onEvent"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onEvent'"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},"."),s("cmd"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'ok'"),n("span",{class:"token operator"},":"),s(`
              `),n("span",{class:"token comment"},"//\u5BF9\u8BDD\u6846\u786E\u8BA4"),s(`
              `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// \u5173\u95ED\u5BF9\u8BDD\u6846"),s(`
                resp`),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},"."),s("show "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
                val`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

              `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'close'"),n("span",{class:"token operator"},":"),s(`
            `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'cancel'"),n("span",{class:"token operator"},":"),s(`
              `),n("span",{class:"token comment"},"// \u5BF9\u8BDD\u6846\u53D6\u6D88"),s(`
              resp`),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},"."),s("show "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
              `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
          $plus`),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u70B9\u51FB\uFF1A'"),s(),n("span",{class:"token operator"},"+"),s(" val"),n("span",{class:"token punctuation"},"."),s("cmd"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u81EA\u5B9A\u4E49\u6309\u94AE"),s(`
        btns`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            cmd`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'cancel'"),n("span",{class:"token punctuation"},","),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0D\u5356\u4E86'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            cmd`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token comment"},"/** \u662F\u5426\u663E\u793A\u52A0\u8F7D\u56FE\u6807 */"),s(`
            loading`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7EE7\u7EED\u8D2D\u4E70'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token operator"},":"),s(`
          _resp`),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token comment"},"// \u8FD4\u56DE\u5F53\u524D\u5BF9\u8BDD\u6846\u5BF9\u8C61"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'confirm'"),n("span",{class:"token punctuation"},","),s(" _resp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" resp "),n("span",{class:"token operator"},"="),s(" $plus"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),s("_resp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'confirm.resp'"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" the"),n("span",{class:"token punctuation"},","),s(" ModalEvent"),n("span",{class:"token punctuation"},","),s(" btnConfirm "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br")])],-1),d=a('',3),m=a(`__VP_STATIC_START__<h3 id="modal-events" tabindex="-1">Modal events <a class="header-anchor" href="#modal-events" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>onEvent</td><td>\u6309\u94AE\u70B9\u51FB\u89E6\u53D1\u56DE\u8C03\u4E8B\u4EF6</td><td>json</td></tr></tbody></table><h4 id="events-cmd-ok" tabindex="-1">Events cmd <code>ok</code> <a class="header-anchor" href="#events-cmd-ok" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>item</td><td>\u8FD4\u56DE\u7684\u6574\u4E2A\u5BF9\u8C61</td><td>Object</td></tr><tr><td>event</td><td>\u70B9\u51FB\u4E8B\u4EF6</td><td>Object</td></tr><tr><td>close</td><td>\u5173\u95ED\u5F53\u524D\u5BF9\u8C61</td><td>Function</td></tr></tbody></table><h3 id="modal-instance" tabindex="-1">Modal instance <a class="header-anchor" href="#modal-instance" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u6765\u4F7F\u7528</p></div><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5168\u5C40\u5173\u95ED\u5F53\u524D\u5BF9\u8BDD\u6846</span>
$plus<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">confirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD4\u56DE\u5F53\u524D\u5BF9\u8BDD\u6846\u5BF9\u8C61</span>
  $plus<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;\u5168\u5C40\u8BA2\u9605\u4E8B\u4EF6\u5BF9\u8BDD\u6846&#39;</span><span class="token punctuation">,</span>
    body<span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;\u662F\u5426\u5173\u95ED\u5F53\u524D\u7A97\u53E3\uFF1F&lt;/p&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6309\u94AE\u4E8B\u4EF6</span>
    <span class="token function-variable function">btnEvent</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;ok&#39;</span><span class="token operator">:</span>
          <span class="token comment">//\u5BF9\u8BDD\u6846\u786E\u8BA4</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5173\u95ED\u5F53\u524D\u5BF9\u8BDD\u6846</span>
            $plus<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5F02\u6B65\u5F3A\u5236\u5173\u95ED\u6307\u5B9A\u7A97\u53E3\uFF0C\u4E0D\u89E6\u53D1onClose \u4E8B\u4EF6</span>
            $plus<span class="token punctuation">.</span>frame<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>data<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&#39;close&#39;</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token string">&#39;cancel&#39;</span><span class="token operator">:</span>
          <span class="token comment">// \u5BF9\u8BDD\u6846\u53D6\u6D88</span>
          $plus<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      $plus<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;\u70B9\u51FB\uFF1A&#39;</span> <span class="token operator">+</span> val<span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ModalEvent&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="modal-slot" tabindex="-1">Modal slot <a class="header-anchor" href="#modal-slot" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>footer</td><td>\u53EF\u81EA\u5B9A\u4E49\u6309\u94AE\u7B49\u7EC4\u4EF6</td></tr></tbody></table>__VP_STATIC_END__`,9);function h(g,f,v,y,w,_){const t=o("CodeRun");return p(),c("div",null,[k,l(t,{auto:"",editable:""},{default:u(()=>[b]),_:1}),d,r(` - props \u53C2\u6570\u9ED8\u8BA4\u503C

\`\`\`json
  /** \u7EC4\u4EF6\u547D\u540D */
    named: {
      type: [String, Number],
      default: 'modal'
    },
    /** \u4E3B\u9898 */
    title: {
      type: String,
      default: null,
    },
    /** \u5185\u5BB9 */
    body: {
      type: String,
      default: null,
    },
    /** \u7C7B\u522B */
    type: {
      validator (value) {
        return bll.array.test(value, ['info', 'error', 'success', 'warning']);
      },
      default: null
    },
    /** \u662F\u5426\u663E\u793A */
    show: {
      type: Boolean,
      default: true
    },
    /** \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE */
    closed: {
      type: Boolean,
      default: true
    },
    /** \u662F\u5426\u663E\u793A\u6309\u94AE\u680F */
    footerHide: {
      type: Boolean,
      default: false
    },
    /** \u6309\u94AE\u5B9A\u4E49 */
    btns: {
      type: Array,
      default () {
        return [{
          cmd: 'cancel',
          text: '\u53D6\u6D88',
        }, {
          cmd: 'ok',
          text: '\u786E\u8BA4',
          type: 'primary',
          /** \u662F\u5426\u663E\u793A\u52A0\u8F7D\u56FE\u6807 */
          loading: true,

        }];
      }
    }
\`\`\` `),m])}var C=e(i,[["render",h]]);export{x as __pageData,C as default};
