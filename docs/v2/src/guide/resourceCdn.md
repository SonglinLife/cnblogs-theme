# 资源托管

## 云资源
可以将插件托管到自己的云资源或其它 CDN 加速节点上。

例如：我的网站为 `www.oyo.com`（实际根据情况可以是 IP 或其它 host）

然后我将编译后的文件夹 `dist` 放到了网站的根目录。

这样我可以通过加载 `https://www.oyo.com/dist/simple-memory.min.js` 来安装插件：

```html
<script type="text/javascript">
    window.cnblogsConfig = {
      // ...
    }
</script>
<script src="https://www.oyo.com/dist/simple-memory.min.js" defer></script>
```

## Vercel
如果你是基于 jsDelivr 加载的资源文件且拥有自己的域名， 那么你可以尝试访问[jsDelivr-mirror-site](https://github.com/wangyang0210/jsDelivr-mirror-site)，通过 Vercel 部署，轻松实现一个属于自己的镜像加速。

## 国内镜像
国内有很多镜像站会定时同步cdnjs，普通用户，可以尝试使用国内的加速镜像站。
