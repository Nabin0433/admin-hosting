(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[38],{1126:function(e,t,c){"use strict";c.r(t);var n=c(181),s=c(1),r=c(23),a=c(659),i=c(662),u=c.n(i),o=c(78),l=c(77),j=c(24),d=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};t.default=function(){var e=Object(s.useState)(null),t=Object(n.a)(e,2),c=t[0],i=t[1],b=Object(s.useState)("Users"),h=Object(n.a)(b,2),O=h[0],f=h[1],p=Object(o.c)(l.e).token,g=Object(r.f)(),m=Object(r.g)().search.match(/page=([0-9]+)/,""),x=Number(m&&m[1]?m[1]:1),v=Object(s.useState)(x),w=Object(n.a)(v,2),S=w[0],U=w[1];Object(s.useEffect)((function(){var e;e="Users"===O?"/api/auth/userDetails":"/api/auth/adminDetails",u.a.get("http://3.110.91.117"+e,{headers:{Authorization:"Bearer ".concat(p)}}).then((function(e){var t="Users"===O?e.data.user:e.data.ultiModealTeam;i(t)})).catch((function(e){console.log(e)}))}),[O,p]);return Object(s.useEffect)((function(){x!==S&&U(x)}),[x,S]),Object(j.jsx)(a.U,{children:Object(j.jsx)(a.o,{xl:12,children:Object(j.jsxs)(a.i,{children:[Object(j.jsx)(a.m,{children:Object(j.jsxs)("select",{onChange:function(e){return f(e.target.value)},children:[Object(j.jsx)("option",{value:"Users",children:"Users"}),Object(j.jsx)("option",{value:"Admin",children:"Admins"})]})}),Object(j.jsxs)(a.j,{children:[Object(j.jsx)(a.r,{items:c,fields:["SiNo",{key:"email",_classes:"font-weight-bold"},"phone","registered","role"],hover:!0,striped:!0,itemsPerPage:10,activePage:S,clickableRows:!0,onRowClick:function(e){return g.push("Users"===O?"/users/".concat(e._id):"/admin/".concat(e._id))},scopedSlots:{status:function(e){return Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{color:d(e.status),children:e.status})})},SiNo:function(e,t){return Object(j.jsx)("td",{children:t+1})}}}),Object(j.jsx)(a.S,{activePage:S,onActivePageChange:function(e){x!==e&&g.push("/users?page=".concat(e))},pages:2,doubleArrows:!1,align:"center"})]})]})})})}}}]);
//# sourceMappingURL=38.1c1650aa.chunk.js.map