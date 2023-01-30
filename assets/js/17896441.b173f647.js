"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7918],{1264:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(7294),l=a(6010),r=a(3783),s=a(6742),o=a(4973);const i=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(2263),d=a(907),m=a(941);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,c.Z)(),{pluginId:r}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,m.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:i}=(0,d.Jo)(r),u=o??(v=i).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:i.label,to:u.path,onClick:()=>s(i.name)})))}const E=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(v,{versionMetadata:t}):n.createElement(n.Fragment,null)};var b=a(1217);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(7462);const k="iconEdit_mS5F",L=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(k,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function Z(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(L,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T=a(7211);const U="tags_NBRY",y="tag_F03v";function C(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(U,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:y},n.createElement(T.Z,{name:t,permalink:a}))}))))}const w="lastUpdated_mt2f";function A(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(C,e)))}function M(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",w)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function S(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:i,tags:c}=a,d=c.length>0,u=!!(r||s||i);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(A,{tags:c}),u&&n.createElement(M,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:o})):n.createElement(n.Fragment,null)}function B(e){const t=e.getBoundingClientRect();return t.top===t.bottom?B(e.parentNode):t}function x(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>B(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(B(n))?n:a[a.indexOf(n)-1]??null}return a[a.length-1]}function F(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,m.LU)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const O=function(e){const t=(0,n.useRef)(void 0),a=F();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),r=x({anchorTopOffset:a.current}),s=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(l)),e.classList.add(l),t.current=e}else e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,a])},V="tableOfContents_vrFS",I="table-of-contents__link",R={linkClassName:I,linkActiveClassName:"table-of-contents__link--active"};function D(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:I,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(D,{isChild:!0,toc:e.children}))))):null}const z=function(e){let{toc:t}=e;return O(R),n.createElement("div",{className:(0,l.Z)(V,"thin-scrollbar")},n.createElement(D,{toc:t}))},H="tocCollapsible_aw-L",q="tocCollapsibleButton_zr6a",P="tocCollapsibleContent_0dom",W="tocCollapsibleExpanded_FSiv";function $(e){let{toc:t,className:a}=e;const{collapsed:r,toggleCollapsed:s}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(H,{[W]:!r},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",q),onClick:s},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:P,collapsed:r},n.createElement(D,{toc:t})))}var J=a(6159);const Y="docItemContainer_oiyr",K="docItemCol_zHA2",X="tocMobile_Tx6Y";function j(e){const{content:t,versionMetadata:a}=e,{metadata:s,frontMatter:o}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:h}=o,{description:p,title:v}=s,g=!u&&void 0===t.contentTitle,f=(0,r.Z)(),_=!h&&t.toc&&t.toc.length>0,N=_&&("desktop"===f||"ssr"===f);return n.createElement(n.Fragment,null,n.createElement(b.Z,{title:v,description:p,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[K]:!h})},n.createElement(E,{versionMetadata:a}),n.createElement("div",{className:Y},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),_&&n.createElement($,{toc:t.toc,className:(0,l.Z)(m.kM.docs.docTocMobile,X)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},g&&n.createElement(J.N,null,v),n.createElement(t,null)),n.createElement(S,e)),n.createElement(i,{metadata:s}))),N&&n.createElement("div",{className:"col col--3"},n.createElement(z,{toc:t.toc,className:m.kM.docs.docTocDesktop}))))}},6159:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),s=a(4973),o=a(941);const i="anchorWithStickyNavbar_y2LR",c="anchorWithHideOnScrollNavbar_3ly5",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...n}=e;const{navbar:{hideOnScroll:d}}=(0,o.LU)();return a?l.createElement(t,n,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,r.Z)("anchor",`anchor__${t}`,{[c]:d,[i]:!d}),id:a}),n.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,n)});var t}},7211:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(6742);const s="tag_WK-t",o="tagRegular_LXbV",i="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,{[o]:!c,[i]:c})},a,c&&n.createElement("span",null,c))}}}]);