const e=JSON.parse('{"key":"v-18aae998","path":"/dev/Quartz%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E6%A1%86%E6%9E%B6%E6%95%B4%E5%90%88%E4%BD%BF%E7%94%A8.html","title":"Quartz - \u4EFB\u52A1\u8C03\u5EA6\u6846\u67B6\u6574\u5408\u4F7F\u7528","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Quartz - \u4EFB\u52A1\u8C03\u5EA6\u6846\u67B6\u6574\u5408\u4F7F\u7528","description":null,"date":"2022-06-01T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"summary":"Quartz - \u4EFB\u52A1\u8C03\u5EA6\u6846\u67B6\u6574\u5408\u4F7F\u7528 \u5404\u79CD\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5B9A\u65F6\u4EFB\u52A1\u7684\u65B9\u6848\uFF0C\u4ECEQuartz\u5230Xxl-job\uFF0C\u518D\u5230Elastic-job\uFF0C\u80FD\u804A\u7684\u90FD\u804A\u4E86\u4E00\u5708\u513F\uFF1B\u521A\u521A\u597D\u624B\u5934\u6709\u4E00\u4EFD\u5173\u4E8E Quartz \u7684\u4FDD\u59C6\u7EA7\u6559\u7A0B\uFF0C\u5728\u8FD9\u91CC\u5206\u4EAB\u7ED9\u5927\u5BB6\uFF1B 1\u524D\u8A00 \u9879\u76EE\u4E2D\u9047\u5230\u4E00\u4E2A\uFF0C\u9700\u8981 \u5BA2\u6237\u81EA\u5B9A\u4EFB\u52A1\u542F\u52A8\u65F6\u95F4 \u7684\u9700\u6C42\u3002\u539F\u6765\u4E00\u76F4\u90FD\u662F\u5728\u9879\u76EE\u91CC\u786C\u7F16\u7801\u4E00\u4E9B\u5B9A\u65F6\u5668\uFF0C\u6240\u4EE5\u6CA1\u6709\u5B66\u4E60\u8FC7\u3002 \u5F88\u591A\u5F00\u6E90\u7684\u9879\u76EE\u7BA1\u7406\u6846\u67B6\u90FD","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Quartz%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E6%A1%86%E6%9E%B6%E6%95%B4%E5%90%88%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Quartz - \u4EFB\u52A1\u8C03\u5EA6\u6846\u67B6\u6574\u5408\u4F7F\u7528"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-26T05:05:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-26T05:05:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1\u524D\u8A00","slug":"_1\u524D\u8A00","children":[]},{"level":2,"title":"2\u57FA\u7840\u4F7F\u7528","slug":"_2\u57FA\u7840\u4F7F\u7528","children":[]},{"level":2,"title":"3Demo","slug":"_3demo","children":[]},{"level":2,"title":"4JobDetail","slug":"_4jobdetail","children":[]},{"level":2,"title":"5JobExecutionContext","slug":"_5jobexecutioncontext","children":[]},{"level":2,"title":"6Job \u72B6\u6001\u53C2\u6570","slug":"_6job-\u72B6\u6001\u53C2\u6570","children":[]},{"level":2,"title":"7Trigger","slug":"_7trigger","children":[{"level":3,"title":"\u5B9A\u65F6\u542F\u52A8/\u5173\u95ED","slug":"\u5B9A\u65F6\u542F\u52A8-\u5173\u95ED","children":[]}]},{"level":2,"title":"8SimpleTrigger","slug":"_8simpletrigger","children":[]},{"level":2,"title":"9CronTrigger","slug":"_9crontrigger","children":[]},{"level":2,"title":"10SpringBoot \u6574\u5408","slug":"_10springboot-\u6574\u5408","children":[]},{"level":2,"title":"11\u73AF\u5883\u51C6\u5907","slug":"_11\u73AF\u5883\u51C6\u5907","children":[]},{"level":2,"title":"12\u6838\u5FC3\u4EE3\u7801","slug":"_12\u6838\u5FC3\u4EE3\u7801","children":[]},{"level":2,"title":"13\u65B0\u589E\u8C03\u5EA6\u4EFB\u52A1","slug":"_13\u65B0\u589E\u8C03\u5EA6\u4EFB\u52A1","children":[{"level":3,"title":"\u542F\u52A8\u521D\u59CB\u5316\u4EFB\u52A1","slug":"\u542F\u52A8\u521D\u59CB\u5316\u4EFB\u52A1","children":[]}]},{"level":2,"title":"14\u5176\u4ED6\u8BF4\u660E","slug":"_14\u5176\u4ED6\u8BF4\u660E","children":[{"level":3,"title":"\u5E76\u53D1\u6267\u884C","slug":"\u5E76\u53D1\u6267\u884C","children":[]},{"level":3,"title":"\u963B\u6B62\u7279\u5B9A\u65F6\u95F4\u8FD0\u884C","slug":"\u963B\u6B62\u7279\u5B9A\u65F6\u95F4\u8FD0\u884C","children":[]}]}],"git":{"createdTime":1653541528000,"updatedTime":1653541528000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":15.08,"words":4525},"filePathRelative":"dev/Quartz\u4EFB\u52A1\u8C03\u5EA6\u6846\u67B6\u6574\u5408\u4F7F\u7528.md","localizedDate":"2022\u5E746\u67081\u65E5"}');export{e as data};
