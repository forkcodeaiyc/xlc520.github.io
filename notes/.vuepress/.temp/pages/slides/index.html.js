export const data = {
  "key": "v-2897d318",
  "path": "/slides/",
  "title": "幻灯片",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "幻灯片",
    "blog": {
      "type": "type",
      "key": "slide"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://xlc520.github.io/slides/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "StudyNote"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "幻灯片"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
