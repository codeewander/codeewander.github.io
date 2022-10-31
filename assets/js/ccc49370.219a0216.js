"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{6165:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7294),r=a(6010),l=a(6698),o=a(6742);const s="sidebar_q+wC",i="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",m="sidebarItem_cjdF",d="sidebarItemLink_zyXk",u="sidebarItemLinkActive_wcJs";var g=a(4973);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(i,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((e=>n.createElement("li",{key:e.permalink,className:m},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))))))}var h=a(571);const E=function(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return n.createElement(l.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},i&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},n.createElement(h.Z,{toc:a})))))}},4884:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(7294),r=a(6010),l=a(3905),o=a(4973),s=a(6742),i=a(4996),c=a(941),m=a(6845),d=a(6146);const u="blogPostTitle_d4p0",g="blogPostData_-Im+",p="blogPostDetailsFull_xD8n";var h=a(7682);const E="image_9q7L";const v=function(e){let{author:t}=e;const{name:a,title:r,url:l,imageURL:o}=t;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:E,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},b="authorCol_8c0z";function f(e){let{authors:t,assets:a}=e;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>n.createElement("div",{className:(0,r.Z)("col col--6",b),key:t},n.createElement(v,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const _=function(e){const t=function(){const{selectMessage:e}=(0,c.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.C)(),{children:E,frontMatter:v,assets:b,metadata:_,truncated:N,isBlogPostPage:Z=!1}=e,{date:k,formattedDate:P,permalink:y,tags:w,readingTime:T,title:L,editUrl:C,authors:I}=_,x=b.image??v.image;return n.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=Z?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:u,itemProp:"headline"},Z?L:n.createElement(s.Z,{itemProp:"url",to:y},L)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==T&&n.createElement(n.Fragment,null," \xb7 ",t(T))),n.createElement(f,{authors:I,assets:b}))})(),x&&n.createElement("meta",{itemProp:"image",content:a(x,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},E)),(w.length>0||N)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[p]:Z})},w.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!Z})},n.createElement(h.Z,{tags:w})),Z&&C&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:C})),!Z&&N&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(s.Z,{to:_.permalink,"aria-label":`Read more about ${L}`},n.createElement("b",null,n.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4147:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7294),r=a(1217),l=a(6165),o=a(4884),s=a(4973),i=a(6742);const c=function(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var m=a(941);const d=function(e){const{content:t,sidebar:a}=e,{frontMatter:s,assets:i,metadata:d}=t,{title:u,description:g,nextItem:p,prevItem:h,date:E,tags:v,authors:b}=d,{hide_table_of_contents:f,keywords:_}=s,N=i.image??s.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:a,toc:!f&&t.toc?t.toc:void 0},n.createElement(r.Z,{title:u,description:g,keywords:_,image:N},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:E}),b.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:b.map((e=>e.url)).filter(Boolean).join(",")}),v.length>0&&n.createElement("meta",{property:"article:tag",content:v.map((e=>e.label)).join(",")})),n.createElement(o.Z,{frontMatter:s,assets:i,metadata:d,isBlogPostPage:!0},n.createElement(t,null)),(p||h)&&n.createElement(c,{nextItem:p,prevItem:h}))}},6146:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),r=a(4973),l=a(7462),o=a(6010);const s="iconEdit_mS5F",i=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(941);function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(i,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{a.d(t,{r:()=>g,Z:()=>p});var n=a(7294),r=a(6010),l=a(941);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>o(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(n))?n:a[a.indexOf(n)-1]??null}return a[a.length-1]}function i(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.LU)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){const t=(0,n.useRef)(void 0),a=i();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=s({anchorTopOffset:a.current}),o=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_vrFS",d="table-of-contents__link",u={linkClassName:d,linkActiveClassName:"table-of-contents__link--active"};function g(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))))):null}const p=function(e){let{toc:t}=e;return c(u),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},7211:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(6010),l=a(6742);const o="tag_WK-t",s="tagRegular_LXbV",i="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(l.Z,{href:t,className:(0,r.Z)(o,{[s]:!c,[i]:c})},a,c&&n.createElement("span",null,c))}},7682:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(6010),l=a(4973),o=a(7211);const s="tags_NBRY",i="tag_F03v";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i},n.createElement(o.Z,{name:t,permalink:a}))}))))}}}]);