import{_ as r,V as l,W as d,X as e,Y as t,$ as o,Z as n,E as i}from"./framework-debd98b7.js";const s={},h=n('<h1 id="e5-调用api续订程序-microsoft-365-e5-renew-plus" tabindex="-1"><a class="header-anchor" href="#e5-调用api续订程序-microsoft-365-e5-renew-plus" aria-hidden="true">#</a> E5 调用API续订程序：Microsoft 365 E5 Renew Plus</h1><h2 id="microsoft-365-e5-renew-plus的由来" tabindex="-1"><a class="header-anchor" href="#microsoft-365-e5-renew-plus的由来" aria-hidden="true">#</a> Microsoft 365 E5 Renew Plus的由来</h2><p>Microsoft 365 E5 Renew Plus为Microsoft 365 E5 Renew的升级版，其功能性，易用性，美观程度上都要强于旧版。</p><h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2><ul><li><strong>支持开机自启动后台调用</strong>：使用简单方便，无需购买服务器部署，本地应用程序即开即用</li><li><strong>两种可选的调用权限</strong>：用户未登录作为守护程序调用(需要客户端密码)、程序以登录用户身份直接调用(需要账户密码)</li><li><strong>自动配置API权限</strong>：登录调用的API权限支持由程序自动配置</li><li><strong>API种类齐全</strong>：43个可选的Microsoft Graph REST API Beta中的API(未来可能会继续添加)</li><li><strong>完全随机的API选用模式</strong>：从已选定的API序列中随机抽取一个或几个进行调用（个数和API随机）</li><li><strong>完全随机的API调用顺序</strong>：每轮API的调用先后顺序随机</li><li><strong>完全随机的API内容(仅部分API支持)</strong>：POST写类型的API的上传内容随机</li><li><strong>完全随机的API调用时间间隔</strong>：随机区段500s-86400s自定义</li><li><strong>每日工作时间自定义</strong>：在日常工作时间进行调用，适用于从不关机重启的服务器设备</li><li><strong>每周工作日自定义</strong>：在每周的工作日进行调用，适用于从不关机重启的服务器设备</li><li><strong>运行智能暂停</strong>：防止因持续在错误配置下运行而导致的账户封禁</li><li><strong>运行配置自动保存</strong>：可保存运行配置，无需反复设置</li><li><strong>无限制账号个数</strong>：理论上允许无限制个数账号后台自动调用</li><li><strong>支持自定义客户端密钥</strong>：允许非登录调用使用自定义密钥</li><li><strong>自定义美化界面</strong>：支持自定义背景图片（半透明度以及毛玻璃效果）、亚克力背景</li></ul><h2 id="主界面" tabindex="-1"><a class="header-anchor" href="#主界面" aria-hidden="true">#</a> 主界面</h2><figure><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/b23cb7e4945747fca6e88b5c36e80e08.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><figure><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/185cfc81a55746eb8d915e6f0923d1ca.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="运行结果查看" tabindex="-1"><a class="header-anchor" href="#运行结果查看" aria-hidden="true">#</a> 运行结果查看</h2><figure><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210323150719810.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h1 id="入群须知" tabindex="-1"><a class="header-anchor" href="#入群须知" aria-hidden="true">#</a> <strong>入群须知</strong></h1>',11),c=e("li",null,[e("strong",null,"使用本系列产品只是增加E5续订概率，并不能保证100%续订成功")],-1),g=e("li",null,[e("strong",null,"续订操作有些许技术门槛，且需要具备一定的自学能力")],-1),p={href:"https://sundayrx.coding.net/s/78f69c8a-8620-4d53-bad2-c4b365fed1a0",target:"_blank",rel:"noopener noreferrer"},u={href:"https://sundayrx.coding.net/s/78f69c8a-8620-4d53-bad2-c4b365fed1a0/4",target:"_blank",rel:"noopener noreferrer"},_=e("h4",{id:"qq交流群-254058945",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#qq交流群-254058945","aria-hidden":"true"},"#"),t(),e("strong",null,"QQ交流群：254058945")],-1),m={id:"tg交流群-https-t-me-ms365e5renew",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#tg交流群-https-t-me-ms365e5renew","aria-hidden":"true"},"#",-1),b={href:"https://t.me/MS365E5Renew",target:"_blank",rel:"noopener noreferrer"},I=e("h1",{id:"软件下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#软件下载","aria-hidden":"true"},"#"),t(" 软件下载")],-1),A=e("h3",{id:"受支持的操作系统及运行环境安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#受支持的操作系统及运行环境安装","aria-hidden":"true"},"#"),t(" 受支持的操作系统及运行环境安装")],-1),x=e("thead",null,[e("tr",null,[e("th",null,"操作系统"),e("th",null,"版本"),e("th",null,"CPU架构"),e("th",null,".NET 6.0 （必选）"),e("th",null,"WebView 2（可选）"),e("th",null,"补丁（必选）")])],-1),y=e("td",null,"Windows Client",-1),P={href:"https://docs.microsoft.com/zh-cn/troubleshoot/windows-client/windows-7-eos-faq/windows-7-extended-security-updates-faq",target:"_blank",rel:"noopener noreferrer"},z=e("td",null,"x64",-1),w={href:"https://dotnet.microsoft.com/download/dotnet/6.0/runtime",target:"_blank",rel:"noopener noreferrer"},R={href:"https://go.microsoft.com/fwlink/p/?LinkId=2124703",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.simplix.info/update7/",target:"_blank",rel:"noopener noreferrer"},E=e("td",null,"Windows 10 Client",-1),M=e("td",null,"Version 1607+",-1),B=e("td",null,"Arm64、x64",-1),V={href:"https://dotnet.microsoft.com/download/dotnet/6.0/runtime",target:"_blank",rel:"noopener noreferrer"},D={href:"https://go.microsoft.com/fwlink/p/?LinkId=2124703",target:"_blank",rel:"noopener noreferrer"},v=e("td",null,"不需要",-1),q=e("td",null,"Windows 11 Client",-1),X=e("td",null,"无限制",-1),S=e("td",null,"Arm64、x64",-1),W={href:"https://dotnet.microsoft.com/download/dotnet/6.0/runtime",target:"_blank",rel:"noopener noreferrer"},L=e("td",null,"不需要",-1),N=e("td",null,"不需要",-1),T=e("td",null,"Windows Server",-1),U=e("td",null,"Version 2012+",-1),F=e("td",null,"x64",-1),C={href:"https://dotnet.microsoft.com/download/dotnet/6.0/runtime",target:"_blank",rel:"noopener noreferrer"},O={href:"https://go.microsoft.com/fwlink/p/?LinkId=2124703",target:"_blank",rel:"noopener noreferrer"},G=e("td",null,"不需要",-1),Y=e("h3",{id:"各版本下载地址-建议添加白名单运行",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#各版本下载地址-建议添加白名单运行","aria-hidden":"true"},"#"),t(" 各版本下载地址（建议添加白名单运行）")],-1),j=e("thead",null,[e("tr",null,[e("th",null,"软件版本"),e("th",null,"文件说明"),e("th",null,"LanZou"),e("th",null,"OneDrive"),e("th",null,"杀软报告")])],-1),Z=e("td",null,[e("strong",null,"包含框架(推荐)")],-1),H=e("td",null,"无需额外安装运行环境，可直接运行",-1),Q={href:"https://sundayrx.lanzouq.com/2R2AByh83333",target:"_blank",rel:"noopener noreferrer"},J=e("strong",null,"下载",-1),K={href:"https://sundayrx-my.sharepoint.com/:u:/g/personal/api1_sundayrx_onmicrosoft_com/EbjsV4mOxBlBoE39mBxFpqsBk51BF4y_T4Cs0OB4hV7OsQ?e=HGIlhE",target:"_blank",rel:"noopener noreferrer"},$={href:"https://www.virustotal.com/gui/file/80e435ef79dbd3869e00d5515c4240237d40c598cd50519fd97184a78889512f",target:"_blank",rel:"noopener noreferrer"},ee=e("td",null,"普通版本",-1),te=e("td",null,"需要安装 .NET 6 Desktop Runtime x64",-1),ae={href:"https://sundayrx.lanzoui.com/vqTrXlR5LrWjP3F",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://sundayrx-my.sharepoint.com/:u:/g/personal/api1_sundayrx_onmicrosoft_com/EbI_I-ohJ4BCuK821xnIoz0BTUBFHPZs3whXbVW06YLPfQ?e=vPozqH",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://www.virustotal.com/gui/file/80e435ef79dbd3869e00d5515c4240237d40c598cd50519fd97184a78889512f",target:"_blank",rel:"noopener noreferrer"},re=e("td",null,"历史版本(弃用)",-1),le=e("td",null,"更兼容Windows 7，已停止更新",-1),de={href:"https://sundayrx.lanzouq.com/2R2AByh8333",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://sundayrx-my.sharepoint.com/:u:/g/personal/api1_sundayrx_onmicrosoft_com/EayqKNMm9IFMgSVVcNtTWJABAnZrViM3cHrthqP6VG6c2w?e=v9Zetz",target:"_blank",rel:"noopener noreferrer"},se={href:"https://www.virustotal.com/gui/file/80e435ef79dbd3869e00d5515c4240237d40c598cd50519fd97184a78889512f",target:"_blank",rel:"noopener noreferrer"},he=n('<h1 id="使用教程-请勿开启账号的双重验证功能" tabindex="-1"><a class="header-anchor" href="#使用教程-请勿开启账号的双重验证功能" aria-hidden="true">#</a> 使用教程**(请勿开启账号的双重验证功能)**</h1><h2 id="_0-如何导入旧版本程序中的账号信息-老用户升级用-新用户请无视" tabindex="-1"><a class="header-anchor" href="#_0-如何导入旧版本程序中的账号信息-老用户升级用-新用户请无视" aria-hidden="true">#</a> 0 如何导入旧版本程序中的账号信息？（老用户升级用 新用户请无视）</h2><h3 id="_0-1-复制旧版本程序账户信息" tabindex="-1"><a class="header-anchor" href="#_0-1-复制旧版本程序账户信息" aria-hidden="true">#</a> 0.1 复制旧版本程序账户信息</h3><p>打开旧版本程序根目录下的Account.txt文件，依照每行复制一个账号信息（不支持多行识别）。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210323143621396.png" alt="图片" loading="lazy"></p><h3 id="_0-2-导入账户信息到新版本程序中" tabindex="-1"><a class="header-anchor" href="#_0-2-导入账户信息到新版本程序中" aria-hidden="true">#</a> 0.2 导入账户信息到新版本程序中</h3><p>打开新版本程序点击“开始运行”-“添加账号”，在弹出的“添加账号”窗口中找到右上角的剪切板图标，点击后程序会自动识别复制的账号信息，如果复制的内容没有错误程序会自动识别调用类型并填充所有空白项，检查无误后单击“确定”按钮完成一个账号信息的导入。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210323143246326.png" alt="图片" loading="lazy"></p><h2 id="_1-注册azure应用程序" tabindex="-1"><a class="header-anchor" href="#_1-注册azure应用程序" aria-hidden="true">#</a> 1 注册Azure应用程序</h2><h3 id="_1-1-应用注册" tabindex="-1"><a class="header-anchor" href="#_1-1-应用注册" aria-hidden="true">#</a> 1.1 应用注册</h3>',8),ce={href:"https://portal.azure.com/#home",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},pe=e("strong",null,"管理员账户",-1),ue={href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},_e=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618170032256.png",alt:"图片",loading:"lazy"},null,-1),me=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061817051341.png",alt:"图片",loading:"lazy"},null,-1),fe=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618170801323.png",alt:"图片",loading:"lazy"},null,-1),be=e("h3",{id:"_1-2-配置应用重定向url-身份验证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-2-配置应用重定向url-身份验证","aria-hidden":"true"},"#"),t(" 1.2 配置应用重定向URL（身份验证）")],-1),Ie=e("strong",null,'下图中的应用程序(客户端)ID即为"客户端ID"',-1),Ae=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061817121972.png",alt:"图片",loading:"lazy"},null,-1),xe=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171501396.png",alt:"图片",loading:"lazy"},null,-1),ye={href:"https://login.microsoftonline.com/common/oauth2/nativeclient%E2%80%9D%E4%B9%9F%E5%8F%AF%E6%89%8B%E5%8A%A8%E6%B7%BB%E5%8A%A0%E3%80%82",target:"_blank",rel:"noopener noreferrer"},Pe=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171651338.png",alt:"图片",loading:"lazy"},null,-1),ze=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171850779.png",alt:"图片",loading:"lazy"},null,-1),we=n('<h2 id="_2-配置应用程序的api权限-重要" tabindex="-1"><a class="header-anchor" href="#_2-配置应用程序的api权限-重要" aria-hidden="true">#</a> 2 配置应用程序的API权限（重要）</h2><p><strong>小白提示：建议选择“委托的权限(用户登录)”该权限类型，调用API较多，操作步骤较少简单粗暴，调用成功几率高</strong></p><p>注册的应用程序API权限类型有两种，其主要区别如下表所示：</p><table><thead><tr><th>权限类型</th><th><strong>委托的权限(用户登录)</strong></th><th><strong>应用程序权限(非用户登录)</strong></th></tr></thead><tbody><tr><td>官方释义</td><td>应用程序必须以登录用户身份访问API</td><td>应用程序在用户未登录的情况下作为后台服务或守护程序运行</td></tr><tr><td>需要的信息</td><td>账户名称+账户密码+应用程序(客户端)ID</td><td>账户名称+客户端机密+应用程序(客户端)ID</td></tr><tr><td>功能影响</td><td>程序中所有API均可调用</td><td>部分API权限受限无法调用(官方限制)</td></tr><tr><td>API权限配置</td><td>可由程序自动配置添加API权限</td><td>必须手动配置API权限</td></tr><tr><td>程序颜色标识</td><td>蓝色</td><td>深青色</td></tr></tbody></table><p>根据所选的API权限类型在：<strong>2.1 选择“委托的权限(用户登录)”类型的API</strong>或者<strong>2.2 选择“应用程序权限(非用户登录)”类型的API</strong>中选择性阅读。</p><h3 id="_2-1-选择-委托的权限-用户登录-类型的api" tabindex="-1"><a class="header-anchor" href="#_2-1-选择-委托的权限-用户登录-类型的api" aria-hidden="true">#</a> 2.1 选择“委托的权限(用户登录)”类型的API</h3><h4 id="_2-1-1-使用程序自动请求配置api权限" tabindex="-1"><a class="header-anchor" href="#_2-1-1-使用程序自动请求配置api权限" aria-hidden="true">#</a> 2.1.1 使用程序自动请求配置API权限</h4><p>1.点击“添加账号”，API调用方式选择“登陆调用”，正确填写“MS365 E5账号”和“应用程序（客户端）ID”后点击“启动自动授权”。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210308150608437.png" alt="图片" loading="lazy"></p><p>2.在弹出的登陆页面中输入你的管理员账户名和密码登录（<strong>该账户必须为全局管理员账户且拥有该客户端ID的控制权限</strong>），登录成功时弹出“请求征得许可界面”，滚动到页面最底部勾选“代表组织同意”，最后点击“接受”。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200628135742984.png" alt="图片" loading="lazy"> 3.判断是否添加API权限成功：首先程序提示授权成功，其次用管理员账户登录Azure查看应用的API权限，发现所有需求的权限全部添加或可以成功调用均视为已添加成功。 ng) <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210323142238814.png" alt="图片" loading="lazy"></p><h4 id="_2-1-2-手动配置api权限" tabindex="-1"><a class="header-anchor" href="#_2-1-2-手动配置api权限" aria-hidden="true">#</a> 2.1.2 手动配置API权限</h4><p>1.点击“API权限”-“添加权限”-“Microsoft Graph” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061819283823.png" alt="图片" loading="lazy"> 2.选择“委托的权限”<img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172538991.png" alt="图片" loading="lazy"> 3.根据下方列出的API权限需求表来勾选所对应的API权限，全部选择完成后点击&quot;添加权限&quot;。</p><p><strong>BookingsAppointment.ReadWrite.All; Calendars.Read; Contacts.Read; Directory.Read.All; Files.Read.All; Files.ReadWrite.All; Group.Read.All; Mail.Read; Mail.Send; MailboxSettings.Read; Notes.Read.All; People.Read.All; Presence.Read.All; Sites.Read.All; Tasks.ReadWrite; User.Read.All;</strong></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172627969.png" alt="图片" loading="lazy"> 添加完成的效果如图 <strong>如果没有“代表XXX授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用</strong><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201112111140479.png" alt="图片" loading="lazy"> 4.最后点击代表XXX授予管理员同意,对话框选择“是”（该图包含了当前程序“委托的权限(用户登录)”全部API所需要的权限)。</p><figure><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201112110505347.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_2-2-选择-应用程序权限-非用户登录-类型的api" tabindex="-1"><a class="header-anchor" href="#_2-2-选择-应用程序权限-非用户登录-类型的api" aria-hidden="true">#</a> 2.2 选择“应用程序权限(非用户登录)”类型的API</h3><h4 id="_2-2-1-手动配置api权限" tabindex="-1"><a class="header-anchor" href="#_2-2-1-手动配置api权限" aria-hidden="true">#</a> 2.2.1 手动配置API权限</h4><p>1.点击“API权限”-“添加权限”-“Microsoft Graph” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061819283823-165380581365141.png" alt="图片" loading="lazy"> 2.选择“应用程序权限” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120027971.png" alt="图片" loading="lazy"> 3.根据程序中列出的API权限需求表来勾选所对应的API权限，全部选择完成后点击&quot;添加权限&quot;。 <strong>Calendars.Read; Contacts.Read; Directory.Read.All; Files.Read.All; Files.ReadWrite.All; Mail.Read; Mail.Send; MailboxSettings.Read; Notes.Read.All; Sites.Read.All; User.Read.All;</strong><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172627969-165380581693146.png" alt="图片" loading="lazy"> 添加完成的效果如图 <strong>如果没有“代表XXX授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用</strong><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120623311.png" alt="图片" loading="lazy"> 4.最后点击代表XXX授予管理员同意,对话框选择“是”（该图包含了当前程序“应用程序权限(非用户登录)”全部API所需要的权限）。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120818260.png" alt="图片" loading="lazy"></p><h4 id="_2-2-2-创建客户端密码" tabindex="-1"><a class="header-anchor" href="#_2-2-2-创建客户端密码" aria-hidden="true">#</a> 2.2.2 创建客户端密码</h4><p>1.点击“证书密码”-“新客户端密码”-“24个月”-“添加” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210609101116972.png" alt="图片" loading="lazy"></p><p>2.点击“值”该列中的“复制”（不要复制&quot;ID&quot;列中的值），并立即将该密码保存至电脑，<strong>保存的值即为“客户端密码”</strong>， 注：该值必须立即保存，退出该页面后将永远无法查看。 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020120711360840.jpeg" alt="图片" loading="lazy"></p><h2 id="_3-使用程序进行api调用" tabindex="-1"><a class="header-anchor" href="#_3-使用程序进行api调用" aria-hidden="true">#</a> 3 使用程序进行API调用</h2><h5 id="创建一个新的e5子账户-可选步骤" tabindex="-1"><a class="header-anchor" href="#创建一个新的e5子账户-可选步骤" aria-hidden="true">#</a> 创建一个新的E5子账户(可选步骤)</h5><p>登入E5管理员账户进入管理员界面，创建一个新的子账户，使用这个子账户登录程序调用API。 为什么建议这样做：Microsoft 365 E5 Renew Plus中的部分API包含了写操作，例如Onedrive的API，这些API在随机模式下会生成大量垃圾邮件和文件（虽然单独为此设立了一个文件夹），部分人可能会对此行为非常介意，而且程序频繁的读写可能会对您正常使用账户造成影响，因此不建议使用管理员账户登录。</p><h3 id="_3-1-添加一个账户" tabindex="-1"><a class="header-anchor" href="#_3-1-添加一个账户" aria-hidden="true">#</a> 3.1 添加一个账户</h3><p>点击“开始运行”-“添加账号” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/a4451a28afdb4b01b18f566feaf07759.png" alt="图片" loading="lazy"></p><p>这里可以切换API调用方式但也需要更改对应的填写内容</p><p>登录调用方式填写 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210307154000125.png" alt="图片" loading="lazy"> 非登录调用方式填写 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210307154255163.png" alt="图片" loading="lazy"></p><p>最后点击确定 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/202103071542145.png" alt="图片" loading="lazy"></p><h3 id="_3-2-开始运行" tabindex="-1"><a class="header-anchor" href="#_3-2-开始运行" aria-hidden="true">#</a> 3.2 开始运行</h3><p>点击“开始运行” <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/60b549fee8464ba08722d38b4cb999c0.png" alt="图片" loading="lazy"></p><h1 id="写在最后面" tabindex="-1"><a class="header-anchor" href="#写在最后面" aria-hidden="true">#</a> 写在最后面</h1><h2 id="关闭e5账户登录双重验证" tabindex="-1"><a class="header-anchor" href="#关闭e5账户登录双重验证" aria-hidden="true">#</a> 关闭E5账户登录双重验证</h2>',32),Re={href:"https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx",target:"_blank",rel:"noopener noreferrer"},ke=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210519091511446.png",alt:"图片",loading:"lazy"},null,-1),Ee=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210519091736252.png",alt:"图片",loading:"lazy"},null,-1),Me=e("h2",{id:"关闭azure中api调用的双重验证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关闭azure中api调用的双重验证","aria-hidden":"true"},"#"),t(" 关闭Azure中API调用的双重验证")],-1),Be={href:"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview",target:"_blank",rel:"noopener noreferrer"},Ve=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201010153543698.png",alt:"图片",loading:"lazy"},null,-1),De=e("h2",{id:"查询续订剩余天数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#查询续订剩余天数","aria-hidden":"true"},"#"),t(" 查询续订剩余天数")],-1),ve={href:"https://developer.microsoft.com/zh-cn/microsoft-365/profile",target:"_blank",rel:"noopener noreferrer"},qe=n('<h2 id="关于续订" tabindex="-1"><a class="header-anchor" href="#关于续订" aria-hidden="true">#</a> 关于续订</h2><p>E5续订执行是微软统一的具有一定时间周期的续订，如果你的E5订阅剩余天数少于等于30天、并收到了未检测到开发活动的警告邮件且仪表盘显示标红文字“此订阅处于非活动状态且即将过期”，请不要慌张。根据微软客服官方说法是：“订阅只有在剩余最后1天才给续期”，然而根据众多E5账号的续订情况来统计，大部分账号是在少于30天续期的，极少欧洲人是在大于30天的时候续期。</p><p>本人E5账户收到过两次未活跃警告，微软客服解释说：这种警告邮件属于系统自动发送的(邮件会在剩余第30天的时候发送)，无需理会它，至于出现文字标红文字“此订阅处于非活动状态且即将过期”，也为系统自动提示，只要保证仪表盘上的文字标注为“<strong>可续订</strong> E5的订阅”就可以了，即便是真的过期了没有续上也是可以从仪表盘申诉的。</p><h3 id="仪表盘变化" tabindex="-1"><a class="header-anchor" href="#仪表盘变化" aria-hidden="true">#</a> 仪表盘变化</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020082317495235.png" alt="图片" loading="lazy"><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210129090340925.png" alt="图片" loading="lazy"></p><h3 id="续订邮件" tabindex="-1"><a class="header-anchor" href="#续订邮件" aria-hidden="true">#</a> 续订邮件</h3><p>第一次续订 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200820125542472.jpeg" alt="图片" loading="lazy"> 第二次续订 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201031134336350.png" alt="图片" loading="lazy"></p><h3 id="警告邮件" tabindex="-1"><a class="header-anchor" href="#警告邮件" aria-hidden="true">#</a> 警告邮件</h3><figure><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200820125531157.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>',9);function Xe(Se,We){const a=i("ExternalLinkIcon");return l(),d("div",null,[h,e("ul",null,[c,g,e("li",null,[e("strong",null,[t("每个人的时间都是宝贵的，遇到问题先查阅"),e("a",p,[t("帮助文档"),o(a)]),t("，实在无法解决时再发起提问("),e("a",u,[t("提问的艺术"),o(a)]),t(")")])])]),_,e("h4",m,[f,t(),e("strong",null,[t("TG交流群："),e("a",b,[t("https://t.me/MS365E5Renew"),o(a)])])]),I,A,e("table",null,[x,e("tbody",null,[e("tr",null,[y,e("td",null,[t("7 SP1("),e("a",P,[t("ESU"),o(a)]),t(") 、8.1")]),z,e("td",null,[e("a",w,[t("下载.Net 6.0 Desktop"),o(a)])]),e("td",null,[e("a",R,[t("下载WebView 2"),o(a)])]),e("td",null,[e("a",k,[t("下载ESU"),o(a)])])]),e("tr",null,[E,M,B,e("td",null,[e("a",V,[t("下载.Net 6.0 Desktop"),o(a)])]),e("td",null,[e("a",D,[t("下载WebView 2"),o(a)])]),v]),e("tr",null,[q,X,S,e("td",null,[e("a",W,[t("下载.Net 6.0 Desktop"),o(a)])]),L,N]),e("tr",null,[T,U,F,e("td",null,[e("a",C,[t("下载.Net 6.0 Desktop"),o(a)])]),e("td",null,[e("a",O,[t("下载WebView 2"),o(a)])]),G])])]),Y,e("table",null,[j,e("tbody",null,[e("tr",null,[Z,H,e("td",null,[e("a",Q,[J,o(a)])]),e("td",null,[e("a",K,[t("下载"),o(a)])]),e("td",null,[e("a",$,[t("VirusTotal"),o(a)])])]),e("tr",null,[ee,te,e("td",null,[e("a",ae,[t("下载"),o(a)])]),e("td",null,[e("a",oe,[t("下载"),o(a)])]),e("td",null,[e("a",ne,[t("VirusTotal"),o(a)])])]),e("tr",null,[re,le,e("td",null,[e("a",de,[t("下载"),o(a)])]),e("td",null,[e("a",ie,[t("下载"),o(a)])]),e("td",null,[e("a",se,[t("VirusTotal"),o(a)])])])])]),he,e("ol",null,[e("li",null,[e("a",ce,[t("点击登录 Azure"),o(a)]),t("或"),e("a",ge,[t("点击直接进入Azure应用注册"),o(a)]),t("，登录账号使用申请到的Microsoft 365 E5的"),pe,t("（账户名类似XXXX@YYYY.onmicrosoft.com格式）。 2.登录完成后点击右上角的“门户”按钮进入Azure管理中心，在搜索栏内输入“应用注册”，点击进入"),e("a",ue,[t("（若应用注册搜索不到请点击此处直接进入）"),o(a)]),t("。 "),_e,t(" 3.单击“新注册”按钮 "),me,t(" 4.配置应用 应用名称随意写、注意可访问性选项选择最后一项、重定向URL暂时不填 、完成后点击注册 "),fe])]),be,e("p",null,[t("1.先点击“概述”，然后点击“添加重定向URL”，进入重定向URL配置界面，"),Ie,t("。 "),Ae,t(" 2.点击“添加平台”，再点击“移动和桌面应用程序”， "),xe,t(" 3.继续勾选中第一个URL，最后点击底部的“配置”，该URL为“"),e("a",ye,[t("https://login.microsoftonline.com/common/oauth2/nativeclient”也可手动添加。"),o(a)]),Pe,t(" 4.配置默认客户端类型将应用程序视为公共客户端 点击切换按钮为“是” ，最后点击“保存”按钮保存。 "),ze]),we,e("p",null,[e("a",Re,[t("点击进入Office 365 E5账户多重身份验证管理"),o(a)]),t("，按照下图配置即可关闭E5账户登录的双重验证。 "),ke,Ee]),Me,e("p",null,[e("a",Be,[t("点击进入Azure Active Directory管理中心"),o(a)]),t("，按照下图配置即可关闭Azure中API调用的双重验证。 "),Ve]),De,e("p",null,[e("a",ve,[t("点击查询续订剩余天数(使用申请E5账号的账户登录)"),o(a)])]),qe])}const Ne=r(s,[["render",Xe],["__file","Microsoft-365-E5-RenewPlus.html.vue"]]);export{Ne as default};
