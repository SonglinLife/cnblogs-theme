(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[153],{393:function(t,e){"use strict";e.A='<div> <nav id="articleDirectory"> <ul class="nav nav-pills"> ##dirHtml## </ul> </nav> </div>'},650:function(t,e,n){"use strict";n.a(t,(async function(t,o){try{n.d(e,{A:function(){return a}});var i=n(393);function a(){let t=$("body"),e=$("#cnblogs_post_body"),n=e.find(":header");if(n.length>0){let a=[];$.each(n,(function(){a.push(parseInt($(this)[0].tagName.replace(/H/g,"")))}));let l=(o=a,[...new Set(o)]).sort(),r="";$.each(n,(function(){let t=$(this),e=parseInt(t[0].tagName.replace(/H/g,"")),n=t.attr("id"),o="tid-"+$.__tools.randomString(6);if(t.attr("tid",o),!n||/^[\W|\d]+.*/.test(n)){if(n){let t=$('.toc a[href="#'+n+'"]');t.length&&t.attr("href","#"+o)}n=o,t.attr("id",n)}let i=l.indexOf(e),a=(0===i||-1===i?"":"&nbsp;&nbsp;&nbsp;&nbsp;".repeat(i))+t.text().replace(/</g,"&lt;").replace(/>/g,"&gt;");r+='<li class="nav-item"><a class="nav-link" href="#'+n+'" goto="'+o+'" onclick="return false;">'+a+"</a></li>"}));let c=$.__tools.tempReplacement(i.A,"dirHtml",r);e.append(c),t.attr("data-bs-spy","scroll"),t.attr("data-bs-target","#articleDirectory"),t.attr("data-bs-offset","0"),t.attr("tabindex","0"),t.scrollspy({target:"#articleDirectory"}),$.__config.articleDirectory.autoWidthScroll||($("#articleDirectory ul li").addClass("articleDirectory-overflow"),$("#articleDirectory ul li a").addClass("articleDirectory-overflow")),$.__event.scroll.handle.push((()=>{let t=$("#articleDirectory");$.__event.scroll.temScroll<$.__event.scroll.docScroll&&$.__event.scroll.homeScroll<=$.__event.scroll.docScroll&&t.addClass("articleDirectoryFixed"),$.__event.scroll.temScroll>$.__event.scroll.docScroll&&$.__event.scroll.homeScroll>=$.__event.scroll.docScroll&&t.removeClass("articleDirectoryFixed")})),$.__event.resize.handle.push((()=>{const t=parseFloat(document.body.clientWidth),e=$("#articleDirectory");if(e.length>0){let n=$("#home").outerWidth(!1),o=e.outerWidth(!0),i=(t-n)/2,a=i-o-5,l=$(".main-header").outerHeight();if("left"===$.__config.articleDirectory.position)e.css({top:l+5+"px",left:(a>0?a:5)+"px",width:(i>190&&i<260?i-10:o)+"px"});else e.css({top:l+5+"px",right:(a>0?a:5)+"px",width:(i>190&&i<260?i-10:o)+"px"});t<=$.__config.articleDirectory.minBodyWeight||i<=190?e.hide():e.show()}})),$("#articleDirectory .nav-link").click((function(){let t=$(':header[tid="'+$(this).attr("goto")+'"]');t.length&&$.__tools.actScroll(t.offset().top+3,500)}))}var o}await $.__tools.dynamicLoadingJs($.__config.default.bootstrap).catch((t=>console.error("bootstrap.js",t))),o()}catch(l){o(l)}}),1)},689:function(t,e,n){"use strict";n.d(e,{A:function(){return i}});var o=n(206);function i(){const t=$("#cb_post_title_url").text().trim();$.__config.animate.articleTitle.enable?function(t,e,n,o){let i=0,a=!0,l=document.getElementById(n),r=document.getElementById(e);l.innerHTML="_";const c=()=>{r.innerHTML=r.innerHTML.slice(0,-1),r.innerHTML.length>0?setTimeout(c,200):(i=0,setTimeout(s,200))},s=()=>{r.innerHTML+=t[i++],i<t.length?setTimeout(s,200):o&&setTimeout((()=>{c()}),1e3)};window.setInterval((()=>{a?(l.style.visibility="hidden",a=!1):(l.style.visibility="visible",a=!0)}),400),setTimeout(s,200)}([...t],"sbTitleText","sbTitleConsole",!1):$("#sbTitleText").text(t).css("color","#fff"),$(".inner").css("max-width","100vw"),$.__tools.setDomHomePosition(),$("#articleInfo").append('<p class="article-info-text"></p>'),$.__timeIds.postDescTid=window.setInterval((()=>{if("..."!==$("#post_view_count").text()&&"..."!==$("#post_comment_count").text()){let t=$(".postDesc").show().text();$("#articleInfo p.article-info-text").html(function(t){let e=(0,o.A)(t),n=$("#cnblogs_post_body").text().length;return'<span class="postMeta"><i class="iconfont icon-schedule"></i>'+e.date.replace(/-/g,"/")+'<i class="iconfont icon-browse"></i>'+e.vnum+'<i class="iconfont icon-interactive"></i>'+e.cnum+'<i class="iconfont icon-hot"></i>'+e.tnum+'<br><i class="iconfont icon-article"></i>'+n+'<i class="iconfont icon-kafei"></i>'+$.__tools.minToTime(n/500)+" ~ "+$.__tools.minToTime(n/300)+"</span>"}(t)),$.__tools.setDomHomePosition(),$.__tools.clearIntervalTimeId($.__timeIds.postDescTid)}}),1e3);const e=$("#BlogPostCategory").find("a");e.length>0&&($.__tools.htmlReplace("#BlogPostCategory",/,/g,""),$.__tools.articleInfo(e,1),$.__tools.setDomHomePosition());let n=$("#EntryTag").find("a");n.length>0&&($.__tools.htmlReplace("#EntryTag",/,/g,""),$.__tools.articleInfo(n,2),$.__tools.setDomHomePosition()),$.__config.articleContent.link&&($("#cnblogs_post_body a").addClass("iconfont icon-fenxiang"),$(".footnote-ref a").removeClass("iconfont icon-fenxiang"),$(".footnotes-list a").removeClass("iconfont icon-fenxiang"));let i=$("#cnblogs_post_body").find(":header");if($.__config.articleContent.iconfont&&i.length>0){let t=$.__config.articleContent.iconfontArr;i.html(((e,n)=>{let o=[],a=Math.floor(Math.random()*(t.length-e)+e);-1==o.indexOf(a)?(o.push(a),$('<svg class="icon"> <use xlink:href="#icon-'+t[a]+'"></use></svg>').prependTo(i[e])):e--}))}$(".blogpost-body p").html(((t,e)=>/^\?&gt;/.test(e)?`<p class="tip">${e.slice(5).trim()}</p>`:/^!&gt;/.test(e)?`<p class="warn">${e.slice(5).trim()}</p>`:void 0));const a=$.__config.articleContent.roughNotation.options,l={"~bk":"<mbk>","bk~":"</mbk>","~b":"<mbox>","b~":"</mbox>","~c":"<mc>","c~":"</mc>","~u":"<mu>","u~":"</mu>","~h":"<mhl>","h~":"</mhl>","~s":"<mst>","s~":"</mst>","~x":"<mco>","x~":"</mco>"},r={mu:a.underline,mc:a.circle,mbox:a.box,mhl:a.highlight,mbk:a.bracket,mst:a.strikeThrough,mco:a.crossedOff};$.__config.articleContent.roughNotation.enable&&(async()=>{await $.__tools.dynamicLoadingJs($.__config.default.roughNotation),$(".blogpost-body p").html(((t,e)=>e.replace(/~[a-z]{1,2}|[a-z]{1,2}~/g,(t=>l.hasOwnProperty(t)?l[t].replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):(console.warn(`No mapping found for token: ${t}`),t)))));document.querySelectorAll(Object.keys(r).join(",")).length&&setTimeout((()=>{annotateElements()}),2e3)})(),$.__config.articleContent.hide.recommendPosts&&$("#under_post_card1").hide(),$.__config.articleContent.hide.readingRanking&&$("#under_post_card2").hide()}},14:function(t,e,n){"use strict";n.d(e,{A:function(){return i}});var o='<span class="articleSuffix-flg"> <br><p class="essaySuffix-eof">__EOF__</p> <div id="articleSuffix"> <div class="articleSuffix-bg"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.78 155.96"> <path d="M10.5,99.81a1.9,1.9,0,0,0-.53-.09,1.66,1.66,0,0,0-1.64,1.65A1.64,1.64,0,0,0,10,103a1.57,1.57,0,0,0,.87-.25l26.76,26.82.45-1.08L11.52,101.91A1.65,1.65,0,0,0,10.5,99.81Zm-.13,2a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.58.58,0,0,1,.57-.57h0a.57.57,0,0,1,.56.58A.55.55,0,0,1,10.37,101.77Z" style="fill:#c5c9e0"></path><path d="M56.15,117.58H39.06l0-.09a1.65,1.65,0,0,0-1.36-1H37.5a1.65,1.65,0,1,0,1.56,2.19H55.7L92.92,156h41.44v-1.08h-41Zm-18.25.94a.56.56,0,0,1-.79,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h0a.58.58,0,0,1,.57.58A.54.54,0,0,1,37.9,118.52Z" style="fill:#c5c9e0"></path><path d="M23.52,50.32a1.65,1.65,0,0,0,1.55-1.11H55.28l48-48.13h31.06V0H102.85l-48,48.13H25.07a1.64,1.64,0,0,0-2.09-1,1.64,1.64,0,0,0,.54,3.2Zm0-2.21a.57.57,0,0,1,0,1.13.57.57,0,1,1,0-1.13Z" style="fill:#c5c9e0"></path><polygon points="102.86 0 102.86 0 102.86 0 102.86 0" style="fill:#c5c9e0"></polygon><path d="M107.72,12.14h26.64V11.07H107.27L57.4,61H3.09a1.66,1.66,0,0,0-1.45-.86H1.52A1.65,1.65,0,1,0,2.81,63a1.59,1.59,0,0,0,.45-.87H57.85ZM2.05,62.23a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h.09a.57.57,0,0,1,.32,1Z" style="fill:#c5c9e0"></path><path d="M134.36,43.22V42.14h-22.3l-9.62,9.63a1.64,1.64,0,0,0-2.19.77,1.61,1.61,0,0,0-.17.71,1.65,1.65,0,1,0,3.29,0,1.61,1.61,0,0,0-.16-.72l9.3-9.32Zm-32.64,10.6a.57.57,0,0,1,0-1.13.57.57,0,0,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M147,52.3l-9,9H111.48a1.64,1.64,0,0,0-1.61-1.33h-.14a1.65,1.65,0,1,0,1.6,2.41h27.19l9.26-9.29L147,52.3Zm-37.15,9.85a.56.56,0,0,1-.56-.57h0a.56.56,0,0,1,.56-.56h0a.57.57,0,1,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M66.79,75.35l11,11.06h56.53V85.33H78.27l-11-11.06H49.49L37.12,86.67a1.64,1.64,0,0,0-2.09,1,1.61,1.61,0,0,0-.09.54,1.65,1.65,0,0,0,3.29,0,1.68,1.68,0,0,0-.26-.89l12-12ZM36.58,88.79a.57.57,0,1,1,.57-.56A.57.57,0,0,1,36.58,88.79Z" style="fill:#c5c9e0"></path><path d="M110.61,95.55,92.8,113.4a1.62,1.62,0,1,0,.77.76l17.49-17.53h23.31V95.55ZM92.49,115.28a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.57-.57h0a.58.58,0,0,1,.56.58A.55.55,0,0,1,92.49,115.28Z" style="fill:#c5c9e0"></path><path d="M97.89,122.3H76.62L64.2,109.85a1.65,1.65,0,0,0-.77-2.2,1.77,1.77,0,0,0-.72-.17h-.14a1.65,1.65,0,0,0,.15,3.29,1.58,1.58,0,0,0,.71-.17l12.74,12.77H98.34l17.48-17.52h18.54v-1.08h-19ZM63.12,109.53a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,1.14,0A.54.54,0,0,1,63.12,109.53Z" style="fill:#c5c9e0"></path> </svg> </div> <div class="articleSuffix-left"> <img src="##imgUrl##"/> </div> <div class="articleSuffix-right"> <item> <li> <b>##origin##文作者：</b> <a href="##homeUrl##" target="_blank">##author##</a> </li> <li> <b>##origin##文链接：</b> <a href="##source##" target="_blank">##source##</a> </li> <li> <b>关于博主：</b> ##aboutHtml## </li> <li> <b>版权声明：</b> ##copyrightHtml## </li> <li> <b>声援博主：</b> ##supportHtml## </li> </item> </div> <div style="clear:both"></div> </div> </span> ';function i(){let t=$.__config.articleSuffix.imgUrl?$.__config.articleSuffix.imgUrl:$.__config.info.avatar?$.__config.info.avatar:$.__config.default.avatar,e=$("#articleAuthor"),n=$("#articleSource"),i=e.length?e.val():$.__config.info.name,a=n.length?n.val():$.__status.url,l=n.length?n.val():$.__status.homeUrl,r=e.length||n.length?"原":"本",c=$.__config.articleSuffix.aboutHtml||`评论和私信会在第一时间回复。或者<a href="https://msg.cnblogs.com/msg/send/${$.__status.user}" target="_blank">直接私信</a>我。`,s=$.__config.articleSuffix.copyrightHtml||'本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" alt="BY-NC-SA" title="BY-NC-SA" target="_blank">BY-NC-SA</a> 许可协议。转载请注明出处！',d=$.__config.articleSuffix.supportHtml||`如果您觉得文章对您有帮助，可以点击文章右下角<strong><span style="color: #ff0000; font-size: 12pt;">【<a id="post-up" onclick="votePost('${$.__status.articleId} ','Digg')" href="javascript:void(0);">推荐</a>】</span></strong>一下。`,m=[["origin",r],["imgUrl",t],["homeUrl",l],["author",i],["source",a],["aboutHtml",c],["copyrightHtml",s],["supportHtml",d]],f=$.__tools.batchTempReplacement(o,m);$("#cnblogs_post_body").append(f);const h=$.__config.articleSuffix.copyText,{enable:g,length:p,copyright:u=s}=h;if(g){const t="———————————————————————————————————————————————",e="\n",n=`<br />\n${t}<br />\n`;document.body.addEventListener("copy",(o=>{const l=window.getSelection().toString();if(l&&l.length>p){o.preventDefault();const r=o.clipboardData||window.clipboardData;if(r){const o=u.replace(/<\/?.+?>/g,"").replace(/ /g,""),c=`${l}${n}${u}<br />\n作者：${i}<br />\n原文链接：${a}<br />\n`,s=`${l}${e}${t}${e}${o}${e}作者：${i}${e}原文链接：${a}${e}`;r.setData("text/html",c),r.setData("text/plain",s)}}}))}}},970:function(t,e,n){"use strict";function o(){if($.__config.articleContent.commentTyping.enable){const t=n(376);t.colorful=$.__config.articleContent.commentTyping.options.colorful,t.shake=$.__config.articleContent.commentTyping.options.shake,document.body.addEventListener("input",t)}let t=()=>{let t=$(".feedbackItem");t.length>0&&($.each(t,(e=>{let n=$(t[e]),o=n.find(".feedbackCon"),i=n.find(".feedbackListSubtitle"),a=o.length?o.find(".blog_comment_body"):[],l="",r=a.length?a.attr("id").split("_"):void 0;if(r&&r.length>0){let t=r[r.length-1],e=t.toString().match(/\d/g);$.isArray(e)&&(t=e.join(""));let o=$("#comment_"+t+"_avatar"),i=o.length>0?o.text().trim():$.__config.default.avatar,a=$("#a_comment_author_"+t);l='<div class="feedbackAvatar"><a href="'+(a.length?a.attr("href"):"javascropt:void(0);")+'" target="_blank"><img src="'+i+'"/></a></div>',n.prepend(l)}i.length&&i.find(".louzhu").length&&i.addClass("feedbackListSubtitle-louzhu")})),$(t[0]).css("padding-top","0"),$(t[t.length-1]).css("padding-bottom","0"))};$.__timeIds.commentTId=window.setInterval((()=>{$(".feedbackItem").length>0&&(t(),$.__tools.clearIntervalTimeId($.__timeIds.commentTId))}),1e3),$(document).ajaxSuccess((function(e,n,o){if(o.url.includes("GetComments.aspx")&&($.__tools.clearIntervalTimeId($.__timeIds.commentTId),t()),o.url.includes("PostComment/Add.aspx")&&(()=>{let t=$(".comment_my_posted a").attr("href"),e=$(".comment_my_posted a").text(),n=$(".bq_post_comment").text(),o=`<div class="feedbackItem" style="padding-bottom: 0px;">\n                        <div class="feedbackAvatar">\n                            <a href="${t}" target="_blank">\n                                <img src="${$.__config.default.avatar}">\n                            </a>\n                        </div>\n                        <div class="feedbackListSubtitle ${window.isBlogOwner&&"feedbackListSubtitle-louzhu"}">\n                            ${window.isBlogOwner&&'[<span class="louzhu">楼主</span>]'}\n                            <span class="comment_date">${(new Date).toLocaleString().replace(/\//g,"-")}</span>\n                            <a id="a_comment_author_5168811" href="${t}" target="_blank">${e}</a>\n                        </div>\n                        <div class="feedbackCon">\n                            <div id="comment_body_5168811" data-format-type="Markdown" class="blog_comment_body cnblogs-markdown">\n                                <p>${n}</p>\n                            </div>\n                        </div>\n                    </div>`;$("#blog-comments-placeholder").append(o),$(".comment_my_posted").remove()})(),o.url.includes("comment/DeleteComment.aspx")){let t=JSON.parse(o?.data)?.commentId;$(`#comment_body_${t}`).parent().parent().remove(),$(".feedbackItem:last").css("padding-bottom","0")}}))}n.d(e,{A:function(){return o}})},376:function(t,e,n){let o=document.createElement("canvas");o.width=window.innerWidth,o.height=window.innerHeight,o.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",(function(){o.width=window.innerWidth,o.height=window.innerHeight})),document.body.appendChild(o);let i=o.getContext("2d"),a=[],l=0,r=!1;function c(t,e){return Math.random()*(e-t)+t}function s(t){if(d.colorful){let t=c(0,360);return"hsla("+c(t-10,t+10)+", 100%, "+c(50,80)+"%, 1)"}return window.getComputedStyle(t).color}function d(){{let i=function(){let t,e=document.activeElement;if("TEXTAREA"===e.tagName||"INPUT"===e.tagName&&"text"===e.getAttribute("type")){let o=n(500)(e,e.selectionEnd);return t=e.getBoundingClientRect(),{x:o.left+t.left,y:o.top+t.top,color:s(e)}}let o=window.getSelection();if(o.rangeCount){let e=o.getRangeAt(0),n=e.startContainer;return n.nodeType===document.TEXT_NODE&&(n=n.parentNode),t=e.getBoundingClientRect(),{x:t.left,y:t.top,color:s(n)}}return{x:0,y:0,color:"transparent"}}(),r=5+Math.round(10*Math.random());for(;r--;)a[l]=(t=i.x,e=i.y,o=i.color,{x:t,y:e,alpha:1,color:o,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}}),l=(l+1)%500}var t,e,o;if(d.shake){let t=1+2*Math.random(),e=t*(Math.random()>.5?-1:1),n=t*(Math.random()>.5?-1:1);document.body.style.marginLeft=e+"px",document.body.style.marginTop=n+"px",setTimeout((function(){document.body.style.marginLeft="",document.body.style.marginTop=""}),75)}r||requestAnimationFrame(m)}function m(){r=!0,i.clearRect(0,0,o.width,o.height);let t=!1,e=o.getBoundingClientRect();for(let n=0;n<a.length;++n){let o=a[n];o.alpha<=.1||(o.velocity.y+=.075,o.x+=o.velocity.x,o.y+=o.velocity.y,o.alpha*=.96,i.globalAlpha=o.alpha,i.fillStyle=o.color,i.fillRect(Math.round(o.x-1.5)-e.left,Math.round(o.y-1.5)-e.top,3,3),t=!0)}t?requestAnimationFrame(m):r=!1}d.shake=!0,d.colorful=!1,t.exports=d},500:function(t){!function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=null!=window.mozInnerScreenX;function o(t,o,i){var a=i&&i.debug||!1;if(a){var l=document.querySelector("#input-textarea-caret-position-mirror-div");l&&l.parentNode.removeChild(l)}var r=document.createElement("div");r.id="input-textarea-caret-position-mirror-div",document.body.appendChild(r);var c=r.style,s=window.getComputedStyle?getComputedStyle(t):t.currentStyle;c.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(c.wordWrap="break-word"),c.position="absolute",a||(c.visibility="hidden"),e.forEach((function(t){c[t]=s[t]})),n?t.scrollHeight>parseInt(s.height)&&(c.overflowY="scroll"):c.overflow="hidden",r.textContent=t.value.substring(0,o),"INPUT"===t.nodeName&&(r.textContent=r.textContent.replace(/\s/g," "));var d=document.createElement("span");d.textContent=t.value.substring(o)||".",r.appendChild(d);var m={top:d.offsetTop+parseInt(s.borderTopWidth),left:d.offsetLeft+parseInt(s.borderLeftWidth)};return a?d.style.backgroundColor="#aaa":document.body.removeChild(r),m}void 0!==t.exports?t.exports=o:window.getCaretCoordinates=o}()},700:function(t,e,n){"use strict";function o(){$.__timeIds.greenChannelDiggTId=window.setInterval((()=>{let t=$("#green_channel_digg");t.length&&(t.after('<button class="custom-btn btn-11" onclick="'+t.attr("onclick")+'">推荐该文<div class="dot"></div></button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelDiggTId))}),1e3),$.__timeIds.greenChannelFollowTId=window.setInterval((()=>{let t=$("#green_channel_follow");t.length&&(t.after('<button class="custom-btn btn-12" onclick="'+t.attr("onclick")+'"><span>关注博主</span><span>关注博主</span></button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelFollowTId))}),1e3),$.__timeIds.greenChannelFavoriteTId=window.setInterval((()=>{let t=$("#green_channel_favorite");t.length&&(t.after('<button class="custom-btn btn-7" onclick="'+t.attr("onclick")+'"><span>收藏本文</span></button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelFavoriteTId))}),1e3),$.__timeIds.greenChannelWeiboTId=window.setInterval((()=>{let t=$("#green_channel_weibo");t.length&&(t.after('<button class="custom-btn btn-15" onclick="'+t.attr("onclick")+'">分享微博</button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelWeiboTId))}),1e3),$.__timeIds.greenChannelWechatTId=window.setInterval((()=>{let t=$("#green_channel_wechat");t.length&&(t.after('<button class="custom-btn btn-13" onclick="'+t.attr("onclick")+'">分享微信</button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelWechatTId))}),1e3)}n.d(e,{A:function(){return o}})},206:function(t,e,n){"use strict";function o(t){return(t=>{let e=t.replace(/[\r\n]/g,""),n=$("#digg_count"),o=e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*/);return{date:void 0===o[1]?"1970-01-01 00:00":o[1],vnum:void 0===o[2]?"0":o[2],cnum:void 0===o[3]?"0":o[3],tnum:void 0===o[4]?n.length?n.text():"0":o[4]}})(t)}n.d(e,{A:function(){return o}})},508:function(t,e,n){"use strict";n.a(t,(async function(t,o){try{n.r(e),n.d(e,{default:function(){return d}});var i=n(689),a=n(970),l=n(14),r=n(650),c=n(700),s=t([r]);function d(){$.__config.animate.articleBanner.enable&&n.e(381).then(n.bind(n,448));const t=$("#main").find(".cnblogs-markdown, .cnblogs-post-body");t.removeClass("cnblogs-markdown cnblogs-post-body"),[...Array(11).keys()].forEach((e=>{setTimeout((()=>{t.removeClass("cnblogs-markdown cnblogs-post-body")}),500*e)})),(0,i.A)(),(0,r.A)(),(0,c.A)(),(0,l.A)(),(0,a.A)()}r=(s.then?(await s)():s)[0],o()}catch(m){o(m)}}))}}]);