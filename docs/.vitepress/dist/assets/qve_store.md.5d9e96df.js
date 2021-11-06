import{_ as n,o as s,c as a,a as p}from"./app.e2658e45.js";const d='{"title":"store \u5168\u5C40\u72B6\u6001","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6CE8\u5165\u7528\u6237 Inject","slug":"\u6CE8\u5165\u7528\u6237-inject"},{"level":2,"title":"vue 3.x \u5F15\u5165 createStore","slug":"vue-3-x-\u5F15\u5165-createstore"},{"level":2,"title":"vue 2.x provideStore","slug":"vue-2-x-providestore"},{"level":2,"title":"store \u5168\u5C40\u72B6\u6001","slug":"store-\u5168\u5C40\u72B6\u6001-1"}],"relativePath":"qve/store.md","lastUpdated":1636215949245}',e={},t=p(`<h1 id="store-\u5168\u5C40\u72B6\u6001" tabindex="-1">store \u5168\u5C40\u72B6\u6001 <a class="header-anchor" href="#store-\u5168\u5C40\u72B6\u6001" aria-hidden="true">#</a></h1><ul><li><p><a href="./../guide/h5/es6.html#symbol">\u539F\u59CB\u6570\u636E\u7C7B\u578B symbol</a> \u4FDD\u8BC1\u5168\u5C40\u552F\u4E00</p></li><li><p><a href="https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html" target="_blank" rel="noopener noreferrer">\u63D0\u4F9B Provide / \u6CE8\u5165 Inject</a></p></li></ul><h2 id="\u6CE8\u5165\u7528\u6237-inject" tabindex="-1">\u6CE8\u5165\u7528\u6237 Inject <a class="header-anchor" href="#\u6CE8\u5165\u7528\u6237-inject" aria-hidden="true">#</a></h2><ul><li>\u5C40\u90E8\u4F7F\u7528</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5F15\u5165\u5168\u5C40\u72B6\u6001</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../store&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5916\u6302\u5199\u6CD5</span>
    <span class="token comment">//  const { useGlobalStore } = window.$plus.store;</span>
    <span class="token comment">//\u8C03\u7528 inject \u51FD\u6570\u65F6\uFF0C\u901A\u8FC7\u6307\u5B9A\u7684\u6570\u636E\u540D\u79F0\uFF0C\u83B7\u53D6\u5230\u7236\u7EA7\u5171\u4EAB\u7684\u6570\u636E</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;place:&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="vue-3-x-\u5F15\u5165-createstore" tabindex="-1">vue 3.x \u5F15\u5165 createStore <a class="header-anchor" href="#vue-3-x-\u5F15\u5165-createstore" aria-hidden="true">#</a></h2><ul><li>main.js</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5168\u5C40\u72B6\u6001\u5F15\u5165</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="vue-2-x-providestore" tabindex="-1">vue 2.x provideStore <a class="header-anchor" href="#vue-2-x-providestore" aria-hidden="true">#</a></h2><ul><li><p>main.js \u65E0\u9700\u5F15\u5165 createStore</p></li><li><p>App.vue \u8FDB\u884C\u5168\u5C40\u6CE8\u5165 provideStore</p></li></ul><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u5168\u5C40\u6CE8\u5165</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> provideStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  provide<span class="token operator">:</span> provideStore<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="store-\u5168\u5C40\u72B6\u6001-1" tabindex="-1">store \u5168\u5C40\u72B6\u6001 <a class="header-anchor" href="#store-\u5168\u5C40\u72B6\u6001-1" aria-hidden="true">#</a></h2><ul><li>src/store/index.js</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/vue.api.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModel<span class="token punctuation">,</span> UserModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./models.js&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u5168\u5C40\u5173\u952E\u5B57
 */</span>
<span class="token keyword">const</span> StoreSymbol <span class="token operator">=</span> <span class="token string">&#39;global-store&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//const StoreSymbol = Symbol ? Symbol(&#39;global-store&#39;) : &#39;global-store&#39;;</span>

<span class="token comment">/**
 * \u5168\u5C40\u5E94\u7528\u5BF9\u8C61
 */</span>
<span class="token keyword">const</span> StateModel <span class="token operator">=</span> <span class="token punctuation">{</span> app<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AppModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> user<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">UserModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * vue 3 \u521B\u5EFA\u5168\u5C40\u72B6\u6001
 * app.use(createStore())
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">createStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(&#39;createStore&#39;, &#39;Store&#39;);</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u521D\u59CB\u5316\uFF0C\u7528\u6237\u5BF9\u8C61</span>
      <span class="token comment">// console.log(&#39;install Store&#39;, StateModel);</span>

      <span class="token comment">// \u5168\u5C40\u7ED1\u5B9A</span>
      app<span class="token punctuation">.</span>provide <span class="token operator">?</span> app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span>StoreSymbol<span class="token punctuation">,</span> StateModel<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token comment">//provide(StoreSymbol, StateModel);</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * App.vue\u6CE8\u518C\u5168\u5C40\u5BF9\u8C61\u72B6\u6001,vue 2.x
 * @returns
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">provideStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  data<span class="token punctuation">[</span>StoreSymbol<span class="token punctuation">]</span> <span class="token operator">=</span> StateModel<span class="token punctuation">;</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u53D6\u51FA\u5168\u5C40\u72B6\u6001
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useGlobalStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">inject</span><span class="token punctuation">(</span>StoreSymbol<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u83B7\u53D6\u5168\u5C40\u7528\u6237\u4FE1\u606F
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useGlobalUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> store<span class="token punctuation">.</span>user <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u83B7\u53D6\u5168\u5C40\u5E94\u7528\u4FE1\u606F
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useGlobalApp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> store<span class="token punctuation">.</span>app <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  createStore<span class="token punctuation">,</span>
  provideStore<span class="token punctuation">,</span>
  StateModel<span class="token punctuation">,</span>
  useGlobalStore<span class="token punctuation">,</span>
  useGlobalUser<span class="token punctuation">,</span>
  useGlobalApp<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div>`,14),o=[t];function c(l,r,u,i,k,b){return s(),a("div",null,o)}var v=n(e,[["render",c]]);export{d as __pageData,v as default};
