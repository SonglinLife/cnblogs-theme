# 安装配置

::: danger 注意
1. 本文档为 v2 版本的安装配置教程，请核对使用版本。
2. 应用插件需要 JS 权限，没有的请先申请权限。
3. 当前插件版本为Canary版本！！！
:::

## 获取插件

::: tip 提示
建议使用最新版本，历史版本随着博客园不断迭代，会出现兼容性问题。
:::

进入插件仓库：[点击进入](https://github.com/wangyang0210/cnblogs-theme)


## 博客园后台配置

### 进入管理后台

首先进入管理后台：[点击访问](https://i.cnblogs.com/Configure.aspx)

### 选项页

进入管理后台/选项页。

![img](https://pic.imgdb.cn/item/676ba138d0e0a243d4e9d277.png)

#### 控件确认

确认博客需要开启/关闭哪些控件：

![img](https://pic.imgdb.cn/item/676b9f15d0e0a243d4e9d1d4.png)

### 设置页

进入管理后台/设置页。
![img](https://pic.imgdb.cn/item/676ba052d0e0a243d4e9d22b.png)

#### 设置博客皮肤

博客皮肤：```SimpleMemory```

#### 代码高亮配置

::: tip 提示
当前插件版本为Canary版本，直接兼容博客园本身的代码高亮设置，不再提供独立代码高亮配置。
:::

![img](https://pic.imgdb.cn/item/676b9da5d0e0a243d4e9d177.png)

#### 页面定制 CSS 代码

* 勾选`禁用模板默认CSS`

* 拷贝插件的 CSS 代码
  * CSS 代码在插件仓库目录位置：`/dist/simpleMemory.css`
  * 拷贝此文件代码至页面定制 CSS 代码文本框处。

![img](https://pic.imgdb.cn/item/676ba1abd0e0a243d4e9d296.png)

#### 博客侧边栏公告

在侧边栏HTML代码中设置以下代码：

```html
<script type="text/javascript">
    window.cnblogsConfig = {
      info: {
        name: 'userName', // 您的用户名
        startDate: '2021-01-01', // 您的入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
        avatar: 'http://xxxx.png', // 您的头像 URL 地址
      },
    }
</script>
<!-- 插件文件引入 | 不要忘记替换版本号哦(*^▽^*) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/cnblogs-theme/{VERSION}/simple-memory.min.js" defer></script>

```

**关于插件文件的说明**

- `cdnjs`: cdnjs 是一个免费的、开源的内容分发网络（CDN）。插件文件引入的地址目的是引入插件库上的 JS 文件，如果有其它合适的 CDN 亦可根据规则进行替换。
- `VERSION`: 插件文件引入地址中的 `{VERSION}`，代表了插件版本的占位，可以根据使用版本进行修改。示例：`2.1.8`

## 配置完成

配置完成，保存即可成功应用插件！