"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2216],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return t?n.createElement(y,i(i({ref:r},d),{},{components:t})):n.createElement(y,i({ref:r},d))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2525:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(3117),a=(t(7294),t(3905));const l={id:"binary-search",title:"Binary Search",keywords:["Algorithm","Binary Search"]},i=void 0,o={unversionedId:"algorithm/binary-search",id:"algorithm/binary-search",title:"Binary Search",description:"\u6982\u5ff5",source:"@site/docs/algorithm/binary-search.md",sourceDirName:"algorithm",slug:"/algorithm/binary-search",permalink:"/docs/algorithm/binary-search",draft:!1,tags:[],version:"current",frontMatter:{id:"binary-search",title:"Binary Search",keywords:["Algorithm","Binary Search"]},sidebar:"Docs",previous:{title:"Two Pointers",permalink:"/docs/two-pointers"},next:{title:"\u5806\u758a(Stack)",permalink:"/docs/stack"}},c={},u=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u6f14\u7b97\u6cd5\u5be6\u4f5c",id:"\u6f14\u7b97\u6cd5\u5be6\u4f5c",level:2},{value:"LeetCode \u76f8\u95dc\u984c\u76ee",id:"leetcode-\u76f8\u95dc\u984c\u76ee",level:2}],d={toc:u},p="wrapper";function s(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u3010\u7528\u9014\u3011\u91dd\u5c0d\u5df2\u6392\u5e8f\u597d\u7684\u5e8f\u5217\u4e2d\u9032\u884c\u641c\u5c0b"),(0,a.kt)("li",{parentName:"ul"},"\u3010\u5be6\u4f5c\u3011\u8b8a\u6578: \u5de6\u908a\u503c(l), \u53f3\u908a\u503c(r), \u4e2d\u9593\u503c(mid)"),(0,a.kt)("li",{parentName:"ul"},"\u3010\u539f\u5247\u3011",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u90fd\u8981\u7e2e\u6e1b\u641c\u5c0b\u7bc4\u570d"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u7e2e\u6e1b\u4e0d\u80fd\u6392\u9664\u53ef\u80fd\u7b54\u6848"))),(0,a.kt)("li",{parentName:"ul"},"\u3010\u6642\u9593\u8907\u96dc\u5ea6\u3011 O(logN)"),(0,a.kt)("li",{parentName:"ul"},"\u3010\u8209\u4f8b\u3011\u7d42\u6975\u5bc6\u78bc\u904a\u6232")),(0,a.kt)("h2",{id:"\u6f14\u7b97\u6cd5\u5be6\u4f5c"},"\u6f14\u7b97\u6cd5\u5be6\u4f5c"),(0,a.kt)("p",null,"\u76ee\u6a19\uff1a\u900f\u904e binary search \u5728\u4e00\u500b\u9663\u5217\u4e2d\u627e\u51fa\u76ee\u6a19\u5143\u7d20\uff08target\uff09"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8a18\u5f97\u5728\u4f7f\u7528 binary search \u524d\u8981\u5148\u5c07\u9663\u5217\u5143\u7d20\u9032\u884c\u5347\u51aa\u6392\u5e8f`")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function binarySearch(numberArr, target) {\n  // \u53d6\u5f97\u9663\u5217\u4e2d\u9593\u7684\u7d22\u5f15\u503c\n  let headIndex = 0;\n  let lastIndex = numberArr.length - 1;\n  let middleIndex = Math.floor((headIndex + lastIndex + 1) / 2);\n\n  // \u5982\u679c\u627e\u5230\u5c31\u56de\u50b3 true\n  if (numberArr[middleIndex] === target) {\n    return true;\n  }\n\n  // \u5982\u679c\u6c92\u627e\u5230\uff0c\u800c\u4e14\u9663\u5217\u53ea\u5269\u4e00\u500b\u5143\u7d20\uff0c\u8868\u793a\u627e\u4e0d\u5230\u56de\u50b3 false\n  if (numberArr.length === 1) {\n    return false;\n  }\n\n  // \u5982\u679c\u6c92\u627e\u5230\uff0c\u4e14 target \u5927\u65bc\u4e2d\u9593\u7684\u6578\u503c\uff0c\u5247\u53d6\u5f8c\u534a\u6bb5\u7684\u9663\u5217\u518d\u641c\u5c0b\n  if (target > numberArr[middleIndex]) {\n    return binarySearch(numberArr.slice(middleIndex, numberArr.length), target);\n    // \u5982\u679c target \u5c0f\u65bc\u4e2d\u9593\u7684\u6578\u503c\uff0c\u5247\u53d6\u524d\u534a\u6bb5\u7684\u9663\u5217\u518d\u641c\u5c0b\n  } else if (target < numberArr[middleIndex]) {\n    return binarySearch(numberArr.slice(0, middleIndex), target);\n  }\n}\n")),(0,a.kt)("h2",{id:"leetcode-\u76f8\u95dc\u984c\u76ee"},"LeetCode \u76f8\u95dc\u984c\u76ee"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/leetcode/leetcode704"},"LeetCode 704. Binary Search(easy)"),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/leetcode/leetcode1062"},"LeetCode 1062. Reverse String(medium)")))}s.isMDXComponent=!0}}]);