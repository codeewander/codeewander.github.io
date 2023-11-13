"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={id:"django",title:"Django",keywords:["django"]},l=void 0,i={unversionedId:"django/django",id:"django/django",title:"Django",description:"Why Django?",source:"@site/docs/django/django.md",sourceDirName:"django",slug:"/django/",permalink:"/docs/django/",draft:!1,tags:[],version:"current",frontMatter:{id:"django",title:"Django",keywords:["django"]}},c={},p=[{value:"Why Django?",id:"why-django",level:2},{value:"MVT pattern",id:"mvt-pattern",level:2}],u={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"why-django"},"Why Django?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"simple syntax \u4f7f\u7528\u7c21\u55ae\u7684 python \u8a9e\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"ORM (No raw SQL): \u53ef\u4ee5\u4f7f\u7528 python \u4f86\u7ba1\u7406 database\uff0c\u4e0d\u7528\u64b0\u5beb SQL \u67e5\u8a62\uff0c\u9019\u7c21\u5316\u4e86 database \u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"Admin interface\uff1a\u5167\u5efa\u7ba1\u7406\u5f8c\u53f0\uff0c\u53ef\u4ee5\u8f15\u9b06\u589e\u52a0\u3001\u7de8\u8f2f\u548c\u522a\u9664 data"),(0,a.kt)("li",{parentName:"ul"},"Handles security: \u5167\u5efa\u7684\u5b89\u5168\u8655\u7406\uff0c\u5305\u62ec CSRF \u4fdd\u8b77\u3001XSS \u4fdd\u8b77\u548c SQL \u6ce8\u5165\u4fdd\u8b77\uff0c\u53ef\u4ee5\u9632\u6b62\u4e00\u4e9b\u5e38\u898b\u7684\u5b89\u5168\u6f0f\u6d1e"),(0,a.kt)("li",{parentName:"ul"},"User auth\uff1a \u5167\u5efa\u7528\u6236\u8a8d\u8b49\u7cfb\u7d71\uff0c\u8b93\u7528\u6236\u7ba1\u7406\u548c\u8eab\u4efd\u9a57\u8b49\u8b8a\u5f97\u8f03\u5bb9\u6613")),(0,a.kt)("h2",{id:"mvt-pattern"},"MVT pattern"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Model (Data base)"),(0,a.kt)("li",{parentName:"ul"},"View (logic)"),(0,a.kt)("li",{parentName:"ul"},"Templates (html)")))}s.isMDXComponent=!0}}]);