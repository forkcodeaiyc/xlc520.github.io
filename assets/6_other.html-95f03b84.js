const e=JSON.parse(`{"key":"v-446a765e","path":"/study/vue3_quick_study/chapter2/6_other.html","title":"声明","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"声明","description":"6. 其它 声明文件 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能 什么是声明语句 假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 &lt;script&gt; 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。 但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西 /* 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。 声明语句: 如果需要ts对新的语法进行检查, 需要要加载了对应的类型说明代码 declare var jQuery: (selector: string) =&gt; any; 声明文件: 把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件 下载声明文件: npm install @types/jquery --save-dev */ jQuery('#foo'); // ERROR: Cannot find name 'jQuery'.","date":"2022-07-27T00:00:00.000Z","category":["Vue"],"tag":["Vue"],"article":true,"dateline":true,"icon":"vue","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/study/vue3_quick_study/chapter2/6_other.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"声明"}],["meta",{"property":"og:description","content":"6. 其它 声明文件 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能 什么是声明语句 假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 &lt;script&gt; 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。 但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西 /* 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。 声明语句: 如果需要ts对新的语法进行检查, 需要要加载了对应的类型说明代码 declare var jQuery: (selector: string) =&gt; any; 声明文件: 把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件 下载声明文件: npm install @types/jquery --save-dev */ jQuery('#foo'); // ERROR: Cannot find name 'jQuery'."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-20T12:43:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2022-07-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-20T12:43:54.000Z"}]]},"headers":[{"level":2,"title":"声明文件","slug":"声明文件","link":"#声明文件","children":[]},{"level":2,"title":"内置对象","slug":"内置对象","link":"#内置对象","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1668948234000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":2.23,"words":670},"filePathRelative":"study/vue3_quick_study/chapter2/6_other.md","localizedDate":"2022年7月27日","excerpt":"<h1> 6. 其它</h1>\\n<h2> 声明文件</h2>\\n<p>当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能</p>\\n<p>什么是声明语句</p>\\n<p>假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 <code>&lt;script&gt;</code> 标签引入 <code>jQuery</code>，然后就可以使用全局变量 <code>$</code> 或 <code>jQuery</code> 了。</p>\\n<p>但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">/* \\n当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。\\n声明语句: 如果需要ts对新的语法进行检查, 需要要加载了对应的类型说明代码\\n  declare var jQuery: (selector: string) =&gt; any;\\n声明文件: 把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件\\n下载声明文件: npm install @types/jquery --save-dev\\n*/</span>\\n\\n<span class=\\"token function\\">jQuery</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'#foo'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// ERROR: Cannot find name 'jQuery'.</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
