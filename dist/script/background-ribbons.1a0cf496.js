(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[8663],{28732:function(){function d(t,i){return 1===arguments.length?Array.isArray(t)?t[Math.round(d(0,t.length-1))]:d(0,t):2===arguments.length?Math.random()*(i-t)+t:0}function n(){var t=Math.max(0,s.innerWidth||h.clientWidth||o.clientWidth||0),i=Math.max(0,s.innerHeight||h.clientHeight||o.clientHeight||0);return{width:t,height:i,ratio:t/i,centerx:t/2,centery:i/2,scrollx:Math.max(0,s.pageXOffset||h.scrollLeft||o.scrollLeft||0)-(h.clientLeft||0),scrolly:Math.max(0,s.pageYOffset||h.scrollTop||o.scrollTop||0)-(h.clientTop||0)}}function u(t,i){this.x=0,this.y=0,this.set(t,i)}function t(t){this._canvas=null,this._context=null,this._sto=null,this._width=0,this._height=0,this._scroll=0,this._ribbons=[],this._options={colorSaturation:"80%",colorBrightness:"60%",colorAlpha:.65,colorCycleSpeed:6,verticalPosition:"center",horizontalSpeed:150,ribbonCount:3,strokeSize:0,parallaxAmount:-.5,animateSections:!0},this._onDraw=this._onDraw.bind(this),this._onResize=this._onResize.bind(this),this._onScroll=this._onScroll.bind(this),this.setOptions(t),this.init()}var s,o,h;"object"==typeof window&&(window.Ribbons=(s=window,o=document.body,h=document.documentElement,u.prototype={constructor:u,set:function(t,i){this.x=t||0,this.y=i||0},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},multiply:function(t,i){return this.x*=t||1,this.y*=i||1,this},divide:function(t,i){return this.x/=t||1,this.y/=i||1,this},add:function(t,i){return this.x+=t||0,this.y+=i||0,this},subtract:function(t,i){return this.x-=t||0,this.y-=i||0,this},clampX:function(t,i){return this.x=Math.max(t,Math.min(this.x,i)),this},clampY:function(t,i){return this.y=Math.max(t,Math.min(this.y,i)),this},flipX:function(){return this.x*=-1,this},flipY:function(){return this.y*=-1,this}},t.prototype={constructor:t,setOptions:function(t){if("object"==typeof t)for(var i in t)t.hasOwnProperty(i)&&(this._options[i]=t[i])},init:function(){try{this._canvas=document.createElement("canvas"),this._canvas.style.display="block",this._canvas.style.position="fixed",this._canvas.style.margin="0",this._canvas.style.padding="0",this._canvas.style.border="0",this._canvas.style.outline="0",this._canvas.style.left="0",this._canvas.style.top="0",this._canvas.style.width="100%",this._canvas.style.height="100%",this._canvas.style["z-index"]="-1",this._canvas.id="bgCanvas",this._onResize(),this._context=this._canvas.getContext("2d"),this._context.clearRect(0,0,this._width,this._height),this._context.globalAlpha=this._options.colorAlpha,window.addEventListener("resize",this._onResize),window.addEventListener("scroll",this._onScroll),document.body.appendChild(this._canvas)}catch(t){return void console.warn("Canvas Context Error: "+t.toString())}this._onDraw()},addRibbon:function(){var t,i,n=5<Math.round(d(1,9))?"right":"left",s=1e3,o=this._width+200,h="right"==n?-200:o,e=Math.round(d(0,this._height));/^(top|min)$/i.test(this._options.verticalPosition)?e=200:/^(middle|center)$/i.test(this._options.verticalPosition)?e=this._height/2:/^(bottom|max)$/i.test(this._options.verticalPosition)&&(e=this._height-200);for(var a=[],r=new u(h,e),l=new u(h,e),c=null,_=Math.round(d(0,360)),p=0;!(s<=0);){if(s--,t=Math.round((+Math.random()-.2)*this._options.horizontalSpeed),i=Math.round((+Math.random()-.5)*(.25*this._height)),(c=new u).copy(l),"right"==n){if(c.add(t,i),l.x>=o)break}else if("left"==n&&(c.subtract(t,i),l.x<=-200))break;a.push({point1:new u(r.x,r.y),point2:new u(l.x,l.y),point3:c,color:_,delay:p,dir:n,alpha:0,phase:0}),r.copy(l),l.copy(c),p+=4,_+=this._options.colorCycleSpeed}this._ribbons.push(a)},_drawRibbonSection:function(t){if(t){if(1<=t.phase&&t.alpha<=0)return!0;t.delay<=0?(t.phase+=.02,t.alpha=+Math.sin(t.phase),t.alpha=t.alpha<=0?0:t.alpha,t.alpha=1<=t.alpha?1:t.alpha,this._options.animateSections&&(i=.1*Math.sin(1+t.phase*Math.PI/2),"right"===t.dir?(t.point1.add(i,0),t.point2.add(i,0),t.point3.add(i,0)):(t.point1.subtract(i,0),t.point2.subtract(i,0),t.point3.subtract(i,0)),t.point1.add(0,i),t.point2.add(0,i),t.point3.add(0,i))):t.delay-=.5;var i=this._options.colorSaturation,n=this._options.colorBrightness,i="hsla("+t.color+", "+i+", "+n+", "+t.alpha+" )";this._context.save(),0!==this._options.parallaxAmount&&this._context.translate(0,this._scroll*this._options.parallaxAmount),this._context.beginPath(),this._context.moveTo(t.point1.x,t.point1.y),this._context.lineTo(t.point2.x,t.point2.y),this._context.lineTo(t.point3.x,t.point3.y),this._context.fillStyle=i,this._context.fill(),0<this._options.strokeSize&&(this._context.lineWidth=this._options.strokeSize,this._context.strokeStyle=i,this._context.lineCap="round",this._context.stroke()),this._context.restore()}return!1},_onDraw:function(){for(var t=0,i=this._ribbons.length;t<i;++t)this._ribbons[t]||this._ribbons.splice(t,1);this._context.clearRect(0,0,this._width,this._height);for(var n=0;n<this._ribbons.length;++n){for(var s=this._ribbons[n],o=s.length,h=0,e=0;e<o;++e)this._drawRibbonSection(s[e])&&h++;o<=h&&(this._ribbons[n]=null)}this._ribbons.length<this._options.ribbonCount&&this.addRibbon(),requestAnimationFrame(this._onDraw)},_onResize:function(t){var i=n();this._width=i.width,this._height=i.height,this._canvas&&(this._canvas.width=this._width,this._canvas.height=this._height,this._context&&(this._context.globalAlpha=this._options.colorAlpha))},_onScroll:function(t){var i=n();this._scroll=i.scrolly}},t))}}]);