(this.webpackJsonpweb_editor=this.webpackJsonpweb_editor||[]).push([[0],{17:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),s=t(10),r=t.n(s),i=(t(17),t(7)),o=t(3),l=(t(18),t(19),t(20),t(21),t(22),t(11)),u=t(12),j=t(9),d=t(0);function b(e){var n=Object(c.useState)(!0),t=Object(o.a)(n,2),a=t[0],s=t[1],r=e.language,i=e.displayName,b=e.value,h=e.onChange;return Object(d.jsxs)("div",{className:"editor-container ".concat(a?"":"collapsed"),children:[Object(d.jsxs)("div",{className:"editor-title",children:[i,Object(d.jsx)("button",{className:"Expand-collapse-btn",onClick:function(){s((function(e){return!e}))},children:Object(d.jsx)(u.a,{icon:a?j.a:j.b})})]}),Object(d.jsx)(l.Controlled,{onBeforeChange:function(e,n,t){h(t)},value:b,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,theme:"material",mode:r,lineNumbers:!0}})]})}function h(e,n){var t="WebEditor"+e,a=Object(c.useState)((function(){var e=localStorage.getItem(t);return null!=e?JSON.parse(e):"function"===n?n():n})),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,i]}function O(e){return Object(d.jsxs)("div",{className:"files",children:[Object(d.jsx)("h3",{className:"title",children:"CODE EDITOR"}),Object(d.jsx)("hr",{className:"line"}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){return e.changeProps_func("html")},children:"index.html"}),Object(d.jsx)("button",{onClick:function(){return e.changeProps_func("css")},children:"index.css"}),Object(d.jsx)("button",{onClick:function(){return e.changeProps_func("js")},children:"index.js"})]})]})}var m=function(){var e=h("html",'\x3c!--You can add all your HTML code here--\x3e\n<div class="center">\n  <h1> Hello! peeps</h1>\n  <h3>Edit Html Css and Js files here and check the output live here</h3>\n</div>'),n=Object(o.a)(e,2),t=n[0],a=n[1],s=h("css","/*You can add all your css here*/\n  .center{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    color:white;\n}\nbody{\n    background-color: #66b9ca;\n}\n"),r=Object(o.a)(s,2),l=r[0],u=r[1],j=h("js","//You can add all your JS code here"),m=Object(o.a)(j,2),f=m[0],p=m[1],x=Object(c.useState)(""),g=Object(o.a)(x,2),v=g[0],N=g[1],y={language:"xml",displayName:"index.html",value:t,onChange:a},C=h("output",1),S=Object(o.a)(C,2),k=S[0],w=S[1];Object(c.useEffect)((function(){var e=setTimeout((function(){N("\n    <html>\n      <body> ".concat(t," </body>\n      <style> ").concat(l," </style>\n      <script> ").concat(f," <\/script> \n    </html> "))}),300);return function(){clearTimeout(e)}}),[t,l,f]);var E={language:"css",displayName:"index.css",onChange:u,value:l},J={language:"javascript",displayName:"index.js",value:f,onChange:p},_="";return 1===k?_=Object(d.jsx)(b,Object(i.a)({},y)):2===k?_=Object(d.jsx)(b,Object(i.a)({},E)):3===k&&(_=Object(d.jsx)(b,Object(i.a)({},J))),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"pane top-pane",children:[Object(d.jsx)(O,{changeProps_func:function(e){"html"===e?w(1):"css"===e?w(2):"js"===e&&w(3)}}),_]}),Object(d.jsx)("div",{className:"pane",children:Object(d.jsx)("iframe",{srcDoc:v,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.042f57ea.chunk.js.map