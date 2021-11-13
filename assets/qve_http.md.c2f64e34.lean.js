import{_ as n,o as s,c as a,a as p}from"./app.7408f20e.js";const d='{"title":"http","description":"","frontmatter":{},"headers":[{"level":2,"title":"Api \u8BF7\u6C42","slug":"api-\u8BF7\u6C42"},{"level":2,"title":"CRUD \u589E\u5220\u6539\u67E5","slug":"crud-\u589E\u5220\u6539\u67E5"},{"level":2,"title":"http get","slug":"http-get"},{"level":2,"title":"http \u7EC4\u4EF6\u6302\u8F7D","slug":"http-\u7EC4\u4EF6\u6302\u8F7D"},{"level":2,"title":"FromBody","slug":"frombody"}],"relativePath":"qve/http.md","lastUpdated":1636605062731}',t={},e=p(`__VP_STATIC_START__<h1 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-hidden="true">#</a></h1><h2 id="api-\u8BF7\u6C42" tabindex="-1">Api \u8BF7\u6C42 <a class="header-anchor" href="#api-\u8BF7\u6C42" aria-hidden="true">#</a></h2><ul><li><p><a href="https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0" target="_blank" rel="noopener noreferrer">webApi \u89C4\u8303</a></p></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type" target="_blank" rel="noopener noreferrer">Content-Type</a></p></li></ul><h2 id="crud-\u589E\u5220\u6539\u67E5" tabindex="-1">CRUD \u589E\u5220\u6539\u67E5 <a class="header-anchor" href="#crud-\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a></h2><p>\u914D\u5408\u540E\u53F0\u7AEF\u8BF7\u6C42</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>$plus<span class="token punctuation">;</span>

<span class="token comment">// \u9ED8\u8BA4\u662F get</span>
<span class="token keyword">let</span> pars <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&#39;api url \u5730\u5740&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    user<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// data.cmd \u540E\u7AEF\u5B9A\u4E49\u64CD\u4F5C\u6307\u4EE4\uFF0C\u4E0D\u662F\u5FC5\u987B\uFF0C</span>

<span class="token comment">// \u540E\u7AEF\u5220\u9664 HttpDelete</span>
<span class="token comment">// pars.method = &#39;delete&#39;</span>
<span class="token comment">// pars.data.cmd: &#39;erase&#39;  //\u4E0D\u662F\u5FC5\u987B</span>

<span class="token comment">// HttpPost \u65B0\u589E</span>
<span class="token comment">// pars.method = &#39;post&#39;;</span>
<span class="token comment">// pars.data.cmd: &#39;add&#39;  //\u65B0\u589E\u6307\u4EE4</span>
<span class="token comment">// pars.data.cmd: &#39;del&#39;  //\u5220\u9664\u6307\u4EE4</span>
<span class="token comment">// pars.data.cmd: &#39;audit&#39;  //\u6807\u51C6\u5BA1\u6838\u6307\u4EE4</span>
<span class="token comment">// pars.data.cmd: &#39;resc&#39;  //\u64A4\u9500\u5BA1\u6838\u6307\u4EE4</span>

<span class="token comment">// HttpPut \u66F4\u65B0\u6570\u636E</span>
<span class="token comment">// pars.method = &#39;put&#39;;</span>

<span class="token comment">// PATCH \u5C40\u90E8\u66F4\u65B0\uFF0C\u540E\u7AEF\u672A\u542F\u7528</span>
<span class="token comment">// pars.method = &#39;patch&#39;;</span>

<span class="token function">http</span><span class="token punctuation">(</span>pars<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;http.error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="http-get" tabindex="-1">http get <a class="header-anchor" href="#http-get" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>$plus<span class="token punctuation">;</span>
<span class="token comment">// \u540E\u7AEF\u67E5\u8BE2\u53C2\u6570</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  tpl<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  where<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      q<span class="token operator">:</span> <span class="token string">&#39;&gt;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// get \u8BF7\u6C42\u8F6C\u6362</span>
data<span class="token punctuation">.</span>where <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>where<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  data
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;http.error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="http-\u7EC4\u4EF6\u6302\u8F7D" tabindex="-1">http \u7EC4\u4EF6\u6302\u8F7D <a class="header-anchor" href="#http-\u7EC4\u4EF6\u6302\u8F7D" aria-hidden="true">#</a></h2><ul><li>index.js</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/** \u5F15\u5165\u9879\u76EE\u7EC4\u4EF6\u5E93 */</span>
<span class="token keyword">import</span> qve <span class="token keyword">from</span> <span class="token string">&#39;qve&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BF7\u6C42\u5730\u5740\u914D\u7F6E</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> url <span class="token keyword">from</span> <span class="token string">&#39;../router/url.js&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F15\u5165{request:\u7F51\u7EDC\u8BF7\u6C42,fail:\u5931\u8D25}</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> request<span class="token punctuation">,</span> fail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils/request.js&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * vue \u7EC4\u4EF6\u6302\u8F7D
 * @param {*} app
 * @param {*} opts
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  opts <span class="token operator">=</span> opts <span class="token operator">||</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u8F93\u51FA\u65E5\u5FD7</span>
    log<span class="token operator">:</span> <span class="token punctuation">{</span> isPrint<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5916\u6302</span>
    plus<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u521D\u59CB\u5316\u539F\u751F\u51FD\u6570\u6269\u5C55</span>
    init<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5F15\u5165\u9879\u76EE\u5E93</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>qve<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>opts<span class="token punctuation">,</span>
    config<span class="token operator">:</span> <span class="token punctuation">{</span>
      app<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// http\u8BA4\u8BC1\u7684\u5E94\u7528key &#39;0001&#39;,</span>
        key<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// http\u8BA4\u8BC1\u7684\u5E94\u7528Key \u5BF9\u5E94\u7684\u6388\u6743\u9A8C\u8BC1\u7801</span>
        secret<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      http<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/** \u8BF7\u6C42\u914D\u7F6E */</span>
        setting<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8DE8\u57DF\u65F6\u662F\u5426\u53D1\u9001cookie</span>
          withCredentials<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

          baseURL<span class="token operator">:</span> url<span class="token punctuation">.</span>host<span class="token punctuation">.</span>base <span class="token comment">// \u914D\u7F6E\u670D\u52A1\u5668\u5730\u5740</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BF7\u6C42\u5E93</span>
        request<span class="token punctuation">,</span>
        <span class="token comment">// \u8BF7\u6C42\u5931\u8D25\u5904\u7406</span>
        fail
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   *  \u521D\u59CB\u5316 index.html \u5916\u6302\u914D\u7F6E\u53C2\u6570
   *  var $appInitConfig={host:{base:&#39;&#39;}}
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">initConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_InitConfig</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_InitConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;$appInitConfig&#39;</span><span class="token punctuation">,</span> _InitConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u81EA\u5B9A\u4E49\u670D\u52A1\u5668\u5730\u5740 url</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_InitConfig<span class="token punctuation">.</span>host<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> _InitConfig<span class="token punctuation">.</span>host<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          url<span class="token punctuation">.</span>host<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> _InitConfig<span class="token punctuation">.</span>host<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">/** \u5916\u90E8\u7EC4\u4EF6\u6302\u8F7D  */</span>
  <span class="token function">initConfig</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>$appInitConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5BFC\u51FA\u9879\u76EE\u7EC4\u4EF6\u5E93
 */</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;qve&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BFC\u51FA\u8BE5\u7EC4\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  install
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><ul><li>url \u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> host <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u6570\u636E\u8BF7\u6C42\u670D\u52A1\u5668\u5730\u5740process.<wbr>env.BASE_API
   */</span>
  base<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">/** \u63A8\u9001\u670D\u52A1\u5668 */</span>
  io<span class="token operator">:</span> <span class="token string">&#39;wss://io.apwlan.com&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F00\u53D1\u73AF\u5883\u6D4B\u8BD5\u670D\u52A1\u5668</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  host<span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token string">&#39;http://localhost:5000&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> host <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="frombody" tabindex="-1">FromBody <a class="header-anchor" href="#frombody" aria-hidden="true">#</a></h2><ul><li><p>webapi <code>[FromBody]string value</code> \u83B7\u53D6\u4E0D\u5230 ajax post \u7684\u6570\u636E\u7684\u89E3\u51B3\u65B9\u6CD5</p></li><li><p>post \u8BF7\u6C42\u5B57\u7B26\u4E32</p></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token function">http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span><span class="token string">&#39;&quot;\u4F60\u597D&quot;&#39;</span> <span class="token comment">//\u5173\u952E\u662F\u5185\u5BB9\u9700\u8981\u52A0\u5F15\u53F7</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  headers<span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\u90E8</span>
    <span class="token string">&#39;content-type&#39;</span><span class="token operator">:</span><span class="token string">&#39;application/json;charset=utf-8&#39;</span>
    <span class="token comment">// &quot;content-type&quot;: &quot;text/plain&quot;</span>
    <span class="token comment">// &#39;content-type&#39;: &#39;application/x-www-form-urlencoded; charset=UTF-8&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resp</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;resp&#39;</span><span class="token punctuation">,</span> resp<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>__VP_STATIC_END__`,16),o=[e];function c(l,r,u,i,k,b){return s(),a("div",null,o)}var h=n(t,[["render",c]]);export{d as __pageData,h as default};
