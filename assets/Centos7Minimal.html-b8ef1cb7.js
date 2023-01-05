const e=JSON.parse('{"key":"v-490af90f","path":"/linux/Centos7Minimal.html","title":"Centos7 Minimal 安装后初始化配置","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Centos7 Minimal 安装后初始化配置","description":"Centos7 Minimal 安装后初始化配置","date":"2022-01-28T00:00:00.000Z","category":["Linux"],"tag":["Linux"],"article":true,"timeline":true,"icon":"type","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/Centos7Minimal.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Centos7 Minimal 安装后初始化配置"}],["meta",{"property":"og:description","content":"Centos7 Minimal 安装后初始化配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-20T12:43:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2022-01-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-20T12:43:54.000Z"}]]},"headers":[{"level":2,"title":"1:更新yum","slug":"_1-更新yum","link":"#_1-更新yum","children":[]},{"level":2,"title":"2: 安装基础命令","slug":"_2-安装基础命令","link":"#_2-安装基础命令","children":[]},{"level":2,"title":"3: 设置IP","slug":"_3-设置ip","link":"#_3-设置ip","children":[{"level":3,"title":"3.1 分配随机IP","slug":"_3-1-分配随机ip","link":"#_3-1-分配随机ip","children":[]},{"level":3,"title":"3.2: 设置静态IP","slug":"_3-2-设置静态ip","link":"#_3-2-设置静态ip","children":[]},{"level":3,"title":"3:永久关闭Selinux","slug":"_3-永久关闭selinux","link":"#_3-永久关闭selinux","children":[]}]}],"git":{"createdTime":1668948234000,"updatedTime":1668948234000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":0.77,"words":232},"filePathRelative":"linux/Centos7Minimal.md","localizedDate":"2022年1月28日","excerpt":"<h1> Centos7 Minimal 安装后初始化配置</h1>\\n<p></p>\\n<h2> 1:更新yum</h2>\\n<p><code>yum upgrade</code></p>\\n<h2> 2: 安装基础命令</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>yum <span class=\\"token parameter variable\\">-y</span> <span class=\\"token function\\">install</span> vim* lrzsz  gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel\\nyum <span class=\\"token parameter variable\\">-y</span> <span class=\\"token function\\">install</span> telnet net-tools\\n\\n安装ifconfig\\nyum provides <span class=\\"token function\\">ifconfig</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
