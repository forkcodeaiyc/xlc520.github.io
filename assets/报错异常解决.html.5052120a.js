import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as e}from"./app.f1128457.js";const s={},a=e(`<h1 id="\u5F00\u53D1\u4E2D\u62A5\u9519\u5F02\u5E38\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u4E2D\u62A5\u9519\u5F02\u5E38\u89E3\u51B3" aria-hidden="true">#</a> \u5F00\u53D1\u4E2D\u62A5\u9519\u5F02\u5E38\u89E3\u51B3</h1><p>2022\u5E742\u67086\u65E5 \u5F00\u59CB\u6574\u7406\u5F00\u53D1\u4E2D\u9047\u5230\u7684\u95EE\u9898</p><h2 id="vue\u6253\u5305\u90E8\u7F72-\u5237\u65B0404" tabindex="-1"><a class="header-anchor" href="#vue\u6253\u5305\u90E8\u7F72-\u5237\u65B0404" aria-hidden="true">#</a> vue\u6253\u5305\u90E8\u7F72 \u5237\u65B0404</h2><blockquote><p>2022\u5E743\u670820\u65E522:14:21</p></blockquote><p><code>vue hash</code>\u6A21\u5F0F\u4E0B\uFF0C<code>URL</code>\u4E2D\u5B58\u5728<code>&#39;#&#39;</code>\uFF0C\u7528<code>&#39;history&#39;</code>\u6A21\u5F0F\u5C31\u80FD\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u4F46\u662F<code>history</code>\u6A21\u5F0F\u4F1A\u51FA\u73B0\u5237\u65B0\u9875\u9762\u540E\uFF0C\u9875\u9762\u51FA\u73B0404\u3002\u89E3\u51B3\u7684\u529E\u6CD5\u662F\u7528<code>nginx</code>\u914D\u7F6E\u4E00\u4E0B\u3002 \u5728<code>nginx</code>\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539</p><p><strong>\u65B9\u6CD5\u4E00\uFF1A</strong></p><div class="language-awk ext-awk line-numbers-mode"><pre class="language-awk"><code>location /{
    root   /data/nginx/html;
    index  index.html index.htm;
    if (!-e $request_filename) {
        rewrite ^/(.*) /index.html last;
        break;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>\u65B9\u6CD5\u4E8C\uFF1A</strong> vue.js\u5B98\u65B9\u6559\u7A0B\u91CC\u63D0\u5230\u7684</p><p><a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html" target="_blank" rel="noopener noreferrer">https://router.vuejs.org/zh/guide/essentials/history-mode.html</a></p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>  server {
		listen       80;
        server_name  localhost;
        
    	location / {
            root   html;
            # \u7B2C\u4E00\u79CD\u65B9\u6CD5
            try_files $uri $uri/ /index.html;
            # \u7B2C\u4E8C\u79CD\u65B9\u6CD5\uFF0C\u9700\u8981\u6307\u5411\u4E0B\u9762\u7684@router\u5426\u5219\u4F1A\u51FA\u73B0vue\u7684\u8DEF\u7531\u5728nginx\u4E2D\u5237\u65B0\u51FA\u73B0404
            #try_files $uri $uri/ @router;
            index  index.html index.htm;
        }
        #\u5BF9\u5E94\u4E0A\u9762\u7684@router\uFF0C\u4E3B\u8981\u539F\u56E0\u662F\u8DEF\u7531\u7684\u8DEF\u5F84\u8D44\u6E90\u5E76\u4E0D\u662F\u4E00\u4E2A\u771F\u5B9E\u7684\u8DEF\u5F84\uFF0C\u6240\u4EE5\u65E0\u6CD5\u627E\u5230\u5177\u4F53\u7684\u6587\u4EF6
        #\u56E0\u6B64\u9700\u8981rewrite\u5230index.html\u4E2D\uFF0C\u7136\u540E\u4EA4\u7ED9\u8DEF\u7531\u5728\u5904\u7406\u8BF7\u6C42\u8D44\u6E90
        location @router {
            rewrite ^.*$ /index.html last;
        } 
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>\u65B9\u6848\u4E09</strong></p><p>\u53BB\u6389\u8FD9\u884C\u4EE3\u7801\u3002url\u4E0A\u4F1A\u51FA\u73B0\u5E26\u6709#\u7684\u5730\u5740\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mode: &#39;history&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_1-spring-boot\u96C6\u6210druid\u5F02\u5E38discard-long-time-none-received-connection" tabindex="-1"><a class="header-anchor" href="#_1-spring-boot\u96C6\u6210druid\u5F02\u5E38discard-long-time-none-received-connection" aria-hidden="true">#</a> 1.Spring Boot\u96C6\u6210Druid\u5F02\u5E38discard long time none received connection.</h2><blockquote><p>2022\u5E742\u67086\u65E515:54:03</p></blockquote><h3 id="spring-boot\u96C6\u6210druid\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#spring-boot\u96C6\u6210druid\u5F02\u5E38" aria-hidden="true">#</a> Spring Boot\u96C6\u6210Druid\u5F02\u5E38</h3><p>\u5728Spring Boot\u96C6\u6210Druid\u9879\u76EE\u4E2D\uFF0C\u53D1\u73B0\u9519\u8BEF\u65E5\u5FD7\u4E2D\u9891\u7E41\u7684\u51FA\u73B0\u5982\u4E0B\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>discard long time none received connection. , jdbcUrl : jdbc:mysql://******?useSSL=false&amp;allowPublicKeyRetrieval=true&amp;useUnicode=true&amp;characterEncoding=UTF-8, version : 1.2.3, lastPacketReceivedIdleMillis : 172675
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7ECF\u8FC7\u6392\u67E5\u53D1\u73B0\u662FDruid\u7248\u672C\u5BFC\u81F4\u7684\u5F02\u5E38\uFF0C\u57281.2.2\u53CA\u4EE5\u524D\u7248\u672C\u5E76\u672A\u51FA\u73B0\u5982\u6B64\u5F02\u5E38\u3002\u800C\u5728\u5176\u4EE5\u4E0A\u7248\u672C\u5747\u5B58\u5728\u6B64\u95EE\u9898\uFF0C\u4E0B\u9762\u5C31\u6765\u5206\u6790\u4E00\u4E0B\u5F02\u5E38\u539F\u56E0\u53CA\u89E3\u51B3\u65B9\u6848\u3002</p><h3 id="\u5F02\u5E38\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u5206\u6790" aria-hidden="true">#</a> \u5F02\u5E38\u5206\u6790</h3><p>\u9996\u5148\u4E0A\u9762\u7684\u5F02\u5E38\u5E76\u4E0D\u5F71\u54CD\u7A0B\u5E8F\u7684\u6B63\u5E38\u8FD0\u884C\uFF0C\u4F46\u4F5C\u4E3A\u7A0B\u5E8F\u5458\u770B\u5230\u7A0B\u5E8F\u4E2D\u4E0D\u505C\u7684\u51FA\u73B0\u5F02\u5E38\u8FD8\u662F\u96BE\u4EE5\u5FCD\u53D7\u7684\u3002\u6240\u4EE5\u8FD8\u662F\u8981\u5228\u6839\u95EE\u5E95\u7684\u89E3\u51B3\u4E00\u4E0B\u7684\u3002</p><p>\u8DDF\u8E2A\u5806\u6808\u4FE1\u606F\u4F1A\u53D1\u73B0\u5BF9\u5E94\u7684\u5F02\u5E38\u662F\u4ECEcom.alibaba.druid.pool.DruidAbstractDataSource#testConnectionInternal\u65B9\u6CD5\u4E2D\u629B\u51FA\u7684\uFF0C\u5BF9\u5E94\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>if (valid &amp;&amp; isMySql) { // unexcepted branch
    long lastPacketReceivedTimeMs = MySqlUtils.getLastPacketReceivedTimeMs(conn);
    if (lastPacketReceivedTimeMs &gt; 0) {
        long mysqlIdleMillis = currentTimeMillis - lastPacketReceivedTimeMs;
        if (lastPacketReceivedTimeMs &gt; 0 //
                &amp;&amp; mysqlIdleMillis &gt;= timeBetweenEvictionRunsMillis) {
            discardConnection(holder);
            String errorMsg = &quot;discard long time none received connection. &quot;
                    + &quot;, jdbcUrl : &quot; + jdbcUrl
                    + &quot;, jdbcUrl : &quot; + jdbcUrl
                    + &quot;, lastPacketReceivedIdleMillis : &quot; + mysqlIdleMillis;
            LOG.error(errorMsg);
            return false;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0CMySqlUtils.getLastPacketReceivedTimeMs(conn) \u662F\u83B7\u53D6\u4E0A\u4E00\u6B21\u4F7F\u7528\u7684\u65F6\u95F4\uFF0CmysqlIdleMillis \u5C31\u662F\u8BA1\u7B97\u51FA\u6765\u7A7A\u95F2\u7684\u65F6\u95F4\uFF0CtimeBetweenEvictionRunsMillis \u662F\u5E38\u91CF60\u79D2\u3002\u5982\u679C\u8FDE\u63A5\u7A7A\u95F2\u4E8660\u79D2\u4EE5\u4E0A\uFF0C\u90A3\u5C31discardConnection(holder) \u4E22\u5F03\u8FD9\u4E2A\u65E7\u8FDE\u63A5\u5E76\u987A\u5E26\u6253\u5370\u4E86\u4E00\u4E2A\u65E5\u5FD7LOG.warn(errorMsg)\u3002</p><h3 id="\u539F\u7406\u8FFD\u8E2A" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u8FFD\u8E2A" aria-hidden="true">#</a> \u539F\u7406\u8FFD\u8E2A</h3><p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u770B\u5230\u8FDB\u5165\u8BE5\u4E1A\u52A1\u903B\u8F91\u662F\u6709\u524D\u63D0\u6761\u4EF6\u7684\uFF0C\u4E5F\u5C31\u662Fvalid\u548CisMySql\u53D8\u91CF\u540C\u65F6\u4E3Atrue\u3002isMySql\u4E3Atrue\u662F\u5FC5\u987B\u7684\uFF0C\u6211\u4EEC\u4F7F\u7528\u7684\u672C\u8EAB\u5C31\u662F<a href="https://cloud.tencent.com/product/cdb?from=10680" target="_blank" rel="noopener noreferrer">Mysql</a><a href="https://cloud.tencent.com/solution/database?from=10680" target="_blank" rel="noopener noreferrer">\u6570\u636E\u5E93</a>\u3002\u90A3\u4E48\u662F\u5426\u53EF\u4EE5\u8BA9valid\u4E3Afalse\u5462\uFF1F\u8FD9\u6837\u4E0D\u5C31\u4E0D\u4F1A\u8FDB\u5165\u8BE5\u4E1A\u52A1\u5904\u7406\u4E86\u5417\uFF1F</p><p>\u6765\u770B\u770Bvalid\u7684\u6765\u6E90\uFF0C\u8FD8\u662F\u5728\u8BE5\u65B9\u6CD5\u7684\u4E0A\u9762\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>boolean valid = validConnectionChecker.isValidConnection(conn, validationQuery, validationQueryTimeout);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6211\u4EEC\u627E\u5230validConnectionChecker\u7684Mysql\u5B9E\u73B0\u5B50\u7C7BMySqlValidConnectionChecker\uFF0C\u8BE5\u7C7B\u4E2D\u5BF9isValidConnection\u7684\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public boolean isValidConnection(Connection conn, String validateQuery, int validationQueryTimeout) throws Exception {
    if (conn.isClosed()) {
        return false;
    }

    if (usePingMethod) {
        if (conn instanceof DruidPooledConnection) {
            conn = ((DruidPooledConnection) conn).getConnection();
        }

        if (conn instanceof ConnectionProxy) {
            conn = ((ConnectionProxy) conn).getRawObject();
        }

        if (clazz.isAssignableFrom(conn.getClass())) {
            if (validationQueryTimeout &lt;= 0) {
                validationQueryTimeout = DEFAULT_VALIDATION_QUERY_TIMEOUT;
            }

            try {
                ping.invoke(conn, true, validationQueryTimeout * 1000);
            } catch (InvocationTargetException e) {
                Throwable cause = e.getCause();
                if (cause instanceof SQLException) {
                    throw (SQLException) cause;
                }
                throw e;
            }
            return true;
        }
    }

    String query = validateQuery;
    if (validateQuery == null || validateQuery.isEmpty()) {
        query = DEFAULT_VALIDATION_QUERY;
    }

    Statement stmt = null;
    ResultSet rs = null;
    try {
        stmt = conn.createStatement();
        if (validationQueryTimeout &gt; 0) {
            stmt.setQueryTimeout(validationQueryTimeout);
        }
        rs = stmt.executeQuery(query);
        return true;
    } finally {
        JdbcUtils.close(rs);
        JdbcUtils.close(stmt);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u4E0A\u8FF0\u65B9\u6CD5\u4E2D\u6709\u4E09\u4E2A\u8FD4\u56DE\u7684\u5730\u65B9\uFF1A\u7B2C\u4E00\u4E2A\u8FDE\u63A5\u5DF2\u5173\u95ED\uFF1B\u7B2C\u4E8C\u4E2A\u4F7F\u7528ping\u7684\u5F62\u5F0F\u8FDB\u884C\u68C0\u67E5\uFF1B\u7B2C\u4E09\uFF0C\u4F7F\u7528select 1\u7684\u65B9\u5F0F\u8FDB\u884C\u68C0\u67E5\u3002\u800C\u4F7F\u7528ping\u7684\u5F62\u5F0F\u68C0\u67E5\u65F6\uFF0C\u65E0\u8BBA\u662F\u5426\u629B\u5F02\u5E38\u90FD\u4F1A\u8FD4\u56DEtrue\u3002\u8FD9\u91CC\u6211\u4EEC\u7981\u7528\u8BE5\u6A21\u5F0F\u5373\u53EF\u3002</p><p>\u8FDB\u5165ping\u7684\u4E1A\u52A1\u903B\u8F91\u4E3B\u8981\u9760\u53D8\u91CFusePingMethod\u6765\u5224\u65AD\uFF0C\u8FFD\u8E2A\u4EE3\u7801\u4F1A\u53D1\u73B0\u5728\u8FD9\u91CC\u8FDB\u884C\u7684\u8BBE\u7F6E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public void configFromProperties(Properties properties) {
    String property = properties.getProperty(&quot;druid.mysql.usePingMethod&quot;);
    if (&quot;true&quot;.equals(property)) {
        setUsePingMethod(true);
    } else if (&quot;false&quot;.equals(property)) {
        setUsePingMethod(false);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u90A3\u4E48\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u6211\u4EEC\u628A\u7CFB\u7EDF\u5C5E\u6027druid.mysql.usePingMethod\u8BBE\u7F6E\u4E3Afalse\u5373\u53EF\u7981\u7528\u8BE5\u529F\u80FD\u3002</p><h3 id="\u7981\u7528ping-method" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528ping-method" aria-hidden="true">#</a> \u7981\u7528Ping Method</h3><p>\u627E\u5230\u4E86\u95EE\u9898\u7684\u6839\u6E90\uFF0C\u90A3\u4E48\u5269\u4E0B\u7684\u5C31\u662F\u5982\u4F55\u7981\u7528\u4E86\uFF0C\u901A\u5E38\u6709\u4E09\u79CD\u5F62\u5F0F\u3002</p><p>\u7B2C\u4E00\uFF0C\u5728\u542F\u52A8\u7A0B\u5E8F\u65F6\u5728\u8FD0\u884C\u53C2\u6570\u4E2D\u589E\u52A0\uFF1A-Ddruid.mysql.usePingMethod=false\u3002</p><p>\u7B2C\u4E8C\uFF0C\u5728Spring Boot\u9879\u76EE\u4E2D\uFF0C\u53EF\u5728\u542F\u52A8\u7C7B\u4E2D\u6DFB\u52A0\u5982\u4E0B\u9759\u6001\u4EE3\u7801\u5FEB\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>static {
    System.setProperty(&quot;druid.mysql.usePingMethod&quot;,&quot;false&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7B2C\u4E09\uFF0C\u7C7B\u6587\u4EF6\u914D\u7F6E\u3002\u5728\u9879\u76EE\u7684DruidConfig\u7C7B\u4E2D\u65B0\u589E\u52A0\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/*
* \u89E3\u51B3druid \u65E5\u5FD7\u62A5\u9519\uFF1Adiscard long time none received connection:xxx
* */
@PostConstruct
public void setProperties(){
    System.setProperty(&quot;druid.mysql.usePingMethod&quot;,&quot;false&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u81F3\u6B64\uFF0C\u5DF2\u53EF\u4EE5\u6210\u529F\u5173\u95ED\u8BE5\u529F\u80FD\uFF0C\u5F02\u5E38\u4FE1\u606F\u518D\u4E5F\u4E0D\u4F1A\u51FA\u73B0\u4E86\u3002</p><h3 id="\u4E3A\u4EC0\u4E48\u8981\u6E05\u7A7A\u7A7A\u95F260\u79D2\u4EE5\u4E0A\u7684\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u6E05\u7A7A\u7A7A\u95F260\u79D2\u4EE5\u4E0A\u7684\u8FDE\u63A5" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u6E05\u7A7A\u7A7A\u95F260\u79D2\u4EE5\u4E0A\u7684\u8FDE\u63A5</h3><p>\u731C\u6D4B\uFF0C\u963F\u91CC\u7ED9\u6570\u636E\u5E93\u8BBE\u7F6E\u7684\u6570\u636E\u5E93\u7A7A\u95F2\u7B49\u5F85\u65F6\u95F4\u662F60\u79D2\uFF0Cmysql\u6570\u636E\u5E93\u5230\u4E86\u7A7A\u95F2\u7B49\u5F85\u65F6\u95F4\u5C06\u5173\u95ED\u7A7A\u95F2\u7684\u8FDE\u63A5\uFF0C\u4EE5\u63D0\u5347\u6570\u636E\u5E93\u670D\u52A1\u5668\u7684\u5904\u7406\u80FD\u529B\u3002</p><p>MySQL\u7684\u9ED8\u8BA4\u7A7A\u95F2\u7B49\u5F85\u65F6\u95F4\u662F8\u5C0F\u65F6\uFF0C\u5C31\u662F\u300Cwait_timeout\u300D\u7684\u914D\u7F6E\u503C\u3002\u5982\u679C\u6570\u636E\u5E93\u4E3B\u52A8\u5173\u95ED\u4E86\u7A7A\u95F2\u7684\u8FDE\u63A5\uFF0C\u800C\u8FDE\u63A5\u6C60\u5E76\u4E0D\u77E5\u9053\uFF0C\u8FD8\u5728\u4F7F\u7528\u8FD9\u4E2A\u8FDE\u63A5\uFF0C\u5C31\u4F1A\u4EA7\u751F\u5F02\u5E38\u3002</p><h2 id="_2-\u6570\u636E\u5E93\u8BED\u53E5\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u636E\u5E93\u8BED\u53E5\u9519\u8BEF" aria-hidden="true">#</a> 2.\u6570\u636E\u5E93\u8BED\u53E5\u9519\u8BEF</h2><p>1.limit\u653E\u5728where\u540E\u9762</p><p>\u6B63\u786E\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>select * from table where delete=1 limit 1,5;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9519\u8BEF\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>select * from table limit 1,5 where delete=1;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,51);function r(i,l){return a}var c=n(s,[["render",r],["__file","\u62A5\u9519\u5F02\u5E38\u89E3\u51B3.html.vue"]]);export{c as default};
