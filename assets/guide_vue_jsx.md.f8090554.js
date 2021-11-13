import{_ as n,o as s,c as a,a as e}from"./app.7408f20e.js";const k='{"title":"JSX","description":"","frontmatter":{},"headers":[{"level":2,"title":"JSX \u8BED\u6CD5","slug":"jsx-\u8BED\u6CD5"},{"level":2,"title":"Jsx vue","slug":"jsx-vue"},{"level":2,"title":"vue-template-compiler","slug":"vue-template-compiler"}],"relativePath":"guide/vue/jsx.md","lastUpdated":1636215949408}',p={},t=e(`<h1 id="jsx" tabindex="-1">JSX <a class="header-anchor" href="#jsx" aria-hidden="true">#</a></h1><h2 id="jsx-\u8BED\u6CD5" tabindex="-1">JSX \u8BED\u6CD5 <a class="header-anchor" href="#jsx-\u8BED\u6CD5" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/vuejs/jsx-next" target="_blank" rel="noopener noreferrer">jsx-Babel \u63D2\u4EF6</a></li></ul><div class="language-"><pre><code>npm i -D @vue/babel-plugin-jsx
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>.babelrc</p><div class="language-"><pre><code>{
  &quot;plugins&quot;: [&quot;@vue/babel-plugin-jsx&quot;]
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="jsx-vue" tabindex="-1">Jsx vue <a class="header-anchor" href="#jsx-vue" aria-hidden="true">#</a></h2><p>vue \u7EC4\u4EF6</p><div class="language-js line-numbers-mode"><pre><code>@vitejs<span class="token operator">/</span>plugin<span class="token operator">-</span>vue<span class="token operator">-</span>jsx


<span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="vue-template-compiler" tabindex="-1">vue-template-compiler <a class="header-anchor" href="#vue-template-compiler" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5E26\u5B8C\u6574\u7EC4\u4EF6\u7F16\u8BD1\u6267\u884C</span>
    vue<span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.esm-bundler.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-template-compiler&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> compiler<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;div id=&quot;test&quot;&gt;
    &lt;div&gt;
      &lt;p&gt;This is my vue render test&lt;/p&gt;
    &lt;/div&gt;
    &lt;p&gt;my name is {{myName}}&lt;/p&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,12),l=[t];function o(c,r,u,i,b,d){return s(),a("div",null,l)}var v=n(p,[["render",o]]);export{k as __pageData,v as default};
