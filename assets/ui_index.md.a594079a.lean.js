import{_ as n,o as s,c as a,a as p}from"./app.7408f20e.js";const d='{"title":"Quick Vue UI","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u5E93\u914D\u7F6E","slug":"\u7EC4\u4EF6\u5E93\u914D\u7F6E"},{"level":2,"title":"main.js \u4E2D\u6302\u8F7D","slug":"main-js-\u4E2D\u6302\u8F7D"},{"level":2,"title":"App.vue \u52A8\u6001\u54CD\u5E94","slug":"app-vue-\u52A8\u6001\u54CD\u5E94"},{"level":2,"title":"\u5F15\u5165\u72EC\u7ACB\u7EC4\u4EF6","slug":"\u5F15\u5165\u72EC\u7ACB\u7EC4\u4EF6"},{"level":2,"title":"\u7EC4\u4EF6\u540D","slug":"\u7EC4\u4EF6\u540D"},{"level":2,"title":"\u7EC4\u4EF6\u89C4\u8303","slug":"\u7EC4\u4EF6\u89C4\u8303"},{"level":3,"title":"emit \u7EC4\u4EF6\u4E8B\u4EF6","slug":"emit-\u7EC4\u4EF6\u4E8B\u4EF6"},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"ui/index.md","lastUpdated":1636215949341}',t={},e=p(`__VP_STATIC_START__<h1 id="quick-vue-ui" tabindex="-1">Quick Vue UI <a class="header-anchor" href="#quick-vue-ui" aria-hidden="true">#</a></h1><p>\u57FA\u4E8E vue3.0 \u7684\u7EC4\u5408\u5F0F API\uFF0C\u91CD\u6784\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u3002\u6B64\u7248\u672C\u4E0D\u4F1A\u517C\u5BB9 vue2.x</p><ul><li><a href="https://www.npmjs.com/package/qveui" target="_blank" rel="noopener noreferrer">qveui \u53D1\u5E03\u5305\u66F4\u65B0</a></li></ul><h1 id="\u5FEB\u901F\u4F7F\u7528" tabindex="-1">\u5FEB\u901F\u4F7F\u7528 <a class="header-anchor" href="#\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a></h1><ul><li><p>\u4E0B\u8F7D\u5F00\u7BB1\u5373\u7528\u6A21\u677F <a href="https://gitee.com/qve/qveui-vue3-admin" target="_blank" rel="noopener noreferrer">qveui-template </a></p></li><li><p>\u89E3\u538B\u5230\u6587\u4EF6\u5939\uFF0C\u5728\u7EC8\u7AEF\u4E2D\u6267\u884C</p></li></ul><div class="language-sh line-numbers-mode"><pre><code># \u5B89\u88C5
yarn

## \u6D4B\u8BD5
yarn dev

## \u6253\u5305
yarn build

## \u672C\u5730\u8FD0\u884C
yarn preview
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u7EC4\u4EF6\u5E93\u914D\u7F6E" tabindex="-1">\u7EC4\u4EF6\u5E93\u914D\u7F6E <a class="header-anchor" href="#\u7EC4\u4EF6\u5E93\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li>\u73B0\u6709\u9879\u76EE\u4E2D\u5F15\u5165</li></ul><div class="language-sh line-numbers-mode"><pre><code>## \u73B0\u6709\u9879\u76EE\u4E2D\u72EC\u7ACB\u5F15\u5165\u5E93
yarn i qveui
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>startup.js</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5F15\u5165\u7EC4\u4EF6\u5E93</span>
<span class="token keyword">import</span> qveui <span class="token keyword">from</span> <span class="token string">&#39;qveui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;qveui/dist/fonts/iconfont.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;qveui/dist/styles/index.less&#39;</span>

<span class="token comment">// \u5F15\u5165\u7F51\u7EDC\u8BF7\u6C42</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> request<span class="token punctuation">,</span> fail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils/request.js&#39;</span>

<span class="token comment">// \u5F15\u5165\u7F51\u7EDC\u8BF7\u6C42</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> configURL <span class="token keyword">from</span> <span class="token string">&#39;./config/url.js&#39;</span>

<span class="token comment">// \u53EF\u81EA\u5B9A\u4E49\u5BFC\u822A\u7EC4\u4EF6</span>
<span class="token keyword">import</span> Nav <span class="token keyword">from</span> <span class="token string">&#39;./Nav/Top.vue&#39;</span>

<span class="token comment">// \u7EC4\u4EF6</span>
<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">{</span>
  Nav<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;install&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// \u5224\u65AD\u662F\u5426\u5B89\u88C5</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>install<span class="token punctuation">.</span>installed<span class="token punctuation">)</span> <span class="token keyword">return</span>

  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> components<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>qveui<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// prefix:&#39;\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\u524D\u7F00\uFF0C\u907F\u514D\u8DDF\u5176\u5B83\u9879\u76EE\u7EC4\u4EF6\u91CD\u540D&#39;</span>
    <span class="token comment">//\u8F93\u51FA\u65E5\u5FD7</span>
    log<span class="token operator">:</span> opts<span class="token punctuation">.</span>log <span class="token operator">||</span> <span class="token punctuation">{</span> isPrint<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    config<span class="token operator">:</span> <span class="token punctuation">{</span>
      ui<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u662F\u5426\u5C0F\u5C4F\u5E55</span>
        isMobile<span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth <span class="token operator">&lt;</span> <span class="token number">1024</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">/** \u5168\u5C40\u7ED1\u5B9Aquick \u8C03\u7528 */</span>
  app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$url <span class="token operator">=</span> configURL
  app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$ui <span class="token operator">=</span> qveui
<span class="token punctuation">}</span>

<span class="token comment">// \u5BFC\u51FA\u8BE5\u7EC4\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  install<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="main-js-\u4E2D\u6302\u8F7D" tabindex="-1">main.js \u4E2D\u6302\u8F7D <a class="header-anchor" href="#main-js-\u4E2D\u6302\u8F7D" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token comment">// \u5F15\u5165\u8DEF\u7531</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token comment">// \u5F15\u5165\u72B6\u6001</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token comment">// \u5F15\u5165\u7EC4\u4EF6\u5E93\u4E0E\u5916\u6302</span>
<span class="token keyword">import</span> startup <span class="token keyword">from</span> <span class="token string">&#39;./components/startup.js&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>startup<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u8F93\u51FA\u65E5\u5FD7</span>
    log<span class="token operator">:</span> <span class="token punctuation">{</span> isPrint<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="app-vue-\u52A8\u6001\u54CD\u5E94" tabindex="-1">App.vue \u52A8\u6001\u54CD\u5E94 <a class="header-anchor" href="#app-vue-\u52A8\u6001\u54CD\u5E94" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u6CE8\u5165\u5230index.html &gt; #appTopBody --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#appTopBody<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- LoadingBar \u5168\u5C40\u52A0\u8F7D\u8FDB\u5EA6\u7EC4\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LoadingBar</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- Message \u5168\u5C40\u63D0\u793A\u901A\u77E5\u7EC4\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Message</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- router \u5168\u5C40\u8DEF\u7531 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#endOfBody<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Frames \u5168\u5C40\u6D6E\u52A8\u7A97\u53E3\u7EC4\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Frames</span> <span class="token attr-name">:mobile</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>frameMobile<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:specs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>frameSpecs<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//const $plus = window.$plus;</span>
    <span class="token comment">// const {ref} = window.$plus.vue;</span>

    <span class="token comment">// \u6D6E\u7A97\u521D\u59CB\u5316 \u662F\u5426\u5C0F\u5C4F\u5E55\u5C3A\u5BF8\uFF0C\u5168\u5C4F\u6253\u5F00</span>
    <span class="token keyword">const</span> frameMobile <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6D6E\u7A97\u57FA\u7840\u53C2\u6570\u914D\u7F6E</span>
    <span class="token keyword">const</span> frameSpecs <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      width<span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">,</span>
      height<span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onResize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9875\u9762\u57FA\u7840\u5B57\u4F53 \u7F29\u653E</span>
      <span class="token keyword">const</span> rem <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">fontRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token comment">// \u521D\u59CB\u5316 \u57FA\u7840\u5B57\u4F53\u5927\u5C0F</span>
      <span class="token function">fontSize</span><span class="token punctuation">(</span>rem<span class="token punctuation">.</span>fontSize<span class="token punctuation">)</span>

      <span class="token comment">// \u5C0F\u5C4F\u5E55\u5C3A\u5BF8\uFF0C\u5168\u5C4F\u6253\u5F00</span>
      frameMobile<span class="token punctuation">.</span>value <span class="token operator">=</span> rem<span class="token punctuation">.</span>offsetWidth <span class="token operator">&lt;</span> <span class="token number">1024</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span>

      <span class="token comment">// \u7A97\u4F53\u5BBD\u5EA6</span>
      frameSpecs<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
        width<span class="token operator">:</span> rem<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">,</span>
        height<span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// console.log(</span>
      <span class="token comment">//   &#39;App.frameSpecs:&#39; + frameMobile.value,</span>
      <span class="token comment">//   JSON.stringify(frameSpecs.value)</span>
      <span class="token comment">// );</span>
      <span class="token comment">// console.log(&#39;App.onResize:&#39; + frameMobile.value, rem);</span>
    <span class="token punctuation">}</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6267\u884C\u57FA\u7840\u5B57\u4F53\u7F29\u653E</span>
      <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// \u7A97\u53E3\u53D1\u751F\u53D8\u5316\u65F6</span>
      window<span class="token punctuation">.</span>onresize <span class="token operator">=</span> onResize
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> frameMobile<span class="token punctuation">,</span> frameSpecs <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><h2 id="\u5F15\u5165\u72EC\u7ACB\u7EC4\u4EF6" tabindex="-1">\u5F15\u5165\u72EC\u7ACB\u7EC4\u4EF6 <a class="header-anchor" href="#\u5F15\u5165\u72EC\u7ACB\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u5F15\u5165\u7EC4\u4EF6\u65B9\u5F0F</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;qvui&#39;</span>
Message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u586B\u5199\u5B8C\u6574&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u5168\u5C40\u53D8\u91CF\u65B9\u5F0F</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F15\u5165\u4E0A\u4E0B\u6587</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>$qve<span class="token punctuation">.</span>Message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u586B\u5199\u5B8C\u6574&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u7EC4\u4EF6\u540D" tabindex="-1">\u7EC4\u4EF6\u540D <a class="header-anchor" href="#\u7EC4\u4EF6\u540D" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  Icon<span class="token punctuation">,</span>
  Badge<span class="token punctuation">,</span>
  Tag<span class="token punctuation">,</span>
  Toolbar<span class="token punctuation">,</span>
  Card<span class="token punctuation">,</span>
  Tabs<span class="token punctuation">,</span>
  Input<span class="token punctuation">,</span>
  Textarea<span class="token punctuation">,</span>
  Textjson<span class="token punctuation">,</span>
  TextUbb<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  ButtonGroup<span class="token punctuation">,</span>
  Tooltip<span class="token punctuation">,</span>
  Select<span class="token punctuation">,</span>
  Poptip<span class="token punctuation">,</span>
  Switch<span class="token punctuation">,</span>
  Form<span class="token punctuation">,</span>
  Field<span class="token punctuation">,</span>
  LoadingBar<span class="token punctuation">,</span>
  Table<span class="token punctuation">,</span>
  Paged<span class="token punctuation">,</span>
  Tree<span class="token punctuation">,</span>
  TreeNode<span class="token punctuation">,</span>
  TreeJson<span class="token punctuation">,</span>
  TreeJsonItem<span class="token punctuation">,</span>
  Menu<span class="token punctuation">,</span>
  MenuItem<span class="token punctuation">,</span>
  Notice<span class="token punctuation">,</span>
  Frames<span class="token punctuation">,</span>
  HandleHeight<span class="token punctuation">,</span>
  HandleWidth<span class="token punctuation">,</span>
  Col<span class="token punctuation">,</span>
  Message<span class="token punctuation">,</span>
  Row<span class="token punctuation">,</span>
  <span class="token comment">/** \u5BF9\u8BDD\u6846 */</span>
  Modal<span class="token punctuation">,</span>
  <span class="token comment">/** \u53EF\u62D6\u5230\u6D6E\u7A97 */</span>
  Drag<span class="token punctuation">,</span>
  Checkbox<span class="token punctuation">,</span>
  Radio<span class="token punctuation">,</span>
  RadioGroup<span class="token punctuation">,</span>
  DatePanel<span class="token punctuation">,</span>
  DatePicker<span class="token punctuation">,</span>
  DateBar<span class="token punctuation">,</span>
  TimePicker<span class="token punctuation">,</span>
  ImgLazy<span class="token punctuation">,</span>
  ImgGlass<span class="token punctuation">,</span>
  Mask<span class="token punctuation">,</span>
  <span class="token comment">// CodeRun,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="\u7EC4\u4EF6\u89C4\u8303" tabindex="-1">\u7EC4\u4EF6\u89C4\u8303 <a class="header-anchor" href="#\u7EC4\u4EF6\u89C4\u8303" aria-hidden="true">#</a></h2><h3 id="emit-\u7EC4\u4EF6\u4E8B\u4EF6" tabindex="-1">emit \u7EC4\u4EF6\u4E8B\u4EF6 <a class="header-anchor" href="#emit-\u7EC4\u4EF6\u4E8B\u4EF6" aria-hidden="true">#</a></h3><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-cuo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btnClear<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/** \u7EC4\u4EF6\u81EA\u5B9A\u4E49\u547D\u540D */</span>
    named<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;my&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit<span class="token punctuation">,</span> attrs <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/** \u70B9\u51FB\u6E05\u9664\u4E8B\u4EF6 */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">btnClear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7EC4\u4EF6\u56DE\u8C03\u4E8B\u4EF6</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;onEvent&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        cmd<span class="token operator">:</span> <span class="token string">&#39;clear&#39;</span><span class="token punctuation">,</span>
        named<span class="token operator">:</span> props<span class="token punctuation">.</span>named<span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token string">&#39;\u4EA4\u4E92\u6570\u636E&#39;</span><span class="token punctuation">,</span>
        event<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> btnClear <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u4FBF\u4E8E\u901A\u7528\u4E8B\u4EF6\u76D1\u542C\u5904\u7406\uFF0C\u5EFA\u8BAE\u6309\u4E00\u4E0B\u65B9\u5F0F\u53D1\u9001\u4E8B\u4EF6\u4EA4\u4E92</p><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u503C</th></tr></thead><tbody><tr><td>onEvent</td><td>\u70B9\u51FB\u89E6\u53D1\u56DE\u8C03\u4E8B\u4EF6</td><td>json</td></tr><tr><td>cmd</td><td>\u6307\u4EE4\u7C7B\u522B</td><td>string</td></tr><tr><td>named</td><td>\u7EC4\u4EF6\u547D\u540D</td><td>string</td></tr><tr><td>data</td><td>\u4EA4\u4E92\u6570\u636E</td><td>string</td></tr><tr><td>event</td><td>\u89E6\u53D1\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u4F4D\u7F6E\u7B49</td><td>string</td></tr></tbody></table><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><ul><li>\u5982\u679C\u51FA\u73B0\u4EE5\u4E0B\u9519\u8BEF\uFF0C\u5219\u6267\u884C<code>node ./node_modules/esbuild/install.js</code>\u5B89\u88C5\u4E00\u4E2A esbuild.exe</li></ul><div class="language-js line-numbers-mode"><pre><code>events<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">292</span>
      <span class="token keyword">throw</span> er<span class="token punctuation">;</span> <span class="token comment">// Unhandled &#39;error&#39; event</span>
      <span class="token operator">^</span>

Error<span class="token operator">:</span> spawn <span class="token constant">E</span><span class="token operator">:</span>\\<span class="token constant">SVN</span>\\vue\\vite\\work\\branches\\<span class="token number">3.1</span><span class="token number">.5</span>\\node_modules\\esbuild\\esbuild<span class="token punctuation">.</span>exe <span class="token constant">ENOENT</span>
    at Process<span class="token punctuation">.</span>ChildProcess<span class="token punctuation">.</span>_handle<span class="token punctuation">.</span><span class="token function">onexit</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>child_process<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">269</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">)</span>
    at <span class="token function">onErrorNT</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>child_process<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">465</span><span class="token operator">:</span><span class="token number">16</span><span class="token punctuation">)</span>
    at <span class="token function">processTicksAndRejections</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>process<span class="token operator">/</span>task_queues<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">80</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">)</span>
    at Process<span class="token punctuation">.</span>ChildProcess<span class="token punctuation">.</span>_handle<span class="token punctuation">.</span><span class="token function">onexit</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>child_process<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">275</span><span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">)</span>
    at <span class="token function">onErrorNT</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>child_process<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">465</span><span class="token operator">:</span><span class="token number">16</span><span class="token punctuation">)</span>
    at <span class="token function">processTicksAndRejections</span> <span class="token punctuation">(</span><span class="token parameter">internal<span class="token operator">/</span>process<span class="token operator">/</span>task_queues<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">80</span><span class="token operator">:</span><span class="token number">21</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  errno<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">4058</span><span class="token punctuation">,</span>
  code<span class="token operator">:</span> <span class="token string">&#39;ENOENT&#39;</span><span class="token punctuation">,</span>
  syscall<span class="token operator">:</span> <span class="token string">&#39;spawn E:\\\\SVN\\\\vue\\\\vite\\\\work\\\\branches\\\\3.1.5\\\\node_modules\\\\esbuild\\\\esbuild.exe&#39;</span><span class="token punctuation">,</span>
  path<span class="token operator">:</span> <span class="token string">&#39;E:\\\\SVN\\\\vue\\\\vite\\\\work\\\\branches\\\\3.1.5\\\\node_modules\\\\esbuild\\\\esbuild.exe&#39;</span><span class="token punctuation">,</span>
  spawnargs<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;--service=0.9.7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;--ping&#39;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>__VP_STATIC_END__`,30),o=[e];function c(l,u,r,i,k,b){return s(),a("div",null,o)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};
