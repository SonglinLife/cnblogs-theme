# 版本切换

::: danger 注意
任何版本的切换，最好都更新一下对应版本的 CSS 样式，不然可能会发生兼容性问题！
:::

### 使用 cdnjs 加载资源

只需要更改 `simple-memory.min.js` 文件引入的版本。

例如：

```html{6}
<script type="text/javascript">
    window.cnblogsConfig = {
      // ...
    }
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/cnblogs-theme/2.1.7/simple-memory.min.js" defer></script>
```

变为

```html{6}
<script type="text/javascript">
    window.cnblogsConfig = {
      // ...
    }
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/cnblogs-theme/2.1.8/simple-memory.min.js" defer></script>
```

版本变更： `v2.1.7` >>> `v2.1.8`

### 使用自己的云资源

如果你的资源是托管到自己的云资源上, 建议使用随机参方式更新加载资源。

例如：

```html
<script src="https://dbnuo.com/dist/simple-memory.min.js?_12311" defer></script>
```

变为

```html
<script src="https://dbnuo.com/dist/simple-memory.min.js?_12322" defer></script>
```

这样浏览器就会加载最新的代码。
