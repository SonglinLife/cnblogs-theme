"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[9628],{98363:function(e,t,n){n.d(t,{Gl:function(){return r},Oh:function(){return u},rR:function(){return l},G6:function(){return c},wi:function(){return a}});t=n(9669);const o=n.n(t)().create({timeout:15e3}),i=e=>(e.response&&console.error("errorHandler: "+e.response),Promise.reject(e));o.interceptors.request.use(e=>(e.headers["Content-Type"]||(e.headers["Content-Type"]="application/json"),e.requestBaseUrl&&(e.baseURL=e.requestBaseUrl||""),e),i),o.interceptors.response.use(e=>e.data,i);var s=o;function r(e,t){return s({url:t,method:"GET",requestBaseUrl:e})}function a(e,t,n){return s({url:t,method:"GET",params:n,requestBaseUrl:e})}function c(e,t){return s({url:t,requestBaseUrl:e})}function l(){return s({requestBaseUrl:"https://v2.jinrishici.com/one.json?client=npm-sdk/1.0"})}function u(e){return s({requestBaseUrl:"https://v2.jinrishici.com/one.json?client=npm-sdk/1.0&X-User-Token="+e})}},78991:function(e,t,n){function o(o){{let e=o.replace(/[\r\n]/g,""),t=$("#digg_count"),n=e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*/);return{date:void 0===n[1]?"1970-01-01 00:00":n[1],vnum:void 0===n[2]?"0":n[2],cnum:void 0===n[3]?"0":n[3],tnum:void 0===n[4]?t.length?t.text():"0":n[4]}}}n.d(t,{Z:function(){return o}})},60565:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var o=n(78991),a=n(98363);function i(s){(()=>{$("#homeTopTitle span").text(s.__config.info.name),s.__config.animate.infoName.enable&&$("#homeTopTitle span").hover(function(){$("#homeTopTitle span").css("animation","pageTitleText 2s infinite"),$("#homeTopTitle span").css("-webkit-animation","pageTitleText 1s infinite")},function(){$("#homeTopTitle span").css("animation","none"),$("#homeTopTitle span").css("-webkit-animation","none")});let e=s.__config.banner.home.title,n=$("#hitokoto");if($.isArray(e)&&0<e.length)return i=s.__tools.randomNum(0,e.length-1),n.html(e[i]).css("display","-webkit-box"),s.__tools.setDomHomePosition();if("string"==typeof e&&""!==e)return n.html(e).css("display","-webkit-box"),s.__tools.setDomHomePosition();let o=["当你凝视深渊时，深渊也在凝视着你。","有的人25岁就死了，只是到75岁才埋葬"];function t(e){var t;"success"===e?.status||0===e.errno?(t=e.data.content||e.note,e=e.content||`《${e.data.origin.title}》 - ${e.data.origin.dynasty} - `+e.data.origin.author,n.html(t).css("display","-webkit-box"),$("#hitokotoAuthor").text(e).show()):(t=s.__tools.randomNum(0,o.length-1),n.html(o[t]).css("display","-webkit-box")),s.__tools.setDomHomePosition()}if("one"===s.__config.banner.home.titleSource&&s.__tools.getJsonp().then(e=>(t(e),!1)),"jinrishici"===s.__config.banner.home.titleSource){const s="jinrishici-token";var i=window.localStorage.getItem(s)||"";i?(0,a.Oh)(encodeURIComponent(i)).then(e=>t(e)):(0,a.rR)().then(e=>{window.localStorage.setItem(s,e.token),t(e)})}})(),$(".scroll-down").click(function(){var e=$("#home").offset().top+10;s.__tools.actScroll(e,500)});{let e=$("#main .c_b_p_desc_readmore"),i=$("#main .postTitle");function r(e){e=(0,o.Z)(e);return'<span class="postMeta"><i class="iconfont icon-schedule"></i>发表于 '+e.date+'<i class="iconfont icon-browse"></i>阅读：'+e.vnum+'<i class="iconfont icon-interactive"></i>评论：'+e.cnum+'<i class="iconfont icon-hot"></i>推荐：'+e.tnum+"</span>"}e.text("阅读全文 »"),$.each(i,e=>{let t=$(i[e]),n=t.text(),o=t.nextAll(".postDesc:eq(0)").text();t.after(r(o)),/\[置顶\]/.test(n)&&t.append('<span class="postSticky">置顶</span>'),t.find("a").text(n.replace("[置顶]",""))}),i=$("#main .entrylistPosttitle"),$.each(i,e=>{let t=$(i[e]),n=t.nextAll(".entrylistItemPostDesc:eq(0)").text();t.after(r(n))})}{let o=$(".c_b_p_desc");$.each(o,e=>{let t=$(o[e]),n=t.find("img.desc_img");0<n.length&&(e=n.attr("src"),n.hide(),t.css("width","60%"),t.parent("div").css("min-height","150px"),t.after('<div class="c_b_p_desc_img"><div style="background: url(\''+e+"') center center / contain no-repeat;\"></div></div>"))})}s.__config.animate.homeBanner.enable&&n.e(8086).then(n.t.bind(n,43255,23)).then(e=>{$(".main-header").circleMagic(s.__config.animate.homeBanner.options)})}}}]);