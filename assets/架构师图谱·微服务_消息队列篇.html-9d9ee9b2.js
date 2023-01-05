import{_ as n,V as r,W as s,X as e,$ as a,Y as t,Z as l,E as o}from"./framework-debd98b7.js";const p={},d=l('<h1 id="架构师图谱·微服务-消息队列篇" tabindex="-1"><a class="header-anchor" href="#架构师图谱·微服务-消息队列篇" aria-hidden="true">#</a> 架构师图谱·微服务&amp;消息队列篇</h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h2><p>“架构师图谱”是一个很宏大的命题，特别是优秀的架构师自身也是“由点到面再到图”，一点点成长积累起来，尝试写这系列文章的目的更多的是结合自身的一些经验和理解，来解读工程师和架构师所应具备的技能模型，这里会更偏向于后端技能，依赖于开源技术、云原生或者其他第三方服务。重点介绍一些技术栈、设计理念和适应场景，这些可以作为我们选型时的依据。所谓“架构即决策”，是在一个有约束的盒子中寻求最优解。这个有约束的盒子是团队经验、成本、资源、进度、业务所处阶段等编织、掺杂在一起的综合体。本质上无优劣，但是存在恰当的架构用在合适的软件系统中，而这些就是决策的结果。</p><h3 id="_1-1-序章" tabindex="-1"><a class="header-anchor" href="#_1-1-序章" aria-hidden="true">#</a> 1.1 序章</h3><p>一个技术图谱：</p>',5),c={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/uTools_1621160730437.png",target:"_blank",rel:"noopener noreferrer"},h=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/uTools_1621160730437.png",alt:"img",tabindex:"0",loading:"lazy"},null,-1),u=e("figcaption",null,"img",-1),g=e("p",null,"计划会分三个篇章来介绍：",-1),_=e("ol",null,[e("li",null,"微服务&消息队列篇：重点聚焦在微服务和常用的消息队列，包括相关的选型以及一些理论基础"),e("li",null,"数据库&分布式篇：主要集中在数据库、分布式（一致性/锁/缓存/发号/任务调度等）"),e("li",null,"尾篇：分享一些流媒体、Devops、项目管理、团队建设方向的一些经验")],-1),m=e("p",null,"完整的思维导图：",-1),b={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/ArchitectMap-2.png",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/ArchitectMap-2.png",alt:"img",tabindex:"0",loading:"lazy"},null,-1),k=e("figcaption",null,"img",-1),y=e("h2",{id:"_2-微服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-微服务","aria-hidden":"true"},"#"),t(" 2. 微服务")],-1),v=e("p",null,"谈到微服务，通常会和SOA、微内核等架构进行比较，不过SOA粗粒度服务、庞大的ESB，在互联网更注重敏捷交付的场景，落地较少。微内核架构和微服务架构没有本质上的区别，但是更多的面向插件化场景，在一些类似营销、风控、工作流、管线等场景，对应的微服务可以采用微内核架构。",-1),S=e("strong",null,"微服务",-1),P={href:"https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%9E%B6%E6%9E%84",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"},D=l('<p>微服务架构有别于更为传统的单体巨石服务，可将应用拆分成多个核心功能。每个功能都被称为一项服务，可以单独构建和部署。这也体现了可扩展的基本思想：将原本大一统的系统拆成多个小部分，扩展时只修改其中一部分，通过这种方式减少改动范围，降低改动风险。</p><p>微服务架构涵盖了服务的多个方面，包括理论基础、网关、通信协议以及服务注册/发现、可观察性等基础设施。</p><h3 id="_2-1-理论基础" tabindex="-1"><a class="header-anchor" href="#_2-1-理论基础" aria-hidden="true">#</a> 2.1 理论基础</h3><p>微服务的理论基础主要用来指导微服务架构设计、服务拆分，确定合适的服务粒度和边界。在做微服务之前我们首先要想明白我们现有系统面临什么样的问题，为什么需要微服务，随后才是怎么做。</p><p>微服务很多核心理念其实在半个世纪前的一篇文章中就被阐述过了，而且这篇文章中的很多论点在软件开发飞速发展的这半个世纪中竟然一再被验证，这就是康威定律（Conway’s Law）。在康威的这篇文章中，最有名的一句话就是：</p><blockquote><p>Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations. – Melvin Conway(1967)</p></blockquote><p>中文直译大概的意思就是：设计系统的组织，其产生的设计等同于组织之内、组织之间的沟通结构。 最初这篇文章只是描述作者自己的发现和总结，后来“人月神话”中，引用这个观点，并将其“吹捧”成现在熟知的“康威定律”，其中的一些核心观点可以概括如下：</p><ul><li>组织沟通方式决定系统设计，对于复杂的系统，聊设计就离不开聊人与人的沟通，解决好人与人的沟通问题，才能有一个好的系统设计</li><li>时间再多一件事情也不可能做的完美，但总有时间做完一件事情，这与架构设计的“简单、合适、演化”思维不谋而合</li><li>线型系统和线型组织架构间有潜在的异质同态特征，更直白的说，你想要什么样的系统，就搭建什么样的团队，定义好系统的边界和接口，团队内应该是自治的，这样将沟通成本维持在系统内部，每个子系统就会更加内聚</li><li>大的系统组织总是比小系统更倾向于分解，面对复杂的系统及组织，往往可以采用分而治之</li></ul><p>“康威定律”更多的阐述了影响微服务实施的一些软性因素，再具体到业务上，我们需要结合业务现状、复杂度、团队现状进行进一步的评估、分析，再采用合适的方式进行拆分。面向业务拆分，我们一般需要考虑：</p><ul><li>单体到微服务的拆分：从非核心服务到核心服务完成拆分，基础设施按照优先级进行落地。</li><li>粗粒度拆分微服务：按照质量（性能、复杂度、可用性）、交付频率拆分，重用现在的基础设施。</li><li>服务拆分的粒度：能够维持2-4个人维护一个微服务最佳，过少会导致没有备份，思维局限，过多也会使得每个人无法掌握服务所有细节，以及潜在较高的协作、交付成本。</li></ul><p>当我们的业务和组织架构复杂度比较高的时候，很多概念只从技术的角度很难去抽象。但是为了达到可复制，足够的抽象是必须的，越高层的抽象越稳定，越细节的东西越容易变化。因此我们需要把思考层次从代码细节、技术架构拉到业务层面。</p><p>我们不妨自上而下，建立起通用语言，通过对不同领域的建模，逐步确定领域范围和业务边界，这也就是领域驱动设计（DDD）。 DDD 是一种在面向高度复杂的软件系统时，关于如何去建模的方法论，它的关键点是根据系统的复杂程度建立合适的模型，DDD中的限界上下文也完美匹配了微服务的高内聚、低耦合特性，这也为我们微服务的划分提供了强有力的基础。</p><p>除了微服务，在平台和中台的建设上，我们也经常谈及DDD，平台是解决公共能力的复用问题，防止重复造轮子，中台则是“企业级能力的复用”，中台从业务和平台服务中不断抽象和聚合，建立领域模型，形成的一整套可复用的平台级解决方案，这点和DDD战略设计不谋而合。平台和中台建模之后，我们就需要通过DDD的架构设计和微服务完成系统架构，平台、中台和微服务可以说是DDD一个落地的最佳场景，这也是DDD逐渐火热的重要原因。</p><p>DDD实施的一般步骤是：</p><ul><li>进行战略设计，结合数据流向，上下文依赖，通过组合抽象的方式，逐渐形成一个较为完整的领域，这就是确定限界上下文和领域边界的过程</li><li>进行战术设计，进一步分析每个上下文内部，识别出哪些是实体，哪些是值对象，哪些是领域事件，对实体、值对象进行关联和聚合，划分出聚合的范畴和聚合根，为聚合根设计仓储，并思考实体或值对象的创建方式</li><li>进行架构设计，结合限界上下文拆分微服务，对服务内的代码进行分层、实现，在工程中实践领域模型，并在实践中检验模型的合理性，倒推模型中不足的地方并重构</li></ul><p>DDD并不是银弹，首先是团队对DDD的掌握程度以及领域专家（可以是研发、产品、测试等）的水平，一定程度上都会影响到DDD的落地，这里有几本关于DDD的书籍，由浅及深，非常推荐去阅读：</p>',16),q={href:"https://item.jd.com/12447082.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://item.jd.com/13131498.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://item.jd.com/11961038.html",target:"_blank",rel:"noopener noreferrer"},I=l('<p>其次，在一些新业务场景，本身就充满了很多的不确定性，一次性把边界划清楚并不是一件很容易的事。大家在一个进程里，调整起来会相对容易，然后让不同的限界上下文各自演化，等到了一定程度之后再考虑微服务也是一个不错的选择。</p><h3 id="_2-2-网关" tabindex="-1"><a class="header-anchor" href="#_2-2-网关" aria-hidden="true">#</a> 2.2 网关</h3><p>作为微服务的统一入口，也肩负着整个微服务的流量接入、管理、聚合、安全等，从服务分层的角度可以划分为接入网关和业务网关。</p><p><strong>接入网关</strong> 接入网关提供最基础的流量接入和安全防护能力，侧重于全局，与业务无关。</p><ul><li>域名&amp;DNS，作为服务的流量入口，对外通过域名和DNS提供服务，国内域名厂商一般都依托于共有云或被共有云厂商收购，用来完善自由的云生态，像阿里的万网，腾讯的DNSPod等，也有国外的aws，godaddy和neamcheap等，可以用作.me等国内无法托管或备案域名的管理，其次也可以借助DNS（HTTPDNS、EDNS）实现跨地域、运营商网络等负载均衡，实现异地多活、就近访问、容灾等。ENDS的跨地域和运营商网络，大部分DNS厂商也已经支持，可用性有保障，但是会丢失精准性，也要面临Cache、劫持问题，HTTPDNS可以很好的解决这些问题，但是可用性目前并不足够（阿里云4个9）。</li><li>负载均衡（LB），主要负责请求的转发代理，按机器负载来分配流量等，对外提供VIP，这里的负载可以宽泛的理解为系统的压力，可以用 CPU 负载来衡量，也可以用连接数、I/O 使用率、网卡吞吐量等来衡量。负载均衡器按服务层级来划分，除了前边提到的DNS，还有集群级别的硬件负载均衡，以及机器级别的软件负载均衡。 <ul><li>DNS/硬件负载均衡(F5/A10)主要用来应对海量用户的访问，中小量用户使用无疑会增加更多的维护和采购成本。</li><li>软件负载均衡可以选择自研或上云，LVS、Keepalived主要用于四层（IP+端口）的负载均衡，在L4（四层）的基础之上如果要实现应用层（域名/URL/用户会话）等的L7（7层）负载均衡，可以使用Nginx、Keepalived的组合。</li></ul></li><li>除此之外，网关也负责服务整体的安全防护，SSL，IPV6等。 <ul><li>安全防护目的是保护服务数据以及可用性，例如防范常见的DDOS/CC网络攻击，反爬虫，自定义访问控制，自研成本往往比较高，可以借助云上一系列的高防、防火墙服务。</li><li>SSL（TLS）用来提供外部https访问，https可以防止数据在传输过程中不被窃取、改变，确保数据的完整性，在支付或者用户登录等敏感数据场景，可以起到一定的保护作用，同时https页面对搜索引擎也比较友好。</li><li>IPV6，全球43亿IPV4地址已经在2019年年底耗尽，网信办在2018年开始就已经推行各大运营商、CDN厂商、互联网核心产品支持IPV6，我们公司之前也是试点之一。IPV6的支持只需要增加一条“AAAA”DNS记录，将域名解析到自持IPV6的IP/VIP即可。IPV4到IPV6由于存在兼容性等问题，一定是长期共存的，过渡方案可以采用IPV6代理（IPV6代理转发到IPV4服务）或者双栈（同时支持IPV6和IPV4）。</li></ul></li></ul><p><strong>业务网关</strong></p>',6),w={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_290de30d-bf31-4921-978c-2bd8b8f56be9.png",target:"_blank",rel:"noopener noreferrer"},T=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/企业微信截图_290de30d-bf31-4921-978c-2bd8b8f56be9.png",alt:"img",tabindex:"0",loading:"lazy"},null,-1),E=e("figcaption",null,"img",-1),C=l('<p>业务网关作为业务的最上层出口，一般承担起业务接入或者BFF的工作，例如基础的路由、鉴权、限流、熔断降级、服务聚合、插件化能力，并可以通过可视化界面管理网关配置。可选框架有基于openrestry的kong、apisix以及其他语言相关的spring cloud gateway、grpc-gateway等等，国内开源的goku、kratos、go-zero go框架，有很多比较有意思的组件实现，我们日常业务上也可以借鉴。</p><ul><li>鉴权，鉴权的目的是为了验证用户、请求等的有效性，例如用户身份鉴权（jwt/oauth2/cookie），请求鉴权（请求签名、请求加密），鉴权逻辑也花样繁多，大多需要基于业务定制化，通过网关插件能很好的集成进来。</li><li>限流，限流是为了做一定的流量控制，防止对系统产生过大压力从而影响整个服务。可以基于单台机器或整个集群限流（固定窗口、Quota预取），常见的方式有限制总量和限制速率，超过的则排队或丢弃，例如令牌桶（弹性）/漏桶（相对匀速）算法/BBR（依据系统吞吐等自适应）。</li><li>熔断，熔断作为服务断路器，可以防止应用程序重复尝试执行可能失败的操作，这样也能对整体链路起到保护作用。断路器内部会维护“打开”、“半打开”、“关闭”三种状态，来决定对请求的状态，同时结合降级策略提升服务的鲁棒性。常见的有hystrix/resilience4J/sentinel（hystrix虽然已停止更新，但现有功能已经能满足大多业务场景）。</li><li>降级，当限流、熔断、超时或系统故障发生时，通过丢弃一部分请求来减少系统的工作量，本质上是提供一种有损服务，常见的有，模块降级：UI、BFF，一模块挂，用另一模块数据；降级前移：下游服务 -&gt; 当前服务 -&gt; 存储 -&gt; 分布式缓存 -&gt; 本地缓存 -&gt; 网关 -&gt; CND -&gt; APP，在离用户更近、可用性更高的地方降级。</li><li>重试，大量网络IO，避免不了会出现因网络抖动，出现连接失败或者超时，重试可以提高请求的最终成功率，削平服务毛刺。但重试也有可能放大故障，以及一些上行接口要考虑接口的幂等性，所以与下游约定可重试的错误，限制单点重试、限制链路重试、异步任务可以结合退避策略（backoff）这些策略进行优雅的重试，同时也可以采用更加激进的“对冲请求”提前（tp99时间未响应时）发起重试请求，降低系统时延。</li><li>插件化，各个网关集成插件的方式尽不相同，但是目的都是为了集成技术人员编写的一些业务相关的通用能力，例如前边提到的身份鉴权、请求鉴权等等。另外作为业务网关插件，也可以编写一些基础业务（API鉴权、请求格式化）逻辑，直接透传请求到服务层，省去很多BFF和上下游对接的工作。</li><li>BFF，Backend For Frontend，可以按照业务逻辑，以串行、并行和分支等结构编排多个服务API，为服务提供聚合、适配、裁剪（只返回需要的字段）功能，核心是API的动态编排以满足日益增长的业务逻辑，降低前端与微服务之间的对接成本。BFF并不意味着只能由后端实现，也可以在前端通过GraphQL等API查询语言实现。</li></ul><h3 id="_2-3-协议" tabindex="-1"><a class="header-anchor" href="#_2-3-协议" aria-hidden="true">#</a> 2.3 协议</h3><p>服务间的通信方式是在采用微服务架构时需要做出一个最基本的决策，统一的协议标准也能大大降低服务的联调和维护成本。</p><ul><li>HTTP REST，REST更确切的讲是指的API设计风格，而不是协议标准。通常基于使用HTTP，URL，和JSON这些现有的广泛流行的协议和标准。符合REST设计风格的API称作RESTful API。编解码方式大多数情况下可以依据请求的Content-Type进行自适应。在实际应用中更多的是是伪REST API，例如用POST请求同时实现资源的增删改，或者为了请求的扩展性，资源的增删改查都使用POST JSON。</li><li>RPC，RPC协议描绘了客户端与服务端之间的点对点调用流程，包括RPC消息协议、序列化、通信等。可以基于tcp，也可以基于http。在实际应用中，还需要考虑服务的高可用、负载均衡等问题，所以产品级的 RPC 框架除了点对点的 RPC 协议的具体实现外，还应包括服务的发现与注册、提供服务的多台 Server 的负载均衡、服务的高可用等更多的功能。目前的 RPC 框架大致有两种不同的侧重方向，一种偏重于服务治理（Dubbo、Motan），另一种偏重于跨语言调用（Thrift/GRPC）。</li></ul><p>RPC vs HTTP REST优点</p><ul><li>更清晰的API定义，例如grpc协议的定义文件proto，自身就可以作为很好的API文档（协议即文档），日常开发中也可以把proto文件独立版本库或者放置在统一的pb管理平台，即方便协议版本、stub管理，也可以和swagger、yapi等api管理工具进行打通，做到一处定义，多处使用。</li><li>更好的传输效率，通过序列化和反序列化进一步压缩网络传输数据，不过序列化、反序列化也会有一定的性能损耗，protobuf可以说很好的兼顾了这两点。</li><li>更合适的容错机制，可以基于实际的业务场景，实现更合适的超时控制与异常重试机制，以应对网络抖动等对服务造成的影响。</li></ul><p>在一些特定场景，例如：OpenApi、BFF等，HTTP REST可以更大程度上降低外部团队的接入成本。并且RPC也有调试不便、多语言互通需要对应的SDK支持这些问题，各有利弊。综合考虑来看，除了一些特定场景，如果我们已经有相对完善的基础设施支撑（RPC框架、服务治理），RPC可以为一个更合适的选择。</p><h3 id="_2-4-服务注册-发现" tabindex="-1"><a class="header-anchor" href="#_2-4-服务注册-发现" aria-hidden="true">#</a> 2.4 服务注册/发现</h3><p>服务注册主要是通过将微服务的后端机器IP、端口、地域等信息注册起来，并结合一定的发现机制使客户端的请求能够直连具体的后端机器。从实现方式上可以分为服务端模式与客户端模式：</p>',10),B={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/Richardson-microservices-part4-3_server-side-pattern.png",target:"_blank",rel:"noopener noreferrer"},F=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/Richardson-microservices-part4-3_server-side-pattern.png",alt:"img",loading:"lazy"},null,-1),N={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/Richardson-microservices-part4-2_client-side-pattern.png",target:"_blank",rel:"noopener noreferrer"},L=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/Richardson-microservices-part4-2_client-side-pattern.png",alt:"img",loading:"lazy"},null,-1),O=l('<li><p>服务端模式注册与发现都由服务端完成，这样可以使客户端专注在自身的业务实现，但是由于依赖负载均衡器，也就是集中式的proxy，proxy需要维护双向连接，也很容易使自己成为系统瓶颈，可用性的高低直接决定了服务质量，并且DNS缓存机制也会导致故障发生时，迁移并不能及时完成。当然在服务量少，且负载均衡器有VIP的情况下，我们也可以不使用DNS。</p></li><li><p>客户端模式注册与发现由配置中心和客户端共同完成，客户端先通过服务发现获取到真实的后端节点，再与后端节点直接通信，通过去中心化的方式，可以避免出现双向链接等proxy模式的性能问题，但是可靠性很容易出现在配置中心上，并且客户端的也需要一定的接入成本。好在开源的已经有很成熟的架构方案与丰富的客户端SDK，例如etcd/zookeeper/consul，consul提供开箱即用的功能，etcd社区和接入易用性方面更优一些，他们之间的一些具体区别：</p><table><thead><tr><th style="text-align:left;">FEATURE</th><th style="text-align:left;">ETCD</th><th style="text-align:left;">ZOOKEEPER</th><th style="text-align:left;">CONSUL</th></tr></thead><tbody><tr><td style="text-align:left;">服务健康检查</td><td style="text-align:left;">连接心跳</td><td style="text-align:left;">连接心跳</td><td style="text-align:left;">心跳、内存、硬盘等</td></tr><tr><td style="text-align:left;">一致性</td><td style="text-align:left;">raft</td><td style="text-align:left;">paxos</td><td style="text-align:left;">raft</td></tr><tr><td style="text-align:left;">接口</td><td style="text-align:left;">http/grpc</td><td style="text-align:left;">客户端sdk（依赖较重）</td><td style="text-align:left;">http/dns</td></tr><tr><td style="text-align:left;">metrics</td><td style="text-align:left;">支持</td><td style="text-align:left;">不支持</td><td style="text-align:left;">支持</td></tr><tr><td style="text-align:left;">安全</td><td style="text-align:left;">https</td><td style="text-align:left;">acl</td><td style="text-align:left;">acl/https</td></tr><tr><td style="text-align:left;">kv存储</td><td style="text-align:left;">支持</td><td style="text-align:left;">支持</td><td style="text-align:left;">支持</td></tr></tbody></table></li>',2),V=e("h3",{id:"_2-5-配置中心",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-5-配置中心","aria-hidden":"true"},"#"),t(" 2.5 配置中心")],-1),z=e("p",null,"配置中心从使用场景来讲，一类是前边讲到的服务注册、发现和KV存储，例如etcd/zk/consul，在k8s场景下也可以通过configmap/secret将配置写入本地文件、环境变量或者共享的volume中，这样没有了中心服务的依赖和客户端的接入，可以实现一些老旧服务的无侵入式改造。但是作为配置中心，除了基础的配置数据，一些情况下还要开放给非开发人员（测试、运维、产品）使用，完善的控制台、权限管理、dashbord的支持，也非常重要，这类可以参考nacos（阿里开源）/apollo（携程开源）。nacos在读写性能上优于apollo，但是功能特性（例如权限管理）稍逊于apollo。",-1),K=e("h3",{id:"_2-6-可观测性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-6-可观测性","aria-hidden":"true"},"#"),t(" 2.6 可观测性")],-1),H=e("blockquote",null,[e("p",null,"在控制论中，可观测性是用系统输出到外部的信息来推断系统内部运运行状态的一种度量方式")],-1),M=e("p",null,"可观测性三大支柱围绕Tracing（链路追踪）、Logging（日志）和Metrics（度量）展开，这三个维度几乎涵盖了应用程序的各种表征行为，开发人员通过收集并查看这三个维度的数据时刻掌握应用程序的运行情况。很长一段时间，这三者是独立存在的，随着时间的推移，这三者已经相互关联，相辅相成。 可观测性，乍一看好像是在卖弄概念，微服务出现之前也有日志、指标、链路追踪这些，其实不然，而是随着微服务、云原生、容器这些技术的出现，服务间的调用链路变的越来越复杂，所以相比于微服务出现之前，会更强调服务的观测性，目标是能准确快速的度量当前服务的状态，当出现问题时能快速定位修复，要达到这些，就要去构建强大的观测系统，能够实现像统一观测协议，三合一平台，推出配套的工具，迁移接入等等。",-1),G={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/observability.jpg",target:"_blank",rel:"noopener noreferrer"},U=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/observability.jpg",alt:"img",tabindex:"0",loading:"lazy"},null,-1),Z=e("figcaption",null,"img",-1),j=l(`<h4 id="_2-6-1-链路追踪" tabindex="-1"><a class="header-anchor" href="#_2-6-1-链路追踪" aria-hidden="true">#</a> 2.6.1 链路追踪</h4><p>链路追踪为分布式应用的开发者提供了完整的调用链路还原、调用请求量统计、链路拓扑、应用依赖分析等工具，可以帮助开发者快速分析和诊断分布式应用架构下的性能瓶颈，提高微服务时代下的开发诊断效率以及系统的可观察性。 为了解决不同的分布式系统API不兼容的问题，诞生了OpenTracing规范，OpenTracing中的Trace可以被认为是由多个Spacn组成的DAG图。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Span A]  ←←←(the root span)
            |
     +------+------+
     |             |
 [Span B]      [Span C] ←←←(Span C 是 Span A 的孩子节点, ChildOf)
     |             |
 [Span D]      +---+-------+
               |           |
           [Span E]    [Span F] &gt;&gt;&gt; [Span G] &gt;&gt;&gt; [Span H]
                                       ↑
                                       ↑
                                       ↑
                         (Span G 在 Span F 后被调用, FollowsFrom)


––|–––––––|–––––––|–––––––|–––––––|–––––––|–––––––|–––––––|–&gt; time

 [Span A···················································]
   [Span B··············································]
      [Span D··········································]
    [Span C········································]
         [Span E·······]        [Span F··] [Span G··] [Span H··]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),J={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/uTools_1624193379569.png",target:"_blank",rel:"noopener noreferrer"},Q=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/uTools_1624193379569.png",alt:"img",loading:"lazy"},null,-1),W={href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/tailsamplingprocessor",target:"_blank",rel:"noopener noreferrer"},X=l('<h4 id="_2-6-2-日志" tabindex="-1"><a class="header-anchor" href="#_2-6-2-日志" aria-hidden="true">#</a> 2.6.2 日志</h4><p>服务间的链路日志能否帮助我们判断错误发生的具体位置，这类业务日志主要集中在访问日志/打点日志等等。随着大数据的兴起，我们对数据的分析解读能力越来越强，日志作为原始数据则体现出了更大的价值，例如用户的行为分析，反垃圾，舆情分析等等。</p><ul><li>业务日志：这类日志重点在于通过不同级别的日志，及时发现分析系统存在的异常，RFC 5424定义的8中日志级别: <ul><li>Emergency: system is unusable</li><li>Alert: action must be taken immediately</li><li>Critical: critical conditions</li><li>Error: error conditions</li><li>Warning: warning conditions</li><li>Notice: normal but significant condition</li><li>Informational: informational messages</li><li>Debug: debug-level messages</li></ul></li></ul><p>在实际使用过程中可能会对日志级别进行简化和调整，一般来讲Warning及以上的日志是需要重点关注的，需要做好及时的监控告警，Warning以下的日志也可以辅助问题的定位。 日志写入可以选择写入消息队列，也可以选择落地磁盘，将关心的结构化或非结构化日志、业务模块信息（如果是细粒度的微服务，可以选择将日志放同一模块收集），以及级别、时间（who、when、where、how、what）等要素正确的写入正确写入后再收集到日志服务。写入消息队列需要考虑消息队列的选型以及做好可用性和积压监控，写入磁盘需要考虑写入性能以及日志的切割清理，例如golang的zap+rotatelogs组合。日志收集的话，由于Logstash资源消耗相对比较大，虚拟机环境中可以使用filebeat来替代，更严苛的线上或容器环境，可以使用Fluentd/Fluentd Bit。日志最终汇总到ES和Kibana做展示，通过esalert定制告警策略。</p><p>在业务记录一些错误日志时，通常可以选择，在错误发生处附带堆栈信息；将error抛给调用者，在顶层打印日志，而非层层打印；错误降级时，选择性打印日志。</p><ul><li>大数据日志：大数据日志本质上也对应着我们一定的业务场景，但大多是海量日志、高吞吐量场景，所以对海量日志的收集和存储是较大的挑战。实现方案我们可以采用高吞吐量的流式中间件，例如kafka/plusar等，在结合流式处理(flink)或者批处理(spark)系统，将数据汇总到hadoop进行分析，这里涉及到的中间件和数据库可参考后续章节。</li></ul><h4 id="_2-6-3-指标" tabindex="-1"><a class="header-anchor" href="#_2-6-3-指标" aria-hidden="true">#</a> 2.6.3 指标</h4><p>指标是有关系统的离散的数据点，这些指标通常表示为计数或度量，并且通常在一段时间内进行汇总或计算，一般用来做基础的资源监控和业务监控：</p><ul><li>资源监控：CPU、内存、IO、fd、GC等</li><li>业务监控：QPS、模调、耗时分布等</li></ul><p>Zabbix作为老牌的监控系统，适合更复杂的物理机、虚拟机、数据库等更复杂的场景，同时也拥有更丰富的图形化界面，但是Prometheus作为云原生的代表作，与k8s、容器等能更好的结合，协同grafana实现可定制化的界面，另外存储基于TSDB，相比于关系型数据库也有更好的扩展性。以Prometheus为例，支持的数据类型有：</p><ul><li>Counter 只增不减的计数器，例如请求数（http_requests_total）。基于此数据模型，使用Prometheus提供的强大PromQL表达式能够拓展出更加适合开发观察的指标数据。 分钟增量请求：increase(http_requests_total[1m]) 分钟QPS：rate(http_requests_total[1m])</li><li>Gauge 可增可减的时刻量，例如Go语言协程数（go_goroutines）、消息队列积压量 波动量：delta(go_goroutines[10m])</li><li>Histogram 直方图，不同区间内样本的个数。例如，耗时50ms-100ms每分钟请求量，100ms-150ms每分钟请求量。</li><li>Summary 概要，反应百分位值。例如，某RPC接口，95%的请求耗时低于150ms，99%的请求耗时低于200ms。</li></ul><p>Prometheus指标支持pull和push模式：</p><ul><li>Pull：服务暴露metrics接口，指标内存更新，Prometheus server定时拉取，性能更好，但要考虑易失性</li><li>Push：指标推送push-gateway，Promethus server从gateway拉取，适用瞬时业务场景（定时任务）</li></ul><h3 id="_2-7-service-mesh" tabindex="-1"><a class="header-anchor" href="#_2-7-service-mesh" aria-hidden="true">#</a> 2.7 Service Mesh</h3><p>我们前边讲的服务发现、熔断降级、安全、流量控制、可观察性等能力。这些通用能力在Service Mesh出现之前，由Lib/Framework通过一些切面的方式完成，这样就可以在开发层面上很容易地集成到我们的应用服务中。但是并没有办法实现跨语言编程，有什么改动后，也需要重新编译重新发布服务。理论上应该有一个专门的层来干这事，于是出现了 Sidecar， 第一代Service Mesh，像Linkerd，后边又出现了第二代Service Mesh，Istio，职责分明，分离出处数据面和控制面。但是Sidecar作为代理层，避免不了性能损耗（CPU序列化反序列化 UDS），所以proxyless service mesh重新被提起，和之前的 「RPC + 服务发现治理」区别是啥？感觉这个名词营销味道略重。其实不能简单的 “Proxyless Service Mesh” 理解为 “一个简单的RPC框架，暴露了几个超时参数到配置中心来控制”，它重在统一协议、API，这样就便于基于统一的协议实现proxyless mesh和proxy mesh的互通，可以同时满足性能敏感型和快速迭代型的业务场景。</p>',15),Y={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/uTools_1645590568142.png",target:"_blank",rel:"noopener noreferrer"},$=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/uTools_1645590568142.png",alt:"img",tabindex:"0",loading:"lazy"},null,-1),ee=e("figcaption",null,"img",-1),te={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/baidu_proxyless_service_mesh.png",target:"_blank",rel:"noopener noreferrer"},ie=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/baidu_proxyless_service_mesh.png",alt:"img",loading:"lazy"},null,-1),ae=e("p",null,"servicemesh对于微服务基础设施的一种演进，但不代表他已经非常成熟了，相反像迁移成本高，甚至一些可用性设计还不如业务自己做那么灵活，这些现实的问题还摆在面前，我觉得这也是属于技术进化的一种趋势，当一项技术足够成熟的时候，又回衍生出新的复杂度问题，从而又需要发展出新技术解决。",-1),le=e("h2",{id:"_3-消息队列",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-消息队列","aria-hidden":"true"},"#"),t(" 3. 消息队列")],-1),ne=e("blockquote",null,[e("p",null,"在计算机科学中，消息队列（英语：Message queue）是一种进程间通信或同一进程的不同线程间的通信方式，软件的贮列用来处理一系列的输入，通常是来自用户。消息队列提供了异步的通信协议，每一个贮列中的纪录包含详细说明的数据，包含发生的时间，输入设备的种类，以及特定的输入参数，也就是说：消息的发送者和接收者不需要同时与消息队列交互。消息会保存在队列中，直到接收者取回它。")],-1),re={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/Screen-Shot-2017-05-22-at-09.05.54.png",target:"_blank",rel:"noopener noreferrer"},se=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/Screen-Shot-2017-05-22-at-09.05.54.png",alt:"img",tabindex:"0",loading:"lazy"},null,-1),oe=e("figcaption",null,"img",-1),pe=l('<p>实际应用场景中，消息队列也经常作为中间件，用于服务解耦、削峰填谷、数据广播、错峰与流控、最终一致性等，在一些核心的大数据分析、交易支付等场景也经常扮演重要角色。</p><p>关于服务解耦，会有很多人质疑，消息队列是否能真正解耦，我的理解是：数据要发生流转，系统之间要有依赖关系，例如上游服务直接读写下游存储、中间件进行数据交互，解耦则更侧重于将易于变化的复杂度转移，对下游存储、中间件的依赖，通过消息队列转化为双方的弱接口（消息payload）依赖。但如果上游是本身是依赖的下游API，这种方式就需要考虑有多个下游时，自身复杂度和可用性的变化。</p><p>消息队列的选型主要侧重以下几点：</p><ul><li>HA：自身的高可用性保障，避免消息队列的引入而影响整体服务的可用性</li><li>高吞吐：在面对海量数据写入能否保持一个相对稳定、高效的数据处理能力</li><li>功能丰富性：是否支持延迟消息、事务消息、死信队列、优先级队列等</li><li>消息广播：是否支持将消息广播给消费者组或者一组消费者</li><li>消息堆积能力：在数据量过大时，是否允许一定消息堆积到broker</li><li>数据持久性：数据持久化策略的采用，也决定着数据在宕机恢复后是否会丢失数据</li><li>重复消费：是否支持ack机制，在消费者未正确处理消息时，支持重新消费</li><li>消息顺序性：针对顺序消费的场景保证数据按写入时间的顺序性</li></ul><p>这里着重对比一下Redis、Rabbitmq/Rocketmq、Kafka、Plusar</p><h3 id="_3-1-redis" tabindex="-1"><a class="header-anchor" href="#_3-1-redis" aria-hidden="true">#</a> 3.1 Redis</h3><p>redis实现消息队列可以通过List&amp;Zset类型、Pub/Sub、Stream（redis 5.0）类型来实现，HA使用多副本或者集群的方式。作为消息队列使用起来非常方便，但是也有很多的弊端：</p><ul><li>功能丰富性：只支持普通的消息类型和延迟消息（Zset时间戳轮询）</li><li>数据持久性：Pub/Sub只提供缓冲区广播能力，不进行持久化，List&amp;Zset/Stream即使基于aof和rdb持久化策略，但是并没有事务性保障，在宕机恢复后还是存在丢失数据的可能性</li><li>消息堆积能力：List&amp;Zset随数据增多，内存不断增长；Pub/Sub只在缓冲区内堆积，缓冲区满消费者强制下线；Stream创建时可以指定队列最大长度，写满后剔除旧消息</li></ul><p>除此之外，List&amp;Zset类型无法支持消息广播，和Pub/Sub一样也不支持重复消费。结合整体来看redis作为消息队列大多数只应用在数据量小，对丢失数据不敏感的业务场景，适用范围较小，复杂业务并且有一定运维支撑的情况下，可以直接考虑企业级消息中间件。</p><h3 id="_3-2-rabbitmq-vs-kafka-vs-rocketmq" tabindex="-1"><a class="header-anchor" href="#_3-2-rabbitmq-vs-kafka-vs-rocketmq" aria-hidden="true">#</a> 3.2 Rabbitmq vs Kafka vs Rocketmq</h3>',10),de={href:"https://blog.xstudio.mobi/a/60.html",target:"_blank",rel:"noopener noreferrer"},ce=e("p",null,[e("strong",null,"HA"),t(" 在HA方面他们都是通过副本的方式，区别是Rabbitmq是集群级别的副本，Kafka是多partiton和ISR、选举机制，而Rocketmq通过多（master/slave）副本同时保障NameServer和Broker。")],-1),he=e("strong",null,"高吞吐",-1),ue={href:"http://linger.ms",target:"_blank",rel:"noopener noreferrer"},ge=l('<p><strong>功能丰富性</strong> Kafka只有基础的消息类型，Rabbitmq支持优先级队列，通过TTL和死信队列可以实现消息的延迟和重试，但是需要提前创建好对应队列，例如：1s延迟队列，10s延迟队列（rabbitmq3.5.7以上可以集成rabbitmq-delayed-message-exchange），阿里云版Rocketmq可以直接设置秒级的延迟时间实现延迟投递，以及针对有序消息阻塞重试，无序消息内置16个重试频率“10s 30s 1m 2m…”供集群（同一消费组）的消费者重试，另外Rocketmq也具有独有的2PL事务消息，很好的保障业务逻辑与消息发送的最终一致性。</p><p><strong>重复消费</strong> 他们三者都采用Ack机制保障了单条消息重复消费的能力，Kafka通过offset和partition特殊的ttl机制（segment过期，按文件名顺序清理），能支持通过重置offset来回溯历史数据。</p><p><strong>消息顺序性</strong> Rabbitmq和Rocketmq可以保证写入同一topic的顺序性，但是在多个消费者同时消费的情况下还是会出现乱序的情况，在数据量较大的时候，我们也可以通过单个消费者消费，再按照一定的分发策略分配给多个消费者执行，只不过会提升整体复杂度，同时会带来更多的HA、维护成本考量。Kafka可以保障单个partition的顺序性，并且每个partiton只允许一个消费者来消费（N：1），这就从策略上避免了多消费者的情况，在数据量较大的情况下，可以通过划分更多的partition提升数据的并行处理能力。</p><p>综合来讲，Rabbitmq、Rocketmq使用Queue模型，丰富的消息队列功能，更多的应用在业务场景，Kafka基于Streaming模型，结合批处理、流式处理，更多的应用在大数据分析场景。</p><h3 id="_3-3-pulsar" tabindex="-1"><a class="header-anchor" href="#_3-3-pulsar" aria-hidden="true">#</a> 3.3 Pulsar</h3><p>Pulsar作为Apache开源、云原生的消息中间件，诞生之初就引发了很大的关注。设计上避免了kafka遇到的功能丰富性、扩容等方面的问题，采用计算、存储分离的架构，broker层只作为“API接口层”，存储交给更专业的bookeeper，由于broker层的无状态性，结合k8s等非常方便的进行扩容。并且Pulsar支持多个消费模型提升消费者处理能力，例如：exclusive、failover、shared、key-shared等，可以说综合了kafka和其他消息中间件的众多优点。</p>',6),_e={href:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/WechatIMG45.jpeg",target:"_blank",rel:"noopener noreferrer"},me=e("img",{src:"http://yueqian-wordpress.stor.sinaapp.com/uploads/2021/05/WechatIMG45.jpeg",alt:"img",tabindex:"0",loading:"lazy"},null,-1),be=e("figcaption",null,"img",-1),fe=e("ul",null,[e("li",null,"HA、高吞吐：和kafka类似，通过多partition和选举机制功，除此之外，还支持丰富的跨地域复制能力"),e("li",null,"功能丰富性：可以支持秒级的延迟消息，以及独特的重试队列和私信队列"),e("li",null,"消息顺序性：为了实现partition消息的顺序性，和kafka一样，都需要将消息写入到同一broker，区别是kafka会同时存储消息在该broker，broker和partiton绑定在一起，而pulsar可以将消息分块（segment）后，更加均匀的分散到bookeeper节点上，broker只需要记录映射关系即可，这样在资源扩容时，可以更加快速便捷")],-1),ke={href:"https://github.com/streamnative/rop",target:"_blank",rel:"noopener noreferrer"};function ye(ve,Se){const i=o("ExternalLinkIcon");return r(),s("div",null,[d,e("figure",null,[e("a",c,[h,a(i)]),u]),g,_,m,e("figure",null,[e("a",b,[f,a(i)]),k]),y,v,e("blockquote",null,[e("p",null,[S,t("（英语：Microservices）是一种"),e("a",P,[t("软件架构风格"),a(i)]),t("，它是以专注于单一责任与功能的小型功能区块 (Small Building Blocks) 为基础，利用模块化的方式组合出复杂的大型应用程序，各功能区块使用与语言无关 (Language-Independent/Language agnostic）的"),e("a",x,[t("API"),a(i)]),t("集相互通信。")])]),D,e("ul",null,[e("li",null,[t("《"),e("a",q,[t("领域设计精粹"),a(i)]),t("》")]),e("li",null,[t("《"),e("a",R,[t("实现领域驱动设计"),a(i)]),t("》")]),e("li",null,[t("《"),e("a",A,[t("领域驱动设计：软件核心复杂性应对之道"),a(i)]),t("》")])]),I,e("figure",null,[e("a",w,[T,a(i)]),E]),C,e("ul",null,[e("li",null,[e("p",null,[t("服务端模式，也可以说是传统模式，通过借助负载均衡器和DNS实现，负载均衡器负责健康检查（探活检查、就绪检查）、负载均衡策略，DNS负责实现访问域名到负载均衡器IP/VIP的映射。通过直接暴露域名和端口的方式提供客户端访问。 "),e("a",B,[F,a(i)])])]),e("li",null,[e("p",null,[t("客户端模式，可以借助注册中心实现，注册中心负责服务的注册与健康检查，客户端通过监听配置变更的方式及时把配置中心维护的配置同步到本地，通过客户端负载均衡策略直接向后端机器发起请求。 "),e("a",N,[L,a(i)]),t(" 从两种模式的实现方式上可以看出")])]),O]),V,z,K,H,M,e("figure",null,[e("a",G,[U,a(i)]),Z]),j,e("p",null,[t("OpenTracing专注在tracing，除此之外还有包含了metrics的OpenCensus标准，以及由CNCF推出，融合OpenTracing和OpenCensus的OpenTelemetry。OpenTelemetry旨在实现云原生时代可观察性指标（Tracing、Logging、Metrics）的统一收集和处理，同时提供推动这些标准实施的组件和工具。 OpenTracing中的佼佼者当属Jaeger、Zipkin、Skywalking。他们之间的一些对比： "),e("a",J,[Q,a(i)])]),e("p",null,[t("Zipkin开源时间长，社区相对丰富，Jaeger更加轻量，也是Istio推荐方案，Skywalking支持部分语言（Java、PHP、Python等）的无侵入式接入。另外APM（应用性能）监控的支持也会影响到我们的选型。 除此之外，这几种默认支持的都是头部连贯策略，在入口处决定是否采样，面对线上海量请求，也通常需要借助一些尾部连贯采样的策略，把我们关心的，例如链路中发生了错误、部分请求耗时过高等请求，都采集下来，可以通过结合opentelemetry-collector以及开箱即用的"),e("a",W,[t("tailsamplingprocessor"),a(i)]),t("构建pipeline插件实现。")]),X,e("figure",null,[e("a",Y,[$,a(i)]),ee]),e("p",null,[t("他们相辅相成，丰富了service mesh的形态。 "),e("a",te,[ie,a(i)])]),ae,le,ne,e("figure",null,[e("a",re,[se,a(i)]),oe]),pe,e("p",null,[t("这几个可以作为企业级消息中间件的代表，Rabbitmq和kafka的一些详细对比，可以参考之前写的这篇文章《"),e("a",de,[t("消息队列Rabbitmq与Kafka对比分析"),a(i)]),t("》。而Rocketmq在设计之初就借鉴了很多Rabbitmq、Kafka的设计理念，例如：Routing、多副本、顺序写（IO），也广泛应用在淘宝双十一等场景。")]),ce,e("p",null,[he,t(" Kafka和Rocketmq通过直接操作文件系统，相比于Rabbitmq，顺序写能大幅度提升数据的处理速度。Kafka为了进一步提升消息的吞吐量，可以采用客户端缓冲队列的方式批量发送，但也会存在宕机丢失数据的可能性，可以通过设置 batch.size 与 "),e("a",ue,[t("linger.ms"),a(i)]),t(" 来动态调整，相比于Rocketmq更加灵活。Kafka的partition机制的确会带来性能的提升，但是在Topic不断增多的情况下，众多的partition及副本也将顺序写逐步退化为随机写，并且扩容时，由于hash值的变化，也会涉及到大量partiton数据的迁移。Rocketmq采用commitlog的方式实现全局写，所以能支持更多的Topic，扩容也不涉及大量数据的迁移。除此之外Kafka和Rocketmq都有zero-copy的应用，通过sendfile和mmap，减少内核态到用户态的CPU拷贝。以及pagecache的应用，大幅度提升消费者生产者速度较为匹配场景的IO效率。")]),ge,e("figure",null,[e("a",_e,[me,a(i)]),be]),fe,e("p",null,[t("像能量守恒定律一样，系统的复杂度往往也是守恒的，实现即高性能又高可用的消息中间件需要的技术复杂性，不会凭空消失，只会从一个地方转移到另一个地方，消息队列本质上可以理解为feature+fs，只不过存储、计算分离架构，将各层间的职责分离，使每一层都能专注在自身领域，以应对海量数据和更加复杂多变的环境，这也是现在新技术发展的一个趋势。 作为后起之秀，的确可以站在巨人的肩膀上，避免很多设计上的不足，同时引入一些新的架构理念，但是要成功的在其中分一杯羹，同样也要面临用户学习成本高、缺少杀手级应用、如何迁移等等这些现实性的问题，不过依靠良好的社区和技术先驱，随着时间的变迁，这些短板也会逐步补齐，真正适应当前时代的技术一定会脱颖而出。ps：腾讯云最近开源"),e("a",ke,[t("Rop"),a(i)]),t("，支持Rocketmq相对平滑的迁移至Pulsar。")])])}const xe=n(p,[["render",ye],["__file","架构师图谱·微服务_消息队列篇.html.vue"]]);export{xe as default};
