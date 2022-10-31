"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2086],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5621:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={title:"ES6\u7bad\u982d\u51fd\u5f0f Arrow Function",id:"js-arrow-function"},l=void 0,i={unversionedId:"js-arrow-function",id:"js-arrow-function",isDocsHomePage:!1,title:"ES6\u7bad\u982d\u51fd\u5f0f Arrow Function",description:"\u7bad\u982d\u51fd\u5f0f\u7684\u7279\u6027(\u8207\u4e00\u822c\u51fd\u5f0f\u4e0d\u540c\u9ede\uff09",source:"@site/docs/js-arrow-function.md",sourceDirName:".",slug:"/js-arrow-function",permalink:"/docs/js-arrow-function",tags:[],version:"current",frontMatter:{title:"ES6\u7bad\u982d\u51fd\u5f0f Arrow Function",id:"js-arrow-function"},sidebar:"Docs",previous:{title:"JS \u904d\u6b77\u65b9\u6cd5 - for loop",permalink:"/docs/js-for"},next:{title:"Scope \u4f5c\u7528\u57df",permalink:"/docs/js-scope"}},s=[{value:"\u7bad\u982d\u51fd\u5f0f\u7684\u7279\u6027(\u8207\u4e00\u822c\u51fd\u5f0f\u4e0d\u540c\u9ede\uff09",id:"\u7bad\u982d\u51fd\u5f0f\u7684\u7279\u6027\u8207\u4e00\u822c\u51fd\u5f0f\u4e0d\u540c\u9ede",children:[]},{value:"Arrow Function \u7684\u512a\u9ede",id:"arrow-function-\u7684\u512a\u9ede",children:[]},{value:"\u4ec0\u9ebc\u6642\u5019\u4e0d\u9069\u5408\u4f7f\u7528 Arrow Function",id:"\u4ec0\u9ebc\u6642\u5019\u4e0d\u9069\u5408\u4f7f\u7528-arrow-function",children:[]}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7bad\u982d\u51fd\u5f0f\u7684\u7279\u6027\u8207\u4e00\u822c\u51fd\u5f0f\u4e0d\u540c\u9ede"},"\u7bad\u982d\u51fd\u5f0f\u7684\u7279\u6027(\u8207\u4e00\u822c\u51fd\u5f0f\u4e0d\u540c\u9ede\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u533f\u540d\u51fd\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"this \u5728\u5275\u5efa\u6642\u88ab\u7d81\u5b9a\uff0capply\u3001call\u3001bind \u7121\u6cd5\u6539\u8b8a this"),(0,a.kt)("li",{parentName:"ul"},"\u6c92\u6709 arguments"),(0,a.kt)("li",{parentName:"ul"},"\u7bad\u982d\u51fd\u5f0f\u4e0d\u80fd\u7576\u4f5c\u5efa\u69cb\u5f0f")),(0,a.kt)("h2",{id:"arrow-function-\u7684\u512a\u9ede"},"Arrow Function \u7684\u512a\u9ede"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7c21\u6f54\u7684\u8a9e\u6cd5"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5beb\u6cd5\u70ba () => {}"),(0,a.kt)("li",{parentName:"ul"},"\u53c3\u6578\u53ea\u6709\u4e00\u500b\u6642\uff0c\u53ef\u4ee5\u7701\u7565\u5c0f\u62ec\u865f ()"),(0,a.kt)("li",{parentName:"ul"},"\u7701\u7565\u5927\u62ec\u865f {} \u7684\u8a71\uff0c\u4ee3\u8868\u76f4\u63a5 return \u7b2c\u4e00\u884c\u7a0b\u5f0f\u78bc"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u591a\u884c\u7a0b\u5f0f\uff0c\u9700\u8981\u52a0\u4e0a\u5927\u62ec\u865f {}")))),(0,a.kt)("p",null,"ES5 \u4e00\u822c\u51fd\u5f0f\u7684\u5beb\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function timesTwo(params) {\n  return params * 2;\n}\n\ntimesTwo(4); //8\n")),(0,a.kt)("p",null,"\u6b63\u5e38\u7bad\u982d\u51fd\u5f0f\u7684\u5beb\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var timesTwo = (params) => {\n  return params * 2;\n};\n\ntimesTwo(4); //8\n")),(0,a.kt)("p",null,"\u7bad\u982d\u51fd\u5f0f\u7e2e\u5beb\u8a9e\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var timesTwo = (params) => params * 2;\n\ntimesTwo(4); //8\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728\u5275\u5efa\u51fd\u5f0f\u6642\u7d81\u5b9a this")),(0,a.kt)("p",null,"\u7bad\u982d\u51fd\u5f0f\u8ddf\u4e00\u822c\u51fd\u5f0f\u5f88\u5927\u7684\u4e0d\u540c\u5c31\u662f this \u3002\u7bad\u982d\u51fd\u6578\u7684 this \u6703\u4f9d\u64da\u51fd\u5f0f\u5728\u54ea\u88e1\u5efa\u7acb\u800c\u6c7a\u5b9a\uff0c\u53ef\u4ee5",(0,a.kt)("strong",{parentName:"p"},"\u53d6\u4ee3\u820a\u6709\u4f7f\u7528 self=this \u6216 .bind(this) \u7d81\u5b9a this \u5230\u6307\u5b9a\u7269\u4ef6"),"\u7684\u60c5\u6cc1\u3002"),(0,a.kt)("p",null,"\u76f4\u63a5\u4f86\u770b\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u4e00\u822c\u51fd\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n  id: 1,\n  print: function () {\n    console.log(this.id); //1\n\n    setTimeout(function () {\n      console.log(this.id); //undefined\n    }, 1000);\n  },\n};\nobj.print();\n")),(0,a.kt)("p",null,"\u7531\u65bc setTimeout \u57f7\u884c\u7684\u6642\u9593\u6703\u662f\u5728\u6574\u500b JS execution context \u90fd\u88ab\u57f7\u884c\u5b8c\u5f8c\u624d\u6703\u57f7\u884c\uff0c\u56e0\u6b64 this \u6307\u5411\u6703\u662f\u5168\u57df\u7269\u4ef6\uff0c\u5169\u8005\u7684 this \u4e0d\u4e00\u81f4\u3002"),(0,a.kt)("p",null,"\u5e38\u898b\u7684\u89e3\u6c7a\u65b9\u6cd5\u50cf\u662f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 self = this \u6216 that = this \uff0c\u5c07 this \u6307\u5411\u5132\u5b58\u6210\u8b8a\u6578")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n  id: 1,\n\n  print: function () {\n    let self = this;\n    console.log(this.id); //1\n\n    setTimeout(function () {\n      console.log(self.id); //1\n    }, 1000);\n  },\n};\nobj.print();\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 bind\u3001call \u6216 apply")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n  id: 1,\n\n  print: function () {\n    console.log(this.id); //1\n\n    setTimeout(\n      function () {\n        console.log(this.id); //1\n      }.bind(this),\n      1000\n    );\n  },\n};\nobj.print();\n")),(0,a.kt)("p",null,"\u9019\u6642\u5019\uff0c\u4f7f\u7528\u7bad\u982d\u529f\u80fd\u53ef\u4ee5\u66f4\u4e7e\u6de8\u5730\u89e3\u6c7a\u6b64\u554f\u984c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n  id: 1,\n\n  print: function () {\n    console.log(this.id); //1\n\n    setTimeout(() => {\n      console.log(this.id); //1\n    }, 1000);\n  },\n};\nobj.print();\n")),(0,a.kt)("h2",{id:"\u4ec0\u9ebc\u6642\u5019\u4e0d\u9069\u5408\u4f7f\u7528-arrow-function"},"\u4ec0\u9ebc\u6642\u5019\u4e0d\u9069\u5408\u4f7f\u7528 Arrow Function"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7269\u4ef6\u65b9\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n  id: 1,\n  add: () => {\n    this.id++;\n  },\n};\n\nobj.add(); //undefined\n")),(0,a.kt)("p",null,"\u6b64\u6642\u7bad\u982d\u51fd\u5f0f\u4e2d\u7684 this \u6307\u5411\u5168\u57df"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7269\u4ef6 prototype \u5c6c\u6027\u65b9\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function MyCat(name) {\n  this.catName = name;\n}\n\nMyCat.prototype.sayCatName = () => this.catName;\n\nconst cat = new MyCat("Kiki");\n\ncat.sayCatName(); // undefined\n')),(0,a.kt)("p",null,"\u540c\u4e0a\u7684\u6982\u5ff5\uff0c\u6b64\u6642\u7bad\u982d\u51fd\u5f0f\u4e2d\u7684 this \u6307\u5411\u5168\u57df"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5efa\u69cb\u51fd\u5f0f\n\u7bad\u982d\u51fd\u5f0f\u6c92\u6709 constructor\uff0c\u76f4\u63a5\u4f7f\u7528 new \u6642\u6703\u62cb\u51fa\u4f8b\u5916\u7522\u751f\u932f\u8aa4\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const Message = (text) => {\n  this.text = text;\n};\n\nconst helloMessage = new Message("Hello World!"); //"TypeError: Message is not a constructor"\n')),(0,a.kt)("p",null,"\u53c3\u8003\u6587\u7ae0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/better-programming/why-javascript-arrow-functions-are-useful-aa023bad403a"},"Why Are JavaScript Arrow Functions Useful?"),"(2020.02 updated)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/"},"When (and why) you should use ES6 arrow functions \u2014 and when you shouldn\u2019t")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pjchender.blogspot.com/2017/01/es6-arrow-function.html"},"[\u7b46\u8a18] JavaScript ES6 \u4e2d\u7684\u7bad\u982d\u51fd\u6578\uff08arrow function\uff09\u53ca\u5c0d this \u7684\u5f71\u97ff"))))}c.isMDXComponent=!0}}]);