import{_ as n,o as s,c as a,a as p}from"./app.e2658e45.js";const d='{"title":"config \u7EC4\u4EF6\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"ui.config \u7EC4\u4EF6\u914D\u7F6E","slug":"ui-config-\u7EC4\u4EF6\u914D\u7F6E"},{"level":2,"title":"config \u52A8\u6001\u54CD\u5E94","slug":"config-\u52A8\u6001\u54CD\u5E94"},{"level":2,"title":"\u914D\u7F6E\u5168\u5C40\u5750\u6807 z-index","slug":"\u914D\u7F6E\u5168\u5C40\u5750\u6807-z-index"}],"relativePath":"ui/config.md","lastUpdated":1636215949360}',t={},e=p(`__VP_STATIC_START__<h1 id="config-\u7EC4\u4EF6\u914D\u7F6E" tabindex="-1">config \u7EC4\u4EF6\u914D\u7F6E <a class="header-anchor" href="#config-\u7EC4\u4EF6\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="ui-config-\u7EC4\u4EF6\u914D\u7F6E" tabindex="-1">ui.config \u7EC4\u4EF6\u914D\u7F6E <a class="header-anchor" href="#ui-config-\u7EC4\u4EF6\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li>0.4.1 <ul><li><code>fontSize</code></li></ul></li></ul><h2 id="config-\u52A8\u6001\u54CD\u5E94" tabindex="-1">config \u52A8\u6001\u54CD\u5E94 <a class="header-anchor" href="#config-\u52A8\u6001\u54CD\u5E94" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Frames \u5168\u5C40\u6D6E\u52A8\u7A97\u53E3\u7EC4\u4EF6 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Frames</span> <span class="token attr-name">:mobile</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>frameMobile<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:specs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>frameSpecs<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//const $plus = window.$plus;</span>
    <span class="token comment">// const {ref} = window.$plus.vue;</span>

    <span class="token comment">// \u6D6E\u7A97\u521D\u59CB\u5316 \u662F\u5426\u5C0F\u5C4F\u5E55\u5C3A\u5BF8\uFF0C\u5168\u5C4F\u6253\u5F00</span>
    <span class="token keyword">const</span> frameMobile <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6D6E\u7A97\u57FA\u7840\u53C2\u6570\u914D\u7F6E</span>
    <span class="token keyword">const</span> frameSpecs <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      width<span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">,</span>
      height<span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onResize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9875\u9762\u57FA\u7840\u5B57\u4F53 \u7F29\u653E</span>
      <span class="token keyword">const</span> rem <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">fontRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// \u521D\u59CB\u5316 \u57FA\u7840\u5B57\u4F53\u5927\u5C0F</span>
      <span class="token function">fontSize</span><span class="token punctuation">(</span>rem<span class="token punctuation">.</span>fontSize<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// \u5C0F\u5C4F\u5E55\u5C3A\u5BF8\uFF0C\u5168\u5C4F\u6253\u5F00</span>
      frameMobile<span class="token punctuation">.</span>value <span class="token operator">=</span> rem<span class="token punctuation">.</span>offsetWidth <span class="token operator">&lt;</span> <span class="token number">1024</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

      <span class="token comment">// \u7A97\u4F53\u5BBD\u5EA6</span>
      frameSpecs<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
        width<span class="token operator">:</span> rem<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">,</span>
        height<span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">// console.log(</span>
      <span class="token comment">//   &#39;App.frameSpecs:&#39; + frameMobile.value,</span>
      <span class="token comment">//   JSON.stringify(frameSpecs.value)</span>
      <span class="token comment">// );</span>
      <span class="token comment">// console.log(&#39;App.onResize:&#39; + frameMobile.value, rem);</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6267\u884C\u57FA\u7840\u5B57\u4F53\u7F29\u653E</span>
      <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u7A97\u53E3\u53D1\u751F\u53D8\u5316\u65F6</span>
      window<span class="token punctuation">.</span>onresize <span class="token operator">=</span> onResize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> frameMobile<span class="token punctuation">,</span> frameSpecs <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="\u914D\u7F6E\u5168\u5C40\u5750\u6807-z-index" tabindex="-1">\u914D\u7F6E\u5168\u5C40\u5750\u6807 z-index <a class="header-anchor" href="#\u914D\u7F6E\u5168\u5C40\u5750\u6807-z-index" aria-hidden="true">#</a></h2><blockquote><p>\u5168\u5C40\u7EDF\u4E00\u52A8\u6001\u8BA1\u7B97 z-index \u503C</p></blockquote><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/**
 * \u7EC4\u4EF6\u5E93\u914D\u7F6E
 */</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/** \u65E5\u5FD7\u914D\u7F6E */</span>
  log<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/** \u662F\u5426\u6253\u5370\u8F93\u51FA */</span>
    isPrint<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u7EC4\u4EF6\u914D\u7F6E */</span>
  ui<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/** \u5B57\u4F53\u9ED8\u8BA4\u5927\u5C0F */</span>
    fontSize<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u5168\u5C40\u7EC4\u4EF6\u6DF1\u5EA6 */</span>
    zIndex<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u624B\u673A\u7AEF</span>
    isMobile<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u6D88\u606F\u7EC4\u4EF6 */</span>
    message<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">/**\u5168\u5C40\u9ED8\u8BA4\u81EA\u52A8\u5173\u95ED\u65F6\u95F4 15\u5206\u4E4B\u4E00\u79D2 */</span>
      timeOut<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u62D6\u62FD\u7A97\u4F53 */</span>
    drag<span class="token operator">:</span> <span class="token punctuation">{</span>
      min<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6700\u5C0F\u9ED8\u8BA4\u5BBD\u5EA6</span>
        width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token comment">// \u9ED8\u8BA4\u9AD8\u5EA6</span>
        height<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u66F4\u65B0\u5168\u5C40\u914D\u7F6E
 * @param {object} opts \u9700\u8981\u66F4\u65B0\u7684json\u53C2\u6570\u6700\u591A3\u5C42
 */</span>
config<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//  console.log(opts, &#39;bindConfig&#39;);</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u5168\u5C40\u914D\u7F6E</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">in</span> opts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(p, &#39;bindConfig&#39;);</span>
      <span class="token comment">// \u67E5\u627E\u7B2C\u4E00\u5C42\u53D8\u91CF,\u662F\u5426\u662F\u5BF9\u8C61</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>json<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u67E5\u627E\u7B2C\u4E8C\u5C42\u53D8\u91CF,\u662F\u5426\u6709\u53D8\u91CF</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p2 <span class="token keyword">in</span> opts<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//  console.log(p2, &#39;bindConfig&#39;);</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>json<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u67E5\u627E\u7B2C\u4E09\u5C42\u53D8\u91CF,\u662F\u5426\u6709\u53D8\u91CF</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p3 <span class="token keyword">in</span> opts<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">//   console.log(p3, &#39;bindConfig&#39;);</span>
              config<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">[</span>p3<span class="token punctuation">]</span> <span class="token operator">=</span> opts<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">[</span>p3<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u66FF\u6362\u7B2C\u4E8C\u5C42\u53D8\u91CF</span>
            config<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">=</span> opts<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6DFB\u52A0\u65B0\u53D8\u91CF</span>
        config<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> opts<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u521D\u59CB\u5316\u5224\u65AD\u662F\u5426\u4E3A\u5C0F\u5C4F\u5E55\u8BBE\u5907</span>
  <span class="token comment">//config.ui.isMobile = document.body.clientWidth &lt; 1024;</span>
  <span class="token comment">// console.log(&#39;config.bind&#39;, opts);</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u5168\u5C40\u6D6E\u52A8\u5C42\u6DF1\u5EA6\u53E0\u52A0
 * @param {number} _value \u9ED8\u8BA4\u662F+1
 * @returns  ui.zIndex,\u6700\u9AD8999
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">zIndexAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  _value <span class="token operator">=</span> _value <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
  config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>zIndex <span class="token operator">+</span> _value<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>zIndex <span class="token operator">&gt;</span> <span class="token number">9999</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>zIndex<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u67E5\u8BE2\u914D\u7F6E\u662F\u5426\u5C0F\u5C4F\u5E55\u8BBE\u5907
 * @param {Boolean} _value \u8BBE\u7F6E\u662F\u5426\u5C0F\u5C4F\u5E55
 * @returns
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">isMobile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_value <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>isMobile <span class="token operator">=</span> _value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>isMobile<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u66F4\u65B0\u57FA\u7840\u5B57\u4F53\u5927\u5C0F
 * @param {Number} _value \u8BBE\u7F6E\u5B57\u4F53\u5927\u5C0F
 * @returns
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">fontSize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_value <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> _value<span class="token punctuation">;</span>

    config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>drag<span class="token punctuation">.</span>min <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6700\u5C0F\u9ED8\u8BA4\u5BBD\u5EA6</span>
      width<span class="token operator">:</span> _value <span class="token operator">*</span> <span class="token number">15</span><span class="token punctuation">,</span>
      <span class="token comment">// \u9ED8\u8BA4\u9AD8\u5EA6</span>
      height<span class="token operator">:</span> _value <span class="token operator">*</span> <span class="token number">1.6</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> config<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>fontSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> config<span class="token punctuation">,</span> zIndexAdd<span class="token punctuation">,</span> isMobile<span class="token punctuation">,</span> fontSize <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br></div></div>__VP_STATIC_END__`,8),o=[e];function c(l,u,i,r,k,b){return s(),a("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
