import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as e}from"./app.f1128457.js";const s={},a=e(`<h1 id="\u4E07\u5B57\u603B\u7ED3-\u4F53\u7CFB\u5316\u5E26\u4F60\u5168\u9762\u8BA4\u8BC6-nginx" tabindex="-1"><a class="header-anchor" href="#\u4E07\u5B57\u603B\u7ED3-\u4F53\u7CFB\u5316\u5E26\u4F60\u5168\u9762\u8BA4\u8BC6-nginx" aria-hidden="true">#</a> \u4E07\u5B57\u603B\u7ED3\uFF0C\u4F53\u7CFB\u5316\u5E26\u4F60\u5168\u9762\u8BA4\u8BC6 Nginx</h1><h1 id="nginx-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#nginx-\u6982\u8FF0" aria-hidden="true">#</a> Nginx \u6982\u8FF0</h1><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/71499A3FDD1EB5D9F173A41782597C20.jpg" alt="img"></p><p><code>Nginx</code> \u662F\u5F00\u6E90\u3001\u9AD8\u6027\u80FD\u3001\u9AD8\u53EF\u9760\u7684 <code>Web</code> \u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u800C\u4E14\u652F\u6301\u70ED\u90E8\u7F72\uFF0C\u51E0\u4E4E\u53EF\u4EE5\u505A\u5230 7 * 24 \u5C0F\u65F6\u4E0D\u95F4\u65AD\u8FD0\u884C\uFF0C\u5373\u4F7F\u8FD0\u884C\u51E0\u4E2A\u6708\u4E5F\u4E0D\u9700\u8981\u91CD\u65B0\u542F\u52A8\uFF0C\u8FD8\u80FD\u5728\u4E0D\u95F4\u65AD\u670D\u52A1\u7684\u60C5\u51B5\u4E0B\u5BF9\u8F6F\u4EF6\u7248\u672C\u8FDB\u884C\u70ED\u66F4\u65B0\u3002\u6027\u80FD\u662F <code>Nginx</code> \u6700\u91CD\u8981\u7684\u8003\u91CF\uFF0C\u5176\u5360\u7528\u5185\u5B58\u5C11\u3001\u5E76\u53D1\u80FD\u529B\u5F3A\u3001\u80FD\u652F\u6301\u9AD8\u8FBE 5w \u4E2A\u5E76\u53D1\u8FDE\u63A5\u6570\uFF0C\u6700\u91CD\u8981\u7684\u662F\uFF0C <code>Nginx</code> \u662F\u514D\u8D39\u7684\u5E76\u53EF\u4EE5\u5546\u4E1A\u5316\uFF0C\u914D\u7F6E\u4F7F\u7528\u4E5F\u6BD4\u8F83\u7B80\u5355\u3002</p><h1 id="nginx-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#nginx-\u7279\u70B9" aria-hidden="true">#</a> Nginx \u7279\u70B9</h1><ul><li>\u9AD8\u5E76\u53D1\u3001\u9AD8\u6027\u80FD\uFF1B</li><li>\u6A21\u5757\u5316\u67B6\u6784\u4F7F\u5F97\u5B83\u7684\u6269\u5C55\u6027\u975E\u5E38\u597D\uFF1B</li><li>\u5F02\u6B65\u975E\u963B\u585E\u7684\u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\u8FD9\u70B9\u548C <code>Node.js</code> \u76F8\u4F3C\uFF1B</li><li>\u76F8\u5BF9\u4E8E\u5176\u5B83\u670D\u52A1\u5668\u6765\u8BF4\u5B83\u53EF\u4EE5\u8FDE\u7EED\u51E0\u4E2A\u6708\u751A\u81F3\u66F4\u957F\u800C\u4E0D\u9700\u8981\u91CD\u542F\u670D\u52A1\u5668\u4F7F\u5F97\u5B83\u5177\u6709\u9AD8\u53EF\u9760\u6027\uFF1B</li><li>\u70ED\u90E8\u7F72\u3001\u5E73\u6ED1\u5347\u7EA7\uFF1B</li><li>\u5B8C\u5168\u5F00\u6E90\uFF0C\u751F\u6001\u7E41\u8363\uFF1B</li></ul><h1 id="nginx-\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#nginx-\u4F5C\u7528" aria-hidden="true">#</a> Nginx \u4F5C\u7528</h1><p>Nginx \u7684\u6700\u91CD\u8981\u7684\u51E0\u4E2A\u4F7F\u7528\u573A\u666F\uFF1A</p><ol><li>\u9759\u6001\u8D44\u6E90\u670D\u52A1\uFF0C\u901A\u8FC7\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u63D0\u4F9B\u670D\u52A1\uFF1B</li><li>\u53CD\u5411\u4EE3\u7406\u670D\u52A1\uFF0C\u5EF6\u4F38\u51FA\u5305\u62EC\u7F13\u5B58\u3001\u8D1F\u8F7D\u5747\u8861\u7B49\uFF1B</li><li><code>API</code> \u670D\u52A1\uFF0C <code>OpenResty</code> \uFF1B</li></ol><p>\u5BF9\u4E8E\u524D\u7AEF\u6765\u8BF4 <code>Node.js</code> \u5E76\u4E0D\u964C\u751F\uFF0C <code>Nginx</code> \u548C <code>Node.js</code> \u7684\u5F88\u591A\u7406\u5FF5\u7C7B\u4F3C\uFF0C <code>HTTP</code> \u670D\u52A1\u5668\u3001\u4E8B\u4EF6\u9A71\u52A8\u3001\u5F02\u6B65\u975E\u963B\u585E\u7B49\uFF0C\u4E14 <code>Nginx</code> \u7684\u5927\u90E8\u5206\u529F\u80FD\u4F7F\u7528 <code>Node.js</code> \u4E5F\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u4F46 <code>Nginx</code> \u548C <code>Node.js</code> \u5E76\u4E0D\u51B2\u7A81\uFF0C\u90FD\u6709\u81EA\u5DF1\u64C5\u957F\u7684\u9886\u57DF\u3002<code>Nginx</code> \u64C5\u957F\u4E8E\u5E95\u5C42\u670D\u52A1\u5668\u7AEF\u8D44\u6E90\u7684\u5904\u7406\uFF08\u9759\u6001\u8D44\u6E90\u5904\u7406\u8F6C\u53D1\u3001\u53CD\u5411\u4EE3\u7406\uFF0C\u8D1F\u8F7D\u5747\u8861\u7B49\uFF09\uFF0C <code>Node.js</code> \u66F4\u64C5\u957F\u4E0A\u5C42\u5177\u4F53\u4E1A\u52A1\u903B\u8F91\u7684\u5904\u7406\uFF0C\u4E24\u8005\u53EF\u4EE5\u5B8C\u7F8E\u7EC4\u5408\u3002</p><p>\u7528\u4E00\u5F20\u56FE\u8868\u793A\uFF1A<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/8B346DD20EA825CB156510DBE93383F9.jpg" alt="img"></p><h1 id="nginx-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#nginx-\u5B89\u88C5" aria-hidden="true">#</a> Nginx \u5B89\u88C5</h1><p>\u672C\u6587\u6F14\u793A\u7684\u662F <code>Linux</code> <code>centOS 7.x</code> \u7684\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u5B89\u88C5 <code>Nginx</code> \uFF0C\u81F3\u4E8E\u5728\u5176\u5B83\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u8FDB\u884C\u5B89\u88C5\u53EF\u4EE5\u7F51\u4E0A\u81EA\u884C\u641C\u7D22\uFF0C\u90FD\u975E\u5E38\u7B80\u5355\u7684\u3002</p><p>\u4F7F\u7528 <code>yum</code> \u5B89\u88C5 <code>Nginx</code> \uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>yum install nginx -y
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7 <code>rpm -ql nginx</code> \u547D\u4EE4\u67E5\u770B <code>Nginx</code> \u7684\u5B89\u88C5\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># Nginx\u914D\u7F6E\u6587\u4EF6
/etc/nginx/nginx.conf # nginx \u4E3B\u914D\u7F6E\u6587\u4EF6
/etc/nginx/nginx.conf.default

# \u53EF\u6267\u884C\u7A0B\u5E8F\u6587\u4EF6
/usr/bin/nginx-upgrade
/usr/sbin/nginx

# nginx\u5E93\u6587\u4EF6
/usr/lib/systemd/system/nginx.service # \u7528\u4E8E\u914D\u7F6E\u7CFB\u7EDF\u5B88\u62A4\u8FDB\u7A0B
/usr/lib64/nginx/modules # Nginx\u6A21\u5757\u76EE\u5F55

# \u5E2E\u52A9\u6587\u6863
/usr/share/doc/nginx-1.16.1
/usr/share/doc/nginx-1.16.1/CHANGES
/usr/share/doc/nginx-1.16.1/README
/usr/share/doc/nginx-1.16.1/README.dynamic
/usr/share/doc/nginx-1.16.1/UPGRADE-NOTES-1.6-to-1.10

# \u9759\u6001\u8D44\u6E90\u76EE\u5F55
/usr/share/nginx/html/404.html
/usr/share/nginx/html/50x.html
/usr/share/nginx/html/index.html

# \u5B58\u653ENginx\u65E5\u5FD7\u6587\u4EF6
/var/log/nginx
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u4E3B\u8981\u5173\u6CE8\u7684\u6587\u4EF6\u5939\u6709\u4E24\u4E2A\uFF1A</p><ol><li><code>/etc/nginx/conf.d/</code> \u662F\u5B50\u914D\u7F6E\u9879\u5B58\u653E\u5904\uFF0C <code>/etc/nginx/nginx.conf</code> \u4E3B\u914D\u7F6E\u6587\u4EF6\u4F1A\u9ED8\u8BA4\u628A\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E2D\u6240\u6709\u5B50\u914D\u7F6E\u9879\u90FD\u5F15\u5165\uFF1B</li><li><code>/usr/share/nginx/html/</code> \u9759\u6001\u6587\u4EF6\u90FD\u653E\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u4F60\u81EA\u5DF1\u7684\u4E60\u60EF\u653E\u5728\u5176\u4ED6\u5730\u65B9\uFF1B</li></ol><h1 id="nginx-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#nginx-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Nginx \u5E38\u7528\u547D\u4EE4</h1><p><code>systemctl</code> \u7CFB\u7EDF\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5F00\u673A\u914D\u7F6E
systemctl enable nginx # \u5F00\u673A\u81EA\u52A8\u542F\u52A8
systemctl disable nginx # \u5173\u95ED\u5F00\u673A\u81EA\u52A8\u542F\u52A8

# \u542F\u52A8Nginx
systemctl start nginx # \u542F\u52A8Nginx\u6210\u529F\u540E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u4E3B\u673AIP\uFF0C\u6B64\u65F6\u4F1A\u5C55\u793ANginx\u9ED8\u8BA4\u9875\u9762

# \u505C\u6B62Nginx
systemctl stop nginx

# \u91CD\u542FNginx
systemctl restart nginx

# \u91CD\u65B0\u52A0\u8F7DNginx
systemctl reload nginx

# \u67E5\u770B Nginx \u8FD0\u884C\u72B6\u6001
systemctl status nginx

# \u67E5\u770BNginx\u8FDB\u7A0B
ps -ef | grep nginx

# \u6740\u6B7BNginx\u8FDB\u7A0B
kill -9 pid # \u6839\u636E\u4E0A\u9762\u67E5\u770B\u5230\u7684Nginx\u8FDB\u7A0B\u53F7\uFF0C\u6740\u6B7BNginx\u8FDB\u7A0B\uFF0C-9 \u8868\u793A\u5F3A\u5236\u7ED3\u675F\u8FDB\u7A0B
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><code>Nginx</code> \u5E94\u7528\u7A0B\u5E8F\u547D\u4EE4\uFF1A</p><div class="language-r ext-r line-numbers-mode"><pre class="language-r"><code>nginx -s reload  # \u5411\u4E3B\u8FDB\u7A0B\u53D1\u9001\u4FE1\u53F7\uFF0C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u70ED\u91CD\u542F
nginx -s reopen  # \u91CD\u542F Nginx
nginx -s stop    # \u5FEB\u901F\u5173\u95ED
nginx -s quit    # \u7B49\u5F85\u5DE5\u4F5C\u8FDB\u7A0B\u5904\u7406\u5B8C\u6210\u540E\u5173\u95ED
nginx -T         # \u67E5\u770B\u5F53\u524D Nginx \u6700\u7EC8\u7684\u914D\u7F6E
nginx -t         # \u68C0\u67E5\u914D\u7F6E\u662F\u5426\u6709\u95EE\u9898
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h1 id="nginx-\u6838\u5FC3\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx-\u6838\u5FC3\u914D\u7F6E" aria-hidden="true">#</a> Nginx \u6838\u5FC3\u914D\u7F6E</h1><h2 id="\u914D\u7F6E\u6587\u4EF6\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u7ED3\u6784</h2><p><code>Nginx</code> \u7684\u5178\u578B\u914D\u7F6E\u793A\u4F8B\uFF1A</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code># main\u6BB5\u914D\u7F6E\u4FE1\u606F
user  nginx;                        # \u8FD0\u884C\u7528\u6237\uFF0C\u9ED8\u8BA4\u5373\u662Fnginx\uFF0C\u53EF\u4EE5\u4E0D\u8FDB\u884C\u8BBE\u7F6E
worker_processes  auto;             # Nginx \u8FDB\u7A0B\u6570\uFF0C\u4E00\u822C\u8BBE\u7F6E\u4E3A\u548C CPU \u6838\u6570\u4E00\u6837
error_log  /var/log/nginx/error.log warn;   # Nginx \u7684\u9519\u8BEF\u65E5\u5FD7\u5B58\u653E\u76EE\u5F55
pid        /var/run/nginx.pid;      # Nginx \u670D\u52A1\u542F\u52A8\u65F6\u7684 pid \u5B58\u653E\u4F4D\u7F6E

# events\u6BB5\u914D\u7F6E\u4FE1\u606F
events {
    use epoll;     # \u4F7F\u7528epoll\u7684I/O\u6A21\u578B(\u5982\u679C\u4F60\u4E0D\u77E5\u9053Nginx\u8BE5\u4F7F\u7528\u54EA\u79CD\u8F6E\u8BE2\u65B9\u6CD5\uFF0C\u4F1A\u81EA\u52A8\u9009\u62E9\u4E00\u4E2A\u6700\u9002\u5408\u4F60\u64CD\u4F5C\u7CFB\u7EDF\u7684)
    worker_connections 1024;   # \u6BCF\u4E2A\u8FDB\u7A0B\u5141\u8BB8\u6700\u5927\u5E76\u53D1\u6570
}

# http\u6BB5\u914D\u7F6E\u4FE1\u606F
# \u914D\u7F6E\u4F7F\u7528\u6700\u9891\u7E41\u7684\u90E8\u5206\uFF0C\u4EE3\u7406\u3001\u7F13\u5B58\u3001\u65E5\u5FD7\u5B9A\u4E49\u7B49\u7EDD\u5927\u591A\u6570\u529F\u80FD\u548C\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u914D\u7F6E\u90FD\u5728\u8FD9\u91CC\u8BBE\u7F6E
http { 
    # \u8BBE\u7F6E\u65E5\u5FD7\u6A21\u5F0F
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;   # Nginx\u8BBF\u95EE\u65E5\u5FD7\u5B58\u653E\u4F4D\u7F6E

    sendfile            on;   # \u5F00\u542F\u9AD8\u6548\u4F20\u8F93\u6A21\u5F0F
    tcp_nopush          on;   # \u51CF\u5C11\u7F51\u7EDC\u62A5\u6587\u6BB5\u7684\u6570\u91CF
    tcp_nodelay         on;
    keepalive_timeout   65;   # \u4FDD\u6301\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u4E5F\u53EB\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;      # \u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u7C7B\u578B\u6620\u5C04\u8868
    default_type        application/octet-stream;   # \u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B

    include /etc/nginx/conf.d/*.conf;   # \u52A0\u8F7D\u5B50\u914D\u7F6E\u9879
    
    # server\u6BB5\u914D\u7F6E\u4FE1\u606F
    server {
     listen       80;       # \u914D\u7F6E\u76D1\u542C\u7684\u7AEF\u53E3
     server_name  localhost;    # \u914D\u7F6E\u7684\u57DF\u540D
      
     # location\u6BB5\u914D\u7F6E\u4FE1\u606F
     location / {
      root   /usr/share/nginx/html;  # \u7F51\u7AD9\u6839\u76EE\u5F55
      index  index.html index.htm;   # \u9ED8\u8BA4\u9996\u9875\u6587\u4EF6
      deny 172.168.22.11;   # \u7981\u6B62\u8BBF\u95EE\u7684ip\u5730\u5740\uFF0C\u53EF\u4EE5\u4E3Aall
      allow 172.168.33.44\uFF1B# \u5141\u8BB8\u8BBF\u95EE\u7684ip\u5730\u5740\uFF0C\u53EF\u4EE5\u4E3Aall
     }
     
     error_page 500 502 503 504 /50x.html;  # \u9ED8\u8BA450x\u5BF9\u5E94\u7684\u8BBF\u95EE\u9875\u9762
     error_page 400 404 error.html;   # \u540C\u4E0A
    }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><ul><li><code>main</code> \u5168\u5C40\u914D\u7F6E\uFF0C\u5BF9\u5168\u5C40\u751F\u6548\uFF1B</li><li><code>events</code> \u914D\u7F6E\u5F71\u54CD <code>Nginx</code> \u670D\u52A1\u5668\u4E0E\u7528\u6237\u7684\u7F51\u7EDC\u8FDE\u63A5\uFF1B</li><li><code>http</code> \u914D\u7F6E\u4EE3\u7406\uFF0C\u7F13\u5B58\uFF0C\u65E5\u5FD7\u5B9A\u4E49\u7B49\u7EDD\u5927\u591A\u6570\u529F\u80FD\u548C\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u914D\u7F6E\uFF1B</li><li><code>server</code> \u914D\u7F6E\u865A\u62DF\u4E3B\u673A\u7684\u76F8\u5173\u53C2\u6570\uFF0C\u4E00\u4E2A <code>http</code> \u5757\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A <code>server</code> \u5757\uFF1B</li><li><code>location</code> \u7528\u4E8E\u914D\u7F6E\u5339\u914D\u7684 <code>uri</code> \uFF1B</li><li><code>upstream</code> \u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u5668\u5177\u4F53\u5730\u5740\uFF0C\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E\u4E0D\u53EF\u6216\u7F3A\u7684\u90E8\u5206\uFF1B</li></ul><p>\u7528\u4E00\u5F20\u56FE\u6E05\u6670\u7684\u5C55\u793A\u5B83\u7684\u5C42\u7EA7\u7ED3\u6784\uFF1A<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/E8B89B4320FBEB0CAB7B3279260CADCA.jpg" alt="img"></p><h2 id="\u914D\u7F6E\u6587\u4EF6-main-\u6BB5\u6838\u5FC3\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6-main-\u6BB5\u6838\u5FC3\u53C2\u6570" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6 main \u6BB5\u6838\u5FC3\u53C2\u6570</h2><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> user</h3><p>\u6307\u5B9A\u8FD0\u884C <code>Nginx</code> \u7684 <code>woker</code> \u5B50\u8FDB\u7A0B\u7684\u5C5E\u4E3B\u548C\u5C5E\u7EC4\uFF0C\u5176\u4E2D\u7EC4\u53EF\u4EE5\u4E0D\u6307\u5B9A\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>user USERNAME [GROUP]

user nginx lion; # \u7528\u6237\u662Fnginx;\u7EC4\u662Flion
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="pid" tabindex="-1"><a class="header-anchor" href="#pid" aria-hidden="true">#</a> pid</h3><p>\u6307\u5B9A\u8FD0\u884C <code>Nginx</code> <code>master</code> \u4E3B\u8FDB\u7A0B\u7684 <code>pid</code> \u6587\u4EF6\u5B58\u653E\u8DEF\u5F84\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pid /opt/nginx/logs/nginx.pid # master\u4E3B\u8FDB\u7A0B\u7684\u7684pid\u5B58\u653E\u5728nginx.pid\u7684\u6587\u4EF6
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="worker-rlimit-nofile-number" tabindex="-1"><a class="header-anchor" href="#worker-rlimit-nofile-number" aria-hidden="true">#</a> worker_rlimit_nofile_number</h3><p>\u6307\u5B9A <code>worker</code> \u5B50\u8FDB\u7A0B\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6\u53E5\u67C4\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>worker_rlimit_nofile 20480; # \u53EF\u4EE5\u7406\u89E3\u6210\u6BCF\u4E2Aworker\u5B50\u8FDB\u7A0B\u7684\u6700\u5927\u8FDE\u63A5\u6570\u91CF\u3002
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="worker-rlimit-core" tabindex="-1"><a class="header-anchor" href="#worker-rlimit-core" aria-hidden="true">#</a> worker_rlimit_core</h3><p>\u6307\u5B9A <code>worker</code> \u5B50\u8FDB\u7A0B\u5F02\u5E38\u7EC8\u6B62\u540E\u7684 <code>core</code> \u6587\u4EF6\uFF0C\u7528\u4E8E\u8BB0\u5F55\u5206\u6790\u95EE\u9898\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>worker_rlimit_core 50M; # \u5B58\u653E\u5927\u5C0F\u9650\u5236
working_directory /opt/nginx/tmp; # \u5B58\u653E\u76EE\u5F55
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="worker-processes-number" tabindex="-1"><a class="header-anchor" href="#worker-processes-number" aria-hidden="true">#</a> worker_processes_number</h3><p>\u6307\u5B9A <code>Nginx</code> \u542F\u52A8\u7684 <code>worker</code> \u5B50\u8FDB\u7A0B\u6570\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>worker_processes 4; # \u6307\u5B9A\u5177\u4F53\u5B50\u8FDB\u7A0B\u6570\u91CF
worker_processes auto; # \u4E0E\u5F53\u524Dcpu\u7269\u7406\u6838\u5FC3\u6570\u4E00\u81F4
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="worker-cpu-affinity" tabindex="-1"><a class="header-anchor" href="#worker-cpu-affinity" aria-hidden="true">#</a> worker_cpu_affinity</h3><p>\u5C06\u6BCF\u4E2A <code>worker</code> \u5B50\u8FDB\u7A0B\u4E0E\u6211\u4EEC\u7684 <code>cpu</code> \u7269\u7406\u6838\u5FC3\u7ED1\u5B9A\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>worker_cpu_affinity 0001 0010 0100 1000; # 4\u4E2A\u7269\u7406\u6838\u5FC3\uFF0C4\u4E2Aworker\u5B50\u8FDB\u7A0B
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/36DEAFC3AD23969A9EFBFB601B9EB51B.jpg" alt="img"></p><p>\u5C06\u6BCF\u4E2A <code>worker</code> \u5B50\u8FDB\u7A0B\u4E0E\u7279\u5B9A <code>CPU</code> \u7269\u7406\u6838\u5FC3\u7ED1\u5B9A\uFF0C\u4F18\u52BF\u5728\u4E8E\uFF0C\u907F\u514D\u540C\u4E00\u4E2A <code>worker</code> \u5B50\u8FDB\u7A0B\u5728\u4E0D\u540C\u7684 <code>CPU</code> \u6838\u5FC3\u4E0A\u5207\u6362\uFF0C\u7F13\u5B58\u5931\u6548\uFF0C\u964D\u4F4E\u6027\u80FD\u3002\u4F46\u5176\u5E76\u4E0D\u80FD\u771F\u6B63\u7684\u907F\u514D\u8FDB\u7A0B\u5207\u6362\u3002</p><h3 id="worker-priority" tabindex="-1"><a class="header-anchor" href="#worker-priority" aria-hidden="true">#</a> worker_priority</h3><p>\u6307\u5B9A <code>worker</code> \u5B50\u8FDB\u7A0B\u7684 <code>nice</code> \u503C\uFF0C\u4EE5\u8C03\u6574\u8FD0\u884C <code>Nginx</code> \u7684\u4F18\u5148\u7EA7\uFF0C\u901A\u5E38\u8BBE\u5B9A\u4E3A\u8D1F\u503C\uFF0C\u4EE5\u4F18\u5148\u8C03\u7528 <code>Nginx</code> \u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>worker_priority -10; # 120-10=110\uFF0C110\u5C31\u662F\u6700\u7EC8\u7684\u4F18\u5148\u7EA7
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>Linux</code> \u9ED8\u8BA4\u8FDB\u7A0B\u7684\u4F18\u5148\u7EA7\u503C\u662F120\uFF0C\u503C\u8D8A\u5C0F\u8D8A\u4F18\u5148\uFF1B<code>nice</code> \u5B9A\u8303\u56F4\u4E3A <code>-20</code> \u5230 <code>+19</code> \u3002</p><p>[\u5907\u6CE8] \u5E94\u7528\u7684\u9ED8\u8BA4\u4F18\u5148\u7EA7\u503C\u662F120\u52A0\u4E0A <code>nice</code> \u503C\u7B49\u4E8E\u5B83\u6700\u7EC8\u7684\u503C\uFF0C\u8FD9\u4E2A\u503C\u8D8A\u5C0F\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\u3002</p><h3 id="worker-shutdown-timeout" tabindex="-1"><a class="header-anchor" href="#worker-shutdown-timeout" aria-hidden="true">#</a> worker_shutdown_timeout</h3><p>\u6307\u5B9A <code>worker</code> \u5B50\u8FDB\u7A0B\u4F18\u96C5\u9000\u51FA\u65F6\u7684\u8D85\u65F6\u65F6\u95F4\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>worker_shutdown_timeout 5s;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="timer-resolution" tabindex="-1"><a class="header-anchor" href="#timer-resolution" aria-hidden="true">#</a> timer_resolution</h3><p><code>worker</code> \u5B50\u8FDB\u7A0B\u5185\u90E8\u4F7F\u7528\u7684\u8BA1\u65F6\u5668\u7CBE\u5EA6\uFF0C\u8C03\u6574\u65F6\u95F4\u95F4\u9694\u8D8A\u5927\uFF0C\u7CFB\u7EDF\u8C03\u7528\u8D8A\u5C11\uFF0C\u6709\u5229\u4E8E\u6027\u80FD\u63D0\u5347\uFF1B\u53CD\u4E4B\uFF0C\u7CFB\u7EDF\u8C03\u7528\u8D8A\u591A\uFF0C\u6027\u80FD\u4E0B\u964D\u3002</p><div class="language-undefined ext-undefined line-numbers-mode"><pre class="language-undefined"><code>timer_resolution 100ms;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728 <code>Linux</code> \u7CFB\u7EDF\u4E2D\uFF0C\u7528\u6237\u9700\u8981\u83B7\u53D6\u8BA1\u65F6\u5668\u65F6\u9700\u8981\u5411\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u53D1\u9001\u8BF7\u6C42\uFF0C\u6709\u8BF7\u6C42\u5C31\u5FC5\u7136\u4F1A\u6709\u5F00\u9500\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u95F4\u9694\u8D8A\u5927\u5F00\u9500\u5C31\u8D8A\u5C0F\u3002</p><h3 id="daemon" tabindex="-1"><a class="header-anchor" href="#daemon" aria-hidden="true">#</a> daemon</h3><p>\u6307\u5B9A <code>Nginx</code> \u7684\u8FD0\u884C\u65B9\u5F0F\uFF0C\u524D\u53F0\u8FD8\u662F\u540E\u53F0\uFF0C\u524D\u53F0\u7528\u4E8E\u8C03\u8BD5\uFF0C\u540E\u53F0\u7528\u4E8E\u751F\u4EA7\u3002</p><div class="language-vbnet ext-vbnet line-numbers-mode"><pre class="language-vbnet"><code>daemon off; # \u9ED8\u8BA4\u662Fon\uFF0C\u540E\u53F0\u8FD0\u884C\u6A21\u5F0F
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u914D\u7F6E\u6587\u4EF6-events-\u6BB5\u6838\u5FC3\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6-events-\u6BB5\u6838\u5FC3\u53C2\u6570" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6 events \u6BB5\u6838\u5FC3\u53C2\u6570</h2><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> use</h3><p><code>Nginx</code> \u4F7F\u7528\u4F55\u79CD\u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>use method; # \u4E0D\u63A8\u8350\u914D\u7F6E\u5B83\uFF0C\u8BA9nginx\u81EA\u5DF1\u9009\u62E9

method \u53EF\u9009\u503C\u4E3A\uFF1Aselect\u3001poll\u3001kqueue\u3001epoll\u3001/dev/poll\u3001eventport
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="worker-connections" tabindex="-1"><a class="header-anchor" href="#worker-connections" aria-hidden="true">#</a> worker_connections</h3><p><code>worker</code> \u5B50\u8FDB\u7A0B\u80FD\u591F\u5904\u7406\u7684\u6700\u5927\u5E76\u53D1\u8FDE\u63A5\u6570\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>worker_connections 1024 # \u6BCF\u4E2A\u5B50\u8FDB\u7A0B\u7684\u6700\u5927\u8FDE\u63A5\u6570\u4E3A1024
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="accept-mutex" tabindex="-1"><a class="header-anchor" href="#accept-mutex" aria-hidden="true">#</a> accept_mutex</h3><p>\u662F\u5426\u6253\u5F00\u8D1F\u8F7D\u5747\u8861\u4E92\u65A5\u9501\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>accept_mutex on # \u9ED8\u8BA4\u662Foff\u5173\u95ED\u7684\uFF0C\u8FD9\u91CC\u63A8\u8350\u6253\u5F00
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="server-name-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#server-name-\u6307\u4EE4" aria-hidden="true">#</a> server_name \u6307\u4EE4</h2><p>\u6307\u5B9A\u865A\u62DF\u4E3B\u673A\u57DF\u540D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server_name name1 name2 name3

# \u793A\u4F8B\uFF1A
server_name www.nginx.com;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u57DF\u540D\u5339\u914D\u7684\u56DB\u79CD\u5199\u6CD5\uFF1A</p><ul><li>\u7CBE\u786E\u5339\u914D\uFF1A<code>server_name www.nginx.com</code> ;</li><li>\u5DE6\u4FA7\u901A\u914D\uFF1A<code>server_name *.nginx.com</code> ;</li><li>\u53F3\u4FA7\u7EDF\u914D\uFF1A<code>server_name www.nginx.*</code> ;</li><li>\u6B63\u5219\u5339\u914D\uFF1A<code>server_name ~^www\\.nginx\\.*$</code> ;</li></ul><p>\u5339\u914D\u4F18\u5148\u7EA7\uFF1A<strong>\u7CBE\u786E\u5339\u914D &gt; \u5DE6\u4FA7\u901A\u914D\u7B26\u5339\u914D &gt; \u53F3\u4FA7\u901A\u914D\u7B26\u5339\u914D &gt; \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D</strong></p><p><code>server_name</code> \u914D\u7F6E\u5B9E\u4F8B\uFF1A</p><p>1\u3001\u914D\u7F6E\u672C\u5730 <code>DNS</code> \u89E3\u6790 <code>vim /etc/hosts</code> \uFF08 <code>macOS</code> \u7CFB\u7EDF\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code># \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF0C\u5176\u4E2D 121.42.11.34 \u662F\u963F\u91CC\u4E91\u670D\u52A1\u5668IP\u5730\u5740
121.42.11.34 www.nginx-test.com
121.42.11.34 mail.nginx-test.com
121.42.11.34 www.nginx-test.org
121.42.11.34 doc.nginx-test.com
121.42.11.34 www.nginx-test.cn
121.42.11.34 fe.nginx-test.club
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>[\u6CE8\u610F] \u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u865A\u62DF\u57DF\u540D\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u56E0\u6B64\u9700\u8981\u914D\u7F6E\u672C\u5730 <code>DNS</code> \u89E3\u6790\uFF0C\u5982\u679C\u4F7F\u7528\u963F\u91CC\u4E91\u4E0A\u8D2D\u4E70\u7684\u57DF\u540D\uFF0C\u5219\u9700\u8981\u5728\u963F\u91CC\u4E91\u4E0A\u8BBE\u7F6E\u597D\u57DF\u540D\u89E3\u6790\u3002</p><p>2\u3001\u914D\u7F6E\u963F\u91CC\u4E91 <code>Nginx</code> \uFF0C<code>vim /etc/nginx/nginx.conf</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code># \u8FD9\u91CC\u53EA\u5217\u4E3E\u4E86http\u7AEF\u4E2D\u7684sever\u7AEF\u914D\u7F6E

# \u5DE6\u5339\u914D
server {
 listen 80;
 server_name *.nginx-test.com;
 root /usr/share/nginx/html/nginx-test/left-match/;
 location / {
  index index.html;
 }
}

# \u6B63\u5219\u5339\u914D
server {
 listen 80;
 server_name ~^.*\\.nginx-test\\..*$;
 root /usr/share/nginx/html/nginx-test/reg-match/;
 location / {
  index index.html;
 }
}

# \u53F3\u5339\u914D
server {
 listen 80;
 server_name www.nginx-test.*;
 root /usr/share/nginx/html/nginx-test/right-match/;
 location / {
  index index.html;
 }
}

# \u5B8C\u5168\u5339\u914D
server {
 listen 80;
 server_name www.nginx-test.com;
 root /usr/share/nginx/html/nginx-test/all-match/;
 location / {
  index index.html;
 }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>3\u3001\u8BBF\u95EE\u5206\u6790</p><ul><li>\u5F53\u8BBF\u95EE <code>www.nginx-test.com</code> \u65F6\uFF0C\u90FD\u53EF\u4EE5\u88AB\u5339\u914D\u4E0A\uFF0C\u56E0\u6B64\u9009\u62E9\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u201C\u5B8C\u5168\u5339\u914D\u201D\uFF1B</li><li>\u5F53\u8BBF\u95EE <code>mail.nginx-test.com</code> \u65F6\uFF0C\u4F1A\u8FDB\u884C\u201C\u5DE6\u5339\u914D\u201D\uFF1B</li><li>\u5F53\u8BBF\u95EE <code>www.nginx-test.org</code> \u65F6\uFF0C\u4F1A\u8FDB\u884C\u201C\u53F3\u5339\u914D\u201D\uFF1B</li><li>\u5F53\u8BBF\u95EE <code>doc.nginx-test.com</code> \u65F6\uFF0C\u4F1A\u8FDB\u884C\u201C\u5DE6\u5339\u914D\u201D\uFF1B</li><li>\u5F53\u8BBF\u95EE <code>www.nginx-test.cn</code> \u65F6\uFF0C\u4F1A\u8FDB\u884C\u201C\u53F3\u5339\u914D\u201D\uFF1B</li><li>\u5F53\u8BBF\u95EE <code>fe.nginx-test.club</code> \u65F6\uFF0C\u4F1A\u8FDB\u884C\u201C\u6B63\u5219\u5339\u914D\u201D\uFF1B</li></ul><h2 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> root</h2><p>\u6307\u5B9A\u9759\u6001\u8D44\u6E90\u76EE\u5F55\u4F4D\u7F6E\uFF0C\u5B83\u53EF\u4EE5\u5199\u5728 <code>http</code> \u3001 <code>server</code> \u3001 <code>location</code> \u7B49\u914D\u7F6E\u4E2D\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>root path

\u4F8B\u5982\uFF1A
location /image {
 root /opt/nginx/static;
}

\u5F53\u7528\u6237\u8BBF\u95EE www.test.com/image/1.png \u65F6\uFF0C\u5B9E\u9645\u5728\u670D\u52A1\u5668\u627E\u7684\u8DEF\u5F84\u662F /opt/nginx/static/image/1.png
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>[\u6CE8\u610F] <code>root</code> \u4F1A\u5C06\u5B9A\u4E49\u8DEF\u5F84\u4E0E <code>URI</code> \u53E0\u52A0\uFF0C <code>alias</code> \u5219\u53EA\u53D6\u5B9A\u4E49\u8DEF\u5F84\u3002</p><h2 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h2><p>\u5B83\u4E5F\u662F\u6307\u5B9A\u9759\u6001\u8D44\u6E90\u76EE\u5F55\u4F4D\u7F6E\uFF0C\u5B83\u53EA\u80FD\u5199\u5728 <code>location</code> \u4E2D\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>location /image {
 alias /opt/nginx/static/image/;
}

\u5F53\u7528\u6237\u8BBF\u95EE www.test.com/image/1.png \u65F6\uFF0C\u5B9E\u9645\u5728\u670D\u52A1\u5668\u627E\u7684\u8DEF\u5F84\u662F /opt/nginx/static/image/1.png
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>[\u6CE8\u610F] \u4F7F\u7528 alias \u672B\u5C3E\u4E00\u5B9A\u8981\u6DFB\u52A0 <code>/</code> \uFF0C\u5E76\u4E14\u5B83\u53EA\u80FD\u4F4D\u4E8E <code>location</code> \u4E2D\u3002</p><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><p>\u914D\u7F6E\u8DEF\u5F84\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>location [ = | ~ | ~* | ^~ ] uri {
 ...
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5339\u914D\u89C4\u5219\uFF1A</p><ul><li><code>=</code> \u7CBE\u786E\u5339\u914D\uFF1B</li><li><code>~</code> \u6B63\u5219\u5339\u914D\uFF0C\u533A\u5206\u5927\u5C0F\u5199\uFF1B</li><li><code>~*</code> \u6B63\u5219\u5339\u914D\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1B</li><li><code>^~</code> \u5339\u914D\u5230\u5373\u505C\u6B62\u641C\u7D22\uFF1B</li></ul><p>\u5339\u914D\u4F18\u5148\u7EA7\uFF1A<code>=</code> &gt; <code>^~</code> &gt; <code>~</code> &gt; <code>~*</code> &gt; \u4E0D\u5E26\u4EFB\u4F55\u5B57\u7B26\u3002</p><p>\u5B9E\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server {
  listen 80;
  server_name www.nginx-test.com;
  
  # \u53EA\u6709\u5F53\u8BBF\u95EE www.nginx-test.com/match_all/ \u65F6\u624D\u4F1A\u5339\u914D\u5230/usr/share/nginx/html/match_all/index.html
  location = /match_all/ {
      root /usr/share/nginx/html
      index index.html
  }
  
  # \u5F53\u8BBF\u95EE www.nginx-test.com/1.jpg \u7B49\u8DEF\u5F84\u65F6\u4F1A\u53BB /usr/share/nginx/images/1.jpg \u627E\u5BF9\u5E94\u7684\u8D44\u6E90
  location ~ \\.(jpeg|jpg|png|svg)$ {
   root /usr/share/nginx/images;
  }
  
  # \u5F53\u8BBF\u95EE www.nginx-test.com/bbs/ \u65F6\u4F1A\u5339\u914D\u4E0A /usr/share/nginx/html/bbs/index.html
  location ^~ /bbs/ {
   root /usr/share/nginx/html;
    index index.html index.htm;
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="location-\u4E2D\u7684\u53CD\u659C\u7EBF" tabindex="-1"><a class="header-anchor" href="#location-\u4E2D\u7684\u53CD\u659C\u7EBF" aria-hidden="true">#</a> location \u4E2D\u7684\u53CD\u659C\u7EBF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location /test {
 ...
}

location /test/ {
 ...
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u4E0D\u5E26 <code>/</code> \u5F53\u8BBF\u95EE <code>www.nginx-test.com/test</code> \u65F6\uFF0C <code>Nginx</code> \u5148\u627E\u662F\u5426\u6709 <code>test</code> \u76EE\u5F55\uFF0C\u5982\u679C\u6709\u5219\u627E <code>test</code> \u76EE\u5F55\u4E0B\u7684 <code>index.html</code> \uFF1B\u5982\u679C\u6CA1\u6709 <code>test</code> \u76EE\u5F55\uFF0C <code>nginx</code> \u5219\u4F1A\u627E\u662F\u5426\u6709 <code>test</code> \u6587\u4EF6\u3002</li><li>\u5E26 <code>/</code> \u5F53\u8BBF\u95EE <code>www.nginx-test.com/test</code> \u65F6\uFF0C <code>Nginx</code> \u5148\u627E\u662F\u5426\u6709 <code>test</code> \u76EE\u5F55\uFF0C\u5982\u679C\u6709\u5219\u627E <code>test</code> \u76EE\u5F55\u4E0B\u7684 <code>index.html</code> \uFF0C\u5982\u679C\u6CA1\u6709\u5B83\u4E5F\u4E0D\u4F1A\u53BB\u627E\u662F\u5426\u5B58\u5728 <code>test</code> \u6587\u4EF6\u3002</li></ul><h3 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h3><p>\u505C\u6B62\u5904\u7406\u8BF7\u6C42\uFF0C\u76F4\u63A5\u8FD4\u56DE\u54CD\u5E94\u7801\u6216\u91CD\u5B9A\u5411\u5230\u5176\u4ED6 <code>URL</code> \uFF1B\u6267\u884C <code>return</code> \u6307\u4EE4\u540E\uFF0C <code>location</code> \u4E2D\u540E\u7EED\u6307\u4EE4\u5C06\u4E0D\u4F1A\u88AB\u6267\u884C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>return code [text];
return code URL;
return URL;

\u4F8B\u5982\uFF1A
location / {
 return 404; # \u76F4\u63A5\u8FD4\u56DE\u72B6\u6001\u7801
}

location / {
 return 404 &quot;pages not found&quot;; # \u8FD4\u56DE\u72B6\u6001\u7801 + \u4E00\u6BB5\u6587\u672C
}

location / {
 return 302 /bbs ; # \u8FD4\u56DE\u72B6\u6001\u7801 + \u91CD\u5B9A\u5411\u5730\u5740
}

location / {
 return https://www.baidu.com ; # \u8FD4\u56DE\u91CD\u5B9A\u5411\u5730\u5740
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="rewrite" tabindex="-1"><a class="header-anchor" href="#rewrite" aria-hidden="true">#</a> rewrite</h2><p>\u6839\u636E\u6307\u5B9A\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u89C4\u5219\uFF0C\u91CD\u5199 <code>URL</code> \u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u8BED\u6CD5\uFF1Arewrite \u6B63\u5219\u8868\u8FBE\u5F0F \u8981\u66FF\u6362\u7684\u5185\u5BB9 [flag];

\u4E0A\u4E0B\u6587\uFF1Aserver\u3001location\u3001if

\u793A\u4F8B\uFF1Arewirte /images/(.*\\.jpg)$ /pic/$1; # $1\u662F\u524D\u9762\u62EC\u53F7(.*\\.jpg)\u7684\u53CD\u5411\u5F15\u7528
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>flag</code> \u53EF\u9009\u503C\u7684\u542B\u4E49\uFF1A</p><ul><li><code>last</code> \u91CD\u5199\u540E\u7684 <code>URL</code> \u53D1\u8D77\u65B0\u8BF7\u6C42\uFF0C\u518D\u6B21\u8FDB\u5165 <code>server</code> \u6BB5\uFF0C\u91CD\u8BD5 <code>location</code> \u7684\u4E2D\u7684\u5339\u914D\uFF1B</li><li><code>break</code> \u76F4\u63A5\u4F7F\u7528\u91CD\u5199\u540E\u7684 <code>URL</code> \uFF0C\u4E0D\u518D\u5339\u914D\u5176\u5B83 <code>location</code> \u4E2D\u8BED\u53E5\uFF1B</li><li><code>redirect</code> \u8FD4\u56DE302\u4E34\u65F6\u91CD\u5B9A\u5411\uFF1B</li><li><code>permanent</code> \u8FD4\u56DE301\u6C38\u4E45\u91CD\u5B9A\u5411\uFF1B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server{
  listen 80;
  server_name fe.lion.club; # \u8981\u5728\u672C\u5730hosts\u6587\u4EF6\u8FDB\u884C\u914D\u7F6E
  root html;
  location /search {
   rewrite ^/(.*) https://www.baidu.com redirect;
  }
  
  location /images {
   rewrite /images/(.*) /pics/$1;
  }
  
  location /pics {
   rewrite /pics/(.*) /photos/$1;
  }
  
  location /photos {
  
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u6309\u7167\u8FD9\u4E2A\u914D\u7F6E\u6211\u4EEC\u6765\u5206\u6790\uFF1A</p><ul><li>\u5F53\u8BBF\u95EE <code>fe.lion.club/search</code> \u65F6\uFF0C\u4F1A\u81EA\u52A8\u5E2E\u6211\u4EEC\u91CD\u5B9A\u5411\u5230 <code>https://www.baidu.com</code>\u3002</li><li>\u5F53\u8BBF\u95EE <code>fe.lion.club/images/1.jpg</code> \u65F6\uFF0C\u7B2C\u4E00\u6B65\u91CD\u5199 <code>URL</code> \u4E3A <code>fe.lion.club/pics/1.jpg</code> \uFF0C\u627E\u5230 <code>pics</code> \u7684 <code>location</code> \uFF0C\u7EE7\u7EED\u91CD\u5199 <code>URL</code> \u4E3A <code>fe.lion.club/photos/1.jpg</code> \uFF0C\u627E\u5230 <code>/photos</code> \u7684 <code>location</code> \u540E\uFF0C\u53BB <code>html/photos</code> \u76EE\u5F55\u4E0B\u5BFB\u627E <code>1.jpg</code> \u9759\u6001\u8D44\u6E90\u3002</li></ul><h2 id="if-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#if-\u6307\u4EE4" aria-hidden="true">#</a> if \u6307\u4EE4</h2><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>\u8BED\u6CD5\uFF1Aif (condition) {...}

\u4E0A\u4E0B\u6587\uFF1Aserver\u3001location

\u793A\u4F8B\uFF1A
if($http_user_agent ~ Chrome){
  rewrite /(.*)/browser/$1 break;
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>condition</code> \u5224\u65AD\u6761\u4EF6\uFF1A</p><ul><li><code>$variable</code> \u4EC5\u4E3A\u53D8\u91CF\u65F6\uFF0C\u503C\u4E3A\u7A7A\u6216\u4EE50\u5F00\u5934\u5B57\u7B26\u4E32\u90FD\u4F1A\u88AB\u5F53\u505A <code>false</code> \u5904\u7406\uFF1B</li><li><code>=</code> \u6216 <code>!=</code> \u76F8\u7B49\u6216\u4E0D\u7B49\uFF1B</li><li><code>~</code> \u6B63\u5219\u5339\u914D\uFF1B</li><li><code>! ~</code> \u975E\u6B63\u5219\u5339\u914D\uFF1B</li><li><code>~*</code> \u6B63\u5219\u5339\u914D\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1B</li><li><code>-f</code> \u6216 <code>! -f</code> \u68C0\u6D4B\u6587\u4EF6\u5B58\u5728\u6216\u4E0D\u5B58\u5728\uFF1B</li><li><code>-d</code> \u6216 <code>! -d</code> \u68C0\u6D4B\u76EE\u5F55\u5B58\u5728\u6216\u4E0D\u5B58\u5728\uFF1B</li><li><code>-e</code> \u6216 <code>! -e</code> \u68C0\u6D4B\u6587\u4EF6\u3001\u76EE\u5F55\u3001\u7B26\u53F7\u94FE\u63A5\u7B49\u5B58\u5728\u6216\u4E0D\u5B58\u5728\uFF1B</li><li><code>-x</code> \u6216 <code>! -x</code> \u68C0\u6D4B\u6587\u4EF6\u53EF\u4EE5\u6267\u884C\u6216\u4E0D\u53EF\u6267\u884C\uFF1B</li></ul><p>\u5B9E\u4F8B\uFF1A</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>server {
  listen 8080;
  server_name localhost;
  root html;
  
  location / {
   if ( $uri = &quot;/images/&quot; ){
     rewrite (.*) /pics/ break;
    }
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5F53\u8BBF\u95EE <code>localhost:8080/images/</code> \u65F6\uFF0C\u4F1A\u8FDB\u5165 <code>if</code> \u5224\u65AD\u91CC\u9762\u6267\u884C <code>rewrite</code> \u547D\u4EE4\u3002</p><h2 id="autoindex" tabindex="-1"><a class="header-anchor" href="#autoindex" aria-hidden="true">#</a> autoindex</h2><p>\u7528\u6237\u8BF7\u6C42\u4EE5 <code>/</code> \u7ED3\u5C3E\u65F6\uFF0C\u5217\u51FA\u76EE\u5F55\u7ED3\u6784\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5FEB\u901F\u642D\u5EFA\u9759\u6001\u8D44\u6E90\u4E0B\u8F7D\u7F51\u7AD9\u3002</p><p><code>autoindex.conf</code> \u914D\u7F6E\u4FE1\u606F\uFF1A</p><div class="language-cmake ext-cmake line-numbers-mode"><pre class="language-cmake"><code>server {
  listen 80;
  server_name fe.lion-test.club;
  
  location /download/ {
    root /opt/source;
    
    autoindex on; # \u6253\u5F00 autoindex\uFF0C\uFF0C\u53EF\u9009\u53C2\u6570\u6709 on | off
    autoindex_exact_size on; # \u4FEE\u6539\u4E3Aoff\uFF0C\u4EE5KB\u3001MB\u3001GB\u663E\u793A\u6587\u4EF6\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E3Aon\uFF0C\u4EE5bytes\u663E\u793A\u51FA\u2F42\u4EF6\u7684\u786E\u5207\u2F24\u2F29
    autoindex_format html; # \u4EE5html\u7684\u65B9\u5F0F\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u53EF\u9009\u53C2\u6570\u6709 html | json | xml
    autoindex_localtime off; # \u663E\u793A\u7684\u2F42\u4EF6\u65F6\u95F4\u4E3A\u2F42\u4EF6\u7684\u670D\u52A1\u5668\u65F6\u95F4\u3002\u9ED8\u8BA4\u4E3Aoff\uFF0C\u663E\u793A\u7684\u2F42\u4EF6\u65F6\u95F4\u4E3AGMT\u65F6\u95F4
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5F53\u8BBF\u95EE <code>fe.lion.com/download/</code> \u65F6\uFF0C\u4F1A\u628A\u670D\u52A1\u5668 <code>/opt/source/download/</code> \u8DEF\u5F84\u4E0B\u7684\u6587\u4EF6\u5C55\u793A\u51FA\u6765\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/3843BC457AD79D8109D84C016F015F06.jpg" alt="img"></p><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><p><code>Nginx</code> \u63D0\u4F9B\u7ED9\u4F7F\u7528\u8005\u7684\u53D8\u91CF\u975E\u5E38\u591A\uFF0C\u4F46\u662F\u7EC8\u7A76\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u8BF7\u6C42\u8FC7\u7A0B\u6240\u4EA7\u751F\u6570\u636E\uFF0C <code>Nginx</code> \u5C06\u8FD9\u4E9B\u6570\u636E\u4EE5\u53D8\u91CF\u7684\u5F62\u5F0F\u63D0\u4F9B\u7ED9\u4F7F\u7528\u8005\u3002</p><p>\u4E0B\u9762\u5217\u4E3E\u4E9B\u9879\u76EE\u4E2D\u5E38\u7528\u7684\u53D8\u91CF\uFF1A</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td><code>remote_addr</code></td><td>\u5BA2\u6237\u7AEF <code>IP</code> \u5730\u5740</td></tr><tr><td><code>remote_port</code></td><td>\u5BA2\u6237\u7AEF\u7AEF\u53E3</td></tr><tr><td><code>server_addr</code></td><td>\u670D\u52A1\u7AEF <code>IP</code> \u5730\u5740</td></tr><tr><td><code>server_port</code></td><td>\u670D\u52A1\u7AEF\u7AEF\u53E3</td></tr><tr><td><code>server_protocol</code></td><td>\u670D\u52A1\u7AEF\u534F\u8BAE</td></tr><tr><td><code>binary_remote_addr</code></td><td>\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684\u5BA2\u6237\u7AEF <code>IP</code> \u5730\u5740</td></tr><tr><td><code>connection</code></td><td><code>TCP</code> \u8FDE\u63A5\u7684\u5E8F\u53F7\uFF0C\u9012\u589E</td></tr><tr><td><code>connection_request</code></td><td><code>TCP</code> \u8FDE\u63A5\u5F53\u524D\u7684\u8BF7\u6C42\u6570\u91CF</td></tr><tr><td><code>uri</code></td><td>\u8BF7\u6C42\u7684URL\uFF0C\u4E0D\u5305\u542B\u53C2\u6570</td></tr><tr><td><code>request_uri</code></td><td>\u8BF7\u6C42\u7684URL\uFF0C\u5305\u542B\u53C2\u6570</td></tr><tr><td><code>scheme</code></td><td>\u534F\u8BAE\u540D\uFF0C <code>http</code> \u6216 <code>https</code></td></tr><tr><td><code>request_method</code></td><td>\u8BF7\u6C42\u65B9\u6CD5</td></tr><tr><td><code>request_length</code></td><td>\u5168\u90E8\u8BF7\u6C42\u7684\u957F\u5EA6\uFF0C\u5305\u542B\u8BF7\u6C42\u884C\u3001\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u4F53</td></tr><tr><td><code>args</code></td><td>\u5168\u90E8\u53C2\u6570\u5B57\u7B26\u4E32</td></tr><tr><td><code>arg_\u53C2\u6570\u540D</code></td><td>\u83B7\u53D6\u7279\u5B9A\u53C2\u6570\u503C</td></tr><tr><td><code>is_args</code></td><td><code>URL</code> \u4E2D\u662F\u5426\u6709\u53C2\u6570\uFF0C\u6709\u7684\u8BDD\u8FD4\u56DE <code>?</code> \uFF0C\u5426\u5219\u8FD4\u56DE\u7A7A</td></tr><tr><td><code>query_string</code></td><td>\u4E0E <code>args</code> \u76F8\u540C</td></tr><tr><td><code>host</code></td><td>\u8BF7\u6C42\u4FE1\u606F\u4E2D\u7684 <code>Host</code> \uFF0C\u5982\u679C\u8BF7\u6C42\u4E2D\u6CA1\u6709 <code>Host</code> \u884C\uFF0C\u5219\u5728\u8BF7\u6C42\u5934\u4E2D\u627E\uFF0C\u6700\u540E\u4F7F\u7528 <code>nginx</code> \u4E2D\u8BBE\u7F6E\u7684 <code>server_name</code> \u3002</td></tr><tr><td><code>http_user_agent</code></td><td>\u7528\u6237\u6D4F\u89C8\u5668</td></tr><tr><td><code>http_referer</code></td><td>\u4ECE\u54EA\u4E9B\u94FE\u63A5\u8FC7\u6765\u7684\u8BF7\u6C42</td></tr><tr><td><code>http_via</code></td><td>\u6BCF\u7ECF\u8FC7\u4E00\u5C42\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u90FD\u4F1A\u6DFB\u52A0\u76F8\u5E94\u7684\u4FE1\u606F</td></tr><tr><td><code>http_cookie</code></td><td>\u83B7\u53D6\u7528\u6237 <code>cookie</code></td></tr><tr><td><code>request_time</code></td><td>\u5904\u7406\u8BF7\u6C42\u5DF2\u6D88\u8017\u7684\u65F6\u95F4</td></tr><tr><td><code>https</code></td><td>\u662F\u5426\u5F00\u542F\u4E86 <code>https</code> \uFF0C\u662F\u5219\u8FD4\u56DE <code>on</code> \uFF0C\u5426\u5219\u8FD4\u56DE\u7A7A</td></tr><tr><td><code>request_filename</code></td><td>\u78C1\u76D8\u6587\u4EF6\u7CFB\u7EDF\u5F85\u8BBF\u95EE\u6587\u4EF6\u7684\u5B8C\u6574\u8DEF\u5F84</td></tr><tr><td><code>document_root</code></td><td>\u7531 <code>URI</code> \u548C <code>root/alias</code> \u89C4\u5219\u751F\u6210\u7684\u6587\u4EF6\u5939\u8DEF\u5F84</td></tr><tr><td><code>limit_rate</code></td><td>\u8FD4\u56DE\u54CD\u5E94\u65F6\u7684\u901F\u5EA6\u4E0A\u9650\u503C</td></tr></tbody></table><p>\u5B9E\u4F8B\u6F14\u793A <code>var.conf</code> \uFF1A</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>server{
 listen 8081;
 server_name var.lion-test.club;
 root /usr/share/nginx/html;
 location / {
  return 200 &quot;
remote_addr: $remote_addr
remote_port: $remote_port
server_addr: $server_addr
server_port: $server_port
server_protocol: $server_protocol
binary_remote_addr: $binary_remote_addr
connection: $connection
uri: $uri
request_uri: $request_uri
scheme: $scheme
request_method: $request_method
request_length: $request_length
args: $args
arg_pid: $arg_pid
is_args: $is_args
query_string: $query_string
host: $host
http_user_agent: $http_user_agent
http_referer: $http_referer
http_via: $http_via
request_time: $request_time
https: $https
request_filename: $request_filename
document_root: $document_root
&quot;;
 }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u5F53\u6211\u4EEC\u8BBF\u95EE <code>http://var.lion-test.club:8081/test?pid=121414&amp;cid=sadasd</code> \u65F6\uFF0C\u7531\u4E8E <code>Nginx</code> \u4E2D\u5199\u4E86 <code>return</code> \u65B9\u6CD5\uFF0C\u56E0\u6B64 <code>chrome</code> \u6D4F\u89C8\u5668\u4F1A\u9ED8\u8BA4\u4E3A\u6211\u4EEC\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E0B\u9762\u5C55\u793A\u7684\u5C31\u662F\u4E0B\u8F7D\u7684\u6587\u4EF6\u5185\u5BB9\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>remote_addr: 27.16.220.84
remote_port: 56838
server_addr: 172.17.0.2
server_port: 8081
server_protocol: HTTP/1.1
binary_remote_addr: \u8309
connection: 126
uri: /test/
request_uri: /test/?pid=121414&amp;cid=sadasd
scheme: http
request_method: GET
request_length: 518
args: pid=121414&amp;cid=sadasd
arg_pid: 121414
is_args: ?
query_string: pid=121414&amp;cid=sadasd
host: var.lion-test.club
http_user_agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36
http_referer: 
http_via: 
request_time: 0.000
https: 
request_filename: /usr/share/nginx/html/test/
document_root: /usr/share/nginx/html
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><code>Nginx</code> \u7684\u914D\u7F6E\u8FD8\u6709\u975E\u5E38\u591A\uFF0C\u4EE5\u4E0A\u53EA\u662F\u7F57\u5217\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u914D\u7F6E\uFF0C\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u8FD8\u662F\u8981\u5B66\u4F1A\u67E5\u9605\u6587\u6863\u3002</p><h1 id="nginx-\u5E94\u7528\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#nginx-\u5E94\u7528\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> Nginx \u5E94\u7528\u6838\u5FC3\u6982\u5FF5</h1><p>\u4EE3\u7406\u662F\u5728\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u4E4B\u95F4\u5047\u8BBE\u7684\u4E00\u5C42\u670D\u52A1\u5668\uFF0C\u4EE3\u7406\u5C06\u63A5\u6536\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u5E76\u5C06\u5B83\u8F6C\u53D1\u7ED9\u670D\u52A1\u5668\uFF0C\u7136\u540E\u5C06\u670D\u52A1\u7AEF\u7684\u54CD\u5E94\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u3002</p><p>\u4E0D\u7BA1\u662F\u6B63\u5411\u4EE3\u7406\u8FD8\u662F\u53CD\u5411\u4EE3\u7406\uFF0C\u5B9E\u73B0\u7684\u90FD\u662F\u4E0A\u9762\u7684\u529F\u80FD\u3002</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/C7C2BA40280F78BA5EB541F99E3CE066.jpg" alt="img"></p><h2 id="\u6B63\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u6B63\u5411\u4EE3\u7406</h2><blockquote><p>\u6B63\u5411\u4EE3\u7406\uFF0C\u610F\u601D\u662F\u4E00\u4E2A\u4F4D\u4E8E\u5BA2\u6237\u7AEF\u548C\u539F\u59CB\u670D\u52A1\u5668(origin server)\u4E4B\u95F4\u7684\u670D\u52A1\u5668\uFF0C\u4E3A\u4E86\u4ECE\u539F\u59CB\u670D\u52A1\u5668\u53D6\u5F97\u5185\u5BB9\uFF0C\u5BA2\u6237\u7AEF\u5411\u4EE3\u7406\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\u5E76\u6307\u5B9A\u76EE\u6807(\u539F\u59CB\u670D\u52A1\u5668)\uFF0C\u7136\u540E\u4EE3\u7406\u5411\u539F\u59CB\u670D\u52A1\u5668\u8F6C\u4EA4\u8BF7\u6C42\u5E76\u5C06\u83B7\u5F97\u7684\u5185\u5BB9\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p></blockquote><p>\u6B63\u5411\u4EE3\u7406\u662F\u4E3A\u6211\u4EEC\u670D\u52A1\u7684\uFF0C\u5373\u4E3A\u5BA2\u6237\u7AEF\u670D\u52A1\u7684\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6839\u636E\u6B63\u5411\u4EE3\u7406\u8BBF\u95EE\u5230\u5B83\u672C\u8EAB\u65E0\u6CD5\u8BBF\u95EE\u5230\u7684\u670D\u52A1\u5668\u8D44\u6E90\u3002</p><p>\u6B63\u5411\u4EE3\u7406\u5BF9\u6211\u4EEC\u662F\u900F\u660E\u7684\uFF0C\u5BF9\u670D\u52A1\u7AEF\u662F\u975E\u900F\u660E\u7684\uFF0C\u5373\u670D\u52A1\u7AEF\u5E76\u4E0D\u77E5\u9053\u81EA\u5DF1\u6536\u5230\u7684\u662F\u6765\u81EA\u4EE3\u7406\u7684\u8BBF\u95EE\u8FD8\u662F\u6765\u81EA\u771F\u5B9E\u5BA2\u6237\u7AEF\u7684\u8BBF\u95EE\u3002</p><h2 id="\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u53CD\u5411\u4EE3\u7406</h2><blockquote><ul><li>\u53CD\u5411\u4EE3\u7406*\uFF08Reverse Proxy\uFF09\u65B9\u5F0F\u662F\u6307\u4EE5\u4EE3\u7406\u670D\u52A1\u5668\u6765\u63A5\u53D7internet\u4E0A\u7684\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u7136\u540E\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5185\u90E8\u7F51\u7EDC\u4E0A\u7684\u670D\u52A1\u5668\uFF0C\u5E76\u5C06\u4ECE\u670D\u52A1\u5668\u4E0A\u5F97\u5230\u7684\u7ED3\u679C\u8FD4\u56DE\u7ED9internet\u4E0A\u8BF7\u6C42\u8FDE\u63A5\u7684\u5BA2\u6237\u7AEF\uFF0C\u6B64\u65F6\u4EE3\u7406\u670D\u52A1\u5668\u5BF9\u5916\u5C31\u8868\u73B0\u4E3A\u4E00\u4E2A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u3002</li></ul></blockquote><p>\u53CD\u5411\u4EE3\u7406\u662F\u4E3A\u670D\u52A1\u7AEF\u670D\u52A1\u7684\uFF0C\u53CD\u5411\u4EE3\u7406\u53EF\u4EE5\u5E2E\u52A9\u670D\u52A1\u5668\u63A5\u6536\u6765\u81EA\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u5E2E\u52A9\u670D\u52A1\u5668\u505A\u8BF7\u6C42\u8F6C\u53D1\uFF0C\u8D1F\u8F7D\u5747\u8861\u7B49\u3002</p><p>\u53CD\u5411\u4EE3\u7406\u5BF9\u670D\u52A1\u7AEF\u662F\u900F\u660E\u7684\uFF0C\u5BF9\u6211\u4EEC\u662F\u975E\u900F\u660E\u7684\uFF0C\u5373\u6211\u4EEC\u5E76\u4E0D\u77E5\u9053\u81EA\u5DF1\u8BBF\u95EE\u7684\u662F\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u800C\u670D\u52A1\u5668\u77E5\u9053\u53CD\u5411\u4EE3\u7406\u5728\u4E3A\u4ED6\u670D\u52A1\u3002</p><p>\u53CD\u5411\u4EE3\u7406\u7684\u4F18\u52BF\uFF1A</p><ul><li>\u9690\u85CF\u771F\u5B9E\u670D\u52A1\u5668\uFF1B</li><li>\u8D1F\u8F7D\u5747\u8861\u4FBF\u4E8E\u6A2A\u5411\u6269\u5145\u540E\u7AEF\u52A8\u6001\u670D\u52A1\uFF1B</li><li>\u52A8\u9759\u5206\u79BB\uFF0C\u63D0\u5347\u7CFB\u7EDF\u5065\u58EE\u6027\uFF1B</li></ul><p>\u90A3\u4E48\u201C\u52A8\u9759\u5206\u79BB\u201D\u662F\u4EC0\u4E48\uFF1F\u8D1F\u8F7D\u5747\u8861\u53C8\u662F\u4EC0\u4E48\uFF1F</p><h2 id="\u52A8\u9759\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#\u52A8\u9759\u5206\u79BB" aria-hidden="true">#</a> \u52A8\u9759\u5206\u79BB</h2><p>\u52A8\u9759\u5206\u79BB\u662F\u6307\u5728 <code>web</code> \u670D\u52A1\u5668\u67B6\u6784\u4E2D\uFF0C\u5C06\u9759\u6001\u9875\u9762\u4E0E\u52A8\u6001\u9875\u9762\u6216\u8005\u9759\u6001\u5185\u5BB9\u63A5\u53E3\u548C\u52A8\u6001\u5185\u5BB9\u63A5\u53E3\u5206\u5F00\u4E0D\u540C\u7CFB\u7EDF\u8BBF\u95EE\u7684\u67B6\u6784\u8BBE\u8BA1\u65B9\u6CD5\uFF0C\u8FDB\u800C\u63D0\u793A\u6574\u4E2A\u670D\u52A1\u7684\u8BBF\u95EE\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/62CEDC6012FD06BE5829E0D1F0C0A70D.jpg" alt="img"></p><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u90FD\u9700\u8981\u5C06\u52A8\u6001\u8D44\u6E90\u548C\u9759\u6001\u8D44\u6E90\u5206\u5F00\uFF0C\u7531\u4E8E <code>Nginx</code> \u7684\u9AD8\u5E76\u53D1\u548C\u9759\u6001\u8D44\u6E90\u7F13\u5B58\u7B49\u7279\u6027\uFF0C\u7ECF\u5E38\u5C06\u9759\u6001\u8D44\u6E90\u90E8\u7F72\u5728 <code>Nginx</code> \u4E0A\u3002\u5982\u679C\u8BF7\u6C42\u7684\u662F\u9759\u6001\u8D44\u6E90\uFF0C\u76F4\u63A5\u5230\u9759\u6001\u8D44\u6E90\u76EE\u5F55\u83B7\u53D6\u8D44\u6E90\uFF0C\u5982\u679C\u662F\u52A8\u6001\u8D44\u6E90\u7684\u8BF7\u6C42\uFF0C\u5219\u5229\u7528\u53CD\u5411\u4EE3\u7406\u7684\u539F\u7406\uFF0C\u628A\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5BF9\u5E94\u540E\u53F0\u5E94\u7528\u53BB\u5904\u7406\uFF0C\u4ECE\u800C\u5B9E\u73B0\u52A8\u9759\u5206\u79BB\u3002</p><p>\u4F7F\u7528\u524D\u540E\u7AEF\u5206\u79BB\u540E\uFF0C\u53EF\u4EE5\u5F88\u5927\u7A0B\u5EA6\u63D0\u5347\u9759\u6001\u8D44\u6E90\u7684\u8BBF\u95EE\u901F\u5EA6\uFF0C\u5373\u4F7F\u52A8\u6001\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u9759\u6001\u8D44\u6E90\u7684\u8BBF\u95EE\u4E5F\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\u3002</p><h2 id="\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u8D1F\u8F7D\u5747\u8861</h2><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5BA2\u6237\u7AEF\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42\u5230\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42\uFF0C\u5176\u4E2D\u4E00\u90E8\u5206\u53EF\u80FD\u8981\u64CD\u4F5C\u4E00\u4E9B\u8D44\u6E90\u6BD4\u5982\u6570\u636E\u5E93\u3001\u9759\u6001\u8D44\u6E90\u7B49\uFF0C\u670D\u52A1\u5668\u5904\u7406\u5B8C\u6BD5\u540E\uFF0C\u518D\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p><p>\u8FD9\u79CD\u6A21\u5F0F\u5BF9\u4E8E\u65E9\u671F\u7684\u7CFB\u7EDF\u6765\u8BF4\uFF0C\u529F\u80FD\u8981\u6C42\u4E0D\u590D\u6742\uFF0C\u4E14\u5E76\u53D1\u8BF7\u6C42\u76F8\u5BF9\u8F83\u5C11\u7684\u60C5\u51B5\u4E0B\u8FD8\u80FD\u80DC\u4EFB\uFF0C\u6210\u672C\u4E5F\u4F4E\u3002\u968F\u7740\u4FE1\u606F\u6570\u91CF\u4E0D\u65AD\u589E\u957F\uFF0C\u8BBF\u95EE\u91CF\u548C\u6570\u636E\u91CF\u98DE\u901F\u589E\u957F\uFF0C\u4EE5\u53CA\u7CFB\u7EDF\u4E1A\u52A1\u590D\u6742\u5EA6\u6301\u7EED\u589E\u52A0\uFF0C\u8FD9\u79CD\u505A\u6CD5\u5DF2\u65E0\u6CD5\u6EE1\u8DB3\u8981\u6C42\uFF0C\u5E76\u53D1\u91CF\u7279\u522B\u5927\u65F6\uFF0C\u670D\u52A1\u5668\u5BB9\u6613\u5D29\u3002</p><p>\u5F88\u660E\u663E\u8FD9\u662F\u7531\u4E8E\u670D\u52A1\u5668\u6027\u80FD\u7684\u74F6\u9888\u9020\u6210\u7684\u95EE\u9898\uFF0C\u9664\u4E86\u5806\u673A\u5668\u4E4B\u5916\uFF0C\u6700\u91CD\u8981\u7684\u505A\u6CD5\u5C31\u662F\u8D1F\u8F7D\u5747\u8861\u3002</p><p>\u8BF7\u6C42\u7206\u53D1\u5F0F\u589E\u957F\u7684\u60C5\u51B5\u4E0B\uFF0C\u5355\u4E2A\u673A\u5668\u6027\u80FD\u518D\u5F3A\u52B2\u4E5F\u65E0\u6CD5\u6EE1\u8DB3\u8981\u6C42\u4E86\uFF0C\u8FD9\u4E2A\u65F6\u5019\u96C6\u7FA4\u7684\u6982\u5FF5\u4EA7\u751F\u4E86\uFF0C\u5355\u4E2A\u670D\u52A1\u5668\u89E3\u51B3\u4E0D\u4E86\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u4F7F\u7528\u591A\u4E2A\u670D\u52A1\u5668\uFF0C\u7136\u540E\u5C06\u8BF7\u6C42\u5206\u53D1\u5230\u5404\u4E2A\u670D\u52A1\u5668\u4E0A\uFF0C\u5C06\u8D1F\u8F7D\u5206\u53D1\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5668\uFF0C\u8FD9\u5C31\u662F\u8D1F\u8F7D\u5747\u8861\uFF0C\u6838\u5FC3\u662F\u300C\u5206\u644A\u538B\u529B\u300D\u3002<code>Nginx</code> \u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\uFF0C\u4E00\u822C\u6765\u8BF4\u6307\u7684\u662F\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u670D\u52A1\u5668\u96C6\u7FA4\u3002</p><p>\u4E3E\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50\uFF0C\u665A\u9AD8\u5CF0\u4E58\u5750\u5730\u94C1\u7684\u65F6\u5019\uFF0C\u5165\u7AD9\u53E3\u7ECF\u5E38\u4F1A\u6709\u5730\u94C1\u5DE5\u4F5C\u4EBA\u5458\u5927\u5587\u53ED\u201C\u8BF7\u8D70 <code>B</code> \u53E3\uFF0C <code>B</code> \u53E3\u4EBA\u5C11\u8F66\u7A7A....\u201D\uFF0C\u8FD9\u4E2A\u5DE5\u4F5C\u4EBA\u5458\u7684\u4F5C\u7528\u5C31\u662F\u8D1F\u8F7D\u5747\u8861\u3002<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/AD09098E0C911544847085B4CAC3B922.jpg" alt="img"></p><p><code>Nginx</code> \u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u7684\u7B56\u7565\uFF1A</p><ul><li>\u8F6E\u8BE2\u7B56\u7565\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u91C7\u7528\u7684\u7B56\u7565\uFF0C\u5C06\u6240\u6709\u5BA2\u6237\u7AEF\u8BF7\u6C42\u8F6E\u8BE2\u5206\u914D\u7ED9\u670D\u52A1\u7AEF\u3002\u8FD9\u79CD\u7B56\u7565\u662F\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u7684\uFF0C\u4F46\u662F\u5982\u679C\u5176\u4E2D\u67D0\u4E00\u53F0\u670D\u52A1\u5668\u538B\u529B\u592A\u5927\uFF0C\u51FA\u73B0\u5EF6\u8FDF\uFF0C\u4F1A\u5F71\u54CD\u6240\u6709\u5206\u914D\u5728\u8FD9\u53F0\u670D\u52A1\u5668\u4E0B\u7684\u7528\u6237\u3002</li><li>\u6700\u5C0F\u8FDE\u63A5\u6570\u7B56\u7565\uFF1A\u5C06\u8BF7\u6C42\u4F18\u5148\u5206\u914D\u7ED9\u538B\u529B\u8F83\u5C0F\u7684\u670D\u52A1\u5668\uFF0C\u5B83\u53EF\u4EE5\u5E73\u8861\u6BCF\u4E2A\u961F\u5217\u7684\u957F\u5EA6\uFF0C\u5E76\u907F\u514D\u5411\u538B\u529B\u5927\u7684\u670D\u52A1\u5668\u6DFB\u52A0\u66F4\u591A\u7684\u8BF7\u6C42\u3002</li><li>\u6700\u5FEB\u54CD\u5E94\u65F6\u95F4\u7B56\u7565\uFF1A\u4F18\u5148\u5206\u914D\u7ED9\u54CD\u5E94\u65F6\u95F4\u6700\u77ED\u7684\u670D\u52A1\u5668\u3002</li><li>\u5BA2\u6237\u7AEF <code>ip</code> \u7ED1\u5B9A\u7B56\u7565\uFF1A\u6765\u81EA\u540C\u4E00\u4E2A <code>ip</code> \u7684\u8BF7\u6C42\u6C38\u8FDC\u53EA\u5206\u914D\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u6709\u6548\u89E3\u51B3\u4E86\u52A8\u6001\u7F51\u9875\u5B58\u5728\u7684 <code>session</code> \u5171\u4EAB\u95EE\u9898\u3002</li></ul><h1 id="nginx-\u5B9E\u6218\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx-\u5B9E\u6218\u914D\u7F6E" aria-hidden="true">#</a> Nginx \u5B9E\u6218\u914D\u7F6E</h1><p>\u5728\u914D\u7F6E\u53CD\u5411\u4EE3\u7406\u548C\u8D1F\u8F7D\u5747\u8861\u7B49\u7B49\u529F\u80FD\u4E4B\u524D\uFF0C\u6709\u4E24\u4E2A\u6838\u5FC3\u6A21\u5757\u662F\u6211\u4EEC\u5FC5\u987B\u8981\u638C\u63E1\u7684\uFF0C\u8FD9\u4E24\u4E2A\u6A21\u5757\u5E94\u8BE5\u8BF4\u662F <code>Nginx</code> \u5E94\u7528\u914D\u7F6E\u4E2D\u7684\u6838\u5FC3\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\uFF1A<code>upstream</code> \u3001<code>proxy_pass</code> \u3002</p><h2 id="upstream" tabindex="-1"><a class="header-anchor" href="#upstream" aria-hidden="true">#</a> upstream</h2><p>\u7528\u4E8E\u5B9A\u4E49\u4E0A\u6E38\u670D\u52A1\u5668\uFF08\u6307\u7684\u5C31\u662F\u540E\u53F0\u63D0\u4F9B\u7684\u5E94\u7528\u670D\u52A1\u5668\uFF09\u7684\u76F8\u5173\u4FE1\u606F\u3002</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/DDEEC4F75860F9EABC1A3332FF96F091.jpg" alt="img"></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>\u8BED\u6CD5\uFF1Aupstreamname {
 ...
}

\u4E0A\u4E0B\u6587\uFF1Ahttp

\u793A\u4F8B\uFF1A
upstream back_end_server{
  server 192.168.100.33:8081
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5728 <code>upstream</code> \u5185\u53EF\u4F7F\u7528\u7684\u6307\u4EE4\uFF1A</p><ul><li><code>server</code> \u5B9A\u4E49\u4E0A\u6E38\u670D\u52A1\u5668\u5730\u5740\uFF1B</li><li><code>zone</code> \u5B9A\u4E49\u5171\u4EAB\u5185\u5B58\uFF0C\u7528\u4E8E\u8DE8 <code>worker</code> \u5B50\u8FDB\u7A0B\uFF1B</li><li><code>keepalive</code> \u5BF9\u4E0A\u6E38\u670D\u52A1\u542F\u7528\u957F\u8FDE\u63A5\uFF1B</li><li><code>keepalive_requests</code> \u4E00\u4E2A\u957F\u8FDE\u63A5\u6700\u591A\u8BF7\u6C42 <code>HTTP</code> \u7684\u4E2A\u6570\uFF1B</li><li><code>keepalive_timeout</code> \u7A7A\u95F2\u60C5\u5F62\u4E0B\uFF0C\u4E00\u4E2A\u957F\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u957F\uFF1B</li><li><code>hash</code> \u54C8\u5E0C\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF1B</li><li><code>ip_hash</code> \u4F9D\u636E <code>IP</code> \u8FDB\u884C\u54C8\u5E0C\u8BA1\u7B97\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF1B</li><li><code>least_conn</code> \u6700\u5C11\u8FDE\u63A5\u6570\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF1B</li><li><code>least_time</code> \u6700\u77ED\u54CD\u5E94\u65F6\u95F4\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF1B</li><li><code>random</code> \u968F\u673A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF1B</li></ul><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h3><p>\u5B9A\u4E49\u4E0A\u6E38\u670D\u52A1\u5668\u5730\u5740\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>\u8BED\u6CD5\uFF1Aserveraddress[parameters]

\u4E0A\u4E0B\u6587\uFF1Aupstream
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>parameters</code> \u53EF\u9009\u503C\uFF1A</p><ul><li><code>weight=number</code> \u6743\u91CD\u503C\uFF0C\u9ED8\u8BA4\u4E3A1\uFF1B</li><li><code>max_conns=number</code> \u4E0A\u6E38\u670D\u52A1\u5668\u7684\u6700\u5927\u5E76\u53D1\u8FDE\u63A5\u6570\uFF1B</li><li><code>fail_timeout=time</code> \u670D\u52A1\u5668\u4E0D\u53EF\u7528\u7684\u5224\u5B9A\u65F6\u95F4\uFF1B</li><li><code>max_fails=numer</code> \u670D\u52A1\u5668\u4E0D\u53EF\u7528\u7684\u68C0\u67E5\u6B21\u6570\uFF1B</li><li><code>backup</code> \u5907\u4EFD\u670D\u52A1\u5668\uFF0C\u4EC5\u5F53\u5176\u4ED6\u670D\u52A1\u5668\u90FD\u4E0D\u53EF\u7528\u65F6\u624D\u4F1A\u542F\u7528\uFF1B</li><li><code>down</code> \u6807\u8BB0\u670D\u52A1\u5668\u957F\u671F\u4E0D\u53EF\u7528\uFF0C\u79BB\u7EBF\u7EF4\u62A4\uFF1B</li></ul><h3 id="keepalive" tabindex="-1"><a class="header-anchor" href="#keepalive" aria-hidden="true">#</a> keepalive</h3><p>\u9650\u5236\u6BCF\u4E2A <code>worker</code> \u5B50\u8FDB\u7A0B\u4E0E\u4E0A\u6E38\u670D\u52A1\u5668\u7A7A\u95F2\u957F\u8FDE\u63A5\u7684\u6700\u5927\u6570\u91CF\u3002</p><div class="language-undefined ext-undefined line-numbers-mode"><pre class="language-undefined"><code>keepalive connections;

\u4E0A\u4E0B\u6587\uFF1Aupstream

\u793A\u4F8B\uFF1Akeepalive 16;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="keepalive-requests" tabindex="-1"><a class="header-anchor" href="#keepalive-requests" aria-hidden="true">#</a> keepalive_requests</h3><p>\u5355\u4E2A\u957F\u8FDE\u63A5\u53EF\u4EE5\u5904\u7406\u7684\u6700\u591A <code>HTTP</code> \u8BF7\u6C42\u4E2A\u6570\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>\u8BED\u6CD5\uFF1Akeepalive_requests number;

\u9ED8\u8BA4\u503C\uFF1Akeepalive_requests 100;

\u4E0A\u4E0B\u6587\uFF1Aupstream
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="keepalive-timeout" tabindex="-1"><a class="header-anchor" href="#keepalive-timeout" aria-hidden="true">#</a> keepalive_timeout</h3><p>\u7A7A\u95F2\u957F\u8FDE\u63A5\u7684\u6700\u957F\u4FDD\u6301\u65F6\u95F4\u3002</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>\u8BED\u6CD5\uFF1Akeepalive_timeout time;

\u9ED8\u8BA4\u503C\uFF1Akeepalive_timeout 60s;

\u4E0A\u4E0B\u6587\uFF1Aupstream
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u914D\u7F6E\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5B9E\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u5B9E\u4F8B</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>upstream back_end{
 server 127.0.0.1:8081 weight=3 max_conns=1000 fail_timeout=10s max_fails=2;
  keepalive 32;
  keepalive_requests 50;
  keepalive_timeout 30s;
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="proxy-pass" tabindex="-1"><a class="header-anchor" href="#proxy-pass" aria-hidden="true">#</a> proxy_pass</h2><p>\u7528\u4E8E\u914D\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u3002</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>\u8BED\u6CD5\uFF1Aproxy_pass URL;

\u4E0A\u4E0B\u6587\uFF1Alocation\u3001if\u3001limit_except

\u793A\u4F8B\uFF1A
proxy_pass http://127.0.0.1:8081
proxy_pass http://127.0.0.1:8081/proxy
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>URL</code> \u53C2\u6570\u539F\u5219</p><ol><li><code>URL</code> \u5FC5\u987B\u4EE5 <code>http</code> \u6216 <code>https</code> \u5F00\u5934\uFF1B</li><li><code>URL</code> \u4E2D\u53EF\u4EE5\u643A\u5E26\u53D8\u91CF\uFF1B</li><li><code>URL</code> \u4E2D\u662F\u5426\u5E26 <code>URI</code> \uFF0C\u4F1A\u76F4\u63A5\u5F71\u54CD\u53D1\u5F80\u4E0A\u6E38\u8BF7\u6C42\u7684 <code>URL</code> \uFF1B</li></ol><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u4E24\u79CD\u5E38\u89C1\u7684 <code>URL</code> \u7528\u6CD5\uFF1A</p><ol><li><code>proxy_pass http://192.168.100.33:8081</code></li><li><code>proxy_pass http://192.168.100.33:8081/</code></li></ol><p>\u8FD9\u4E24\u79CD<a href="https://www.fgba.net/" target="_blank" rel="noopener noreferrer">\u6E38\u620F\u8D26\u53F7\u4E70\u53F7</a><a href="https://www.fgba.net/sitemap.xml" target="_blank" rel="noopener noreferrer">\u5730\u56FE</a>\u7528\u6CD5\u7684\u533A\u522B\u5C31\u662F\u5E26 <code>/</code> \u548C\u4E0D\u5E26 <code>/</code> \uFF0C\u5728\u914D\u7F6E\u4EE3\u7406\u65F6\u5B83\u4EEC\u7684\u533A\u522B\u53EF\u5927\u4E86\uFF1A</p><ul><li>\u4E0D\u5E26 <code>/</code> \u610F\u5473\u7740 <code>Nginx</code> \u4E0D\u4F1A\u4FEE\u6539\u7528\u6237 <code>URL</code> \uFF0C\u800C\u662F\u76F4\u63A5\u900F\u4F20\u7ED9\u4E0A\u6E38\u7684\u5E94\u7528\u670D\u52A1\u5668\uFF1B</li><li>\u5E26 <code>/</code> \u610F\u5473\u7740 <code>Nginx</code> \u4F1A\u4FEE\u6539\u7528\u6237 <code>URL</code> \uFF0C\u4FEE\u6539\u65B9\u6CD5\u662F\u5C06 <code>location</code> \u540E\u7684 <code>URL</code> \u4ECE\u7528\u6237 <code>URL</code> \u4E2D\u5220\u9664\uFF1B</li></ul><p>\u4E0D\u5E26 <code>/</code> \u7684\u7528\u6CD5\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>location /bbs/{
  proxy_pass http://127.0.0.1:8080;
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5206\u6790\uFF1A</p><ol><li>\u7528\u6237\u8BF7\u6C42 <code>URL</code> \uFF1A<code>/bbs/abc/test.html</code></li><li>\u8BF7\u6C42\u5230\u8FBE <code>Nginx</code> \u7684 <code>URL</code> \uFF1A<code>/bbs/abc/test.html</code></li><li>\u8BF7\u6C42\u5230\u8FBE\u4E0A\u6E38\u5E94\u7528\u670D\u52A1\u5668\u7684 <code>URL</code> \uFF1A<code>/bbs/abc/test.html</code></li></ol><p>\u5E26 <code>/</code> \u7684\u7528\u6CD5\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>location /bbs/{
  proxy_pass http://127.0.0.1:8080/;
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5206\u6790\uFF1A</p><ol><li>\u7528\u6237\u8BF7\u6C42 <code>URL</code> \uFF1A<code>/bbs/abc/test.html</code></li><li>\u8BF7\u6C42\u5230\u8FBE <code>Nginx</code> \u7684 <code>URL</code> \uFF1A<code>/bbs/abc/test.html</code></li><li>\u8BF7\u6C42\u5230\u8FBE\u4E0A\u6E38\u5E94\u7528\u670D\u52A1\u5668\u7684 <code>URL</code> \uFF1A<code>/abc/test.html</code></li></ol><p>\u5E76\u6CA1\u6709\u62FC\u63A5\u4E0A <code>/bbs</code> \uFF0C\u8FD9\u70B9\u548C <code>root</code> \u4E0E <code>alias</code> \u4E4B\u95F4\u7684\u533A\u522B\u662F\u4FDD\u6301\u4E00\u81F4\u7684\u3002</p><h2 id="\u914D\u7F6E\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u53CD\u5411\u4EE3\u7406</h2><p>\u8FD9\u91CC\u4E3A\u4E86\u6F14\u793A\u66F4\u52A0\u63A5\u8FD1\u5B9E\u9645\uFF0C\u4F5C\u8005\u51C6\u5907\u4E86\u4E24\u53F0\u4E91\u670D\u52A1\u5668\uFF0C\u5B83\u4EEC\u7684\u516C\u7F51 <code>IP</code> \u5206\u522B\u662F\uFF1A<code>121.42.11.34</code> \u4E0E <code>121.5.180.193</code> \u3002</p><p>\u6211\u4EEC\u628A <code>121.42.11.34</code> \u670D\u52A1\u5668\u4F5C\u4E3A\u4E0A\u6E38\u670D\u52A1\u5668\uFF0C\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code># /etc/nginx/conf.d/proxy.conf
server{
  listen 8080;
  server_name localhost;
  
  location /proxy/ {
    root /usr/share/nginx/html/proxy;
    index index.html;
  }
}

# /usr/share/nginx/html/proxy/index.html
&lt;h1&gt; 121.42.11.34 proxy html &lt;/h1&gt;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u914D\u7F6E\u5B8C\u6210\u540E\u91CD\u542F <code>Nginx</code> \u670D\u52A1\u5668 <code>nginx -s reload</code> \u3002</p><p>\u628A <code>121.5.180.193</code> \u670D\u52A1\u5668\u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code># /etc/nginx/conf.d/proxy.conf
upstream back_end {
  server 121.42.11.34:8080 weight=2 max_conns=1000 fail_timeout=10s max_fails=3;
  keepalive 32;
  keepalive_requests 80;
  keepalive_timeout 20s;
}

server {
  listen 80;
  server_name proxy.lion.club;
  location /proxy {
   proxy_pass http://back_end/proxy;
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u672C\u5730\u673A\u5668\u8981\u8BBF\u95EE <code>proxy.lion.club</code> \u57DF\u540D\uFF0C\u56E0\u6B64\u9700\u8981\u914D\u7F6E\u672C\u5730 <code>hosts</code> \uFF0C\u901A\u8FC7\u547D\u4EE4\uFF1A<code>vim /etc/hosts</code> \u8FDB\u5165\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>121.5.180.193 proxy.lion.club
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/6E6C113354D23BC1D599D78303E45F40.jpg" alt="img"></p><p>\u5206\u6790\uFF1A</p><ol><li>\u5F53\u8BBF\u95EE <code>proxy.lion.club/proxy</code> \u65F6\u901A\u8FC7 <code>upstream</code> \u7684\u914D\u7F6E\u627E\u5230 <code>121.42.11.34:8080</code> \uFF1B</li><li>\u56E0\u6B64\u8BBF\u95EE\u5730\u5740\u53D8\u4E3A <code>http://121.42.11.34:8080/proxy</code> \uFF1B</li><li>\u8FDE\u63A5\u5230 <code>121.42.11.34</code> \u670D\u52A1\u5668\uFF0C\u627E\u5230 <code>8080</code> \u7AEF\u53E3\u63D0\u4F9B\u7684 <code>server</code> \uFF1B</li><li>\u901A\u8FC7 <code>server</code> \u627E\u5230 <code>/usr/share/nginx/html/proxy/index.html</code> \u8D44\u6E90\uFF0C\u6700\u7EC8\u5C55\u793A\u51FA\u6765\u3002</li></ol><h2 id="\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u914D\u7F6E\u8D1F\u8F7D\u5747\u8861</h2><p>\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u4E3B\u8981\u662F\u8981\u4F7F\u7528 <code>upstream</code> \u6307\u4EE4\u3002</p><p>\u6211\u4EEC\u628A <code>121.42.11.34</code> \u670D\u52A1\u5668\u4F5C\u4E3A\u4E0A\u6E38\u670D\u52A1\u5668\uFF0C\u505A\u5982\u4E0B\u914D\u7F6E\uFF08 <code>/etc/nginx/conf.d/balance.conf</code> \uFF09\uFF1A</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>server{
  listen 8020;
  location / {
   return 200 &#39;return 8020 \\n&#39;;
  }
}

server{
  listen 8030;
  location / {
   return 200 &#39;return 8030 \\n&#39;;
  }
}

server{
  listen 8040;
  location / {
   return 200 &#39;return 8040 \\n&#39;;
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u914D\u7F6E\u5B8C\u6210\u540E\uFF1A</p><ol><li><code>nginx -t</code> \u68C0\u6D4B\u914D\u7F6E\u662F\u5426\u6B63\u786E\uFF1B</li><li><code>nginx -s reload</code> \u91CD\u542F <code>Nginx</code> \u670D\u52A1\u5668\uFF1B</li><li>\u6267\u884C <code>ss -nlt</code> \u547D\u4EE4\u67E5\u770B\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528\uFF0C\u4ECE\u800C\u5224\u65AD <code>Nginx</code> \u670D\u52A1\u662F\u5426\u6B63\u786E\u542F\u52A8\u3002</li></ol><p>\u628A <code>121.5.180.193</code> \u670D\u52A1\u5668\u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u505A\u5982\u4E0B\u914D\u7F6E\uFF08 <code>/etc/nginx/conf.d/balance.conf</code> \uFF09\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>upstream demo_server {
  server 121.42.11.34:8020;
  server 121.42.11.34:8030;
  server 121.42.11.34:8040;
}

server {
  listen 80;
  server_name balance.lion.club;
  
  location /balance/ {
   proxy_pass http://demo_server;
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u914D\u7F6E\u5B8C\u6210\u540E\u91CD\u542F <code>Nginx</code> \u670D\u52A1\u5668\u3002\u5E76\u4E14\u5728\u9700\u8981\u8BBF\u95EE\u7684\u5BA2\u6237\u7AEF\u914D\u7F6E\u597D <code>ip</code> \u548C\u57DF\u540D\u7684\u6620\u5C04\u5173\u7CFB\u3002</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code># /etc/hosts

121.5.180.193 balance.lion.club
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728\u5BA2\u6237\u7AEF\u673A\u5668\u6267\u884C <code>curl http://balance.lion.club/balance/</code> \u547D\u4EE4\uFF1A</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/5B5965726072CEC928424BB13CE4AB81.jpg" alt="img"></p><p>\u4E0D\u96BE\u770B\u51FA\uFF0C\u8D1F\u8F7D\u5747\u8861\u7684\u914D\u7F6E\u5DF2\u7ECF\u751F\u6548\u4E86\uFF0C\u6BCF\u6B21\u7ED9\u6211\u4EEC\u5206\u53D1\u7684\u4E0A\u6E38\u670D\u52A1\u5668\u90FD\u4E0D\u4E00\u6837\u3002\u5C31\u662F\u901A\u8FC7\u7B80\u5355\u7684\u8F6E\u8BE2\u7B56\u7565\u8FDB\u884C\u4E0A\u6E38\u670D\u52A1\u5668\u5206\u53D1\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u518D\u6765\u4E86\u89E3\u4E0B <code>Nginx</code> \u7684\u5176\u5B83\u5206\u53D1\u7B56\u7565\u3002</p><h3 id="hash-\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#hash-\u7B97\u6CD5" aria-hidden="true">#</a> hash \u7B97\u6CD5</h3><p>\u901A\u8FC7\u5236\u5B9A\u5173\u952E\u5B57\u4F5C\u4E3A <code>hash key</code> \uFF0C\u57FA\u4E8E <code>hash</code> \u7B97\u6CD5\u6620\u5C04\u5230\u7279\u5B9A\u7684\u4E0A\u6E38\u670D\u52A1\u5668\u4E2D\u3002\u5173\u952E\u5B57\u53EF\u4EE5\u5305\u542B\u6709\u53D8\u91CF\u3001\u5B57\u7B26\u4E32\u3002</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>upstream demo_server {
  hash $request_uri;
  server 121.42.11.34:8020;
  server 121.42.11.34:8030;
  server 121.42.11.34:8040;
}

server {
  listen 80;
  server_name balance.lion.club;
  
  location /balance/ {
   proxy_pass http://demo_server;
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>hash $request_uri</code> \u8868\u793A\u4F7F\u7528 <code>request_uri</code> \u53D8\u91CF\u4F5C\u4E3A <code>hash</code> \u7684 <code>key</code> \u503C\uFF0C\u53EA\u8981\u8BBF\u95EE\u7684 <code>URI</code> \u4FDD\u6301\u4E0D\u53D8\uFF0C\u5C31\u4F1A\u4E00\u76F4\u5206\u53D1\u7ED9\u540C\u4E00\u53F0\u670D\u52A1\u5668\u3002</p><h3 id="ip-hash" tabindex="-1"><a class="header-anchor" href="#ip-hash" aria-hidden="true">#</a> ip_hash</h3><p>\u6839\u636E\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42 <code>ip</code> \u8FDB\u884C\u5224\u65AD\uFF0C\u53EA\u8981 <code>ip</code> \u5730\u5740\u4E0D\u53D8\u5C31\u6C38\u8FDC\u5206\u914D\u5230\u540C\u4E00\u53F0\u4E3B\u673A\u3002\u5B83\u53EF\u4EE5\u6709\u6548\u89E3\u51B3\u540E\u53F0\u670D\u52A1\u5668 <code>session</code> \u4FDD\u6301\u7684\u95EE\u9898\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>upstream demo_server {
  ip_hash;
  server 121.42.11.34:8020;
  server 121.42.11.34:8030;
  server 121.42.11.34:8040;
}

server {
  listen 80;
  server_name balance.lion.club;
  
  location /balance/ {
   proxy_pass http://demo_server;
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u6700\u5C11\u8FDE\u63A5\u6570\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C11\u8FDE\u63A5\u6570\u7B97\u6CD5" aria-hidden="true">#</a> \u6700\u5C11\u8FDE\u63A5\u6570\u7B97\u6CD5</h3><p>\u5404\u4E2A <code>worker</code> \u5B50\u8FDB\u7A0B\u901A\u8FC7\u8BFB\u53D6\u5171\u4EAB\u5185\u5B58\u7684\u6570\u636E\uFF0C\u6765\u83B7\u53D6\u540E\u7AEF\u670D\u52A1\u5668\u7684\u4FE1\u606F\u3002\u6765\u6311\u9009\u4E00\u53F0\u5F53\u524D\u5DF2\u5EFA\u7ACB\u8FDE\u63A5\u6570\u6700\u5C11\u7684\u670D\u52A1\u5668\u8FDB\u884C\u5206\u914D\u8BF7\u6C42\u3002</p><div class="language-undefined ext-undefined line-numbers-mode"><pre class="language-undefined"><code>\u8BED\u6CD5\uFF1Aleast_conn;

\u4E0A\u4E0B\u6587\uFF1Aupstream;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u793A\u4F8B\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>upstream demo_server {
  zone test 10M; # zone\u53EF\u4EE5\u8BBE\u7F6E\u5171\u4EAB\u5185\u5B58\u7A7A\u95F4\u7684\u540D\u5B57\u548C\u5927\u5C0F
  least_conn;
  server 121.42.11.34:8020;
  server 121.42.11.34:8030;
  server 121.42.11.34:8040;
}

server {
  listen 80;
  server_name balance.lion.club;
  
  location /balance/ {
   proxy_pass http://demo_server;
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u6700\u540E\u4F60\u4F1A\u53D1\u73B0\uFF0C\u8D1F\u8F7D\u5747\u8861\u7684\u914D\u7F6E\u5176\u5B9E\u4E00\u70B9\u90FD\u4E0D\u590D\u6742\u3002</p><h2 id="\u914D\u7F6E\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7F13\u5B58" aria-hidden="true">#</a> \u914D\u7F6E\u7F13\u5B58</h2><p>\u7F13\u5B58\u53EF\u4EE5\u975E\u5E38\u6709\u6548\u7684\u63D0\u5347\u6027\u80FD\uFF0C\u56E0\u6B64\u4E0D\u8BBA\u662F\u5BA2\u6237\u7AEF\uFF08\u6D4F\u89C8\u5668\uFF09\uFF0C\u8FD8\u662F\u4EE3\u7406\u670D\u52A1\u5668\uFF08 <code>Nginx</code> \uFF09\uFF0C\u4E43\u81F3\u4E0A\u6E38\u670D\u52A1\u5668\u90FD\u591A\u5C11\u4F1A\u6D89\u53CA\u5230\u7F13\u5B58\u3002\u53EF\u89C1\u7F13\u5B58\u5728\u6BCF\u4E2A\u73AF\u8282\u90FD\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002\u4E0B\u9762\u8BA9\u6211\u4EEC\u6765\u5B66\u4E60 <code>Nginx</code> \u4E2D\u5982\u4F55\u8BBE\u7F6E\u7F13\u5B58\u7B56\u7565\u3002</p><h3 id="proxy-cache" tabindex="-1"><a class="header-anchor" href="#proxy-cache" aria-hidden="true">#</a> proxy_cache</h3><p>\u5B58\u50A8\u4E00\u4E9B\u4E4B\u524D\u88AB\u8BBF\u95EE\u8FC7\u3001\u800C\u4E14\u53EF\u80FD\u5C06\u8981\u88AB\u518D\u6B21\u8BBF\u95EE\u7684\u8D44\u6E90\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u4ECE\u4EE3\u7406\u670D\u52A1\u5668\u83B7\u5F97\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E0A\u6E38\u670D\u52A1\u5668\u7684\u538B\u529B\uFF0C\u52A0\u5FEB\u6574\u4E2A\u8BBF\u95EE\u901F\u5EA6\u3002</p><div class="language-cmake ext-cmake line-numbers-mode"><pre class="language-cmake"><code>\u8BED\u6CD5\uFF1Aproxy_cache zone | off ; # zone \u662F\u5171\u4EAB\u5185\u5B58\u7684\u540D\u79F0

\u9ED8\u8BA4\u503C\uFF1Aproxy_cache off;

\u4E0A\u4E0B\u6587\uFF1Ahttp\u3001server\u3001location
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="proxy-cache-path" tabindex="-1"><a class="header-anchor" href="#proxy-cache-path" aria-hidden="true">#</a> proxy_cache_path</h3><p>\u8BBE\u7F6E\u7F13\u5B58\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>\u8BED\u6CD5\uFF1Aproxy_cache_pathpath[level=levels] ...\u53EF\u9009\u53C2\u6570\u7701\u7565\uFF0C\u4E0B\u9762\u4F1A\u8BE6\u7EC6\u5217\u4E3E

\u9ED8\u8BA4\u503C\uFF1Aproxy_cache_pathoff

\u4E0A\u4E0B\u6587\uFF1Ahttp
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u53C2\u6570\u542B\u4E49\uFF1A</p><ul><li><code>path</code> \u7F13\u5B58\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84\uFF1B</li><li><code>level path</code> \u7684\u76EE\u5F55\u5C42\u7EA7\uFF1B</li><li><code>keys_zone</code> \u8BBE\u7F6E\u5171\u4EAB\u5185\u5B58\uFF1B</li><li><code>inactive</code> \u5728\u6307\u5B9A\u65F6\u95F4\u5185\u6CA1\u6709\u88AB\u8BBF\u95EE\uFF0C\u7F13\u5B58\u4F1A\u88AB\u6E05\u7406\uFF0C\u9ED8\u8BA410\u5206\u949F\uFF1B</li></ul><h3 id="proxy-cache-key" tabindex="-1"><a class="header-anchor" href="#proxy-cache-key" aria-hidden="true">#</a> proxy_cache_key</h3><p>\u8BBE\u7F6E\u7F13\u5B58\u6587\u4EF6\u7684 <code>key</code> \u3002</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>\u8BED\u6CD5\uFF1Aproxy_cache_key

\u9ED8\u8BA4\u503C\uFF1Aproxy_cache_key $scheme$proxy_host$request_uri;

\u4E0A\u4E0B\u6587\uFF1Ahttp\u3001server\u3001location
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="proxy-cache-valid" tabindex="-1"><a class="header-anchor" href="#proxy-cache-valid" aria-hidden="true">#</a> proxy_cache_valid</h3><p>\u914D\u7F6E\u4EC0\u4E48\u72B6\u6001\u7801\u53EF\u4EE5\u88AB\u7F13\u5B58\uFF0C\u4EE5\u53CA\u7F13\u5B58\u65F6\u957F\u3002</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>\u8BED\u6CD5\uFF1Aproxy_cache_valid [code...] time;

\u4E0A\u4E0B\u6587\uFF1Ahttp\u3001server\u3001location

\u914D\u7F6E\u793A\u4F8B\uFF1Aproxy_cache_valid 2003042m;; # \u8BF4\u660E\u5BF9\u4E8E\u72B6\u6001\u4E3A200\u548C304\u7684\u7F13\u5B58\u6587\u4EF6\u7684\u7F13\u5B58\u65F6\u95F4\u662F2\u5206\u949F
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="proxy-no-cache" tabindex="-1"><a class="header-anchor" href="#proxy-no-cache" aria-hidden="true">#</a> proxy_no_cache</h3><p>\u5B9A\u4E49\u76F8\u5E94\u4FDD\u5B58\u5230\u7F13\u5B58\u7684\u6761\u4EF6\uFF0C\u5982\u679C\u5B57\u7B26\u4E32\u53C2\u6570\u7684\u81F3\u5C11\u4E00\u4E2A\u503C\u4E0D\u4E3A\u7A7A\u4E14\u4E0D\u7B49\u4E8E\u201C 0\u201D\uFF0C\u5219\u5C06\u4E0D\u4FDD\u5B58\u8BE5\u54CD\u5E94\u5230\u7F13\u5B58\u3002</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>\u8BED\u6CD5\uFF1Aproxy_no_cache string;

\u4E0A\u4E0B\u6587\uFF1Ahttp\u3001server\u3001location

\u793A\u4F8B\uFF1Aproxy_no_cache $http_pragma    $http_authorization;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="proxy-cache-bypass" tabindex="-1"><a class="header-anchor" href="#proxy-cache-bypass" aria-hidden="true">#</a> proxy_cache_bypass</h3><p>\u5B9A\u4E49\u6761\u4EF6\uFF0C\u5728\u8BE5\u6761\u4EF6\u4E0B\u5C06\u4E0D\u4F1A\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u54CD\u5E94\u3002</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>\u8BED\u6CD5\uFF1Aproxy_cache_bypass string;

\u4E0A\u4E0B\u6587\uFF1Ahttp\u3001server\u3001location

\u793A\u4F8B\uFF1Aproxy_cache_bypass $http_pragma    $http_authorization;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="upstream-cache-status-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#upstream-cache-status-\u53D8\u91CF" aria-hidden="true">#</a> upstream_cache_status \u53D8\u91CF</h3><p>\u5B83\u5B58\u50A8\u4E86\u7F13\u5B58\u662F\u5426\u547D\u4E2D\u7684\u4FE1\u606F\uFF0C\u4F1A\u8BBE\u7F6E\u5728\u54CD\u5E94\u5934\u4FE1\u606F\u4E2D\uFF0C\u5728\u8C03\u8BD5\u4E2D\u975E\u5E38\u6709\u7528\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>MISS: \u672A\u547D\u4E2D\u7F13\u5B58
HIT\uFF1A \u547D\u4E2D\u7F13\u5B58
EXPIRED: \u7F13\u5B58\u8FC7\u671F
STALE: \u547D\u4E2D\u4E86\u9648\u65E7\u7F13\u5B58
REVALIDDATED: Nginx\u9A8C\u8BC1\u9648\u65E7\u7F13\u5B58\u4F9D\u7136\u6709\u6548
UPDATING: \u5185\u5BB9\u9648\u65E7\uFF0C\u4F46\u6B63\u5728\u66F4\u65B0
BYPASS: X\u54CD\u5E94\u4ECE\u539F\u59CB\u670D\u52A1\u5668\u83B7\u53D6
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u914D\u7F6E\u5B9E\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5B9E\u4F8B-1" aria-hidden="true">#</a> \u914D\u7F6E\u5B9E\u4F8B</h3><p>\u6211\u4EEC\u628A <code>121.42.11.34</code> \u670D\u52A1\u5668\u4F5C\u4E3A\u4E0A\u6E38\u670D\u52A1\u5668\uFF0C\u505A\u5982\u4E0B\u914D\u7F6E\uFF08 <code>/etc/nginx/conf.d/cache.conf</code> \uFF09\uFF1A</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>server {
  listen 1010;
  root /usr/share/nginx/html/1010;
  location / {
   index index.html;
  }
}

server {
  listen 1020;
  root /usr/share/nginx/html/1020;
  location / {
   index index.html;
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u628A <code>121.5.180.193</code> \u670D\u52A1\u5668\u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u505A\u5982\u4E0B\u914D\u7F6E\uFF08 <code>/etc/nginx/conf.d/cache.conf</code> \uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>proxy_cache_path /etc/nginx/cache_temp levels=2:2 keys_zone=cache_zone:30m max_size=2g inactive=60m use_temp_path=off;

upstream cache_server{
  server 121.42.11.34:1010;
  server 121.42.11.34:1020;
}

server {
  listen 80;
  server_name cache.lion.club;
  location / {
    proxy_cache cache_zone; # \u8BBE\u7F6E\u7F13\u5B58\u5185\u5B58\uFF0C\u4E0A\u9762\u914D\u7F6E\u4E2D\u5DF2\u7ECF\u5B9A\u4E49\u597D\u7684
    proxy_cache_valid 200 5m; # \u7F13\u5B58\u72B6\u6001\u4E3A200\u7684\u8BF7\u6C42\uFF0C\u7F13\u5B58\u65F6\u957F\u4E3A5\u5206\u949F
    proxy_cache_key $request_uri; # \u7F13\u5B58\u6587\u4EF6\u7684key\u4E3A\u8BF7\u6C42\u7684URI
    add_header Nginx-Cache-Status $upstream_cache_status # \u628A\u7F13\u5B58\u72B6\u6001\u8BBE\u7F6E\u4E3A\u5934\u90E8\u4FE1\u606F\uFF0C\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF
    proxy_pass http://cache_server; # \u4EE3\u7406\u8F6C\u53D1
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u7F13\u5B58\u5C31\u662F\u8FD9\u6837\u914D\u7F6E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 <code>/etc/nginx/cache_temp</code> \u8DEF\u5F84\u4E0B\u627E\u5230\u76F8\u5E94\u7684\u7F13\u5B58\u6587\u4EF6\u3002</p><p><strong>\u5BF9\u4E8E\u4E00\u4E9B\u5B9E\u65F6\u6027\u8981\u6C42\u975E\u5E38\u9AD8\u7684\u9875\u9762\u6216\u6570\u636E\u6765\u8BF4\uFF0C\u5C31\u4E0D\u5E94\u8BE5\u53BB\u8BBE\u7F6E\u7F13\u5B58\uFF0C\u4E0B\u9762\u6765\u770B\u770B\u5982\u4F55\u914D\u7F6E\u4E0D\u7F13\u5B58\u7684\u5185\u5BB9\u3002</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>...

server {
  listen 80;
  server_name cache.lion.club;
  # URI \u4E2D\u540E\u7F00\u4E3A .txt \u6216 .text \u7684\u8BBE\u7F6E\u53D8\u91CF\u503C\u4E3A &quot;no cache&quot;
  if ($request_uri ~ \\.(txt|text)$) {
   set $cache_name &quot;no cache&quot;
  }
  
  location / {
    proxy_no_cache $cache_name; # \u5224\u65AD\u8BE5\u53D8\u91CF\u662F\u5426\u6709\u503C\uFF0C\u5982\u679C\u6709\u503C\u5219\u4E0D\u8FDB\u884C\u7F13\u5B58\uFF0C\u5982\u679C\u6CA1\u6709\u503C\u5219\u8FDB\u884C\u7F13\u5B58
    proxy_cache cache_zone; # \u8BBE\u7F6E\u7F13\u5B58\u5185\u5B58
    proxy_cache_valid 200 5m; # \u7F13\u5B58\u72B6\u6001\u4E3A200\u7684\u8BF7\u6C42\uFF0C\u7F13\u5B58\u65F6\u957F\u4E3A5\u5206\u949F
    proxy_cache_key $request_uri; # \u7F13\u5B58\u6587\u4EF6\u7684key\u4E3A\u8BF7\u6C42\u7684URI
    add_header Nginx-Cache-Status $upstream_cache_status # \u628A\u7F13\u5B58\u72B6\u6001\u8BBE\u7F6E\u4E3A\u5934\u90E8\u4FE1\u606F\uFF0C\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF
    proxy_pass http://cache_server; # \u4EE3\u7406\u8F6C\u53D1
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> HTTPS</h2><p>\u5728\u5B66\u4E60\u5982\u4F55\u914D\u7F6E <code>HTTPS</code> \u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u7B80\u5355\u56DE\u987E\u4E0B <code>HTTPS</code> \u7684\u5DE5\u4F5C\u6D41\u7A0B\u662F\u600E\u4E48\u6837\u7684\uFF1F\u5B83\u662F\u5982\u4F55\u8FDB\u884C\u52A0\u5BC6\u4FDD\u8BC1\u5B89\u5168\u7684\uFF1F</p><h3 id="https-\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#https-\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> HTTPS \u5DE5\u4F5C\u6D41\u7A0B</h3><ol><li>\u5BA2\u6237\u7AEF\uFF08\u6D4F\u89C8\u5668\uFF09\u8BBF\u95EE <code>https://www.baidu.com</code> \u767E\u5EA6\u7F51\u7AD9\uFF1B</li><li>\u767E\u5EA6\u670D\u52A1\u5668\u8FD4\u56DE <code>HTTPS</code> \u4F7F\u7528\u7684 <code>CA</code> \u8BC1\u4E66\uFF1B</li><li>\u6D4F\u89C8\u5668\u9A8C\u8BC1 <code>CA</code> \u8BC1\u4E66\u662F\u5426\u4E3A\u5408\u6CD5\u8BC1\u4E66\uFF1B</li><li>\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u8BC1\u4E66\u5408\u6CD5\uFF0C\u751F\u6210\u4E00\u4E32\u968F\u673A\u6570\u5E76\u4F7F\u7528\u516C\u94A5\uFF08\u8BC1\u4E66\u4E2D\u63D0\u4F9B\u7684\uFF09\u8FDB\u884C\u52A0\u5BC6\uFF1B</li><li>\u53D1\u9001\u516C\u94A5\u52A0\u5BC6\u540E\u7684\u968F\u673A\u6570\u7ED9\u767E\u5EA6\u670D\u52A1\u5668\uFF1B</li><li>\u767E\u5EA6\u670D\u52A1\u5668\u62FF\u5230\u5BC6\u6587\uFF0C\u901A\u8FC7\u79C1\u94A5\u8FDB\u884C\u89E3\u5BC6\uFF0C\u83B7\u53D6\u5230\u968F\u673A\u6570\uFF08\u516C\u94A5\u52A0\u5BC6\uFF0C\u79C1\u94A5\u89E3\u5BC6\uFF0C\u53CD\u4E4B\u4E5F\u53EF\u4EE5\uFF09\uFF1B</li><li>\u767E\u5EA6\u670D\u52A1\u5668\u628A\u8981\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528\u968F\u673A\u6570\u8FDB\u884C\u52A0\u5BC6\u540E\u4F20\u8F93\u7ED9\u6D4F\u89C8\u5668\uFF1B</li><li>\u6B64\u65F6\u6D4F\u89C8\u5668\u53EF\u4EE5\u4F7F\u7528\u968F\u673A\u6570\u8FDB\u884C\u89E3\u5BC6\uFF0C\u83B7\u53D6\u5230\u670D\u52A1\u5668\u7684\u771F\u5B9E\u4F20\u8F93\u5185\u5BB9\uFF1B</li></ol><p>\u8FD9\u5C31\u662F <code>HTTPS</code> \u7684\u57FA\u672C\u8FD0\u4F5C\u539F\u7406\uFF0C\u4F7F\u7528\u5BF9\u79F0\u52A0\u5BC6\u548C\u975E\u5BF9\u79F0\u673A\u5BC6\u914D\u5408\u4F7F\u7528\uFF0C\u4FDD\u8BC1\u4F20\u8F93\u5185\u5BB9\u7684\u5B89\u5168\u6027\u3002</p><p>\u5173\u4E8EHTTPS\u66F4\u591A\u77E5\u8BC6\uFF0C\u53EF\u4EE5\u67E5\u770B\u4F5C\u8005\u7684\u53E6\u5916\u4E00\u7BC7\u6587\u7AE0\u300A\u5B66\u4E60 HTTP \u534F\u8BAE\u300B\u3002</p><h3 id="\u914D\u7F6E\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8BC1\u4E66" aria-hidden="true">#</a> \u914D\u7F6E\u8BC1\u4E66</h3><p>\u4E0B\u8F7D\u8BC1\u4E66\u7684\u538B\u7F29\u6587\u4EF6\uFF0C\u91CC\u9762\u6709\u4E2A <code>Nginx</code> \u6587\u4EF6\u5939\uFF0C\u628A <code>xxx.crt</code> \u548C <code>xxx.key</code> \u6587\u4EF6\u62F7\u8D1D\u5230\u670D\u52A1\u5668\u76EE\u5F55\uFF0C\u518D\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server {
  listen 443 ssl http2 default_server;   # SSL \u8BBF\u95EE\u7AEF\u53E3\u53F7\u4E3A 443
  server_name lion.club;         # \u586B\u5199\u7ED1\u5B9A\u8BC1\u4E66\u7684\u57DF\u540D(\u6211\u8FD9\u91CC\u662F\u968F\u4FBF\u5199\u7684)
  ssl_certificate /etc/nginx/https/lion.club_bundle.crt;   # \u8BC1\u4E66\u5730\u5740
  ssl_certificate_key /etc/nginx/https/lion.club.key;      # \u79C1\u94A5\u5730\u5740
  ssl_session_timeout 10m;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # \u652F\u6301ssl\u534F\u8BAE\u7248\u672C\uFF0C\u9ED8\u8BA4\u4E3A\u540E\u4E09\u4E2A\uFF0C\u4E3B\u6D41\u7248\u672C\u662F[TLSv1.2]
 
  location / {
    root         /usr/share/nginx/html;
    index        index.html index.htm;
  }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5982\u6B64\u914D\u7F6E\u540E\u5C31\u80FD\u6B63\u5E38\u8BBF\u95EE <code>HTTPS</code> \u7248\u7684\u7F51\u7AD9\u4E86\u3002</p><h2 id="\u914D\u7F6E\u8DE8\u57DF-cors" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8DE8\u57DF-cors" aria-hidden="true">#</a> \u914D\u7F6E\u8DE8\u57DF CORS</h2><p>\u5148\u7B80\u5355\u56DE\u987E\u4E0B\u8DE8\u57DF\u7A76\u7ADF\u662F\u600E\u4E48\u56DE\u4E8B\u3002</p><h3 id="\u8DE8\u57DF\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u8DE8\u57DF\u7684\u5B9A\u4E49</h3><p>\u540C\u6E90\u7B56\u7565\u9650\u5236\u4E86\u4ECE\u540C\u4E00\u4E2A\u6E90\u52A0\u8F7D\u7684\u6587\u6863\u6216\u811A\u672C\u5982\u4F55\u4E0E\u6765\u81EA\u53E6\u4E00\u4E2A\u6E90\u7684\u8D44\u6E90\u8FDB\u884C\u4EA4\u4E92\u3002\u8FD9\u662F\u4E00\u4E2A\u7528\u4E8E\u9694\u79BB\u6F5C\u5728\u6076\u610F\u6587\u4EF6\u7684\u91CD\u8981\u5B89\u5168\u673A\u5236\u3002\u901A\u5E38\u4E0D\u5141\u8BB8\u4E0D\u540C\u6E90\u95F4\u7684\u8BFB\u64CD\u4F5C\u3002</p><h3 id="\u540C\u6E90\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u540C\u6E90\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u540C\u6E90\u7684\u5B9A\u4E49</h3><p>\u5982\u679C\u4E24\u4E2A\u9875\u9762\u7684\u534F\u8BAE\uFF0C\u7AEF\u53E3\uFF08\u5982\u679C\u6709\u6307\u5B9A\uFF09\u548C\u57DF\u540D\u90FD\u76F8\u540C\uFF0C\u5219\u4E24\u4E2A\u9875\u9762\u5177\u6709\u76F8\u540C\u7684\u6E90\u3002</p><p>\u4E0B\u9762\u7ED9\u51FA\u4E86\u4E0E URL <code>http://store.company.com/dir/page.html</code> \u7684\u6E90\u8FDB\u884C\u5BF9\u6BD4\u7684\u793A\u4F8B:</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>http://store.company.com/dir2/other.html \u540C\u6E90
https://store.company.com/secure.html \u4E0D\u540C\u6E90\uFF0C\u534F\u8BAE\u4E0D\u540C
http://store.company.com:81/dir/etc.html \u4E0D\u540C\u6E90\uFF0C\u7AEF\u53E3\u4E0D\u540C
http://news.company.com/dir/other.html \u4E0D\u540C\u6E90\uFF0C\u4E3B\u673A\u4E0D\u540C
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0D\u540C\u6E90\u4F1A\u6709\u5982\u4E0B\u9650\u5236\uFF1A</p><ul><li><code>Web</code> \u6570\u636E\u5C42\u9762\uFF0C\u540C\u6E90\u7B56\u7565\u9650\u5236\u4E86\u4E0D\u540C\u6E90\u7684\u7AD9\u70B9\u8BFB\u53D6\u5F53\u524D\u7AD9\u70B9\u7684 <code>Cookie</code> \u3001 <code>IndexDB</code> \u3001 <code>LocalStorage</code> \u7B49\u6570\u636E\u3002</li><li><code>DOM</code> \u5C42\u9762\uFF0C\u540C\u6E90\u7B56\u7565\u9650\u5236\u4E86\u6765\u81EA\u4E0D\u540C\u6E90\u7684 <code>JavaScript</code> \u811A\u672C\u5BF9\u5F53\u524D <code>DOM</code> \u5BF9\u8C61\u8BFB\u548C\u5199\u7684\u64CD\u4F5C\u3002</li><li>\u7F51\u7EDC\u5C42\u9762\uFF0C\u540C\u6E90\u7B56\u7565\u9650\u5236\u4E86\u901A\u8FC7 <code>XMLHttpRequest</code> \u7B49\u65B9\u5F0F\u5C06\u7AD9\u70B9\u7684\u6570\u636E\u53D1\u9001\u7ED9\u4E0D\u540C\u6E90\u7684\u7AD9\u70B9\u3002</li></ul><h3 id="nginx-\u89E3\u51B3\u8DE8\u57DF\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#nginx-\u89E3\u51B3\u8DE8\u57DF\u7684\u539F\u7406" aria-hidden="true">#</a> Nginx \u89E3\u51B3\u8DE8\u57DF\u7684\u539F\u7406</h3><p>\u4F8B\u5982\uFF1A</p><ul><li>\u524D\u7AEF <code>server</code> \u7684\u57DF\u540D\u4E3A\uFF1A<code>fe.server.com</code></li><li>\u540E\u7AEF\u670D\u52A1\u7684\u57DF\u540D\u4E3A\uFF1A<code>dev.server.com</code></li></ul><p>\u73B0\u5728\u6211\u5728 <code>fe.server.com</code> \u5BF9 <code>dev.server.com</code> \u53D1\u8D77\u8BF7\u6C42\u4E00\u5B9A\u4F1A\u51FA\u73B0\u8DE8\u57DF\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u53EA\u9700\u8981\u542F\u52A8\u4E00\u4E2A <code>Nginx</code> \u670D\u52A1\u5668\uFF0C\u5C06 <code>server_name</code> \u8BBE\u7F6E\u4E3A <code>fe.server.com</code> \u7136\u540E\u8BBE\u7F6E\u76F8\u5E94\u7684 <code>location</code> \u4EE5\u62E6\u622A\u524D\u7AEF\u9700\u8981\u8DE8\u57DF\u7684\u8BF7\u6C42\uFF0C\u6700\u540E\u5C06\u8BF7\u6C42\u4EE3\u7406\u56DE <code>dev.server.com</code> \u3002\u5982\u4E0B\u9762\u7684\u914D\u7F6E\uFF1A</p><div class="language-perl ext-perl line-numbers-mode"><pre class="language-perl"><code>server {
 listen      80;
 server_name  fe.server.com;
 location / {
  proxy_pass dev.server.com;
 }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u6837\u53EF\u4EE5\u5B8C\u7F8E\u7ED5\u8FC7\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\uFF1A<code>fe.server.com</code> \u8BBF\u95EE <code>Nginx</code> \u7684 <code>fe.server.com</code> \u5C5E\u4E8E\u540C\u6E90\u8BBF\u95EE\uFF0C\u800C <code>Nginx</code> \u5BF9\u670D\u52A1\u7AEF\u8F6C\u53D1\u7684\u8BF7\u6C42\u4E0D\u4F1A\u89E6\u53D1\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u3002</p><h2 id="\u914D\u7F6E\u5F00\u542F-gzip-\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5F00\u542F-gzip-\u538B\u7F29" aria-hidden="true">#</a> \u914D\u7F6E\u5F00\u542F gzip \u538B\u7F29</h2><p><code>GZIP</code> \u662F\u89C4\u5B9A\u7684\u4E09\u79CD\u6807\u51C6 <code>HTTP</code> \u538B\u7F29\u683C\u5F0F\u4E4B\u4E00\u3002\u76EE\u524D\u7EDD\u5927\u591A\u6570\u7684\u7F51\u7AD9\u90FD\u5728\u4F7F\u7528 <code>GZIP</code> \u4F20\u8F93 <code>HTML</code> \u3001<code>CSS</code> \u3001 <code>JavaScript</code> \u7B49\u8D44\u6E90\u6587\u4EF6\u3002</p><p>\u5BF9\u4E8E\u6587\u672C\u6587\u4EF6\uFF0C <code>GZiP</code> \u7684\u6548\u679C\u975E\u5E38\u660E\u663E\uFF0C\u5F00\u542F\u540E\u4F20\u8F93\u6240\u9700\u6D41\u91CF\u5927\u7EA6\u4F1A\u964D\u81F3 <code>1/4~1/3</code> \u3002</p><p>\u5E76\u4E0D\u662F\u6BCF\u4E2A\u6D4F\u89C8\u5668\u90FD\u652F\u6301 <code>gzip</code> \u7684\uFF0C\u5982\u4F55\u77E5\u9053\u5BA2\u6237\u7AEF\u662F\u5426\u652F\u6301 <code>gzip</code> \u5462\uFF0C\u8BF7\u6C42\u5934\u4E2D\u7684 <code>Accept-Encoding</code> \u6765\u6807\u8BC6\u5BF9\u538B\u7F29\u7684\u652F\u6301\u3002<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/DC5A4809DE3FB73D3EB476CE3DF4812B.jpg" alt="img">\u542F\u7528 <code>gzip</code> \u540C\u65F6\u9700\u8981\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7684\u652F\u6301\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u652F\u6301 <code>gzip</code> \u7684\u89E3\u6790\uFF0C\u90A3\u4E48\u53EA\u8981\u670D\u52A1\u7AEF\u80FD\u591F\u8FD4\u56DE <code>gzip</code> \u7684\u6587\u4EF6\u5C31\u53EF\u4EE5\u542F\u7528 <code>gzip</code> \u4E86,\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>Nginx</code> \u7684\u914D\u7F6E\u6765\u8BA9\u670D\u52A1\u7AEF\u652F\u6301 <code>gzip</code> \u3002\u4E0B\u9762\u7684 <code>respone</code> \u4E2D <code>content-encoding:gzip</code> \uFF0C\u6307\u670D\u52A1\u7AEF\u5F00\u542F\u4E86 <code>gzip</code> \u7684\u538B\u7F29\u65B9\u5F0F\u3002<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/18E25498B234ACA57C02FE349368ED22.jpg" alt="img">\u5728 <code>/etc/nginx/conf.d/</code> \u6587\u4EF6\u5939\u4E2D\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6 <code>gzip.conf</code> \uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># # \u9ED8\u8BA4off\uFF0C\u662F\u5426\u5F00\u542Fgzip
gzip on; 
# \u8981\u91C7\u7528 gzip \u538B\u7F29\u7684 MIME \u6587\u4EF6\u7C7B\u578B\uFF0C\u5176\u4E2D text/html \u88AB\u7CFB\u7EDF\u5F3A\u5236\u542F\u7528\uFF1B
gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

# ---- \u4EE5\u4E0A\u4E24\u4E2A\u53C2\u6570\u5F00\u542F\u5C31\u53EF\u4EE5\u652F\u6301Gzip\u538B\u7F29\u4E86 ---- #

# \u9ED8\u8BA4 off\uFF0C\u8BE5\u6A21\u5757\u542F\u7528\u540E\uFF0CNginx \u9996\u5148\u68C0\u67E5\u662F\u5426\u5B58\u5728\u8BF7\u6C42\u9759\u6001\u6587\u4EF6\u7684 gz \u7ED3\u5C3E\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u6709\u5219\u76F4\u63A5\u8FD4\u56DE\u8BE5 .gz \u6587\u4EF6\u5185\u5BB9\uFF1B
gzip_static on;

# \u9ED8\u8BA4 off\uFF0Cnginx\u505A\u4E3A\u53CD\u5411\u4EE3\u7406\u65F6\u542F\u7528\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u542F\u7528\u6216\u7981\u7528\u4ECE\u4EE3\u7406\u670D\u52A1\u5668\u4E0A\u6536\u5230\u76F8\u5E94\u5185\u5BB9 gzip \u538B\u7F29\uFF1B
gzip_proxied any;

# \u7528\u4E8E\u5728\u54CD\u5E94\u6D88\u606F\u5934\u4E2D\u6DFB\u52A0 Vary\uFF1AAccept-Encoding\uFF0C\u4F7F\u4EE3\u7406\u670D\u52A1\u5668\u6839\u636E\u8BF7\u6C42\u5934\u4E2D\u7684 Accept-Encoding \u8BC6\u522B\u662F\u5426\u542F\u7528 gzip \u538B\u7F29\uFF1B
gzip_vary on;

# gzip \u538B\u7F29\u6BD4\uFF0C\u538B\u7F29\u7EA7\u522B\u662F 1-9\uFF0C1 \u538B\u7F29\u7EA7\u522B\u6700\u4F4E\uFF0C9 \u6700\u9AD8\uFF0C\u7EA7\u522B\u8D8A\u9AD8\u538B\u7F29\u7387\u8D8A\u5927\uFF0C\u538B\u7F29\u65F6\u95F4\u8D8A\u957F\uFF0C\u5EFA\u8BAE 4-6\uFF1B
gzip_comp_level 6;

# \u83B7\u53D6\u591A\u5C11\u5185\u5B58\u7528\u4E8E\u7F13\u5B58\u538B\u7F29\u7ED3\u679C\uFF0C16 8k \u8868\u793A\u4EE5 8k*16 \u4E3A\u5355\u4F4D\u83B7\u5F97\uFF1B
gzip_buffers 16 8k;

# \u5141\u8BB8\u538B\u7F29\u7684\u9875\u9762\u6700\u5C0F\u5B57\u8282\u6570\uFF0C\u9875\u9762\u5B57\u8282\u6570\u4ECEheader\u5934\u4E2D\u7684 Content-Length \u4E2D\u8FDB\u884C\u83B7\u53D6\u3002\u9ED8\u8BA4\u503C\u662F 0\uFF0C\u4E0D\u7BA1\u9875\u9762\u591A\u5927\u90FD\u538B\u7F29\u3002\u5EFA\u8BAE\u8BBE\u7F6E\u6210\u5927\u4E8E 1k \u7684\u5B57\u8282\u6570\uFF0C\u5C0F\u4E8E 1k \u53EF\u80FD\u4F1A\u8D8A\u538B\u8D8A\u5927\uFF1B
# gzip_min_length 1k;

# \u9ED8\u8BA4 1.1\uFF0C\u542F\u7528 gzip \u6240\u9700\u7684 HTTP \u6700\u4F4E\u7248\u672C\uFF1B
gzip_http_version 1.1;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u5176\u5B9E\u4E5F\u53EF\u4EE5\u901A\u8FC7\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\u4F8B\u5982 <code>webpack</code> \u3001<code>rollup</code> \u7B49\u5728\u6253\u751F\u4EA7\u5305\u65F6\u5C31\u505A\u597D <code>Gzip</code> \u538B\u7F29\uFF0C\u7136\u540E\u653E\u5230 <code>Nginx</code> \u670D\u52A1\u5668\u4E2D\uFF0C\u8FD9\u6837\u53EF\u4EE5\u51CF\u5C11\u670D\u52A1\u5668\u7684\u5F00\u9500\uFF0C\u52A0\u5FEB\u8BBF\u95EE\u901F\u5EA6\u3002</p><p>\u5173\u4E8E <code>Nginx</code> \u7684\u5B9E\u9645\u5E94\u7528\u5C31\u5B66\u4E60\u5230\u8FD9\u91CC\uFF0C\u76F8\u4FE1\u901A\u8FC7\u638C\u63E1\u4E86 <code>Nginx</code> \u6838\u5FC3\u914D\u7F6E\u4EE5\u53CA\u5B9E\u6218\u914D\u7F6E\uFF0C\u4E4B\u540E\u518D\u9047\u5230\u4EC0\u4E48\u9700\u6C42\uFF0C\u6211\u4EEC\u4E5F\u80FD\u8F7B\u677E\u5E94\u5BF9\u3002\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u518D\u6DF1\u5165\u4E00\u70B9\u5B66\u4E60\u4E0B <code>Nginx</code> \u7684\u67B6\u6784\u3002</p><h1 id="nginx-\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#nginx-\u67B6\u6784" aria-hidden="true">#</a> Nginx \u67B6\u6784</h1><h2 id="\u8FDB\u7A0B\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u7ED3\u6784" aria-hidden="true">#</a> \u8FDB\u7A0B\u7ED3\u6784</h2><p>\u591A\u8FDB\u7A0B\u7ED3\u6784 <code>Nginx</code> \u7684\u8FDB\u7A0B\u6A21\u578B\u56FE\uFF1A</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/C3D7B78850A1EEF46451C9A71BA5B460.jpg" alt="img"></p><p>\u591A\u8FDB\u7A0B\u4E2D\u7684 <code>Nginx</code> \u8FDB\u7A0B\u67B6\u6784\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u4F1A\u6709\u4E00\u4E2A\u7236\u8FDB\u7A0B\uFF08 <code>Master Process</code> \uFF09\uFF0C\u5B83\u4F1A\u6709\u5F88\u591A\u5B50\u8FDB\u7A0B\uFF08 <code>Child Processes</code> \uFF09\u3002</p><ul><li><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>Master Process
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7528\u6765\u7BA1\u7406\u5B50\u8FDB\u7A0B\u7684\uFF0C\u5176\u672C\u8EAB\u5E76\u4E0D\u771F\u6B63\u5904\u7406\u7528\u6237\u8BF7\u6C42\u3002</p></li><li><ul><li>\u67D0\u4E2A\u5B50\u8FDB\u7A0B <code>down</code> \u6389\u7684\u8BDD\uFF0C\u5B83\u4F1A\u5411 <code>Master</code> \u8FDB\u7A0B\u53D1\u9001\u4E00\u6761\u6D88\u606F\uFF0C\u8868\u660E\u81EA\u5DF1\u4E0D\u53EF\u7528\u4E86\uFF0C\u6B64\u65F6 <code>Master</code> \u8FDB\u7A0B\u4F1A\u53BB\u65B0\u8D77\u4E00\u4E2A\u5B50\u8FDB\u7A0B\u3002</li><li>\u67D0\u4E2A\u914D\u7F6E\u6587\u4EF6\u88AB\u4FEE\u6539\u4E86 <code>Master</code> \u8FDB\u7A0B\u4F1A\u53BB\u901A\u77E5 <code>work</code> \u8FDB\u7A0B\u83B7\u53D6\u65B0\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u8FD9\u4E5F\u5C31\u662F\u6211\u4EEC\u6240\u8BF4\u7684\u70ED\u90E8\u7F72\u3002</li></ul></li><li><p>\u5B50\u8FDB\u7A0B\u95F4\u662F\u901A\u8FC7\u5171\u4EAB\u5185\u5B58\u7684\u65B9\u5F0F\u8FDB\u884C\u901A\u4FE1\u7684\u3002</p></li></ul><h2 id="\u914D\u7F6E\u6587\u4EF6\u91CD\u8F7D\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u91CD\u8F7D\u539F\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u91CD\u8F7D\u539F\u7406</h2><p><code>reload</code> \u91CD\u8F7D\u914D\u7F6E\u6587\u4EF6\u7684\u6D41\u7A0B\uFF1A</p><ol><li>\u5411 <code>master</code> \u8FDB\u7A0B\u53D1\u9001 <code>HUP</code> \u4FE1\u53F7\uFF08 <code>reload</code> \u547D\u4EE4\uFF09\uFF1B</li><li><code>master</code> \u8FDB\u7A0B\u68C0\u67E5\u914D\u7F6E\u8BED\u6CD5\u662F\u5426\u6B63\u786E\uFF1B</li><li><code>master</code> \u8FDB\u7A0B\u6253\u5F00\u76D1\u542C\u7AEF\u53E3\uFF1B</li><li><code>master</code> \u8FDB\u7A0B\u4F7F\u7528\u65B0\u7684\u914D\u7F6E\u6587\u4EF6\u542F\u52A8\u65B0\u7684 <code>worker</code> \u5B50\u8FDB\u7A0B\uFF1B</li><li><code>master</code> \u8FDB\u7A0B\u5411\u8001\u7684 <code>worker</code> \u5B50\u8FDB\u7A0B\u53D1\u9001 <code>QUIT</code> \u4FE1\u53F7\uFF1B</li><li>\u8001\u7684 <code>worker</code> \u8FDB\u7A0B\u5173\u95ED\u76D1\u542C\u53E5\u67C4\uFF0C\u5904\u7406\u5B8C\u5F53\u524D\u8FDE\u63A5\u540E\u5173\u95ED\u8FDB\u7A0B\uFF1B</li><li>\u6574\u4E2A\u8FC7\u7A0B <code>Nginx</code> \u59CB\u7EC8\u5904\u4E8E\u5E73\u7A33\u8FD0\u884C\u4E2D\uFF0C\u5B9E\u73B0\u4E86\u5E73\u6ED1\u5347\u7EA7\uFF0C\u7528\u6237\u65E0\u611F\u77E5\uFF1B</li></ol><h2 id="nginx-\u6A21\u5757\u5316\u7BA1\u7406\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#nginx-\u6A21\u5757\u5316\u7BA1\u7406\u673A\u5236" aria-hidden="true">#</a> Nginx \u6A21\u5757\u5316\u7BA1\u7406\u673A\u5236</h2><p><code>Nginx</code> \u7684\u5185\u90E8\u7ED3\u6784\u662F\u7531\u6838\u5FC3\u90E8\u5206\u548C\u4E00\u7CFB\u5217\u7684\u529F\u80FD\u6A21\u5757\u6240\u7EC4\u6210\u3002\u8FD9\u6837\u5212\u5206\u662F\u4E3A\u4E86\u4F7F\u5F97\u6BCF\u4E2A\u6A21\u5757\u7684\u529F\u80FD\u76F8\u5BF9\u7B80\u5355\uFF0C\u4FBF\u4E8E\u5F00\u53D1\uFF0C\u540C\u65F6\u4E5F\u4FBF\u4E8E\u5BF9\u7CFB\u7EDF\u8FDB\u884C\u529F\u80FD\u6269\u5C55\u3002<code>Nginx</code> \u7684\u6A21\u5757\u662F\u4E92\u76F8\u72EC\u7ACB\u7684,\u4F4E\u8026\u5408\u9AD8\u5185\u805A\u3002<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/B69DA539374F988BE5A69DB55FD4B77C.jpg" alt="img"></p>`,329);function r(l,i){return a}var d=n(s,[["render",r],["__file","Nginx\u4E07\u5B57\u603B\u7ED3.html.vue"]]);export{d as default};
