"use strict";(self.webpackChunkghiteub=self.webpackChunkghiteub||[]).push([[2859],{3905:(A,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>p});var o=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,o,n=function(A,e){if(null==A)return{};var t,o,n={},r=Object.keys(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var s=o.createContext({}),g=function(A){var e=o.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},l=function(A){var e=g(A.components);return o.createElement(s.Provider,{value:e},A.children)},c={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(A,e){var t=A.components,n=A.mdxType,r=A.originalType,s=A.parentName,l=i(A,["components","mdxType","originalType","parentName"]),u=g(t),p=n,d=u["".concat(s,".").concat(p)]||u[p]||c[p]||r;return t?o.createElement(d,a(a({ref:e},l),{},{components:t})):o.createElement(d,a({ref:e},l))}));function p(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var r=t.length,a=new Array(r);a[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=A,i.mdxType="string"==typeof A?A:n,a[1]=i;for(var g=2;g<r;g++)a[g]=t[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3494:(A,e,t)=>{t.r(e),t.d(e,{Highlight:()=>l,assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var o=t(7462),n=(t(7294),t(3905));const r={sidebar_position:4},a="Markdown Features",i={unversionedId:"tutorial-basics/markdown-features",id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/fr/docs/tutorial-basics/markdown-features",draft:!1,editUrl:"https://github.com/ghiteub/docs/tutorial-basics/markdown-features.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/fr/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/fr/docs/tutorial-basics/deploy-your-site"}},s={},g=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],l=A=>{let{children:e,color:t}=A;return(0,n.kt)("span",{style:{backgroundColor:t,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${t} with label ${e}`)}},e)},c={toc:g,Highlight:l};function u(A){let{components:e,...r}=A;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,n.kt)("p",null,"Docusaurus supports ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,n.kt)("strong",{parentName:"p"},"additional features"),"."),(0,n.kt)("h2",{id:"front-matter"},"Front Matter"),(0,n.kt)("p",null,"Markdown documents have metadata at the top called ",(0,n.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/create-a-page).\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./create-a-page.md).\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/tutorial-basics/create-a-page"},"Create a page"),"."),(0,n.kt)("h2",{id:"images"},"Images"),(0,n.kt)("p",null,"Regular Markdown images are supported."),(0,n.kt)("p",null,"You can use absolute paths to reference images in the static directory (",(0,n.kt)("inlineCode",{parentName:"p"},"static/img/ghiteub.png"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/ghiteub.png)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus logo",src:t(2536).Z,width:"573",height:"555"})),(0,n.kt)("p",null,"You can reference images relative to the current file as well, as shown in ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/tutorial-extras/manage-docs-versions"},"the extra guides"),"."),(0,n.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,n.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,n.kt)("h2",{id:"admonitions"},"Admonitions"),(0,n.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,n.kt)("admonition",{title:"My tip",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,n.kt)("admonition",{title:"Take care",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This action is dangerous")),(0,n.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,n.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,n.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,n.kt)("p",null,"This is ",(0,n.kt)(l,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,n.kt)("p",null,"This is ",(0,n.kt)(l,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}u.isMDXComponent=!0},2536:(A,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/png;base64,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"}}]);