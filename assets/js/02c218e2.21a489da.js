"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),i=c(n),k=o,d=i["".concat(s,".").concat(k)]||i[k]||m[k]||r;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=k;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[i]="string"==typeof e?e:o,l[1]=u;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var a=n(3117),o=(n(7294),n(3905));const r={title:"\u8a8d\u8b58 React Hook",id:"react-hook"},l=void 0,u={unversionedId:"react/react-hook",id:"react/react-hook",title:"\u8a8d\u8b58 React Hook",description:"Hook \u662f\u4ec0\u9ebc\uff1f",source:"@site/docs/react/react-hook.md",sourceDirName:"react",slug:"/react/react-hook",permalink:"/docs/react/react-hook",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8a8d\u8b58 React Hook",id:"react-hook"},sidebar:"Docs",previous:{title:"JS \u6548\u80fd\u512a\u5316 Performance",permalink:"/docs/javascript/performance-pattern"},next:{title:"React TS - Children props Type",permalink:"/docs/react/react-children-type"}},s={},c=[{value:"Hook \u662f\u4ec0\u9ebc\uff1f",id:"hook-\u662f\u4ec0\u9ebc",level:3},{value:"useState",id:"usestate",level:3},{value:"useEffect",id:"useeffect",level:3},{value:"useContext - useContext \u7b46\u8a18",id:"usecontext---usecontext-\u7b46\u8a18",level:3},{value:"useRef - useRef \u7b46\u8a18",id:"useref---useref-\u7b46\u8a18",level:3},{value:"\u6548\u80fd\u512a\u5316\uff1auseMemo\u3001useCallback \u548c memo",id:"\u6548\u80fd\u512a\u5316usememousecallback-\u548c-memo",level:3},{value:"useMemo",id:"usememo",level:4},{value:"useCallback",id:"usecallback",level:4},{value:"React.memo",id:"reactmemo",level:4}],p={toc:c},i="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"hook-\u662f\u4ec0\u9ebc"},"Hook \u662f\u4ec0\u9ebc\uff1f"),(0,o.kt)("p",null,"Hook \u662f\u51fd\u5f0f\uff0c\u662f\u4e00\u7a2e\u91cd\u8907\u4f7f\u7528\u908f\u8f2f\u7684\u65b9\u6cd5\uff0c\u80fd\u7528\u4f86\u5728\u4e0d\u540c\u7684 Component \u4e4b\u9593\u91cd\u8907\u4f7f\u7528\u908f\u8f2f\uff0c\u53ef\u4ee5\u8b93 function component \u4f7f\u7528\u539f\u672c\u53ea\u6709 class component \u6709\u7684 state \u548c\u751f\u547d\u9031\u671f\u529f\u80fd\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Q: \u4f7f\u7528 React Hook \u6709\u4ec0\u9ebc\u9650\u5236\u55ce\uff1f")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u5728 functional component \u4e2d\u547c\u53eb Hook\uff0cclass component \u4e0d\u80fd\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u5728\u6700\u4e0a\u5c64\u547c\u53eb\uff0c\u4e0d\u80fd\u5728\u8ff4\u5708\u3001\u689d\u4ef6\u5f0f\u6216\u5de2\u72c0\u51fd\u5f0f\u5167\u547c\u53eb\uff0c\u4ee5\u78ba\u4fdd Hook \u88ab\u547c\u53eb\u7684\u9806\u5e8f")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usestate"},"useState"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//useState\u662f\u51fd\u5f0f\uff0c\u6703\u56de\u50b3\u4e00\u500b\u503c state \uff0c\u4ee5\u53ca\u66f4\u65b0\u8a72 state \u7684\u65b9\u6cd5\uff08setState\uff09\n\nconst [state, setState] = useState(initialState);\n")),(0,o.kt)("p",null,"useState \u662f\u7528\u4f86\u5728 function component \u88e1\u9762\u4fdd\u7559 local state\u3002\u4e00\u822c\u60c5\u6cc1\u4e0b\uff0c\u8b8a\u6578\u6703\u5728 function \u7d50\u675f\u6642\u6d88\u5931\uff0c\u4f46 state \u8b8a\u6578\u6703\u88ab React \u4fdd\u7559\u8d77\u4f86\uff0c\u56e0\u6b64\uff0c\u5728\u91cd\u65b0\u6e32\u67d3\u6642\u5143\u4ef6\u4ecd\u6703\u4fdd\u7559\u9019\u500b state\u3002\u4f7f\u7528 setState \u65b9\u6cd5\u5c07\u6703\u66f4\u65b0 state\uff0c\u4e0d\u6703\u76f4\u63a5\u4fee\u6539 state \u800c\u662f\u7d66\u4e00\u500b newState \u3002"),(0,o.kt)("p",null,"\u4e00\u500b\u5143\u4ef6\u5167\u53ef\u4ee5\u5ba3\u544a\u591a\u500b state \uff0c\u56e0\u6b64\uff0c\u4e0d\u7528\u5c07\u5404\u7a2e\u7121\u95dc\u7684 state \u653e\u5728\u540c\u4e00\u500b\u7269\u4ef6\u5167\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a ",(0,o.kt)("strong",{parentName:"p"},"setState \u4e0d\u6703\u5373\u6642\u66f4\u65b0\uff0c\u662f\u975e\u540c\u6b65\u7684")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u95dc\u65bc initialState")),(0,o.kt)("p",null,"initialState \u53c3\u6578\u53ea\u6703\u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u6642\u4f7f\u7528\uff0c\u5f8c\u7e8c\u6e32\u67d3\u6642\u4e0d\u6703\u7528\u5230\uff0c\u4f46\u6bcf\u6b21\u6e32\u67d3\u6642\u9084\u662f\u6703\u8dd1\u4e00\u6b21 initialState\u3002\n\u5982\u679c\u521d\u59cb state \u9700\u8981\u901a\u904e\u8907\u96dc\u7684\u8a08\u7b97\u4f86\u7372\u5f97\uff0c\u53ef\u4ee5\u50b3\u5165 function\uff0c\u4e26\u56de\u50b3\u521d\u59cb\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const [state, setState] = useState(() => {\n  const initialState = someExpensiveComputation(props);\n  return initialState;\n});\n")),(0,o.kt)("p",null,"\u8981\u6ce8\u610f\u7684\u662f\u56e0\u70ba\u6bcf\u6b21\u6e32\u67d3\u90fd\u9084\u662f\u6703\u8dd1 initialState\uff0c\u57fa\u65bc\u6548\u80fd\u53ef\u91cf\uff0c\u8981\u907f\u514d\u4ee5\u4e0b\u7684\u5beb\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const [state, setState] = useState(someExpensiveComputation(props));\n")),(0,o.kt)("p",null,"\u5426\u5247\uff0c\u6bcf\u6b21\u6e32\u67d3\u90fd\u6703\u57f7\u884c someExpensiveComputation(props)"),(0,o.kt)("h3",{id:"useeffect"},"useEffect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"useEffect(didUpdate);\n")),(0,o.kt)("p",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0cuseEffect \u6703\u5728\u6bcf\u4e00\u500b\u5b8c\u6574 render \u7d50\u675f\u5f8c\u57f7\u884c\u88e1\u9762\u7684\u7a0b\u5f0f\u78bc"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usecontext---usecontext-\u7b46\u8a18"},"useContext - ",(0,o.kt)("a",{parentName:"h3",href:"./useContext"},"useContext \u7b46\u8a18")),(0,o.kt)("h3",{id:"useref---useref-\u7b46\u8a18"},"useRef - ",(0,o.kt)("a",{parentName:"h3",href:"./useRef"},"useRef \u7b46\u8a18")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u6548\u80fd\u512a\u5316usememousecallback-\u548c-memo"},"\u6548\u80fd\u512a\u5316\uff1auseMemo\u3001useCallback \u548c memo"),(0,o.kt)("h4",{id:"usememo"},"useMemo"),(0,o.kt)("p",null,"useMemo \u4e3b\u8981\u7528\u5728\u8a18\u61b6\u8907\u96dc\u7684\u7a0b\u5f0f\u78bc\u6216\u904b\u7b97\u51fa\u4f86\u7684\u56de\u50b3\u503c\uff0c\u5982\u6b64\uff0c\u91cd\u65b0\u6e32\u67d3\u6642\uff0c\u9664\u975e dependency \u6539\u8b8a\uff0c\u5426\u5247\u4e0d\u7528\u518d\u6b21\u57f7\u884c\u904b\u7b97\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n")),(0,o.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function WithoutMemo() {\n  const [count, setCount] = useState(1);\n  const [val, setValue] = useState("");\n\n  function expensive() {\n    let sum = 0;\n    for (let i = 0; i < count * 100; i++) {\n      sum += i;\n    }\n    return sum;\n  }\n\n  return (\n    <div>\n      <h4>\n        {count}-{val}-{expensive()}\n      </h4>\n      <div>\n        <button onClick={() => setCount(count + 1)}>+c1</button>\n        <input value={val} onChange={(event) => setValue(event.target.value)} />\n      </div>\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"WithoutMemo \u4e2d\u6709\u5169\u500b state\uff0c\u4e14\u6bcf\u6b21\u6e32\u67d3\u6642\u90fd\u6703\u57f7\u884c expensive \u51fd\u5f0f\u62ff\u5230\u67d0\u500b\u503c\u3002\u7136\u800c\uff0c\u7121\u8ad6\u662f\u4fee\u6539 count \u9084\u662f val\uff0c\u90fd\u6703\u91cd\u65b0\u6e32\u67d3\u5143\u4ef6\u4e26\u89f8\u6cd5 expensive \u7684\u57f7\u884c\uff0c\u4f46\u662f\uff0cexpensive \u53ea\u548c count \u503c\u6709\u95dc\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 useMemo\uff0c\u53ea\u5728 count \u503c\u4fee\u6539\u6642\uff0c\u57f7\u884c expensive \u8a08\u7b97\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export default function WithMemo() {\n  const [count, setCount] = useState(1);\n  const [val, setValue] = useState("");\n  const expensive = useMemo(() => {\n    let sum = 0;\n    for (let i = 0; i < count * 100; i++) {\n      sum += i;\n    }\n    return sum;\n  }, [count]);\n\n  return (\n    <div>\n      <h4>\n        {count}-{val}-{expensive()}\n      </h4>\n      <div>\n        <button onClick={() => setCount(count + 1)}>+</button>\n        <input value={val} onChange={(event) => setValue(event.target.value)} />\n      </div>\n    </div>\n  );\n}\n')),(0,o.kt)("h4",{id:"usecallback"},"useCallback"),(0,o.kt)("p",null,"useCallback \u8ddf useMemo \u5f88\u985e\u4f3c\uff0c\u4f46\u56de\u50b3\u7684\u662f\u5df2\u8a18\u61b6\u7684\u51fd\u5f0f\uff0c\u9664\u975e dependency \u6539\u8b8a\u6642\u624d\u6703\u91cd\u65b0\u6e32\u67d3\u6b64\u51fd\u5f0f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCallback(fn, deps)\u7b49\u540c\u65bc useMemo(() => fn, deps)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);\n")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"reactmemo"},"React.memo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u5169\u500b\u53c3\u6578\u5206\u5225\u70ba\n1. \u9700\u8981\u505a\u6548\u80fd\u512a\u5316\u3001\u6bd4\u8f03props\u7684\u5143\u4ef6\n2. \u81ea\u5b9a\u7fa9\u6bd4\u8f03 props\u7684\u65b9\u6cd5\nReact.memo(CustomComponent, areEqual)\n")),(0,o.kt)("p",null,"React.memo \u662f\u4e00\u500b high order component\uff0c\u7576\u7236\u5c64\u72c0\u614b\u6539\u8b8a\uff0c\u5e95\u4e0b\u7684\u6bcf\u500b\u5b50\u5143\u4ef6\u90fd\u6703\u91cd\u65b0\u6e32\u67d3\uff0c\u5c31\u7b97\u5b83\u4f9d\u8cf4\u7684 props \u6216 state \u6c92\u6709\u6539\u8b8a\u3002\u56e0\u6b64\uff0cReact \u63d0\u4f9b\u4e86 memo\uff0cmemo \u6703\u5e6b\u5fd9\u6aa2\u6e2c props \u662f\u5426\u6709\u8b8a\u52d5\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"\u7576 props \u6c92\u6539\u8b8a\u6642\uff0c component \u5c31\u4e0d\u6703\u91cd\u65b0\u6e32\u67d3"),"\u3002React.memo \u662f\u5c08\u7528\u65bc Component \u7684\u65b9\u6cd5"),(0,o.kt)("p",null,"memo \u662f\u5229\u7528\u6dfa\u5c64\u6bd4\u8f03(shallowly compare) \u7684\u65b9\u6cd5\u78ba\u8a8d props \u7684\u503c\u662f\u5426\u4e00\u6a23\uff0c \u6dfa\u5c64\u6bd4\u8f03 \u5728 props \u662f\u57fa\u672c\u8cc7\u6599\u578b\u5225\u6642\u6bd4\u8f03\u7684\u662f\u503c(value)\uff0c\u4f46\u7576 props \u662f Object \u6642\uff0c\u6bd4\u8f03\u7684\u537b\u662f\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff08reference\uff09\u3002"))}m.isMDXComponent=!0}}]);