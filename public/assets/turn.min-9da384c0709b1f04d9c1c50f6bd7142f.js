!function(t){var a,e="",i=Math.PI,r=i/2,s="Touch"in window,n=s?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"},o={backward:["bl","tl"],forward:["br","tr"],all:["tl","bl","tr","br"]},p=["single","double"],h={page:1,gradients:!0,duration:600,acceleration:!0,display:"double",when:null},l={folding:null,corners:"forward",cornerSize:100,gradients:!0,duration:600,acceleration:!0},g={0:{top:0,left:0,right:"auto",bottom:"auto"},1:{top:0,right:0,left:"auto",bottom:"auto"}},d=function(t,a,e,i){return{css:{position:"absolute",top:t,left:a,overflow:i||"hidden","z-index":e||"auto"}}},f=function(t,a,e,i,r){var s=1-r,n=s*s*s,o=r*r*r;return c(Math.round(n*t.x+3*r*s*s*a.x+3*r*r*s*e.x+o*i.x),Math.round(n*t.y+3*r*s*s*a.y+3*r*r*s*e.y+o*i.y))},c=function(t,a){return{x:t,y:a}},u=function(t,e,i){return a&&i?" translate3d("+t+"px,"+e+"px, 0px) ":" translate("+t+"px, "+e+"px) "},v=function(t){return" rotate("+t+"deg) "},w=function(t,a){return Object.prototype.hasOwnProperty.call(a,t)},b=function(){for(var t=["Moz","Webkit","Khtml","O","ms"],a=t.length,e="";a--;)t[a]+"Transform"in document.body.style&&(e="-"+t[a].toLowerCase()+"-");return e},x=function(t,a,i,r,s){var n,o=[];if("-webkit-"==e){for(n=0;s>n;n++)o.push("color-stop("+r[n][0]+", "+r[n][1]+")");t.css({"background-image":"-webkit-gradient(linear, "+a.x+"% "+a.y+"%,  "+i.x+"% "+i.y+"%, "+o.join(",")+" )"})}else{var a={x:a.x/100*t.width(),y:a.y/100*t.height()},i={x:i.x/100*t.width(),y:i.y/100*t.height()},p=i.x-a.x;n=i.y-a.y;var h=Math.atan2(n,p),l=h-Math.PI/2,l=Math.abs(t.width()*Math.sin(l))+Math.abs(t.height()*Math.cos(l)),p=Math.sqrt(n*n+p*p),i=c(i.x<a.x?t.width():0,i.y<a.y?t.height():0),g=Math.tan(h);for(n=-1/g,g=(n*i.x-i.y-g*a.x+a.y)/(n-g),i=n*g-n*i.x+i.y,a=Math.sqrt(Math.pow(g-a.x,2)+Math.pow(i-a.y,2)),n=0;s>n;n++)o.push(" "+r[n][1]+" "+100*(a+p*r[n][0])/l+"%");t.css({"background-image":e+"linear-gradient("+-h+"rad,"+o.join(",")+")"})}},m={init:function(i){void 0===a&&(a="WebKitCSSMatrix"in window||"MozPerspective"in document.body.style,e=b());var r,p=this.data(),l=this.children(),i=t.extend({width:this.width(),height:this.height()},h,i);if(p.opts=i,p.pageObjs={},p.pages={},p.pageWrap={},p.pagePlace={},p.pageMv=[],p.totalPages=i.pages||0,i.when)for(r in i.when)w(r,i.when)&&this.bind(r,i.when[r]);for(this.css({position:"relative",width:i.width,height:i.height}),this.turn("display",i.display),a&&!s&&i.acceleration&&this.transform(u(0,0,!0)),r=0;r<l.length;r++)this.turn("addPage",l[r],r+1);return this.turn("page",i.page),o=t.extend({},o,i.corners),t(this).bind(n.start,function(t){for(var a in p.pages)if(w(a,p.pages)&&y._eventStart.call(p.pages[a],t)===!1)return!1}),t(document).bind(n.move,function(t){for(var a in p.pages)w(a,p.pages)&&y._eventMove.call(p.pages[a],t)}).bind(n.end,function(t){for(var a in p.pages)w(a,p.pages)&&y._eventEnd.call(p.pages[a],t)}),p.done=!0,this},addPage:function(a,e){var i=!1,r=this.data(),s=r.totalPages+1;if(e){if(e==s)e=s,i=!0;else if(e>s)throw Error('It is impossible to add the page "'+e+'", the maximum value is: "'+s+'"')}else e=s,i=!0;return e>=1&&s>=e&&(r.done&&this.turn("stop"),e in r.pageObjs&&m._movePages.call(this,e,1),i&&(r.totalPages=s),r.pageObjs[e]=t(a).addClass("turn-page p"+e),m._addPage.call(this,e),r.done&&this.turn("update"),m._removeFromDOM.call(this)),this},_addPage:function(a){var e=this.data(),i=e.pageObjs[a];if(i)if(m._necessPage.call(this,a)){if(!e.pageWrap[a]){var r="double"==e.display?this.width()/2:this.width(),s=this.height();i.css({width:r,height:s}),e.pagePlace[a]=a,e.pageWrap[a]=t("<div/>",{"class":"turn-page-wrapper",page:a,css:{position:"absolute",overflow:"hidden",width:r,height:s}}).css(g["double"==e.display?a%2:0]),this.append(e.pageWrap[a]),e.pageWrap[a].prepend(e.pageObjs[a])}(!a||1==m._setPageLoc.call(this,a))&&m._makeFlip.call(this,a)}else e.pagePlace[a]=0,e.pageObjs[a]&&e.pageObjs[a].remove()},hasPage:function(t){return t in this.data().pageObjs},_makeFlip:function(t){var a=this.data();if(!a.pages[t]&&a.pagePlace[t]==t){var e="single"==a.display,i=t%2;a.pages[t]=a.pageObjs[t].css({width:e?this.width():this.width()/2,height:this.height()}).flip({page:t,next:e&&t===a.totalPages?t-1:i||e?t+1:t-1,turn:this,duration:a.opts.duration,acceleration:a.opts.acceleration,corners:e?"all":i?"forward":"backward",backGradient:a.opts.gradients,frontGradient:a.opts.gradients}).flip("disable",a.disabled).bind("pressed",m._pressed).bind("released",m._released).bind("start",m._start).bind("end",m._end).bind("flip",m._flip)}return a.pages[t]},_makeRange:function(){var t;this.data();var a=this.turn("range");for(t=a[0];t<=a[1];t++)m._addPage.call(this,t)},range:function(t){var a,e,i=this.data(),t=t||i.tpage||i.page,r=m._view.call(this,t);if(1>t||t>i.totalPages)throw Error('"'+t+'" is not a page for range');return r[1]=r[1]||r[0],1<=r[0]&&r[1]<=i.totalPages?(t=Math.floor(2),i.totalPages-r[1]>r[0]?(a=Math.min(r[0]-1,t),e=2*t-a):(e=Math.min(i.totalPages-r[1],t),a=2*t-e)):e=a=5,[Math.max(1,r[0]-a),Math.min(i.totalPages,r[1]+e)]},_necessPage:function(t){if(0===t)return!0;var a=this.turn("range");return t>=a[0]&&t<=a[1]},_removeFromDOM:function(){var t,a=this.data();for(t in a.pageWrap)w(t,a.pageWrap)&&!m._necessPage.call(this,t)&&m._removePageFromDOM.call(this,t)},_removePageFromDOM:function(t){var a=this.data();if(a.pages[t]){var e=a.pages[t].data();e.f&&e.f.fwrapper&&e.f.fwrapper.remove(),a.pages[t].remove(),delete a.pages[t]}a.pageObjs[t]&&a.pageObjs[t].remove(),a.pageWrap[t]&&(a.pageWrap[t].remove(),delete a.pageWrap[t]),delete a.pagePlace[t]},removePage:function(t){var a=this.data();return a.pageObjs[t]&&(this.turn("stop"),m._removePageFromDOM.call(this,t),delete a.pageObjs[t],m._movePages.call(this,t,-1),a.totalPages-=1,m._makeRange.call(this),a.page>a.totalPages&&this.turn("page",a.totalPages)),this},_movePages:function(t,a){var e,i=this.data(),r="single"==i.display,s=function(t){var e=t+a,s=e%2;i.pageObjs[t]&&(i.pageObjs[e]=i.pageObjs[t].removeClass("page"+t).addClass("page"+e)),i.pagePlace[t]&&i.pageWrap[t]&&(i.pagePlace[e]=e,i.pageWrap[e]=i.pageWrap[t].css(g[r?0:s]).attr("page",e),i.pages[t]&&(i.pages[e]=i.pages[t].flip("options",{page:e,next:r||s?e+1:e-1,corners:r?"all":s?"forward":"backward"})),a&&(delete i.pages[t],delete i.pagePlace[t],delete i.pageObjs[t],delete i.pageWrap[t],delete i.pageObjs[t]))};if(a>0)for(e=i.totalPages;e>=t;e--)s(e);else for(e=t;e<=i.totalPages;e++)s(e)},display:function(a){var e=this.data(),i=e.display;if(a){if(-1==t.inArray(a,p))throw Error('"'+a+'" is not a value for display');return"single"==a?e.pageObjs[0]||(this.turn("stop").css({overflow:"hidden"}),e.pageObjs[0]=t("<div />",{"class":"turn-page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this)):e.pageObjs[0]&&(this.turn("stop").css({overflow:""}),e.pageObjs[0].remove(),delete e.pageObjs[0]),e.display=a,i&&(a=this.turn("size"),m._movePages.call(this,1,0),this.turn("size",a.width,a.height).turn("update")),this}return i},animating:function(){return 0<this.data().pageMv.length},disable:function(a){var e,i=this.data(),r=this.turn("view");i.disabled=void 0===a||!0===a;for(e in i.pages)w(e,i.pages)&&i.pages[e].flip("disable",a?t.inArray(e,r):!1);return this},size:function(t,a){if(t&&a){var e,i=this.data(),r="double"==i.display?t/2:t;this.css({width:t,height:a}),i.pageObjs[0]&&i.pageObjs[0].css({width:r,height:a});for(e in i.pageWrap)w(e,i.pageWrap)&&(i.pageObjs[e].css({width:r,height:a}),i.pageWrap[e].css({width:r,height:a}),i.pages[e]&&i.pages[e].css({width:r,height:a}));return this.turn("resize"),this}return{width:this.width(),height:this.height()}},resize:function(){var t,a=this.data();for(a.pages[0]&&(a.pageWrap[0].css({left:-this.width()}),a.pages[0].flip("resize",!0)),t=1;t<=a.totalPages;t++)a.pages[t]&&a.pages[t].flip("resize",!0)},_removeMv:function(t){var a,e=this.data();for(a=0;a<e.pageMv.length;a++)if(e.pageMv[a]==t)return e.pageMv.splice(a,1),!0;return!1},_addMv:function(t){var a=this.data();m._removeMv.call(this,t),a.pageMv.push(t)},_view:function(t){var a=this.data(),t=t||a.page;return"double"==a.display?t%2?[t-1,t]:[t,t+1]:[t]},view:function(t){var a=this.data(),t=m._view.call(this,t);return"double"==a.display?[0<t[0]?t[0]:0,t[1]<=a.totalPages?t[1]:0]:[0<t[0]&&t[0]<=a.totalPages?t[0]:0]},stop:function(){var t,a,e=this.data(),i=e.pageMv;e.pageMv=[],e.tpage&&(e.page=e.tpage,delete e.tpage);for(t in i)w(t,i)&&(a=e.pages[i[t]].data().f.opts,y._moveFoldingPage.call(e.pages[i[t]],null),e.pages[i[t]].flip("hideFoldedPage"),e.pagePlace[a.next]=a.next,a.force&&(a.next=0===a.page%2?a.page-1:a.page+1,delete a.force));return this.turn("update"),this},pages:function(t){var a=this.data();if(t){if(t<a.totalPages){for(var e=t+1;e<=a.totalPages;e++)this.turn("removePage",e);this.turn("page")>t&&this.turn("page",t)}return a.totalPages=t,this}return a.totalPages},_fitPage:function(a,e){var i=this.data(),r=this.turn("view",a);i.page!=a&&(this.trigger("turning",[a,r]),-1!=t.inArray(1,r)&&this.trigger("first"),-1!=t.inArray(i.totalPages,r)&&this.trigger("last")),i.pageObjs[a]&&(i.tpage=a,this.turn("stop",e),m._removeFromDOM.call(this),m._makeRange.call(this),this.trigger("turned",[a,r]))},_turnPage:function(a){var e,i,r=this.data(),s=this.turn("view"),n=this.turn("view",a);r.page!=a&&(this.trigger("turning",[a,n]),-1!=t.inArray(1,n)&&this.trigger("first"),-1!=t.inArray(r.totalPages,n)&&this.trigger("last")),r.pageObjs[a]&&(r.tpage=a,this.turn("stop"),m._makeRange.call(this),"single"==r.display?(e=s[0],i=n[0]):s[1]&&a>s[1]?(e=s[1],i=n[0]):s[0]&&a<s[0]&&(e=s[0],i=n[1]),r.pages[e])&&(a=r.pages[e].data().f.opts,r.tpage=i,a.next!=i&&(a.next=i,r.pagePlace[i]=a.page,a.force=!0),"single"==r.display?r.pages[e].flip("turnPage",n[0]>s[0]?"br":"bl"):r.pages[e].flip("turnPage"))},page:function(a){var a=parseInt(a,10),e=this.data();return a>0&&a<=e.totalPages?(e.done&&-1==t.inArray(a,this.turn("view"))?m._turnPage.call(this,a):m._fitPage.call(this,a),this):e.page},next:function(){var t=this.data();return this.turn("page",m._view.call(this,t.page).pop()+1)},previous:function(){var t=this.data();return this.turn("page",m._view.call(this,t.page).shift()-1)},_addMotionPage:function(){var a=t(this).data().f.opts,e=a.turn,i=e.data();a.pageMv=a.page,m._addMv.call(e,a.pageMv),i.pagePlace[a.next]=a.page,e.turn("update")},_start:function(a,e,i){var r=e.turn.data(),s=t.Event("start");a.stopPropagation(),e.turn.trigger(s,[e,i]),s.isDefaultPrevented()?a.preventDefault():("single"==r.display&&(i="l"==i.charAt(1),1==e.page&&i||e.page==r.totalPages&&!i?a.preventDefault():i?(e.next=e.next<e.page?e.next:e.page-1,e.force=!0):e.next=e.next>e.page?e.next:e.page+1),m._addMotionPage.call(this))},_end:function(a,e){var i=t(this).data().f.opts,r=i.turn,s=r.data();a.stopPropagation(),e||s.tpage?(s.tpage==i.next||s.tpage==i.page)&&(delete s.tpage,m._fitPage.call(r,s.tpage||i.next,!0)):(m._removeMv.call(r,i.pageMv),r.turn("update"))},_pressed:function(){var a,e=t(this).data().f,i=e.opts.turn.data().pages;for(a in i)a!=e.opts.page&&i[a].flip("disable",!0);return e.time=(new Date).getTime()},_released:function(a,e){var i=t(this),r=i.data().f;a.stopPropagation(),(200>(new Date).getTime()-r.time||0>e.x||e.x>t(this).width())&&(a.preventDefault(),r.opts.turn.data().tpage=r.opts.next,r.opts.turn.turn("update"),t(i).flip("turnPage"))},_flip:function(){var a=t(this).data().f.opts;a.turn.trigger("turn",[a.next])},calculateZ:function(t){var a,e,i,r,s=this,n=this.data();a=this.turn("view");var o=a[0]||a[1],p={pageZ:{},partZ:{},pageV:{}},h=function(t){t=s.turn("view",t),t[0]&&(p.pageV[t[0]]=!0),t[1]&&(p.pageV[t[1]]=!0)};for(a=0;a<t.length;a++)e=t[a],i=n.pages[e].data().f.opts.next,r=n.pagePlace[e],h(e),h(i),e=n.pagePlace[i]==i?i:e,p.pageZ[e]=n.totalPages-Math.abs(o-e),p.partZ[r]=2*n.totalPages+Math.abs(o-e);return p},update:function(){var t,a=this.data();if(a.pageMv.length&&0!==a.pageMv[0]){var e=this.turn("calculateZ",a.pageMv);this.turn("view",a.tpage);for(t in a.pageWrap)w(t,a.pageWrap)&&(a.pageWrap[t].css({display:e.pageV[t]?"":"none","z-index":e.pageZ[t]||0}),a.pages[t]&&(a.pages[t].flip("z",e.partZ[t]||null),e.pageV[t]&&a.pages[t].flip("resize"),a.tpage&&a.pages[t].flip("disable",!0)))}else for(t in a.pageWrap)w(t,a.pageWrap)&&(e=m._setPageLoc.call(this,t),a.pages[t]&&a.pages[t].flip("disable",a.disabled||1!=e).flip("z",null))},_setPageLoc:function(t){var a=this.data(),e=this.turn("view");return t==e[0]||t==e[1]?(a.pageWrap[t].css({"z-index":a.totalPages,display:""}),1):"single"==a.display&&t==e[0]+1||"double"==a.display&&t==e[0]-2||t==e[1]+2?(a.pageWrap[t].css({"z-index":a.totalPages-1,display:""}),2):(a.pageWrap[t].css({"z-index":0,display:"none"}),0)}},y={init:function(t){return t.gradients&&(t.frontGradient=!0,t.backGradient=!0),this.data({f:{}}),this.flip("options",t),y._addPageWrapper.call(this),this},setData:function(a){var e=this.data();return e.f=t.extend(e.f,a),this},options:function(a){var e=this.data().f;return a?(y.setData.call(this,{opts:t.extend({},e.opts||l,a)}),this):e.opts},z:function(t){var a=this.data().f;return a.opts["z-index"]=t,a.fwrapper.css({"z-index":t||parseInt(a.parent.css("z-index"),10)||0}),this},_cAllowed:function(){return o[this.data().f.opts.corners]||this.data().f.opts.corners},_cornerActivated:function(a){if(void 0===a.originalEvent)return!1;var a=s?a.originalEvent.touches:[a],e=this.data().f,i=e.parent.offset(),r=this.width(),n=this.height(),a={x:Math.max(0,a[0].pageX-i.left),y:Math.max(0,a[0].pageY-i.top)},e=e.opts.cornerSize,i=y._cAllowed.call(this);if(0>=a.x||0>=a.y||a.x>=r||a.y>=n)return!1;if(a.y<e)a.corner="t";else{if(!(a.y>=n-e))return!1;a.corner="b"}if(a.x<=e)a.corner+="l";else{if(!(a.x>=r-e))return!1;a.corner+="r"}return-1==t.inArray(a.corner,i)?!1:a},_c:function(t,a){return a=a||0,{tl:c(a,a),tr:c(this.width()-a,a),bl:c(a,this.height()-a),br:c(this.width()-a,this.height()-a)}[t]},_c2:function(t){return{tl:c(2*this.width(),0),tr:c(-this.width(),0),bl:c(2*this.width(),this.height()),br:c(-this.width(),this.height())}[t]},_foldingPage:function(){var t=this.data().f.opts;if(t.folding)return t.folding;if(t.turn){var a=t.turn.data();return"single"==a.display?a.pageObjs[t.next]?a.pageObjs[0]:null:a.pageObjs[t.next]}},_backGradient:function(){var a=this.data().f,e=a.opts.turn;return(e=a.opts.backGradient&&(!e||"single"==e.data().display||2!=a.opts.page&&a.opts.page!=e.data().totalPages-1))&&!a.bshadow&&(a.bshadow=t("<div/>",d(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(a.parent)),e},resize:function(t){var a=this.data().f,e=this.width(),i=this.height(),r=Math.round(Math.sqrt(Math.pow(e,2)+Math.pow(i,2)));t&&(a.wrapper.css({width:r,height:r}),a.fwrapper.css({width:r,height:r}).children(":first-child").css({width:e,height:i}),a.fpage.css({width:i,height:e}),a.opts.frontGradient&&a.ashadow.css({width:i,height:e}),y._backGradient.call(this)&&a.bshadow.css({width:e,height:i})),a.parent.is(":visible")&&(a.fwrapper.css({top:a.parent.offset().top,left:a.parent.offset().left}),a.opts.turn&&a.fparent.css({top:-a.opts.turn.offset().top,left:-a.opts.turn.offset().left})),this.flip("z",a.opts["z-index"])},_addPageWrapper:function(){var a=this.data().f,e=this.parent();if(!a.wrapper){this.css("left"),this.css("top");var i=this.width(),r=this.height();Math.round(Math.sqrt(Math.pow(i,2)+Math.pow(r,2))),a.parent=e,a.fparent=a.opts.turn?a.opts.turn.data().fparent:t("#turn-fwrappers"),a.fparent||(i=t("<div/>",{css:{"pointer-events":"none"}}).hide(),i.data().flips=0,a.opts.turn?(i.css(d(-a.opts.turn.offset().top,-a.opts.turn.offset().left,"auto","visible").css).appendTo(a.opts.turn),a.opts.turn.data().fparent=i):i.css(d(0,0,"auto","visible").css).attr("id","turn-fwrappers").appendTo(t("body")),a.fparent=i),this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"}),a.wrapper=t("<div/>",d(0,0,this.css("z-index"))).appendTo(e).prepend(this),a.fwrapper=t("<div/>",d(e.offset().top,e.offset().left)).hide().appendTo(a.fparent),a.fpage=t("<div/>",{css:{cursor:"default"}}).appendTo(t("<div/>",d(0,0,0,"visible")).appendTo(a.fwrapper)),a.opts.frontGradient&&(a.ashadow=t("<div/>",d(0,0,1)).appendTo(a.fpage)),y.setData.call(this,a),y.resize.call(this,!0)}},_fold:function(t){var a,e,s,n,o,p,h=this,l=0,g=0,d=c(0,0),f=c(0,0),w=c(0,0),b=this.width(),m=this.height(),M=y._foldingPage.call(this);Math.tan(g);var P=this.data().f,_=P.opts.acceleration,O=P.wrapper.height(),j=y._c.call(this,t.corner),W="t"==t.corner.substr(0,1),z="l"==t.corner.substr(1,1),k=function(){var u,v=c(j.x?j.x-t.x:t.x,j.y?j.y-t.y:t.y),x=Math.atan2(v.y,v.x);g=r-x,l=180*(g/i),u=c(z?b-v.x/2:t.x+v.x/2,v.y/2);var M=g-Math.atan2(u.y,u.x),M=Math.max(0,Math.sin(M)*Math.sqrt(Math.pow(u.x,2)+Math.pow(u.y,2)));return w=c(M*Math.sin(g),M*Math.cos(g)),g>r&&(w.x+=Math.abs(w.y*Math.tan(x)),w.y=0,Math.round(w.x*Math.tan(i-g))<m)?(t.y=Math.sqrt(Math.pow(m,2)+2*u.x*v.x),W&&(t.y=m-t.y),k()):(g>r&&(v=i-g,x=O-m/Math.sin(v),d=c(Math.round(x*Math.cos(v)),Math.round(x*Math.sin(v))),z&&(d.x=-d.x),W)&&(d.y=-d.y),a=Math.round(w.y/Math.tan(g)+w.x),v=b-a,x=v*Math.cos(2*g),u=v*Math.sin(2*g),f=c(Math.round(z?v-x:a+x),Math.round(W?u:m-u)),o=v*Math.sin(g),v=y._c2.call(h,t.corner),v=Math.sqrt(Math.pow(v.x-t.x,2)+Math.pow(v.y-t.y,2)),p=b>v?v/b:1,P.opts.frontGradient&&(n=o>100?(o-100)/o:0,e=c(100*(o*Math.sin(r-g)/m),100*(o*Math.cos(r-g)/b)),W&&(e.y=100-e.y),z)&&(e.x=100-e.x),y._backGradient.call(h)&&(s=c(100*(o*Math.sin(g)/b),100*(o*Math.cos(g)/m)),z||(s.x=100-s.x),!W)&&(s.y=100-s.y),w.x=Math.round(w.x),w.y=Math.round(w.y),!0)},F=function(t,a,i,r){var o=["0","auto"],l=(b-O)*i[0]/100,w=(m-O)*i[1]/100,a={left:o[a[0]],top:o[a[1]],right:o[a[2]],bottom:o[a[3]]},o=90!=r&&-90!=r?z?-1:1:0,i=i[0]+"% "+i[1]+"%";h.css(a).transform(v(r)+u(t.x+o,t.y,_),i),P.fpage.parent().css(a),P.wrapper.transform(u(-t.x+l-o,-t.y+w,_)+v(-r),i),P.fwrapper.transform(u(-t.x+d.x+l,-t.y+d.y+w,_)+v(-r),i),P.fpage.parent().transform(v(r)+u(t.x+f.x-d.x,t.y+f.y-d.y,_),i),P.opts.frontGradient&&x(P.ashadow,c(z?100:0,W?100:0),c(e.x,e.y),[[n,"rgba(0,0,0,0)"],[.8*(1-n)+n,"rgba(0,0,0,"+.2*p+")"],[1,"rgba(255,255,255,"+.2*p+")"]],3,g),y._backGradient.call(h)&&x(P.bshadow,c(z?0:100,W?0:100),c(s.x,s.y),[[.8,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,"+.3*p+")"],[1,"rgba(0,0,0,0)"]],3)};switch(t.corner){case"tl":t.x=Math.max(t.x,1),k(),F(w,[1,0,0,1],[100,0],l),P.fpage.transform(u(-m,-b,_)+v(90-2*l),"100% 100%"),M.transform(v(90)+u(0,-m,_),"0% 0%");break;case"tr":t.x=Math.min(t.x,b-1),k(),F(c(-w.x,w.y),[0,0,0,1],[0,0],-l),P.fpage.transform(u(0,-b,_)+v(-90+2*l),"0% 100%"),M.transform(v(270)+u(-b,0,_),"0% 0%");break;case"bl":t.x=Math.max(t.x,1),k(),F(c(w.x,-w.y),[1,1,0,0],[100,100],-l),P.fpage.transform(u(-m,0,_)+v(-90+2*l),"100% 0%"),M.transform(v(270)+u(-b,0,_),"0% 0%");break;case"br":t.x=Math.min(t.x,b-1),k(),F(c(-w.x,-w.y),[0,1,1,0],[0,100],l),P.fpage.transform(v(90-2*l),"0% 0%"),M.transform(v(90)+u(0,-m,_),"0% 0%")}P.point=t},_moveFoldingPage:function(t){var a=this.data().f,e=y._foldingPage.call(this);e&&(t?a.fpage.children()[a.ashadow?"1":"0"]||(y.setData.call(this,{backParent:e.parent()}),a.fpage.prepend(e)):a.backParent&&a.backParent.prepend(e))},_showFoldedPage:function(a,e){var i=y._foldingPage.call(this),r=this.data(),s=r.f;if(!s.point||s.point.corner!=a.corner){var n=t.Event("start");if(this.trigger(n,[s.opts,a.corner]),n.isDefaultPrevented())return!1}if(i){if(e){var o=this,i=s.point&&s.point.corner==a.corner?s.point:y._c.call(this,a.corner,1);this.animatef({from:[i.x,i.y],to:[a.x,a.y],duration:500,frame:function(t){a.x=Math.round(t[0]),a.y=Math.round(t[1]),y._fold.call(o,a)}})}else y._fold.call(this,a),r.effect&&!r.effect.turning&&this.animatef(!1);return s.fwrapper.is(":visible")||(s.fparent.show().data().flips++,y._moveFoldingPage.call(this,!0),s.fwrapper.show(),s.bshadow&&s.bshadow.show()),!0}return!1},hide:function(){var t=this.data().f,a=y._foldingPage.call(this);return 0===--t.fparent.data().flips&&t.fparent.hide(),this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform("","0% 100%"),t.wrapper.transform("","0% 100%"),t.fwrapper.hide(),t.bshadow&&t.bshadow.hide(),a.transform("","0% 0%"),this},hideFoldedPage:function(t){var a=this.data().f;if(a.point){var e=this,i=a.point,r=function(){a.point=null,e.flip("hide"),e.trigger("end",[!1])};if(t){var s=y._c.call(this,i.corner),t="t"==i.corner.substr(0,1)?Math.min(0,i.y-s.y)/2:Math.max(0,i.y-s.y)/2,n=c(i.x,i.y+t),o=c(s.x,s.y-t);this.animatef({from:0,to:1,frame:function(t){t=f(i,n,o,s,t),i.x=t.x,i.y=t.y,y._fold.call(e,i)},complete:r,duration:800,hiding:!0})}else this.animatef(!1),r()}},turnPage:function(t){var a=this,e=this.data().f,t={corner:e.corner?e.corner.corner:t||y._cAllowed.call(this)[0]},i=e.point||y._c.call(this,t.corner,e.opts.turn?e.opts.turn.data().opts.elevation:0),r=y._c2.call(this,t.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(e){e=f(i,i,r,r,e),t.x=e.x,t.y=e.y,y._showFoldedPage.call(a,t)},complete:function(){a.trigger("end",[!0])},duration:e.opts.duration,turning:!0}),e.corner=null},moving:function(){return"effect"in this.data()},isTurning:function(){return this.flip("moving")&&this.data().effect.turning},_eventStart:function(t){var a=this.data().f;if(!a.disabled&&!this.flip("isTurning")){if(a.corner=y._cornerActivated.call(this,t),a.corner&&y._foldingPage.call(this,a.corner))return y._moveFoldingPage.call(this,!0),this.trigger("pressed",[a.point]),!1;a.corner=null}},_eventMove:function(t){var a=this.data().f;if(!a.disabled)if(t=s?t.originalEvent.touches:[t],a.corner){var e=a.parent.offset();a.corner.x=t[0].pageX-e.left,a.corner.y=t[0].pageY-e.top,y._showFoldedPage.call(this,a.corner)}else!this.data().effect&&this.is(":visible")&&((t=y._cornerActivated.call(this,t[0]))?(a=y._c.call(this,t.corner,a.opts.cornerSize/2),t.x=a.x,t.y=a.y,y._showFoldedPage.call(this,t,!0)):y.hideFoldedPage.call(this,!0))},_eventEnd:function(){var a=this.data().f;if(!a.disabled&&a.point){var e=t.Event("released");this.trigger(e,[a.point]),e.isDefaultPrevented()||y.hideFoldedPage.call(this,!0)}a.corner=null},disable:function(t){return y.setData.call(this,{disabled:t}),this}},M=function(t,a,e){if(!e[0]||"object"==typeof e[0])return a.init.apply(t,e);if(a[e[0]]&&"_"!=e[0].toString().substr(0,1))return a[e[0]].apply(t,Array.prototype.slice.call(e,1));throw e[0]+" is an invalid value"};t.extend(t.fn,{flip:function(){return M(this,y,arguments)},turn:function(){return M(this,m,arguments)},transform:function(t,a){var i={};return a&&(i[e+"transform-origin"]=a),i[e+"transform"]=t,this.css(i)},animatef:function(t){var a=this.data();if(a.effect&&clearInterval(a.effect.handle),t){t.to.length||(t.to=[t.to]),t.from.length||(t.from=[t.from]),t.easing||(t.easing=function(t,a,e,i,r){return i*Math.sqrt(1-(a=a/r-1)*a)+e});var e,i=[],r=t.to.length,s=this,n=t.fps||30,o=-n,p=function(){var e,p=[];for(o=Math.min(t.duration,o+n),e=0;r>e;e++)p.push(t.easing(1,o,t.from[e],i[e],t.duration));t.frame(1==r?p[0]:p),o==t.duration&&(clearInterval(a.effect.handle),delete a.effect,s.data(a),t.complete&&t.complete())};for(e=0;r>e;e++)i.push(t.to[e]-t.from[e]);a.effect=t,a.effect.handle=setInterval(p,n),this.data(a),p()}else delete a.effect}}),t.isTouch=s}(jQuery);