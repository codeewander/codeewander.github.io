"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=a,y=l["".concat(i,".").concat(f)]||l[f]||d[f]||c;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[l]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<c;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const c={id:"react-useReducer-type",title:"React TS - useReducer Type",keywords:["typescript","react"]},o=void 0,u={unversionedId:"react/react-useReducer-type",id:"react/react-useReducer-type",title:"React TS - useReducer Type",description:"\u5c07 dispatch \u4f5c\u70ba\u53c3\u6578\u50b3\u905e",source:"@site/docs/react/react-useReducer-type.md",sourceDirName:"react",slug:"/react/react-useReducer-type",permalink:"/docs/react/react-useReducer-type",draft:!1,tags:[],version:"current",frontMatter:{id:"react-useReducer-type",title:"React TS - useReducer Type",keywords:["typescript","react"]}},i={},p=[{value:"\u5c07 dispatch \u4f5c\u70ba\u53c3\u6578\u50b3\u905e",id:"\u5c07-dispatch-\u4f5c\u70ba\u53c3\u6578\u50b3\u905e",level:2}],s={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// \u5b9a\u7fa9 actions\ninterface CounterAction {\n  type: "increment" | "decrement" | "reset" | "updateCountFromDraft";\n}\n\ninterface UpdateDraftCounterAction {\n  type: "updateDraftCount";\n  payload: number | string;\n}\n\ntype InitialState = {\n  count: number;\n  draftCount: string | number;\n};\n\nconst initialState: InitialState = {\n  count: 0,\n  draftCount: 0,\n};\n\nconst reducer = (\n  state = initialState,\n  action: CounterAction | UpdateDraftCounterAction\n) => {\n  let { count, draftCount } = state;\n\n  switch (action.type) {\n    case "increment":\n      count = count + 1;\n      return { count: count, draftCount: count };\n    case "decrement":\n      count = count - 1;\n      return { count: count, draftCount: count };\n    case "reset":\n      return { count: 0, draftCount: 0 };\n    case "updateDraftCount":\n      return { count, draftCount: action.payload };\n  }\n\n  return state;\n};\n')),(0,a.kt)("h2",{id:"\u5c07-dispatch-\u4f5c\u70ba\u53c3\u6578\u50b3\u905e"},"\u5c07 dispatch \u4f5c\u70ba\u53c3\u6578\u50b3\u905e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"")))}d.isMDXComponent=!0}}]);