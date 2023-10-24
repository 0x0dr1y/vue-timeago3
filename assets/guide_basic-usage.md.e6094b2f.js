import{_ as a,c as n,o as s,a as t}from"./app.feb47bda.js";const h='{"title":"Basic Usage","description":"","frontmatter":{},"headers":[{"level":2,"title":"Custom language","slug":"custom-language"}],"relativePath":"guide/basic-usage.md"}',p={},e=t(`<h1 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h1><p>Once the plugin is registered you can straight up use it in your app.</p><div class="language-vue"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timeago</span> <span class="token attr-name">:datetime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// current Date</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>This will print something like <code>now</code> or <code>5 seconds ago</code>.</p><p>By configuring the component, you can adjust a few more things like, auto updating for example. Please have a look at the next page.</p><h2 id="custom-language" tabindex="-1">Custom language <a class="header-anchor" href="#custom-language" aria-hidden="true">#</a></h2><p>By default, vue-timeago3 uses date-fns under the hood. This means that over 80 languages can be used. To do so, you can simply import any of the <code>date-fns</code> language packs, and pass it down to vue-timeago.</p><p>All available locales can be found <a href="https://github.com/date-fns/date-fns/tree/master/src/locale" target="_blank" rel="noopener noreferrer">here</a>!</p><div class="language-vue"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timeago</span>
    <span class="token attr-name">:datetime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>es<span class="token punctuation">&quot;</span></span>
   <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> es <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;date-fns/locale&#39;</span> <span class="token comment">// import custom locale</span>

  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// current Date</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,9),o=[e];function c(l,u,i,r,k,d){return s(),n("div",null,o)}var m=a(p,[["render",c]]);export{h as __pageData,m as default};
