"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(3117),o=(n(7294),n(3905));const a={id:"debounce",title:"Snippet - Debounce and Throttle",keywords:["javascript","debounce","throttle"]},c=void 0,l={unversionedId:"javascript/debounce",id:"javascript/debounce",title:"Snippet - Debounce and Throttle",description:"Debounce\uff08\u53bb\u6296\u52d5\uff09\u662f\u8b93\u4e00\u500b\u51fd\u5f0f\u5728\u9023\u7e8c\u88ab\u89f8\u767c\u6642\u53ea\u57f7\u884c\u6700\u5f8c\u4e00\u6b21\u7684\u51fd\u5f0f",source:"@site/docs/javascript/debounce.md",sourceDirName:"javascript",slug:"/javascript/debounce",permalink:"/docs/javascript/debounce",draft:!1,tags:[],version:"current",frontMatter:{id:"debounce",title:"Snippet - Debounce and Throttle",keywords:["javascript","debounce","throttle"]},sidebar:"Docs",previous:{title:"Scope \u4f5c\u7528\u57df",permalink:"/docs/js-scope"},next:{title:"\u8a8d\u8b58 React Hook",permalink:"/docs/react/react-hook"}},i={},u=[{value:"Implement debounce",id:"implement-debounce",level:3},{value:"Implement throttle",id:"implement-throttle",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Debounce\uff08\u53bb\u6296\u52d5\uff09\u662f\u8b93\u4e00\u500b\u51fd\u5f0f\u5728\u9023\u7e8c\u88ab\u89f8\u767c\u6642\u53ea\u57f7\u884c\u6700\u5f8c\u4e00\u6b21\u7684\u51fd\u5f0f"),(0,o.kt)("h3",{id:"implement-debounce"},"Implement debounce"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function debounce(fn, time) {\n  let setTimeoutId;\n  return function (...arguments) {\n    if (setTimeoutId) {\n      clearTimeout(setTimeoutId);\n    }\n    setTimeoutId = setTimeout(() => {\n      fn.apply(this, arguments);\n    }, time);\n  };\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const debounceHandle = debounce(handler, 300);\n\nwindow.addEventListener("mousemove", debounceHandle);\n')),(0,o.kt)("h3",{id:"implement-throttle"},"Implement throttle"),(0,o.kt)("p",null,"throttle \u53ef\u4ee5\u63a7\u5236\u51fd\u5f0f\u8abf\u7528\u983b\u7387\uff0c\u78ba\u4fdd\u51fd\u5f0f\u5728\u6307\u5b9a\u7684\u6642\u9593\u5167\u6700\u591a\u57f7\u884c\u4e00\u6b21"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function throttle(fn, time) {\n  let lastTime = 0;\n  return function (...arguments) {\n    const now = Date.now();\n    if (now - lastTime >= time) {\n      fn.apply(this, arguments);\n      lastTime = now;\n    }\n  };\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const throttledScroll = throttle(scrollHandler, 300);\n\n// \u7d81\u5b9a\u6efe\u52d5\u4e8b\u4ef6\u8655\u7406\u7a0b\u5e8f\uff0c\u78ba\u4fdd scrollHandler \u6700\u591a\u6bcf 300 \u6beb\u79d2\u57f7\u884c\u4e00\u6b21\nwindow.addEventListener("scroll", throttledScroll);\n')))}d.isMDXComponent=!0}}]);