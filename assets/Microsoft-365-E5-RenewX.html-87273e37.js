import{_ as o,V as s,W as i,X as e,Y as t,$ as n,Z as r,E as d}from"./framework-debd98b7.js";const l={},h=r('<h1 id="e5-调用api续订服务-microsoft-365-e5-renew-x" tabindex="-1"><a class="header-anchor" href="#e5-调用api续订服务-microsoft-365-e5-renew-x" aria-hidden="true">#</a> E5 调用API续订服务：Microsoft 365 E5 Renew X</h1><p>Microsoft 365 E5 Renew X是一款网页版的E5续订服务，其依赖网页浏览器呈现支持用户多端操作，完全将E5账户API调用托管在了服务器端因此用户无需电脑也可使用。</p><h2 id="microsoft-365-e5-renew-x-由来" tabindex="-1"><a class="header-anchor" href="#microsoft-365-e5-renew-x-由来" aria-hidden="true">#</a> Microsoft 365 E5 Renew X 由来</h2><p>Microsoft 365 E5 Renew X为Microsoft 365 E5 Web的升级版，相对于旧版其增强了管理功能且更容易部署，API调用内核继承于续订桌面版软件Microsoft 365 E5 Renew Plus。</p><h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2><h3 id="用户端" tabindex="-1"><a class="header-anchor" href="#用户端" aria-hidden="true">#</a> 用户端</h3><ul><li><strong>两种可选的调用权限</strong>：用户未登录作为守护程序调用(需要客户端密码)、程序以登录用户身份直接调用(需要账户密码)</li><li><strong>API种类齐全</strong>：41/30个可选的Microsoft Graph REST API Beta中的API(未来可能会继续添加)</li><li><strong>完全随机的API调用模式</strong>：从已选定的API序列中随机抽取一个或几个进行调用（个数和API随机）</li><li><strong>完全随机的API调用时间间隔</strong>：随机区段1000s-2000s固定</li><li><strong>完全随机的API内容(仅部分API支持)</strong>：发送邮件的内容随机 Onedirve上传文件的内容随机</li><li><strong>邮件通知服务</strong>：支持设置通知邮箱，调用异常会通过邮件通知无需反复登录查看</li></ul><h3 id="部署端" tabindex="-1"><a class="header-anchor" href="#部署端" aria-hidden="true">#</a> 部署端</h3>',8),c=e("strong",null,"平台兼容性",-1),p={href:"http://xn--Asp-hb0er53o.Net",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,"Windows|Linux|MacOS x64|x86|ARM64|ARM",-1),u=r("<li><strong>灵活部署</strong>：支持<strong>开放站点部署</strong>和<strong>私享部署</strong>，私享部署不再强制要求配置Https和OAuth</li><li><strong>无需数据库</strong>：不需要后台数据库支持，前后台一体化程序</li><li><strong>用户后台管理</strong>：可修改用户的E5账户数量，以及封删管理</li><li><strong>系统状态监视</strong>：系统占用率一目了然，可控的站点注册通道更容易控制系统用户数量</li><li><strong>自定义页面</strong>：支持自定义HTML静态页面，可设置支付宝、微信收款码</li><li><strong>显示ICP备案</strong>：支持ICP备案文字显示，可在国内备案建站</li><li><strong>无人值守 运行自动暂停</strong>：可自动暂停有错误率过高的账号API调用</li><li><strong>无人值守 自动恢复运行</strong>：可定期自动恢复全部账号的API调用，防止因微软网络原因触发大量账号停止API调用进而导致的账号续期失败</li>",8),_=r('<h1 id="用户端使用教程-请勿开启账号的双重验证功能" tabindex="-1"><a class="header-anchor" href="#用户端使用教程-请勿开启账号的双重验证功能" aria-hidden="true">#</a> 用户端使用教程**(请勿开启账号的双重验证功能)**</h1><h2 id="可用站点" tabindex="-1"><a class="header-anchor" href="#可用站点" aria-hidden="true">#</a> 可用站点</h2><h3 id="主站" tabindex="-1"><a class="header-anchor" href="#主站" aria-hidden="true">#</a> 主站</h3>',3),m={href:"https://e5.sundayrx.net/",target:"_blank",rel:"noopener noreferrer"},f=e("strong",null,"主站：https://e5.sundayrx.net（由 SundayRX 运营）(可登录不可注册)",-1),b={href:"https://ms-e5-renew.leeskyler.top:11015/",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,"分站：https://ms-e5-renew.leeskyler.top:11015（由 leeskyler 运营）(已关停)",-1),I={href:"https://ms-e5-renew-3.eastern.moe/",target:"_blank",rel:"noopener noreferrer"},A=e("strong",null,"分站：https://ms-e5-renew-3.eastern.moe（由 leeskyler 运营）(已关停)",-1),x=e("h3",{id:"自建共享站点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自建共享站点","aria-hidden":"true"},"#"),t(" 自建共享站点")],-1),P={href:"https://ew.chirmyram.com/",target:"_blank",rel:"noopener noreferrer"},T=e("strong",null,"自建共享站：https://ew.chirmyram.com（由 七米蓝 运营）(可登录不可注册)",-1),w={href:"https://e5.hm0420.cc/",target:"_blank",rel:"noopener noreferrer"},E=e("strong",null,"自建共享站：https://e5.hm0420.cc（由 小冰酱 运营）",-1),S={href:"https://ms-e5.hm0420.cc/",target:"_blank",rel:"noopener noreferrer"},y=e("strong",null,"自建共享站：https://ms-e5.hm0420.cc（由 小冰酱 运营）",-1),z={href:"https://e5.xzh.gs/",target:"_blank",rel:"noopener noreferrer"},v=e("strong",null,"自建共享站：https://e5.xzh.gs（由 XZH 运营）",-1),C={href:"https://e5.tianli0.top/",target:"_blank",rel:"noopener noreferrer"},X=e("strong",null,"自建共享站：https://e5.tianli0.top（由 Tinali 运营）",-1),D={href:"https://renew.lrize.xyz/",target:"_blank",rel:"noopener noreferrer"},M=e("strong",null,"自建共享站：https://renew.lrize.xyz（由 Lrize、 运营）",-1),H={href:"https://e5zh.xyz/",target:"_blank",rel:"noopener noreferrer"},F=e("strong",null,"自建共享站：https://e5zh.xyz（由 z 运营）",-1),N=e("h2",{id:"_1-注册azure应用程序",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-注册azure应用程序","aria-hidden":"true"},"#"),t(" 1 注册Azure应用程序")],-1),B=e("h3",{id:"_1-1-应用注册",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-应用注册","aria-hidden":"true"},"#"),t(" 1.1 应用注册")],-1),O={href:"https://portal.azure.com/#home",target:"_blank",rel:"noopener noreferrer"},L={href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},R=e("strong",null,"管理员账户",-1),U={href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},q=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618170032256-165380585664583.png",alt:"图片",loading:"lazy"},null,-1),G=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061817051341-165380585814786.png",alt:"图片",loading:"lazy"},null,-1),K=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618170801323-165380585941389.png",alt:"图片",loading:"lazy"},null,-1),V=e("h3",{id:"_1-2-配置应用重定向url-身份验证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-2-配置应用重定向url-身份验证","aria-hidden":"true"},"#"),t(" 1.2 配置应用重定向URL（身份验证）")],-1),W=e("strong",null,'下图中的应用程序(客户端)ID即为"客户端ID"',-1),Y=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061817121972-165380586091892.png",alt:"图片",loading:"lazy"},null,-1),Q=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171501396-165380586226995.png",alt:"图片",loading:"lazy"},null,-1),Z={href:"https://login.microsoftonline.com/common/oauth2/nativeclient%E2%80%9D%E4%B9%9F%E5%8F%AF%E6%89%8B%E5%8A%A8%E6%B7%BB%E5%8A%A0%E3%80%82",target:"_blank",rel:"noopener noreferrer"},j=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171651338-165380586350298.png",alt:"图片",loading:"lazy"},null,-1),$=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171850779-1653805864822101.png",alt:"图片",loading:"lazy"},null,-1),J=r('<h2 id="_2-配置应用程序的api权限-重要" tabindex="-1"><a class="header-anchor" href="#_2-配置应用程序的api权限-重要" aria-hidden="true">#</a> 2 配置应用程序的API权限（重要）</h2><p><strong>小白提示：建议选择“委托的权限(用户登录)”该权限类型，调用API较多，操作步骤较少简单粗暴，调用成功几率高</strong></p><p>注册的应用程序API权限类型有两种，其主要区别如下表所示：</p><table><thead><tr><th>权限类型</th><th><strong>委托的权限(用户登录)</strong></th><th><strong>应用程序权限(非用户登录)</strong></th></tr></thead><tbody><tr><td>官方释义</td><td>应用程序必须以登录用户身份访问API</td><td>应用程序在用户未登录的情况下作为后台服务或守护程序运行</td></tr><tr><td>需要的信息</td><td>账户名称+账户密码+应用程序(客户端)ID</td><td>账户名称+客户端机密+应用程序(客户端)ID</td></tr><tr><td>功能影响</td><td>程序中所有API均可调用</td><td>部分API权限受限无法调用(官方限制)</td></tr><tr><td>API权限配置</td><td>可由PC版程序自动配置添加API权限</td><td>必须手动配置API权限</td></tr><tr><td>显示颜色标识</td><td>蓝色</td><td>深青色</td></tr></tbody></table><p><strong>以下是登录或非登录所需要的权限列表</strong>： <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201102171130141.png" alt="图片" loading="lazy"></p><p>最后根据所选的API权限类型在：<strong>2.1 选择“委托的权限(用户登录)”类型的API</strong>或者<strong>2.2 选择“应用程序权限(非用户登录)”类型的API</strong>中选择性阅读。</p><h3 id="_2-1-选择-委托的权限-用户登录-类型的api" tabindex="-1"><a class="header-anchor" href="#_2-1-选择-委托的权限-用户登录-类型的api" aria-hidden="true">#</a> 2.1 选择“委托的权限(用户登录)”类型的API</h3><h4 id="手动配置api权限" tabindex="-1"><a class="header-anchor" href="#手动配置api权限" aria-hidden="true">#</a> 手动配置API权限</h4><p>1.点击“API权限”-“添加权限”-“Microsoft Graph” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061819283823-1653805868573106.png" alt="图片" loading="lazy"> 2.选择“委托的权限”<img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172538991-1653805869901109.png" alt="图片" loading="lazy"> 3.根据编辑页面中列出的API权限需求表（注意在程序中切换为&quot;<strong>登录</strong>“）来勾选所对应的API权限，全部选择完成后点击&quot;添加权限”。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201102171303292.png" alt="图片" loading="lazy"><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172627969-1653805874862114.png" alt="图片" loading="lazy"> 添加完成的效果如图 <strong>如果没有“代表XXX授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用</strong><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201112111140479.png" alt="图片" loading="lazy"></p><p>4.最后点击代表XXX授予管理员同意,对话框选择“是”（该图包含了当前程序“委托的权限(用户登录)”全部API所需要的权限）。</p><figure><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201112110505347.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_2-2-选择-应用程序权限-非用户登录-类型的api" tabindex="-1"><a class="header-anchor" href="#_2-2-选择-应用程序权限-非用户登录-类型的api" aria-hidden="true">#</a> 2.2 选择“应用程序权限(非用户登录)”类型的API</h3><h4 id="_2-2-1-手动配置api权限" tabindex="-1"><a class="header-anchor" href="#_2-2-1-手动配置api权限" aria-hidden="true">#</a> 2.2.1 手动配置API权限</h4><p>1.点击“API权限”-“添加权限”-“Microsoft Graph” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061819283823-1653805879510121.png" alt="图片" loading="lazy"> 2.选择“应用程序权限” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120027971-1653805882870124.png" alt="图片" loading="lazy"> 3.根据编辑页面中列出的API权限需求表（注意在程序中切换为&quot;<strong>非登录</strong>“）来勾选所对应的API权限，全部选择完成后点击&quot;添加权限”。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201102171349129.png" alt="图片" loading="lazy"><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172627969-1653805884862127.png" alt="图片" loading="lazy"> 添加完成的效果如图 <strong>如果没有“代表XXX授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用</strong><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120623311-1653805887894132.png" alt="图片" loading="lazy"> 4.最后点击代表XXX授予管理员同意,对话框选择“是”（该图包含了当前程序“应用程序权限(非用户登录)”全部API所需要的权限）。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120818260-1653805889622135.png" alt="图片" loading="lazy"></p><h4 id="_2-2-2-创建客户端密码" tabindex="-1"><a class="header-anchor" href="#_2-2-2-创建客户端密码" aria-hidden="true">#</a> 2.2.2 创建客户端密码</h4><p>1.点击“证书密码”-“新客户端密码”-“24个月”-“添加” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210609101116972-1653805890998138.png" alt="图片" loading="lazy"> 2.点击“值”该列中的“复制”（不要复制&quot;ID&quot;列中的值），并立即将该密码保存至电脑，<strong>保存的值即为“客户端密码”</strong>， 注：该值必须立即保存，退出该页面后将永远无法查看。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020120711360840.jpeg" alt="图片" loading="lazy"></p><h2 id="_3-将账号api调用托管至服务" tabindex="-1"><a class="header-anchor" href="#_3-将账号api调用托管至服务" aria-hidden="true">#</a> 3 将账号API调用托管至服务</h2><h5 id="创建一个新的e5子账户-可选步骤" tabindex="-1"><a class="header-anchor" href="#创建一个新的e5子账户-可选步骤" aria-hidden="true">#</a> 创建一个新的E5子账户(可选步骤)</h5><p>登入E5管理员账户进入管理员界面，创建一个新的子账户，使用这个子账户登录程序调用API。 为什么建议这样做：Microsoft 365 E5 Renew中的部分API包含了写操作，例如邮件和Onedrive的API，这些API在随机模式下会生成大量垃圾邮件和文件（虽然单独为此设立了一个文件夹），部分人可能会对此行为非常介意，而且程序频繁的读写可能会对您正常使用账户造成影响，因此不建议使用管理员账户登录。</p><h3 id="_3-1-进入网站注册并登录账户" tabindex="-1"><a class="header-anchor" href="#_3-1-进入网站注册并登录账户" aria-hidden="true">#</a> 3.1 进入网站注册并登录账户</h3><p>从一开始的可用站点，选择站点进入（记住无论使用任何人运营网站显示内容都是基本相同的）</p><p>从两种登录中任选一个，这里不建议选择GitHub登录（GitHub的第三方登录很迷经常性崩溃）</p><p>第一次登录账户系统会显示注册成功，然后再登录一次即可登录进入系统 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3VuZGF5Ulg=,size_20,color_FFFFFF,t_70,g_se,x_16.png" alt="请添加图片描述" loading="lazy"></p><h3 id="_3-2-激活您的账户" tabindex="-1"><a class="header-anchor" href="#_3-2-激活您的账户" aria-hidden="true">#</a> 3.2 激活您的账户</h3><p>阅读并同意用户协议，点击激活账户 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3VuZGF5Ulg=,size_20,color_FFFFFF,t_70,g_se,x_16-1653805902079145.png" alt="请添加图片描述" loading="lazy"></p><h3 id="_3-3-添加一个e5账户的运行配置信息" tabindex="-1"><a class="header-anchor" href="#_3-3-添加一个e5账户的运行配置信息" aria-hidden="true">#</a> 3.3 添加一个E5账户的运行配置信息</h3><p>在成功登录系统后，页面会自动跳转到“主页”页面，在“账户详情”页面点击“添加运行账号”按钮，前往“账户运行配置”页面 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2375b23f6de74f5e9d9ff37bca1e7dcc.png" alt="请添加图片描述" loading="lazy"></p><p>在账户运行配置页面中填写账户信息，且登录调用填写账户密码、非登录调用填写客户端密码，并选择自己选定的调用方式，注意调用方式不要选错了！！！ 最后点击“添加运行账号”按钮完成配置。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/eb5d982940a340719b4b5dbd1a46420c.png" alt="请添加图片描述" loading="lazy"> 由于前后台数据同步需要时间，任何添加账户或者修改账户配置信息的操作都不会立即被后台执行。</p><p>返回用户页面查看账户信息中的“配置同步状态”，如果显示为“正在运行”表明配置已经上传至后台，修改账户配置成功。 <strong>警示：配置成功了也要定期来看看自己的账户是否在正常运行（虽然有邮件通知服务），但也建议每月查看一次账户状态！！！</strong><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/3b2651537fee45088202efd02cad6d74.png" alt="请添加图片描述" loading="lazy"></p><h3 id="_3-4-设置一个通知邮箱-可选" tabindex="-1"><a class="header-anchor" href="#_3-4-设置一个通知邮箱-可选" aria-hidden="true">#</a> 3.4 设置一个通知邮箱（可选）</h3><p>在任何页面下 点击右上角“用户名-账户设置”，进入个人信息设置 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/8229363a593549bbb884960e65875673.png" alt="请添加图片描述" loading="lazy"> 记住你的UID，出现任何问题请使用这个UID与你所选站点的管理员沟通 编辑你的邮箱 并点击保存 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/fea87de6e5774a319c4b4a2e818d3341.png" alt="请添加图片描述" loading="lazy"></p><h1 id="部署端-请勿使用任何cookie缓存加速服务" tabindex="-1"><a class="header-anchor" href="#部署端-请勿使用任何cookie缓存加速服务" aria-hidden="true">#</a> 部署端**(请勿使用任何Cookie缓存加速服务)**</h1><h2 id="服务下载-作为站长务必注意查看主站中-关于-页面中的程序发布时间-及时更新服务程序" tabindex="-1"><a class="header-anchor" href="#服务下载-作为站长务必注意查看主站中-关于-页面中的程序发布时间-及时更新服务程序" aria-hidden="true">#</a> 服务下载(作为站长务必注意查看<strong>主站</strong>中“<strong>关于</strong>”页面中的<strong>程序发布时间</strong>，及时更新服务程序)</h2><h3 id="传统方式" tabindex="-1"><a class="header-anchor" href="#传统方式" aria-hidden="true">#</a> 传统方式</h3>',34),ee={href:"https://sundayrx.lanzoui.com/aW09Lsss75g",target:"_blank",rel:"noopener noreferrer"},te=e("strong",null,"下载服务程序源文件（https://sundayrx.lanzoui.com/aW09Lsss75g）",-1),ae={href:"https://docs-1.leeskyler.top/",target:"_blank",rel:"noopener noreferrer"},ne=e("strong",null,"参阅 Skyler的部署帮助文档（https://docs-1.leeskyler.top）",-1),re={href:"https://www.gladtbam.top/posts/37680/",target:"_blank",rel:"noopener noreferrer"},oe=e("strong",null,"参阅 Gladtbam的部署帮助文档 （https://www.gladtbam.top/posts/37680）",-1),se=e("h3",{id:"docker方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker方式","aria-hidden":"true"},"#"),t(" Docker方式")],-1),ie={href:"https://blog.csdn.net/qq_40605167/article/details/122888580",target:"_blank",rel:"noopener noreferrer"},de=e("strong",null,"参阅 韩韩的Docker版部署帮助文档（https://blog.csdn.net/qq_40605167/article/details/122888580）",-1),le={href:"https://www.gladtbam.top/posts/22256/",target:"_blank",rel:"noopener noreferrer"},he=e("strong",null,"参阅 Gladtbam的Docker版部署帮助文档（https://www.gladtbam.top/posts/22256/）",-1),ce={href:"https://www.bilibili.com/read/cv16338214",target:"_blank",rel:"noopener noreferrer"},pe=e("strong",null,"参阅 Curious的部署帮助文档 （https://www.bilibili.com/read/cv16338214）",-1),ge=e("h2",{id:"传统方式服务部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#传统方式服务部署","aria-hidden":"true"},"#"),t(" 传统方式服务部署")],-1),ue=e("h3",{id:"安装运行环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装运行环境","aria-hidden":"true"},"#"),t(" 安装运行环境")],-1),_e={href:"http://Asp.Net",target:"_blank",rel:"noopener noreferrer"},me={href:"http://Asp.Net",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://docs.microsoft.com/zh-cn/dotnet/core/install/",target:"_blank",rel:"noopener noreferrer"},be=e("h4",{id:"windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),t(" Windows")],-1),ke={href:"https://dotnet.microsoft.com/download/dotnet/3.1%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85**%E6%9C%80%E6%96%B0%E7%9A%84Asp.Net",target:"_blank",rel:"noopener noreferrer"},Ie=e("h4",{id:"ubuntu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu","aria-hidden":"true"},"#"),t(" Ubuntu")],-1),Ae={href:"https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-ubuntu",target:"_blank",rel:"noopener noreferrer"},xe=r(`<p><strong>Ubuntu 21.04</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://packages.microsoft.com/config/ubuntu/21.04/packages-microsoft-prod.deb <span class="token parameter variable">-O</span> packages-microsoft-prod.deb
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> packages-microsoft-prod.deb
<span class="token function">rm</span> packages-microsoft-prod.deb
<span class="token number">123</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update<span class="token punctuation">;</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> apt-transport-https <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> aspnetcore-runtime-3.1
<span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> CentOS</h4>`,3),Pe={href:"https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-centos",target:"_blank",rel:"noopener noreferrer"},Te=e("p",null,[e("strong",null,"CentOS 8"),e("code",null,"sudo dnf install dotnet-sdk-3.1"),e("strong",null,"CentOS 7"),e("code",null,"sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm"),e("code",null,"sudo yum install dotnet-sdk-3.1")],-1),we=e("h4",{id:"macos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#macos","aria-hidden":"true"},"#"),t(" MacOS")],-1),Ee={href:"https://dotnet.microsoft.com/download/dotnet/3.1%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85**%E6%9C%80%E6%96%B0%E7%9A%84Asp.Net",target:"_blank",rel:"noopener noreferrer"},Se=r('<h3 id="填写配置信息" tabindex="-1"><a class="header-anchor" href="#填写配置信息" aria-hidden="true">#</a> 填写配置信息</h3><p>*<strong>站点拥有开放和私用两种模式，请根据自己的部署目的来选择对应的教程来阅读！* *配置文件是Deploy/Config.xml 务必打开并修改默认的管理员登录密码*</strong></p><h4 id="开放站点" tabindex="-1"><a class="header-anchor" href="#开放站点" aria-hidden="true">#</a> 开放站点</h4><p><em>开放站点必须使用全链路HTTPS，即便是使用了Nginx反向代理也必须设置HTTPS为启用状态</em></p><p><strong>Configuration.ShareSite.Enable</strong>设置为true</p><h5 id="https-ssl证书" tabindex="-1"><a class="header-anchor" href="#https-ssl证书" aria-hidden="true">#</a> HTTPS SSL证书</h5><h6 id="方式1-服务程序kestrel—-https-—外部internet" tabindex="-1"><a class="header-anchor" href="#方式1-服务程序kestrel—-https-—外部internet" aria-hidden="true">#</a> 方式1：服务程序Kestrel—(HTTPS)—外部Internet</h6><p><em>准备一个PFX格式的SSL证书文件，放置在Deploy文件夹中</em></p><p><strong>Configuration.HTTPS.Enable</strong>设置为true <strong>Configuration.HTTPS.Certificate</strong>设置为PFX文件的名称带后缀名 <strong>Configuration.HTTPS.Password</strong>设置为PFX文件的密码</p><h6 id="方式2-服务程序kestrel—-https-localhost-—nginx-iis-apache—-https-外部访问域名-—外部internet" tabindex="-1"><a class="header-anchor" href="#方式2-服务程序kestrel—-https-localhost-—nginx-iis-apache—-https-外部访问域名-—外部internet" aria-hidden="true">#</a> 方式2：服务程序Kestrel—(HTTPS localhost)—Nginx/IIS/Apache—(HTTPS 外部访问域名)—外部Internet</h6><p><em>反向代理服务器部分请自行配置</em></p><p>执行下列两个命令 以创建localhsot HTTPS证书 该证书时效为1年 <code>dotnet dev-certs https --clean</code><code>dotnet dev-certs https --trust</code></p><p><strong>Configuration.HTTPS.Enable</strong>设置为true <strong>Configuration.HTTPS.Certificate</strong>设置为空（什么都不要填） <strong>Configuration.HTTPS.Password</strong>设置为空（什么都不要填）</p><h5 id="microsoft-oauth" tabindex="-1"><a class="header-anchor" href="#microsoft-oauth" aria-hidden="true">#</a> Microsoft OAuth</h5><h5 id="github-oauth" tabindex="-1"><a class="header-anchor" href="#github-oauth" aria-hidden="true">#</a> Github OAuth</h5><h5 id="smtp邮件服务" tabindex="-1"><a class="header-anchor" href="#smtp邮件服务" aria-hidden="true">#</a> SMTP邮件服务</h5><p><em>准备一个可以使用SMTP服务发信的邮箱</em></p>',17),ye=e("strong",null,"Configuration.ShareSite.SMTP.Email",-1),ze=e("strong",null,"Configuration.ShareSite.SMTP.Password",-1),ve=e("strong",null,"Configuration.ShareSite.SMTP.Host",-1),Ce={href:"http://xn--Outlooksmtp-n68qh3ew6ck78eimyb.office365.com",target:"_blank",rel:"noopener noreferrer"},Xe=r('<h4 id="私用" tabindex="-1"><a class="header-anchor" href="#私用" aria-hidden="true">#</a> 私用</h4><p><em>在私用模式下不用准备任何配置信息，填写好登录密码端口即可使用！</em></p><h5 id="启用https-选配" tabindex="-1"><a class="header-anchor" href="#启用https-选配" aria-hidden="true">#</a> 启用HTTPS（选配）</h5><p><em>若要启用HTTPS请在下面选择一种合适的方式来实现</em></p><h6 id="方式1-服务程序kestrel—-https-—外部internet-1" tabindex="-1"><a class="header-anchor" href="#方式1-服务程序kestrel—-https-—外部internet-1" aria-hidden="true">#</a> 方式1：服务程序Kestrel—(HTTPS)—外部Internet</h6><p><em>准备一个PFX格式的SSL证书文件，放置在Deploy文件夹中</em></p><p><strong>Configuration.HTTPS.Enable</strong>设置为true <strong>Configuration.HTTPS.Certificate</strong>设置为PFX文件的名称带后缀名 <strong>Configuration.HTTPS.Password</strong>设置为PFX文件的密码</p><h6 id="方式2-服务程序kestrel—-http-—nginx-iis-apache—-https-外部访问域名-—外部internet" tabindex="-1"><a class="header-anchor" href="#方式2-服务程序kestrel—-http-—nginx-iis-apache—-https-外部访问域名-—外部internet" aria-hidden="true">#</a> 方式2：服务程序Kestrel—(HTTP)—Nginx/IIS/Apache—(HTTPS 外部访问域名)—外部Internet</h6><p><em>反向代理服务器部分请自行配置</em></p><p><strong>Configuration.HTTPS.Enable</strong>设置为false</p><h3 id="启动服务程序" tabindex="-1"><a class="header-anchor" href="#启动服务程序" aria-hidden="true">#</a> 启动服务程序</h3><p>在任何系统下，打开命令行定位到程序目录 运行<code>dotnet Microsoft365_E5_Renew_X.dll</code>命令即可启动</p><h3 id="管理员登录" tabindex="-1"><a class="header-anchor" href="#管理员登录" aria-hidden="true">#</a> 管理员登录</h3><h4 id="非oauth后台登录-开放或私享部署皆可用" tabindex="-1"><a class="header-anchor" href="#非oauth后台登录-开放或私享部署皆可用" aria-hidden="true">#</a> 非OAuth后台登录（开放或私享部署皆可用）</h4><p>管理员登录路由 <code>/Admin/Login</code> 默认密码在配置文件Deploy/Config.xml中更改</p><h4 id="oauth认证登录-仅开放部署可用" tabindex="-1"><a class="header-anchor" href="#oauth认证登录-仅开放部署可用" aria-hidden="true">#</a> OAuth认证登录（仅开放部署可用）</h4><h5 id="设置管理员oauth登录的oauthid" tabindex="-1"><a class="header-anchor" href="#设置管理员oauth登录的oauthid" aria-hidden="true">#</a> 设置管理员OAuth登录的OAuthID</h5><p>使用想要关联的OAuth账号（Microsoft/Github）在任意站点登录/注册均可看到此账号的OAuthID,记录此ID</p><p>通过管理员密码登录自己的站点：管理员功能-用户列表 找到管理员账户 点击“编辑”按钮填写记录的OAuthID 保存</p><p>直接在主登录页面使用与管理员账户关联的OAuth账号登录即可</p>',20);function De(Me,He){const a=d("ExternalLinkIcon");return s(),i("div",null,[h,e("ul",null,[e("li",null,[c,t("："),e("a",p,[t("使用Asp.Net"),n(a)]),t(" Core 作为跨平台框架增适用于 "),g]),u]),_,e("p",null,[e("a",m,[f,n(a)])]),e("p",null,[e("a",b,[k,n(a)])]),e("p",null,[e("a",I,[A,n(a)])]),x,e("p",null,[e("a",P,[T,n(a)])]),e("p",null,[e("a",w,[E,n(a)])]),e("p",null,[e("a",S,[y,n(a)])]),e("p",null,[e("a",z,[v,n(a)])]),e("p",null,[e("a",C,[X,n(a)])]),e("p",null,[e("a",D,[M,n(a)])]),e("p",null,[e("a",H,[F,n(a)])]),N,B,e("ol",null,[e("li",null,[e("a",O,[t("点击登录 Azure"),n(a)]),t("或"),e("a",L,[t("点击直接进入Azure应用注册"),n(a)]),t("，登录账号使用申请到的Microsoft 365 E5的"),R,t("（账户名类似XXXX@YYYY.onmicrosoft.com格式）。 2.登录完成后点击右上角的“门户”按钮进入Azure管理中心，在搜索栏内输入“应用注册”，点击进入"),e("a",U,[t("（若应用注册搜索不到请点击此处直接进入）"),n(a)]),t("。 "),q,t(" 3.单击“新注册”按钮 "),G,t(" 4.配置应用 应用名称随意写、注意可访问性选项选择最后一项、重定向URL暂时不填 、完成后点击注册 "),K])]),V,e("p",null,[t("1.先点击“概述”，然后点击“添加重定向URL”，进入重定向URL配置界面，"),W,t("。 "),Y,t(" 2.点击“添加平台”，再点击“移动和桌面应用程序”， "),Q,t(" 3.继续勾选中第一个URL，最后点击底部的“配置”，该URL为“"),e("a",Z,[t("https://login.microsoftonline.com/common/oauth2/nativeclient”也可手动添加。"),n(a)]),j,t(" 4.配置默认客户端类型将应用程序视为公共客户端 点击切换按钮为“是” ，最后点击“保存”按钮保存。 "),$]),J,e("p",null,[e("a",ee,[te,n(a)])]),e("p",null,[e("a",ae,[ne,n(a)]),e("a",re,[oe,n(a)])]),se,e("p",null,[e("a",ie,[de,n(a)]),e("a",le,[he,n(a)]),e("a",ce,[pe,n(a)])]),ge,ue,e("p",null,[e("em",null,[t("以下示例可能不完全包含全部操作系统，但无论是哪种系统都要安装 "),e("strong",null,[e("a",_e,[t("Asp.Net"),n(a)]),t(" Core 3.1 SDK")]),t("支持包，服务程序运行依赖于这个包也只依赖这一个包，只要成功安装了"),e("strong",null,[e("a",me,[t("Asp.Net"),n(a)]),t(" Core 3.1 SDK")]),t("支持包，服务程序就可以正常运行！")]),t(" 详情请参阅"),e("a",fe,[t("在 Windows、Linux 和 macOS 上安装 .NET"),n(a)])]),be,e("p",null,[t("前往"),e("a",ke,[t("https://dotnet.microsoft.com/download/dotnet/3.1下载安装**最新的Asp.Net"),n(a)]),t(" Core 3.1 SDK** 安装包")]),Ie,e("p",null,[t("详情请参阅"),e("a",Ae,[t("在 Ubuntu 上安装 .NET SDK 或 .NET 运行时"),n(a)])]),xe,e("p",null,[t("详情请参阅"),e("a",Pe,[t("在 CentOS 上安装 .NET SDK 或 .NET 运行时"),n(a)])]),Te,we,e("p",null,[t("前往"),e("a",Ee,[t("https://dotnet.microsoft.com/download/dotnet/3.1下载安装**最新的Asp.Net"),n(a)]),t(" Core 3.1 SDK** 安装包")]),Se,e("p",null,[ye,t("设置为 发件人邮箱地址 "),ze,t("设置为 邮箱密钥 "),ve,t("设置为 发件人邮箱的SMTP服务器地址 ("),e("a",Ce,[t("以Outlook为例子是smtp.office365.com"),n(a)]),t(")")]),Xe])}const Ne=o(l,[["render",De],["__file","Microsoft-365-E5-RenewX.html.vue"]]);export{Ne as default};