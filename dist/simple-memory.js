!function(){var e,t,n,o,a,r,i,l,s,c,u,f,d={434:function(e,t){"use strict";t.Z={init(){$.__event.scroll={},$.__event.scroll.handle=[],$.__event.scroll.temScroll=0,$.__event.scroll.docScroll=$(document).scrollTop(),$.__event.scroll.homeScroll=$("#home").offset().top-40,$(window).scroll((()=>{$.__event.scroll.docScroll=$(document).scrollTop(),$.__event.scroll.homeScroll=$("#home").offset().top-40,this.handle.scroll(),$.__event.scroll.temScroll=$.__event.scroll.docScroll})),$.__event.resize={},$.__event.resize.handle=[],$(window).resize((()=>{this.handle.resize()}))},handle:{scroll:()=>{for(let e=0;e<$.__event.scroll.handle.length;e++)$.__event.scroll.handle[e]()},resize:()=>{for(let e=0;e<$.__event.resize.handle.length;e++)$.__event.resize.handle[e]();$.__tools.setDomHomePosition()}}}},2258:function(e,t,n){var o={"./article":[330,148,269],"./article.js":[330,148,269],"./books":[2898,148,463],"./books.js":[2898,148,463],"./common/com-article":[3515,148],"./common/com-article.js":[3515,148],"./home":[565,628],"./home.js":[565,628],"./links":[3480,148,583],"./links.js":[3480,148,583]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=2258,e.exports=a},5299:function(e,t,n){"use strict";async function o(e="",t="GET",n={}){let o={method:t,mode:"cors",redirect:"follow",referrerPolicy:"no-referrer"};Object.keys(n).length&&(o.body=JSON.stringify(n));return(await fetch(e,o)).json()}n.d(t,{W:function(){return o}})}},p={};function m(e){var t=p[e];if(void 0!==t)return t.exports;var n=p[e]={exports:{}};return d[e](n,n.exports,m),n.exports}m.m=d,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=function(e){e&&!e.d&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},m.a=function(a,r,i){var l;i&&((l=[]).d=1),l&&(l.moduleId=a.id);var s,c,u,f=new Set,d=a.exports,p=new Promise((function(e,t){u=t,c=e}));p[t]=d,p[e]=function(e){l&&e(l),f.forEach(e),p.catch((function(){}))},p.moduleId=a.id,a.exports=p,r((function(a){var r;s=function(a){return a.map((function(a){if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var r=[];r.d=0,a.then((function(e){i[t]=e,o(r)}),(function(e){i[n]=e,o(r)}));var i={};return i[e]=function(e){e(r)},i}}var l={};return l[e]=function(){},l[t]=a,l}))}(a);var i=function(){return s.map((function(e){if(e[n])throw e[n];return e[t]}))},c=new Promise((function(t){(r=function(){t(i)}).r=0;var n=function(e){e!==l&&!f.has(e)&&(f.add(e),e&&!e.d&&(r.r++,e.push(r)))};s.map((function(t){t[e](n)}))}));return r.r?c:i()}),(function(e){e?u(p[n]=e):c(d),o(l)})),l&&(l.d=0)},a=[],m.O=function(e,t,n,o){if(!t){var r=1/0;for(c=0;c<a.length;c++){t=a[c][0],n=a[c][1],o=a[c][2];for(var i=!0,l=0;l<t.length;l++)(!1&o||r>=o)&&Object.keys(m.O).every((function(e){return m.O[e](t[l])}))?t.splice(l--,1):(i=!1,o<r&&(r=o));if(i){a.splice(c--,1);var s=n();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=a.length;c>0&&a[c-1][2]>o;c--)a[c]=a[c-1];a[c]=[t,n,o]},m.F={},m.E=function(e){Object.keys(m.F).map((function(t){m.F[t](e)}))},m.H={},m.G=function(e){Object.keys(m.H).map((function(t){m.H[t](e)}))},i=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},m.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var n=Object.create(null);m.r(n);var o={};r=r||[null,i({}),i([]),i(i)];for(var a=2&t&&e;"object"==typeof a&&!~r.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},m.d(n,o),n},m.d=function(e,t){for(var n in t)m.o(t,n)&&!m.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},m.f={},m.e=function(e){return Promise.all(Object.keys(m.f).reduce((function(t,n){return m.f[n](e,t),t}),[]))},m.u=function(e){return"script/"+{14:"iconfont",18:"nh-banner-animation",77:"background-season",86:"circle-magic",87:"mouse-click",148:"page-common-com-article",170:"mouse-mo",191:"article-code",269:"page-article",289:"com-after",290:"background-particles",297:"gf-blink",315:"banner-images",379:"mouse-mouse",463:"page-books",545:"mouse-bubble",583:"page-links",586:"code-hljs",628:"page-home",663:"background-ribbons",732:"google-fonts",910:"com-before",984:"day-night"}[e]+"."+{14:"09490a0a",18:"11dde990",77:"341bd888",86:"cd220dee",87:"91c51eaf",148:"478b807c",170:"f274edda",191:"91a5f231",269:"c6f6be06",289:"24b0c618",290:"4c1c4381",297:"da6b421b",315:"d533d69d",379:"d85a3bf0",463:"07b20ab6",545:"0d4c8a6b",583:"c24d5857",586:"45e0a737",628:"9baa43f0",663:"5d2bc77c",732:"844d68a9",910:"4d4da465",984:"fa752de1"}[e]+".js"},m.miniCssF=function(e){return"style/"+{14:"iconfont",18:"nh-banner-animation",148:"page-common-com-article",290:"background-particles",297:"gf-blink",379:"mouse-mouse",463:"page-books",583:"page-links",732:"google-fonts",910:"com-before",984:"day-night"}[e]+"."+{14:"ea5cf129",18:"7ff7a955",148:"f6daeb86",290:"457e1a14",297:"0cc7f6e2",379:"6f5882cf",463:"544fc434",583:"09bcd29b",732:"66c39700",910:"c9da3625",984:"b7356ffd"}[e]+".css"},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l={},s="cnblogs-theme:",m.l=function(e,t,n,o){if(l[e])l[e].push(t);else{var a,r;if(void 0!==n)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var u=i[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==s+n){a=u;break}}a||(r=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,m.nc&&a.setAttribute("nonce",m.nc),a.setAttribute("data-webpack",s+n),a.src=e),l[e]=[t];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var o=l[e];if(delete l[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),r&&document.head.appendChild(a)}},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;m.g.importScripts&&(e=m.g.location+"");var t=m.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e}(),c=function(e){return new Promise((function(t,n){var o=m.miniCssF(e),a=m.p+o;if(function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=(i=n[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){var i;if((a=(i=r[o]).getAttribute("data-href"))===e||a===t)return i}}(o,a))return t();!function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),o(s)}},a.href=t,document.head.appendChild(a)}(e,a,t,n)}))},u={179:0},m.f.miniCss=function(e,t){u[e]?t.push(u[e]):0!==u[e]&&{14:1,18:1,148:1,290:1,297:1,379:1,463:1,583:1,732:1,910:1,984:1}[e]&&t.push(u[e]=c(e).then((function(){u[e]=0}),(function(t){throw delete u[e],t})))},function(){var e={179:0};m.f.j=function(t,n){var o=m.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,a){o=e[t]=[n,a]}));n.push(o[2]=a);var r=m.p+m.u(t),i=new Error;m.l(r,(function(n){if(m.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,o[1](i)}}),"chunk-"+t,t)}},m.F.j=function(t){if(!m.o(e,t)||void 0===e[t]){e[t]=null;var n=document.createElement("link");m.nc&&n.setAttribute("nonce",m.nc),n.rel="prefetch",n.as="script",n.href=m.p+m.u(t),document.head.appendChild(n)}},m.H.j=function(t){if(!m.o(e,t)||void 0===e[t]){e[t]=null;var n=document.createElement("link");n.charset="utf-8",m.nc&&n.setAttribute("nonce",m.nc),n.rel="preload",n.as="script",n.href=m.p+m.u(t),document.head.appendChild(n)}},m.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,r=n[0],i=n[1],l=n[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)m.o(i,o)&&(m.m[o]=i[o]);if(l)var c=l(m)}for(t&&t(n);s<r.length;s++)a=r[s],m.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return m.O(c)},n=self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),f={148:[18],191:[586],269:[191,18],289:[290,984,379,663,77,545,87,170],463:[297,18],583:[297,18],628:[86],910:[315]},m.f.prefetch=function(e,t){Promise.all(t).then((function(){var t=f[e];Array.isArray(t)&&t.map(m.E)}))},function(){var e={910:[732,14]};m.f.preload=function(t){var n=e[t];Array.isArray(n)&&n.map(m.G)}}(),m.O(0,[179],(function(){[910,289,148,269,463,628,583].map(m.E)}),5);var g={};!function(){"use strict";var e=JSON.parse('{"info":{"name":"","startDate":"2021-01-01","avatar":"","blogIcon":""},"sidebar":{"navList":[],"customList":{},"infoBackground":"","titleMsg":"欢迎访问本博客~","blogStatus":true,"submenu":{"pointsRank":false,"latestPosts":false,"myTags":false,"postsClassify":false,"articleClassify":false,"readRank":false,"recommendRank":false,"latestComment":false,"postsArchive":false,"articleArchive":false,"customList":false}},"banner":{"text":false,"home":{"background":[],"title":[],"titleSource":"jinrishici"},"article":{"background":[]}},"loading":{"rebound":{"tension":16,"friction":5},"spinner":{"id":"spinner","radius":90,"sides":3,"depth":4,"colors":{"background":"#f0f0f0","stroke":"#272633","base":null,"child":"#272633"},"alwaysForward":true,"restAt":0.5,"renderBase":false}},"fontIconExtend":"","progressBar":{"id":"top-progress-bar","color":"#77b6ff","height":"2px","duration":0.2},"title":{"onblur":"(oﾟvﾟ)ノ Hi","onblurTime":500,"focus":"(*´∇｀*) 欢迎回来！","focusTime":1000},"footer":{"text":{"left":"","right":"","iconFont":{"icon":"icon-xinlv","color":"red","fontSize":"16px"}},"style":2,"aplayer":{"enable":false,"options":{"id":"3778678","server":"netease","type":"playlist","auto":"netease","fixed":"true","mini":"true","autoplay":"false","theme":"#2980b9","loop":"all","order":"random","preload":"auto","volume":"0.7","mutex":"true","lrcType":"0","listFolded":"true","listMaxHeight":"340px","storageHame":"metingjs"}}},"links":{"footer":[],"page":[]},"umami":{"url":"","shareId":""},"rtMenu":{"qrCode":"","reward":{"alipay":"","wechatpay":""},"downScrollDom":""},"switchDayNight":{"enable":true,"nightMode":false,"auto":{"enable":false,"dayHour":5,"nightHour":19}},"animate":{"bannerImages":{"enable":false,"options":{"itemNum":5,"current":0,"sort":1,"time":30000}},"homeBanner":{"enable":false,"options":{"radius":15,"density":0.2,"color":"rgba(255,255,255, .2)","clearOffset":0.3}},"articleTitle":{"enable":true},"articleBanner":{"enable":false},"background":{"ribbons":{"enable":false,"options":{"colorSaturation":"60%","colorBrightness":"50%","colorAlpha":0.5,"colorCycleSpeed":5,"verticalPosition":"random","horizontalSpeed":200,"ribbonCount":3,"strokeSize":0,"parallaxAmount":-0.2,"animateSections":true}},"particles":{"enable":false,"options":{}},"season":{"enable":false,"options":{"img":"","size":40}}},"mouse":{"bubble":{"enable":false,"options":{"live":30,"colors":["149, 197, 252","224, 199, 252"],"quantity":15,"size":5}},"mouse":{"enable":false,"options":{"size":8,"sizeF":36}},"mo":{"enable":false,"options":{"radius":{"0":100},"count":5,"children":{"shape":"polygon","fill":{"cyan":"yellow"},"radius":20,"rotate":{"360":0},"duration":2000}}},"click":{"enable":false,"options":{}}},"infoName":{"enable":false},"avatar":{"enable":false}},"code":{"type":"","options":{"hljs":{"theme":"atom-one-dark-reasonable","languages":[]},"maxHeight":"","line":false,"macStyle":true}},"articleSuffix":{"imgUrl":"","aboutHtml":"","copyrightHtml":"","supportHtml":"","copyText":{"enable":false,"length":100,"copyright":""}},"articleDirectory":{"position":"right","minBodyWeight":900,"autoWidthScroll":false},"consoleList":[],"bookList":[],"memorialDays":["12-13"],"articleContent":{"link":false,"iconfont":false,"commentTyping":{"enable":false,"options":{"colorful":true,"shake":false}},"diggit":false,"iconfontArr":["hebaodan","bingtanghulu","kesong","qianceng","fengmi","feiyuguantou","shengjian","youtiao","yuzijiang","zhutongfan","doujiang","sanmingzhi","paofu","shanbei","dangaojuan","futejia","huangyou","xiangchang","banji","danta","qingning","lajiao","shizi","mojituo","pijiu","putaojiu","kouxiangtang","xiangcaobingqilin","jiaozi","tilamisu","huoguo","hongshu","bingkuai","mianhuatang","paobing","meishikafei","mantou","qishui","ganlan","jiroujuan","guodong","baozi","pingguo","chengzi","qingjiao","jidan","xihongshi","mangguo","baocai","niunai","mianbao","huluobu","zhangyu","pangxie","longxia","yangcong","rou","jitui","huage","xianyu","mogu","qiezi","xilanhua","ningmeng","liulian","banli","sanwenyu","tudou","xigua","nangua","huolongguo","fantuan","zhusun","shuiluobu","shanzhu","lanmei","shiliu","yezi","tiangua","mihoutao","boluo","kaixinguo","hetao","xiaweiyiguo","huasheng","bigenguo","kuihuazi","songzi","xiguazi","badanmu","yaoguo","danhuangsu","dangao","binggan","buding","tangguo","qiaokeli","hongzao","candou","putaogan","manyuemei","taozi","xiangjiao","caomei","niuyouguo","hamigua","chelizi","li","bale","kafei1","shutiao","zhenzhunaicha","xuegao","nailao","kele","tiantong","hanbao","xiezishousi","baomihua","regou","makalong","tianfuluo","juzi","baixiangguo","putao","shaomai","yumi","pipa","yangtao","youzi","lianwu","wuhuaguo","paomian","wandou","huanggua","suantou","tiantianquan","shupian","huafubing","bangbangtang","shousi","lizhi","doufu","mocha","boluomi","zhouzi","bingsha","suannai","pisa","haixing","haizhe","tongluoshao","nuomici","kuangquanshui","roujiamo","cha","zhangyuxiaowanzi","chengzhi","yuancaitou","baicai"],"roughNotation":{"enable":false,"underline":{"type":"underline","color":"blue"},"circle":{"type":"circle","color":"red"},"box":{"type":"box","color":"orange"},"highlight":{"type":"highlight","color":"yellow","iterations":1,"multiline":true},"bracket":{"type":"bracket","color":"red","padding":[2,10],"brackets":["left","right"],"strokeWidth":3},"strikeThrough":{"type":"strike-through","color":"red"},"crossedOff":{"type":"crossed-off","color":"red"}}},"hooks":{},"default":{"version":"v2.2.8","commentTyping":"https://files.cnblogs.com/files/wangyang0210/commentTyping.js?t=1676464468","iconfont":"https://at.alicdn.com/t/c/font_3628204_t6n3fw8b1zn.js","avatar":"https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114123823_default_avatar.webp","mojs":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/mo-js/0.288.2/mo.min.js","moment":"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/moment.js/2.29.1/moment.min.js","gsap":"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gsap/3.9.1/gsap.min.js","highlight":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/highlight.js/11.4.0/highlight.min.js","hljscss":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/highlight.js/11.4.0/styles/","fancybox":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/fancybox/3.5.7/jquery.fancybox.min.js","fancyboxcss":"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/fancybox/3.5.7/jquery.fancybox.min.css","bootstrap":"https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/bootstrap/5.0.0-beta3/js/bootstrap.min.js","clipboard":"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/clipboard.js/2.0.10/clipboard.min.js","optiscroll":"https://npm.elemecdn.com/optiscroll@3.2.1/dist/optiscroll.min.js","optiscrollcss":"https://npm.elemecdn.com/optiscroll@3.2.1/dist/optiscroll.css","snapsvg":"https://npm.elemecdn.com/snapsvg-cjs@0.0.6/dist/snap.svg.js","toprogress":"https://npm.elemecdn.com/toprogress@0.1.3/ToProgress.min.js","jqueryrotate":"https://files.cnblogs.com/files/wangyang0210/jQueryRotateCompressed.js?t=1677086282","aplayer":"https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.js","aplayercss":"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.css","meting":"https://cdn.staticfile.org/meting/2.0.1/Meting.min.js","roughNotation":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/rough-notation/0.5.1/rough-notation.iife.min.js"}}');let t={url:"",user:"",pageType:"",articleId:""};t.url=window.location.href;let n=t.url.split("/");t.user=n[3],t.homeUrl=[n[0],n[1],n[2],n[3]].join("/");let o=$("#topics").length;t.pageType=o?$("#bookListFlg").length?"books":$("#linkListFlg").length?"links":"article":"home",o&&(t.articleId=n[n.length-1].split(".")[0]);var a=t,r=m(5299);function i(e,t){const n=e.split("."),o=t.split(".");let a=0;for(;a<n.length||a<o.length;){let e=0,t=0;if(a<n.length&&(e=parseInt(n[a])),a<o.length&&(t=parseInt(o[a])),e>t)return 1;if(e<t)return-1;a++}return 0}var l={getTodayStart:function(){return moment().startOf("day").format("x")},getTodayEnd:function(){return moment().endOf("day").format("x")},getYesterdayStart:function(){return moment().subtract(1,"days").startOf("day").format("x")},getYesterdayEnd:function(){return moment().subtract(1,"days").endOf("day").format("x")},getTodayDate:function(){return moment().format("MM-DD")},articleInfo:function(e,t){let n=1===t?"icon-marketing_fill":"icon-label-fill",o=1===t?"article-tag-class-color":"article-tag-color";$.each(e,(t=>{let a=$(e[t]);a.prepend('<span class="iconfont '+n+'"></span>'),$("#articleInfo").append('<a href="'+a.attr("href")+'" target="_blank"><span class="article-info-tag '+o+'">'+a.text()+"</span></a>")}))},tempReplacement:function(e,t,n){let o=new RegExp("##"+t+"##","g");return e.replace(o,n)},batchTempReplacement:function(e,t){let n=e;return $.each(t,(function(e){let o=t[e],a=new RegExp("##"+o[0]+"##","g");n=n.replace(a,o[1])})),n},dynamicLoadingCss:function(e){$("head").append("<link>"),$("head").children(":last").attr({rel:"stylesheet",type:"text/css",href:e})},dynamicLoadingJs:function(e){return new Promise(((t,n)=>{$.ajax({type:"GET",dataType:"script",cache:!0,url:e,success:function(e){t(e)},error:function(e){n(e)}})}))},htmlFiltrationScript:function(e){let t=new RegExp("<script.*<\/script>","ig");return e.replace(t,"")},clearIntervalTimeId:function(e){null!=e&&window.clearInterval(e)},actScroll:function(e,t){$("html,body").stop().animate({scrollTop:e},t)},getScrollPercent:function(){return($(window).scrollTop()/($(document).height()-$(window).height())*100).toFixed(0)},randomNum:function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1);case 2:return parseInt(Math.random()*(t-e+1)+e);default:return 0}},setDomHomePosition:function(){$("#home").css("margin-top",$(".main-header").outerHeight()+"px")},getRunDate:function(e){let t=e.split("-"),n=new Date;n.setUTCFullYear(t[0],t[1]-1,t[2]),n.setUTCHours(0,0,0,0);let o=n,a=((new Date).getTime()-o.getTime())/864e5,r=Math.floor(a),i=-24*(r-a),l=Math.floor(i),s=-60*(l-i),c=Math.floor(-60*(l-i));return{daysold:r,hrsold:l,minsold:c,seconds:Math.floor(-60*(c-s)).toString()}},setCookie:function(e,t,n){let o=new Date;o.setTime(o.getTime()+1e3*n),document.cookie=e+"="+escape(t)+"; expires="+o.toGMTString()+"; path=/"},getCookie:function(e){let t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return t=document.cookie.match(n),t?unescape(t[2]):null},randomString:function(e){e=e||32;let t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=t.length,o="";for(let a=0;a<e;a++)o+=t.charAt(Math.floor(Math.random()*n));return o},minToTime:function(e){let t=parseInt(e),n=parseInt(60*(e-t));return n=1===(""+n).length?"0"+n:n,`${t}:${n}`},compareVersion:i,getVersion:function(){return(0,r.W)("https://api.github.com/repos/wangyang0210/cnblogs-theme/releases/latest").then((e=>{localStorage.setItem("version",e.tag_name),localStorage.setItem("repoUrl",e.html_url)})),i(localStorage.getItem("version"),$.__config.default.version)}},s=m(434);$(document).ready((function(){$.__config=$.extend(!0,e,window?.cnblogsConfig||{}),$.__status=a,$.__tools=l,$.__timeIds={},$.__event={},$.__config.info.name||=$.__status.user,$.__tools.dynamicLoadingJs($.__config.default.moment).then((e=>{m(2258)(`./${$.__status.pageType}`).then((e=>{const t=e.default;m.e(910).then(m.bind(m,6361)).then((e=>{(0,e.default)(),t(),m.e(289).then(m.bind(m,7987)).then((e=>{(0,e.default)(),$.__tools.setDomHomePosition(),s.Z.handle.scroll(),s.Z.handle.resize()}))}))}))})).catch((e=>console.error("moment.js",e)))}))}(),g=m.O(g)}();