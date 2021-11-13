import{_ as n,o as s,c as a,a as p}from"./app.7408f20e.js";const d='{"title":"vue \u9519\u8BEF","description":"","frontmatter":{},"headers":[{"level":2,"title":"index.html","slug":"index-html"},{"level":2,"title":"errorHandler \u5168\u5C40\u9519\u8BEF\u673A\u5236","slug":"errorhandler-\u5168\u5C40\u9519\u8BEF\u673A\u5236"},{"level":2,"title":"main.errorHandler \u5F15\u5165","slug":"main-errorhandler-\u5F15\u5165"}],"relativePath":"guide/vue/error_handler.md","lastUpdated":1636215949409}',t={},e=p(`<h1 id="vue-\u9519\u8BEF" tabindex="-1">vue \u9519\u8BEF <a class="header-anchor" href="#vue-\u9519\u8BEF" aria-hidden="true">#</a></h1><ul><li><p>errorCaptured</p></li><li><p>warnHandler</p></li></ul><h2 id="index-html" tabindex="-1">index.html <a class="header-anchor" href="#index-html" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
      <span class="token selector">// \u9875\u9762\u8C03\u8BD5\u4FE1\u606F
      .appTeleportTestBody</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 9999<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token selector">dl</span> <span class="token punctuation">{</span>
          <span class="token property">font-size</span><span class="token punctuation">:</span> 0.6rem<span class="token punctuation">;</span>
          <span class="token property">color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
          <span class="token selector">dt</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
            <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #bb3333<span class="token punctuation">;</span>
            <span class="token property">margin-right</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token selector">dt,
          dd</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>appTopOfBody<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>appFootOfBody<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u9519\u8BEF\u63D0\u793A --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>appTeleportTestBody<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>appTeleportTestBody<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="errorhandler-\u5168\u5C40\u9519\u8BEF\u673A\u5236" tabindex="-1">errorHandler \u5168\u5C40\u9519\u8BEF\u673A\u5236 <a class="header-anchor" href="#errorhandler-\u5168\u5C40\u9519\u8BEF\u673A\u5236" aria-hidden="true">#</a></h2><ul><li>/components/index.js</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/**
 * vue \u7EC4\u4EF6\u6302\u8F7D
 * @param {*} app
 * @param {*} opts
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u662F\u5426\u5B89\u88C5</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>install<span class="token punctuation">.</span>installed<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token comment">/**  \u5168\u5C40\u9519\u8BEF\u5904\u7406 */</span>
  app<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u9519\u8BEF</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;vue.errorHandler&#39;</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5904\u7406\u9519\u8BEF</span>
    <span class="token keyword">let</span> _err <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u53D1\u751F\u9519\u8BEF\uFF1A</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>err<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      _err <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\uFF0C</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token comment">// vue 2.x</span>
      _err <span class="token operator">+=</span> <span class="token string">&#39;\uFF0C\u7EC4\u4EF6:&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>vm<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.error(&#39;vue.errorHandler&#39;, vm);</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \`info\` \u662F Vue \u7279\u5B9A\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u6BD4\u5982\u9519\u8BEF\u6240\u5728\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;appTeleportTestBody&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span>
      <span class="token string">&#39;&lt;dl&gt;&lt;dt onclick=&quot;this.parentNode.parentNode.innerHTML=\\&#39;\\&#39;&quot;&gt;X&lt;/dt&gt;&lt;dd&gt;&#39;</span> <span class="token operator">+</span>
      _err <span class="token operator">+</span>
      <span class="token string">&#39;&lt;/dd&gt;&lt;/dl&gt;&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BFC\u51FA\u8BE5\u7EC4\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  install<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="main-errorhandler-\u5F15\u5165" tabindex="-1">main.errorHandler \u5F15\u5165 <a class="header-anchor" href="#main-errorhandler-\u5F15\u5165" aria-hidden="true">#</a></h2><ul><li>vue 2.x</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5168\u5C40\u516C\u5171\u7EC4\u4EF6\u4E0E\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u5E93</span>
<span class="token keyword">import</span> startup <span class="token keyword">from</span> <span class="token string">&#39;./components/index.js&#39;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>startup<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>vue 3.x</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F15\u5165\u7EC4\u4EF6\u5E93\u4E0E\u5916\u6302</span>
<span class="token keyword">import</span> startup <span class="token keyword">from</span> <span class="token string">&#39;./components/index.js&#39;</span><span class="token punctuation">;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>startup<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,12),o=[e];function l(c,u,r,i,k,b){return s(),a("div",null,o)}var g=n(t,[["render",l]]);export{d as __pageData,g as default};