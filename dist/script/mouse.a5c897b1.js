"use strict";(self.webpackChunkCnblogs_Theme=self.webpackChunkCnblogs_Theme||[]).push([[3449],{42352:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var o=n(71606);function s(e){const t=document.createElement("div");t.className="cursor";const n=document.createElement("div");n.className="cursor-f";let s,i,c=0,d=0,l=0,u=0,a=e.__config.animate.mouse.options.size,r=e.__config.animate.mouse.options.sizeF;function p(e,t,n){return(1-n)*e+n*t}document.body.appendChild(t),document.body.appendChild(n),"ontouchstart"in window&&(t.style.display="none",n.style.display="none"),t.style.setProperty("--size",a+"px"),n.style.setProperty("--size",r+"px"),window.addEventListener("mousemove",(function(e){l=e.pageX,u=e.pageY,t.style.top=u-a/2+"px";let n=l-a/2,o=document.body.offsetWidth;n=n<0?0:o-a<n?o-a:n,t.style.left=n+"px"})),function e(){c=p(c,l,.16),d=p(d,u,.16),n.style.top=d-r/2+"px";let t=c-r/2,o=document.body.offsetWidth;t=t<0?0:o-r<t?o-r:t,n.style.left=t+"px",requestAnimationFrame(e)}();let m=!1;function f(e){o.p8.to(t,{scale:4.5}),o.p8.to(n,{scale:.4}),m=!0,s=e.clientY||e.touches[0].clientY||e.targetTouches[0].clientY}function h(e){o.p8.to(t,{scale:1}),o.p8.to(n,{scale:1}),i=e.clientY||i,m&&s&&Math.abs(s-i)>=40&&(m=!1,s=null,i=null)}window.addEventListener("mousedown",f,!1),window.addEventListener("touchstart",f,!1),window.addEventListener("touchmove",(function(e){m&&(i=e.touches[0].clientY||e.targetTouches[0].clientY)}),!1),window.addEventListener("touchend",h,!1),window.addEventListener("mouseup",h,!1)}}}]);