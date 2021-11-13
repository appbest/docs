import{_ as e,r as o,o as p,c as l,b as c,w as r,a,d as n,e as s}from"./app.7408f20e.js";const w='{"title":"Drag \u62D6\u62FD\u7A97\u4F53","description":"","frontmatter":{},"headers":[{"level":2,"title":"Drag \u62D6\u62FD\u7A97\u4F53","slug":"drag-\u62D6\u62FD\u7A97\u4F53-1"},{"level":2,"title":"Tag Props","slug":"tag-props"}],"relativePath":"ui/drag.md","lastUpdated":1636215949366}',u={},i=a('',4),k=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    \u6D4B\u8BD5
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Drag")]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(" Drag \u62D6\u62FD\u7A97\u4F53"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("show"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":move"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("move"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@onEvent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDragEvent"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      \u6211\u53EF\u62D6\u62FD
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Drag")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"/** \u5F39\u7A97\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6 */"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onDragEvent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onDragEvent'"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// \u5F39\u7A97\u56DE\u8C03\u4E8B\u4EF6"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// \u7A97\u53E3\u914D\u7F6E\u53C2\u6570"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" move "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u9ED8\u8BA4\u503C"),s(`
      width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"640"),n("span",{class:"token punctuation"},","),s(`
      height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),s(`
      top`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
      left`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// \u591A\u4E2A\u7A97\u4F53 \u95F4\u8DDD"),s(`
      space`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// space: fontSize(),"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"/** \u663E\u793A\u63A7\u5236 */"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" show "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"/** \u663E\u793A\u5934\u90E8\u680F */"),s(`
      head`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"/** \u663E\u793A\u5DE5\u5177\u680F\u6309\u94AE */"),s(`
      btn`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"/** max \u6309\u94AE */"),s(`
      max`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"/** \u6700\u5C0F\u5316\u6309\u94AE */"),s(`
      min`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"/** \u662F\u5426\u5141\u8BB8\u62D6\u52A8 */"),s(`
      move`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"/** \u5173\u95ED\u6309\u94AE */"),s(`
      close`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      onDragEvent`),n("span",{class:"token punctuation"},","),s(`
      move`),n("span",{class:"token punctuation"},","),s(`
      show`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br")])],-1),b=a(`__VP_STATIC_START__<h2 id="tag-props" tabindex="-1">Tag Props <a class="header-anchor" href="#tag-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>named <code>0.4.2</code></td><td>\u7EC4\u4EF6\u547D\u540D</td><td>String,Number</td><td>drag</td></tr><tr><td>title</td><td>\u5934\u90E8\u63CF\u8FF0</td><td>String</td><td></td></tr><tr><td>max</td><td>\u662F\u5426\u4EE5\u6700\u5927\u5316\u663E\u793A\u7A97\u53E3</td><td>Boolean</td><td>false</td></tr><tr><td>css</td><td>\u6307\u5B9A\u6837\u5F0F\u540D</td><td>String</td><td>qv-drag-base</td></tr><tr><td>show</td><td>\u663E\u793A\u63A7\u5236</td><td>json</td><td>{}</td></tr><tr><td>move</td><td>\u6307\u5B9A\u79FB\u52A8\u4F4D\u7F6E\u53C2\u6570</td><td>json</td><td>{}</td></tr></tbody></table><ul><li>show</li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">/** \u663E\u793A\u5934\u90E8\u680F */</span>
  <span class="token property">&quot;head&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u663E\u793A\u5DE5\u5177\u680F\u6309\u94AE */</span>
  <span class="token property">&quot;btn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/** max \u6309\u94AE */</span>
  <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u6700\u5C0F\u5316\u6309\u94AE */</span>
  <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u662F\u5426\u5141\u8BB8\u62D6\u52A8 */</span>
  <span class="token property">&quot;move&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u663E\u793A\u5173\u95ED\u6309\u94AE */</span>
  <span class="token property">&quot;close&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>__VP_STATIC_END__`,4);function m(d,g,h,_,v,f){const t=o("CodeRun");return p(),l("div",null,[i,c(t,{editable:""},{default:r(()=>[k]),_:1}),b])}var T=e(u,[["render",m]]);export{w as __pageData,T as default};
