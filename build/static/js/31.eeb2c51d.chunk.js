(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{1111:function(e,t,r){"use strict";r.r(t);var a=r(181),n=r(660),s=r(1),c=r(23),i=r(78),d=r(663),o=r.n(d),u=r(77),p=r(24),l=function(e){switch(e){case"Complited":return"success";case"Pending":return"danger";default:return"primary"}};t.default=function(){var e=Object(i.c)(u.e),t=e.role,r=e.token,d=Object(c.f)(),m=Object(s.useState)(),h=Object(a.a)(m,2),j=h[0],f=h[1];Object(s.useEffect)((function(){var e;r&&(e="admin"===t?"/api/order/admin-getCustomerOrders":"vendor"===t?"/api/vendor/product/user-order-history":e,o.a.get("http://3.109.126.116"+e,{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){b(e.data.orders)})).catch((function(e){console.log(e)})))}),[r]);var b=function(e){var r;"admin"===t&&(r=e.map((function(e){return{name:e.shipping.name,address:e.shipping.address,price:e.totalAmount,date:e.createdAt,status:e.paymentStatus,id:e._id,payment:e.paymentType}}))),"vendor"===t&&(r=e.map((function(e){return{name:e.name,address:e.address,price:e.price,date:e.createdAt,status:e.paymentStatus,id:e._id,payment:e.paymentType}}))),f(r)};return Object(p.jsx)(n.U,{children:Object(p.jsx)(n.o,{xl:12,children:Object(p.jsxs)(n.i,{children:[Object(p.jsx)(n.m,{children:"Orders"}),Object(p.jsx)(n.j,{children:Object(p.jsx)(n.r,{items:j,fields:[{key:"name",_classes:"font-weight-bold"},"address","price","payment","date",{key:"Status",label:"",_style:{width:"10%"},sorter:!1,filter:!1}],sorter:!0,columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,pagination:!0,hover:!0,itemsPerPage:20,clickableRows:!0,onRowClick:function(e){"admin"===t&&d.push("/order/".concat(e.id))},scopedSlots:{Status:function(e){return Object(p.jsx)("td",{children:Object(p.jsx)(n.b,{color:l(e.status),children:e.status})})}}})})]})})})}}}]);
//# sourceMappingURL=31.eeb2c51d.chunk.js.map