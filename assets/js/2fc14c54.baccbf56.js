"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(3117),o=(n(7294),n(3905));const l={id:"leetcode26",title:"LeetCode 26 - Remove Duplicates From Sorted Array",keywords:["algorithm","two pointers"]},a=void 0,i={unversionedId:"leetcode/leetcode26",id:"leetcode/leetcode26",title:"LeetCode 26 - Remove Duplicates From Sorted Array",description:"\u984c\u76ee",source:"@site/docs/leetcode/leetcode26.md",sourceDirName:"leetcode",slug:"/leetcode/leetcode26",permalink:"/docs/leetcode/leetcode26",draft:!1,tags:[],version:"current",frontMatter:{id:"leetcode26",title:"LeetCode 26 - Remove Duplicates From Sorted Array",keywords:["algorithm","two pointers"]},sidebar:"Docs",previous:{title:"LeetCode 14 -  Longest Common Prefix",permalink:"/docs/leetcode/leetcode14"},next:{title:"LeetCode 27 - Remove Element",permalink:"/docs/leetcode/leetcode27"}},u={},c=[{value:"\u984c\u76ee",id:"\u984c\u76ee",level:3},{value:"\u601d\u8003",id:"\u601d\u8003",level:3},{value:"\u89e3\u6cd5",id:"\u89e3\u6cd5",level:3},{value:"1. Two Pointers =&gt; \u540c\u5411",id:"1-two-pointers--\u540c\u5411",level:4}],p={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u984c\u76ee"},"\u984c\u76ee"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length."),(0,o.kt)("p",{parentName:"blockquote"},"Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.")),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,1,2]\nOutput: 2, nums = [1,2]\nExplanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.\n")),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [0,0,1,1,1,2,2,3,3,4]\nOutput: 5, nums = [0,1,2,3,4]\nExplanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.\n")),(0,o.kt)("p",null,"Constraints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0 <= nums.length <= 3 ","*"," 10^4"),(0,o.kt)("li",{parentName:"ul"},"-10^4 <= nums","[i]"," <= 10^4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nums")," is sorted in ascending order.")),(0,o.kt)("h3",{id:"\u601d\u8003"},"\u601d\u8003"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u984c\u76ee\u8981\u6c42\u628a\u9663\u5217\u4e2d\u91cd\u8907\u7684\u6578\u5b57\u79fb\u6389\uff0c\u4e26\u8a08\u7b97\u79fb\u6389\u4e4b\u5f8c\u7684\u9663\u5217\u9577\u5ea6\uff0c\u4e14\u8981\u6c42\u4e0d\u5141\u8a31\u5275\u5efa\u65b0\u9663\u5217"),(0,o.kt)("li",{parentName:"ol"},"\u9663\u5217\u9577\u5ea6\u5c0f\u65bc 30000\uff0c\u4e14\u5143\u7d20\u7686\u70ba\u4ecb\u65bc -10000 \u81f3 10000 \u9593\u7684\u6578\u5b57"),(0,o.kt)("li",{parentName:"ol"},"\u9663\u5217\u5df2\u6309\u7167\u5347\u51aa\u6392\u5e8f")),(0,o.kt)("h3",{id:"\u89e3\u6cd5"},"\u89e3\u6cd5"),(0,o.kt)("h4",{id:"1-two-pointers--\u540c\u5411"},"1. Two Pointers => \u540c\u5411"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9\u5169\u500b\u6307\u91dd i \u548c j \u4f4d\u7f6e\u5206\u5225\u70ba\u7d22\u5f15\u503c 0 \u548c 1"),(0,o.kt)("li",{parentName:"ul"},"\u904d\u6b77\u9663\u5217\uff0cj \u5f80\u9663\u5217\u5c3e\u90e8\u79fb\u52d5\uff0c\u7576 i \u548c j \u503c\u4e0d\u540c\u6642\uff0ci \u5f80\u5f8c\u79fb\u52d5\u4e00\u4f4d\u7f6e\uff0c\u4e14\u5176\u503c\u7b49\u65bc j \u503c"),(0,o.kt)("li",{parentName:"ul"},"\u7d42\u6b62\u689d\u4ef6\uff1aj \u62b5\u9054\u9663\u5217\u5c3e\u90e8")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var removeDuplicates = function (nums) {\n  //\u7a7a\u9663\u5217\u5247\u56de\u50b30\n  if (nums.length === 0) return 0;\n  //\u5b9a\u7fa9 i \u4f4d\u7f6e\u70ba index 0\uff0c j \u4f4d\u7f6e\u70ba index 1\n  let i = 0;\n  for (let j = 1; j < nums.length; j++) {\n    //\u7576 i \u548c j \u503c\u4e0d\u540c\uff0c\u8868\u793a\u70ba\u4e0d\u91cd\u8907\u6578\u5b57\uff0cj\u5f80\u5f8c\u79fb\uff0c\u628a\u4e0d\u91cd\u8907\u7684\u503c\u653e\u5230i\u4f4d\u7f6e\n    if (nums[i] !== nums[j]) {\n      j++;\n      nums[i]] = nums[j];\n    }\n  }\n  //\u6700\u5f8c\u56de\u50b3\u9577\u5ea6\u70ba i \u6240\u5728\u4f4d\u7f6e + 1 (i\u53cai\u7684\u5de6\u5074\u7686\u70ba\u4e0d\u91cd\u8907\u6578\u5b57)\n  return i + 1;\n};\n")))}m.isMDXComponent=!0}}]);