(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{1123:function(e,t,a){"use strict";a.r(t);var c=a(181),o=a(1),n=a(663),i=a.n(n),r=a(78),s=a(77),u=a(24);t.default=function(e){var t=e.match,a=Object(o.useState)(null),n=Object(c.a)(a,2),l=n[0],d=n[1],p=Object(r.c)(s.e).token;return Object(o.useEffect)((function(){i.a.post("http://3.109.126.116//api/ultiModealTeam/listingAllProducts",{createdBy:t.params.id},{headers:{Authorization:"Bearer ".concat(p)}}).then((function(e){d(e.data.vendor),console.log(e)})).catch((function(e){console.log(e)}))}),[p,t.params.id]),console.log(l),Object(u.jsx)("div",{children:t.params.id})}}}]);
//# sourceMappingURL=25.1e54d8b0.chunk.js.map