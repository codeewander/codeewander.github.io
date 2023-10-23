"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1310:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var n=r(3117),o=(r(7294),r(3905));const l={id:"two-pointers",title:"Two Pointers",keywords:["Algorithm","Two Pointers"]},i=void 0,a={unversionedId:"algorithm/two-pointers",id:"algorithm/two-pointers",title:"Two Pointers",description:"\u6982\u5ff5",source:"@site/docs/algorithm/two-pointers.md",sourceDirName:"algorithm",slug:"/algorithm/two-pointers",permalink:"/docs/algorithm/two-pointers",draft:!1,tags:[],version:"current",frontMatter:{id:"two-pointers",title:"Two Pointers",keywords:["Algorithm","Two Pointers"]},sidebar:"Docs",previous:{title:"\u8cc7\u6599\u7d50\u69cb",permalink:"/docs/algorithm/data-structure"},next:{title:"Binary Search",permalink:"/docs/algorithm/binary-search"}},c={},p=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u4f7f\u7528\u60c5\u5883",id:"\u4f7f\u7528\u60c5\u5883",level:3},{value:"\u985e\u578b",id:"\u985e\u578b",level:3},{value:"\u76f8\u95dc LeetCode \u984c\u76ee",id:"\u76f8\u95dc-leetcode-\u984c\u76ee",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,o.kt)("p",null,"Two Pointers \u662f\u4e00\u7a2e\u7528\u65bc\u8655\u7406\u9663\u5217\u548c\u9023\u7d50\u4e32\u5217\u7684\u5e38\u898b\u6f14\u7b97\u6cd5\u6280\u5de7\u3002\u5b83\u901a\u5e38\u7528\u65bc\u641c\u7d22\u548c\u6bd4\u8f03\u5143\u7d20\uff0c\u6709\u5169\u500b\u6307\u6a19\uff0c\u4e00\u500b\u4f4d\u65bc\u5de6\u5074\uff0c\u53e6\u4e00\u500b\u4f4d\u65bc\u53f3\u5074\uff0c\u4e26\u6839\u64da\u7279\u5b9a\u689d\u4ef6\u5c07\u9019\u5169\u500b\u6307\u6a19\u79fb\u52d5\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528\u60c5\u5883"},"\u4f7f\u7528\u60c5\u5883"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9663\u5217\u641c\u7d22\uff1a\u5728\u6392\u5e8f\u7684\u9663\u5217\u4e2d\u67e5\u627e\u7279\u5b9a\u5143\u7d20\u6216\u76ee\u6a19\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9023\u7d50\u4e32\u5217\u8655\u7406\uff1a\u8655\u7406\u548c\u4fee\u6539\u9023\u7d50\u4e32\u5217\u7684\u7bc0\u9ede\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u96d9\u6307\u91dd\u6cd5\uff1a\u6709\u6642\u7a31\u70ba\u5feb\u6162\u6307\u91dd\u6cd5\uff0c\u7528\u65bc\u67e5\u627e\u56de\u6587\u4e32\u6216\u74b0\u5f62\u7d50\u69cb\u3002")),(0,o.kt)("h3",{id:"\u985e\u578b"},"\u985e\u578b"),(0,o.kt)("p",null,"\u6839\u64da\u6307\u6a19\u79fb\u52d5\u65b9\u5f0f\u53ef\u5206\u70ba\uff1a\u540c\u65b9\u5411\u79fb\u52d5\u3001\u53cd\u65b9\u5411\u79fb\u52d5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u540c\u65b9\u5411\u79fb\u52d5\n\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5de6\u53f3\u6307\u6a19\u5411\u76f8\u540c\u65b9\u5411\u79fb\u52d5\uff0c\u901a\u5e38\u662f\u76f8\u5c0d\u905e\u589e\u6216\u905e\u6e1b\u3002\u9019\u7a2e\u60c5\u6cc1\u9069\u7528\u65bc\u641c\u5c0b\u6392\u5e8f\u6578\u7d44\u6216\u9023\u7d50\u4e32\u5217\uff0c\u6216\u89e3\u6c7a\u7279\u5b9a\u554f\u984c\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53cd\u65b9\u5411\u79fb\u52d5\n\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5de6\u6307\u6a19\u5411\u53f3\u79fb\u52d5\uff0c\u800c\u53f3\u6307\u6a19\u5411\u5de6\u79fb\u52d5\uff0c\u76f4\u5230\u5b83\u5011\u4ea4\u6703\u3002\u9019\u5e38\u7528\u65bc\u53cd\u8f49\u6216\u5c0d\u7a31\u6027\u554f\u984c\uff0c\u5982\u67e5\u627e\u56de\u6587\u4e32\u6216\u8655\u7406\u5b57\u7b26\u4e32\u3002"))),(0,o.kt)("h2",{id:"\u76f8\u95dc-leetcode-\u984c\u76ee"},"\u76f8\u95dc LeetCode \u984c\u76ee"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/leetcode/leetcode344"},"LeetCode 344. Reverse String")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/leetcode/leetcode26"},"LeetCode 26. Remove Duplicates From Sorted Array"))))}m.isMDXComponent=!0}}]);