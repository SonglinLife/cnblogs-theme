"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[6148],{9708:function(t,e,n){n.d(e,{Z:function(){return i}});n(5169);function i(t){let e=$("body"),n=$("#cnblogs_post_body"),i=n.find(":header");if(i.length>0){let o=[];$.each(i,(function(){o.push(parseInt($(this)[0].tagName.replace(/H/g,"")))}));let l=(a=o,[...new Set(a)]).sort(),s="";$.each(i,(function(){let e=$(this),n=parseInt(e[0].tagName.replace(/H/g,"")),i="_"+e.attr("id"),a="tid-"+t.__tools.randomString(6);if(e.attr("tid",a),!i||/^[\d]+.*/.test(i)){if(i){let t=$('.toc a[href="#'+i+'"]');t.length&&t.attr("href","#"+a)}i=a,e.attr("id",i)}let o=l.indexOf(n),c=0===o||-1===o?"":"&nbsp;&nbsp;&nbsp;&nbsp;".repeat(o);s+='<li class="nav-item"><a class="nav-link" href="#'+i+'" goto="'+a+'" onclick="return false;">'+c+e.text()+"</a></li>"}));let c=t.__tools.tempReplacement('<div> <nav id="articleDirectory"> <ul class="nav nav-pills"> ##dirHtml## </ul> </nav> </div>',"dirHtml",s);n.append(c),e.attr("data-bs-spy","scroll"),e.attr("data-bs-target","#articleDirectory"),e.attr("data-bs-offset","0"),e.attr("tabindex","0"),e.scrollspy({target:"#articleDirectory"}),t.__config.articleDirectory.autoWidthScroll||($("#articleDirectory ul li").addClass("articleDirectory-overflow"),$("#articleDirectory ul li a").addClass("articleDirectory-overflow")),t.__event.scroll.handle.push((()=>{let e=$("#articleDirectory");t.__event.scroll.temScroll<t.__event.scroll.docScroll&&t.__event.scroll.homeScroll<=t.__event.scroll.docScroll&&e.addClass("articleDirectoryFixed"),t.__event.scroll.temScroll>t.__event.scroll.docScroll&&t.__event.scroll.homeScroll>=t.__event.scroll.docScroll&&e.removeClass("articleDirectoryFixed")})),t.__event.resize.handle.push((()=>{const e=parseFloat(document.body.clientWidth),n=$("#articleDirectory");if(n.length>0){let i=$("#home").outerWidth(!1),a=n.outerWidth(!0),o=(e-i)/2,l=o-a-5,s=$(".main-header").outerHeight();if("left"===t.__config.articleDirectory.position)n.css({top:s+5+"px",left:(l>0?l:5)+"px",width:(o>190&&o<260?o-10:a)+"px"});else n.css({top:s+5+"px",right:(l>0?l:5)+"px",width:(o>190&&o<260?o-10:a)+"px"});e<=t.__config.articleDirectory.minBodyWeight||o<=190?n.hide():n.show()}})),$("#articleDirectory .nav-link").click((function(){let e=$(':header[tid="'+$(this).attr("goto")+'"]');e.length&&t.__tools.actScroll(e.offset().top+3,500)}))}var a}},8991:function(t,e,n){function i(t){return(t=>{let e=t.replace(/[\r\n]/g,""),n=$("#digg_count"),i=e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*/);return{date:void 0===i[1]?"1970-01-01 00:00":i[1],vnum:void 0===i[2]?"0":i[2],cnum:void 0===i[3]?"0":i[3],tnum:void 0===i[4]?n.length?n.text():"0":i[4]}})(t)}n.d(e,{Z:function(){return i}})},7024:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var i=n(8991);function a(t){(()=>{const e=$("#cb_post_title_url").text();t.__config.animate.articleTitle.enable?function(t,e,n,i,a,o){void 0===i&&(i=["#fff"]);let l=!0,s=document.getElementById(n),c=1,r=1,g=!1,u=document.getElementById(e);s.innerHTML="_",u.setAttribute("style","color:"+i[0]);let d=window.setInterval((function(){if(0===c&&!1===g)g=!0,u.innerHTML=t[0].substring(0,c),window.setTimeout((function(){let e=i.shift();i.push(e);let n=t.shift();t.push(n),r=1,u.setAttribute("style","color:"+i[0]),c+=r,g=!1}),1e3);else if(a&&c===t[0].length+1&&!1===g)g=!0,window.setTimeout((function(){r=-1,c+=r,g=!1}),1e3);else if(!1===g){let e=t[0].substring(0,c);a||e!==t[0]?(u.innerHTML=t[0].substring(0,c),c+=r):window.clearInterval(d)}o&&o()}),180);window.setInterval((function(){!0===l?(s.style.visibility="hidden",l=!1):(s.style.visibility="visible",l=!0)}),400)}([e],"sbTitleText","sbTitleConsole",["#fff"],!1,t.__tools.setDomHomePosition):$("#sbTitleText").text(e).css("color","#fff"),$(".inner").css("max-width","100vw"),t.__tools.setDomHomePosition()})(),$("#articleInfo").append('<p class="article-info-text"></p>'),t.__timeIds.postDescTid=window.setInterval((()=>{if("..."!==$("#post_view_count").text()&&"..."!==$("#post_comment_count").text()){let e=$(".postDesc").show().text();$("#articleInfo p.article-info-text").html(function(e){let n=(0,i.Z)(e),a=$("#cnblogs_post_body").text().length;return'<span class="postMeta"><i class="iconfont icon-schedule"></i>'+n.date.replace(/-/g,"/")+'<i class="iconfont icon-browse"></i>'+n.vnum+'<i class="iconfont icon-interactive"></i>'+n.cnum+'<i class="iconfont icon-hot"></i>'+n.tnum+'<br><i class="iconfont icon-article"></i>'+a+'<i class="iconfont icon-kafei"></i>'+t.__tools.minToTime(a/500)+" ~ "+t.__tools.minToTime(a/300)+"</span>"}(e)),t.__tools.setDomHomePosition(),t.__tools.clearIntervalTimeId(t.__timeIds.postDescTid)}}),1e3),t.__timeIds.articleInfoClassTId=window.setInterval((()=>{let e=$("#BlogPostCategory").find("a");e.length>0&&(t.__tools.articleInfo(e,1),t.__tools.setDomHomePosition(),t.__tools.clearIntervalTimeId(t.__timeIds.articleInfoClassTId))}),1e3),t.__timeIds.articleInfoTagTId=window.setInterval((()=>{let e=$("#EntryTag").find("a");e.length>0&&(t.__tools.articleInfo(e,2),t.__tools.setDomHomePosition(),t.__tools.clearIntervalTimeId(t.__timeIds.articleInfoTagTId))}),1e3),t.__config.articleContent.link&&($("#cnblogs_post_body a").addClass("iconfont icon-fenxiang"),$(".footnote-ref a").removeClass("iconfont icon-fenxiang"),$(".footnotes-list a").removeClass("iconfont icon-fenxiang")),(()=>{let e=$("#cnblogs_post_body").find(":header");if(t.__config.articleContent.iconfont&&e.length>0){let t=["hebaodan","bingtanghulu","kesong","qianceng","fengmi","feiyuguantou","shengjian","youtiao","yuzijiang","zhutongfan","doujiang","sanmingzhi","paofu","shanbei","dangaojuan","futejia","huangyou","xiangchang","banji","danta","qingning","lajiao","shizi","mojituo","pijiu","putaojiu","kouxiangtang","xiangcaobingqilin","jiaozi","tilamisu","huoguo","hongshu","bingkuai","mianhuatang","paobing","meishikafei","mantou","qishui","ganlan","jiroujuan","guodong","baozi","pingguo","chengzi","qingjiao","jidan","xihongshi","mangguo","baocai","niunai","mianbao","huluobu","zhangyu","pangxie","longxia","yangcong","rou","jitui","huage","xianyu","mogu","qiezi","xilanhua","ningmeng","liulian","banli","sanwenyu","tudou","xigua","nangua","huolongguo","fantuan","zhusun","shuiluobu","shanzhu","lanmei","shiliu","yezi","tiangua","mihoutao","boluo","kaixinguo","hetao","xiaweiyiguo","huasheng","bigenguo","kuihuazi","songzi","xiguazi","badanmu","yaoguo","danhuangsu","dangao","binggan","buding","tangguo","qiaokeli","hongzao","candou","putaogan","manyuemei","taozi","xiangjiao","caomei","niuyouguo","hamigua","chelizi","li","bale","kafei1","shutiao","zhenzhunaicha","xuegao","nailao","kele","tiantong","hanbao","xiezishousi","baomihua","regou","makalong","tianfuluo","juzi","baixiangguo","putao","shaomai","yumi","pipa","yangtao","youzi","lianwu","wuhuaguo","paomian","wandou","huanggua","suantou","tiantianquan","shupian","huafubing","bangbangtang","shousi","lizhi","doufu","mocha","boluomi","zhouzi","bingsha","suannai","pisa","haixing","haizhe","tongluoshao","nuomici","kuangquanshui","roujiamo","cha","zhangyuxiaowanzi","chengzhi","yuancaitou","baicai"];e.html(((n,i)=>{let a=[],o=Math.floor(Math.random()*(t.length-n)+n);-1==a.indexOf(o)?(a.push(o),$('<svg class="icon"> <use xlink:href="#icon-'+t[o]+'"></use></svg>').prependTo(e[n])):n--}))}})(),$(".blogpost-body p").html(((t,e)=>/^\?&gt;/.test(e)?'<p class="tip">'+e.slice(5).trim()+"</p>":/^!&gt;/.test(e)?'<p class="warn">'+e.slice(5).trim()+"</p>":void 0))}var o=n(9708);function l(t){t.__config.animate.articleBanner.enable&&n.e(18).then(n.bind(n,7715)),(()=>{for(let t=0;t<=10;t++)setTimeout((function(){let t=$("#main");t.find(".cnblogs-markdown").removeClass("cnblogs-markdown"),t.find(".cnblogs-post-body").removeClass("cnblogs-post-body")}),500*t)})(),a(t),"books"!==t.__status.pageType&&(0,o.Z)(t),function(t){t.__timeIds.greenChannelDiggTId=window.setInterval((()=>{let e=$("#green_channel_digg");e.length&&(e.after('<button class="custom-btn btn-11" onclick="'+e.attr("onclick")+'">推荐该文<div class="dot"></div></button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelDiggTId))}),1e3),t.__timeIds.greenChannelFollowTId=window.setInterval((()=>{let e=$("#green_channel_follow");e.length&&(e.after('<button class="custom-btn btn-12" onclick="'+e.attr("onclick")+'"><span>关注博主</span><span>关注博主</span></button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelFollowTId))}),1e3),t.__timeIds.greenChannelFavoriteTId=window.setInterval((()=>{let e=$("#green_channel_favorite");e.length&&(e.after('<button class="custom-btn btn-7" onclick="'+e.attr("onclick")+'"><span>收藏本文</span></button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelFavoriteTId))}),1e3),t.__timeIds.greenChannelWeiboTId=window.setInterval((()=>{let e=$("#green_channel_weibo");e.length&&(e.after('<button class="custom-btn btn-15" onclick="'+e.attr("onclick")+'">分享微博</button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelWeiboTId))}),1e3),t.__timeIds.greenChannelWechatTId=window.setInterval((()=>{let e=$("#green_channel_wechat");e.length&&(e.after('<button class="custom-btn btn-13" onclick="'+e.attr("onclick")+'">分享微信</button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelWechatTId))}),1e3)}(t),function(t){let e=t.__tools.ternaryOperation(t.__config.articleSuffix.imgUrl,t.__config.info.avatar,"https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114123823_default_avatar.webp"),n=$("#articleAuthor"),i=$("#articleSource"),a=n.length?n.val():t.__config.info.name,o=i.length?i.val():t.__status.url,l=i.length?i.val():t.__status.homeUrl,s=n.length||i.length?"原":"本",c=t.__config.articleSuffix.aboutHtml?t.__config.articleSuffix.aboutHtml:'评论和私信会在第一时间回复。或者<a href="https://msg.cnblogs.com/msg/send/'+t.__status.user+'" target="_blank">直接私信</a>我。',r=t.__config.articleSuffix.copyrightHtml?t.__config.articleSuffix.copyrightHtml:'本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" alt="BY-NC-SA" title="BY-NC-SA" target="_blank">BY-NC-SA</a> 许可协议。转载请注明出处！',g=t.__config.articleSuffix.supportHtml?t.__config.articleSuffix.supportHtml:'如果您觉得文章对您有帮助，可以点击文章右下角<strong><span style="color: #ff0000; font-size: 12pt;">【<a id="post-up" onclick="votePost('+t.__status.articleId+',\'Digg\')" href="javascript:void(0);">推荐</a>】</span></strong>一下。',u=[["origin",s],["imgUrl",e],["homeUrl",l],["author",a],["source",o],["aboutHtml",c],["copyrightHtml",r],["supportHtml",g]],d=t.__tools.batchTempReplacement('<span class="articleSuffix-flg"> <br><p class="essaySuffix-eof">__EOF__</p> <div id="articleSuffix"> <div class="articleSuffix-bg"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.78 155.96"> <path d="M10.5,99.81a1.9,1.9,0,0,0-.53-.09,1.66,1.66,0,0,0-1.64,1.65A1.64,1.64,0,0,0,10,103a1.57,1.57,0,0,0,.87-.25l26.76,26.82.45-1.08L11.52,101.91A1.65,1.65,0,0,0,10.5,99.81Zm-.13,2a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.58.58,0,0,1,.57-.57h0a.57.57,0,0,1,.56.58A.55.55,0,0,1,10.37,101.77Z" style="fill:#c5c9e0"></path><path d="M56.15,117.58H39.06l0-.09a1.65,1.65,0,0,0-1.36-1H37.5a1.65,1.65,0,1,0,1.56,2.19H55.7L92.92,156h41.44v-1.08h-41Zm-18.25.94a.56.56,0,0,1-.79,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h0a.58.58,0,0,1,.57.58A.54.54,0,0,1,37.9,118.52Z" style="fill:#c5c9e0"></path><path d="M23.52,50.32a1.65,1.65,0,0,0,1.55-1.11H55.28l48-48.13h31.06V0H102.85l-48,48.13H25.07a1.64,1.64,0,0,0-2.09-1,1.64,1.64,0,0,0,.54,3.2Zm0-2.21a.57.57,0,0,1,0,1.13.57.57,0,1,1,0-1.13Z" style="fill:#c5c9e0"></path><polygon points="102.86 0 102.86 0 102.86 0 102.86 0" style="fill:#c5c9e0"></polygon><path d="M107.72,12.14h26.64V11.07H107.27L57.4,61H3.09a1.66,1.66,0,0,0-1.45-.86H1.52A1.65,1.65,0,1,0,2.81,63a1.59,1.59,0,0,0,.45-.87H57.85ZM2.05,62.23a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h.09a.57.57,0,0,1,.32,1Z" style="fill:#c5c9e0"></path><path d="M134.36,43.22V42.14h-22.3l-9.62,9.63a1.64,1.64,0,0,0-2.19.77,1.61,1.61,0,0,0-.17.71,1.65,1.65,0,1,0,3.29,0,1.61,1.61,0,0,0-.16-.72l9.3-9.32Zm-32.64,10.6a.57.57,0,0,1,0-1.13.57.57,0,0,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M147,52.3l-9,9H111.48a1.64,1.64,0,0,0-1.61-1.33h-.14a1.65,1.65,0,1,0,1.6,2.41h27.19l9.26-9.29L147,52.3Zm-37.15,9.85a.56.56,0,0,1-.56-.57h0a.56.56,0,0,1,.56-.56h0a.57.57,0,1,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M66.79,75.35l11,11.06h56.53V85.33H78.27l-11-11.06H49.49L37.12,86.67a1.64,1.64,0,0,0-2.09,1,1.61,1.61,0,0,0-.09.54,1.65,1.65,0,0,0,3.29,0,1.68,1.68,0,0,0-.26-.89l12-12ZM36.58,88.79a.57.57,0,1,1,.57-.56A.57.57,0,0,1,36.58,88.79Z" style="fill:#c5c9e0"></path><path d="M110.61,95.55,92.8,113.4a1.62,1.62,0,1,0,.77.76l17.49-17.53h23.31V95.55ZM92.49,115.28a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.57-.57h0a.58.58,0,0,1,.56.58A.55.55,0,0,1,92.49,115.28Z" style="fill:#c5c9e0"></path><path d="M97.89,122.3H76.62L64.2,109.85a1.65,1.65,0,0,0-.77-2.2,1.77,1.77,0,0,0-.72-.17h-.14a1.65,1.65,0,0,0,.15,3.29,1.58,1.58,0,0,0,.71-.17l12.74,12.77H98.34l17.48-17.52h18.54v-1.08h-19ZM63.12,109.53a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,1.14,0A.54.54,0,0,1,63.12,109.53Z" style="fill:#c5c9e0"></path> </svg> </div> <div class="articleSuffix-left"> <img src="##imgUrl##"/> </div> <div class="articleSuffix-right"> <item> <li> <b>##origin##文作者：</b> <a href="##homeUrl##" target="_blank">##author##</a> </li> <li> <b>##origin##文链接：</b> <a href="##source##" target="_blank">##source##</a> </li> <li> <b>关于博主：</b> ##aboutHtml## </li> <li> <b>版权声明：</b> ##copyrightHtml## </li> <li> <b>声援博主：</b> ##supportHtml## </li> </item> </div> <div style="clear:both"></div> </div> </span> ',u);$("#cnblogs_post_body").append(d),(()=>{if(t.__config.articleSuffix.copyText.enable){let e=t.__config.articleSuffix.copyText.length||30,n=t.__config.articleSuffix.copyText.copyright||r;function i(t){let e=t.clipboardData||window.clipboardData;if(e){t.preventDefault();let i=window.getSelection().toString()+"<br /><br /> ———————————————— <br />"+`${n} <br />`+`作者：${a} <br />`+`原文链接：${o} <br />`,l=window.getSelection().toString()+"\n\n ———————————————— \n"+`${n.replace(/<\/?.+?>/g,"").replace(/ /g,"")} \n`+`作者：${a} \n`+`原文链接：${o} \n`;e.setData("text/html",i),e.setData("text/plain",l)}}document.body.addEventListener("copy",(function(t){window.getSelection().toString()&&window.getSelection().toString().length>e&&i(t)}))}})()}(t),function(t){let e=()=>{let e=$(".feedbackItem");e.length>0&&($.each(e,(t=>{let n=$(e[t]),i=n.find(".feedbackCon"),a=n.find(".feedbackListSubtitle"),o=i.length?i.find(".blog_comment_body"):[],l="",s=o.length?o.attr("id").split("_"):void 0;if(s&&s.length>0){let t=s[s.length-1],e=t.toString().match(/\d/g);$.isArray(e)&&(t=e.join(""));let i=$("#comment_"+t+"_avatar"),a=i.length>0?i.text().trim():"https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114123823_default_avatar.webp",o=$("#a_comment_author_"+t);l='<div class="feedbackAvatar"><a href="'+(o.length?o.attr("href"):"javascropt:void(0);")+'" target="_blank"><img src="'+a+'"/></a></div>',n.prepend(l)}a.length&&a.find(".louzhu").length&&a.addClass("feedbackListSubtitle-louzhu")})),$(e[0]).css("padding-top","0"),$(e[e.length-1]).css("padding-bottom","0"),t.__config.animate.avatar.enable&&$(".feedbackAvatar").addClass("img-rounded"))};t.__timeIds.commentTId=window.setInterval((()=>{$(".feedbackItem").length>0&&(e(),t.__tools.clearIntervalTimeId(t.__timeIds.commentTId))}),1e3),$(document).ajaxSuccess((function(t,n,i){i.url.includes("GetComments.aspx")&&e()}))}(t)}}}]);