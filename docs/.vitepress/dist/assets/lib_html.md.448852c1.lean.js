import{_ as p,r as c,o as r,c as o,b as e,w as t,a as l,d as n,e as s}from"./app.e2658e45.js";const D='{"title":"quick.html","description":"","frontmatter":{},"headers":[{"level":2,"title":"quick.html \u4F7F\u7528","slug":"quick-html-\u4F7F\u7528"},{"level":2,"title":"tagDel \u6E05\u9664 html \u6807\u7B7E","slug":"tagdel-\u6E05\u9664-html-\u6807\u7B7E"},{"level":2,"title":"fontRem \u8BA1\u7B97\u57FA\u7840\u5B57\u4F53","slug":"fontrem-\u8BA1\u7B97\u57FA\u7840\u5B57\u4F53"},{"level":2,"title":"window.onresize \u54CD\u5E94\u5F0F\u7F29\u653E","slug":"window-onresize-\u54CD\u5E94\u5F0F\u7F29\u653E"},{"level":2,"title":"getUrlPars \u83B7\u53D6url\u8BF7\u6C42\u53C2\u6570","slug":"geturlpars-\u83B7\u53D6url\u8BF7\u6C42\u53C2\u6570"},{"level":2,"title":"fullScreen \u5168\u5C4F\u663E\u793A","slug":"fullscreen-\u5168\u5C4F\u663E\u793A"},{"level":2,"title":"unpack compile \u7EC4\u4EF6\u6A21\u677F\u89E3\u5305","slug":"unpack-compile-\u7EC4\u4EF6\u6A21\u677F\u89E3\u5305"},{"level":2,"title":"mini html \u4E0E JS \u4EE3\u7801\u538B\u7F29","slug":"mini-html-\u4E0E-js-\u4EE3\u7801\u538B\u7F29"}],"relativePath":"lib/html.md","lastUpdated":1636215949490}',u={},i=l(`__VP_STATIC_START__<h1 id="quick-html" tabindex="-1">quick.html <a class="header-anchor" href="#quick-html" aria-hidden="true">#</a></h1><p>\u9875\u9762\u65B9\u6CD5</p><h2 id="quick-html-\u4F7F\u7528" tabindex="-1">quick.html \u4F7F\u7528 <a class="header-anchor" href="#quick-html-\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u65B9\u6CD5\u540D</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> tagDel<span class="token punctuation">,</span> fontRem<span class="token punctuation">,</span> getUrlPars<span class="token punctuation">,</span> fullScreen<span class="token punctuation">,</span> unpack<span class="token punctuation">,</span> mini <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u9879\u76EE\u5F15\u5165</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> html <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;quick.lib&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="tagdel-\u6E05\u9664-html-\u6807\u7B7E" tabindex="-1">tagDel \u6E05\u9664 html \u6807\u7B7E <a class="header-anchor" href="#tagdel-\u6E05\u9664-html-\u6807\u7B7E" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">\u540D\u79F0</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">str</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:left;">html \u4EE3\u7801</td></tr><tr><td style="text-align:center;">isDelUbb</td><td style="text-align:center;">bool</td><td style="text-align:center;">false</td><td style="text-align:left;">\u662F\u5426\u6E05\u7406 ubb \u7801</td></tr></tbody></table>__VP_STATIC_END__`,6),b=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(" _str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'<div>123</div>'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"return"),s(" html"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tagDel"),n("span",{class:"token punctuation"},"("),s("_str"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),m=n("h2",{id:"fontrem-\u8BA1\u7B97\u57FA\u7840\u5B57\u4F53",tabindex:"-1"},[n("code",null,"fontRem"),s(" \u8BA1\u7B97\u57FA\u7840\u5B57\u4F53 "),n("a",{class:"header-anchor",href:"#fontrem-\u8BA1\u7B97\u57FA\u7840\u5B57\u4F53","aria-hidden":"true"},"#")],-1),k=n("p",null,"\u6839\u636E\u5C4F\u5E55\u5927\u5C0F\u52A8\u6001\u8C03\u6574\u663E\u793A,\u54CD\u5E94\u5F0F\u7F29\u653E\u5B57\u4F53 rem",-1),d=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// \u6839\u636E\u5C4F\u5E55\u5927\u5C0F\u52A8\u6001\u8C03\u6574\u663E\u793A\u5C3A\u5BF8\uFF0C\u57FA\u657020px"),s(`
`),n("span",{class:"token keyword"},"let"),s(" opts "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"/** \u57FA\u7840\u503C */"),s(`
  size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
  width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"750"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//ui\u753B\u5E03\u5BBD\u5EA62x"),s(`
  base`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u57FA\u7840\u653E\u5927\u500D\u6570"),s(`
  max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1.2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u6700\u5927\u500D\u6570"),s(`
  min`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u6700\u5C0F\u500D\u6570"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u9875\u9762\u57FA\u7840\u5B57\u4F53 \u7F29\u653E"),s(`
`),n("span",{class:"token keyword"},"let"),s(" size "),n("span",{class:"token operator"},"="),s(" html"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fontRem"),n("span",{class:"token punctuation"},"("),s("opts"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u81EA\u5B9A\u4E49\u56DE\u8C03\u65B9\u6CD5"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"typeof"),s(" size"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),h=l(`__VP_STATIC_START__<h2 id="window-onresize-\u54CD\u5E94\u5F0F\u7F29\u653E" tabindex="-1"><code>window.onresize</code> \u54CD\u5E94\u5F0F\u7F29\u653E <a class="header-anchor" href="#window-onresize-\u54CD\u5E94\u5F0F\u7F29\u653E" aria-hidden="true">#</a></h2><p>\u7A97\u53E3\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8C03\u6574\u5B57\u4F53\u5927\u5C0F</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u7A97\u53E3\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8C03\u6574\u5B57\u4F53\u5927\u5C0F</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9875\u9762\u57FA\u7840\u5B57\u4F53 \u7F29\u653E</span>
  <span class="token keyword">let</span> size <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">fontRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onResize:&#39;</span> <span class="token operator">+</span> version<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="geturlpars-\u83B7\u53D6url\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><code>getUrlPars</code> \u83B7\u53D6<code>url</code>\u8BF7\u6C42\u53C2\u6570 <a class="header-anchor" href="#geturlpars-\u83B7\u53D6url\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,4),_=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * \u83B7\u53D6url\u8BF7\u6C42\u53C2\u6570
 * @param {*} name \u53C2\u6570\u540D\u79F0
 * @param {*} url \u6307\u5B9A\u5730\u5740 \u7A7A\u9ED8\u8BA4location.href
 */`),s(`

`),n("span",{class:"token keyword"},"let"),s(" _str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'http://xxx.com?id=123&name=acdd'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"return"),s(" html"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getUrlPars"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),s(" _str"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br")])],-1),g=n("h2",{id:"fullscreen-\u5168\u5C4F\u663E\u793A",tabindex:"-1"},[n("code",null,"fullScreen"),s(" \u5168\u5C4F\u663E\u793A "),n("a",{class:"header-anchor",href:"#fullscreen-\u5168\u5C4F\u663E\u793A","aria-hidden":"true"},"#")],-1),f=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * html \u5168\u5C4F\u663E\u793A
 * @param {*} _fulls \u662F\u5426\u5168\u5C4F
 */`),s(`
`),n("span",{class:"token keyword"},"return"),s(" html"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fullScreen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br")])],-1),v=n("h2",{id:"unpack-compile-\u7EC4\u4EF6\u6A21\u677F\u89E3\u5305",tabindex:"-1"},[n("code",null,"unpack"),s(" compile \u7EC4\u4EF6\u6A21\u677F\u89E3\u5305 "),n("a",{class:"header-anchor",href:"#unpack-compile-\u7EC4\u4EF6\u6A21\u677F\u89E3\u5305","aria-hidden":"true"},"#")],-1),y=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * vue\u7EC4\u4EF6compile\u6A21\u677F\u89E3\u5305\u4E3AJson
 * @param {*} text = 'vue.compile\u6A21\u677F html'
 * \u8FD4\u56DE
 * {
 * js:{body:'\u4EE3\u7801\u5185\u5BB9',attr:'\u5C5E\u6027'},
 * template:{body,attr},
 * version:'\u6570\u5B57\u7248\u672C\u6BD4\u8F83\u66F4\u65B0',
 * style:{body,attr,lang:'css/less'}
 * }
 */`),s(`

`),n("span",{class:"token keyword"},"let"),s(" _tpl "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
<template ver="10">
<div class="page">test</div>
</template>
<script> 
export default {
  setup () {
     console.log('test')
  }
 }
<\/script>
<style lang="less">
.page{
  color: #frfrfr;
}
</style>
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"return"),s(" html"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unpack"),n("span",{class:"token punctuation"},"("),s("_tpl"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br")])],-1),w=n("h2",{id:"mini-html-\u4E0E-js-\u4EE3\u7801\u538B\u7F29",tabindex:"-1"},[n("code",null,"mini"),s(" html \u4E0E JS \u4EE3\u7801\u538B\u7F29 "),n("a",{class:"header-anchor",href:"#mini-html-\u4E0E-js-\u4EE3\u7801\u538B\u7F29","aria-hidden":"true"},"#")],-1),x=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * \u538B\u7F29html \u4EE3\u7801
 * @param {*} _html \u4EE3\u7801\u5185\u5BB9
 * @param {*} ignoreCase \u5FFD\u7565\u538B\u7F29\u7684\u6B65\u9AA4
 * {step:'\u4FDD\u7559\u6CE8\u91CA',step_a:'\u4FDD\u7559<!--\u6CE8\u91CA',step_c:'\u4FDD\u7559html\u6807\u7B7E\u95F4\u7684\u591A\u4F59\u7A7A\u767D',step_d:'\u4FDD\u7559\u6BCF\u884C\u4EE3\u7801\u524D\u540E\u7A7A\u767D'
 * ,step_e:'\u4FDD\u7559js\u4EE3\u7801\u5904\u7406;\u53F7',step_f:'\u4FDD\u7559\u6362\u884C'}
 */`),s(`

`),n("span",{class:"token keyword"},"let"),s(" _tpl "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
<template ver="10">
<!-- \u6D4B\u8BD5 -->
<div class="page">test</div>
</template>
<script> 
export default {
  setup () {
    // \u6D4B\u8BD5
    console.log('test')
    /** 
     * 
     * \u6D4B\u8BD5
     * */
  }
 }
<\/script>
<style lang="less">
.page{
  color: #frfrfr;
}
</style>
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"let"),s(" _opts "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u4FDD\u7559\u6CE8\u91CA\u4E0D\u53BB\u9664"),s(`
  `),n("span",{class:"token comment"},"// step: true,"),s(`
  `),n("span",{class:"token comment"},"// \u4FDD\u7559<!--\u6CE8\u91CA'"),s(`
  step_a`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// \u4FDD\u7559\u6362\u884C"),s(`
  `),n("span",{class:"token comment"},"// step_f: true,"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"let"),s(" resp "),n("span",{class:"token operator"},"="),s(" html"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mini"),n("span",{class:"token punctuation"},"("),s("_tpl"),n("span",{class:"token punctuation"},","),s(" _opts"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// console.log('mini', resp);"),s(`
`),n("span",{class:"token comment"},"//alert('\u538B\u7F29\u5B8C\u6210\\r\\n' + resp);"),s(`
`),n("span",{class:"token keyword"},"return"),s(" resp"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br")])],-1);function j(S,z,T,q,R,C){const a=c("CodeRun");return r(),o("div",null,[i,e(a,{dll:"html",editable:""},{default:t(()=>[b]),_:1}),m,k,e(a,{dll:"html",editable:""},{default:t(()=>[d]),_:1}),h,e(a,{dll:"html",editable:""},{default:t(()=>[_]),_:1}),g,e(a,{dll:"html",editable:""},{default:t(()=>[f]),_:1}),v,e(a,{dll:"html",ubb:"",editable:""},{default:t(()=>[y]),_:1}),w,e(a,{dll:"html",ubb:"",mini:"",editable:""},{default:t(()=>[x]),_:1})])}var V=p(u,[["render",j]]);export{D as __pageData,V as default};
