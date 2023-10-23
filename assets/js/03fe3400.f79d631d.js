"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8889],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),s=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(o.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=l,m=u["".concat(o,".").concat(y)]||u[y]||d[y]||r;return n?t.createElement(m,i(i({ref:a},c),{},{components:n})):t.createElement(m,i({ref:a},c))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7078:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var t=n(3117),l=(n(7294),n(3905));const r={id:"apply-call-bind",title:"apply v.s. call v.s. bind",keywords:["javascript","apply","bind","call"]},i=void 0,p={unversionedId:"javascript/apply-call-bind",id:"javascript/apply-call-bind",title:"apply v.s. call v.s. bind",description:"\u7576\u51fd\u5f0f\u88ab\u57f7\u884c\u6642\uff0cJS \u6703\u5efa\u7acb\u57f7\u884c\u74b0\u5883\uff0c\u4e26\u5275\u5efa this(\u51fd\u5f0f\u7684\u63a5\u6536\u8005)\uff0c\u6709\u6642\u5019\u53ef\u80fd\u6703\u9700\u8981\u81ea\u8a02\u63a5\u6536\u8005\uff0c\u800c apply \u3001call \u548c bind \u662f\u8b93\u6211\u5011\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a this \u7684\u5167\u5efa\u65b9\u6cd5",source:"@site/docs/javascript/apply-call-bind.md",sourceDirName:"javascript",slug:"/javascript/apply-call-bind",permalink:"/docs/javascript/apply-call-bind",draft:!1,tags:[],version:"current",frontMatter:{id:"apply-call-bind",title:"apply v.s. call v.s. bind",keywords:["javascript","apply","bind","call"]},sidebar:"Docs",previous:{title:"JS keywords",permalink:"/docs/javascript/js-keywords"},next:{title:"JS \u904d\u6b77\u65b9\u6cd5 - for loop",permalink:"/docs/js-for"}},o={},s=[{value:"apply()",id:"apply",level:3},{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:4},{value:"call()",id:"call",level:3},{value:"\u8aaa\u660e",id:"\u8aaa\u660e-1",level:4},{value:"call \u548c apply \u7684\u4f7f\u7528\u60c5\u5883",id:"call-\u548c-apply-\u7684\u4f7f\u7528\u60c5\u5883",level:3},{value:"bind()",id:"bind",level:3},{value:"\u8aaa\u660e",id:"\u8aaa\u660e-2",level:4},{value:"bind \u7684\u4f7f\u7528\u60c5\u5883",id:"bind-\u7684\u4f7f\u7528\u60c5\u5883",level:3}],c={toc:s},u="wrapper";function d(e){let{components:a,...n}=e;return(0,l.kt)(u,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7576\u51fd\u5f0f\u88ab\u57f7\u884c\u6642\uff0cJS \u6703\u5efa\u7acb\u57f7\u884c\u74b0\u5883\uff0c\u4e26\u5275\u5efa this(\u51fd\u5f0f\u7684\u63a5\u6536\u8005)\uff0c\u6709\u6642\u5019\u53ef\u80fd\u6703\u9700\u8981\u81ea\u8a02\u63a5\u6536\u8005\uff0c\u800c apply \u3001call \u548c bind \u662f\u8b93\u6211\u5011\u53ef\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"\u81ea\u884c\u8a2d\u5b9a this \u7684\u5167\u5efa\u65b9\u6cd5")),(0,l.kt)("h3",{id:"apply"},"apply()"),(0,l.kt)("p",null,"\u63a5\u53d7\u53c3\u6578\u9663\u5217(\u6216\u985e\u9663\u5217\u7269\u4ef6)\uff0c\u4e26\u628a\u9663\u5217\u4e2d\u6bcf\u500b\u5143\u7d20\u4f5c\u70ba\u500b\u5225\u53c3\u6578\u4f86\u547c\u53eb\u51fd\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"func.apply(this, [argsArray]);\n")),(0,l.kt)("h4",{id:"\u8aaa\u660e"},"\u8aaa\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u500b\u53c3\u6578\uff1a\u6307\u5b9a this \u7269\u4ef6\u3002\u5018\u82e5\u70ba null \u6216 undefined\uff0c\u5728\u975e\u56b4\u683c\u6a21\u5f0f\u4e0b\u5176\u4ee3\u8868 global object\uff0c\u56b4\u683c\u6a21\u5f0f\u4e0b\u70ba undefined"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u500b\u4ee5\u5f8c\u7684\u53c3\u6578\uff1a\u8981\u5e36\u5165\u7684\u53c3\u6578\u9663\u5217(\u6216\u985e\u9663\u5217)"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u57f7\u884c\uff0c\u56de\u50b3\u51fd\u5f0f\u57f7\u884c\u5f8c\u7684\u7d50\u679c")),(0,l.kt)("p",null,"\u6848\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const numbers = [1, 3, 4];\nconsole.log(Math.max.apply(null, [1, 3, 4])); //4\n// \u53c3\u6578\u70ba\u985e\u9663\u5217\nconsole.log(Math.max.apply(null, new Array(1, 3, 4))); //4\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"},"apply@MDN"))),(0,l.kt)("h3",{id:"call"},"call()"),(0,l.kt)("p",null,"\u4f7f\u7528 this \u53c3\u6578\u4ee5\u53ca\u5206\u5225\u7d66\u5b9a\u7684\u53c3\u6578\u4f86\u547c\u53eb\u67d0\u500b\u51fd\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"fun.call(this, arg1, arg2, ...)\n")),(0,l.kt)("p",null,"\u6848\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const numbers = [1, 3, 4];\nconsole.log(Math.max.call(null, ...numbers)); //4\n")),(0,l.kt)("h4",{id:"\u8aaa\u660e-1"},"\u8aaa\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u500b\u53c3\u6578\uff1a\u6307\u5b9a this \u5c0d\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u500b\u4ee5\u5f8c\u7684\u53c3\u6578\uff1a\u8981\u5e36\u5165\u7684\u53c3\u6578"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u57f7\u884c\uff0c\u56de\u50b3\u51fd\u5f0f\u57f7\u884c\u5f8c\u7684\u7d50\u679c")),(0,l.kt)("h3",{id:"call-\u548c-apply-\u7684\u4f7f\u7528\u60c5\u5883"},"call \u548c apply \u7684\u4f7f\u7528\u60c5\u5883"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. \u81ea\u8a02\u63a5\u6536\u8005\u547c\u53eb\u51fd\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'let car = {\n  registrationNumber: "GA12345",\n  brand: "Toyota",\n};\n//\u5168\u57df\u51fd\u5f0f\nfunction displayDetails(owner) {\n  console.log(this.registrationNumber, this.brand, owner);\n}\n//\u4f7f\u7528 apply \u8b93 car \u7269\u4ef6\u547c\u53eb displayDetails \u51fd\u5f0f\ndisplayDetails.apply(car, ["Kira"]); // GA12345 Toyota Kira\n\n//\u4f7f\u7528 call \u4e5f\u53ef\u4ee5\u505a\u5230\u540c\u6a23\u7684\u4e8b\u60c5\uff0c\u50c5\u53c3\u6578\u5f62\u5f0f\u4e0d\u540c\ndisplayDetails.call(car, "Kira"); // GA12345 Toyota Kira\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. \u4f7f\u7528 apply \u5c07\u5169\u9663\u5217\u5408\u4f75")),(0,l.kt)("p",null,"\u5408\u4f75\u9663\u5217\u6709\u8a31\u591a\u65b9\u6cd5\uff0cpush \u65b9\u6cd5\u53ef\u5c07\u9663\u5217\u5143\u7d20\u4e00\u500b\u4e00\u500b\u52a0\u5165 ; concat \u4e5f\u53ef\u4ee5\u7528\u4f86\u5408\u4f75\u9663\u5217\uff0c\u4f46\u6703\u5275\u5efa\u65b0\u7684\u9663\u5217\u3002\u5018\u82e5\u60f3\u8981\u628a\u9663\u5217\u76f4\u63a5\u5408\u4f75\u81f3\u820a\u9663\u5217\uff0capply \u53ef\u4ee5\u505a\u5230\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const array = ["a", "b"];\nconst elements = [0, 1, 2];\narray.push.apply(array, elements);\nconsole.info(array); // ["a", "b", 0, 1, 2]\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bind"},"bind()"),(0,l.kt)("p",null,"\u900f\u904e\u5df2\u5efa\u7acb\u7684\u51fd\u5f0f func \u5275\u5efa\u65b0\u7684\u51fd\u5f0f boundFunc \uff0c\u4e26\u5c07 this \u7d81\u5b9a\u5230\u6307\u5b9a\u7269\u4ef6\u4e0a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let boundFunc = func.bind(this, arg1, arg2...)\n")),(0,l.kt)("h4",{id:"\u8aaa\u660e-2"},"\u8aaa\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u500b\u53c3\u6578\uff1a\u6307\u5b9a this \u7269\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u500b\u4ee5\u5f8c\u7684\u53c3\u6578\uff1a\u8981\u5e36\u5165\u7684\u53c3\u6578"),(0,l.kt)("li",{parentName:"ul"},"\u56de\u50b3\u7d81\u5b9a this \u5f8c\u7684\u51fd\u5f0f\uff0c\u4e00\u4f46\u88ab\u7d81\u5b9a\uff0c\u5176 this \u7121\u6cd5\u518d\u88ab\u4fee\u6539")),(0,l.kt)("h3",{id:"bind-\u7684\u4f7f\u7528\u60c5\u5883"},"bind \u7684\u4f7f\u7528\u60c5\u5883"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. \u501f\u7528\u67d0\u7269\u4ef6\u4e2d\u7684\u65b9\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// displayDetails \u662f car \u7269\u4ef6\u7684\u65b9\u6cd5\nlet car = {\n  registrationNumber: "GA12345",\n  brand: "Toyota",\n\n  displayDetails: function (owner) {\n    console.log(this.registrationNumber, this.brand, owner);\n  },\n};\n//\u53ef\u4ee5\u5f88\u7c21\u55ae\u7684\u547c\u53eb car \u7684 displayDetails\u65b9\u6cd5\ncar.displayDetails("Kira"); // GA12345 Toyota Kira\n')),(0,l.kt)("p",null,"\u4f46\u5982\u679c\u60f3\u8981\u501f\u7528 displayDetails \u65b9\u6cd5\u600e\u9ebc\u8fa6\uff1f \u9019\u6642\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528 bind"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u6c92\u6709\u4f5c\u7528\uff0c\u56e0\u70ba\u6b64\u6642 this \u6307\u5411 global\nlet myCarDetails = car.displayDetails;\nmyCarDetails("Kira"); //undefined undefined Kira\n\n//\u4f7f\u7528 bind \u5275\u5efa\u4e00\u500b\u65b0\u51fd\u5f0f\u4e26\u6307\u5b9a this\nlet myCarDetails2 = car.displayDetails.bind(car, "Kira");\nmyCarDetails2(); // GA12345 Toyota Kira\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. \u51fd\u5f0f\u67ef\u91cc\u5316")),(0,l.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa\uff0c\u79d1\u91cc\u5316\u5c31\u662f\u4e00\u500b\u300c\u5c07\u63a5\u6536 n \u500b\u53c3\u6578\u7684\u51fd\u5f0f\u62c6\u89e3\u70ba\u4e00\u9023\u4e32 n \u500b\u53ea\u63a5\u53d7\u4e00\u500b\u53c3\u6578\u7684\u51fd\u5f0f\u300d(Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument)\u7684\u904e\u7a0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u539f\u672c\u51fd\u5f0f\nfunction add(a, b) {\n  return a + b;\n}\nconsole.log(add(1, 2));\n\n// \u67ef\u91cc\u5316\u5f8c\nfunction add(a) {\n  return function (b) {\n    return a + b;\n  };\n}\nconsole.log(add(1)(2));\n")),(0,l.kt)("p",null,"bind \u53ef\u4ee5\u7528\u4f86\u5efa\u7acb\u67ef\u91cc\u5316\u51fd\u5f0f\uff0c\u5229\u7528 bind \u52a0\u4e0a\u9589\u5305\u88fd\u4f5c\u51fa\u53ef\u8907\u7528\u7684\u51fd\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function add(a, b) {\n  return a + b;\n}\n// \u5efa\u7acbadd10\u51fd\u5f0f\uff0c\u6307\u5b9a\u81ea\u5df1(add\u51fd\u5f0f)\u70bathis\uff0c\u4e26\u5e36\u516510\u9019\u500b\u53c3\u6578\nlet add10 = add.bind(this, 10);\n")),(0,l.kt)("p",null,"10 \u9019\u500b\u53c3\u6578\u5c07\u662f add10 \u51fd\u5f0f\u7684\u6c38\u4e45\u53c3\u6578\u503c\uff0c\u9396\u5728 add10 \u9589\u5305\u5167\uff0c\u5c31\u5982\u540c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function add(a, b) {\n  let a = 10;\n  return a + b;\n}\n")),(0,l.kt)("p",null,"\u67ef\u91cc\u5316\u5f8c\u5c31\u53ef\u4ee5\u5beb\u6210\u4e0b\u9762\uff0c\u4e14\u5ef6\u4f38\u88fd\u4f5c\u81ea\u5df1\u9700\u8981\u7684\u51fd\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let add10 = add.bind(this, 10);\nconsole.log(add10(5)); //15\n\nlet add2 = add.bind(this, 2);\nconsole.log(add2(5)); //7\n")))}d.isMDXComponent=!0}}]);