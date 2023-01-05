const t=JSON.parse('{"key":"v-3966872e","path":"/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html","title":"SpringBoot定时任务动态管理通用解决方案","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot定时任务动态管理通用解决方案","description":"SpringBoot定时任务动态管理通用解决方案 一、功能说明 SpringBoot的定时任务的加强工具，实现对SpringBoot原生的定时任务进行动态管理,完全兼容原生@Scheduled注解,无需对原本的定时任务进行修改 二、快速使用 具体的功能已经封装成SpringBoot-starter即插即用 &lt;dependency&gt; &lt;groupId&gt;com.github.guoyixing&lt;/groupId&gt; &lt;artifactId&gt;spring-boot-starter-super-scheduled&lt;/artifactId&gt; &lt;version&gt;0.3.1&lt;/version&gt; &lt;/dependency&gt;","date":"2022-05-25T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringBoot定时任务动态管理通用解决方案"}],["meta",{"property":"og:description","content":"SpringBoot定时任务动态管理通用解决方案 一、功能说明 SpringBoot的定时任务的加强工具，实现对SpringBoot原生的定时任务进行动态管理,完全兼容原生@Scheduled注解,无需对原本的定时任务进行修改 二、快速使用 具体的功能已经封装成SpringBoot-starter即插即用 &lt;dependency&gt; &lt;groupId&gt;com.github.guoyixing&lt;/groupId&gt; &lt;artifactId&gt;spring-boot-starter-super-scheduled&lt;/artifactId&gt; &lt;version&gt;0.3.1&lt;/version&gt; &lt;/dependency&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-20T12:43:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-05-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-20T12:43:54.000Z"}]]},"headers":[{"level":2,"title":"一、功能说明","slug":"一、功能说明","link":"#一、功能说明","children":[]},{"level":2,"title":"二、快速使用","slug":"二、快速使用","link":"#二、快速使用","children":[]},{"level":2,"title":"三、实现原理","slug":"三、实现原理","link":"#三、实现原理","children":[{"level":3,"title":"1、动态管理实现","slug":"_1、动态管理实现","link":"#_1、动态管理实现","children":[]},{"level":3,"title":"2、增强接口实现","slug":"_2、增强接口实现","link":"#_2、增强接口实现","children":[]}]}],"git":{"createdTime":1668948234000,"updatedTime":1668948234000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":9.37,"words":2810},"filePathRelative":"dev/SpringBoot定时任务动态管理通用解决方案.md","localizedDate":"2022年5月25日","excerpt":"<h1> SpringBoot定时任务动态管理通用解决方案</h1>\\n<h2> 一、功能说明</h2>\\n<p>SpringBoot的定时任务的加强工具，实现对SpringBoot原生的定时任务进行动态管理,完全兼容原生@Scheduled注解,无需对原本的定时任务进行修改</p>\\n<h2> 二、快速使用</h2>\\n<p>具体的功能已经封装成SpringBoot-starter即插即用</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>com.github.guoyixing<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-starter-super-scheduled<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>0.3.1<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
