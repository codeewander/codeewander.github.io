"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),u=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(m,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const o={id:"leetcode88",title:"LeetCode 88 - Merge Sorted Array",keywords:["algorithm","array","two pointers"]},l=void 0,i={unversionedId:"leetcode/leetcode88",id:"leetcode/leetcode88",title:"LeetCode 88 - Merge Sorted Array",description:"- Difficulty: Easy.",source:"@site/docs/leetcode/leetcode88.md",sourceDirName:"leetcode",slug:"/leetcode/leetcode88",permalink:"/docs/leetcode/leetcode88",draft:!1,tags:[],version:"current",frontMatter:{id:"leetcode88",title:"LeetCode 88 - Merge Sorted Array",keywords:["algorithm","array","two pointers"]},sidebar:"Docs",previous:{title:"LeetCode 58 - Length of Last Word",permalink:"/docs/leetcode/leetcode58"},next:{title:"LeetCode 121 - Best Time to Buy and Sell Stock",permalink:"/docs/leetcode/leetcode121"}},m={},u=[{value:"Problem",id:"problem",level:2},{value:"Constraints:",id:"constraints",level:2},{value:"Solution 1",id:"solution-1",level:2},{value:"Solution 2 : \u5c07 nums2 \u7684\u5143\u7d20\u5148\u653e\u5230 nums1\uff0c\u518d\u6392\u5e8f nums1 \u9663\u5217",id:"solution-2--\u5c07-nums2-\u7684\u5143\u7d20\u5148\u653e\u5230-nums1\u518d\u6392\u5e8f-nums1-\u9663\u5217",level:2}],s={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Difficulty: Easy."),(0,a.kt)("li",{parentName:"ul"},"Related Topics: Array, Two Pointers, Sorting"),(0,a.kt)("li",{parentName:"ul"},"Link: ",(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/merge-sorted-array"},"Leetcode"))),(0,a.kt)("h2",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Given two sorted integer arrays ",(0,a.kt)("strong",{parentName:"p"},"nums1")," and ",(0,a.kt)("strong",{parentName:"p"},"nums2"),", merge ",(0,a.kt)("strong",{parentName:"p"},"nums2")," into ",(0,a.kt)("strong",{parentName:"p"},"nums1")," as one sorted array."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of elements initialized in ",(0,a.kt)("strong",{parentName:"li"},"nums1")," and ",(0,a.kt)("strong",{parentName:"li"},"nums2")," are ",(0,a.kt)("strong",{parentName:"li"},"m")," and ",(0,a.kt)("strong",{parentName:"li"},"n")," respectively."),(0,a.kt)("li",{parentName:"ul"},"You may assume that ",(0,a.kt)("strong",{parentName:"li"},"nums1")," has enough space (size that is greater or equal to ",(0,a.kt)("strong",{parentName:"li"},"m")," + ",(0,a.kt)("strong",{parentName:"li"},"n"),") to hold additional elements from ",(0,a.kt)("strong",{parentName:"li"},"nums2"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input:\nnums1 = [1,2,3,0,0,0], m = 3\nnums2 = [2,5,6],       n = 3\n\nOutput:\xa0[1,2,2,3,5,6]\n")),(0,a.kt)("h2",{id:"constraints"},"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nums1.length == m + n"),(0,a.kt)("li",{parentName:"ul"},"nums2.length == n"),(0,a.kt)("li",{parentName:"ul"},"0 <= m, n <= 200"),(0,a.kt)("li",{parentName:"ul"},"1 <= m + n <= 200"),(0,a.kt)("li",{parentName:"ul"},"-109 <= nums1","[i]",", nums2","[j]"," <= 109")),(0,a.kt)("h2",{id:"solution-1"},"Solution 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums1\n * @param {number} m\n * @param {number[]} nums2\n * @param {number} n\n * @return {void} Do not return anything, modify nums1 in-place instead.\n */\n\nvar merge = function (nums1, m, nums2, n) {\n  let i = m - 1;\n  let j = n - 1;\n  let cur = m + n - 1;\n\n  while (j >= 0) {\n    if (nums1[i] > nums2[j]) {\n      nums1[cur] = nums1[i];\n      i--;\n    } else {\n      nums1[cur] = nums2[j];\n      j--;\n    }\n    cur--;\n  }\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Complexity:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time complexity : O(m+n)"),(0,a.kt)("li",{parentName:"ul"},"Space complexity : O(1)")),(0,a.kt)("h2",{id:"solution-2--\u5c07-nums2-\u7684\u5143\u7d20\u5148\u653e\u5230-nums1\u518d\u6392\u5e8f-nums1-\u9663\u5217"},"Solution 2 : \u5c07 nums2 \u7684\u5143\u7d20\u5148\u653e\u5230 nums1\uff0c\u518d\u6392\u5e8f nums1 \u9663\u5217"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var merge = function (nums1, m, nums2, n) {\n  let index = 0;\n  for (let i = m; i < m + n; i++) {\n    nums1[i] = nums2[index];\n    index++;\n  }\n  for (var j = 0; j < nums1.length; j++) {\n    if (nums1[j] > nums1[j + 1]) {\n      let temp = nums1[j];\n      nums1[j] = nums1[j + 1];\n      nums1[j + 1] = temp;\n    }\n  }\n};\n")))}c.isMDXComponent=!0}}]);