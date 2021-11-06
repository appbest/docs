import{_ as n,o as s,c as a,a as p}from"./app.e2658e45.js";const g='{"title":"lang \u56FD\u9645\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u56FD\u9645\u5316\u8BED\u8A00 vue-i18n","slug":"\u56FD\u9645\u5316\u8BED\u8A00-vue-i18n"},{"level":2,"title":"vue 2.x \u4F7F\u7528 lang","slug":"vue-2-x-\u4F7F\u7528-lang"},{"level":2,"title":"vue 2.x \u591A\u8BED\u8A00\u5F15\u5165","slug":"vue-2-x-\u591A\u8BED\u8A00\u5F15\u5165"},{"level":2,"title":"uni i18n","slug":"uni-i18n"}],"relativePath":"guide/vue/lang.md","lastUpdated":1636215949406}',e={},t=p(`__VP_STATIC_START__<h1 id="lang-\u56FD\u9645\u5316" tabindex="-1">lang \u56FD\u9645\u5316 <a class="header-anchor" href="#lang-\u56FD\u9645\u5316" aria-hidden="true">#</a></h1><p>\u5B89\u88C5\u7C7B\u5E93</p><ul><li><a href="https://kazupon.github.io/vue-i18n/zh/" target="_blank" rel="noopener noreferrer">vue-i18n</a></li></ul><h2 id="\u56FD\u9645\u5316\u8BED\u8A00-vue-i18n" tabindex="-1">\u56FD\u9645\u5316\u8BED\u8A00 vue-i18n <a class="header-anchor" href="#\u56FD\u9645\u5316\u8BED\u8A00-vue-i18n" aria-hidden="true">#</a></h2><ul><li>lang.js \u914D\u7F6E</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/** \u56FD\u9645\u5316 */</span>
<span class="token keyword">const</span> lang <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9ED8\u8BA4</span>
  locale<span class="token operator">:</span> <span class="token string">&#39;zh&#39;</span><span class="token punctuation">,</span>
  messages<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u82F1\u6587</span>
    en<span class="token operator">:</span> <span class="token punctuation">{</span>
      home<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u4E3B\u9898&#39;</span><span class="token punctuation">,</span>
        game<span class="token operator">:</span> <span class="token string">&#39;\u6E38\u620F&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E2D\u6587</span>
    zh<span class="token operator">:</span> <span class="token punctuation">{</span>
      home<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;Title&#39;</span><span class="token punctuation">,</span>
        game<span class="token operator">:</span> <span class="token string">&#39;Game&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> lang <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="vue-2-x-\u4F7F\u7528-lang" tabindex="-1">vue 2.x \u4F7F\u7528 lang <a class="header-anchor" href="#vue-2-x-\u4F7F\u7528-lang" aria-hidden="true">#</a></h2><ul><li>\u6A21\u677F\u4E0E js \u5185\u4F7F\u7528</li></ul><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ lang.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6839\u8282\u70B9</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> root <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u53D6\u51FA\u8BED\u8A00
     * @returns
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">langFun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53D6\u51FA\u8282\u70B9</span>
      <span class="token keyword">const</span> _lang <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">$t</span><span class="token punctuation">(</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// if (!the.btn.isSms) {</span>
      <span class="token comment">//   //\u975E\u8BA1\u6570\u72B6\u6001\u4E0B</span>
      <span class="token comment">//   the.btn.smsText = _lang.smsText;</span>
      <span class="token comment">// }</span>
      <span class="token keyword">return</span> _lang<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">/** \u52A8\u6001\u8BA1\u7B97\u8BED\u8A00*/</span>
    <span class="token keyword">const</span> lang <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>langFun<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8C03\u7528</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;lang&#39;</span><span class="token punctuation">,</span> <span class="token function">langFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      lang<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="vue-2-x-\u591A\u8BED\u8A00\u5F15\u5165" tabindex="-1">vue 2.x \u591A\u8BED\u8A00\u5F15\u5165 <a class="header-anchor" href="#vue-2-x-\u591A\u8BED\u8A00\u5F15\u5165" aria-hidden="true">#</a></h2><ul><li>main.js</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/** \u56FD\u9645\u5316 */</span>
<span class="token keyword">import</span> VueI18n <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueI18n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/** \u56FD\u9645\u5316\u8BED\u8A00 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./components/lang.js&#39;</span><span class="token punctuation">;</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_i18n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueI18n</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="uni-i18n" tabindex="-1">uni i18n <a class="header-anchor" href="#uni-i18n" aria-hidden="true">#</a></h2><ul><li><a href="https://uniapp.dcloud.net.cn/collocation/i18n" target="_blank" rel="noopener noreferrer">i18n</a></li><li><a href="http://www.html5plus.org/doc/zh_cn/device.html#plus.os.language" target="_blank" rel="noopener noreferrer">plus.os.language</a></li></ul><p>\u6240\u6709 js \u90FD\u8FD0\u884C\u5728\u7CFB\u7EDF Webview \u73AF\u5883\u4E2D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 H5 \u6807\u51C6 API \u83B7\u53D6\u5F53\u524D\u7CFB\u7EDF\u8BBE\u7F6E\u7684\u8BED\u8A00\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">var</span> lan <span class="token operator">=</span> navigator<span class="token punctuation">.</span>language <span class="token operator">||</span> navigator<span class="token punctuation">.</span>browserLanguage<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lan<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>__VP_STATIC_END__`,16),l=[t];function o(c,u,r,i,k,b){return s(),a("div",null,l)}var d=n(e,[["render",o]]);export{g as __pageData,d as default};
