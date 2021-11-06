import{_ as n,o as s,c as a,a as p}from"./app.e2658e45.js";const g='{"title":"\u9AD8\u4EAE\u4EE3\u7801","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u52A8\u9AD8\u4EAE","slug":"\u81EA\u52A8\u9AD8\u4EAE"},{"level":2,"title":"\u624B\u52A8\u9AD8\u4EAE","slug":"\u624B\u52A8\u9AD8\u4EAE"},{"level":2,"title":"\u652F\u6301\u7684\u8BED\u8A00","slug":"\u652F\u6301\u7684\u8BED\u8A00"},{"level":2,"title":"\u63D2\u4EF6-plugins","slug":"\u63D2\u4EF6-plugins"}],"relativePath":"guide/h5/prismjs.md","lastUpdated":1636215949391}',t={},e=p(`<h1 id="\u9AD8\u4EAE\u4EE3\u7801" tabindex="-1">\u9AD8\u4EAE\u4EE3\u7801 <a class="header-anchor" href="#\u9AD8\u4EAE\u4EE3\u7801" aria-hidden="true">#</a></h1><blockquote><p>Prism \u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\uFF0C\u7A33\u5065\u7684\uFF0C\u4F18\u96C5\u7B80\u6D01\u7684\u8BED\u6CD5\u9AD8\u4EAE\u63D2\u4EF6</p></blockquote><ul><li><a href="http://prismjs.com/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a></li></ul><h2 id="\u81EA\u52A8\u9AD8\u4EAE" tabindex="-1">\u81EA\u52A8\u9AD8\u4EAE <a class="header-anchor" href="#\u81EA\u52A8\u9AD8\u4EAE" aria-hidden="true">#</a></h2><p>\u5F15\u5165 Prism \u7684 CSS \u548C JS \u6587\u4EF6</p><div class="language-html line-numbers-mode"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themes/prism.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u4EE3\u7801\u9AD8\u4EAE\u7247\u6BB5--&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>language-css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        p { color: red }
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prism.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u624B\u52A8\u9AD8\u4EAE" tabindex="-1">\u624B\u52A8\u9AD8\u4EAE <a class="header-anchor" href="#\u624B\u52A8\u9AD8\u4EAE" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themes/prism.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u4EE3\u7801\u9AD8\u4EAE\u7247\u6BB5--&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>language-css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        p { color: red }
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u5F15\u7528\u4EE3\u7801\u7684 script \u6807\u7B7E\u52A0\u4E0A\u624B\u52A8 data-manual \u6807\u8BB0--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prism.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-manual</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// \u624B\u52A8\u4F7F\u7528</span>
      window<span class="token punctuation">.</span>Prism <span class="token operator">=</span> window<span class="token punctuation">.</span>Prism <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      window<span class="token punctuation">.</span>Prism<span class="token punctuation">.</span>manual <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

      window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> prism <span class="token operator">=</span> window<span class="token punctuation">.</span>Prism<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prism<span class="token punctuation">.</span>languages<span class="token punctuation">[</span>lang<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> code <span class="token operator">=</span> prism<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>
            <span class="token string">&#39;\u9700\u8981\u9AD8\u4EAE\u7684\u4EE3\u7801&#39;</span><span class="token punctuation">,</span>
            prism<span class="token punctuation">.</span>languages<span class="token punctuation">[</span>lang<span class="token punctuation">]</span><span class="token punctuation">,</span>
            lang
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lang<span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="\u652F\u6301\u7684\u8BED\u8A00" tabindex="-1">\u652F\u6301\u7684\u8BED\u8A00 <a class="header-anchor" href="#\u652F\u6301\u7684\u8BED\u8A00" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>Markup <span class="token operator">-</span> markup
<span class="token constant">CSS</span> <span class="token operator">-</span> css
<span class="token constant">C</span><span class="token operator">-</span>like <span class="token operator">-</span> clike
JavaScript <span class="token operator">-</span> javascript
<span class="token constant">ABAP</span> <span class="token operator">-</span> abap
ActionScript <span class="token operator">-</span> actionscript
Apache Configuration <span class="token operator">-</span> apacheconf
<span class="token constant">APL</span> <span class="token operator">-</span> apl
AppleScript <span class="token operator">-</span> applescript
AsciiDoc <span class="token operator">-</span> asciidoc
<span class="token constant">ASP</span><span class="token punctuation">.</span><span class="token constant">NET</span> <span class="token punctuation">(</span><span class="token constant">C</span>#<span class="token punctuation">)</span> <span class="token operator">-</span> aspnet
AutoIt <span class="token operator">-</span> autoit
AutoHotkey <span class="token operator">-</span> autohotkey
Bash <span class="token operator">-</span> bash
<span class="token constant">BASIC</span> <span class="token operator">-</span> basic
Batch <span class="token operator">-</span> batch
Bison <span class="token operator">-</span> bison
Brainfuck <span class="token operator">-</span> brainfuck
Bro <span class="token operator">-</span> bro
<span class="token constant">C</span> <span class="token operator">-</span> c
<span class="token constant">C</span># <span class="token operator">-</span> csharp
<span class="token constant">C</span><span class="token operator">++</span> <span class="token operator">-</span> cpp
CoffeeScript <span class="token operator">-</span> coffeescript
Crystal <span class="token operator">-</span> crystal
<span class="token constant">CSS</span> Extras <span class="token operator">-</span> css<span class="token operator">-</span>extras
<span class="token constant">D</span> <span class="token operator">-</span> d
Dart <span class="token operator">-</span> dart
Diff <span class="token operator">-</span> diff
Docker <span class="token operator">-</span> docker
Eiffel <span class="token operator">-</span> eiffel
Elixir <span class="token operator">-</span> elixir
Erlang <span class="token operator">-</span> erlang
<span class="token constant">F</span># <span class="token operator">-</span> fsharp
Fortran <span class="token operator">-</span> fortran
Gherkin <span class="token operator">-</span> gherkin
Git <span class="token operator">-</span> git
<span class="token constant">GLSL</span> <span class="token operator">-</span> glsl
Go <span class="token operator">-</span> go
Groovy <span class="token operator">-</span> groovy
Haml <span class="token operator">-</span> haml
Handlebars <span class="token operator">-</span> handlebars
Haskell <span class="token operator">-</span> haskell
Haxe <span class="token operator">-</span> haxe
<span class="token constant">HTTP</span> <span class="token operator">-</span> http
Icon <span class="token operator">-</span> icon
Inform <span class="token number">7</span> <span class="token operator">-</span> inform7
Ini <span class="token operator">-</span> ini
<span class="token constant">J</span> <span class="token operator">-</span> j
Jade <span class="token operator">-</span> jade
Java <span class="token operator">-</span> java
<span class="token constant">JSON</span> <span class="token operator">-</span> json
Julia <span class="token operator">-</span> julia
Keyman <span class="token operator">-</span> keyman
Kotlin <span class="token operator">-</span> kotlin
LaTeX <span class="token operator">-</span> latex
Less <span class="token operator">-</span> less
<span class="token constant">LOLCODE</span> <span class="token operator">-</span> lolcode
Lua <span class="token operator">-</span> lua
Makefile <span class="token operator">-</span> makefile
Markdown <span class="token operator">-</span> markdown
<span class="token constant">MATLAB</span> <span class="token operator">-</span> matlab
<span class="token constant">MEL</span> <span class="token operator">-</span> mel
Mizar <span class="token operator">-</span> mizar
Monkey <span class="token operator">-</span> monkey
<span class="token constant">NASM</span> <span class="token operator">-</span> nasm
nginx <span class="token operator">-</span> nginx
Nim <span class="token operator">-</span> nim
Nix <span class="token operator">-</span> nix
<span class="token constant">NSIS</span> <span class="token operator">-</span> nsis
Objective<span class="token operator">-</span><span class="token constant">C</span> <span class="token operator">-</span> objectivec
OCaml <span class="token operator">-</span> ocaml
Oz <span class="token operator">-</span> oz
<span class="token constant">PARI</span><span class="token operator">/</span><span class="token constant">GP</span> <span class="token operator">-</span> parigp
Parser <span class="token operator">-</span> parser
Pascal <span class="token operator">-</span> pascal
Perl <span class="token operator">-</span> perl
<span class="token constant">PHP</span> <span class="token operator">-</span> php
<span class="token constant">PHP</span> Extras <span class="token operator">-</span> php<span class="token operator">-</span>extras
PowerShell <span class="token operator">-</span> powershell
Processing <span class="token operator">-</span> processing
Prolog <span class="token operator">-</span> prolog
Protocol Buffers <span class="token operator">-</span> protobuf
Puppet <span class="token operator">-</span> puppet
Pure <span class="token operator">-</span> pure
Python <span class="token operator">-</span> python
<span class="token constant">Q</span> <span class="token operator">-</span> q
Qore <span class="token operator">-</span> qore
<span class="token constant">R</span> <span class="token operator">-</span> r
React <span class="token constant">JSX</span> <span class="token operator">-</span> jsx
<span class="token function">reST</span> <span class="token punctuation">(</span>reStructuredText<span class="token punctuation">)</span> <span class="token operator">-</span> rest
Rip <span class="token operator">-</span> rip
Roboconf <span class="token operator">-</span> roboconf
Ruby <span class="token operator">-</span> ruby
Rust <span class="token operator">-</span> rust
<span class="token constant">SAS</span> <span class="token operator">-</span> sas
<span class="token function">Sass</span> <span class="token punctuation">(</span>Sass<span class="token punctuation">)</span> <span class="token operator">-</span> sass
<span class="token function">Sass</span> <span class="token punctuation">(</span>Scss<span class="token punctuation">)</span> <span class="token operator">-</span> scss
Scala <span class="token operator">-</span> scala
Scheme <span class="token operator">-</span> scheme
Smalltalk <span class="token operator">-</span> smalltalk
Smarty <span class="token operator">-</span> smarty
<span class="token constant">SQL</span> <span class="token operator">-</span> sql
Stylus <span class="token operator">-</span> stylus
Swift <span class="token operator">-</span> swift
Tcl <span class="token operator">-</span> tcl
Textile <span class="token operator">-</span> textile
Twig <span class="token operator">-</span> twig
TypeScript <span class="token operator">-</span> typescript
Verilog <span class="token operator">-</span> verilog
<span class="token constant">VHDL</span> <span class="token operator">-</span> vhdl
vim <span class="token operator">-</span> vim
Wiki markup <span class="token operator">-</span> wiki
<span class="token constant">YAML</span> <span class="token operator">-</span> yaml

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br></div></div><h2 id="\u63D2\u4EF6-plugins" tabindex="-1">\u63D2\u4EF6-plugins <a class="header-anchor" href="#\u63D2\u4EF6-plugins" aria-hidden="true">#</a></h2><ul><li>\u7EBF\u6761\u7A81\u51FA\u663E\u793A - Line Highlight</li><li>\u884C\u53F7 - Line Numbers</li><li>\u663E\u793A\u9690\u5F62 - Show Invisibles</li><li>Autolinker - Autolinker</li><li>Web \u5E73\u53F0\u6587\u6863 - WebPlatform Docs</li><li>\u81EA\u5B9A\u4E49\u7C7B - Custom Class</li><li>\u6587\u4EF6\u7A81\u51FA\u663E\u793A - File Highlight</li><li>\u663E\u793A\u8BED\u8A00 - Show Language</li><li>JSONP \u4EAE\u70B9 - JSONP Highlight</li><li>\u7A81\u51FA\u663E\u793A\u5173\u952E\u5B57 - Highlight Keywords</li><li>\u5220\u9664\u521D\u59CB\u6362\u884C\u7B26 - Remove initial line feed</li><li>\u9884\u89C8\u5668 - Previewers</li><li>\u81EA\u52A8\u52A0\u8F7D\u78C1\u5E26\u673A - Autoloader</li><li>\u4FDD\u6301\u6807\u8BB0 - Keep Markup</li><li>\u547D\u4EE4\u884C - Command Line</li><li>\u975E\u8F6C\u4E49\u6807\u8BB0 - Unescaped Markup</li><li>\u89C4\u8303\u5316\u7A7A\u767D - Normalize Whitespace</li><li>\u6570\u636E URI \u7A81\u51FA\u663E\u793A - Data-URI Highlight</li><li>\u5DE5\u5177\u680F - Toolbar</li><li>\u590D\u5236\u5230\u526A\u8D34\u677F\u6309\u94AE - Copy to Clipboard Button</li></ul>`,12),o=[e];function l(c,r,u,i,k,b){return s(),a("div",null,o)}var d=n(t,[["render",l]]);export{g as __pageData,d as default};
