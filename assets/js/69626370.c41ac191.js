"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3143],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>m});var r=o(7294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=r.createContext({}),f=function(e){var n=r.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},s=function(e){var n=f(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=f(o),m=t,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return o?r.createElement(d,a(a({ref:n},s),{},{components:o})):r.createElement(d,a({ref:n},s))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=o.length,a=new Array(l);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var f=2;f<l;f++)a[f]=o[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6011:(e,n,o)=>{o.r(n),o.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=o(7462),t=(o(7294),o(3905));const l={id:"js-for",title:"JS \u904d\u6b77\u65b9\u6cd5 - for loop"},a=void 0,i={unversionedId:"js-for",id:"js-for",isDocsHomePage:!1,title:"JS \u904d\u6b77\u65b9\u6cd5 - for loop",description:"\u672c\u7bc7\u6587\u7ae0\u4e3b\u8981\u6bd4\u8f03 for loop\u3001for...in\u3001for...of\u3001forEach \u7684\u4f7f\u7528\u60c5\u5883\u8207\u5dee\u5225\u3002",source:"@site/docs/[JS]for.md",sourceDirName:".",slug:"/js-for",permalink:"/docs/js-for",tags:[],version:"current",frontMatter:{id:"js-for",title:"JS \u904d\u6b77\u65b9\u6cd5 - for loop"},sidebar:"Docs",previous:{title:"apply v.s. call v.s. bind",permalink:"/docs/javascript/apply-call-bind"},next:{title:"ES6\u7bad\u982d\u51fd\u5f0f Arrow Function",permalink:"/docs/js-arrow-function"}},c=[{value:"\u904d\u6b77\u7269\u4ef6\u64cd\u4f5c",id:"\u904d\u6b77\u7269\u4ef6\u64cd\u4f5c",children:[{value:"for loop",id:"for-loop",children:[]},{value:"for... in",id:"for-in",children:[]},{value:"for... of",id:"for-of",children:[]}]},{value:"forEach",id:"foreach",children:[]},{value:"\u6bd4\u8f03\uff1a\u662f\u5426\u904d\u6b77\u81ea\u5b9a\u7fa9\u5c6c\u6027\u548c\u539f\u578b\u93c8\u4e0a\u7684\u5c6c\u6027",id:"\u6bd4\u8f03\u662f\u5426\u904d\u6b77\u81ea\u5b9a\u7fa9\u5c6c\u6027\u548c\u539f\u578b\u93c8\u4e0a\u7684\u5c6c\u6027",children:[]},{value:"\u6bd4\u8f03\uff1a\u662f\u5426\u53ef\u4e2d\u65b7\u8ff4\u5708",id:"\u6bd4\u8f03\u662f\u5426\u53ef\u4e2d\u65b7\u8ff4\u5708",children:[]}],f={toc:c};function s(e){let{components:n,...o}=e;return(0,t.kt)("wrapper",(0,r.Z)({},f,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4e3b\u8981\u6bd4\u8f03 for loop\u3001for...in\u3001for...of\u3001forEach \u7684\u4f7f\u7528\u60c5\u5883\u8207\u5dee\u5225\u3002"),(0,t.kt)("h2",{id:"\u904d\u6b77\u7269\u4ef6\u64cd\u4f5c"},"\u904d\u6b77\u7269\u4ef6\u64cd\u4f5c"),(0,t.kt)("p",null,"\u8a9e\u6cd5\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"//for loop\n//([\u521d\u59cb\u503c]; [\u6c7a\u5b9a\u662f\u5426\u7e7c\u7e8c\u5faa\u74b0\u7684\u689d\u4ef6\u5f0f]; [\u6bcf\u6b21\u5faa\u74b0\u57f7\u884c\u7684\u8868\u9054\u5f0f]) {}\nfor (let index = 0; index < array.length; index += 1) {}\n//for in\nfor (const key in object) {\n}\n//for of\nfor (const interator of object) {\n}\n//forEach\narray.forEach((item, index, array) => {});\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'const list = ["a", "b", "c"];\nconst obj = {\n  name: "Kira",\n  gender: "female",\n};\n')),(0,t.kt)("h3",{id:"for-loop"},"for loop"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u4f5c\u7528\u5c0d\u8c61\uff1a\u9663\u5217"),(0,t.kt)("li",{parentName:"ul"},"\u904d\u6b77\u5c0d\u8c61\uff1a\u7121")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u904d\u6b77\u9663\u5217\nfor (let i = 0; i < list.length; i++) {\n  console.log(list[i]); // a b c\n}\n")),(0,t.kt)("h3",{id:"for-in"},"for... in"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u4f5c\u7528\u5c0d\u8c61\uff1a\u9663\u5217\u3001\u7269\u4ef6"),(0,t.kt)("li",{parentName:"ul"},"\u904d\u6b77\u5c0d\u8c61\uff1a\u9375(key)")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u904d\u6b77\u9663\u5217\nfor (const key in list) {\n  console.log(key); // 0 1 2\n}\n//\u904d\u6b77\u7269\u4ef6\nfor (const key in obj) {\n  console.log(obj[key]); // Kira female\n}\n")),(0,t.kt)("h3",{id:"for-of"},"for... of"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u4f5c\u7528\u5c0d\u8c61\uff1a\u9663\u5217"),(0,t.kt)("li",{parentName:"ul"},"\u904d\u6b77\u5c0d\u8c61\uff1a\u503c(value)")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u904d\u6b77\u9663\u5217\nfor (const value of list) {\n  console.log(value); // a b c\n}\n//\u904d\u6b77\u7269\u4ef6\uff1a\u5831\u932f\nfor (const value of obj) {\n  console.log(value); // Uncaught TypeError: obj is not iterable\n}\n//\u82e5\u8981\u904d\u6b77\u4e00\u822c\u7269\u4ef6\uff0c\u53ef\u642d\u914dObject.values\nfor (const value of Object.values(obj)) {\n  console.log(value); //Kira female\n}\n//\u82e5\u8981\u904d\u6b77\u4e00\u822c\u7269\u4ef6\uff0c\u53ef\u642d\u914dObject.entries\nfor (const [key, value] of Object.entries(obj)) {\n  console.log(key); // name gender\n  console.log(value); // Kira female\n}\n")),(0,t.kt)("h2",{id:"foreach"},"forEach"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u4f5c\u7528\u5c0d\u8c61\uff1a\u9663\u5217"),(0,t.kt)("li",{parentName:"ul"},"\u904d\u6b77\u5c0d\u8c61\uff1a\u9375(key)\u3001\u503c(value)\u3001\u9663\u5217(array)")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u904d\u6b77\u9663\u5217\nlist.forEach((item, index, array) => {\n  console.log(item); // a b c\n  console.log(index); // 0 1 2\n});\n//\u82e5\u8981\u904d\u6b77\u4e00\u822c\u7269\u4ef6\uff0c\u53ef\u642d\u914dObject.entries\nObject.entries(obj).forEach((item) => {\n  let [key, value] = item;\n  console.log(key); // name gender\n  console.log(value); // Kira female\n});\n")),(0,t.kt)("h2",{id:"\u6bd4\u8f03\u662f\u5426\u904d\u6b77\u81ea\u5b9a\u7fa9\u5c6c\u6027\u548c\u539f\u578b\u93c8\u4e0a\u7684\u5c6c\u6027"},"\u6bd4\u8f03\uff1a\u662f\u5426\u904d\u6b77\u81ea\u5b9a\u7fa9\u5c6c\u6027\u548c\u539f\u578b\u93c8\u4e0a\u7684\u5c6c\u6027"),(0,t.kt)("p",null,"\u6703\uff1afor...in\n\u4e0d\u6703\uff1afor...of, forEach, for loop"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u5728\u9663\u5217\u7684\u539f\u578b\u4e0a\u52a0\u4e0a\u5c6c\u6027newType\nArray.prototype.newType = "newValue";\n\n//for loop\nfor (let i = 0; i < list.length; i++) {\n  console.log(list[i]); // a b c\n}\n\n//for...in\u6703\u904d\u6b77\u81ea\u5b9a\u7fa9\u5c6c\u6027\u548c\u539f\u578b\u93c8\u4e0a\u7684\u5c6c\u6027\nfor (const key in list) {\n  console.log(key); // 0 1 2 newType\n}\n\n// for of\nfor (const value of list) {\n  console.log(value); // a b c\n}\n\n// forEach\nlist.forEach((item) => {\n  console.log(item); // a b c\n});\n')),(0,t.kt)("p",null,"\u7531\u6b64\u53ef\u77e5\uff0c\u4f7f\u7528 for...in \u6642\uff0c\u6703\u9023\u540c\u539f\u578b\u93c8\u4e0a\u7684\u5c6c\u6027\u4e5f\u4e00\u8d77\u904d\u6b77\uff0c\u5176\u4ed6 3 \u7a2e\u5247\u4e0d\u6703\u3002\u56e0\u6b64\uff0c\u904d\u6b77\u9663\u5217\u6642\u61c9\u8a72\u907f\u514d\u4f7f\u7528 for...in\u3002"),(0,t.kt)("h2",{id:"\u6bd4\u8f03\u662f\u5426\u53ef\u4e2d\u65b7\u8ff4\u5708"},"\u6bd4\u8f03\uff1a\u662f\u5426\u53ef\u4e2d\u65b7\u8ff4\u5708"),(0,t.kt)("p",null,"\u53ef\u4e2d\u65b7\uff1afor...of, for...in, for loop\n\u4e0d\u53ef\u4e2d\u65b7\uff1aforEach"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'const list = ["a", "b", "c"];\n\n//for loop\nfor (let i = 0; i < list.length; i++) {\n  if (list[i] === "b") {\n    break;\n  }\n  console.log(i); //0\n}\n\n//for...in\nfor (const key in list) {\n  if (list[key] === "b") {\n    break;\n  }\n  console.log(key); //0\n}\n\n//for...of\nfor (const value of list) {\n  if (value === "b") {\n    break;\n  }\n  console.log(value); //a\n}\n\n//forEach: \u7121\u6cd5\u4e2d\u65b7\u8ff4\u5708\narr.forEach((item) => {\n  if (item === "b") {\n    break;\n  }\n  console.log(index); // SyntaxError: Illegal break statement\n});\n')),(0,t.kt)("p",null,"forEach \u4f7f\u7528 break \u6703\u767c\u751f\u932f\u8aa4\uff0c\u5982\u679c\u6709\u4e2d\u65b7\u8ff4\u5708\u9700\u6c42\uff0c\u9700\u4f7f\u7528 for loop\u3001for...in\u3001for...of \u65b9\u6cd5"))}s.isMDXComponent=!0}}]);