(this["webpackJsonpreact-test-app"]=this["webpackJsonpreact-test-app"]||[]).push([[0],{131:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return i}));var n=r(13),a=r(37),i=(r(28),function(t,e,r,i,c){var o=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/o.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,r=o.innerWidth,a=e/r,i=t.velocityX,s=r/2,u=i>=0&&(i>.2||t.deltaX>s),p=(u?1-a:a)*r,d=0;if(p>5){var h=p/Math.abs(i);d=Math.min(h,540)}c(u,a<=0?.01:Object(n.j)(0,a,.9999),d)}})})}}]);
//# sourceMappingURL=0.022c0a31.chunk.js.map