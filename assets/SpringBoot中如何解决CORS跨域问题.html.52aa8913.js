import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.f1128457.js";const a={},r=s(`<h1 id="springboot\u4E2D\u5982\u4F55\u89E3\u51B3cors\u8DE8\u57DF\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#springboot\u4E2D\u5982\u4F55\u89E3\u51B3cors\u8DE8\u57DF\u95EE\u9898" aria-hidden="true">#</a> SpringBoot\u4E2D\u5982\u4F55\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898</h1><p>CORS\uFF08Cross-Origin Resource Sharing\uFF09&quot;\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB&quot;\uFF0C\u662F\u4E00\u4E2AW3C\u6807\u51C6\uFF0C\u5B83\u5141\u8BB8\u6D4F\u89C8\u5668\u5411\u8DE8\u57DF\u670D\u52A1\u5668\u53D1\u9001Ajax\u8BF7\u6C42\uFF0C\u6253\u7834\u4E86Ajax\u53EA\u80FD\u8BBF\u95EE\u672C\u7AD9\u5185\u7684\u8D44\u6E90\u9650\u5236\u3002</p><p>\u5728\u524D\u540E\u5206\u79BB\u7684\u67B6\u6784\u4E0B\uFF0C\u6211\u4EEC\u7ECF\u5E38\u4F1A\u9047\u5230\u8DE8\u57DFCORS\u95EE\u9898\uFF0C\u5728\u6D4F\u89C8\u5668\u4E0A\u7684\u8868\u73B0\u5C31\u662F\u51FA\u73B0\u5982\u4E0B\u4E00\u6BB5\u9519\u8BEF\u63D0\u793A\uFF1A<code>No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource.</code></p><p>\u4E0B\u9762\u770B\u4E00\u4E0B\u5982\u4F55\u8BA9\u4F60\u7684SpringBoot\u9879\u76EE\u652F\u6301CORS\u8DE8\u57DF\u3002</p><h2 id="springboot\u5904\u7406\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#springboot\u5904\u7406\u8DE8\u57DF" aria-hidden="true">#</a> SpringBoot\u5904\u7406\u8DE8\u57DF</h2><p>\u5728SpringBoot\u540E\u7AEF\u5904\u7406\u8DE8\u57DF\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728\u9879\u76EE\u4E2D\u6DFB\u52A0\u5982\u4E0B\u4E00\u4E2A\u914D\u7F6E\u7C7B\u5373\u53EF\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * Spring Boot 2.0 \u89E3\u51B3\u8DE8\u57DF\u95EE\u9898
 * @Author javadaily
 */
@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {


 @Bean
 public CorsFilter corsFilter() {
  final UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
  final CorsConfiguration corsConfiguration = new CorsConfiguration();
  /* \u662F\u5426\u5141\u8BB8\u8BF7\u6C42\u5E26\u6709\u9A8C\u8BC1\u4FE1\u606F */
  corsConfiguration.setAllowCredentials(true);
  /* \u5141\u8BB8\u8BBF\u95EE\u7684\u5BA2\u6237\u7AEF\u57DF\u540D */
  corsConfiguration.addAllowedOrigin(&quot;*&quot;);
  /* \u5141\u8BB8\u670D\u52A1\u7AEF\u8BBF\u95EE\u7684\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934 */
  corsConfiguration.addAllowedHeader(&quot;*&quot;);
  /* \u5141\u8BB8\u8BBF\u95EE\u7684\u65B9\u6CD5\u540D,GET POST\u7B49 */
  corsConfiguration.addAllowedMethod(&quot;*&quot;);
  urlBasedCorsConfigurationSource.registerCorsConfiguration(&quot;/**&quot;, corsConfiguration);
  return new CorsFilter(urlBasedCorsConfigurationSource);
 }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u5728\u914D\u7F6E\u7C7B\u4E2D\u6CE8\u5165\u4E86 <code>CorsFilter</code>\u5E76\u91CD\u5199\u4E86\u76F8\u5173\u914D\u7F6E\uFF0C\u5927\u5BB6\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u4E1A\u52A1\u9700\u6C42\u8BF7\u91CC\u9762\u7684 * \u6539\u6210\u5177\u4F53\u7684\u5C5E\u6027\u503C\u3002</p><p>\u901A\u8FC7\u4E0A\u9762\u7684\u914D\u7F6E\u6211\u4EEC\u57FA\u672C\u53EF\u4EE5\u89E3\u51B3\u540E\u7AEF\u8DE8\u57DF\u95EE\u9898\uFF0C\u4F46\u662F\u5728\u4E00\u4E9B\u7279\u5B9A\u60C5\u51B5\u4E0B\u8FD8\u662F\u8FD8\u51FA\u73B0\u8DE8\u57DF\u3002</p><h2 id="\u7279\u6B8A\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u60C5\u51B5" aria-hidden="true">#</a> \u7279\u6B8A\u60C5\u51B5</h2><p>\u5F53\u9879\u76EE\u4E2D\u8FD8\u6709\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668\uFF0C\u5E76\u4E14\u5728\u8FC7\u6EE4\u5668\u4E2D\u901A\u8FC7 <code>response.getWriter().print()</code>\u76F4\u63A5\u5411\u5BA2\u6237\u7AEF\u8F93\u51FA\u8FD4\u56DE\u4FE1\u606F\uFF1A</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PxMzT0Oibf4gmJSRJWiaelpqwkHDCNfzDh0mdnXvU2EXbqAibZtQFQCbE7GialfnN79o7o15eMgrwXXtkoKLg974NQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u662F\u4E0D\u4F1A\u7EE7\u7EED\u6267\u884C\u540E\u9762\u7684\u8FC7\u6EE4\u5668\u94FE\u7684\u3002</p><p><strong>\u800C\u5728SpringBoot\u4E2D\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8EWebMvcConfigurer\u4E2D\u5B9A\u4E49\u7684\u8FC7\u6EE4\u5668</strong>\uFF0C\u6240\u4EE5\u6B64\u65F6\u7531\u4E8E\u672A\u7ECF\u8FC7CORS\u8FC7\u6EE4\u5668\u7684\u5904\u7406\u8FD8\u662F\u4F1A\u51FA\u73B0\u8DE8\u57DF\u73B0\u8C61\u3002</p><p>\u8FD9\u79CD\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u6539\u5199CorsFilter\u7684\u5199\u6CD5\uFF0C\u8BA9\u5176\u5728\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668\u4E4B\u524D\u6267\u884C\u3002</p><h3 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5</h3><ul><li>\u81EA\u5B9A\u4E49Cors\u8FC7\u6EE4\u5668</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class CustomerCorsFilter extends CorsFilter {

    public CustomerCorsFilter() {
        super(configurationSource());
    }

    private static UrlBasedCorsConfigurationSource configurationSource() {
        // CORS\u6388\u6743
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin(&quot;*&quot;);
        config.addAllowedHeader(&quot;*&quot;);
        config.addAllowedMethod(&quot;*&quot;);
        config.addExposedHeader(HttpHeaders.SET_COOKIE);
        config.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration(&quot;/**&quot;, config);
                return source;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>\u901A\u8FC7\u914D\u7F6E\u7C7B\u6307\u5B9A\u8FC7\u6EE4\u5668\u7684\u4F18\u5148\u7EA7</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Configuration
public class FilterConfig {

    @Bean
    public Filter authFilter(){
        return new AuthFilter();
    }


    /**
     * WARNING \uFF1A\u8DE8\u57DF\u8FC7\u6EE4\u5668\uFF0C\u6CE8\u610F\u6267\u884C\u987A\u5E8F\uFF0C\u5FC5\u987B\u8981\u5728AuthFilter\u8FC7\u6EE4\u5668\u4E4B\u540E
     * @return
     */
    @Bean
    public FilterRegistrationBean corsFilterRegistration() {

        FilterRegistrationBean registration = new FilterRegistrationBean();
        //\u6DFB\u52A0\u8FC7\u6EE4\u5668
        registration.setFilter(new CustomerCorsFilter());
        List&lt;String&gt; urlList = new ArrayList&lt;&gt;();
        urlList.add(&quot;/*&quot;);
        //\u8BBE\u7F6E\u8FC7\u6EE4\u8DEF\u5F84\uFF0C/*\u6240\u6709\u8DEF\u5F84
        registration.setUrlPatterns(urlList);
        //\u6DFB\u52A0\u9ED8\u8BA4\u53C2\u6570
        registration.setName(&quot;CorsFilter&quot;);
        //\u8BBE\u7F6E\u4F18\u5148\u7EA7
        registration.setOrder(-1);
        return registration;
    }


    @Bean
    public FilterRegistrationBean authFilterRegistration() {

        FilterRegistrationBean registration = new FilterRegistrationBean();
        //\u6DFB\u52A0\u8FC7\u6EE4\u5668
        registration.setFilter(authFilter());
        List&lt;String&gt; urlList = new ArrayList&lt;&gt;();
        urlList.add(&quot;/*&quot;);
        //\u8BBE\u7F6E\u8FC7\u6EE4\u8DEF\u5F84\uFF0C/*\u6240\u6709\u8DEF\u5F84
        registration.setUrlPatterns(urlList);
        //\u6DFB\u52A0\u9ED8\u8BA4\u53C2\u6570
        registration.setName(&quot;authFilter&quot;);
        //\u8BBE\u7F6E\u4F18\u5148\u7EA7
        registration.setOrder(1);
        return registration;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>\u901A\u8FC7setOrder()\u65B9\u6CD5\u6307\u5B9A\u8FC7\u6EE4\u5668\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u7528\u4EE5\u4FDD\u8BC1CORS\u8FC7\u6EE4\u5668\u5148\u5165\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668\u6267\u884C\u3002<strong>\u6CE8\u610F\uFF1Aorder\u7684\u987A\u5E8F\u8D8A\u5C0F\u4F18\u5148\u7EA7\u8D8A\u9AD8\u3002</strong></p>`,21);function e(i,l){return r}var o=n(a,[["render",e],["__file","SpringBoot\u4E2D\u5982\u4F55\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898.html.vue"]]);export{o as default};
