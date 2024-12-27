# 书单/影单页

样式参考：[书单/影单](https://www.cnblogs.com/wangyang0210/p/16535755.html)

## 配置方式

### 标识页面为书单页面

首先需要在页面源码中加入以下代码，来标识该页面为书单页面：

```html
<input id="bookListFlg" type="hidden">
```

::: danger 注意
是添加到 HTML 源码中，博客园文章的富文本编辑器和 Markdown 都有添加 HTML 代码的方式！
:::

#### 富文本编辑器

![img](https://pic.imgdb.cn/item/676df60dd0e0a243d4eb1989.png)

#### Markdown

直接拷贝到文本即可。

### 配置书单数据

书单的配置，可以参考其他[配置](/reference/configs)的方式。例如：

```javascript
window.cnblogsConfig = {
    bookList: [],
}
```

但是一般书单的数据比较多，所以建议将此配置单独出来。例如：

```javascript

    //  正常配置
    window.cnblogsConfig = {
        ...
    };

    // 书单配置
    window.cnblogsConfig.bookList = [
        {
            title: '已看',
            books: [
                 {
                    cover: 'https://images.cnblogs.com/cnblogs_com/wangyang0210/2205307/o_230302124618_s3078482.jpg',
                    name: '三体Ⅱ',
                    formerName: '',
                    author: '刘慈欣',
                    translator: '',
                    press: '重庆出版社',
                    year: '2008-5',
                    score: 4.5
                },
            ]
        },
         {
            title: '已观',
             books: [
                 {
                    cover: 'https://images.cnblogs.com/cnblogs_com/wangyang0210/2205307/o_230317160847_p480747492.webp',
                    name: '肖申克的救赎 The Shawshank Redemption',
                    direct: '弗兰克·德拉邦特',
                    scenarist: '弗兰克·德拉邦特 / 斯蒂芬·金',
                    star: '蒂姆·罗宾斯 / 摩根·弗里曼 / 鲍勃·冈顿 / 威廉姆·赛德勒 / 克兰西·布朗 / 吉尔·贝罗斯 / 马克·罗斯顿 / 詹姆斯·惠特摩 / 杰弗里·德曼 / 拉里·布兰登伯格 / 尼尔·吉恩托利 / 布赖恩·利比 / 大卫·普罗瓦尔 / 约瑟夫·劳格诺 / 祖德·塞克利拉 / 保罗·麦克兰尼 / 芮妮·布莱恩 / 阿方索·弗里曼 / V·J·福斯特 / 弗兰克·梅德拉诺 / 马克·迈尔斯 / 尼尔·萨默斯 / 耐德·巴拉米 / 布赖恩·戴拉特 / 唐·麦克马纳斯',
                    type: '剧情 / 犯罪',
                    productionCountry: '美国',
                    language: '英语',
                    releaseDate: '1994-09-10(多伦多电影节) / 1994-10-14(美国)',
                    filmLength: '142分钟',
                    alias: '月黑高飞(港) / 刺激1995(台) / 地狱诺言 / 铁窗岁月 / 消香克的救赎',
                    score: 5,
                },
         }
    ];
```

请按照此格式配置，无内容可以不配置。

|         **Key**          |  **Description**   |
| :---------------------- | :---------------- |
|        **title**         |  标题，可以不填 |
|        **books**         |      书籍/电影数据      |
|     **books.cover**      |        书籍/影片封面        |
|      **books.name**      |        书名/影名    |
|   **books.formerName**   |       原书名        |
|     **books.author**     |        作者        |
|   **books.translator**   |        译者        |
|     **books.press**      |       出版社       |
|      **books.year**      |       出版年       |
|     **books.score**      |  评级1～5，支持.5  |
|    **books.readDate**    |      阅读日期      |
| **books.readPercentage** |      阅读进度      |
|    **books.direct**    |      电影导演      |
|    **books.scenarist**    |      电影编剧      |
|    **books.star**    |      电影主演      |
|    **books.type**    |      电影类型      |
|    **books.productionCountry**    |      电影制片国家/地区      |
|    **books.language**    |      电影语言      |
|    **books.releaseDate**    |      电影上映日期      |
|    **books.filmLength**    |      电影片长      |
|    **books.alias**    |      电影别名      |