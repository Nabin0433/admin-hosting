(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{1138:function(e,t,n){"use strict";n.r(t);var i=n(79),o=n(181),c=n(659),a=n(1),s=n(686),r=n.n(s),l=n(726),u=n.n(l),d=n(662),j=n.n(d),b=n(78),p=n(77),h=n(24);t.default=function(){var e,t,n=Object(a.useState)(!0),s=Object(o.a)(n,2),l=s[0],d=s[1],v=Object(b.c)(p.e),m=Object(a.useState)(""),O=Object(o.a)(m,2),x=O[0],f=O[1],g=Object(a.useState)(!1),y=Object(o.a)(g,2),C=y[0],k=y[1],N=Object(a.useState)(!1),S=Object(o.a)(N,2),w=S[0],_=S[1],T=Object(a.useState)(),L=Object(o.a)(T,2),D=L[0],A=L[1],R="http://3.110.91.117",F=Object(a.useState)(null),P=Object(o.a)(F,2),B=P[0],E=P[1],z=function(e){setTimeout((function(){E(null)}),e)};return Object(a.useEffect)((function(){j.a.get(R+"/api/coupons/list",{headers:{Authorization:"Bearer ".concat(null===v||void 0===v?void 0:v.token)}}).then((function(e){f(e.data.coupon),d(!1)})).catch((function(e){var t,n;d(!1),E({type:"error",massage:null!==(t=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data.message)&&void 0!==t?t:"erorr on server"}),z(5e3)}))}),[C,v]),Object(h.jsxs)("div",{children:[Object(h.jsxs)(c.i,{className:"p-4",children:[Object(h.jsx)(c.n,{children:"Avaliable Coupons : "}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)(c.f,{style:{float:"left"},color:"danger",onClick:function(){return _(!w)},disabled:!0,children:"Delete All Coupon"}),Object(h.jsx)(c.f,{style:{float:"right"},variant:"outline",color:"success",onClick:function(){return _(!w)},children:"Add Coupon"})]}),Object(h.jsx)("hr",{}),Object(h.jsx)(c.r,{tableFilter:!0,loading:l,items:x,fields:[{key:"SiNo.",_style:{width:"4%"}},{key:"couponCodeName",_style:{width:"12%"}},{key:"discount",_style:{width:"10%"}},{key:"couponLimit",_style:{width:"10%"}},{key:"discountStatus",_style:{width:"10%"}},{key:"validPriceRange",_style:{width:"10%"}},{key:"expirationTime",_style:{width:"10%"}},{key:"Edit",_style:{width:"5%"}},{key:"Delete",_style:{width:"5%"}}],hover:!0,sorter:!0,outlined:!0,scopedSlots:{"SiNo.":function(e,t){return Object(h.jsx)("td",{children:t+1},t)},expirationTime:function(e,t){return Object(h.jsxs)("td",{children:[new Date(parseInt(e.expirationTime)).toLocaleDateString(),"-",new Date(parseInt(e.expirationTime)).toLocaleTimeString()]},t)},Edit:function(e,t){return Object(h.jsx)("td",{children:Object(h.jsxs)(c.f,{className:"d-flex",variant:"outline",color:"success",onClick:function(){_(!0),A(e)},children:[Object(h.jsx)(u.a,{})," Edit"]})},t)},Delete:function(e,t){return Object(h.jsx)("td",{children:Object(h.jsxs)(c.f,{className:"d-flex",variant:"outline",color:"danger",onClick:function(){return t=e._id,void j.a.delete(R+"/api/coupon/"+t,{headers:{Authorization:"Bearer ".concat(null===v||void 0===v?void 0:v.token)}}).then((function(e){k(!C),A(""),E({type:"success",massage:e.data.message}),z(5e3)})).catch((function(e){E({type:"error",massage:e.response.data.message}),z(5e3)}));var t},children:[Object(h.jsx)(r.a,{})," Delete"]})},t)}}}),Object(h.jsx)("hr",{}),Object(h.jsxs)(c.L,{className:"sm-30",show:w,onClose:function(){return _(!1)},children:[Object(h.jsx)(c.O,{closeButton:!0,children:"Coupon Form"}),Object(h.jsxs)(c.M,{children:[Object(h.jsx)("label",{children:"CouponCodeName"}),Object(h.jsx)(c.F,{type:"text",name:"name",onChange:function(e){return A((function(t){return Object(i.a)(Object(i.a)({},t),{},{couponCodeName:e.target.value})}))},placeholder:"Name",value:null===D||void 0===D?void 0:D.couponCodeName}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Coupon Discount ( R.s)"}),Object(h.jsx)(c.F,{type:"number",name:"discount",onChange:function(e){return A((function(t){return Object(i.a)(Object(i.a)({},t),{},{discount:e.target.value})}))},placeholder:"discount",value:null===D||void 0===D?void 0:D.discount}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Coupon Limit"}),Object(h.jsx)(c.F,{type:"number",name:"couponLimit",onChange:function(e){return A((function(t){return Object(i.a)(Object(i.a)({},t),{},{couponLimit:e.target.value})}))},placeholder:"couponLimit",value:null===D||void 0===D?void 0:D.couponLimit}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Coupon ValidPriceRange ( R.s)"}),Object(h.jsx)(c.F,{type:"number",name:"name",onChange:function(e){return A((function(t){return Object(i.a)(Object(i.a)({},t),{},{validPriceRange:e.target.value})}))},placeholder:"validPriceRange",value:null===D||void 0===D?void 0:D.validPriceRange}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Coupon ExpirationTime ( DD/MM/YYYY)"}),Object(h.jsx)(c.F,{type:"date",name:"expirationTime",onChange:function(e){return A((function(t){return Object(i.a)(Object(i.a)({},t),{},{expirationTime:e.target.value})}))},placeholder:"time",value:null===(e=new Date(null===D||void 0===D?void 0:D.expirationTime))||void 0===e||null===(t=e.toJSON())||void 0===t?void 0:t.substring(0,10)}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"d-flex justify-content-start",children:[Object(h.jsx)("label",{children:"Coupon DiscountStatus"}),Object(h.jsx)(c.F,{style:{height:"20px",width:"20px",marginLeft:"40px"},type:"checkbox",defaultChecked:!0,name:"expirationTime",onChange:function(e){return A((function(t){return Object(i.a)(Object(i.a)({},t),{},{discountStatus:e.target.checked})}))},placeholder:"discountStatus",value:null===D||void 0===D?void 0:D.discountStatus})]})]}),Object(h.jsxs)(c.N,{children:[Object(h.jsx)(c.f,{onClick:function(){return _(!1)},color:"primary",children:"Cancel"}),Object(h.jsx)(c.f,{disabled:!(null===D||void 0===D?void 0:D.couponCodeName)||!(null===D||void 0===D?void 0:D.discount)||!(null===D||void 0===D?void 0:D.expirationTime)||!(null===D||void 0===D?void 0:D.couponLimit)||!(null===D||void 0===D?void 0:D.validPriceRange),onClick:(null===D||void 0===D?void 0:D._id)?function(){j.a.put(R+"/api/coupon/"+D._id,Object(i.a)({},D),{headers:{Authorization:"Bearer ".concat(null===v||void 0===v?void 0:v.token)}}).then((function(e){k(!C),_(!w),A(""),A({couponLimit:"",discountStatus:"",createdAt:"",updatedAt:"",_id:"",couponCodeName:"",discount:"",validPriceRange:"",expirationTime:"",__v:""}),E({type:"success",massage:e.data.message}),z(5e3)})).catch((function(e){E({type:"error",massage:e.response.data.message}),z(5e3)}))}:function(){j.a.post(R+"/api/coupon/create",Object(i.a)({},D),{headers:{Authorization:"Bearer ".concat(null===v||void 0===v?void 0:v.token)}}).then((function(e){k(!C),_(!1),A({couponLimit:"",discountStatus:"",couponCodeName:"",discount:"",validPriceRange:"",expirationTime:"'"}),E({type:"success",massage:e.data.message}),z(5e3)})).catch((function(e){E({type:"error",massage:e.response.data.message}),z(5e3)}))},color:"primary",children:"Add"})]})]})]}),"error"===(null===B||void 0===B?void 0:B.type)&&Object(h.jsx)("div",{className:"position-fixed fixed-top d-flex justify-content-center",children:Object(h.jsx)(c.a,{color:"danger",children:B.massage})}),"success"===(null===B||void 0===B?void 0:B.type)&&Object(h.jsx)("div",{className:"position-fixed fixed-top d-flex justify-content-center",children:Object(h.jsx)(c.a,{color:"success",children:B.massage})})]})}}}]);
//# sourceMappingURL=28.5b124657.chunk.js.map