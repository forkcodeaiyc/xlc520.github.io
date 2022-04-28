import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as e}from"./app.f1128457.js";const a={},t=e(`<h1 id="bing\u5FC5\u5E94api" tabindex="-1"><a class="header-anchor" href="#bing\u5FC5\u5E94api" aria-hidden="true">#</a> Bing\u5FC5\u5E94API</h1><p>http://xlc.pp.ua/bing-api/index.php?rand=true</p><h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h2><p>http://cn.bing.com/HPImageArchive.aspx?idx=0&amp;n=1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cn.bing.com/HPImageArchive.aspx?idx=0&amp;n=1
https://cn.bing.com/HPImageArchive.aspx?format=xml&amp;cc=jp&amp;idx=0&amp;n=1
\u5982\u679C\u6211\u4EEC\u60F3\u6D4F\u89C8\u6628\u5929\uFF0C\u524D\u5929\u7684\u56FE\u7247\u5462\uFF1F
 
\u56DE\u5230\u6700\u521D\u7684\u7F51\u5740\u4E0A\uFF0Chttp://cn.bing.com/HPImageArchive.aspx?idx=0&amp;n=1 \u5728\u8FD9\u91CC\uFF0C\u66F4\u6362 idx= \u8FD9\u4E2A\u53C2\u6570\u5C31\u53EF\u4EE5\u4E86\u3002
 
 \u5982 http://cn.bing.com/HPImageArchive.aspx?idx=1&amp;n=1 \u5C06\u8981\u5F97\u5230\u6628\u5929\u7684\u56FE\u7247
http://cn.bing.com/HPImageArchive.aspx?idx=2&amp;n=1\u5F97\u5230\u524D\u5929\u7684\u56FE\u7247
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2</h2><p>https://bing.biturl.top/?resolution=1920&amp;format=image&amp;index=0&amp;mkt=zh-CN</p><h3 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u8BBF\u95EE https://api.ioliu.cn/bing/ , \u8FD4\u56DEbing\u6BCF\u65E5\u6700\u65B0\u80CC\u666F\u56FE, \u53EF\u9009\u53C2\u6570[w,h]
2. \u8BBF\u95EE https://api.ioliu.cn/bing/?d=n (n&gt;=0), \u8FD4\u56DE\u4EE5\u5F53\u65E5\u4E3A\u8D77\u70B9\u7B2Cn\u5929\u524D\u7684\u58C1\u7EB8, \u53EF\u9009\u53C2\u6570[w,h]
3. \u8BBF\u95EE https://api.ioliu.cn/bing/json/ , \u8FD4\u56DEbing\u6BCF\u65E5\u6700\u65B0\u58C1\u7EB8\u7684\u76F8\u5173(\u4ECB\u7ECD\u3001\u56FE\u7247\u5730\u5740\u7B49)\u4FE1\u606F(json\u683C\u5F0F), \u53EF\u9009\u53C2\u6570[callback].
4. \u8BBF\u95EE https://api.ioliu.cn/bing/rand/ , \u8FD4\u56DE\u968F\u673A\u56FE\u7247, \u53EF\u9009\u53C2\u6570[w,h]
5. \u8BBF\u95EE https://api.ioliu.cn/bing/blur/ , \u8FD4\u56DE\u9AD8\u65AF\u6A21\u7CCA\u56FE\u7247, \u53EF\u9009\u53C2\u6570[d,w,h]
   \u5E26[w,h]\u7528\u6CD5\uFF1A https://api.ioliu.cn/bing/rand/?w=1920&amp;h=1200

\u76EE\u524D\u5DF2\u77E5\u56FE\u7247\u5206\u8FA8\u7387
1920x1200   1920x1080    1366x768   1280x768    
1024x768    800x600       800x480   768x1280  
720x1280    640x480       480x800   400x240     
320x240     240x320 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2><p>https://www.talklee.com/api/bing/</p><p>\u8C03\u7528\u53C2\u6570\uFF1A</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u4EE3\u7801</th><th style="text-align:left;">\u53C2\u6570\u542B\u4E49</th><th style="text-align:left;">\u53EF\u7528\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">rand</td><td style="text-align:left;">\u662F\u5426\u968F\u673A\u663E\u793A\u6700\u8FD18\u5929\u5185\u7684\u56FE\u7247</td><td style="text-align:left;">true or false</td></tr><tr><td style="text-align:left;">day</td><td style="text-align:left;">\u663E\u793A\u6307\u5B9A\u7684\u6700\u8FD1\u56FE\u7247</td><td style="text-align:left;">-1\uFF0C0\uFF0C1\uFF0C2\uFF0C3\uFF0C4\uFF0C5\uFF0C6\uFF0C7(0\u4E3A\u4ECA\u5929\uFF0C-1\u4E3A\u6628\u5929)</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">\u6307\u5B9A\u83B7\u53D6\u56FE\u7247\u5927\u5C0F</td><td style="text-align:left;">\u8BE6\u89C1\u4E0B\u65B9\u53EF\u7528\u5206\u8FA8\u7387</td></tr><tr><td style="text-align:left;">info</td><td style="text-align:left;">\u83B7\u53D6\u56FE\u7247\u57FA\u7840\u4FE1\u606F\uFF08json\u683C\u5F0F\uFF09</td><td style="text-align:left;">true or false</td></tr></tbody></table><ul><li>\u4EE5\u4E0A\u6240\u6709\u53C2\u6570\u5747\u975E\u5FC5\u8981\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3Arand=false\uFF0Cday=0\uFF0Csize=1920\xD71080\uFF0Cinfo=false</li></ul><p>\u53EF\u7528\u5206\u8FA8\u7387\uFF1A</p><ul><li>1920\xD71080</li><li>1366\xD7768</li><li>1280\xD7768</li><li>1024\xD7768</li><li>800\xD7600</li><li>800\xD7480</li><li>768\xD71280</li><li>720\xD71280</li><li>640\xD7480</li><li>480\xD7800</li><li>400\xD7240</li><li>320\xD7240</li><li>240\xD7320</li><li>\u6CE8\uFF1A\u4E2D\u95F4\u7684x\u4E3A\u82F1\u6587\u5B57\u6BCDx</li></ul><h2 id="_5" tabindex="-1"><a class="header-anchor" href="#_5" aria-hidden="true">#</a> 5</h2><h3 id="bing-pictures-interface-\u5FC5\u5E94\u58C1\u7EB8\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#bing-pictures-interface-\u5FC5\u5E94\u58C1\u7EB8\u63A5\u53E3" aria-hidden="true">#</a> Bing Pictures Interface | \u5FC5\u5E94\u58C1\u7EB8\u63A5\u53E3</h3><blockquote><p>\u{1F528} <code>Bing \u58C1\u7EB8 Api</code>\u91CD\u88C5\u4E0A\u9635\u5566 \u{1F604} <a href="http://bing.ioliu.cn/" target="_blank" rel="noopener noreferrer">http://bing.ioliu.cn</a></p></blockquote><h3 id="\u76EE\u524D\u5F00\u653E\u7684\u58C1\u7EB8\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u76EE\u524D\u5F00\u653E\u7684\u58C1\u7EB8\u63A5\u53E3" aria-hidden="true">#</a> \u76EE\u524D\u5F00\u653E\u7684\u58C1\u7EB8\u63A5\u53E3\uFF1A</h3><ul><li><p><code>/v1{d,w,h,p,size,callback}</code> \u8FD4\u56DE\u4ECA\u65E5\u7684\u58C1\u7EB8\u5B8C\u6574\u6570\u636E(<code>\u53EF\u9009\u53C2\u6570{d,w,h,p,size,callback}</code>)\uFF1A</p><blockquote><p>\u82E5\u6307\u5B9A\u53C2\u6570<code>{w,h}</code> \uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u56FE\u7247</p></blockquote></li></ul><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u8981</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>d</td><td><code>Int</code></td><td>\u5426</td><td>\u81EA\u4ECA\u65E5\u8D77\u7B2C<code>d</code>\u5929\u524D\u7684\u6570\u636E</td></tr><tr><td>w</td><td><code>Int</code></td><td>\u5426</td><td>\u56FE\u7247\u5BBD\u5EA6</td></tr><tr><td>h</td><td><code>Int</code></td><td>\u5426</td><td>\u56FE\u7247\u9AD8\u5EA6</td></tr><tr><td>p</td><td><code>Int</code></td><td>\u5426</td><td><code>Page \u9875\u7801</code>:\u7B2Cx\u9875</td></tr><tr><td>size</td><td><code>Int</code></td><td>\u5426</td><td><code>Size \u6761\u6570</code>:\u6BCF\u9875\u6761\u6570</td></tr><tr><td>callback</td><td><code>String</code></td><td>\u5426</td><td>JSONP\u7684\u56DE\u8C03\u51FD\u6570\u540D</td></tr></tbody></table><ul><li><code>/v1/rand{w,h,type,callback}</code> \u8FD4\u56DE\u968F\u673A\u7684\u58C1\u7EB8(<code>\u53EF\u9009\u53C2\u6570{w,h,type,callback}</code>)\uFF1A</li></ul><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u8981</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>w</td><td><code>Int</code></td><td>\u5426</td><td>\u56FE\u7247\u5BBD\u5EA6</td></tr><tr><td>h</td><td><code>Int</code></td><td>\u5426</td><td>\u56FE\u7247\u9AD8\u5EA6</td></tr><tr><td>type</td><td><code>String</code></td><td>\u5426</td><td>\u8FD4\u56DE\u503C\u7C7B\u578B(<code>json</code>)</td></tr><tr><td>callback</td><td><code>String</code></td><td>\u5426</td><td>JSONP\u7684\u56DE\u8C03\u51FD\u6570\u540D</td></tr></tbody></table><ul><li><code>/v1/blur{d,w,h,r}</code> \u8FD4\u56DE\u9AD8\u65AF\u6A21\u7CCA\u58C1\u7EB8(<code>\u53EF\u9009\u53C2\u6570{d,w,h,r}</code>)\uFF1A</li></ul><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u8981</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>d</td><td><code>Int</code></td><td>\u5426</td><td>\u81EA\u4ECA\u65E5\u8D77\u7B2C<code>d</code>\u5929\u524D\u7684\u6570\u636E</td></tr><tr><td>w</td><td><code>Int</code></td><td>\u5426</td><td>\u56FE\u7247\u5BBD\u5EA6</td></tr><tr><td>h</td><td><code>Int</code></td><td>\u5426</td><td>\u56FE\u7247\u9AD8\u5EA6</td></tr><tr><td>r</td><td><code>Int</code></td><td>\u5426</td><td>\u6A21\u7CCA\u534A\u5F84(<code>1~50</code>)</td></tr></tbody></table><h3 id="\u26A0\uFE0F-\u9AD8\u65AF\u6A21\u7CCA\u63A5\u53E3\u76EE\u524D\u53EA\u652F\u6301\u6307\u5B9A\u5206\u8FA8\u7387-w-h-\u7684\u56FE\u7247-\u5177\u4F53\u5206\u8FA8\u7387\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u26A0\uFE0F-\u9AD8\u65AF\u6A21\u7CCA\u63A5\u53E3\u76EE\u524D\u53EA\u652F\u6301\u6307\u5B9A\u5206\u8FA8\u7387-w-h-\u7684\u56FE\u7247-\u5177\u4F53\u5206\u8FA8\u7387\u5982\u4E0B" aria-hidden="true">#</a> <strong>\u26A0\uFE0F</strong> <code>\u9AD8\u65AF\u6A21\u7CCA</code>\u63A5\u53E3\u76EE\u524D\u53EA\u652F\u6301\u6307\u5B9A\u5206\u8FA8\u7387(<code>w,h</code>)\u7684\u56FE\u7247\uFF0C\u5177\u4F53\u5206\u8FA8\u7387\u5982\u4E0B\uFF1A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u5DF2\u77E5\u5206\u8FA8\u7387
 */
resolutions: [
    &#39;1920x1200&#39;,
    &#39;1920x1080&#39;,
    &#39;1366x768&#39;,
    &#39;1280x768&#39;,
    &#39;1024x768&#39;,
    &#39;800x600&#39;,
    &#39;800x480&#39;,
    &#39;768x1280&#39;,
    &#39;720x1280&#39;,
    &#39;640x480&#39;,
    &#39;480x800&#39;,
    &#39;400x240&#39;,
    &#39;320x240&#39;,
    &#39;240x320&#39;
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_6" tabindex="-1"><a class="header-anchor" href="#_6" aria-hidden="true">#</a> 6</h2><p><a href="http://bing.getlove.cn/bingImage" target="_blank" rel="noopener noreferrer">http://bing.getlove.cn/bingImage</a></p><h2 id="_7" tabindex="-1"><a class="header-anchor" href="#_7" aria-hidden="true">#</a> 7</h2><ul><li>https://api.7-89.cn/bing/today</li><li>https://api.kdcc.cn/img/</li><li>https://api.kdcc.cn/img/rand.php\uFF08\u968F\u673A\uFF09</li><li>https://api.kdcc.cn/img/jump.php</li><li>https://open.saintic.com/api/bingPic/</li><li>http://47.103.144.215:2020/showtoday</li><li>https://www.talklee.com/api/bing</li><li>https://api.dujin.org/bing/1920.php</li></ul><h2 id="\u4EE3\u7801\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u4E00" aria-hidden="true">#</a> \u4EE3\u7801\u4E00</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>  $time = date(&quot;Ymd&quot;, time());
    $log = &quot;./log/&quot; . $time . &#39;.txt&#39;;
    //\u5224\u65AD\u7F13\u5B58\u6587\u4EF6\u662F\u5426\u5B58\u5728
    if (file_exists($log)) {
        //\u8BFB\u53D6\u7F13\u5B58
        $imgurl = file_get_contents($log);
        //\u8DF3\u8F6C\u81F3\u56FE\u7247\u5730\u5740
        header(&quot;Location: $imgurl&quot;);
    } else {
        //\u83B7\u53D6bing\u80CC\u666F\u56FE
        $str = file_get_contents(&#39;http://cn.bing.com/HPImageArchive.aspx?format=js&amp;idx=0&amp;n=1&#39;);
        //\u89E3\u6790Bing\u5B98\u65B9\u63A5\u53E3Json
        $data = json_decode($str,true);
        //\u4E03\u725BCDN\u955C\u50CF\u52A0\u901F
        $imgurl = &#39;http://s.cn.bing.net&#39;.$data[&#39;images&#39;][0][&#39;urlbase&#39;]. &#39;_1920x1080.jpg&#39;;
        //\u5199\u5165TXT\u7528\u4F5C\u7F13\u5B58
        file_put_contents($log, $imgurl);
        //\u8DF3\u8F6C\u81F3\u56FE\u7247\u5730\u5740
        header(&quot;Location: $imgurl&quot;);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u4EE3\u7801\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u4E8C" aria-hidden="true">#</a> \u4EE3\u7801\u4E8C</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>&lt;?php
//\u5224\u65AD\u662F\u5426\u968F\u673A\u8C03\u7528
if ($_GET[&#39;rand&#39;]===&#39;true&#39;) {
  $gettime = rand(-1,7);
}else{
//\u82E5\u4E0D\u4E3A\u968F\u673A\u8C03\u7528\u5219\u5224\u65AD\u662F\u5426\u6307\u5B9A\u65E5\u671F
  $gettimebase = $_GET[&#39;day&#39;];
  if (empty($gettimebase)) {
    $gettime = 0;
  }else{
    $gettime = $gettimebase;
  }
}
//\u83B7\u53D6Bing Json\u4FE1\u606F
$json_string = file_get_contents(&#39;https://www.bing.com/HPImageArchive.aspx?format=js&amp;idx=&#39;.$gettime.&#39;&amp;n=1&#39;);
//\u8F6C\u6362\u4E3APHP\u6570\u7EC4
$data = json_decode($json_string);
//\u63D0\u53D6\u57FA\u7840url
$imgurlbase = &quot;https://www.bing.com&quot;.$data-&gt;{&quot;images&quot;}[0]-&gt;{&quot;urlbase&quot;};
//\u5224\u65AD\u662F\u5426\u6307\u5B9A\u56FE\u7247\u5927\u5C0F
$imgsizebase = $_GET[&#39;size&#39;];
if (empty($imgsizebase)){
  $imgsize = &quot;1920x1080&quot;;
}else{
  $imgsize = $imgsizebase;
}
//\u5EFA\u7ACB\u5B8C\u6574url
$imgurl = $imgurlbase.&quot;_&quot;.$imgsize.&quot;.jpg&quot;;
//\u83B7\u53D6\u5176\u4ED6\u4FE1\u606F
$imgtime = $data-&gt;{&quot;images&quot;}[0]-&gt;{&quot;startdate&quot;};
$imgtitle = $data-&gt;{&quot;images&quot;}[0]-&gt;{&quot;copyright&quot;};
$imglink = $data-&gt;{&quot;images&quot;}[0]-&gt;{&quot;copyrightlink&quot;};
//\u5224\u65AD\u662F\u5426\u53EA\u83B7\u53D6\u56FE\u7247\u4FE1\u606F
if ($_GET[&#39;info&#39;]===&#39;true&#39;) {
  echo &quot;{title:&quot;.$imgtitle.&quot;,url:&quot;.$imgurl.&quot;,link:&quot;.$imglink.&quot;,time:&quot;.$imgtime.&quot;}&quot;;
}else{
  //\u82E5\u4E0D\u662F\u5219\u8DF3\u8F6Curl
  header(&quot;Location: $imgurl&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,36);function s(i,l){return t}var p=n(a,[["render",s],["__file","Bing\u5FC5\u5E94API.html.vue"]]);export{p as default};
