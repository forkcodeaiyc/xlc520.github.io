const e=JSON.parse('{"key":"v-507bed41","path":"/dev/SpringBoot%E9%A1%B9%E7%9B%AE%E9%89%B4%E6%9D%83%E7%9A%84%204%20%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"Spring Boot 项目鉴权的 4 种方式","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Spring Boot 项目鉴权的 4 种方式","description":"Spring Boot 项目鉴权的 4 种方式","date":"2022-03-01T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"type","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%E9%A1%B9%E7%9B%AE%E9%89%B4%E6%9D%83%E7%9A%84%204%20%E7%A7%8D%E6%96%B9%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Spring Boot 项目鉴权的 4 种方式"}],["meta",{"property":"og:description","content":"Spring Boot 项目鉴权的 4 种方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-20T12:43:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-20T12:43:54.000Z"}]]},"headers":[{"level":2,"title":"传统AOP","slug":"传统aop","link":"#传统aop","children":[{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":3,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}]},{"level":2,"title":"Interceptor","slug":"interceptor","link":"#interceptor","children":[{"level":3,"title":"实现","slug":"实现-1","link":"#实现-1","children":[]},{"level":3,"title":"扩展","slug":"扩展-1","link":"#扩展-1","children":[]}]},{"level":2,"title":"ArgumentResolver","slug":"argumentresolver","link":"#argumentresolver","children":[{"level":3,"title":"实现","slug":"实现-2","link":"#实现-2","children":[]},{"level":3,"title":"扩展","slug":"扩展-2","link":"#扩展-2","children":[]}]},{"level":2,"title":"Filter","slug":"filter","link":"#filter","children":[{"level":3,"title":"扩展","slug":"扩展-3","link":"#扩展-3","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1668948234000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":5.68,"words":1705},"filePathRelative":"dev/SpringBoot项目鉴权的 4 种方式.md","localizedDate":"2022年3月1日","excerpt":"<h1> Spring Boot 项目鉴权的 4 种方式</h1>\\n<h2> <strong>传统AOP</strong></h2>\\n<p>对于这种需求，首先想到的当然是 Spring-boot 提供的 AOP 接口，只需要在 Controller 方法前添加切点，然后再对切点进行处理即可。</p>\\n<h3> <strong>实现</strong></h3>\\n<p>其使用步骤如下：</p>\\n<ol>\\n<li>使用 <code>@Aspect</code> 声明一下切面类 <code>WhitelistAspect</code>；</li>\\n<li>在切面类内添加一个切点 <code>whitelistPointcut()</code>，为了实现此切点灵活可装配的能力，这里不使用 <code>execution</code> 全部拦截，而是添加一个注解 <code>@Whitelist</code>，被注解的方法才会校验白名单。</li>\\n<li>在切面类中使用 spring 的 AOP 注解 <code>@Before</code> 声明一个通知方法 <code>checkWhitelist()</code> 在 Controller 方法被执行之前校验白名单。</li>\\n</ol>"}');export{e as data};
