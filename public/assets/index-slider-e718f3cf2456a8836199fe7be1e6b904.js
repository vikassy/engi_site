jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,a,i,n){return jQuery.easing[jQuery.easing.def](e,t,a,i,n)},easeInQuad:function(e,t,a,i,n){return i*(t/=n)*t+a},easeOutQuad:function(e,t,a,i,n){return-i*(t/=n)*(t-2)+a},easeInOutQuad:function(e,t,a,i,n){return(t/=n/2)<1?i/2*t*t+a:-i/2*(--t*(t-2)-1)+a},easeInCubic:function(e,t,a,i,n){return i*(t/=n)*t*t+a},easeOutCubic:function(e,t,a,i,n){return i*((t=t/n-1)*t*t+1)+a},easeInOutCubic:function(e,t,a,i,n){return(t/=n/2)<1?i/2*t*t*t+a:i/2*((t-=2)*t*t+2)+a},easeInQuart:function(e,t,a,i,n){return i*(t/=n)*t*t*t+a},easeOutQuart:function(e,t,a,i,n){return-i*((t=t/n-1)*t*t*t-1)+a},easeInOutQuart:function(e,t,a,i,n){return(t/=n/2)<1?i/2*t*t*t*t+a:-i/2*((t-=2)*t*t*t-2)+a},easeInQuint:function(e,t,a,i,n){return i*(t/=n)*t*t*t*t+a},easeOutQuint:function(e,t,a,i,n){return i*((t=t/n-1)*t*t*t*t+1)+a},easeInOutQuint:function(e,t,a,i,n){return(t/=n/2)<1?i/2*t*t*t*t*t+a:i/2*((t-=2)*t*t*t*t+2)+a},easeInSine:function(e,t,a,i,n){return-i*Math.cos(t/n*(Math.PI/2))+i+a},easeOutSine:function(e,t,a,i,n){return i*Math.sin(t/n*(Math.PI/2))+a},easeInOutSine:function(e,t,a,i,n){return-i/2*(Math.cos(Math.PI*t/n)-1)+a},easeInExpo:function(e,t,a,i,n){return 0==t?a:i*Math.pow(2,10*(t/n-1))+a},easeOutExpo:function(e,t,a,i,n){return t==n?a+i:i*(-Math.pow(2,-10*t/n)+1)+a},easeInOutExpo:function(e,t,a,i,n){return 0==t?a:t==n?a+i:(t/=n/2)<1?i/2*Math.pow(2,10*(t-1))+a:i/2*(-Math.pow(2,-10*--t)+2)+a},easeInCirc:function(e,t,a,i,n){return-i*(Math.sqrt(1-(t/=n)*t)-1)+a},easeOutCirc:function(e,t,a,i,n){return i*Math.sqrt(1-(t=t/n-1)*t)+a},easeInOutCirc:function(e,t,a,i,n){return(t/=n/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+a:i/2*(Math.sqrt(1-(t-=2)*t)+1)+a},easeInElastic:function(e,t,a,i,n){var s=1.70158,r=0,u=i;if(0==t)return a;if(1==(t/=n))return a+i;if(r||(r=.3*n),u<Math.abs(i)){u=i;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(i/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*n-s)*2*Math.PI/r))+a},easeOutElastic:function(e,t,a,i,n){var s=1.70158,r=0,u=i;if(0==t)return a;if(1==(t/=n))return a+i;if(r||(r=.3*n),u<Math.abs(i)){u=i;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(i/u);return u*Math.pow(2,-10*t)*Math.sin((t*n-s)*2*Math.PI/r)+i+a},easeInOutElastic:function(e,t,a,i,n){var s=1.70158,r=0,u=i;if(0==t)return a;if(2==(t/=n/2))return a+i;if(r||(r=n*.3*1.5),u<Math.abs(i)){u=i;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(i/u);return 1>t?-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*n-s)*2*Math.PI/r)+a:.5*u*Math.pow(2,-10*(t-=1))*Math.sin((t*n-s)*2*Math.PI/r)+i+a},easeInBack:function(e,t,a,i,n,s){return void 0==s&&(s=1.70158),i*(t/=n)*t*((s+1)*t-s)+a},easeOutBack:function(e,t,a,i,n,s){return void 0==s&&(s=.70158),i*((t=t/n-1)*t*((s+1)*t+s)+1)+a},easeInOutBack:function(e,t,a,i,n,s){return void 0==s&&(s=1.70158),(t/=n/2)<1?i/2*t*t*(((s*=1.525)+1)*t-s)+a:i/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+a},easeInBounce:function(e,t,a,i,n){return i-jQuery.easing.easeOutBounce(e,n-t,0,i,n)+a},easeOutBounce:function(e,t,a,i,n){return(t/=n)<1/2.75?i*7.5625*t*t+a:2/2.75>t?i*(7.5625*(t-=1.5/2.75)*t+.75)+a:2.5/2.75>t?i*(7.5625*(t-=2.25/2.75)*t+.9375)+a:i*(7.5625*(t-=2.625/2.75)*t+.984375)+a},easeInOutBounce:function(e,t,a,i,n){return n/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,i,n)+a:.5*jQuery.easing.easeOutBounce(e,2*t-n,0,i,n)+.5*i+a}});var center=$(window).width()/2;$(document).ready(function(){function e(){$(".slide.active img").each(function(){var e=parseInt($(this).attr("class").split(" ")[1].replace("left","")),t=e+center,a=parseInt($(this).attr("class").split(" ")[3].replace("t","")),i=parseInt($(this).attr("class").split(" ")[4].replace("z",""));$(this).hasClass("fade")?$(this).css({left:t,top:a,"z-index":i}):$(this).css({left:t,top:a,"z-index":i}).show()}),setTimeout(function(){$(".slide.active img.fade,.slide.active .info").fadeIn(600,"easeInOutQuad",function(){$("#feature_slider").removeClass()})},800)}function t(){function e(){$(".slide.active img").each(function(){var e=parseInt($(this).attr("class").split(" ")[1].replace("left","")),t=e+center,a=400,i=parseInt($(this).attr("class").split(" ")[2].replace("sp","")),n=parseInt($(this).attr("class").split(" ")[3].replace("t","")),s=parseInt($(this).attr("class").split(" ")[4].replace("z",""));if($(this).hasClass("fade"))$(this).css({left:t,top:n,"z-index":s});else{if($("#feature_slider").hasClass("scrollLeft"))var r=-$(this).width()-a;else var r=$(window).width()+a;$(this).css({left:r,top:n,"z-index":s}).show(),$(this).animate({left:t},i,"easeOutQuad")}}),setTimeout(function(){$(".slide.active img.fade,.slide.active .info").fadeIn(600,"easeInOutQuad",function(){$("#feature_slider").removeClass()})},600)}function t(){$(".slide.active").removeClass("active").addClass("previous"),$(".slide.previous img").not(".fade").each(function(){var e=400,t=parseInt($(this).attr("class").split(" ")[2].replace("sp",""));$("#feature_slider").hasClass("scrollLeft")?$(this).animate({left:$(window).width()+e},t,"easeInQuad"):$(this).animate({left:-$(this).width()-e},t,"easeInQuad")}),$(".slide.previous img.fade,.slide.previous .info").fadeOut(600,"easeInQuad",function(){$(".slide.next").removeClass("next").addClass("active").fadeIn(500,"easeInOutQuad",function(){$(".slide.previous").removeClass("previous").fadeOut(500,"easeInOutQuad"),e()})})}function a(){$("#feature_slider").hasClass("disabled")||($("#feature_slider").addClass("disabled"),$("#pagination li:last").hasClass("active")?($("#pagination li.active").removeClass(),$("#pagination li:first").addClass("active"),$("#feature_slider article:first").addClass("next")):($("#pagination li.active").removeClass().next().addClass("active"),$("#feature_slider article.active").next().addClass("next")),t())}$("#feature_slider").addClass("disabled").append('<ul id="pagination" /><a href="" id="slide-left" /><a href="" id="slide-right" />'),$("#feature_slider article").each(function(){$("#pagination").append('<li><a href="#'+$(this).attr("id")+'">'+$(this).index()+"</a></li>")}),$("#pagination li:first").addClass("active"),$("#pagination").css({left:($(window).width()-14*$("#pagination li").length)/2}),$(".slide:first").addClass("active").fadeIn(500,"easeInOutQuad",function(){$("#slide-left, #slide-right, #pagination").fadeIn(200,"easeInOutQuad",function(){e()})}),$("#pagination li").not("active").click(function(){return clearInterval(i),$(this).index()<$("#pagination li.active").index()&&$("#feature_slider").addClass("scrollLeft"),$("#feature_slider").hasClass("disabled")||($("#feature_slider").addClass("disabled"),$("#pagination li.active").removeClass(),$(this).addClass("active"),$($(this).find("a").attr("href")).addClass("next"),t()),!1}),$("#slide-left").click(function(){return clearInterval(i),$("#feature_slider").hasClass("disabled")||($("#feature_slider").addClass("disabled"),$("#pagination li:first").hasClass("active")?($("#pagination li.active").removeClass(),$("#pagination li:last").addClass("active"),$("#feature_slider article:last").addClass("next")):($("#pagination li.active").removeClass().prev().addClass("active"),$("#feature_slider article.active").prev().addClass("next")),$("#feature_slider").addClass("scrollLeft"),t()),!1}),$("#slide-right").click(function(){return clearInterval(i),a(),!1});var i=setInterval(function(){a()},5e3)}t(),$(window).resize(function(){$("#pagination").css({left:($(window).width()-14*$("#pagination li").length)/2}),center=$(window).width()/2,e()})});