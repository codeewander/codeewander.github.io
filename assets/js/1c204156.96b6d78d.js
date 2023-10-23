"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=l,d=u["".concat(p,".").concat(m)]||u[m]||k[m]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(3117),l=(r(7294),r(3905));const a={id:"csrf-and-xss",title:"Web \u524d\u7aef\u8cc7\u5b89\u98a8\u96aa - CSRF \u548c XSS",keywords:["CSRF","XSS","Web Security"]},o=void 0,i={unversionedId:"web/csrf-and-xss",id:"web/csrf-and-xss",title:"Web \u524d\u7aef\u8cc7\u5b89\u98a8\u96aa - CSRF \u548c XSS",description:"\u5e38\u898b\u7684 Web \u524d\u7aef\u5b89\u5168\u6f0f\u6d1e\u50cf\u662f\uff1aXSS \u548c CSRF",source:"@site/docs/web/csrf-and-xss.md",sourceDirName:"web",slug:"/web/csrf-and-xss",permalink:"/docs/web/csrf-and-xss",draft:!1,tags:[],version:"current",frontMatter:{id:"csrf-and-xss",title:"Web \u524d\u7aef\u8cc7\u5b89\u98a8\u96aa - CSRF \u548c XSS",keywords:["CSRF","XSS","Web Security"]},sidebar:"Docs",previous:{title:"\u700f\u89bd\u5668(Chrome)\u904b\u4f5c\u539f\u7406",permalink:"/docs/web/browser-theory"},next:{title:"Code snippet functions",permalink:"/docs/others/snippet-functions"}},p={},s=[{value:"XSS(\u8de8\u7ad9\u6307\u4ee4\u653b\u64ca)",id:"xss\u8de8\u7ad9\u6307\u4ee4\u653b\u64ca",level:2},{value:"\u653b\u64ca\u65b9\u5f0f",id:"\u653b\u64ca\u65b9\u5f0f",level:3},{value:"\u9632\u79a6\u65b9\u5f0f",id:"\u9632\u79a6\u65b9\u5f0f",level:3},{value:"CSRF(\u8de8\u7ad9\u8acb\u6c42\u507d\u9020)",id:"csrf\u8de8\u7ad9\u8acb\u6c42\u507d\u9020",level:2},{value:"\u9632\u79a6\u65b9\u5f0f",id:"\u9632\u79a6\u65b9\u5f0f-1",level:3},{value:"\u5b89\u5168\u7684\u767b\u5165\u7ba1\u7406",id:"\u5b89\u5168\u7684\u767b\u5165\u7ba1\u7406",level:3},{value:"XSS V.S. CSRF",id:"xss-vs-csrf",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],c={toc:s},u="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5e38\u898b\u7684 Web \u524d\u7aef\u5b89\u5168\u6f0f\u6d1e\u50cf\u662f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"XSS")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"CSRF")),(0,l.kt)("h2",{id:"xss\u8de8\u7ad9\u6307\u4ee4\u653b\u64ca"},"XSS(\u8de8\u7ad9\u6307\u4ee4\u653b\u64ca)"),(0,l.kt)("p",null,"\u8de8\u7ad9\u6307\u4ee4\u653b\u64ca(Cross-site Script)\uff0c\u539f\u672c\u7e2e\u5beb\u61c9\u8a72\u662f CSS\uff0c\u56e0\u70ba\u548c CSS \u6a23\u5f0f\u8868\u4e00\u6a23\uff0c\u56e0\u6b64\u8abf\u6574\u7e2e\u5beb\u70ba XSS\uff0c\u6307\u7684\u662f\u653b\u64ca\u8005\u900f\u904e\u7db2\u9801\u958b\u767c\u7559\u4e0b\u7684\u6f0f\u6d1e\uff0c\u6ce8\u5165\u60e1\u610f\u7a0b\u5f0f\u78bc\u5230\u7db2\u9801\uff0c\u8b93\u4f7f\u7528\u8005\u7684\u700f\u89bd\u5668\u4e0a\u52a0\u8f09\u4e26\u57f7\u884c\u60e1\u610f\u7684\u7a0b\u5f0f\u78bc\u3002\u9019\u53ef\u80fd\u5c0e\u81f4\u5077\u53d6\u7528\u6236\u7684\u8cc7\u8a0a\u3001\u4fee\u6539\u7db2\u9801\u5167\u5bb9\uff0c\u751a\u81f3\u9060\u7a0b\u63a7\u5236\u7528\u6236\u7684\u700f\u89bd\u5668\u3002"),(0,l.kt)("h3",{id:"\u653b\u64ca\u65b9\u5f0f"},"\u653b\u64ca\u65b9\u5f0f"),(0,l.kt)("p",null,"XSS \u653b\u64ca\u53ef\u4ee5\u5206\u6210\u4e09\u7a2e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"\u53cd\u5c04\u578b(\u975e\u6301\u4e45)"),": \u653b\u64ca\u8005\u5c07\u60e1\u610f\u4ee3\u78bc\u5d4c\u5165 URL\uff0c\u7576\u7528\u6236\u9ede\u64ca\u8a72 URL \u6642\uff0c\u653b\u64ca\u767c\u751f\uff0c\u4f8b\u5982\uff1a\u4f7f\u7528\u8005\u767c\u9001\u7372\u53d6\u8a02\u55ae\u5217\u8868\u7684\u8acb\u6c42\uff0c\u9ed1\u5ba2\u63d2\u5165\u60e1\u610f\u7a0b\u5f0f\u78bc\uff0c\u5c0e\u81f4\u4f3a\u670d\u5668\u56de\u50b3\u6642\u591a\u56de\u50b3\u4e86\u4f7f\u7528\u8005\u7684\u5e33\u865f\u5bc6\u78bc\u3002\u4f8b\u5982\uff1a\u4f7f\u7528\u8005\u767c\u9001\u4fdd\u5b58\u8a55\u8ad6\u7684\u8acb\u6c42\uff0c\u9ed1\u5ba2\u63d2\u5165\u60e1\u610f\u7a0b\u5f0f\u78bc\u5c07\u8a55\u8ad6\u8005\u8cc7\u8a0a\u4e5f\u7d00\u9304\u5728\u8cc7\u6599\u5eab\uff0c\u9019\u6642\u5019\uff0c\u7db2\u8def\u4e0a\u5176\u4ed6\u4f7f\u7528\u8005\u53ef\u4ee5\u770b\u5230\u8a55\u8ad6\u8005\u7684\u500b\u8cc7\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"\u5132\u5b58\u578b(\u6301\u4e45\u578b)"),": \u653b\u64ca\u8005\u5c07\u60e1\u610f\u4ee3\u78bc\u5b58\u5132\u5728\u7db2\u7ad9\u7684\u8cc7\u6599\u5eab\u4e2d\uff0c\u7576\u7528\u6236\u8a2a\u554f\u8a72\u7db2\u9801\u6642\uff0c\u653b\u64ca\u767c\u751f"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"DOM \u578b"),":\u653b\u64ca\u8005\u901a\u904e\u4fee\u6539\u7db2\u9801\u7684 DOM \u7d50\u69cb\u4f86\u5be6\u73fe\u653b\u64ca\uff0c\u4f8b\u5982\uff1a\u4f3a\u670d\u5668\u56de\u50b3 response \u6642\uff0c\u9ed1\u5ba2\u63d2\u5165\u60e1\u610f\u7a0b\u5f0f\uff0c\u5c0e\u81f4\u539f\u672c\u7db2\u9801\u4e0a\u7684 Logo \u88ab\u63db\u6389")),(0,l.kt)("p",null,"\u5176\u5371\u5bb3\uff1a\u5132\u5b58\u578b > \u53cd\u5c04\u578b > DOM \u578b"),(0,l.kt)("h3",{id:"\u9632\u79a6\u65b9\u5f0f"},"\u9632\u79a6\u65b9\u5f0f"),(0,l.kt)("p",null,"\u9632\u79a6\u65b9\u5f0f\u53ef\u5206\u70ba\u4e09\u7a2e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u8f38\u5165\u904e\u6ffe"),"\uff1a\u78ba\u4fdd\u53ea\u63a5\u53d7\u5408\u6cd5\u7684\u8f38\u5165\uff0c\u904e\u6ffe\u548c\u9a57\u8b49\u7528\u6236\u8f38\u5165\u7684\u6578\u64da\u3002\u4f8b\u5982\uff1a\u5c0d URL\u3001\u67e5\u8a62\u95dc\u9375\u5b57\u3001Post \u6578\u64da\u7b49\uff0c\u50c5\u63a5\u53d7\u6307\u5b9a\u9577\u5ea6\u7bc4\u570d\u5167\u3001\u9069\u7576\u683c\u5f0f\u4e14\u7b26\u5408\u9810\u671f\u5b57\u7b26\u7684\u5167\u5bb9\u63d0\u4ea4(\u4f7f\u7528\u8005\u7aef\u548c\u4f3a\u670d\u5668\u7aef\u90fd\u8981)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u8f38\u51fa\u8f49\u8b6f"),"\uff1a\u5728\u5c07\u7528\u6236\u8f38\u5165\u7684\u5167\u5bb9\u63d2\u5165\u5230\u7db2\u9801\u4e2d\u4e4b\u524d\uff0c\u5c0d\u5176\u9032\u884c HTML \u5be6\u9ad4\u7de8\u78bc\uff0c\u4ee5\u9632\u6b62\u57f7\u884c\u60e1\u610f\u4ee3\u78bc\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528 HttpOnlyCookie"),"\uff1a\u5c07 cookie \u6a19\u8a18\u70ba HttpOnly\uff0c\u4ee5\u9632\u6b62 JavaScript \u4f7f\u7528 document.cookie \u53d6\u5f97 cookie"))),(0,l.kt)("h2",{id:"csrf\u8de8\u7ad9\u8acb\u6c42\u507d\u9020"},"CSRF(\u8de8\u7ad9\u8acb\u6c42\u507d\u9020)"),(0,l.kt)("p",null,"\u8de8\u7ad9\u8acb\u6c42\u507d\u9020\uff08Cross-site request forgery\uff09\uff0c\u53c8\u88ab\u7a31\u70ba one-click \u653b\u64ca \u6216\u8005 session riding\uff0c\u6307\u7684\u662f\u507d\u9020\u8acb\u6c42(\u901a\u5e38\u6703\u662f\u4e00\u500b\u9023\u7d50)\uff0c\u8a98\u4f7f\u4f7f\u7528\u8005\u9ede\u64ca\uff0c\u4e00\u65e6\u9ede\u64ca\u4e4b\u5f8c\uff0c\u5c31\u53ef\u4ee5\u6b3a\u9a19\u700f\u89bd\u5668\u3001\u8b93\u7db2\u7ad9\u4ee5\u70ba\u662f\u4f7f\u7528\u8005\u672c\u4eba\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u4f7f\u7528\u8005\u5728\u7db2\u7ad9 A \u900f\u904e\u767b\u5165\u4e86\u9280\u884c\u7cfb\u7d71\uff0c\u6b64\u6642\u5e33\u865f\u5bc6\u78bc\u5df2\u5b58\u5728\u700f\u89bd\u5668\u7684 cookie \u4e2d\uff0c\u9019\u6642\uff0c\u540c\u6642\u6253\u958b\u60e1\u610f\u7db2\u7ad9 B \u7684\u67d0\u9023\u7d50\uff0c\u8a72\u9023\u7d50\u662f\u4e00\u500b\u507d\u9020\u8acb\u6c42\uff0c\u5728\u4f7f\u7528\u8005\u70ba\u767b\u5165\u7684\u72c0\u614b\u4e0b\uff0c\u9ede\u64ca\u8a72\u9023\u7d50\u5c31\u767c\u9001\u4e86\u81ea\u5df1\u4e0d\u77e5\u9053\u7684\u8acb\u6c42\u5230 A \u7db2\u7ad9\u3002"),(0,l.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa\uff0c\u653b\u64ca\u6210\u529f\u8981\u6eff\u8db3\u5169\u500b\u689d\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8a72\u7db2\u7ad9\u6c92\u6709\u9032\u884c\u9632\u6b62 CSRF \u8655\u7406\uff0c\u5c0e\u81f4\u8acb\u6c42\u5bb9\u6613\u88ab\u507d\u9020"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u8005\u8981\u5728\u767b\u5165\u72c0\u614b\u4e0b\u9ede\u64ca\u60e1\u610f\u9023\u7d50")),(0,l.kt)("h3",{id:"\u9632\u79a6\u65b9\u5f0f-1"},"\u9632\u79a6\u65b9\u5f0f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8acb\u6c42\u53c3\u6578\u589e\u52a0 token \u4e26\u9a57\u8b49: \u5e38\u898b\u7684\u4f5c\u6cd5\u3002\u900f\u904e\u6bcf\u6b21\u8acb\u6c42\u53c3\u6578\u52a0\u4e0a\u96a8\u6a5f\u751f\u6210\u7684 token\uff0c\u800c\u4f3a\u670d\u5668\u6bcf\u6b21\u5c0d\u9019\u500b\u96a8\u6a5f\u78bc\u9032\u884c\u9a57\u8b49\uff0c\u78ba\u4fdd\u8acb\u6c42\u662f\u5408\u6cd5\u7684\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9a57\u8b49 HTTP Referer\uff1a\u78ba\u4fdd\u8acb\u6c42\u4f86\u6e90\u5408\u6cd5\u3002Referer \u7d00\u9304\u4e86\u8a72 HTTP \u8acb\u6c42\u7684\u4f86\u6e90\u5730\u5740\u3002\u7136\u800c\uff0c\u6b64\u7a2e\u65b9\u5f0f\u6709\u7f3a\u9ede\uff0c\u5c31\u662f Referer \u5b58\u5728\u507d\u9020\u7684\u98a8\u96aa\uff0c\u82e5\u700f\u89bd\u5668\u8a2d\u5b9a\u767c\u9001\u8acb\u6c42\u4e0d\u63d0\u4f9b Referer \u6642\uff0c\u7db2\u7ad9\u6703\u62d2\u7d55\u5408\u6cd5\u4f7f\u7528\u8005\u7684\u8a2a\u554f")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 POST \u800c\u4e0d\u662f GET\uff1a\u654f\u611f\u64cd\u4f5c\u4f7f\u7528 POST \u8acb\u6c42\uff0c\u800c\u4e0d\u662f GET \u8acb\u6c42")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e8c\u6b21\u9a57\u8b49\uff1a\u5c0d\u67d0\u4e9b\u654f\u611f\u64cd\u4f5c\u9032\u884c\u4e8c\u6b21\u9a57\u8b49\uff0c\u4f8b\u5982\uff1a\u4fee\u6539\u5e33\u865f\u6642\uff0c\u9700\u8981\u8f38\u5165\u820a\u5bc6\u78bc"))),(0,l.kt)("h3",{id:"\u5b89\u5168\u7684\u767b\u5165\u7ba1\u7406"},"\u5b89\u5168\u7684\u767b\u5165\u7ba1\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u4f7f\u7528\u8005\u7aef\u5132\u5b58\u6a5f\u5bc6\u8cc7\u8a0a(\u50cf\u662f\u5728 cookie \u5132\u5b58\u5e33\u865f\u5bc6\u78bc)"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u5b9a\u6642\u9593\u5167\u7121\u64cd\u4f5c\u5247\u81ea\u52d5\u767b\u51fa"),(0,l.kt)("li",{parentName:"ul"},"\u95dc\u9589\u700f\u89bd\u5668\u6642\u81ea\u52d5\u767b\u51fa")),(0,l.kt)("h2",{id:"xss-vs-csrf"},"XSS V.S. CSRF"),(0,l.kt)("p",null,"CSRF \u5229\u7528\u4f7f\u7528\u8005\u7684\u6b0a\u9650\u5b8c\u6210\u653b\u64ca\uff0c\u4f46\u653b\u64ca\u8005\u4e26\u4e0d\u7372\u5f97\u7528\u6236\u7684\u6b0a\u9650\uff1b\u800c XSS \u76f4\u63a5\u7aca\u53d6\u4e86\u4f7f\u7528\u8005\u7684\u6b0a\u9650\uff0c\u7136\u5f8c\u9032\u884c\u64cd\u4f5c\u6216\u7834\u58de\u3002"),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.techbridge.cc/2017/02/25/csrf-introduction/"},"\u8b93\u6211\u5011\u4f86\u8ac7\u8ac7 CSRF")))}k.isMDXComponent=!0}}]);