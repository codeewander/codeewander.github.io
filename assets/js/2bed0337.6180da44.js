"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),k=o,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(3117),o=(n(7294),n(3905));const a={id:"githubActions",title:"GitHub Actions",keywords:["github","CI/CD"]},l=void 0,i={unversionedId:"devops/githubActions",id:"devops/githubActions",title:"GitHub Actions",description:"\u900f\u904e GitHub Actions \u53ef\u4ee5\u91dd\u5c0d repository \u57f7\u884cCI/CD",source:"@site/docs/devops/githubAction.md",sourceDirName:"devops",slug:"/devops/githubActions",permalink:"/docs/devops/githubActions",draft:!1,tags:[],version:"current",frontMatter:{id:"githubActions",title:"GitHub Actions",keywords:["github","CI/CD"]},sidebar:"Docs",previous:{title:"\u8a8d\u8b58 React Hook",permalink:"/docs/react/react-hook"},next:{title:"VSCode Remote-SSH with Azure",permalink:"/docs/remote-SSH"}},s={},u=[{value:"CI/CD",id:"cicd",level:3},{value:"\u8a2d\u5b9a\u6b65\u9a5f",id:"\u8a2d\u5b9a\u6b65\u9a5f",level:3},{value:"\u89f8\u767c workflow",id:"\u89f8\u767c-workflow",level:3},{value:"\u77e9\u9663\u5efa\u7f6e\uff08build matrix)",id:"\u77e9\u9663\u5efa\u7f6ebuild-matrix",level:2},{value:"\u81ea\u8a02\u74b0\u5883\u8b8a\u6578\u548c\u6a5f\u5bc6\u8cc7\u8a0a(Secrets)",id:"\u81ea\u8a02\u74b0\u5883\u8b8a\u6578\u548c\u6a5f\u5bc6\u8cc7\u8a0asecrets",level:2},{value:"\u9810\u8a2d\u74b0\u5883\u8b8a\u6578",id:"\u9810\u8a2d\u74b0\u5883\u8b8a\u6578",level:2},{value:"\u6574\u5408 gitHub Actions \u548c Slack \u901a\u77e5",id:"\u6574\u5408-github-actions-\u548c-slack-\u901a\u77e5",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u900f\u904e GitHub Actions \u53ef\u4ee5\u91dd\u5c0d repository \u57f7\u884cCI/CD "),(0,o.kt)("h3",{id:"cicd"},"CI/CD"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CI: Continuous Integration \u6301\u7e8c\u6574\u5408 - \u5206\u652f\u7a0b\u5f0f\u78bc\u5408\u4f75\u81f3\u4e3b\u5206\u652f\u6642\uff0c\u9032\u884c\u7de8\u8b6f\u548c\u81ea\u52d5\u5316\u6e2c\u8a66"),(0,o.kt)("li",{parentName:"ul"},"CD: Continuous Delivery / Continuous Deployment \u6301\u7e8c\u4ea4\u4ed8/\u90e8\u7f72 - \u81ea\u52d5\u5316\u90e8\u7f72\u5230\u74b0\u5883")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/nIOL9X4.png",alt:null})),(0,o.kt)("h3",{id:"\u8a2d\u5b9a\u6b65\u9a5f"},"\u8a2d\u5b9a\u6b65\u9a5f"),(0,o.kt)("p",null,"\u5728\u5c08\u6848\u6839\u76ee\u9304\u65b0\u589e ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows")," \u8cc7\u6599\u593e\uff0c\u4e26\u5728\u8cc7\u6599\u593e\u4e0b\u65b0\u589e ",(0,o.kt)("inlineCode",{parentName:"p"},"xxx.yml")," \u6a94\u6848"),(0,o.kt)("p",null,"Github Actions \u6a94\u6848\u5167\u5bb9\u7531\u5e7e\u500b\u55ae\u4f4d\u7d44\u6210\uff0c\u7531\u5927\u81f3\u5c0f\u5206\u5225\u662f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Workflow -> Job -> Step -> Action\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Workflow"),": \u6574\u500b CI/CD \u904b\u884c\u7684\u904e\u7a0b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job"),"\uff1a \u4e00\u500b Workflow \u7531\u591a\u500b Job \u7d44\u6210"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step"),": \u4e00\u500b Job \u7531\u591a\u500b Step \u7d44\u6210"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Action"),": \u4e00\u500b Step \u4e0b\u53ef\u4ee5\u57f7\u884c\u591a\u500b Action ")),(0,o.kt)("p",null,"\u7bc4\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# .github/workflows/xxx.yml\n \n# workflow \u7684\u540d\u7a31\uff0c\u6703\u5728 Github Action \u9801\u9762\u4e0a\u986f\u793a\u7684\u540d\u7a31\uff08optional\uff0c\u9810\u8a2d\u4f7f\u7528.yml\u6a94\u7684\u6a94\u540d\uff09\nname: CI\n\n# workflow \u7684\u89f8\u767c\u689d\u4ef6 - \u7576 push \u5230 master \u6642\u89f8\u767c\non: \n  push: \n    - master \n\njobs:\n  # job \u7684\u540d\u7a31\u70ba build\n  build:\n    # runs-on \u6307\u5b9a\u8981\u904b\u884c\u7684\u74b0\u5883\n    runs-on: ubuntu-latest\n    # steps \u5b9a\u7fa9 build job \u7684\u6b65\u9a5f \n    steps:\n      # \u7b2c\u4e00\u6b65 Checkout - \u4f7f\u7528\u5176\u4ed6\u958b\u767c\u8005\u6703\u4e26\u767c\u4f48\u7684 action (\u4f7f\u7528 uses)\n      - name: Checkout\n      - uses: actions/checkout@v2\n        with:\n          node-version: 12.x\n      # \u6b65\u9a5f 2 - \u57f7\u884c script \n      - run: yarn install\n      # \u6b65\u9a5f 3 - \u57f7\u884c script\n      - run: yarn test\n \n")),(0,o.kt)("h3",{id:"\u89f8\u767c-workflow"},"\u89f8\u767c workflow"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows#triggering-a-workflow-with-events"},"Using workflows Doc")," @github")),(0,o.kt)("p",null,"\u5e38\u898b\u7684\u60c5\u5883\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Github repo \u7684\u4e8b\u4ef6\uff0c\u4f8b\u5982\u767c\u9001 commit\u3001\u767c\u4f48 issue \u6216\u5efa\u7acb pull request"),(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u671f\u7684\u6392\u7a0b"),(0,o.kt)("li",{parentName:"ul"},"\u5916\u90e8\u4e8b\u4ef6")),(0,o.kt)("p",null,"\u7bc4\u4f8b\uff1a\u5f9e Github \u624b\u52d5\u89f8\u767c workflow\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/v0rLnDm.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"on: \n  workflow_dispatch:\n    inputs:\n      # \u8f38\u5165\u53c3\u6578\n      logLevel:\n        description: 'Log level'     \n        required: true\n        default: 'warning'\n      # \u8f38\u5165\u53c3\u6578\n      tags:\n        description: 'Test scenario tags'  \n\n# \u53ef\u4ee5\u5c07\u4f7f\u7528\u8005\u8f38\u5165\u7684 input \u8a2d\u6210\u8b8a\u6578\njobs:\n  printInputs:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Set custom variable\n    # \u9700\u8981\u7d66 id\n    id: customize-var\n    - run: |\n        echo \"::set-output name=tags::${{ github.event.inputs.tags }}\"\n    - name: Add tag\n        uses: ncipollo/release-action@v1\n        with:\n          # \u900f\u904e id \u7684 outputs \u53d6\u5f97\u5ba2\u88fd\u5316\u8a2d\u5b9a\u7684\u8b8a\u6578\n          tag: ${{steps.customize-var.outputs.tags}}\n          generateReleaseNotes: true\n")),(0,o.kt)("h2",{id:"\u77e9\u9663\u5efa\u7f6ebuild-matrix"},"\u77e9\u9663\u5efa\u7f6e\uff08build matrix)"),(0,o.kt)("p",null,"\u900f\u904e\u8a2d\u5b9a\u77e9\u9663\u5efa\u7f6e\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u4f5c\u696d\u7cfb\u7d71\u3001\u5e73\u53f0\u548c\u8a9e\u7cfb\u74b0\u5883\u4e0b\u540c\u6642\u9032\u884c\u6e2c\u8a66"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs"},"Using matrix Doc")," @github")),(0,o.kt)("p",null,"\u7bc4\u4f8b\uff1a\u8a2d\u7f6e\u4f7f\u7528\u8005\u8f38\u5165\u7684 node \u7248\u672c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"on:\n  workflow_dispatch:\n    inputs:\n      version: \n        description: 'Node version'   \n\njobs:\n  example_matrix:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        version: ${{ github.event.inputs.version }}\n    steps:\n      - uses: actions/setup-node@v3\n        with:\n          node-version: ${{ matrix.version }}\n")),(0,o.kt)("h2",{id:"\u81ea\u8a02\u74b0\u5883\u8b8a\u6578\u548c\u6a5f\u5bc6\u8cc7\u8a0asecrets"},"\u81ea\u8a02\u74b0\u5883\u8b8a\u6578\u548c\u6a5f\u5bc6\u8cc7\u8a0a(Secrets)"),(0,o.kt)("p",null,"\u5728 Github Repository \u7684 Settings \u9801\u7c64\u53ef\u4ee5\u627e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Environments")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Secrets")," \u7684 tab\uff0c\u53ef\u4ee5\u5728\u6b64\u65b0\u589e\u8b8a\u6578\u3002 Environments \u53ef\u4ee5\u65b0\u589e\u74b0\u5883\uff0c\u4e26\u8a2d\u5b9a\u4e0d\u540c\u74b0\u5883\u4e0b\u7684 Secrets \uff0c\u800c Secrets \u5247\u4e0d\u5206\u74b0\u5883\u8a2d\u5b9a\u654f\u611f\u8cc7\u8a0a(\u4f8b\u5982\uff1a\u5bc6\u78bc\u6216 token)\u3002 "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"GitHub Repo -> Settings \u2192 Secrets \u2192 Actions \u4e2d\u8a2d\u5b9a secret")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Secrets"),": \u900f\u904e",(0,o.kt)("inlineCode",{parentName:"li"},"${{ secrets.name }}"),"\u53d6\u5f97\uff0c\u4f8b\u5982\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"steps:\n  - name: Hello world action\n    with: \n      API_SECRET: ${{ secrets.APISecret }}\n")),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," \u6a94\u76f4\u63a5\u8a2d\u5b9a\u516c\u958b\u7684\u74b0\u5883\u8b8a\u6578"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u81ea\u8a02\u74b0\u5883\u8b8a\u6578")," "),(0,o.kt)("li",{parentName:"ul"},"\u74b0\u5883\u8b8a\u6578\u5340\u5206\u5927\u5c0f\u5beb (case-sensitive)"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u5728\u5168\u57df\u3001job\u3001step \u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"env")," \u8b8a\u6578\u9032\u884c\u8a2d\u5b9a\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"$NAME")," \u53d6\u5f97\uff0c\u4e5f\u53ef\u5728 if \u5224\u65b7\u5f0f\u4e2d\u4f7f\u7528 ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'name: Greeting on variable day\n\non:\n  workflow_dispatch\n\nenv:\n  DAY_OF_WEEK: Monday\n\njobs:\n  greeting_job:\n    runs-on: ubuntu-latest\n    env:\n      Greeting: Hello\n    steps:\n      - name: "Say Hello Mona it\'s Monday"\n        if: ${{ env.DAY_OF_WEEK == \'Monday\' }}\n        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK"\n        env:\n          First_Name: Mona\n')),(0,o.kt)("h2",{id:"\u9810\u8a2d\u74b0\u5883\u8b8a\u6578"},"\u9810\u8a2d\u74b0\u5883\u8b8a\u6578"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables"},"Default environment variables Doc")," @github")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GITHUB_ACTOR"),": \u4f7f\u7528\u8005\u540d\u7a31"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GITHUB_REF"),":  \u7576\u4e0b\u6240\u5728\u5206\u652f/\u6a19\u7c64 ex: refs/heads/develop , ref/tags/tag_name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GITHUB_REF_NAME"),": \u7e2e\u5beb\u7576\u4e0b\u6240\u5728\u5206\u652f/\u6a19\u7c64\u540d\u7a31 ex: develop")),(0,o.kt)("h2",{id:"\u6574\u5408-github-actions-\u548c-slack-\u901a\u77e5"},"\u6574\u5408 gitHub Actions \u548c Slack \u901a\u77e5"),(0,o.kt)("p",null,"\u76ee\u6a19: \u5728\u958b\u59cb\u90e8\u7f72\u6642\u767c\u9001\u901a\u77e5\u5230 slack chanel "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# \u4f7f\u7528 8398a7/action-slack@v3 \u5957\u4ef6\n# text \u70ba\u767c\u9001\u5230 chanel \u7684\u6587\u5b57\u8a0a\u606f\n# \u5ba2\u88fd\u5316\u6b04\u4f4d(custom_payload)\u63d0\u4f9b\u90e8\u7f72\u74b0\u5883\u7684\u8cc7\u8a0a  \njobs:\n  build:\n    name: build\n    runs-on: ubuntu-latest\n    steps:\n      - uses: 8398a7/action-slack@v3\n        with:\n          status: custom\n          fields: repo,ref\n          custom_payload: |\n            {\n              attachments: [{\n                text: `:mega: Start deploying by ${{github.actor}}`,\n                fields: [{\n                  title: 'deploy environment',\n                  value: ${{github.ref == 'refs/heads/master'}} ? 'prod' : 'env',\n                  short: true\n                }]\n              }]\n            }  \n        env:\n        # \u9700\u8981 slack bot \u7684 webhook url \n          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://slack.com/help/articles/360041352714-Create-more-advanced-workflows-using-webhooks"},"\u5275\u5efaslack webhook"))))}m.isMDXComponent=!0}}]);