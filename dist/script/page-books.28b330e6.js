"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[111],{953:function(e,t){t.A='<div class="book-card"> <div class="content-wrapper"> <img src="##cover##" alt="" class="book-card-img"> <div class="card-content"> <div class="book-name" title="##name##">##name##</div> <div class="rate"> <fieldset class="rating book-rate"> ##scoreHtml## </fieldset> <span class="book-voters card-vote"> ##infoHtml## </span> </div> </div> </div> <div class="book-by"> <i class="iconfont icon-book" title="阅读时间" style="display:##readDateStyle##"></i> ##readDate## <i class="iconfont icon-schedule" title="阅读进度" style="display:##readPercentageStyle##"></i> ##readPercentage## </div> </div>'},736:function(e,t,a){a.a(e,(async function(e,o){try{a.r(t),a.d(t,{default:function(){return r}});var n=a(953),i=a(650),c=a(508),s=e([i,c]);function r(){if((0,c.default)(),$.__config.bookList.length){a.e(489).then(a.bind(a,451));let e=$("#cnblogs_post_body"),t="";const o={formerName:"原　名：",author:"作　者：",translator:"译　者：",press:"出版社：",year:"出版年：",direct:"导　演: ",scenarist:"编　剧: ",star:"主　演: ",type:"类　型: ",productionCountry:"制片国家/地区: ",language:"语　言: ",releaseDate:"上映日期: ",filmLength:"片　长: ",alias:"别　名: "};$.__config.bookList.forEach((e=>{e.title&&(t+=`<h1 class="iconfont ${e.icon}">${e.title}</h1>`),t+='<div class="book-cards">',e.books.forEach((e=>{let a=n.A,i="",c="";if(e?.score>0){const t=Math.floor(e.score),a=e.score>t?'<i class="iconfont icon-star-half"></i>':"",o='<i class="iconfont icon-icon-star"></i>'.repeat(5-t);i='<i class="iconfont icon-star-full"></i>'.repeat(t)+a+o}else i='<i class="iconfont icon-icon-star"></i>'.repeat(5);Object.entries(o).forEach((([t,a])=>{e?.[t]&&(c+=`<span title="${e?.[t]}">${a} ${e?.[t]}</span><br>`)})),a=$.__tools.batchTempReplacement(a,[["cover",e.cover||""],["name",e.name||""],["readDate",e?.readDate||""],["readDateStyle",e?.readDate?"initial;":"none"],["readPercentage",e?.readPercentage||""],["readPercentageStyle",e?.readPercentage?"initial;":"none"],["scoreHtml",i],["infoHtml",c]]),t+=a})),t+="</div>"}));let i=$(".articleSuffix-flg");i.length?i.before(t):e.append(t)}(0,i.A)()}[i,c]=s.then?(await s)():s,o()}catch(l){o(l)}}))}}]);