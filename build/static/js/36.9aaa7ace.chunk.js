(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[36],{1114:function(e,t,c){"use strict";c.r(t);var n=c(181),r=c(1),i=c(660),a=c(669),s=c(78),j=c(663),o=c.n(j),d=c(77),l=c(24);t.default=function(e){var t=e.match,c=Object(r.useState)(null),j=Object(n.a)(c,2),u=j[0],b=j[1],h=Object(s.c)(d.e).token;Object(r.useEffect)((function(){o.a.get("http://3.109.126.116//api/auth/userDetails",{headers:{Authorization:"Bearer ".concat(h)}}).then((function(e){b(e.data.user)})).catch((function(e){console.log(e)}))}),[h]);var O=null===u||void 0===u?void 0:u.find((function(e){return e._id.toString()===t.params.id})),f=O?Object.entries(O):[["id",Object(l.jsxs)("span",{children:[Object(l.jsx)(a.a,{className:"text-muted",name:"cui-icon-ban"})," Not found"]})]];return Object(l.jsx)(i.U,{children:Object(l.jsx)(i.o,{lg:6,children:Object(l.jsxs)(i.i,{children:[Object(l.jsxs)(i.m,{children:["User id: ",t.params.id]}),Object(l.jsx)(i.j,{children:Object(l.jsx)("table",{className:"table table-striped table-hover",children:Object(l.jsx)("tbody",{children:f.map((function(e,t){var c=Object(n.a)(e,2),r=c[0],i=c[1];return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"".concat(r,":")}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:i})})]},t.toString())}))})})})]})})})}}}]);
//# sourceMappingURL=36.9aaa7ace.chunk.js.map