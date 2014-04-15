/*!Zepto zepto/polyfill.js*/
(function(a){if(String.prototype.trim===a){String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}}if(Array.prototype.reduce===a){Array.prototype.reduce=function(c){if(this===void 0||this===null){throw new TypeError()}var f=Object(this),b=f.length>>>0,e=0,d;if(typeof c!="function"){throw new TypeError()}if(b==0&&arguments.length==1){throw new TypeError()}if(arguments.length>=2){d=arguments[1]}else{do{if(e in f){d=f[e++];break}if(++e>=b){throw new TypeError()}}while(true)}while(e<b){if(e in f){d=c.call(a,d,f[e],e,f)}e++}return d}}})();
/*!Zepto zepto/zepto.js*/
var Zepto=(function(){var k,q,C,a,I=[],m=I.slice,f=window.document,H={},J={},o=f.defaultView.getComputedStyle,Q={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},u=/^\s*<(\w+|!)[^>]*>/,i=f.__proto__?false:true,B=[1,3,8,9,11],v=["after","prepend","before","append"],r=f.createElement("table"),K=f.createElement("tr"),g={tr:f.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:K,th:K,"*":f.createElement("div")},s=/complete|loaded/,E=/^\.([\w-]+)$/,t=/^#([\w-]+)$/,G=/^[\w-]+$/,e=({}).toString,c={},O,L,D=f.createElement("div");c.matches=function(W,S){if(!W||W.nodeType!==1){return false}var U=W.webkitMatchesSelector||W.mozMatchesSelector||W.oMatchesSelector||W.matchesSelector||W.msMatchesSelector;if(U){return U.call(W,S)}var V,X=W.parentNode,T=!X;if(T){(X=D).appendChild(W)}V=~c.qsa(X,S).indexOf(W);T&&D.removeChild(W);return V};function n(S){return e.call(S)=="[object Function]"}function F(S){return S instanceof Object}function R(U){var S,T;if(e.call(U)!=="[object Object]"){return false}T=(n(U.constructor)&&U.constructor.prototype);if(!T||!hasOwnProperty.call(T,"isPrototypeOf")){return false}for(S in U){}return S===k||hasOwnProperty.call(U,S)}function x(S){return S instanceof Array}function y(S){return typeof S.length=="number"}function P(S){return S.filter(function(T){return T!==k&&T!==null})}function A(S){return S.length>0?[].concat.apply([],S):S}O=function(S){return S.replace(/-+(.)?/g,function(T,U){return U?U.toUpperCase():""})};function l(S){return S.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}L=function(S){return S.filter(function(U,T){return S.indexOf(U)==T})};function M(S){return S in J?J[S]:(J[S]=new RegExp("(^|\\s)"+S+"(\\s|$)"))}function d(S,T){return(typeof T=="number"&&!Q[l(S)])?T+"px":T}function N(U){var S,T;if(!H[U]){S=f.createElement(U);f.body.appendChild(S);T=o(S,"").getPropertyValue("display");S.parentNode.removeChild(S);T=="none"&&(T="block");H[U]=T}return H[U]}function z(X){var aa=["span","font","b","u","i","h1","h2","h3","h4","h5","h6","p","li","ul","table","div"],T,S,Z,Y;for(var V=0;V<aa.length;V++){try{T=0;S=0;Z=new RegExp("\\<"+aa[V]+"( [^\\<\\>]+|)\\>","ig");Y=X.match(Z);if(Y!=null){T=Y.length}Z=new RegExp("\\<\\/"+aa[V]+"\\>","ig");Y=X.match(Z);if(Y!=null){S=Y.length}for(var U=0;U<T-S;U++){X+="</"+aa[V]+">"}}catch(W){}}return X}c.fragment=function(U,T){if(T===k){T=u.test(U)&&RegExp.$1}if(!(T in g)){T="*"}var S=g[T];i&&(U=z(U));S.innerHTML=""+U;return C.each(m.call(S.childNodes),function(){S.removeChild(this)})};c.Z=function(T,S){T=T||[];i?C.extend(T,C.fn):(T.__proto__=arguments.callee.prototype);T.selector=S||"";T.isZ=true;return T};c.isZ=function(S){return S.isZ};c.init=function(S,T){if(!S){return c.Z()}else{if(n(S)){return C(f).ready(S)}else{if(c.isZ(S)){return S}else{var U;if(x(S)){U=P(S)}else{if(R(S)){U=[C.extend({},S)],S=null}else{if(B.indexOf(S.nodeType)>=0||S===window){U=[S],S=null}else{if(u.test(S)){U=c.fragment(S.trim(),RegExp.$1),S=null}else{if(T!==k){return C(T).find(S)}else{U=c.qsa(f,S)}}}}}return c.Z(U,S)}}}};C=function(S,T){return c.init(S,T)};function j(U,T,S){for(q in T){if(S&&R(T[q])){if(!R(U[q])){U[q]={}}j(U[q],T[q],S)}else{if(T[q]!==k){U[q]=T[q]}}}}C.extend=function(U){var S,T=m.call(arguments,1);if(typeof U=="boolean"){S=U;U=T.shift()}T.forEach(function(V){j(U,V,S)});return U};c.qsa=function(T,S){var U;return(T===f&&t.test(S))?((U=T.getElementById(RegExp.$1))?[U]:I):(T.nodeType!==1&&T.nodeType!==9)?I:m.call(E.test(S)?T.getElementsByClassName(RegExp.$1):G.test(S)?T.getElementsByTagName(S):T.querySelectorAll(S))};function w(T,S){return S===k?C(T):C(T).filter(S)}function p(U,T,S,V){return n(T)?T.call(U,S,V):T}C.isFunction=n;C.isObject=F;C.isArray=x;C.isPlainObject=R;C.isWp=i;C.inArray=function(T,U,S){return I.indexOf.call(U,T,S)};C.trim=function(S){return S.trim()};C.uuid=0;C.map=function(W,X){var V,S=[],U,T;if(y(W)){for(U=0;U<W.length;U++){V=X(W[U],U);if(V!=null){S.push(V)}}}else{for(T in W){V=X(W[T],T);if(V!=null){S.push(V)}}}return A(S)};C.each=function(U,V){var T,S;if(y(U)){for(T=0;T<U.length;T++){if(V.call(U[T],T,U[T])===false){return U}}}else{for(S in U){if(V.call(U[S],S,U[S])===false){return U}}}return U};C.fn={forEach:I.forEach,reduce:I.reduce,push:I.push,indexOf:I.indexOf,concat:I.concat,map:function(S){return C.map(this,function(U,T){return S.call(U,T,U)})},slice:function(){return C(m.apply(this,arguments))},ready:function(S){if(s.test(f.readyState)&&(!i||f.readyState!="interactive")){S(C)}else{f.addEventListener("DOMContentLoaded",function(){S(C)},false)}return this},get:function(S){return S===k?m.call(this):this[S]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){if(this.parentNode!=null){this.parentNode.removeChild(this)}})},each:function(S){this.forEach(function(U,T){S.call(U,T,U)});return this},filter:function(S){return C([].filter.call(this,function(T){return c.matches(T,S)}))},add:function(S,T){return C(L(this.concat(C(S,T))))},is:function(S){return this.length>0&&c.matches(this[0],S)},not:function(S){var T=[];if(n(S)&&S.call!==k){this.each(function(V){if(!S.call(this,V)){T.push(this)}})}else{var U=typeof S=="string"?this.filter(S):(y(S)&&n(S.item))?m.call(S):C(S);this.forEach(function(V){if(U.indexOf(V)<0){T.push(V)}})}return C(T)},eq:function(S){return S===-1?this.slice(S):this.slice(S,+S+1)},first:function(){var S=this[0];return S&&!F(S)?S:C(S)},last:function(){var S=this[this.length-1];return S&&!F(S)?S:C(S)},find:function(T){var S;if(this.length==1){S=c.qsa(this[0],T)}else{S=this.map(function(){return c.qsa(this,T)})}return C(S)},closest:function(S,T){var U=this[0];while(U&&!c.matches(U,S)){U=U!==T&&U!==f&&U.parentNode}return C(U)},parents:function(S){var U=[],T=this;while(T.length>0){T=C.map(T,function(V){if((V=V.parentNode)&&V!==f&&U.indexOf(V)<0){U.push(V);return V}})}return w(U,S)},parent:function(S){return w(L(this.pluck("parentNode")),S)},children:function(S){return w(this.map(function(){return m.call(this.children)}),S)},siblings:function(S){return w(this.map(function(T,U){return m.call(U.parentNode.children).filter(function(V){return V!==U})}),S)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(S){return this.map(function(){return this[S]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display="");if(o(this,"").getPropertyValue("display")=="none"){this.style.display=N(this.nodeName)}})},replaceWith:function(S){return this.before(S).remove()},wrap:function(S){return this.each(function(){C(this).wrapAll(C(S)[0].cloneNode(false))})},wrapAll:function(S){if(this[0]){C(this[0]).before(S=C(S));S.append(this)}return this},unwrap:function(){this.parent().each(function(){C(this).replaceWith(C(this).children())});return this},clone:function(){return C(this.map(function(){return this.cloneNode(true)}))},hide:function(){return this.css("display","none")},toggle:function(S){return(S===k?this.css("display")=="none":S)?this.show():this.hide()},prev:function(){return C(this.pluck("previousElementSibling"))},next:function(){return C(this.pluck("nextElementSibling"))},html:function(S){return S===k?(this.length>0?this[0].innerHTML:null):this.each(function(T){var U=this.innerHTML;C(this).empty().append(p(this,S,T,U))})},text:function(S){return S===k?(this.length>0?this[0].textContent:null):this.each(function(){this.textContent=S})},attr:function(T,U){var S;return(typeof T=="string"&&U===k)?(this.length==0||this[0].nodeType!==1?k:(T=="value"&&this[0].nodeName=="INPUT")?this.val():(!(S=this[0].getAttribute(T))&&T in this[0])?this[0][T]:S):this.each(function(V){if(this.nodeType!==1){return}if(F(T)){for(q in T){this.setAttribute(q,T[q])}}else{this.setAttribute(T,p(this,U,V,this.getAttribute(T)))}})},removeAttr:function(S){return this.each(function(){if(this.nodeType===1){this.removeAttribute(S)}})},prop:function(S,T){return(T===k)?(this[0]?this[0][S]:k):this.each(function(U){this[S]=p(this,T,U,this[S])})},data:function(S,U){var T=this.attr("data-"+l(S),U);return T!==null?T:k},val:function(S){return(S===k)?(this.length>0?this[0].value:k):this.each(function(T){this.value=p(this,S,T,this.value)})},offset:function(){var S=function(T){if("getBoundingClientRect" in T){S=function(U){return U.getBoundingClientRect()}}else{S=function(W){var Y=W.offsetTop,X=W.offsetLeft,V=W.offsetWidth,U=W.offsetHeight;while(W.offsetParent){W=W.offsetParent;Y+=W.offsetTop;X+=W.offsetLeft}Y-=window.pageYOffset;X-=window.pageXOffset;return{top:Y,left:X,right:X+V,bottom:Y+U,width:V,height:U}}}return S(T)};return function(W){if(!this.length){return null}var V=S(this[0]),U=W?0:window.pageXOffset,T=W?0:window.pageYOffset;return{left:V.left+U,top:V.top+T,width:V.width,height:V.height,right:V.right+U,bottom:V.bottom+T}}}(),css:function(U,T){if(T===k&&typeof U=="string"){return(this.length==0?k:this[0].style[O(U)]||o(this[0],"").getPropertyValue(U))}var S="";for(q in U){if(typeof U[q]=="string"&&U[q]==""){this.each(function(){this.style.removeProperty(l(q))})}else{S+=l(q)+":"+d(q,U[q])+";"}}if(typeof U=="string"){if(T==""){this.each(function(){this.style.removeProperty(l(U))})}else{S=l(U)+":"+d(U,T)}}S=S.replace(/rgba\((\d*\,\s*\d*\,\s*\d*)\,\s*1\)/g,"rgb($1)");return this.each(function(){this.style.cssText+=";"+S})},index:function(S){return S?this.indexOf(C(S)[0]):this.parent().children().indexOf(this[0])},hasClass:function(S){if(this.length<1){return false}else{return M(S).test(this[0].className)}},addClass:function(S){return this.each(function(T){a=[];var V=this.className,U=p(this,S,T,V);U.split(/\s+/g).forEach(function(W){if(!C(this).hasClass(W)){a.push(W)}},this);a.length&&(this.className+=(V?" ":"")+a.join(" "))})},removeClass:function(S){return this.each(function(T){if(S===k){return this.className=""}a=this.className;p(this,S,T,a).split(/\s+/g).forEach(function(U){a=a.replace(M(U)," ")});this.className=a.trim()})},toggleClass:function(T,S){return this.each(function(U){var V=p(this,T,U,this.className);(S===k?!C(this).hasClass(V):S)?C(this).addClass(V):C(this).removeClass(V)})}};["width","height"].forEach(function(S){C.fn[S]=function(T){var V,U=S.replace(/./,function(W){return W[0].toUpperCase()});if(T===k){return this[0]==window?window["inner"+U]:this[0]==f?f.documentElement["offset"+U]:(V=this.offset())&&V[S]}else{return this.each(function(W){var X=C(this);X.css(S,p(this,T,W,X[S]()))})}}});function h(S,V,U){var T=(S%2)?V:V.parentNode;T?T.insertBefore(U,!S?V.nextSibling:S==1?T.firstChild:S==2?V:null):C(U).remove()}function b(U,S){S(U);for(var T in U.childNodes){b(U.childNodes[T],S)}}v.forEach(function(T,S){C.fn[T]=function(){var U=C.map(arguments,function(Y){return F(Y)?Y:c.fragment(Y)});if(U.length<1){return this}var V=this.length,W=V>1,X=S<2;return this.each(function(Y,ab){for(var Z=0;Z<U.length;Z++){var aa=U[X?U.length-Z-1:Z];b(aa,function(ac){if(ac.nodeName!=null&&ac.nodeName.toUpperCase()==="SCRIPT"&&(!ac.type||ac.type==="text/javascript")){window["eval"].call(window,ac.innerHTML)}});if(W&&Y<V-1){aa=aa.cloneNode(true)}h(S,ab,aa)}})};C.fn[(S%2)?T+"To":"insert"+(S?"Before":"After")]=function(U){C(U)[T](this);return this}});c.Z.prototype=C.fn;c.camelize=O;c.uniq=L;C.zepto=c;return C})();window.Zepto=Zepto;"$" in window||(window.$=Zepto);
/*!Zepto zepto/event.js*/
(function(h){var o=h.zepto.qsa,b={},n=1,q={};q.click=q.mousedown=q.mouseup=q.mousemove="MouseEvents";function l(r){return r._zid||(r._zid=n++)}function c(s,u,t,r){u=e(u);if(u.ns){var v=k(u.ns)}return(b[l(s)]||[]).filter(function(w){return w&&(!u.e||w.e==u.e)&&(!u.ns||v.test(w.ns))&&(!t||l(w.fn)===l(t))&&(!r||w.sel==r)})}function e(r){var s=(""+r).split(".");return{e:s[0],ns:s.slice(1).sort().join(" ")}}function k(r){return new RegExp("(?:^| )"+r.replace(" "," .* ?")+"(?: |$)")}function m(r,t,s){if(h.isObject(r)){h.each(r,s)}else{r.split(/\s/).forEach(function(u){s(u,t)})}}function p(v,u,w,s,r,t){t=!!t;var y=l(v),x=(b[y]||(b[y]=[]));m(u,w,function(C,B){var A=r&&r(B,C),E=A||B;var D=function(G){var F=E.apply(v,[G].concat(G.data));if(F===false){G.preventDefault()}return F};var z=h.extend(e(C),{fn:B,proxy:D,sel:s,del:A,i:x.length});x.push(z);v.addEventListener(z.e,D,t)})}function g(t,s,u,r){var v=l(t);m(s||"",u,function(x,w){c(t,x,w,r).forEach(function(y){delete b[v][y.i];t.removeEventListener(y.e,y.proxy,false)})})}h.event={add:p,remove:g};h.proxy=function(t,s){if(h.isFunction(t)){var r=function(){return t.apply(s,arguments)};r._zid=l(t);return r}else{if(typeof s=="string"){return h.proxy(t[s],t)}else{throw new TypeError("expected function")}}};h.fn.bind=function(r,s){return this.each(function(){p(this,r,s)})};h.fn.unbind=function(r,s){return this.each(function(){g(this,r,s)})};h.fn.one=function(r,s){return this.each(function(u,t){p(this,r,s,null,function(w,v){return function(){var x=w.apply(t,arguments);g(t,v,w);return x}})})};var d=function(){return true},a=function(){return false},j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function i(s){var r=h.extend({originalEvent:s},s);h.each(j,function(u,t){r[u]=function(){this[t]=d;return s[u].apply(s,arguments)};r[t]=a});return r}function f(s){s.defaultPrevented=false;var r=s.preventDefault;s.preventDefault=function(){this.defaultPrevented=true;r.call(this)}}h.fn.delegate=function(r,t,u){var s=false;if(t=="blur"||t=="focus"){if(h.iswebkit){t=t=="blur"?"focusout":t=="focus"?"focusin":t}else{s=true}}return this.each(function(w,v){p(v,t,u,r,function(x){return function(A){var y,z=h(A.target).closest(r,v).get(0);if(z){y=h.extend(i(A),{currentTarget:z,liveFired:v});return x.apply(z,[y].concat([].slice.call(arguments,1)))}}},s)})};h.fn.undelegate=function(r,s,t){return this.each(function(){g(this,s,t,r)})};h.fn.live=function(r,s){h(document.body).delegate(this.selector,r,s);return this};h.fn.die=function(r,s){h(document.body).undelegate(this.selector,r,s);return this};h.fn.on=function(s,r,t){return r==undefined||h.isFunction(r)?this.bind(s,r||t):this.delegate(r,s,t)};h.fn.off=function(s,r,t){return r==undefined||h.isFunction(r)?this.unbind(s,r||t):this.undelegate(r,s,t)};h.fn.trigger=function(s,t){var u,r;return this.each(function(w,v){u=i(typeof s=="string"?h.Event(s):s);u.data=t;u.target=v;h.each(h(this).add(h(this).parents()).add(document),function(y,x){h.each(c(x,s.type||s),function(z,A){r=A.proxy(u);u.isDefaultPrevented()&&(u.defaultPrevented=s.defaultPrevented=true);if(u.isImmediatePropagationStopped()){return false}});if(u.isImmediatePropagationStopped()||u.isPropagationStopped()){return false}})})};h.fn.triggerHandler=function(s,t){var u,r;this.each(function(w,v){u=i(typeof s=="string"?h.Event(s):s);u.data=t;u.target=v;h.each(c(v,s.type||s),function(x,y){r=y.proxy(u);if(u.isImmediatePropagationStopped()){return false}})});return r};("focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error").split(" ").forEach(function(r){h.fn[r]=function(s){return this.bind(r,s)}});["focus","blur"].forEach(function(r){h.fn[r]=function(t){if(t){this.bind(r,t)}else{if(this.length){try{this.get(0)[r]()}catch(s){}}}return this}});h.Event=function(u,t){var v=document.createEvent(q[u]||"Events"),r=true,w;if(t){for(var s in t){(s=="bubbles")?(r=!!t[s]):(v[s]=t[s])}}v.initEvent(u,r,true,null,null,null,null,null,null,null,null,null,null,null,null);w=v.constructor;v=i(v);v.constructor=w;f(v);return v}})(Zepto);
/*!Zepto zepto/detect.js*/
(function(b){function a(c){var f=this.os={},g=this.browser={},l=c.match(/WebKit\/([\d.]+)/),e=c.match(/(Android).*?([\d.]+)/)||/HTC/.test(c),m=c.match(/(iPad).*OS\s([\d_]+)/),k=!m&&c.match(/(iPhone\sOS)\s([\d_]+)/),n=c.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),j=n&&c.match(/TouchPad/),i=c.match(/Kindle\/([\d.]+)/),h=c.match(/Silk\/([\d._]+)/),d=c.match(/(BlackBerry).*Version\/([\d.]+)/);if(g.webkit=!!l){g.version=l[1]}if(e){f.android=true,f.version=e[2]}if(k){f.ios=f.iphone=true,f.version=k[2].replace(/_/g,".")}if(m){f.ios=f.ipad=true,f.version=m[2].replace(/_/g,".")}if(n){f.webos=true,f.version=n[2]}if(j){f.touchpad=true}if(d){f.blackberry=true,f.version=d[2]}if(i){f.kindle=true,f.version=i[1]}if(h){g.silk=true,g.version=h[1]}if(!h&&f.android&&c.match(/Kindle Fire/)){g.silk=true}}a.call(b,navigator.userAgent);b.__detect=a})(Zepto);
/*!Zepto zepto/fx.js*/
(function(e,c){var g="",k,b,i,m={"":"",Webkit:"webkit",Moz:"",O:"o",ms:"MS"},j=window.document,d=j.createElement("div"),l=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,h={};function a(n){return n.toLowerCase()}function f(n){return k?k+n:a(n)}e.each(m,function(o,n){if(d.style[o+"TransitionProperty"]!==c){g="-"+a(o)+"-";k=n;return false}});h[g+"transition-property"]=h[g+"transition-duration"]=h[g+"transition-timing-function"]=h[g+"animation-name"]=h[g+"animation-duration"]="";e.fx={off:(k===c&&d.style.transitionProperty===c),cssPrefix:g,transitionEnd:f("TransitionEnd"),animationEnd:f("AnimationEnd")};e.fn.animate=function(n,o,p,q){if(e.isObject(o)){p=o.easing,q=o.complete,o=o.duration}if(o){o=o/1000}return this.anim(n,o,p,q)};e.fn.animateFrom=function(o,s,t,u){if(e.isObject(s)){t=s.easing,u=s.complete,s=s.duration}if(s){s=s/1000}var q={},p,r=e(this);e.extend(true,q,o);for(var n in o){if(l.test(n)){p||(p=[]);p.push(n+"("+o[n]+")");delete q[n];delete o[n]}else{o[n]=r.css(n)}}if(p){q[g+"transform"]=p.join(" ");o[g+"transform"]=r.css(g+"transform")}r.css(q);return this.anim(o,s,t,u)};e.fn.anim=function(s,p,o,u){var r,w={},t,q=this,n,v=e.fx.transitionEnd;if(p===c){p=0.4}if(e.fx.off){p=0}if(typeof s=="string"){w[g+"animation-name"]=s;w[g+"animation-duration"]=p+"s";v=e.fx.animationEnd}else{for(t in s){if(l.test(t)){r||(r=[]);r.push(t+"("+s[t]+")");delete s[t]}else{w[t]=s[t]}}if(r){w[g+"transform"]=r.join(" ");s.transform="transform"}if(!e.fx.off&&typeof s==="object"){w[g+"transition-property"]=Object.keys(s).join(", ");w[g+"transition-duration"]=p+"s";w[g+"transition-timing-function"]=(o||"linear")}}n=function(x){if(typeof x!=="undefined"){if(x.target!==x.currentTarget){return}e(x.target).unbind(v,arguments.callee)}e(this).css(h);u&&u.call(this)};if(p>0){this.bind(v,n)}setTimeout(function(){q.css(w);if(p<=0){setTimeout(function(){q.each(function(){n.call(this)})},0)}},0);return this};d=null})(Zepto);
/*!Zepto zepto/ajax.js*/
(function($){var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;function triggerAndReturn(context,eventName,data){var event=$.Event(eventName);$(context).trigger(event,data);return !event.defaultPrevented}function triggerGlobal(settings,context,eventName,data){if(settings.global){return triggerAndReturn(context||document,eventName,data)}}$.active=0;function ajaxStart(settings){if(settings.global&&$.active++===0){triggerGlobal(settings,null,"ajaxStart")}}function ajaxStop(settings){if(settings.global&&!(--$.active)){triggerGlobal(settings,null,"ajaxStop")}}function ajaxBeforeSend(xhr,settings){var context=settings.context;if(settings.beforeSend.call(context,xhr,settings)===false||triggerGlobal(settings,context,"ajaxBeforeSend",[xhr,settings])===false){return false}triggerGlobal(settings,context,"ajaxSend",[xhr,settings])}function ajaxSuccess(data,xhr,settings){var context=settings.context,status="success";settings.success.call(context,data,status,xhr);triggerGlobal(settings,context,"ajaxSuccess",[xhr,settings,data]);ajaxComplete(status,xhr,settings)}function ajaxError(error,type,xhr,settings){var context=settings.context;settings.error.call(context,xhr,type,error);triggerGlobal(settings,context,"ajaxError",[xhr,settings,error]);ajaxComplete(type,xhr,settings)}function ajaxComplete(status,xhr,settings){var context=settings.context;settings.complete.call(context,xhr,status);triggerGlobal(settings,context,"ajaxComplete",[xhr,settings]);ajaxStop(settings)}function empty(){}$.ajaxJSONP=function(options){for(key in $.ajaxSettings){if(options[key]===undefined){options[key]=$.ajaxSettings[key]}}var callbackName="jsonp"+(++jsonpID),script=document.createElement("script"),abort=function(){$(script).remove();if(callbackName in window){window[callbackName]=empty}ajaxComplete("abort",xhr,options)},xhr={abort:abort},abortTimeout;if(options.error){script.onerror=function(){xhr.abort();options.error()}}window[callbackName]=function(data){clearTimeout(abortTimeout);$(script).remove();delete window[callbackName];ajaxSuccess(data,xhr,options)};serializeData(options);script.src=options.url.replace(/=\?/,"="+callbackName);$("head").append(script);if(options.timeout>0){abortTimeout=setTimeout(function(){xhr.abort();ajaxComplete("timeout",xhr,options)},options.timeout)}return xhr};$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:true,xhr:function(){return new window.XMLHttpRequest()},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:false,timeout:0};function mimeToDataType(mime){return mime&&(mime==htmlType?"html":mime==jsonType?"json":scriptTypeRE.test(mime)?"script":xmlTypeRE.test(mime)&&"xml")||"text"}function appendQuery(url,query){return(url+"&"+query).replace(/[&?]{1,2}/,"?")}function serializeData(options){if(isObject(options.data)){options.data=$.param(options.data)}if(options.data&&(!options.type||options.type.toUpperCase()=="GET")){options.url=appendQuery(options.url,options.data)}}$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings){if(settings[key]===undefined){settings[key]=$.ajaxSettings[key]}}ajaxStart(settings);if(!settings.crossDomain){settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host}var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder){if(!hasPlaceholder){settings.url=appendQuery(settings.url,"callback=?")}return $.ajaxJSONP(settings)}if(!settings.url){settings.url=window.location.toString()}serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;if(!settings.crossDomain){baseHeaders["X-Requested-With"]="XMLHttpRequest"}if(mime){baseHeaders.Accept=mime;if(mime.indexOf(",")>-1){mime=mime.split(",",2)[0]}xhr.overrideMimeType&&xhr.overrideMimeType(mime)}if(settings.contentType||(settings.data&&settings.type.toUpperCase()!="GET")){baseHeaders["Content-Type"]=(settings.contentType||"application/x-www-form-urlencoded")}settings.headers=$.extend(baseHeaders,settings.headers||{});xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=false;if((xhr.status>=200&&xhr.status<300)||xhr.status==304||(xhr.status==0&&protocol=="file:")){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type"));result=xhr.responseText;try{if(dataType=="script"){(1,eval)(result)}else{if(dataType=="xml"){result=xhr.responseXML}else{if(dataType=="json"){result=blankRE.test(result)?null:JSON.parse(result)}}}}catch(e){error=e}if(error){ajaxError(error,"parsererror",xhr,settings)}else{ajaxSuccess(result,xhr,settings)}}else{ajaxError(null,"error",xhr,settings)}}};var async="async" in settings?settings.async:true;xhr.open(settings.type,settings.url,async);for(name in settings.headers){xhr.setRequestHeader(name,settings.headers[name])}if(ajaxBeforeSend(xhr,settings)===false){xhr.abort();return false}if(settings.timeout>0){abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty;xhr.abort();ajaxError(null,"timeout",xhr,settings)},settings.timeout)}xhr.send(settings.data?settings.data:null);return xhr};$.get=function(url,success){return $.ajax({url:url,success:success})};$.post=function(url,data,success,dataType){if($.isFunction(data)){dataType=dataType||success,success=data,data=null}return $.ajax({type:"POST",url:url,data:data,success:success,dataType:dataType})};$.getJSON=function(url,success){return $.ajax({url:url,success:success,dataType:"json"})};$.fn.load=function(url,success){if(!this.length){return this}var self=this,parts=url.split(/\s/),selector;if(parts.length>1){url=parts[0],selector=parts[1]}$.get(url,function(response){self.html(selector?$(document.createElement("div")).html(response.replace(rscript,"")).find(selector).html():response);success&&success.call(self)});return this};var escape=encodeURIComponent;function serialize(params,obj,traditional,scope){var array=$.isArray(obj);$.each(obj,function(key,value){if(scope){key=traditional?scope:scope+"["+(array?"":key)+"]"}if(!scope&&array){params.add(value.name,value.value)}else{if(traditional?$.isArray(value):isObject(value)){serialize(params,value,traditional,key)}else{params.add(key,value)}}})}$.param=function(obj,traditional){var params=[];params.add=function(k,v){this.push(escape(k)+"="+escape(v))};serialize(params,obj,traditional);return params.join("&").replace("%20","+")}})(Zepto);
/*!Zepto zepto/form.js*/
(function(a){a.fn.serializeArray=function(){var b=[],c;a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");if(this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&((d!="radio"&&d!="checkbox")||this.checked)){b.push({name:c.attr("name"),value:c.val()})}});return b};a.fn.serialize=function(){var b=[];this.serializeArray().forEach(function(c){b.push(encodeURIComponent(c.name)+"="+encodeURIComponent(c.value))});return b.join("&")};a.fn.submit=function(c){if(c){this.bind("submit",c)}else{if(this.length){var b=a.Event("submit");this.eq(0).trigger(b);if(!b.defaultPrevented){this.get(0).submit()}}}return this}})(Zepto);
/*!Zepto zepto/assets.js*/
(function(c){var a=[],b;c.fn.remove=function(){return this.each(function(){if(this.parentNode){if(this.tagName==="IMG"){a.push(this);this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";if(b){clearTimeout(b)}b=setTimeout(function(){a=[]},60000)}this.parentNode.removeChild(this)}})}})(Zepto);
/*!Zepto zepto/data.js*/
(function(f){var e={},g=f.fn.data,c=f.zepto.camelize,h=f.expando="Zepto"+(+new Date());function a(l,j){var m=l[h],i=m&&e[m];if(j===undefined){return i||b(l)}else{if(i){if(j in i){return i[j]}var k=c(j);if(k in i){return i[k]}}return g.call(f(l),j)}}function b(k,j,l){var m=k[h]||(k[h]=++f.uuid),i=e[m]||(e[m]=d(k));if(j!==undefined){i[c(j)]=l}return i}function d(j){var i={};f.each(j.attributes,function(l,k){if(k.name.indexOf("data-")==0){i[c(k.name.replace("data-",""))]=k.value}});return i}f.fn.data=function(i,j){return j===undefined?f.isPlainObject(i)?this.each(function(k,l){f.each(i,function(m,n){b(l,m,n)})}):this.length==0?undefined:a(this[0],i):this.each(function(){b(this,i,j)})};f.fn.removeData=function(i){if(typeof i=="string"){i=i.split(/\s+/)}return this.each(function(){var k=this[h],j=k&&e[k];if(j){f.each(i,function(){delete j[c(this)]})}})}})(Zepto);
/*!Zepto zepto/selector.js*/
(function(f){var a=f.zepto,b=a.qsa,e=a.matches;function h(i){i=f(i);return !!(i.width()||i.height())&&i.css("display")!=="none"}var d=a.cssFilters={visible:function(){if(h(this)){return this}},hidden:function(){if(!h(this)){return this}},selected:function(){if(this.selected){return this}},checked:function(){if(this.checked){return this}},parent:function(){return this.parentNode},first:function(i){if(i===0){return this}},last:function(i,j){if(i===j.length-1){return this}},eq:function(i,j,k){if(i===k){return this}},contains:function(i,j,k){if(f(this).text().indexOf(k)>-1){return this}},has:function(i,j,k){if(a.qsa(this,k).length){return this}}};var c=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*");function g(n,m){var l,i,k=n.match(c);if(k&&k[2] in d){var l=d[k[2]],i=k[3];n=k[1];if(i){var j=Number(i);if(isNaN(j)){i=i.replace(/^["']|["']$/g,"")}else{i=j}}}return m(n,l,i)}a.qsa=function(j,i){return g(i,function(n,m,k){try{if(!n&&m){n="*"}var l=b(j,n)}catch(o){console.error("error performing selector: %o",i);throw o}return !m?l:a.uniq(f.map(l,function(q,p){return m.call(q,p,l,k)}))})};a.matches=function(j,i){return g(i,function(m,l,k){return(!m||e(j,m))&&(!l||l.call(j,null,k)===j)})}})(Zepto);
/*!Zepto zepto/touch.js*/
(function(g){var f={},b,i={touchstart:"MSPointerDown",touchend:"MSPointerUp",touchmove:"MSPointerMove"};function k(m){return window.navigator.msPointerEnabled?i[m]:m}function c(m){return"tagName" in m?m:m.parentNode}function j(n,m,p,o){var r=Math.abs(n-m),q=Math.abs(p-o);return r>=q?(n-m>0?"Left":"Right"):(p-o>0?"Up":"Down")}var e=750,a,h=5;function l(){a=null;if(f.last){f.el.trigger("longTap");f={}}}function d(){if(a){clearTimeout(a)}a=null}g(document).ready(function(){var m,n;g("body").css("-ms-touch-action: none;");g(document.body).bind(k("touchstart"),function(o){m=Date.now();n=m-(f.last||m);f.el=g(c(o.touches?o.touches[0].target:o.target));b&&clearTimeout(b);f.x1=o.touches?o.touches[0].pageX:o.pageX;f.y1=o.touches?o.touches[0].pageY:o.pageY;if(n>0&&n<=250){f.isDoubleTap=true}f.last=m;a=setTimeout(l,e)}).bind(k("touchmove"),function(o){if(!f.el){return}f.x2=o.touches?o.touches[0].pageX:o.pageX;f.y2=o.touches?o.touches[0].pageY:o.pageY;f.x2&&h<=Math.abs(f.x1-f.x2)&&d()}).bind(k("touchend"),function(o){d();if(f.isDoubleTap){f.el.trigger("doubleTap");f={}}else{if((f.x2&&Math.abs(f.x1-f.x2)>30)||(f.y2&&Math.abs(f.y1-f.y2)>30)){f.el.trigger("swipe")&&f.el.trigger("swipe"+(j(f.x1,f.x2,f.y1,f.y2)));f={}}else{if("last" in f){f.el.trigger("tap");b=setTimeout(function(){b=null;f.el.trigger("singleTap");f={}},250)}}}}).bind("touchcancel",function(){if(b){clearTimeout(b)}if(a){clearTimeout(a)}a=b=null;f={}})});["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(n){g.fn[n]=function(m){return this.bind(n,m)}});g.fn.longTap=function(m){this.bind("contextmenu",function(n){n.preventDefault()});return this.bind("longTap",m)}})(Zepto);

//new FastClick(document);

$.fn.wtap = function(callback){
  	
	
		
		this.each(function(i){
			;(function(_this){
				var sleep = false; 
			 	var $this = $(_this);
					$this.tap(function(){
						if(sleep == true)return false;
							sleep = true;
							if (typeof callback == 'function') {
								if (typeof callback.call == 'function') {
									callback.call(this);
								}
							}
							
							setTimeout(function(){
								sleep = false;
							},125)
					})
			})(this);
		})
		
			return this;
}

$.fn.click = $.fn.wtap;

$.fn.w_swipeLeft = function(callback){
  	
	
		
		this.each(function(i){
			;(function(_this){
				var sleep = false; 
			 	var $this = $(_this);
					$this.swipeLeft(function(){
						if(sleep == true)return false;
							sleep = true;
							if(typeof callback == 'function')callback.call(_this);
							setTimeout(function(){
								sleep = false;
							},25)
					})
			})(this);
		})
		
			return this;
}


$.fn.w_swipeRight = function(callback){
  	
	
		
		this.each(function(i){
			;(function(_this){
				var sleep = false; 
			 	var $this = $(_this);
					$this.swipeRight(function(){
						if(sleep == true)return false;
							sleep = true;
							if(typeof callback == 'function')callback.call(_this);
							setTimeout(function(){
								sleep = false;
							},25)
					})
			})(this);
		})
		
			return this;

}



$.fn.mouse_down = function(callback){
  	
	
		
		this.each(function(i){
			;(function(_this){
				var sleep = false; 
			 	var $this = $(_this);
					$this.bind('touchstart',function(){
						if(sleep == true)return false;
							sleep = true;
							if (typeof callback == 'function') {
								if (typeof callback.call == 'function') {
									callback.call(this);
								}
							}
							
							setTimeout(function(){
								sleep = false;
							},25)
					})
			})(this);
		})
		
			return this;
}

$.fn.mouse_up = function(callback){
  	
	
		
		this.each(function(i){
			;(function(_this){
				var sleep = false; 
			 	var $this = $(_this);
					$this.bind('touchend',function(){
						if(sleep == true)return false;
							sleep = true;
							if (typeof callback == 'function') {
								if (typeof callback.call == 'function') {
									callback.call(this);
								}
							}
							
							setTimeout(function(){
								sleep = false;
							},25)
					})
			})(this);
		})
		
			return this;
}


$.fn.hover = function(startCallback,endCallback){
  	
	
		
		this.each(function(i){
			;(function(_this){
				var sleep = false; 
			 	var $this = $(_this);
					$this.bind('touchstart',function(){
						if(sleep == true)return false;
							sleep = true;
							if (typeof startCallback == 'function') {
								if (typeof startCallback.call == 'function') {
									startCallback.call(this);
								}
							}
							
							setTimeout(function(){
								sleep = false;
							},25)
					})
			})(this);

			;(function(_this){
				var sleep = false; 
			 	var $this = $(_this);
					$this.bind('touchend',function(){
						if(sleep == true)return false;
							sleep = true;
							if (typeof endCallback == 'function') {
								if (typeof endCallback.call == 'function') {
									endCallback.call(this);
								}
							}
							
							setTimeout(function(){
								sleep = false;
							},25)
					})
			})(this);
		})
		
			return this;
}

