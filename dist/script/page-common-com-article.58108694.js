"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[6148],{19708:function(t,e,i){function n(s){let e=$("body"),i=$("#cnblogs_post_body"),n=i.find(":header");if(0<n.length){let t=[],o=($.each(n,function(){t.push(parseInt($(this)[0].tagName.replace(/H/g,"")))}),a=t,[...new Set(a)].sort()),l="";$.each(n,function(){let t=$(this),e=parseInt(t[0].tagName.replace(/H/g,"")),i=t.attr("id"),n="tid-"+s.__tools.randomString(6);if(t.attr("tid",n),!i||/^[\d]+.*/.test(i)){if(i){let t=$('.toc a[href="#'+i+'"]');t.length&&t.attr("href","#"+n)}i=n,t.attr("id",i)}var a=0===(a=o.indexOf(e))||-1===a?"":"&nbsp;&nbsp;&nbsp;&nbsp;".repeat(a);l+='<li class="nav-item"><a class="nav-link" href="#'+i+'" goto="'+n+'" onclick="return false;">'+a+t.text()+"</a></li>"}),a=s.__tools.tempReplacement('<div> <nav id="articleDirectory"> <ul class="nav nav-pills"> ##dirHtml## </ul> </nav> </div>',"dirHtml",l),i.append(a),e.attr("data-bs-spy","scroll"),e.attr("data-bs-target","#articleDirectory"),e.attr("data-bs-offset","0"),e.attr("tabindex","0"),e.scrollspy({target:"#articleDirectory"}),s.__config.articleDirectory.autoWidthScroll||($("#articleDirectory ul li").addClass("articleDirectory-overflow"),$("#articleDirectory ul li a").addClass("articleDirectory-overflow")),s.__event.scroll.handle.push(()=>{let t=$("#articleDirectory");s.__event.scroll.temScroll<s.__event.scroll.docScroll&&s.__event.scroll.homeScroll<=s.__event.scroll.docScroll&&t.addClass("articleDirectoryFixed"),s.__event.scroll.temScroll>s.__event.scroll.docScroll&&s.__event.scroll.homeScroll>=s.__event.scroll.docScroll&&t.removeClass("articleDirectoryFixed")}),s.__event.resize.handle.push(()=>{const t=parseFloat(document.body.clientWidth),e=$("#articleDirectory");var i,n,a,o;0<e.length&&(a=(n=(t-$("#home").outerWidth(!1))/2)-(i=e.outerWidth(!0))-5,o=$(".main-header").outerHeight(),"left"===s.__config.articleDirectory.position?e.css({top:o+5+"px",left:(0<a?a:5)+"px",width:(190<n&&n<260?n-10:i)+"px"}):e.css({top:o+5+"px",right:(0<a?a:5)+"px",width:(190<n&&n<260?n-10:i)+"px"}),t<=s.__config.articleDirectory.minBodyWeight||n<=190?e.hide():e.show())}),$("#articleDirectory .nav-link").click(function(){let t=$(':header[tid="'+$(this).attr("goto")+'"]');t.length&&s.__tools.actScroll(t.offset().top+3,500)})}var a}i.d(e,{Z:function(){return n}}),i(85169)},78991:function(t,e,i){function n(n){{let t=n.replace(/[\r\n]/g,""),e=$("#digg_count"),i=t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/)||t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/)||t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*/);return{date:void 0===i[1]?"1970-01-01 00:00":i[1],vnum:void 0===i[2]?"0":i[2],cnum:void 0===i[3]?"0":i[3],tnum:void 0===i[4]?e.length?e.text():"0":i[4]}}}i.d(e,{Z:function(){return n}})},15715:function(t,e,i){i.r(e),i.d(e,{default:function(){return l}});var n=i(78991),o=["hebaodan","bingtanghulu","kesong","qianceng","fengmi","feiyuguantou","shengjian","youtiao","yuzijiang","zhutongfan","doujiang","sanmingzhi","paofu","shanbei","dangaojuan","futejia","huangyou","xiangchang","banji","danta","qingning","lajiao","shizi","mojituo","pijiu","putaojiu","kouxiangtang","xiangcaobingqilin","jiaozi","tilamisu","huoguo","hongshu","bingkuai","mianhuatang","paobing","meishikafei","mantou","qishui","ganlan","jiroujuan","guodong","baozi","pingguo","chengzi","qingjiao","jidan","xihongshi","mangguo","baocai","niunai","mianbao","huluobu","zhangyu","pangxie","longxia","yangcong","rou","jitui","huage","xianyu","mogu","qiezi","xilanhua","ningmeng","liulian","banli","sanwenyu","tudou","xigua","nangua","huolongguo","fantuan","zhusun","shuiluobu","shanzhu","lanmei","shiliu","yezi","tiangua","mihoutao","boluo","kaixinguo","hetao","xiaweiyiguo","huasheng","bigenguo","kuihuazi","songzi","xiguazi","badanmu","yaoguo","danhuangsu","dangao","binggan","buding","tangguo","qiaokeli","hongzao","candou","putaogan","manyuemei","taozi","xiangjiao","caomei","niuyouguo","hamigua","chelizi","li","bale","kafei1","shutiao","zhenzhunaicha","xuegao","nailao","kele","tiantong","hanbao","xiezishousi","baomihua","regou","makalong","tianfuluo","juzi","baixiangguo","putao","shaomai","yumi","pipa","yangtao","youzi","lianwu","wuhuaguo","paomian","wandou","huanggua","suantou","tiantianquan","shupian","huafubing","bangbangtang","shousi","lizhi","doufu","mocha","boluomi","zhouzi","bingsha","suannai","pisa","haixing","haizhe","tongluoshao","nuomici","kuangquanshui","roujiamo","cha","zhangyuxiaowanzi","chengzhi","yuancaitou","baicai"],_=i(13429),a=i(19708);function l(d){d.__config.animate.articleBanner.enable&&i.e(18).then(i.bind(i,97715));for(let t=0;t<=10;t++)setTimeout(function(){let t=$("#main");t.find(".cnblogs-markdown").removeClass("cnblogs-markdown"),t.find(".cnblogs-post-body").removeClass("cnblogs-post-body")},500*t);var e,s=d,h=$("#cb_post_title_url").text();if(s.__config.animate.articleTitle.enable){var c=[h],r=["#fff"],g=s.__tools.setDomHomePosition;void 0===r&&(r=["#fff"]);let t=!0,e=document.getElementById("sbTitleConsole"),i=1,n=1,a=!1,o=document.getElementById("sbTitleText"),l=(e.innerHTML="_",o.setAttribute("style","color:"+r[0]),window.setInterval(function(){0===i&&!1===a?(a=!0,o.innerHTML=c[0].substring(0,i),window.setTimeout(function(){var t=r.shift(),t=(r.push(t),c.shift());c.push(t),n=1,o.setAttribute("style","color:"+r[0]),i+=n,a=!1},1e3)):!1===a&&(c[0].substring(0,i)!==c[0]?(o.innerHTML=c[0].substring(0,i),i+=n):window.clearInterval(l)),g&&g()},180));window.setInterval(function(){t=!0===t?!(e.style.visibility="hidden"):(e.style.visibility="visible",!0)},400)}else $("#sbTitleText").text(h).css("color","#fff");$(".inner").css("max-width","100vw"),s.__tools.setDomHomePosition(),$("#articleInfo").append('<p class="article-info-text"></p>'),s.__timeIds.postDescTid=window.setInterval(()=>{var i;"..."!==$("#post_view_count").text()&&"..."!==$("#post_comment_count").text()&&(i=$(".postDesc").show().text(),$("#articleInfo p.article-info-text").html(function(){let t=(0,n.Z)(i),e=$("#cnblogs_post_body").text().length;return'<span class="postMeta"><i class="iconfont icon-schedule"></i>'+t.date.replace(/-/g,"/")+'<i class="iconfont icon-browse"></i>'+t.vnum+'<i class="iconfont icon-interactive"></i>'+t.cnum+'<i class="iconfont icon-hot"></i>'+t.tnum+'<br><i class="iconfont icon-article"></i>'+e+'<i class="iconfont icon-kafei"></i>'+s.__tools.minToTime(e/500)+" ~ "+s.__tools.minToTime(e/300)+"</span>"}()),s.__tools.setDomHomePosition(),s.__tools.clearIntervalTimeId(s.__timeIds.postDescTid))},1e3),s.__timeIds.articleInfoClassTId=window.setInterval(()=>{var t=$("#BlogPostCategory").find("a");0<t.length&&(s.__tools.articleInfo(t,1),s.__tools.setDomHomePosition(),s.__tools.clearIntervalTimeId(s.__timeIds.articleInfoClassTId))},1e3),s.__timeIds.articleInfoTagTId=window.setInterval(()=>{var t=$("#EntryTag").find("a");0<t.length&&(s.__tools.articleInfo(t,2),s.__tools.setDomHomePosition(),s.__tools.clearIntervalTimeId(s.__timeIds.articleInfoTagTId))},1e3),s.__config.articleContent.link&&($("#cnblogs_post_body a").addClass("iconfont icon-fenxiang"),$(".footnote-ref a").removeClass("iconfont icon-fenxiang"),$(".footnotes-list a").removeClass("iconfont icon-fenxiang"));{let a=$("#cnblogs_post_body").find(":header");s.__config.articleContent.emoji&&0<a.length&&(i.e(5014).then(i.t.bind(i,85973,23)),a.html((t,e)=>{let i=[],n=Math.floor(Math.random()*(160-t)+t);-1==i.indexOf(n)?(i.push(n),$('<svg class="icon"> <use xlink:href="#icon-'+o[n]+'"></use></svg>').prependTo(a[t])):t--}))}$(".blogpost-body p").html((t,e)=>/^\?&gt;/.test(e)?'<p class="tip">'+e.slice(5).trim()+"</p>":/^!&gt;/.test(e)?'<p class="warn">'+e.slice(5).trim()+"</p>":void 0),"books"!==d.__status.pageType&&(0,a.Z)(d),(e=d).__timeIds.greenChannelDiggTId=window.setInterval(()=>{let t=$("#green_channel_digg");t.length&&(t.after('<button class="custom-btn btn-11" onclick="'+t.attr("onclick")+'">推荐该文<div class="dot"></div></button>'),e.__tools.clearIntervalTimeId(e.__timeIds.greenChannelDiggTId))},1e3),e.__timeIds.greenChannelFollowTId=window.setInterval(()=>{let t=$("#green_channel_follow");t.length&&(t.after('<button class="custom-btn btn-12" onclick="'+t.attr("onclick")+'"><span>关注博主</span><span>关注博主</span></button>'),e.__tools.clearIntervalTimeId(e.__timeIds.greenChannelFollowTId))},1e3),e.__timeIds.greenChannelFavoriteTId=window.setInterval(()=>{let t=$("#green_channel_favorite");t.length&&(t.after('<button class="custom-btn btn-7" onclick="'+t.attr("onclick")+'"><span>收藏本文</span></button>'),e.__tools.clearIntervalTimeId(e.__timeIds.greenChannelFavoriteTId))},1e3),e.__timeIds.greenChannelWeiboTId=window.setInterval(()=>{let t=$("#green_channel_weibo");t.length&&(t.after('<button class="custom-btn btn-15" onclick="'+t.attr("onclick")+'">分享微博</button>'),e.__tools.clearIntervalTimeId(e.__timeIds.greenChannelWeiboTId))},1e3),e.__timeIds.greenChannelWechatTId=window.setInterval(()=>{let t=$("#green_channel_wechat");t.length&&(t.after('<button class="custom-btn btn-13" onclick="'+t.attr("onclick")+'">分享微信</button>'),e.__tools.clearIntervalTimeId(e.__timeIds.greenChannelWechatTId))},1e3);{let t=(h=d).__tools.ternaryOperation(h.__config.articleSuffix.imgUrl,h.__config.info.avatar,_),e=$("#articleAuthor"),i=$("#articleSource"),a=e.length?e.val():h.__config.info.name,o=i.length?i.val():h.__status.url,n=i.length?i.val():h.__status.homeUrl,l=e.length||i.length?"原":"本",s=h.__config.articleSuffix.aboutHtml||'评论和私信会在第一时间回复。或者<a href="https://msg.cnblogs.com/msg/send/'+h.__status.user+'" target="_blank">直接私信</a>我。',c=h.__config.articleSuffix.copyrightHtml||'本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" alt="BY-NC-SA" title="BY-NC-SA" target="_blank">BY-NC-SA</a> 许可协议。转载请注明出处！',r=h.__config.articleSuffix.supportHtml||'如果您觉得文章对您有帮助，可以点击文章右下角<strong><span style="color: #ff0000; font-size: 12pt;">【<a id="post-up" onclick="votePost('+h.__status.articleId+',\'Digg\')" href="javascript:void(0);">推荐</a>】</span></strong>一下。',g=[["origin",l],["imgUrl",t],["homeUrl",n],["author",a],["source",o],["aboutHtml",s],["copyrightHtml",c],["supportHtml",r]],u=h.__tools.batchTempReplacement('<span class="articleSuffix-flg"> <br><p class="essaySuffix-eof">__EOF__</p> <div id="articleSuffix"> <div class="articleSuffix-bg"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.78 155.96"> <path d="M10.5,99.81a1.9,1.9,0,0,0-.53-.09,1.66,1.66,0,0,0-1.64,1.65A1.64,1.64,0,0,0,10,103a1.57,1.57,0,0,0,.87-.25l26.76,26.82.45-1.08L11.52,101.91A1.65,1.65,0,0,0,10.5,99.81Zm-.13,2a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.58.58,0,0,1,.57-.57h0a.57.57,0,0,1,.56.58A.55.55,0,0,1,10.37,101.77Z" style="fill:#c5c9e0"></path><path d="M56.15,117.58H39.06l0-.09a1.65,1.65,0,0,0-1.36-1H37.5a1.65,1.65,0,1,0,1.56,2.19H55.7L92.92,156h41.44v-1.08h-41Zm-18.25.94a.56.56,0,0,1-.79,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h0a.58.58,0,0,1,.57.58A.54.54,0,0,1,37.9,118.52Z" style="fill:#c5c9e0"></path><path d="M23.52,50.32a1.65,1.65,0,0,0,1.55-1.11H55.28l48-48.13h31.06V0H102.85l-48,48.13H25.07a1.64,1.64,0,0,0-2.09-1,1.64,1.64,0,0,0,.54,3.2Zm0-2.21a.57.57,0,0,1,0,1.13.57.57,0,1,1,0-1.13Z" style="fill:#c5c9e0"></path><polygon points="102.86 0 102.86 0 102.86 0 102.86 0" style="fill:#c5c9e0"></polygon><path d="M107.72,12.14h26.64V11.07H107.27L57.4,61H3.09a1.66,1.66,0,0,0-1.45-.86H1.52A1.65,1.65,0,1,0,2.81,63a1.59,1.59,0,0,0,.45-.87H57.85ZM2.05,62.23a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h.09a.57.57,0,0,1,.32,1Z" style="fill:#c5c9e0"></path><path d="M134.36,43.22V42.14h-22.3l-9.62,9.63a1.64,1.64,0,0,0-2.19.77,1.61,1.61,0,0,0-.17.71,1.65,1.65,0,1,0,3.29,0,1.61,1.61,0,0,0-.16-.72l9.3-9.32Zm-32.64,10.6a.57.57,0,0,1,0-1.13.57.57,0,0,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M147,52.3l-9,9H111.48a1.64,1.64,0,0,0-1.61-1.33h-.14a1.65,1.65,0,1,0,1.6,2.41h27.19l9.26-9.29L147,52.3Zm-37.15,9.85a.56.56,0,0,1-.56-.57h0a.56.56,0,0,1,.56-.56h0a.57.57,0,1,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M66.79,75.35l11,11.06h56.53V85.33H78.27l-11-11.06H49.49L37.12,86.67a1.64,1.64,0,0,0-2.09,1,1.61,1.61,0,0,0-.09.54,1.65,1.65,0,0,0,3.29,0,1.68,1.68,0,0,0-.26-.89l12-12ZM36.58,88.79a.57.57,0,1,1,.57-.56A.57.57,0,0,1,36.58,88.79Z" style="fill:#c5c9e0"></path><path d="M110.61,95.55,92.8,113.4a1.62,1.62,0,1,0,.77.76l17.49-17.53h23.31V95.55ZM92.49,115.28a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.57-.57h0a.58.58,0,0,1,.56.58A.55.55,0,0,1,92.49,115.28Z" style="fill:#c5c9e0"></path><path d="M97.89,122.3H76.62L64.2,109.85a1.65,1.65,0,0,0-.77-2.2,1.77,1.77,0,0,0-.72-.17h-.14a1.65,1.65,0,0,0,.15,3.29,1.58,1.58,0,0,0,.71-.17l12.74,12.77H98.34l17.48-17.52h18.54v-1.08h-19ZM63.12,109.53a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,1.14,0A.54.54,0,0,1,63.12,109.53Z" style="fill:#c5c9e0"></path> </svg> </div> <div class="articleSuffix-left"> <img src="##imgUrl##"/> </div> <div class="articleSuffix-right"> <item> <li> <b>##origin##文作者：</b> <a href="##homeUrl##" target="_blank">##author##</a> </li> <li> <b>##origin##文链接：</b> <a href="##source##" target="_blank">##source##</a> </li> <li> <b>关于博主：</b> ##aboutHtml## </li> <li> <b>版权声明：</b> ##copyrightHtml## </li> <li> <b>声援博主：</b> ##supportHtml## </li> </item> </div> <div style="clear:both"></div> </div> </span> ',g);if($("#cnblogs_post_body").append(u),h.__config.articleSuffix.copyText.enable){let t=h.__config.articleSuffix.copyText.length||30,n=h.__config.articleSuffix.copyText.copyright||c;document.body.addEventListener("copy",function(e){if(window.getSelection().toString()&&window.getSelection().toString().length>t){var i;let t=e.clipboardData||window.clipboardData;t&&(e.preventDefault(),e=window.getSelection().toString()+"<br /><br /> ———————————————— <br />"+n+" <br />"+`作者：${a} <br />`+`原文链接：${o} <br />`,i=window.getSelection().toString()+"\n\n ———————————————— \n"+n.replace(/<\/?.+?>/g,"").replace(/ /g,"")+` 
`+`作者：${a} 
`+`原文链接：${o} 
`,t.setData("text/html",e),t.setData("text/plain",i))}})}}{var t=d;let n=()=>{let a=$(".feedbackItem");0<a.length&&($.each(a,t=>{let o=$(a[t]),e=o.find(".feedbackCon"),i=o.find(".feedbackListSubtitle"),n=e.length?e.find(".blog_comment_body"):[],l,s=n.length?n.attr("id").split("_"):void 0;if(s&&0<s.length){let t=s[s.length-1],e=t.toString().match(/\d/g),i=($.isArray(e)&&(t=e.join("")),$("#comment_"+t+"_avatar")),n=0<i.length?i.text().trim():_,a=$("#a_comment_author_"+t);l='<div class="feedbackAvatar"><a href="'+(a.length?a.attr("href"):"javascropt:void(0);")+'" target="_blank"><img src="'+n+'"/></a></div>',o.prepend(l)}i.length&&i.find(".louzhu").length&&i.addClass("feedbackListSubtitle-louzhu")}),$(a[0]).css("padding-top","0"),$(a[a.length-1]).css("padding-bottom","0"),t.__config.animate.avatar.enable&&$(".feedbackAvatar").addClass("img-rounded"))};t.__timeIds.commentTId=window.setInterval(()=>{0<$(".feedbackItem").length&&(n(),t.__tools.clearIntervalTimeId(t.__timeIds.commentTId))},1e3),$(document).ajaxSuccess(function(t,e,i){i.url.includes("GetComments.aspx")&&n()})}}},13429:function(t,e,i){t.exports=i.p+"images/53abc64338825f4038d6.webp"}}]);