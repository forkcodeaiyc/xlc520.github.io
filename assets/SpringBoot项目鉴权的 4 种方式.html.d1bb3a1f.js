import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{c as n}from"./app.f1128457.js";const a={},s=n(`<h1 id="spring-boot-\u9879\u76EE\u9274\u6743\u7684-4-\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#spring-boot-\u9879\u76EE\u9274\u6743\u7684-4-\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> Spring Boot \u9879\u76EE\u9274\u6743\u7684 4 \u79CD\u65B9\u5F0F</h1><h2 id="\u4F20\u7EDFaop" tabindex="-1"><a class="header-anchor" href="#\u4F20\u7EDFaop" aria-hidden="true">#</a> <strong>\u4F20\u7EDFAOP</strong></h2><p>\u5BF9\u4E8E\u8FD9\u79CD\u9700\u6C42\uFF0C\u9996\u5148\u60F3\u5230\u7684\u5F53\u7136\u662F Spring-boot \u63D0\u4F9B\u7684 AOP \u63A5\u53E3\uFF0C\u53EA\u9700\u8981\u5728 Controller \u65B9\u6CD5\u524D\u6DFB\u52A0\u5207\u70B9\uFF0C\u7136\u540E\u518D\u5BF9\u5207\u70B9\u8FDB\u884C\u5904\u7406\u5373\u53EF\u3002</p><h3 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> <strong>\u5B9E\u73B0</strong></h3><p>\u5176\u4F7F\u7528\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li>\u4F7F\u7528 <code>@Aspect</code> \u58F0\u660E\u4E00\u4E0B\u5207\u9762\u7C7B <code>WhitelistAspect</code>\uFF1B</li><li>\u5728\u5207\u9762\u7C7B\u5185\u6DFB\u52A0\u4E00\u4E2A\u5207\u70B9 <code>whitelistPointcut()</code>\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u6B64\u5207\u70B9\u7075\u6D3B\u53EF\u88C5\u914D\u7684\u80FD\u529B\uFF0C\u8FD9\u91CC\u4E0D\u4F7F\u7528 <code>execution</code> \u5168\u90E8\u62E6\u622A\uFF0C\u800C\u662F\u6DFB\u52A0\u4E00\u4E2A\u6CE8\u89E3 <code>@Whitelist</code>\uFF0C\u88AB\u6CE8\u89E3\u7684\u65B9\u6CD5\u624D\u4F1A\u6821\u9A8C\u767D\u540D\u5355\u3002</li><li>\u5728\u5207\u9762\u7C7B\u4E2D\u4F7F\u7528 spring \u7684 AOP \u6CE8\u89E3 <code>@Before</code> \u58F0\u660E\u4E00\u4E2A\u901A\u77E5\u65B9\u6CD5 <code>checkWhitelist()</code> \u5728 Controller \u65B9\u6CD5\u88AB\u6267\u884C\u4E4B\u524D\u6821\u9A8C\u767D\u540D\u5355\u3002</li></ol><p>\u5207\u9762\u7C7B\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Aspect
public class WhitelistAspect {
   
 @Before(value = &quot;whitelistPointcut() &amp;&amp; @annotation(whitelist)&quot;)
 public void checkAppkeyWhitelist(JoinPoint joinPoint, Whitelist whitelist) {
     checkWhitelist();
     // \u53EF\u4F7F\u7528 joinPoint.getArgs() \u83B7\u53D6Controller\u65B9\u6CD5\u7684\u53C2\u6570
     // \u53EF\u4EE5\u4F7F\u7528 whitelist \u53D8\u91CF\u83B7\u53D6\u6CE8\u89E3\u53C2\u6570
 }
   
   
 @Pointcut(&quot;@annotation(com.zhenbianshu.Whitelist)&quot;)
 public void whitelistPointCut() {
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><a href="https://mp.weixin.qq.com/s?__biz=MzI4OTA3NDQ0Nw==&amp;mid=2455548310&amp;idx=2&amp;sn=28559512311234ab380c18f124ac5246&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">\u5728Controller\u65B9\u6CD5\u4E0A\u6DFB\u52A0</a> <code>@Whitelist</code> \u6CE8\u89E3\u5B9E\u73B0\u529F\u80FD\u3002</p><h3 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> <strong>\u6269\u5C55</strong></h3><p>\u672C\u4F8B\u4E2D\u4F7F\u7528\u4E86 \u6CE8\u89E3 \u6765\u58F0\u660E\u5207\u70B9\uFF0C\u5E76\u4E14\u6211\u5B9E\u73B0\u4E86\u901A\u8FC7\u6CE8\u89E3\u53C2\u6570\u6765\u58F0\u660E\u8981\u6821\u9A8C\u7684\u767D\u540D\u5355\uFF0C\u5982\u679C\u4E4B\u540E\u8FD8\u9700\u8981\u6DFB\u52A0\u5176\u4ED6\u767D\u540D\u5355\u7684\u8BDD\uFF0C\u5982\u901A\u8FC7 UID \u6765\u6821\u9A8C\uFF0C\u5219\u53EF\u4EE5\u4E3A\u6B64\u6CE8\u89E3\u6DFB\u52A0 <code>uid()</code> \u7B49\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6821\u9A8C\u3002\u6B64\u5916\uFF0Cspring \u7684 AOP \u8FD8\u652F\u6301 <code>execution\uFF08\u6267\u884C\u65B9\u6CD5\uFF09 \u3001bean\uFF08\u5339\u914D\u7279\u5B9A\u540D\u79F0\u7684 Bean \u5BF9\u8C61\u7684\u6267\u884C\u65B9\u6CD5\uFF09</code>\u7B49\u5207\u70B9\u58F0\u660E\u65B9\u6CD5\u548C <code>@Around\uFF08\u5728\u76EE\u6807\u51FD\u6570\u6267\u884C\u4E2D\u6267\u884C\uFF09 \u3001@After\uFF08\u65B9\u6CD5\u6267\u884C\u540E\uFF09</code> \u7B49\u901A\u77E5\u65B9\u6CD5\u3002\u5982\u6B64\uFF0C\u529F\u80FD\u5DF2\u7ECF\u5B9E\u73B0\u4E86\uFF0C\u4F46\u9886\u5BFC\u5E76\u4E0D\u6EE1\u610F=_=\uFF0C\u539F\u56E0\u662F\u9879\u76EE\u4E2D AOP \u7528\u5F97\u592A\u591A\u4E86\uFF0C\u90FD\u7528\u6EE5\u4E86\uFF0C\u5EFA\u8BAE\u6211\u6362\u4E00\u79CD\u65B9\u5F0F\u3002\u55EF\uFF0C\u53EA\u597D\u641E\u8D77\u3002</p><h2 id="interceptor" tabindex="-1"><a class="header-anchor" href="#interceptor" aria-hidden="true">#</a> <strong>Interceptor</strong></h2><p>Spring \u7684 \u62E6\u622A\u5668(Interceptor) \u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\u4E5F\u975E\u5E38\u5408\u9002\u3002\u987E\u540D\u601D\u4E49\uFF0C\u62E6\u622A\u5668\u7528\u4E8E\u5728 Controller \u5185 Action \u88AB\u6267\u884C\u524D\u901A\u8FC7\u4E00\u4E9B\u53C2\u6570\u5224\u65AD\u662F\u5426\u8981\u6267\u884C\u6B64\u65B9\u6CD5\uFF0C\u8981\u5B9E\u73B0\u4E00\u4E2A\u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u5B9E\u73B0 Spring \u7684 <code>HandlerInterceptor</code> \u63A5\u53E3\u3002</p><h3 id="\u5B9E\u73B0-1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-1" aria-hidden="true">#</a> <strong>\u5B9E\u73B0</strong></h3><p>\u5B9E\u73B0\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li>\u5B9A\u4E49\u62E6\u622A\u5668\u7C7B <code>AppkeyInterceptor</code> \u7C7B\u5E76\u5B9E\u73B0 HandlerInterceptor \u63A5\u53E3\u3002</li><li>\u5B9E\u73B0\u5176 <code>preHandle()</code> \u65B9\u6CD5\uFF1B</li><li>\u5728 preHandle \u65B9\u6CD5\u5185\u901A\u8FC7\u6CE8\u89E3\u548C\u53C2\u6570\u5224\u65AD\u662F\u5426\u9700\u8981\u62E6\u622A\u8BF7\u6C42\uFF0C\u62E6\u622A\u8BF7\u6C42\u65F6\u63A5\u53E3\u8FD4\u56DE <code>false</code>\uFF1B</li><li>\u5728\u81EA\u5B9A\u4E49\u7684 <code>WebMvcConfigurerAdapter</code> \u7C7B\u5185\u6CE8\u518C\u6B64\u62E6\u622A\u5668\uFF1B</li></ol><p><code>AppkeyInterceptor</code> \u7C7B\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Component
public class WhitelistInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Whitelist whitelist = ((HandlerMethod) handler).getMethodAnnotation(Whitelist.class);
        // whitelist.values(); \u901A\u8FC7 request \u83B7\u53D6\u8BF7\u6C42\u53C2\u6570\uFF0C\u901A\u8FC7 whitelist \u53D8\u91CF\u83B7\u53D6\u6CE8\u89E3\u53C2\u6570
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
  // \u65B9\u6CD5\u5728Controller\u65B9\u6CD5\u6267\u884C\u7ED3\u675F\u540E\u6267\u884C
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
  // \u5728view\u89C6\u56FE\u6E32\u67D3\u5B8C\u6210\u540E\u6267\u884C
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="\u6269\u5C55-1" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-1" aria-hidden="true">#</a> <strong>\u6269\u5C55</strong></h3><p>\u8981\u542F\u7528 \u62E6\u622A\u5668\u8FD8\u8981\u663E\u5F0F\u914D\u7F6E\u5B83\u542F\u7528\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 <code>WebMvcConfigurerAdapter</code> \u5BF9\u5B83\u8FDB\u884C\u914D\u7F6E\u3002\u9700\u8981\u6CE8\u610F\uFF0C\u7EE7\u627F\u5B83\u7684\u7684 <code>MvcConfiguration</code> \u9700\u8981\u5728 ComponentScan \u8DEF\u5F84\u4E0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Configuration
public class MvcConfiguration extends WebMvcConfigurerAdapter {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new WhitelistInterceptor()).addPathPatterns(&quot;/*&quot;).order(1);
        // \u8FD9\u91CC\u53EF\u4EE5\u914D\u7F6E\u62E6\u622A\u5668\u542F\u7528\u7684 path \u7684\u987A\u5E8F\uFF0C\u5728\u6709\u591A\u4E2A\u62E6\u622A\u5668\u5B58\u5728\u65F6\uFF0C\u4EFB\u4E00\u62E6\u622A\u5668\u8FD4\u56DE false \u90FD\u4F1A\u4F7F\u540E\u7EED\u7684\u8BF7\u6C42\u65B9\u6CD5\u4E0D\u518D\u6267\u884C
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD8\u9700\u8981\u6CE8\u610F\uFF0C\u62E6\u622A\u5668\u6267\u884C\u6210\u529F\u540E\u54CD\u5E94\u7801\u4E3A <code>200</code>\uFF0C\u4F46\u54CD\u5E94\u6570\u636E\u4E3A\u7A7A\u3002Spring Boot \u57FA\u7840\u6559\u7A0B\u548C\u793A\u4F8B\u6E90\u7801\u5728\u8FD9\u91CC\u5B66\u4E60\uFF1Ahttps://github.com/javastacks/javastack\uFF0C\u975E\u5E38\u5168\u4E86\u3002\u5F53\u4F7F\u7528\u62E6\u622A\u5668\u5B9E\u73B0\u529F\u80FD\u540E\uFF0C\u9886\u5BFC\u7EC8\u4E8E\u796D\u51FA\u5927\u62DB\u4E86\uFF1A\u6211\u4EEC\u5DF2\u7ECF\u6709\u4E00\u4E2A Auth \u53C2\u6570\u4E86\uFF0Cappkey \u53EF\u4EE5\u4ECE Auth \u53C2\u6570\u91CC\u53D6\u5230\uFF0C\u53EF\u4EE5\u628A\u5728\u4E0D\u5728\u767D\u540D\u5355\u4F5C\u4E3A Auth \u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u5728 Auth \u65F6\u6821\u9A8C\uFF1Femmm\u2026 \u5410\u8840\u4E2D\u3002</p><p>\u641C\u7D22\u516C\u7EB5\u53F7\uFF1A<a href="https://mp.weixin.qq.com/s?__biz=MzI4OTA3NDQ0Nw==&amp;mid=2455548310&amp;idx=2&amp;sn=28559512311234ab380c18f124ac5246&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">MarkerHub</a>\uFF0C\u5173\u6CE8\u56DE\u590D[ <strong>vue</strong> ]\u83B7\u53D6\u524D\u540E\u7AEF\u5165\u95E8\u6559\u7A0B\uFF01</p><h2 id="argumentresolver" tabindex="-1"><a class="header-anchor" href="#argumentresolver" aria-hidden="true">#</a> <strong>ArgumentResolver</strong></h2><p>\u53C2\u6570\u89E3\u6790\u5668\u662F Spring \u63D0\u4F9B\u7684\u7528\u4E8E\u89E3\u6790\u81EA\u5B9A\u4E49\u53C2\u6570\u7684\u5DE5\u5177\uFF0C\u6211\u4EEC\u5E38\u7528\u7684 <code>@RequestParam</code> \u6CE8\u89E3\u5C31\u6709\u5B83\u7684\u5F71\u5B50\uFF0C\u4F7F\u7528\u5B83\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u53C2\u6570\u5728\u8FDB\u5165Controller Action\u4E4B\u524D\u5C31\u7EC4\u5408\u6210\u6211\u4EEC\u60F3\u8981\u7684\u6837\u5B50\u3002Spring \u4F1A\u7EF4\u62A4\u4E00\u4E2A <code>ResolverList</code>\uFF0C \u5728\u8BF7\u6C42\u5230\u8FBE\u65F6\uFF0CSpring \u53D1\u73B0\u6709\u81EA\u5B9A\u4E49\u7C7B\u578B\u53C2\u6570\uFF08\u975E\u57FA\u672C\u7C7B\u578B\uFF09\uFF0C \u4F1A\u4F9D\u6B21\u5C1D\u8BD5\u8FD9\u4E9B Resolver\uFF0C\u76F4\u5230\u6709\u4E00\u4E2A Resolver \u80FD\u89E3\u6790\u9700\u8981\u7684\u53C2\u6570\u3002\u8981\u5B9E\u73B0\u4E00\u4E2A\u53C2\u6570\u89E3\u6790\u5668\uFF0C\u9700\u8981\u5B9E\u73B0 <code>HandlerMethodArgumentResolver</code> \u63A5\u53E3\u3002</p><h3 id="\u5B9E\u73B0-2" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-2" aria-hidden="true">#</a> <strong>\u5B9E\u73B0</strong></h3><ol><li>\u5B9A\u4E49\u81EA\u5B9A\u4E49\u53C2\u6570\u7C7B\u578B <code>AuthParam</code>\uFF0C\u7C7B\u5185\u6709 appkey \u76F8\u5173\u5B57\u6BB5\uFF1B</li><li>\u5B9A\u4E49 <code>AuthParamResolver</code> \u5E76\u5B9E\u73B0 HandlerMethodArgumentResolver \u63A5\u53E3\uFF1B</li><li>\u5B9E\u73B0 <code>supportsParameter()</code> \u63A5\u53E3\u65B9\u6CD5\u5C06 AuthParam \u4E0E AuthParamResolver \u9002\u914D\u8D77\u6765\uFF1B</li><li>\u5B9E\u73B0 <code>resolveArgument()</code> \u63A5\u53E3\u65B9\u6CD5\u89E3\u6790 reqest \u5BF9\u8C61\u751F\u6210 AuthParam \u5BF9\u8C61\uFF0C\u5E76\u5728\u6B64\u6821\u9A8C AuthParam \uFF0C\u786E\u8BA4 appkey \u662F\u5426\u5728\u767D\u540D\u5355\u5185\uFF1B</li><li>\u5728 Controller Action \u65B9\u6CD5\u4E0A\u7B7E\u540D\u5185\u6DFB\u52A0 AuthParam \u53C2\u6570\u4EE5\u542F\u7528\u6B64 Resolver;</li></ol><p>\u5B9E\u73B0\u7684 AuthParamResolver \u7C7B\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Component
public class AuthParamResolver implements HandlerMethodArgumentResolver {

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.getParameterType().equals(AuthParam.class);
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        Whitelist whitelist = parameter.getMethodAnnotation(Whitelist.class);
        // \u901A\u8FC7 webRequest \u548C whitelist \u6821\u9A8C\u767D\u540D\u5355
        return new AuthParam();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u6269\u5C55-2" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-2" aria-hidden="true">#</a> <strong>\u6269\u5C55</strong></h3><p>\u5F53\u7136\uFF0C\u4F7F\u7528\u53C2\u6570\u89E3\u6790\u5668\u4E5F\u9700\u8981\u5355\u72EC\u914D\u7F6E\uFF0C\u6211\u4EEC\u540C\u6837\u5728 <code>WebMvcConfigurerAdapter</code>\u5185\u914D\u7F6E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Configuration
public class MvcConfiguration extends WebMvcConfigurerAdapter {

    @Override
    public void addArgumentResolvers(List&lt;HandlerMethodArgumentResolver&gt; argumentResolvers) {
        argumentResolvers.add(new AuthParamResolver());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u6B21\u5B9E\u73B0\u5B8C\u4E86\uFF0C\u6211\u8FD8\u6709\u4E9B\u4E0D\u653E\u5FC3\uFF0C\u4E8E\u662F\u5728\u7F51\u4E0A\u67E5\u627E\u662F\u5426\u8FD8\u6709\u5176\u4ED6\u65B9\u5F0F\u53EF\u4EE5\u5B9E\u73B0\u6B64\u529F\u80FD\uFF0C\u53D1\u73B0\u5E38\u89C1\u7684\u8FD8\u6709 <code>Filter</code>\u3002</p><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> <strong>Filter</strong></h2><p>Filter \u5E76\u4E0D\u662F Spring \u63D0\u4F9B\u7684\uFF0C\u5B83\u662F\u5728 Servlet \u89C4\u8303\u4E2D\u5B9A\u4E49\u7684\uFF0C\u662F Servlet \u5BB9\u5668\u652F\u6301\u7684\u3002\u88AB Filter \u8FC7\u6EE4\u7684\u8BF7\u6C42\uFF0C\u4E0D\u4F1A\u6D3E\u53D1\u5230 Spring \u5BB9\u5668\u4E2D\u3002\u5B83\u7684\u5B9E\u73B0\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u5B9E\u73B0 <code>javax.servlet.Filter</code>\u63A5\u53E3\u5373\u53EF\u3002\u7531\u4E8E\u4E0D\u5728 Spring \u5BB9\u5668\u4E2D\uFF0CFilter \u83B7\u53D6\u4E0D\u5230 Spring \u5BB9\u5668\u7684\u8D44\u6E90\uFF0C\u53EA\u80FD\u4F7F\u7528\u539F\u751F Java \u7684 ServletRequest \u548C ServletResponse \u6765\u83B7\u53D6\u8BF7\u6C42\u53C2\u6570\u3002\u53E6\u5916\uFF0C\u5728\u4E00\u4E2A Filter \u4E2D\u8981\u663E\u793A\u8C03\u7528 FilterChain \u7684 doFilter \u65B9\u6CD5\uFF0C\u4E0D\u7136\u8BA4\u4E3A\u8BF7\u6C42\u88AB\u62E6\u622A\u3002\u5B9E\u73B0\u7C7B\u4F3C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class WhitelistFilter implements javax.servlet.Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
  // \u521D\u59CB\u5316\u540E\u88AB\u8C03\u7528\u4E00\u6B21
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
     // \u5224\u65AD\u662F\u5426\u9700\u8981\u62E6\u622A
       chain.doFilter(request, response); // \u8BF7\u6C42\u901A\u8FC7\u8981\u663E\u793A\u8C03\u7528
    }

    @Override
    public void destroy() {
     // \u88AB\u9500\u6BC1\u65F6\u8C03\u7528\u4E00\u6B21
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u6269\u5C55-3" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-3" aria-hidden="true">#</a> <strong>\u6269\u5C55</strong></h3><p>Filter \u4E5F\u9700\u8981\u663E\u793A\u914D\u7F6E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Configuration
public class FilterConfiguration {

    @Bean
    public FilterRegistrationBean someFilterRegistration() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(new WhitelistFilter());
        registration.addUrlPatterns(&quot;/*&quot;);
        registration.setName(&quot;whitelistFilter&quot;);
        registration.setOrder(1); // \u8BBE\u7F6E\u8FC7\u6EE4\u5668\u88AB\u8C03\u7528\u7684\u987A\u5E8F
        return registration;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> <strong>\u5C0F\u7ED3</strong></h2><p>\u56DB\u79CD\u5B9E\u73B0\u65B9\u5F0F\u90FD\u6709\u5176\u9002\u5408\u7684\u573A \u666F\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4E4B\u95F4\u7684\u8C03\u7528\u987A\u5E8F\u5982\u4F55\u5462\uFF1FFilter \u662F Servlet \u5B9E\u73B0\u7684\uFF0C\u81EA\u7136\u662F\u6700\u5148\u88AB\u8C03\u7528\uFF0C\u540E\u7EED\u88AB\u8C03\u7528\u7684\u662F Interceptor \u88AB\u62E6\u622A\u4E86\u81EA\u7136\u4E0D\u9700\u8981\u540E\u7EED\u518D\u8FDB\u884C\u5904\u7406\uFF0C\u7136\u540E\u662F \u53C2\u6570\u89E3\u6790\u5668\uFF0C\u6700\u540E\u624D\u662F\u5207\u9762\u7684\u5207\u70B9\u3002</p>`,41);function r(i,l){return s}var o=e(a,[["render",r],["__file","SpringBoot\u9879\u76EE\u9274\u6743\u7684 4 \u79CD\u65B9\u5F0F.html.vue"]]);export{o as default};
