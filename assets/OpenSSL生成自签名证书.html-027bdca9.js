const e=JSON.parse('{"key":"v-275077d9","path":"/linux/OpenSSL%E7%94%9F%E6%88%90%E8%87%AA%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6.html","title":"OpenSSL生成自签名证书","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"OpenSSL生成自签名证书","description":"使用OpenSSL生成自签名证书，实现HTTPS传输 导读 SSL协议是一种网络安全协议，用于加密浏览器和服务器之间传输的数据信息。SSL证书就是遵守SSL协议，由数字证书颁发机构CA在验证服务器身份后颁发的一种数字证书，网站通过部署SSL证书实现加密传输数据。如果网站涉及敏感信息，例如：登录账号及口令、身份证号码、手机号码等重要个人信息，或者医院、银行、保险公司等机构的重要业务数据，则需要使用SSL证书，防止信息被第三方窃听和篡改。 SSL证书可分为专业证书（由受信任的证书颁发机构签名的证书）和自签名证书。专业证书由可信任的CA安全机构颁发，机构颁发给用户的证书是唯一可信任的，不可被伪造，此外，它们还具有保护措施来减少错误颁发和其他类型的欺诈行为。专业证书的安全性越高，申请证书的费用越昂贵，于是一些企业将目光转向了自签名证书。自签名证书是可以自己签发的SSL证书，相比于专业证书，自签名证书签发流程简单，几乎0成本，且同样使用与专业证书相同的方法加密传输数据。可是制作难度低，意味着自签名证书极容易被恶意模仿，进而伪造成有同样证书的假冒网站，所以面向公众的网站使用自签名证书存在一定安全风险。但在一些安全可控的网络环境下，为了节省网站建设成本，可以考虑使用自签名证书，例如：测试环境，具备安全防护的内网环境，面向内部、少数人员使用的不涉及敏感数据的网站等。","date":"2022-05-21T00:00:00.000Z","category":["Linux"],"tag":["Linux"],"article":true,"timeline":true,"icon":"linux","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/OpenSSL%E7%94%9F%E6%88%90%E8%87%AA%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"OpenSSL生成自签名证书"}],["meta",{"property":"og:description","content":"使用OpenSSL生成自签名证书，实现HTTPS传输 导读 SSL协议是一种网络安全协议，用于加密浏览器和服务器之间传输的数据信息。SSL证书就是遵守SSL协议，由数字证书颁发机构CA在验证服务器身份后颁发的一种数字证书，网站通过部署SSL证书实现加密传输数据。如果网站涉及敏感信息，例如：登录账号及口令、身份证号码、手机号码等重要个人信息，或者医院、银行、保险公司等机构的重要业务数据，则需要使用SSL证书，防止信息被第三方窃听和篡改。 SSL证书可分为专业证书（由受信任的证书颁发机构签名的证书）和自签名证书。专业证书由可信任的CA安全机构颁发，机构颁发给用户的证书是唯一可信任的，不可被伪造，此外，它们还具有保护措施来减少错误颁发和其他类型的欺诈行为。专业证书的安全性越高，申请证书的费用越昂贵，于是一些企业将目光转向了自签名证书。自签名证书是可以自己签发的SSL证书，相比于专业证书，自签名证书签发流程简单，几乎0成本，且同样使用与专业证书相同的方法加密传输数据。可是制作难度低，意味着自签名证书极容易被恶意模仿，进而伪造成有同样证书的假冒网站，所以面向公众的网站使用自签名证书存在一定安全风险。但在一些安全可控的网络环境下，为了节省网站建设成本，可以考虑使用自签名证书，例如：测试环境，具备安全防护的内网环境，面向内部、少数人员使用的不涉及敏感数据的网站等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-20T12:43:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2022-05-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-20T12:43:54.000Z"}]]},"headers":[{"level":2,"title":"01 OpenSSL介绍","slug":"_01-openssl介绍","link":"#_01-openssl介绍","children":[]},{"level":2,"title":"02 SSL证书握手流程图","slug":"_02-ssl证书握手流程图","link":"#_02-ssl证书握手流程图","children":[]},{"level":2,"title":"03 自签名证书生成过程","slug":"_03-自签名证书生成过程","link":"#_03-自签名证书生成过程","children":[]},{"level":2,"title":"04 部署自签名证书，","slug":"_04-部署自签名证书","link":"#_04-部署自签名证书","children":[]},{"level":2,"title":"05 总结","slug":"_05-总结","link":"#_05-总结","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1668948234000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":14.45,"words":4335},"filePathRelative":"linux/OpenSSL生成自签名证书.md","localizedDate":"2022年5月21日","excerpt":"<h1> 使用OpenSSL生成自签名证书，实现HTTPS传输</h1>\\n<p><strong>导读</strong></p>\\n<p>SSL协议是一种网络安全协议，用于加密浏览器和服务器之间传输的数据信息。SSL证书就是遵守SSL协议，由数字证书颁发机构CA在验证服务器身份后颁发的一种数字证书，网站通过部署SSL证书实现加密传输数据。如果网站涉及敏感信息，例如：登录账号及口令、身份证号码、手机号码等重要个人信息，或者医院、银行、保险公司等机构的重要业务数据，则需要使用SSL证书，防止信息被第三方窃听和篡改。</p>\\n<p>SSL证书可分为专业证书（由受信任的证书颁发机构签名的证书）和自签名证书。专业证书由可信任的CA安全机构颁发，机构颁发给用户的证书是唯一可信任的，不可被伪造，此外，它们还具有保护措施来减少错误颁发和其他类型的欺诈行为。专业证书的安全性越高，申请证书的费用越昂贵，于是一些企业将目光转向了自签名证书。自签名证书是可以自己签发的SSL证书，相比于专业证书，自签名证书签发流程简单，几乎0成本，且同样使用与专业证书相同的方法加密传输数据。可是制作难度低，意味着自签名证书极容易被恶意模仿，进而伪造成有同样证书的假冒网站，所以面向公众的网站使用自签名证书存在一定安全风险。但在一些安全可控的网络环境下，为了节省网站建设成本，可以考虑使用自签名证书，例如：测试环境，具备安全防护的内网环境，面向内部、少数人员使用的不涉及敏感数据的网站等。</p>","autoDesc":true}');export{e as data};
