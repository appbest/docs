import{_ as e,r as o,o as c,c as l,b as p,w as r,f as u,a,d as t,e as n}from"./app.e2658e45.js";const N='{"title":"Notice \u901A\u77E5\u63D0\u9192","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":2,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Notice props","slug":"notice-props"}],"relativePath":"ui/notice.md","lastUpdated":1636215949347}',i={},d=a('',5),k=t("div",{class:"language-vue line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Notice")]),n(`
    `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u6D4B\u8BD5\u6D88\u606F"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":show"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"top"),t("span",{class:"token punctuation"},":"),n("2rem"),t("span",{class:"token punctuation"},";"),t("span",{class:"token property"},"right"),t("span",{class:"token punctuation"},":"),n("2rem")]),t("span",{class:"token punctuation"},'"')])]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"padding"),t("span",{class:"token punctuation"},":"),n("0.4rem"),t("span",{class:"token punctuation"},";"),t("span",{class:"token property"},"padding-top"),t("span",{class:"token punctuation"},":"),n("0")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Icon")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("icon-star"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(` \u6211\u662F\u81EA\u52A8\u5173\u95ED\u7684
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("Notice")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br")])],-1),h=a('',3);function b(_,m,g,f,v,y){const s=o("CodeRun");return c(),l("div",null,[d,p(s,{auto:"",editable:""},{default:r(()=>[k]),_:1}),h,u(`
\`\`\`json
{
  /** \u4E3B\u9898 */
  "title": {
    "type": String,
    "default": ""
  },
  /** \u5185\u5BB9 */
  "text": {
    "type": String,
    "default": ""
  },
  /** \u7C7B\u522B */
  "type": {
    // \u9A8C\u8BC1\u8F93\u5165\u503C\u662F\u5426\u5728\u6B64\u8303\u56F4
    "validator"(value) {
      return bll.array.test(value, [
        "info",
        "error",
        "success",
        "warning",
        "loading"
      ]);
    },
    "default": null
  },
  /** \u662F\u5426\u663E\u793A */
  "show": {
    "type": Boolean,
    "default": true
  },
  /** \u52A8\u753B\u540D */
  "name": {
    "type": String,
    "default": null
  },
  /** \u81EA\u5B9A\u4E49\u6837\u5F0F */
  "styles": {
    "type": String,
    "default": ""
  },
  /** \u662F\u5426\u53EF\u5173\u95ED */
  "closable": {
    "type": Boolean,
    "default": true
  },
  /** \u7EC4\u4EF6\u542F\u7528\u8BA2\u9605\u540D\uFF0C\u4E3A\u7A7A\u4E0D\u8BA2\u9605 */
  "id": {
    "type": String,
    "default": "on-notice-bar"
  },
  /** \u8D85\u65F6\u5173\u95ED */
  "timeout": {
    "type": Number,
    "default": uiKeys.message.timeOut || 30
  }
}
\`\`\` `)])}var T=e(i,[["render",b]]);export{N as __pageData,T as default};
