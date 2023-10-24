"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,p(p({ref:t},s),{},{components:n})):r.createElement(y,p({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(3117),i=(n(7294),n(3905));const a={id:"typescript-intro",title:"TypeScript basic",keywords:["typescript"]},p=void 0,l={unversionedId:"typescript/typescript-intro",id:"typescript/typescript-intro",title:"TypeScript basic",description:"\u4ec0\u9ebc\u662f TypeScript ?",source:"@site/docs/typescript/typescript-intro.md",sourceDirName:"typescript",slug:"/typescript/typescript-intro",permalink:"/docs/typescript/typescript-intro",draft:!1,tags:[],version:"current",frontMatter:{id:"typescript-intro",title:"TypeScript basic",keywords:["typescript"]},sidebar:"Docs",previous:{title:"React TS - useState Type",permalink:"/docs/react/react-useState-type"},next:{title:"Objects, Arrays and Tuples",permalink:"/docs/typescript/object-array-tuples"}},o={},c=[{value:"\u4ec0\u9ebc\u662f TypeScript ?",id:"\u4ec0\u9ebc\u662f-typescript-",level:2},{value:"\u70ba\u4ec0\u9ebc\u578b\u5225\u5f88\u91cd\u8981\uff1f",id:"\u70ba\u4ec0\u9ebc\u578b\u5225\u5f88\u91cd\u8981",level:3},{value:"\u5e38\u898b\u578b\u5225\u5217\u8868",id:"\u5e38\u898b\u578b\u5225\u5217\u8868",level:3},{value:"Tsconfig \u8a2d\u5b9a\u6a94",id:"tsconfig-\u8a2d\u5b9a\u6a94",level:3},{value:"TS \u6a94\u6848\u985e\u5225",id:"ts-\u6a94\u6848\u985e\u5225",level:3},{value:"\u5e38\u7528 TS \u6307\u4ee4",id:"\u5e38\u7528-ts-\u6307\u4ee4",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ec0\u9ebc\u662f-typescript-"},"\u4ec0\u9ebc\u662f TypeScript ?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TypeScript is an open source, typed syntactic superset of JavaScript")),(0,i.kt)("p",null,"TypeScript \u662f\u52a0\u5f37\u7248\u7684 JavaScript (\u8d85\u96c6 Superset)\uff0c\u52a0\u5f37\u4e86 Type \u7684\u90e8\u5206\uff0c\u8b93\u958b\u767c\u8005\u5728\u7de8\u5beb\u7a0b\u5f0f\u6642\u53ef\u4ee5\u6307\u5b9a\u8b8a\u6578\u7684\u985e\u578b\uff0c\u8b93\u8b8a\u6578\u4fdd\u6301\u4e00\u81f4\u7684\u985e\u578b\uff0c\u6709\u52a9\u65bc\u6e1b\u5c11\u932f\u8aa4\uff0c\u4ee5\u53ca\u63d0\u9ad8\u7a0b\u5f0f\u78bc\u7684\u7a69\u5b9a\u6027\u548c\u53ef\u8b80\u6027\u3002"),(0,i.kt)("p",null,"TypeScript \u5728\u7de8\u8b6f\u968e\u6bb5\u53ef\u4ee5\u505a\u578b\u5225\u6aa2\u67e5\uff0c\u767c\u73fe\u578b\u5225\u932f\u8aa4\uff0c\u4f46\u5373\u4f7f TypeScript \u7de8\u8b6f\u5831\u932f\uff0c\u4e5f\u53ef\u4ee5\u7522\u751f JavaScript \u6a94\u6848"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7de8\u8b6f\u70ba\u4e7e\u6de8\u3001\u53ef\u8b80\u7684 JS"),(0,i.kt)("li",{parentName:"ul"},"\u4e09\u90e8\u5206\uff1a\u8a9e\u8a00\u3001\u8a9e\u8a00\u4f3a\u670d\u5668\u548c\u7de8\u8b6f\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u9ede\u50cf\u82b1\u54e8\u7684 linter \u2014 \u7d14\u7cb9\u5728\u69cb\u5efa\u6642\u63d0\u4f9b\u5e6b\u52a9")),(0,i.kt)("h3",{id:"\u70ba\u4ec0\u9ebc\u578b\u5225\u5f88\u91cd\u8981"},"\u70ba\u4ec0\u9ebc\u578b\u5225\u5f88\u91cd\u8981\uff1f"),(0,i.kt)("p",null,"\u5141\u8a31\u958b\u767c\u8005\u5c07\u66f4\u591a\u7684\u300c\u610f\u5716\u300d\u64b0\u5beb\u51fa\u4f86\uff0c\u7279\u5225\u662f\u5728\u95e1\u660e\u9650\u5236\u6642\u3002TypeScript \u6703\u5c07\u4e00\u4e9b\u5e38\u898b\u7684\u7a0b\u5f0f\u932f\u8aa4\u5f9e\u57f7\u884c\u671f\u9593\u8f49\u79fb\u5230\u7de8\u8b6f\u6642\u3002"),(0,i.kt)("h3",{id:"\u5e38\u898b\u578b\u5225\u5217\u8868"},"\u5e38\u898b\u578b\u5225\u5217\u8868"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JS \u57fa\u790e\u578b\u5225\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"void"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"symbol")),(0,i.kt)("li",{parentName:"ul"},"\u7269\u4ef6\u578b\u5225\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"array"),"\u3001 ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"object"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"Tuple"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"interface"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"enum"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"class")),(0,i.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u578b\u5225\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"any"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"never"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"unknown"))),(0,i.kt)("h3",{id:"tsconfig-\u8a2d\u5b9a\u6a94"},"Tsconfig \u8a2d\u5b9a\u6a94"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "ES2015", // \u7de8\u8b6f\u51fa\u4f86\u7684 ECMAScript \u7248\u672c\n    "module": "commonjs", // compile \u5f8c\u7a0b\u5f0f\u78bc\u6703\u7528 commonjs \u4f86\u8655\u7406\u6a21\u7d44\u7684\u532f\u51fa\u532f\u5165\n    "noImplicitAny": true, // \u662f\u5426\u7981\u6b62\u96b1\u542b\u7684 any \u578b\u5225\n    "allowJs": false, // \u662f\u5426\u5141\u8a31\u532f\u5165 js \u6a94\uff0c\u6703\u5f71\u97ff\u5230 include \u6642\u89e3\u6790\u7684\u526f\u6a94\u540d\u662f\u5426\u5305\u542b\uff08.js \u548c .jsx\uff09\n\n    "rootDir": "src", // \u5982\u679c\u6c92\u8a2d\u5b9a\u6703\u5957\u7528\u9810\u8a2d\u503c\uff08TS \u81ea\u52d5\u5224\u65b7\uff09\n    "outDir": "dist", // TS \u7de8\u8b6f\u8f38\u51fa\u8cc7\u6599\u593e\n\n    /* Strict Type-Checking Options */\n    "strict": true,\n\n    /* Additional Checks */\n    "noUnusedLocals": true,\n    "noUnusedParameters": true,\n    "noFallthroughCasesInSwitch": true, // \u78ba\u4fdd switch case \u90fd\u6703\u6709 break \u6216 return\n\n    /* Module Resolution Options */\n\n    "baseUrl": "./", // \u532f\u5165\u6a21\u7d44\u6642\uff0c\u8def\u5f91\u53ef\u4ee5\u4f7f\u7528\u5f9e baseUrl \u958b\u59cb\uff0c\u800c\u4e0d\u9700\u8981 ./../ \u9019\u7a2e\u5beb\u6cd5\n    "paths": {\n      "@": ["src"] // \u5c07 @ map \u5230 src\n    },\n    /* Source Map Options */\n    "sourceMap": true,\n\n    /* Advanced Options */\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true // \u78ba\u4fdd\u6a94\u6848\u7684\u5927\u5c0f\u5beb\u4e00\u81f4\uff0c\u907f\u514d\u67d0\u4e9b\u4f5c\u696d\u7cfb\u7d71\u5c0d\u5927\u5c0f\u5beb\u4e0d\u654f\u611f\n  },\n  "include": ["src"], // \u7de8\u8b6f\u76ee\u6a19\u8cc7\u6599\u593e\uff0c\u8868\u793a\u6703\u7de8\u8b6fsrc\u4e0b\u6240\u6709\u7684TS\u6a94\u6848\n  "exclude": ["docs"] // \u6392\u9664\u4e0d\u9700\u8981\u7de8\u8b6f\u7684\u8cc7\u6599\u593e\n}\n')),(0,i.kt)("h3",{id:"ts-\u6a94\u6848\u985e\u5225"},"TS \u6a94\u6848\u985e\u5225"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".ts"),"\u6587\u4ef6\u5305\u542b\u985e\u578b\u8cc7\u8a0a\u548c\u904b\u884c\u7684\u7a0b\u5f0f\u78bc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".js"),"\u6587\u4ef6\u50c5\u5305\u542b\u904b\u884c\u7684\u7a0b\u5f0f\u78bc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".d.ts")," \u70ba\u8072\u660e\u6587\u4ef6\u50c5\u5305\u542b\u985e\u578b\u8cc7\u8a0a")),(0,i.kt)("h3",{id:"\u5e38\u7528-ts-\u6307\u4ee4"},"\u5e38\u7528 TS \u6307\u4ee4"),(0,i.kt)("p",null,"npx \u78ba\u4fdd\u4f7f\u7528\u7684\u662f\u9805\u76ee\u672c\u5730\u5b89\u88dd\u7684 TypeScript \u5957\u4ef6\uff0c\u800c\u4e0d\u662f\u5168\u57df\u5b89\u88dd\u7684 TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx tsc --init #\u521d\u59cb\u5316typescript\u5c08\u6848\nnpx tsc --watch #\u555f\u7528\u76e3\u8996\u6a21\u5f0f\uff0c\u7576ts\u6a94\u6848\u767c\u751f\u8b8a\u5316\u6642\uff0c\u81ea\u52d5\u91cd\u65b0\u7de8\u8b6f\nnpx tsc --noEmit #\u7528\u65bc\u53ea\u57f7\u884c\u578b\u5225\u6aa2\u67e5\uff0c\u800c\u4e0d\u751f\u6210 JavaScript \u4ee3\u78bc\nnpx tsc -b . # build\nnpx tsc -b . --clean   # \u79fb\u9664\u6389\u6253\u5305\u5f8c\u7522\u751f\u7684\u6a94\u6848\nnpx tsc --showConfig > tsconfig.txt # \u6aa2\u8996\u5be6\u969b\u4e0a\u88ab TypeScript \u8655\u7406\u7684\u6a94\u6848\uff08\u6700\u7d42\u5403\u5230\u7684\u8a2d\u5b9a\u6a94\uff09\n")),(0,i.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.typescript-training.com/course/fundamentals-v4/02-hello-typescript/"},"Typescript fundamental@Mike North")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pjchender.dev/typescript/tsconfig-and-tsc/"},"TypeScript Config File@PJCHENder"))))}d.isMDXComponent=!0}}]);