(function(e){function t(t){for(var r,o,u=t[0],l=t[1],i=t[2],s=0,b=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return l.p+"js/"+({about:"about",lunch:"lunch"}[e]||e)+"."+{about:"1eaf02df",lunch:"b27da349"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={lunch:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",lunch:"lunch"}[e]||e)+"."+{about:"31d6cfe0",lunch:"0a977076"}[e]+".css",a=l.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===a))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){i=b[u],s=i.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var b=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",b.name="ChunkLoadError",b.type=r,b.request=o,n[1](b)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue3-retro/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0546":function(e,t,n){"use strict";n("dac5")},"09d7":function(e,t,n){},"0d53":function(e,t,n){"use strict";n("09d7")},"2ae0":function(e,t,n){"use strict";n("dfd1")},"2b81":function(e,t,n){e.exports=n.p+"img/pokeball.0e1e6c5e.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},a=Object(r["f"])("Home"),c=Object(r["f"])(" | "),u=Object(r["f"])("lunch"),l=Object(r["f"])(" | "),i=Object(r["f"])("About");function s(e,t){var n=Object(r["w"])("router-link"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(n,{to:"/"},{default:Object(r["B"])((function(){return[a]})),_:1}),c,Object(r["g"])(n,{to:"/lunch"},{default:Object(r["B"])((function(){return[u]})),_:1}),l,Object(r["g"])(n,{to:"/about"},{default:Object(r["B"])((function(){return[i]})),_:1})]),Object(r["g"])(s)],64)}var b=n("6b0d"),d=n.n(b);const f={},p=d()(f,[["render",s]]);var j=p,O=(n("aaa6"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),h=n("2b81"),m=n.n(h),v=function(e){return Object(r["s"])("data-v-c801a3ec"),e=e(),Object(r["q"])(),e},g={class:"home"},y=v((function(){return Object(r["e"])("img",{alt:"Vue logo",src:m.a,class:"logo"},null,-1)}));function k(e,t,n,o,a,c){var u=Object(r["w"])("HelloWorld"),l=Object(r["w"])("FakeDb");return Object(r["p"])(),Object(r["d"])("div",g,[y,Object(r["g"])(u,{msg:"Vue.js App With Fake Api"}),Object(r["g"])(l)])}var w={class:"hello"};function D(e,t,n,o,a,c){return Object(r["p"])(),Object(r["d"])("div",w,[Object(r["e"])("h1",null,Object(r["y"])(n.msg),1)])}var _={name:"HelloWorld",props:{msg:String}};n("0546");const x=d()(_,[["render",D],["__scopeId","data-v-86b0aab2"]]);var P=x,S=function(e){return Object(r["s"])("data-v-7416a8e0"),e=e(),Object(r["q"])(),e},A={class:"inputBoard"},C=S((function(){return Object(r["e"])("label",{for:"title",class:"input-label"},"Title",-1)})),E=S((function(){return Object(r["e"])("input",{type:"text",class:"input-text",id:"title"},null,-1)})),F=S((function(){return Object(r["e"])("br",null,null,-1)})),L=S((function(){return Object(r["e"])("label",{for:"",class:"input-label"},"Content",-1)})),T=S((function(){return Object(r["e"])("textarea",{class:"input-text",id:"contents",rows:"4"},null,-1)})),B=S((function(){return Object(r["e"])("br",null,null,-1)})),H={class:"list"},N={class:"contents"};function q(e,t,n,o,a,c){return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",A,[C,E,F,L,T,B,Object(r["e"])("button",{class:"button-4",role:"button",onClick:t[0]||(t[0]=function(){return e.postFakeDbData&&e.postFakeDbData.apply(e,arguments)})},"Submit")]),Object(r["e"])("div",H,[Object(r["e"])("ol",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.fakeDbList,(function(e){return Object(r["p"])(),Object(r["d"])("li",{class:"",key:e.id},[Object(r["e"])("span",null,Object(r["y"])(e.title),1),Object(r["e"])("div",N,Object(r["y"])(e.contents),1)])})),128))])])],64)}var I={name:"FakeDb",data:function(){return{fakeDbList:[],fakeDbData:{}}},mounted:function(){this.getFakeDbData(0)},methods:{getFakeDbData:function(e){var t=this,n=["posts","comments","profile","db"],r="https://my-json-server.typicode.com/gray-kim/fake_db/",o=n[e];console.log(r+o),this.axios.get(r+o).then((function(n){console.log(n.data),n.data.length>0&&(0==e||1==e?t.fakeDbList=n.data:t.fakeDbData=n.data)}))}}};n("2ae0");const M=d()(I,[["render",q],["__scopeId","data-v-7416a8e0"]]);var W=M,J={name:"Home",components:{FakeDb:W,HelloWorld:P}};n("0d53");const V=d()(J,[["render",k],["__scopeId","data-v-c801a3ec"]]);var K=V,U=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/lunch",name:"Lunch",component:function(){return n.e("lunch").then(n.bind(null,"be22"))}}],z=Object(O["a"])({history:Object(O["b"])("/vue3-retro/"),routes:U}),G=z,Q=n("5502"),R=Object(Q["a"])({state:{},mutations:{},actions:{},modules:{}}),X=n("bc3a"),Y=n.n(X),Z=Object(r["c"])(j);Z.config.globalProperties.axios=Y.a,Z.use(R),Z.use(G),Z.mount("#app")},aaa6:function(e,t,n){},dac5:function(e,t,n){},dfd1:function(e,t,n){}});
//# sourceMappingURL=app.f9290125.js.map