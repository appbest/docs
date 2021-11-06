import{_ as n,o as s,c as a,a as p}from"./app.e2658e45.js";const d='{"title":"Search \u641C\u7D22\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Search.plus \u641C\u7D22\u6E90\u6570\u636E","slug":"search-plus-\u641C\u7D22\u6E90\u6570\u636E"},{"level":2,"title":"\u7AD9\u5185\u641C\u7D22\u7EC4\u4EF6 search","slug":"\u7AD9\u5185\u641C\u7D22\u7EC4\u4EF6-search"}],"relativePath":"plugin/search.md","lastUpdated":1636215949452}',t={},e=p(`<h1 id="search-\u641C\u7D22\u7EC4\u4EF6" tabindex="-1">Search \u641C\u7D22\u7EC4\u4EF6 <a class="header-anchor" href="#search-\u641C\u7D22\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u5C06\u4F1A\u6839\u636E md \u6587\u6863\u6807\u9898\u751F\u6210\u641C\u7D22\u6570\u636E\u6E90\uFF0C\u652F\u6301\u591A\u7EA7\u8DEF\u5F84\u641C\u7D22\u3002 \u6682\u65F6\u4E0D\u652F\u6301\u5185\u5BB9\u5168\u6587\u68C0\u7D22\u3002</p><h2 id="search-plus-\u641C\u7D22\u6E90\u6570\u636E" tabindex="-1">Search.plus \u641C\u7D22\u6E90\u6570\u636E <a class="header-anchor" href="#search-plus-\u641C\u7D22\u6E90\u6570\u636E" aria-hidden="true">#</a></h2><ul><li>\u901A\u8FC7\u542F\u7528\u914D\u7F6E\u5F15\u5165\u914D\u7F6E\u6587\u4EF6<code>plus.js</code> \u521B\u5EFA <code>keywords.json</code> \u641C\u7D22\u6570\u636E\u6E90</li></ul><div class="warning custom-block"><p class="custom-block-title">\u7279\u522B\u6CE8\u610F</p><p>root.base \u90E8\u7F72\u5230\u4E8C\u7EA7\u5730\u5740\uFF0C\u6D4B\u8BD5\u65F6\u6CE8\u610F\u6B64\u8DEF\u5F84</p></div><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/**
 * \u5168\u7AD9\u8DEF\u5F84\u914D\u7F6E 0.1.2
 */</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/** \u90E8\u7F72\u7684\u4E8C\u7EA7\u5730\u5740 */</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/docs&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u641C\u7D22\u7684\u6587\u4EF6\u540D\u5730\u5740\uFF0C\u9ED8\u8BA4\u662F\u6839\u76EE\u5F55\u4E0B,\u4E0ELayout.vue \u641C\u7D22\u6570\u636E\u6E90\u540C\u6B65</span>
  keyword<span class="token operator">:</span> <span class="token string">&#39;\\\\keywords.json&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/** \u5F53\u524D\u9879\u76EE\u6839\u76EE\u5F55\u5730\u5740 */</span>
  path<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u9876\u90E8\u5BFC\u822A
 */</span>
<span class="token keyword">const</span> nav <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;\u4E3B\u9875&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;\u6307\u5357&#39;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;\u66F4\u591A&#39;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    items<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;IconFont \u56FE\u6807&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/fonts/demo_index.html?v=0.2&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;\u7801\u4E91&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;https://gitee.com/qve/docs&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Github&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;https://github.com/appbest/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;NPM lib&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;https://www.npmjs.com/package/quick.lib&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u5DE6\u4FA7\u5BFC\u822A\u5206\u7C7B
 */</span>
<span class="token keyword">let</span> sidebar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;/guide/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&#39;\u4ECB\u7ECD&#39;</span><span class="token punctuation">,</span>
      link<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&#39;h5&#39;</span><span class="token punctuation">,</span>
      link<span class="token operator">:</span> <span class="token string">&#39;h5/index&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4E8C\u7EA7\u8DEF\u5F84</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&#39;\u539F\u751F\u4ECB\u7ECD&#39;</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u6839\u76EE\u8DEF\u5F84
 * @param {*} dir \u6307\u5B9A\u7684\u8DEF\u5F84
 * @returns \u8FD4\u56DE\u5B8C\u6574\u8DEF\u5F84
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F53\u524D\u9879\u76EE\u76EE\u5F55</span>
root<span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;../../&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u8DEF\u5F84\u8865\u5168\u5904\u7406
 * @param {*} data \u4FA7\u8FB9\u680F
 * @returns
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">pathJoin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _sidebar <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8DEF\u5F84\u5904\u7406</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// let _key = k != &#39;/&#39; ? root.base + k : k;</span>
    <span class="token comment">// console.log(&#39;sidebar&#39;, k);</span>
    data<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(&#39;sidebar.&#39; + k, e);</span>
      <span class="token comment">// \u8865\u5145\u8DEF\u5F84</span>
      e<span class="token punctuation">.</span>link <span class="token operator">=</span> k <span class="token operator">+</span> e<span class="token punctuation">.</span>link<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6709\u4E0B\u7EA7</span>
        <span class="token keyword">let</span> _chpath <span class="token operator">=</span> e<span class="token punctuation">.</span>link<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">index$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        e<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8865\u5145\u8DEF\u5F84</span>
          item<span class="token punctuation">.</span>link <span class="token operator">=</span> _chpath <span class="token operator">+</span> item<span class="token punctuation">.</span>link<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    _sidebar<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> _sidebar<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

sidebar <span class="token operator">=</span> <span class="token function">pathJoin</span><span class="token punctuation">(</span>sidebar<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//console.log(&#39;sidebar&#39;, sidebar);</span>

<span class="token comment">/**
 * \u521D\u59CB\u5316\u9875\u9762\u7684\u641C\u7D22\u6570\u636E
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> KeywordInit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;quick-plugin-md/search/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">KeywordInit</span><span class="token punctuation">(</span>sidebar<span class="token punctuation">,</span> root<span class="token punctuation">.</span>keyword<span class="token punctuation">,</span> root<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//console.log(sidebar);</span>

<span class="token comment">/**
 * markdown-it \u5916\u6302
 * @param {*} md \u5BF9\u8C61
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">usePlus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// use more markdown-it plugins!</span>
  md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;quick-plugin-md/language/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u65E0\u9700\u6807\u7B7E\u6839\u636E\u7B2C\u4E00\u884C\u4EE3\u7801\u81EA\u52A8\u8F6C\u4E3A\u56FE\u5F62\u7EC4\u4EF6</span>
    <span class="token comment">// tags: [&#39;gitGraph&#39;, &#39;classDiagram&#39;, &#39;sequenceDiagram&#39;, &#39;gantt&#39;],</span>
    <span class="token comment">// /** \u9ED8\u8BA4\u6807\u7B7E*/</span>
    <span class="token comment">// default: &#39;mermaid&#39;,</span>
    <span class="token comment">// // \u8F93\u51FA\u65E5\u5FD7</span>
    <span class="token comment">// log: true,</span>
    <span class="token comment">// // \u81EA\u5B9A\u4E49markdown\u6807\u7B7E\u5BF9\u5E94\u8F6C\u6362\u7684\u6A21\u677F\u7EC4\u4EF6\u540D</span>
    <span class="token comment">// template: {</span>
    <span class="token comment">//   // mermaid \u6807\u7B7E\u8F6C\u4E3A \u7EC4\u4EF6\u5B9A\u4E49</span>
    <span class="token comment">//   // mermaid: &#39;&lt;mermaid code=&quot;{code}&quot;&gt;&lt;/mermaid&gt;&#39;,</span>
    <span class="token comment">//   mermaid: &#39;&lt;mermaid&gt;{code}&lt;/mermaid&gt;&#39;,</span>
    <span class="token comment">//   pie: &#39;&lt;PieCode&gt;{code}&lt;/PieCode&gt;&#39;,</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> resolve<span class="token punctuation">,</span> usePlus<span class="token punctuation">,</span> root<span class="token punctuation">,</span> nav<span class="token punctuation">,</span> sidebar <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br></div></div><h2 id="\u7AD9\u5185\u641C\u7D22\u7EC4\u4EF6-search" tabindex="-1">\u7AD9\u5185\u641C\u7D22\u7EC4\u4EF6 search <a class="header-anchor" href="#\u7AD9\u5185\u641C\u7D22\u7EC4\u4EF6-search" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#sidebar-top</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u641C\u7D22 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">@onEvent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SearchEvent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:words</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keywords<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span> useSiteData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/dist/client/theme-default/index.js&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//import { Layout } from &#39;vitepress/dist/client/theme-default/index.js&#39;;</span>
<span class="token keyword">const</span> Layout <span class="token operator">=</span> theme<span class="token punctuation">.</span>Layout<span class="token punctuation">;</span>

<span class="token comment">/**
 * \u641C\u7D22\u6839\u76EE\u4E0B\u7684\u5168\u5C40\u6570\u636E\uFF0C\u4E0Eplus\u914D\u7F6E\u4E00\u81F4
 */</span>
<span class="token keyword">import</span> keywords <span class="token keyword">from</span> <span class="token string">&#39;@/keywords.json&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> siteData <span class="token operator">=</span> <span class="token function">useSiteData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/** \u8DEF\u7531 */</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/** \u641C\u7D22\u4E8B\u4EF6\u89E6\u53D1 */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">SearchEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53D1\u5E03\u6839\u76EE\u5F55</span>
      <span class="token keyword">let</span> _url <span class="token operator">=</span> siteData<span class="token punctuation">.</span>value<span class="token punctuation">.</span>base <span class="token operator">+</span> data<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// let _url = data.url;</span>
      <span class="token comment">//  console.log(&#39;SearchEvent\uFF1A&#39; + siteData.value.base, _url);</span>
      <span class="token comment">// \u8DEF\u7531\u8DF3\u8F6C</span>
      router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span>_url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> keywords<span class="token punctuation">,</span> SearchEvent <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><ul><li>props</li></ul><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>words</td><td>\u641C\u7D22\u6570\u636E\u6E90</td><td>String</td><td></td></tr></tbody></table>`,10),o=[e];function c(l,u,r,i,k,b){return s(),a("div",null,o)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};
