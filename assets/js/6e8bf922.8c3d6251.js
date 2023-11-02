"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[986],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,u(u({ref:n},s),{},{components:t})):r.createElement(m,u({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(3117),a=(t(7294),t(3905));const o={title:"React Hook - useRef",id:"useRef",keywords:["useRef","React Hooks"]},u=void 0,l={unversionedId:"react/useRef",id:"react/useRef",title:"React Hook - useRef",description:"useRef \u662f\u4e00\u500b React Hook\uff0c\u53ef\u4ee5\u53c3\u8003\u4e00\u500b\u503c\u4e14\u4e0d\u6703\u53d7\u5230\u91cd\u65b0\u6e32\u67d3\u5f71\u97ff",source:"@site/docs/react/useRef.md",sourceDirName:"react",slug:"/react/useRef",permalink:"/docs/react/useRef",draft:!1,tags:[],version:"current",frontMatter:{title:"React Hook - useRef",id:"useRef",keywords:["useRef","React Hooks"]},sidebar:"Docs",previous:{title:"\u4f7f\u7528 tailwind \u5275\u5efa\u5ba2\u88fd\u5316\u5143\u4ef6",permalink:"/docs/react/react-tailwind-component"},next:{title:"React Hook - useContext",permalink:"/docs/react/useContext"}},c={},i=[{value:"\u57fa\u672c\u6982\u5ff5\u548c\u7528\u6cd5",id:"\u57fa\u672c\u6982\u5ff5\u548c\u7528\u6cd5",level:2},{value:"\u5e38\u898b\u7528\u6cd5",id:"\u5e38\u898b\u7528\u6cd5",level:2},{value:"forwardRef: \u8b93\u7236\u5c64\u53d6\u5f97\u5b50\u5c64 DOM \u5143\u7d20",id:"forwardref-\u8b93\u7236\u5c64\u53d6\u5f97\u5b50\u5c64-dom-\u5143\u7d20",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],s={toc:i},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"useRef \u662f\u4e00\u500b React Hook\uff0c\u53ef\u4ee5\u53c3\u8003\u4e00\u500b\u503c\u4e14\u4e0d\u6703\u53d7\u5230\u91cd\u65b0\u6e32\u67d3\u5f71\u97ff"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"useRef")," \u53ef\u4ee5\u770b\u4f5c\u662f\u4e0d\u6703\u89f8\u767c\u91cd\u65b0\u6e32\u67d3\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"useState"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ref = useRef(initialValue);\n")),(0,a.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5\u548c\u7528\u6cd5"},"\u57fa\u672c\u6982\u5ff5\u548c\u7528\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useRef")," \u6703\u56de\u50b3\u4e00\u500b\u7269\u4ef6\uff0c\u6b64\u7269\u4ef6\u6703\u6709\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"li"},"current")," \u7684\u5c6c\u6027\u88e1\u9762\u5b58\u653e\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u6e32\u67d3 ",(0,a.kt)("inlineCode",{parentName:"li"},"useRef")," \u7684\u56de\u50b3\u503c(\u7269\u4ef6)\u90fd\u662f\u540c\u4e00\u500b(\u76f8\u540c\u7684 reference)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"initialValue")," \u70ba ref \u56de\u50b3\u7269\u4ef6\u7684 current \u5c6c\u6027\u7684\u521d\u59cb\u503c\uff0c\u53ef\u4ee5\u662f\u4efb\u4f55\u578b\u5225"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ref.current")," \u8b8a\u5316\u6642\uff0c\u4e0d\u6703\u89f8\u767c re-render")),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff1a\n\u4e0b\u9762\u7a0b\u5f0f\u78bc\uff0c\u5018\u82e5\u9ede\u64ca Increment \u6309\u9215\uff0c\u89f8\u767c handleIncrement \u51fd\u5f0f\uff0c\u9019\u6642\u5019 console \u5370\u51fa\u4f86\u503c\u70ba 1\uff0c\u4f46\u56e0\u70ba\u756b\u9762\u4e0d\u6703\u91cd\u65b0\u6e32\u67d3\uff0c\u56e0\u6b64\uff0c\u756b\u9762\u4e0a\u4ecd\u7136\u7dad\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"Count: 0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const counter = () => {\n  const countRef = useRef(0);\n  const handleIncrement = () => {\n    countRef.current++;\n    console.log("Ref", countRef.current); // Ref: 1\n  };\n  return (\n    <div>\n      Count: {countRef.current}\n      <button onClick={handleIncrement}>Increment</button>\n    </div>\n  );\n};\n')),(0,a.kt)("h2",{id:"\u5e38\u898b\u7528\u6cd5"},"\u5e38\u898b\u7528\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7d00\u9304\u5143\u4ef6\u8cc7\u6599\u72c0\u614b\uff0c\u4e0d\u53d7\u6e32\u67d3\u5f71\u97ff(ex:\u8a08\u7b97\u5143\u4ef6\u6e32\u67d3\u6b21\u6578)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const [name, setName] = useState("");\nconst renderCount = useRef(1);\n\nuseEffect(() => {\n  renderCount.current += 1;\n});\n\nreturn (\n  <div>\n    <input value={name} onChange={(e) => setName(e.target.value)} />\n    <div>\u6211\u7684\u540d\u5b57\u662f {name}</div>\n    <div>\u91cd\u65b0\u6e32\u67d3\u4e86 {renderCount} \u6b21</div>\n  </div>\n);\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e ref \u9078\u53d6\u64cd\u4f5c\u865b\u64ec DOM \u5143\u7d20(ex\uff1a\u805a\u7126\u6587\u5b57\u8f38\u5165\u6846)")),(0,a.kt)("p",null,"\u4f7f\u7528 useRef \u5efa\u7acb\u51fa\u4e00\u500b\u7269\u4ef6\u5be6\u9ad4\uff0cnull \u8868\u793a\u521d\u59cb\u503c\u8a2d\u5b9a\u70ba null\uff0c\u5c07\u5efa\u7acb\u597d\u7684\u7269\u4ef6\u4e1f\u5165\u8981\u6293\u53d6\u7684 DOM \u5143\u7d20\u7684 ref attribute \u4e2d\uff0c\u4e4b\u5f8c\u900f\u904e inputRef.current \u53d6\u5f97 input \u7684 DOM \u7269\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const component = () => {\n  const inputRef = useRef(null);\n\n  useEffect(() => {\n    inputRef.current.focus();\n  }, []);\n\n  return <input ref={inputRef} type="text" placeholder="Enter text" />;\n};\n')),(0,a.kt)("p",null,"\u5018\u82e5\u5e0c\u671b\u5728 ref \u639b\u8f09\u5b8c\u6210\u5f8c\u57f7\u884c\u67d0\u4e9b\u4e8b\u60c5\uff0c\u5247\u53ef\u4ee5\u4f7f\u7528 callback ref"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function MeasureExample() {\n  const [height, setHeight] = useState(0);\n\n  const measuredRef = useCallback((node) => {\n    if (node !== null) {\n      //getBoundingClientRect \u7528\u65bc\u53d6\u5f97\u5143\u7d20\u76f8\u5c0d\u65bc\u8996\u7a97\u7684\u5ea7\u6a19\u4f4d\u7f6e\n      setHeight(node.getBoundingClientRect().height);\n    }\n  }, []);\n\n  return (\n    <>\n      <h1 ref={measuredRef}>Hello, world</h1>\n      <h2>The above header is {Math.round(height)}px tall</h2>\n    </>\n  );\n}\n")),(0,a.kt)("p",null,"\u5176\u4ed6\u985e\u4f3c\u64cd\u4f5c\uff1a\u6efe\u52d5\u5716\u7247\u5230\u8996\u5716\u3001\u64ad\u653e\u548c\u66ab\u505c\u5f71\u7247"),(0,a.kt)("h2",{id:"forwardref-\u8b93\u7236\u5c64\u53d6\u5f97\u5b50\u5c64-dom-\u5143\u7d20"},"forwardRef: \u8b93\u7236\u5c64\u53d6\u5f97\u5b50\u5c64 DOM \u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u7236\u5c64\u5efa\u7acb ref\n- \u5148\u5728\u7236\u5c64\u5143\u4ef6\u900f\u904e useRef \u5275\u5efa\u4e00\u500b ref\u4e26\u50b3\u81f3\u5b50\u5143\u4ef6\nconst App = () => {\n  const inputRef = React.useRef(null);\n\n  // \u7236\u5c64\u53ef\u4ee5\u64cd\u4f5c\u5b50\u5c64 input \u5143\u7d20\u7684 focus\n  React.useEffect(() => {\n    console.log(inputRef.current); // <input type="text">...</input>\n    inputRef.current.focus(); // \u5c0d AwesomeInput \u4e2d\u7684 <input /> \u9032\u884c\u64cd\u4f5c\n  }, []);\n\n  return <AwesomeInput ref={inputRef} />;\n};\n\n//\u5b50\u5c64\u4f7f\u7528 forwardRef\n- \u5b50\u5143\u4ef6\u900f\u904e forwardRef\u5c07input\u50b3\u51fa\u53bb\nconst AwesomeInput = React.forwardRef(({ value, change }, ref) => {\n  return <input type="text" value={value} onChange={onChange} ref={ref} />;\n});\n')),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=42BkpGe8oxg&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=6&t=684s"},"Learn React Hooks: useRef - Simply Explained!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zh-hans.react.dev/reference/react/useRef"},"useRef - React Docs"))))}f.isMDXComponent=!0}}]);