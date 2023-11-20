"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2419],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),b=l,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||i;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(3117),l=(t(7294),t(3905));const i={id:"web-accessibility-example",title:"\u7121\u969c\u7919\u7db2\u7ad9\u5be6\u4f5c\u7bc4\u4f8b",keywords:["web accessibility"]},r=void 0,o={unversionedId:"web-accessibility/web-accessibility-example",id:"web-accessibility/web-accessibility-example",title:"\u7121\u969c\u7919\u7db2\u7ad9\u5be6\u4f5c\u7bc4\u4f8b",description:"\u7121\u969c\u7919 Icon Buttons",source:"@site/docs/web-accessibility/web-accessibility-example.md",sourceDirName:"web-accessibility",slug:"/web-accessibility/web-accessibility-example",permalink:"/docs/web-accessibility/web-accessibility-example",draft:!1,tags:[],version:"current",frontMatter:{id:"web-accessibility-example",title:"\u7121\u969c\u7919\u7db2\u7ad9\u5be6\u4f5c\u7bc4\u4f8b",keywords:["web accessibility"]},sidebar:"Docs",previous:{title:"\u7121\u969c\u7919\u7db2\u7ad9",permalink:"/docs/web-accessibility/web-accessibility-intro"},next:{title:"React - Accessibility Tools",permalink:"/docs/web-accessibility/web-accessibility-react"}},s={},c=[{value:"\u7121\u969c\u7919 Icon Buttons",id:"\u7121\u969c\u7919-icon-buttons",level:2},{value:"\u7121\u969c\u7919\u6309\u9215\u4e8b\u4ef6",id:"\u7121\u969c\u7919\u6309\u9215\u4e8b\u4ef6",level:2},{value:"\u7121\u969c\u7919\u8868\u55ae",id:"\u7121\u969c\u7919\u8868\u55ae",level:2},{value:"\u4f7f\u7528 aria-label",id:"\u4f7f\u7528-aria-label",level:2},{value:"\u4f7f\u7528 <code>aria-labelledby</code>",id:"\u4f7f\u7528-aria-labelledby",level:2},{value:"\u4f7f\u7528 <code>aria-describedby</code>",id:"\u4f7f\u7528-aria-describedby",level:2},{value:"<code>aria-live</code>, <code>aria-atomic</code> \u548c <code>aria-relevant</code>",id:"aria-live-aria-atomic-\u548c-aria-relevant",level:2},{value:"\u9801\u9762\u6e32\u67d3\u5f8c\u7684 focus \u8a2d\u5b9a",id:"\u9801\u9762\u6e32\u67d3\u5f8c\u7684-focus-\u8a2d\u5b9a",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7121\u969c\u7919-icon-buttons"},"\u7121\u969c\u7919 Icon Buttons"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<button>Help!</button>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<button>Help!</button>\n\n\x3c!-- \u8a9e\u97f3\u7121\u6cd5\u8fa8\u8b58 icon --\x3e\n<button>\n  <i class="icon icon-help"></i>\n</button>\n\n\x3c!-- \u8003\u91cf\u7121\u969c\u7919\u539f\u5247\u9032\u884c\u512a\u5316: \u52a0\u4e0a\u96b1\u85cf\u6587\u5b57\u8aaa\u660e\uff0c\u4e26\u5c07 icon \u8a2d\u70ba\u8f14\u52a9\u8edf\u9ad4\u4e0d\u8b80\u53d6 --\x3e\n<button>\n  <span class="visuallyhidden">Help!</span>\n  <i class="icon icon-help" aria-hidden="true"></i>\n</button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="button">\n  <svg width="32" height="32" viewBox="0 0 32 32" class="icon">\n    <path\n      d="M14 24h4v-4h-4v4zM16 8c-3 0-6 3-6 6h4c0-1 1-2 2-2s2 1 2 2c0 2-4 2-4 4h4c2-0.688 4-2 4-5s-3-5-6-5zM16 0c-8.844 0-16 7.156-16 16s7.156 16 16 16 16-7.156 16-16-7.156-16-16-16zM16 28c-6.625 0-12-5.375-12-12s5.375-12 12-12 12 5.375 12 12-5.375 12-12 12z"\n    ></path>\n  </svg>\n</div>\n\n\x3c!-- \u8003\u91cf\u7121\u969c\u7919\u539f\u5247\u9032\u884c\u512a\u5316: div \u52a0\u4e0a role \u548c tabindex\uff0csvg \u52a0\u4e0a title \u548c aria-labelledby --\x3e\n\x3c!-- tabindex \u8b93\u9810\u8a2d\u4e0d\u53ef\u805a\u7126\u7269\u4ef6\u6539\u8b8a\u70ba\u53ef\u805a\u7126 --\x3e\n<div class="button" role="button" tabindex="0">\n  <svg\n    width="32"\n    height="32"\n    viewBox="0 0 32 32"\n    class="icon"\n    aria-labelledby="svgtitle"\n  >\n    <title id="svgtitle">Help!</title>\n    <path\n      d="M14 24h4v-4h-4v4zM16 8c-3 0-6 3-6 6h4c0-1 1-2 2-2s2 1 2 2c0 2-4 2-4 4h4c2-0.688 4-2 4-5s-3-5-6-5zM16 0c-8.844 0-16 7.156-16 16s7.156 16 16 16 16-7.156 16-16-7.156-16-16-16zM16 28c-6.625 0-12-5.375-12-12s5.375-12 12-12 12 5.375 12 12-5.375 12-12 12z"\n    ></path>\n  </svg>\n</div>\n')),(0,l.kt)("h2",{id:"\u7121\u969c\u7919\u6309\u9215\u4e8b\u4ef6"},"\u7121\u969c\u7919\u6309\u9215\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u7576\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"div")," \u70ba\u6309\u9215\u7684\u7236\u5c64\u6642\uff0c\u8981\u52a0\u4e0a role \u548c tabindex\uff0c\u53e6\u5916\uff0c\u8003\u91cf\u9375\u76e4\u4f7f\u7528\u8005\uff0c\u9664\u4e86\u539f\u672c\u7684 onClick \u4e8b\u4ef6\u4e4b\u5916\uff0c\u4e5f\u8981\u52a0\u4e0a onKeydown \u4e8b\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<button aria-label="Help" onClick="doStuff()">\n  <i class="icon icon-help"></i>\n</button>\n\n\x3c!-- \u8003\u91cf\u7121\u969c\u7919\u539f\u5247\u9032\u884c\u512a\u5316: div \u52a0\u4e0a role \u548c tabindex\uff0c\u4ee5\u53ca onKeydown \u4e8b\u4ef6 --\x3e\n\n<div\n  class="button"\n  role="button"\n  tabindex="0"\n  aria-label="Menu"\n  onClick="doStuff()"\n  onKeydown="doStuff()"\n>\n  <i class="icon icon-menu"></i>\n</div>\n')),(0,l.kt)("h2",{id:"\u7121\u969c\u7919\u8868\u55ae"},"\u7121\u969c\u7919\u8868\u55ae"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<form action="">\n  Your name\n  <input type="text" />\n\n  <p>Favorite animal</p>\n  <div>\n    <input type="radio" name="animals" />\n    Dog\n  </div>\n  <div>\n    <input type="radio" name="animals" />\n    Cat\n  </div>\n  <div>\n    <input type="radio" name="animals" />\n    Polar bear\n  </div>\n\n  <div class="label-wrap">Hometown</div>\n  <div class="input-wrap">\n    <input type="text" />\n  </div>\n</form>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<form action="">\n  \x3c!-- \u6240\u6709 input \u5916\u5c64\u52a0\u4e0a label  --\x3e\n  <label>\n    Your name\n    <input type="text" />\n  </label>\n\n  \x3c!-- \u4f7f\u7528fieldset\u548clegend --\x3e\n  <fieldset>\n    <legend>Favorite animal</legend>\n    <div>\n      <label>\n        <input type="radio" name="animals" />\n        Dog\n      </label>\n    </div>\n    <div>\n      <label>\n        <input type="radio" name="animals" />\n        Cat\n      </label>\n    </div>\n    <div>\n      <label>\n        <input type="radio" name="animals" />\n        Polar bear\n      </label>\n    </div>\n  </fieldset>\n  <div class="label-wrap">\n    \x3c!-- \u52a0\u4e0alabel for --\x3e\n    <label for="hometown"> Hometown </label>\n  </div>\n  \x3c!-- \u52a0\u4e0a id --\x3e\n  <div class="input-wrap">\n    <input type="text" id="hometown" />\n  </div>\n</form>\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528-aria-label"},"\u4f7f\u7528 aria-label"),(0,l.kt)("p",null,"\u6709\u6642\u5019 HTML \u5143\u7d20\u6c92\u6709\u5f88\u6e05\u695a\u7684\u63cf\u8ff0\uff0c\u4f8b\u5982\uff1atodo list \u7684 Add \u6309\u9215\uff0c\u5be6\u969b\u4e0a\u529f\u80fd\u662f\u300c\u65b0\u589e todo\u300d\uff0c\u53ef\u4ee5\u900f\u904e aria-label"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<button class="btn btn-outline" aria-label="add todo">+</button>\n')),(0,l.kt)("p",null,"\u53c8\u6216\u8005\u662f\u9801\u9762\u4e2d\u6709\u8a31\u591a\u7684 Add \u6309\u9215\uff0c\u9ede\u64ca\u4e0b\u53bb\u53ef\u4ee5\u6dfb\u52a0\u96fb\u5f71\u81f3\u9858\u671b\u6e05\u55ae\u4e2d\uff0c\u9019\u6642\u5019\u53ef\u4ee5\u900f\u904e aria-label \u52a0\u4e0a\u66f4\u591a\u7684\u6587\u5b57\u63cf\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const MovieToolbarButton = ({ movieTitle, buttonText, clickHandler }) => {\n  return (\n    <button\n      className="btn btn-outline-light"\n      // \u52a0\u4e0a\u65b0\u589e\u7684\u7d30\u7bc0\u63cf\u8ff0\n      aria-label={`Add ${buttonText}`}\n      onClick={clickHandler}\n    >\n      {buttonText}\n    </button>\n  );\n};\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528-aria-labelledby"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h2"},"aria-labelledby")),(0,l.kt)("p",null,"\u7576\u5e0c\u671b\u5c07\u591a\u500b\u6a19\u7c64\u7d44\u5408\u5728\u4e00\u8d77\u53c8\u6216\u8005\u662f\u70ba\u5340\u584a(widget)\u65b0\u589e\u6a19\u7c64\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-labelledby")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<p>No Movies in your Wish List! <Link to="/browse">Add some</Link>!</p>\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0 ",(0,l.kt)("inlineCode",{parentName:"p"},"p")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Link")," \u6a19\u7c64\u662f\u76f8\u95dc\u806f\u7684\uff0c\u9019\u6642\u5019\u53ef\u4ee5\u8abf\u6574\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div aria-labelledby="no-movies add-link">\n  <span id="no-movies">No Movies in your Wish List!</span><Link id="add-link" to="/browse">Add some!</Link>\n</div>\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528-aria-describedby"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h2"},"aria-describedby")),(0,l.kt)("p",null,"\u985e\u4f3c\u65bc aria-labelledby \uff0c\u53ef\u7528\u65bc\u63d0\u4f9b\u91cd\u8981\u7684\u4f7f\u7528\u7d30\u7bc0\u6216\u6307\u793a\u3002\u4f8b\u5982\uff1a\u8868\u55ae\u4e2d input \u7684\u63d0\u793a\u8a0a\u606f\u548c\u932f\u8aa4\u8a0a\u606f\uff0c\u9019\u6642\u5019\u79fb\u52d5\u5230 input \u6642\uff0c\u932f\u8aa4\u8a0a\u606f\u548c\u63d0\u793a\u8a0a\u606f\u662f\u4e0d\u6703\u88ab\u95b1\u8b80\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const FormInput = ({\n  id,\n  type,\n  name,\n  label,\n  errorText,\n  helperText,\n  onChange,\n  isValid,\n}) => {\n  const inputClasses = `form-control ${!isValid ? "is-invalid" : ""}`;\n\n  return (\n    <div className="form-group">\n      <label htmlFor={id}>{label}</label>\n      <input\n        id={id}\n        type={type}\n        name={name}\n        className={inputClasses}\n        onChange={onChange}\n      />\n      {helperText && (\n        <small className="form-text text-muted helper-text">{helperText}</small>\n      )}\n      {errorText && <div className="invalid-feedback">{errorText}</div>}\n    </div>\n  );\n};\n')),(0,l.kt)("p",null,"\u9019\u6642\u5019\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-describedby"),"\uff0c\u5982\u6b64 input focus \u6642\u932f\u8aa4\u8a0a\u606f\u548c\u63d0\u793a\u8a0a\u606f\u6703\u88ab\u95b1\u8b80\u51fa\u4f86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const FormInput = ({\n  id,\n  type,\n  name,\n  label,\n  errorText,\n  helperText,\n  onChange,\n  isValid,\n}) => {\n  const inputClasses = `form-control ${!isValid ? "is-invalid" : ""}`;\n  // \u52a0\u4e0a helperId \u548c errorId\n  const helperId = helperText ? `${id}-helper` : "";\n  const errorId = errorText && !isValid ? `${id}-error` : "";\n\n  return (\n    <div className="form-group">\n      <label htmlFor={id}>{label}</label>\n      <input\n        id={id}\n        type={type}\n        name={name}\n        className={inputClasses}\n        onChange={onChange}\n        aria-describedby={`${helperId} ${errorId}`}\n      />\n      {helperText && (\n        <small id={helperId} className="form-text text-muted helper-text">\n          {helperText}\n        </small>\n      )}\n      {errorText && (\n        <div id={errorId} className="invalid-feedback">\n          {errorText}\n        </div>\n      )}\n    </div>\n  );\n};\n')),(0,l.kt)("h2",{id:"aria-live-aria-atomic-\u548c-aria-relevant"},(0,l.kt)("inlineCode",{parentName:"h2"},"aria-live"),", ",(0,l.kt)("inlineCode",{parentName:"h2"},"aria-atomic")," \u548c ",(0,l.kt)("inlineCode",{parentName:"h2"},"aria-relevant")),(0,l.kt)("p",null,"\u7576\u9801\u9762\u7684\u5167\u5bb9\u767c\u751f\u52d5\u614b\u8b8a\u5316\u6642\uff0c\u5c0d\u65bc\u8996\u529b\u6b63\u5e38\u7684\u4f7f\u7528\u8005\u4f86\u8aaa\u662f\u5f88\u660e\u986f\u7684\uff0c\u4f46\u5c0d\u65bc\u8996\u969c\u8005\u4f86\u8aaa\u53ef\u80fd\u4e26\u4e0d\u660e\u986f\uff0c\u9019\u6642\u5019\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u5c6c\u6027\u4f86\u8abf\u6574"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aria-live"),": \u5b9a\u7fa9\u87a2\u5e55\u95b1\u8b80\u5668\u8b80\u53d6\u5340\u57df\u66f4\u65b0\u7684\u512a\u5148\u9806\u5e8f\uff0c\u503c\u5305\u62ec\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"off: \u9810\u8a2d\u8a2d\u5b9a\uff0c\u4e0d\u6703\u8b80\u53d6\u8a72\u5340\u57df\u7684\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"polite: \u4e00\u65e6\u7a7a\u9591\uff0c\u87a2\u5e55\u95b1\u8b80\u5668\u5c07\u7b49\u5f85\u8b80\u53d6\u8a72\u5340\u57df\u7684\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"assertive: \u87a2\u5e55\u95b1\u8b80\u5668\u6703\u4e2d\u65b7\u76ee\u524d\u6b63\u5728\u95b1\u8b80\u7684\u5167\u5bb9\uff0c\u4ee5\u8b80\u53d6\u8a72\u5340\u57df\u7684\u66f4\u65b0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aria-atomic"),": \u87a2\u5e55\u95b1\u8b80\u5668\u662f\u5426\u61c9\u59cb\u7d42\u5c07\u6d3b\u52d5\u5340\u70ba\u5448\u73fe\u70ba\u4e00\u500b\u6574\u9ad4\uff0c\u5373\u4f7f\u53ea\u6709\u90e8\u5206\u5340\u57df\u767c\u751f\u8b8a\u5316"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aria-relevant"),": \u5217\u51fa\u54ea\u7a2e\u8b8a\u66f4\u985e\u578b\u6703\u89f8\u767c(\u9810\u8a2d\u70ba additions text)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"additions:\u5340\u57df\u5167\u63d2\u5165\u4efb\u4f55\u7bc0\u9ede"),(0,l.kt)("li",{parentName:"ul"},"removals: \u5340\u57df\u5167\u522a\u9664\u4efb\u4f55\u7bc0\u9ede"),(0,l.kt)("li",{parentName:"ul"},"text: \u5340\u57df\u5167\u6587\u5b57\u7684\u8b8a\u66f4"),(0,l.kt)("li",{parentName:"ul"},"all: \u7b49\u65bc additions removals text")))),(0,l.kt)("h2",{id:"\u9801\u9762\u6e32\u67d3\u5f8c\u7684-focus-\u8a2d\u5b9a"},"\u9801\u9762\u6e32\u67d3\u5f8c\u7684 focus \u8a2d\u5b9a"),(0,l.kt)("p",null,"\u4e00\u958b\u59cb\u9032\u5230\u9801\u9762\u6642\uff0c\u805a\u7126\u5728\u8a72\u9801\u9762\u7684 h1 title"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const Header = ({\n  title,\n  buttonText,\n  buttonLabel,\n  handleButtonClick,\n  doFocus,\n}) => {\n  // \u8a2d\u5b9a Ref\n  const headerRef = useRef(null);\n\n  // \u9801\u9762\u6e32\u67d3\u5f8c\uff0c\u57f7\u884c focus ref\n  useEffect(() => {\n    if (doFocus && headerRef && headerRef.current) {\n      headerRef.current.focus();\n    }\n  }, [doFocus]);\n\n  return (\n    <header>\n      <nav className="navbar navbar-dark">\n        <span className="navbar-brand">\n          //\u52a0\u4e0aref\u548ceslint disabled\n          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}\n          <h1 ref={headerRef} tabIndex={0}>\n            {title}\n          </h1>\n        </span>\n        <button\n          className="btn btn btn-outline-light"\n          onClick={handleButtonClick}\n          aria-label={buttonLabel}\n        >\n          {buttonText}\n        </button>\n      </nav>\n    </header>\n  );\n};\n')),(0,l.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://egghead.io/courses/develop-accessible-web-apps-with-react"},"egghead/Develop Accessible Web Apps with React")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/eggheadio-projects/start-building-accessible-web-applications-today"},"eggheadio-projects"))))}u.isMDXComponent=!0}}]);