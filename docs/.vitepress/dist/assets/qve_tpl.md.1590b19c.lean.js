import{_ as n,o as s,c as a,a as p}from"./app.e2658e45.js";const d='{"title":"TPL \u6570\u636E\u7EC4\u4EF6\u6A21\u677F","description":"","frontmatter":{},"headers":[{"level":2,"title":"tpl \u7EC4\u4EF6\u53C2\u6570","slug":"tpl-\u7EC4\u4EF6\u53C2\u6570"},{"level":2,"title":"tpl.attr \u7EC4\u4EF6\u89C4\u5219","slug":"tpl-attr-\u7EC4\u4EF6\u89C4\u5219"},{"level":2,"title":"attr.k eventKey \u70B9\u51FB\u89E6\u53D1","slug":"attr-k-eventkey-\u70B9\u51FB\u89E6\u53D1"},{"level":2,"title":"attr.j \u5916\u952E\u7D22\u5F15\u5B57\u6BB5","slug":"attr-j-\u5916\u952E\u7D22\u5F15\u5B57\u6BB5"},{"level":2,"title":"attr.c \u81EA\u5B9A\u4E49\u7EC4\u4EF6","slug":"attr-c-\u81EA\u5B9A\u4E49\u7EC4\u4EF6"}],"relativePath":"qve/tpl.md","lastUpdated":1636215949249}',t={},e=p(`__VP_STATIC_START__<h1 id="tpl-\u6570\u636E\u7EC4\u4EF6\u6A21\u677F" tabindex="-1">TPL \u6570\u636E\u7EC4\u4EF6\u6A21\u677F <a class="header-anchor" href="#tpl-\u6570\u636E\u7EC4\u4EF6\u6A21\u677F" aria-hidden="true">#</a></h1><h2 id="tpl-\u7EC4\u4EF6\u53C2\u6570" tabindex="-1">tpl \u7EC4\u4EF6\u53C2\u6570 <a class="header-anchor" href="#tpl-\u7EC4\u4EF6\u53C2\u6570" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> testTpl <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//  \u662F\u5426\u4ECE\u670D\u52A1\u5668\u53D6\u6A21\u677F\u67E5\u8BE2\u53C2\u6570</span>
  isHttp<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  tpl<span class="token operator">:</span> <span class="token punctuation">{</span>
    sql<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    field<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token constant">ID</span><span class="token operator">:</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>
      Code<span class="token operator">:</span> <span class="token string">&#39;\u7D22\u5F15\u7F16\u7801&#39;</span><span class="token punctuation">,</span>
      App_ID<span class="token operator">:</span> <span class="token string">&#39;\u5E94\u7528ID&#39;</span><span class="token punctuation">,</span>
      PageType<span class="token operator">:</span> <span class="token string">&#39;\u7C7B\u522B&#39;</span><span class="token punctuation">,</span>
      State<span class="token operator">:</span> <span class="token string">&#39;\u9875\u9762\u72B6\u6001&#39;</span><span class="token punctuation">,</span>
      Path<span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u6C42\u8DEF\u5F84&#39;</span><span class="token punctuation">,</span>
      Title<span class="token operator">:</span> <span class="token string">&#39;\u9875\u9762\u6807\u9898&#39;</span><span class="token punctuation">,</span>
      Description<span class="token operator">:</span> <span class="token string">&#39;\u529F\u80FD\u8BF4\u660E&#39;</span><span class="token punctuation">,</span>
      MenuTitle<span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355\u6807\u9898&#39;</span><span class="token punctuation">,</span>
      MenuIcon<span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355\u56FE\u6807&#39;</span><span class="token punctuation">,</span>
      MenuOpen<span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355\u6253\u5F00\u6A21\u5F0F&#39;</span><span class="token punctuation">,</span>
      CodeLang<span class="token operator">:</span> <span class="token string">&#39;\u4EE3\u7801\u8BED\u8A00&#39;</span><span class="token punctuation">,</span>
      CodeVersion<span class="token operator">:</span> <span class="token string">&#39;\u4EE3\u7801\u7248\u672C&#39;</span><span class="token punctuation">,</span>
      CodeTime<span class="token operator">:</span> <span class="token string">&#39;\u4EE3\u7801\u66F4\u65B0&#39;</span><span class="token punctuation">,</span>
      CodeSource<span class="token operator">:</span> <span class="token string">&#39;\u6E90\u4EE3\u7801&#39;</span><span class="token punctuation">,</span>
      CodeCompile<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8BD1\u4EE3\u7801&#39;</span><span class="token punctuation">,</span>
      <span class="token constant">SF_ID</span><span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91\u72B6\u6001&#39;</span><span class="token punctuation">,</span>
      MUser_ID<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91\u8005&#39;</span><span class="token punctuation">,</span>
      U_Time<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u524D\u7AEF\u81EA\u5B9A\u4E49\u5916\u952E\u67E5\u8BE2</span>
    join<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">//join: {&quot;MUser_ID&quot;:{&quot;table&quot;:&quot;QF_User&quot;,&quot;title&quot;:&quot;LastFirst&quot;}}</span>
    <span class="token comment">// join: [</span>
    <span class="token comment">//   {</span>
    <span class="token comment">//     tField: &#39;QF_Group_ID&#39;,</span>
    <span class="token comment">//     cTable: &#39;AP10000DB.[dbo].[QF_Group]&#39;,</span>
    <span class="token comment">//     cTitle: &#39;NameShort&#39;</span>
    <span class="token comment">//   }</span>
    <span class="token comment">// ],</span>
    attr<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;Int64&#39;</span><span class="token punctuation">,</span>
        pk<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        r<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      Code<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      App_ID<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;Int32&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
        c<span class="token operator">:</span> <span class="token string">&#39;panel&#39;</span><span class="token punctuation">,</span>
        api<span class="token operator">:</span> <span class="token string">&#39;/Api/QF_Group/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      PageType<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;Int32&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
        ls<span class="token operator">:</span> <span class="token string">&#39;1:api\u63A5\u53E3,2:menu\u83DC\u5355,3:vue\u7EC4\u4EF6,5:html&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      State<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;Int32&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
        ls<span class="token operator">:</span> <span class="token string">&#39;1:\u6682\u505C,2:\u542F\u7528,3:\u505C\u7528,4:\u5220\u9664&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      Path<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">2147483647</span><span class="token punctuation">,</span>
        tip<span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u6C42\u65F6\u8FDB\u884C\u6743\u9650\u9A8C\u8BC1&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      Title<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      Description<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        w<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      MenuTitle<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        d<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      MenuIcon<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      MenuOpen<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      CodeLang<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      CodeVersion<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;0.0.1&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      CodeTime<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;DateTime&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;getdate()&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      CodeSource<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        g<span class="token operator">:</span> <span class="token string">&#39;encode&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">2147483647</span><span class="token punctuation">,</span>
        h<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        c<span class="token operator">:</span> <span class="token string">&#39;code&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      CodeCompile<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">2147483647</span><span class="token punctuation">,</span>
        h<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token constant">SF_ID</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;Int32&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
        r<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        e<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      MUser_ID<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;Int64&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
        r<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        e<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      U_Time<span class="token operator">:</span> <span class="token punctuation">{</span>
        t<span class="token operator">:</span> <span class="token string">&#39;DateTime&#39;</span><span class="token punctuation">,</span>
        n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token string">&#39;getdate()&#39;</span><span class="token punctuation">,</span>
        r<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        e<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6309\u94AE\u6743\u9650\u53C2\u6570</span>
    act<span class="token operator">:</span> <span class="token string">&#39;1,2,3,4,5,6,7&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u952E</span>
    keys<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E3B\u952E</span>
      primary<span class="token operator">:</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5BA1\u6838\u5B57\u6BB5</span>
      auth<span class="token operator">:</span> <span class="token string">&#39;SF_ID&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u6392\u5E8F</span>
    sort<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    th<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5217\u8868\u754C\u9762\u914D\u7F6E</span>
    listor<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7F16\u8F91\u7A97\u4F53\u914D\u7F6E</span>
    editor<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br></div></div><h2 id="tpl-attr-\u7EC4\u4EF6\u89C4\u5219" tabindex="-1">tpl.attr \u7EC4\u4EF6\u89C4\u5219 <a class="header-anchor" href="#tpl-attr-\u7EC4\u4EF6\u89C4\u5219" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u5217\u8868\u63A7\u4EF6</th><th>\u7F16\u8F91\u63A7\u4EF6</th></tr></thead><tbody><tr><td>h</td><td>\u63A7\u4EF6\u8868\u5934\u5B57\u6BB5\u4E0D\u663E\u793A,1</td><td>Number</td><td>-</td><td></td></tr><tr><td>a</td><td>\u5185\u5BB9\u9700\u5BA1\u6838\u5B57\u6BB5\u6807\u8BC6,1</td><td>Number</td><td></td><td></td></tr><tr><td>e</td><td>\u5217\u8868\u6269\u5C55\u663E\u793A,1</td><td>Number</td><td></td><td></td></tr><tr><td>r</td><td>\u53EA\u8BFB,1</td><td>Number</td><td></td><td></td></tr><tr><td>n</td><td>\u5FC5\u586B\u5B57\u6BB5,\u975E\u7A7A\u683C</td><td>Boolean</td><td></td><td></td></tr><tr><td>v</td><td>\u65B0\u589E\u9ED8\u8BA4\u503C,<code>\u6CDB\u578B</code></td><td></td><td></td><td></td></tr><tr><td>t</td><td>\u6570\u636E\u5E93\u5B57\u6BB5\u7C7B\u578B</td><td>String</td><td></td><td></td></tr><tr><td>ls</td><td>\u591A\u9009\u9879</td><td>Number</td><td></td><td></td></tr><tr><td>tip</td><td>\u5185\u5BB9\u63D0\u793A</td><td>Number</td><td></td><td>\uFF1F</td></tr><tr><td>max</td><td>\u8F93\u5165\u5185\u5BB9\u6700\u5927\u503C</td><td>Number</td><td></td><td></td></tr><tr><td>api</td><td>\u5916\u952E\u67E5\u8BE2\u9762\u677F\u6570\u636E\u63A5\u53E3</td><td>Number</td><td></td><td>c:panel</td></tr><tr><td>c</td><td>\u81EA\u5B9A\u4E49\u7F16\u8F91\u63A7\u4EF6\u547D\u540D\u5982 code:\u4EE3\u7801\u7F16\u8F91,panel:\u5916\u952E\u9762\u677F,file:\u4E0A\u4F20\u63A7\u4EF6</td><td>String</td><td></td><td></td></tr><tr><td>g</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\u7F16\u7801\u683C\u5F0F\uFF0C<code>encode</code></td><td>String</td><td></td><td></td></tr><tr><td>w</td><td>\u5217\u8868\u5BBD\u5EA6</td><td>Number</td><td></td><td></td></tr><tr><td>f</td><td>\u81EA\u5B9A\u4E49\u6570\u636E\u5E93\u5B57\u6BB5\u540D\uFF0C<code>field</code></td><td>String</td><td>-</td><td>-</td></tr><tr><td>k <code>0.4.3</code></td><td>\u81EA\u5B9A\u4E49\u70B9\u51FB\u89E6\u53D1\u7684\u5B57\u6BB5\u540D</td><td>String</td><td>listor</td><td></td></tr><tr><td>j <code>0.4.4</code></td><td>\u81EA\u5B9A\u4E49\u5916\u952E\u8868\u663E\u793A\u7684\u5B57\u6BB5\u540D,\u9ED8\u8BA4\u4E0D\u914D\u7F6E\u5339\u914D\u6700\u540E\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u6216\u914D\u7F6E\u4E3A\u672C\u5B57\u6BB5\u540D\u4E0D\u663E\u793A\u5916\u952E\u5185\u5BB9</td><td>String</td><td>listor</td><td></td></tr></tbody></table><h2 id="attr-k-eventkey-\u70B9\u51FB\u89E6\u53D1" tabindex="-1">attr.k eventKey \u70B9\u51FB\u89E6\u53D1 <a class="header-anchor" href="#attr-k-eventkey-\u70B9\u51FB\u89E6\u53D1" aria-hidden="true">#</a></h2><p>\u70B9\u51FB\u89E6\u53D1\u4E8B\u4EF6\u540D\uFF0C\u7528\u4E8E\u63A5\u6536\u4E8B\u4EF6 cmd \u54CD\u5E94</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> _th <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> _value<span class="token punctuation">,</span>
  key<span class="token operator">:</span> _key<span class="token punctuation">,</span>
  <span class="token comment">//  resizable: true,</span>
  <span class="token comment">//  width: the.row.width,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>_attr<span class="token punctuation">.</span>k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u70B9\u51FB\u89E6\u53D1\u4E8B\u4EF6\u540D\uFF0C\u7528\u4E8E\u63A5\u6536\u4E8B\u4EF6cmd\u54CD\u5E94</span>
  _th<span class="token punctuation">.</span>eventKey <span class="token operator">=</span> _attr<span class="token punctuation">.</span>k<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E3B\u5EFA the.tpl.keys.primary</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>_attr<span class="token punctuation">.</span>pk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _th<span class="token punctuation">.</span>width <span class="token operator">=</span> _th<span class="token punctuation">.</span>width <span class="token operator">||</span> <span class="token number">50</span><span class="token punctuation">;</span>
  _th<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;qv-table-index&#39;</span><span class="token punctuation">;</span>
  _th<span class="token punctuation">.</span>eventKey <span class="token operator">=</span> _key<span class="token punctuation">;</span>
  <span class="token comment">// \u4E3B\u5EFA</span>
  _th<span class="token punctuation">.</span>primary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// console.log(key, _attr);</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="attr-j-\u5916\u952E\u7D22\u5F15\u5B57\u6BB5" tabindex="-1">attr.j \u5916\u952E\u7D22\u5F15\u5B57\u6BB5 <a class="header-anchor" href="#attr-j-\u5916\u952E\u7D22\u5F15\u5B57\u6BB5" aria-hidden="true">#</a></h2><ul><li>\u5916\u952E\u67E5\u8BE2\u6570\u636E\u8FD4\u56DE\u5B57\u6BB5\u89C4\u5219</li></ul><p>t.\u7D22\u5F15\u952E.\u5916\u952E\u663E\u793A\u5B57\u6BB5\u540D</p><ul><li>\u540C\u8868\u5916\u952E\u591A\u4E2A\u67E5\u8BE2\u8FD4\u56DE\u503C\uFF0C\u9700\u8981\u6307\u5B9A\u5916\u952E\u663E\u793A\u5B57\u6BB5\uFF0C\u4E0D\u6307\u5B9A\u9ED8\u8BA4\u5339\u914D\u6700\u540E\u4E00\u4E2A\u503C</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u4EE5\u4E0B\u793A\u4F8B\uFF0Cj:\u6307\u5B9A\u5173\u8054\u5916\u952E\u5B57\u6BB5</span>
<span class="token keyword">const</span> tpl <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C5E\u6027\u89C4\u5219</span>
  attr<span class="token operator">:</span> <span class="token punctuation">{</span>
    App_ID<span class="token operator">:</span> <span class="token punctuation">{</span>
      t<span class="token operator">:</span> <span class="token string">&#39;Int32&#39;</span><span class="token punctuation">,</span>
      n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      v<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
      c<span class="token operator">:</span> <span class="token string">&#39;panel&#39;</span><span class="token punctuation">,</span>
      api<span class="token operator">:</span> <span class="token string">&#39;/Api/QF_Group/&#39;</span><span class="token punctuation">,</span>
      j<span class="token operator">:</span> <span class="token string">&#39;Title&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u81EA\u5B9A\u4E49\u663E\u793A\u7684\u5173\u8054\u5916\u952E\u5B57\u6BB5</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    MUser_ID<span class="token operator">:</span> <span class="token punctuation">{</span>
      t<span class="token operator">:</span> <span class="token string">&#39;Int64&#39;</span><span class="token punctuation">,</span>
      n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      v<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
      r<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      e<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    App_ID<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Title<span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u5173\u7CFB\u7BA1\u7406&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">SF_ID</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    MUser_ID<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    U_Time<span class="token operator">:</span> <span class="token string">&#39;2012-05-06 10:23:30&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;t.MUser_ID.LastFirst&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u67B6\u6784\u7BA1\u7406\u5458&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;t.App_ID.Title&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u521D\u59CB\u5316&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;t.App_ID.AppKey&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h1 id="join-\u5916\u952E\u67E5\u8BE2" tabindex="-1">join \u5916\u952E\u67E5\u8BE2 <a class="header-anchor" href="#join-\u5916\u952E\u67E5\u8BE2" aria-hidden="true">#</a></h1><ul><li>QF_Model \u6570\u636E\u5BF9\u8C61\u7BA1\u7406 fields \u5916\u952E\u8868\u663E\u793A\u5B57\u6BB5, \u9ED8\u8BA4\u663E\u793A\u6700\u540E\u4E00\u4E2A\u5B57\u6BB5 Title</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> join <span class="token operator">=</span> <span class="token punctuation">{</span>
  MUser_ID<span class="token operator">:</span> <span class="token punctuation">{</span> table<span class="token operator">:</span> <span class="token string">&#39;QF_User&#39;</span><span class="token punctuation">,</span> fields<span class="token operator">:</span> <span class="token string">&#39;LastFirst&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E3B\u8868\u5916\u952E\u5173\u8054\u5B57\u6BB5</span>
  LoginCode<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E0D\u9700\u8981\u8DE8\u670D\u52A1\u5668\u67E5\u8BE2</span>
    server<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5916\u952E\u8868</span>
    table<span class="token operator">:</span> <span class="token string">&#39;QF_UserPhoneJoin&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5916\u952E\u8868\u5173\u8054\u5B57\u6BB5</span>
    primary<span class="token operator">:</span> <span class="token string">&#39;Phone&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5916\u952E\u8868\u663E\u793A\u5B57\u6BB5</span>
    fields<span class="token operator">:</span> <span class="token string">&#39;Department,NickName&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  App_ID<span class="token operator">:</span> <span class="token punctuation">{</span>
    table<span class="token operator">:</span> <span class="token string">&#39;QF_AppInfo&#39;</span><span class="token punctuation">,</span>
    fields<span class="token operator">:</span> <span class="token string">&#39;AppKey,AppWeb,Title&#39;</span><span class="token punctuation">,</span>
    primary<span class="token operator">:</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="attr-c-\u81EA\u5B9A\u4E49\u7EC4\u4EF6" tabindex="-1">attr.c \u81EA\u5B9A\u4E49\u7EC4\u4EF6 <a class="header-anchor" href="#attr-c-\u81EA\u5B9A\u4E49\u7EC4\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63A7\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u5217\u8868\u63A7\u4EF6</th><th>\u7F16\u8F91\u63A7\u4EF6</th></tr></thead><tbody><tr><td>panel</td><td>\u5916\u952E\u67E5\u8BE2</td><td>-</td><td>PanelListor</td></tr></tbody></table><ul><li>\u5916\u952E\u67E5\u8BE2\u9762\u677F</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> tpl <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u65E0\u9700\u4E0B\u53D1\u524D\u7AEF</span>
  attr<span class="token operator">:</span> <span class="token punctuation">{</span>
    App_ID<span class="token operator">:</span> <span class="token punctuation">{</span>
      t<span class="token operator">:</span> <span class="token string">&#39;Int32&#39;</span><span class="token punctuation">,</span>
      n<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      v<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
      c<span class="token operator">:</span> <span class="token string">&#39;panel&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u5B9A\u4E49\u5916\u952E\u67E5\u8BE2\u9762\u677F</span>
      <span class="token comment">// api: &#39;/Api/QF_Group/&#39;, // \u81EA\u5B9A\u4E49\u6570\u636E\u6E90\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u53D6\u5F53\u524D\u8868\u683C\u6570\u636E\u6E90</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>__VP_STATIC_END__`,20),o=[e];function l(c,r,u,i,k,b){return s(),a("div",null,o)}var g=n(t,[["render",l]]);export{d as __pageData,g as default};
