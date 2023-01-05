const e=JSON.parse('{"key":"v-15dca1e6","path":"/dev/%E5%B0%86Bean%E6%94%BE%E5%85%A5Spring%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%847%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"SpringBoot将Bean放入Spring容器中的五种方式","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot将Bean放入Spring容器中的五种方式","description":"SpringBoot将Bean放入Spring容器中的五种方式","date":"2022-02-12T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"type","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E5%B0%86Bean%E6%94%BE%E5%85%A5Spring%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%847%E7%A7%8D%E6%96%B9%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringBoot将Bean放入Spring容器中的五种方式"}],["meta",{"property":"og:description","content":"SpringBoot将Bean放入Spring容器中的五种方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-20T12:43:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-02-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-20T12:43:54.000Z"}]]},"headers":[{"level":2,"title":"更新：2022年3月23日11:25:11","slug":"更新-2022年3月23日11-25-11","link":"#更新-2022年3月23日11-25-11","children":[]},{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"通过注解注入的一般形式","slug":"通过注解注入的一般形式","link":"#通过注解注入的一般形式","children":[]},{"level":2,"title":"通过构造方法注入Bean","slug":"通过构造方法注入bean","link":"#通过构造方法注入bean","children":[]},{"level":2,"title":"通过set方法注入Bean","slug":"通过set方法注入bean","link":"#通过set方法注入bean","children":[]},{"level":2,"title":"通过属性去注入Bean","slug":"通过属性去注入bean","link":"#通过属性去注入bean","children":[]},{"level":2,"title":"通过List注入Bean","slug":"通过list注入bean","link":"#通过list注入bean","children":[]},{"level":2,"title":"通过Map去注入Bean","slug":"通过map去注入bean","link":"#通过map去注入bean","children":[]},{"level":2,"title":"2022-02-12","slug":"_2022-02-12","link":"#_2022-02-12","children":[]},{"level":2,"title":"1、@Configuration + @Bean","slug":"_1、-configuration-bean","link":"#_1、-configuration-bean","children":[]},{"level":2,"title":"2、@Componet + @ComponentScan","slug":"_2、-componet-componentscan","link":"#_2、-componet-componentscan","children":[]},{"level":2,"title":"3、@Import注解导入","slug":"_3、-import注解导入","link":"#_3、-import注解导入","children":[{"level":3,"title":"3.1 @Import直接导入类","slug":"_3-1-import直接导入类","link":"#_3-1-import直接导入类","children":[]},{"level":3,"title":"3.2 @Import + ImportSelector","slug":"_3-2-import-importselector","link":"#_3-2-import-importselector","children":[]},{"level":3,"title":"3.3 @Import + ImportBeanDefinitionRegistrar","slug":"_3-3-import-importbeandefinitionregistrar","link":"#_3-3-import-importbeandefinitionregistrar","children":[]},{"level":3,"title":"3.4 @Import + DeferredImportSelector","slug":"_3-4-import-deferredimportselector","link":"#_3-4-import-deferredimportselector","children":[]}]},{"level":2,"title":"4、使用FactoryBean接口","slug":"_4、使用factorybean接口","link":"#_4、使用factorybean接口","children":[]},{"level":2,"title":"5、使用 BeanDefinitionRegistryPostProcessor","slug":"_5、使用-beandefinitionregistrypostprocessor","link":"#_5、使用-beandefinitionregistrypostprocessor","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1668948234000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":10.84,"words":3253},"filePathRelative":"dev/将Bean放入Spring容器中的7种方式.md","localizedDate":"2022年2月12日","excerpt":"<h1> SpringBoot将Bean放入Spring容器中的7(五)种方式</h1>\\n<h2> 更新：2022年3月23日11:25:11</h2>\\n<h2> 背景</h2>\\n<p>我们谈到Spring的时候一定会提到IOC容器、DI依赖注入，Spring通过将一个个类标注为Bean的方法注入到IOC容器中，达到了控制反转的效果。那么我们刚开始接触Bean的时候，一定是使用xml文件，一个一个的注入，就例如下面这样。</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code> &lt;bean id=\\"bean\\" class=\\"beandemo.Bean\\" /&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
