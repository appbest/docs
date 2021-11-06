import{_ as o,r as c,o as p,c as l,b as t,w as e,d as n,e as s}from"./app.e2658e45.js";const N='{"title":"JSON \u539F\u751F\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"stringify \u8F6C\u5B57\u7B26\u4E32","slug":"stringify-\u8F6C\u5B57\u7B26\u4E32"},{"level":3,"title":"json \u8F6C\u4E49","slug":"json-\u8F6C\u4E49"}],"relativePath":"guide/h5/json.md","lastUpdated":1636215949388}',u={},i=n("h1",{id:"json-\u539F\u751F\u51FD\u6570",tabindex:"-1"},[s("JSON \u539F\u751F\u51FD\u6570 "),n("a",{class:"header-anchor",href:"#json-\u539F\u751F\u51FD\u6570","aria-hidden":"true"},"#")],-1),r=n("h2",{id:"stringify-\u8F6C\u5B57\u7B26\u4E32",tabindex:"-1"},[s("stringify \u8F6C\u5B57\u7B26\u4E32 "),n("a",{class:"header-anchor",href:"#stringify-\u8F6C\u5B57\u7B26\u4E32","aria-hidden":"true"},"#")],-1),k=n("p",null,"stringify \u662F\u652F\u6301\u4E09\u4E2A\u53C2\u6570",-1),b=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" d"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"133"),n("span",{class:"token punctuation"},","),s(" m"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'acd'"),n("span",{class:"token punctuation"},","),s(" time"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//console.log(obj);"),s(`

`),n("span",{class:"token keyword"},"let"),s(" resp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"// \u6807\u51C6\u8F6C\u5B57\u7B26\u4E32"),s(`
  `),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// \u8F93\u51FA\u8FC7\u6EE4\u5904\u7406"),s(`
  `),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" val")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// getType \u81EA\u5B9A\u4E49\u51FD\u6570\u83B7\u53D6\u7C7B\u578B"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"typeof"),s(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" val"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//\u6BCF\u4E00\u4E2A\u5C42\u7EA7\u6BD4\u4E0A\u4E00\u4E2A\u591A\u4E00\u4E2A\u5236\u8868\u7B26"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\\t'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//\u6BCF\u4E00\u4E2A\u5C42\u7EA7\u6BD4\u4E0A\u4E00\u4E2A\u591A10\u4E2A\u7A7A\u683C"),s(`
`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br")])],-1),d=n("h3",{id:"json-\u8F6C\u4E49",tabindex:"-1"},[s("json \u8F6C\u4E49 "),n("a",{class:"header-anchor",href:"#json-\u8F6C\u4E49","aria-hidden":"true"},"#")],-1),m=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4B\u8BD5\u8F6C\u4E49'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"let"),s(" str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32'"),n("span",{class:"token punctuation"},","),s(" str"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5E26\u8F6C\u4E49\u7B26\u53F7'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1);function f(g,y,_,h,j,w){const a=c("CodeRun");return p(),l("div",null,[i,r,k,t(a,{dll:"json",editable:""},{default:e(()=>[b]),_:1}),d,t(a,{editable:""},{default:e(()=>[m]),_:1})])}var x=o(u,[["render",f]]);export{N as __pageData,x as default};