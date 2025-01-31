# 友链页

样式参考：[友联预览](https://www.cnblogs.com/wangyang1225/p/18614782)

## 配置方式

### 标识页面为友链页面

首先需要在页面源码中加入以下代码，来标识该页面为友链页面：

```html
<input id="linkListFlg" type="hidden" />
```

::: danger 注意
是添加到 HTML 源码中，博客园文章的富文本编辑器和 Markdown 都有添加 HTML 代码的方式！
:::

#### 富文本编辑器

![img](https://pic.imgdb.cn/item/676df60dd0e0a243d4eb1989.png)

#### Markdown

直接拷贝到文本即可。

### 配置友链数据

友链的配置，可以参考其他[配置](/reference/configs)的方式。例如：

```javascript
window.cnblogsConfig = [
  links: {
    page: [
          {
            title: '友情链接', // 标题
            icon: 'icon-lianjie', // iconfont
            style: 'color: #a78bfa;',
            links: [
                {
                    name: '。思索', // 昵称
                    introduction: 'IT技术类博客', // 简介
                    avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                    url: 'https://cnblogs.com/wangyang0210' // 友链地址
                },
            ]
        },
    ]
  }
];
```

此配置可以单独出来。例如：

```javascript

//  正常配置
window.cnblogsConfig = {
  links: {},
};

// 友链页配置
window.cnblogsConfig.links.page = [
  {
      title: '友情链接', // 标题
      icon: 'icon-lianjie', // iconfont
      style: 'color: #a78bfa;',
      links: [
          {
              name: '。思索', // 昵称
              introduction: 'IT技术类博客', // 简介
              avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
              url: 'https://cnblogs.com/wangyang0210' // 友链地址
          },
      ]
  },
];
```

请按照此格式配置。

| **Key**                          | **Description** |
| :------------------------------- | :-------------- |
| **title**                        | 友链标题        |
| **icon**                         | 标题图标        |
| **style**                        | 标题扩展样式    |
| **links**                        | 标题下友链配置  |
| **links[<i>n</i>].name**         | 昵称            |
| **links[<i>n</i>].introduction** | 简介            |
| **links[<i>n</i>].avatar**       | 头像            |
| **links[<i>n</i>].url**          | 友链地址        |