(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{1132:function(e,t,i){"use strict";i.r(t);var a=i(79),r=i(181),_=i(669),n=i(1133),s=i(659),o=i(686),c=i.n(o),d=i(726),l=i.n(d),A=i(662),E=i.n(A),P=i(1),u=i(78),p=i(77),T=i(23),R=(i(725),i(24));t.default=function(){var e,t=Object(T.f)(),i=Object(u.c)((function(e){return e.user._id})),o=Object(u.c)(p.e),d=o.role,A=o.token,O=Object(P.useState)(!0),C=Object(r.a)(O,2),m=C[0],D=C[1],N=Object(P.useState)(!1),I=Object(r.a)(N,2),j=I[0],f=I[1],b=Object(P.useState)([]),h=Object(r.a)(b,2),v=h[0],g=h[1],M=Object(P.useState)([]),S=Object(r.a)(M,2),x=S[0],G=S[1],y=Object(P.useState)(null),U=Object(r.a)(y,2),F=U[0],L=U[1],k=Object(P.useState)(1),H=Object(r.a)(k,2),B=H[0],V=H[1],w=Object(P.useState)(),z=Object(r.a)(w,2),W=z[0],Y=z[1],q=Object(P.useState)(),K=Object(r.a)(q,2),Z=K[0],J=K[1],Q=Object(P.useState)("pending"),X=Object(r.a)(Q,2),$=X[0],ee=X[1],te="http://3.110.91.117",ie=Object(P.useState)(null),ae=Object(r.a)(ie,2),re=ae[0],_e=ae[1],ne=Object(P.useState)(null),se=Object(r.a)(ne,2),oe=se[0],ce=se[1],de=function(e){setTimeout((function(){ce(null)}),e)};Object(P.useEffect)((function(){var e;"admin"===d&&(e="/api/allproduct/list",E.a.get(te+"/api/admin/alloffers",{headers:{Authorization:"Bearer ".concat(A)}}).then((function(e){g(e.data.offers),D(!1)})).catch((function(e){var t,i;D(!1),ce({type:"error",massage:null!==(t=null===e||void 0===e||null===(i=e.response)||void 0===i?void 0:i.data.message)&&void 0!==t?t:"server-error"}),de(5e3)})),E.a.get(te+"/api/admin/flashsale",{headers:{Authorization:"Bearer ".concat(A)}}).then((function(e){G(e.data.flashSales[0])})).catch((function(e){var t,i;ce({type:"error",massage:null!==(t=null===e||void 0===e||null===(i=e.response)||void 0===i?void 0:i.data.message)&&void 0!==t?t:"server-error"}),de(5e3)}))),"vendor"===d&&(e="/api/vendor/listing-all-products"),E.a.get(te+e,{headers:{Authorization:"Bearer ".concat(A)}}).then((function(e){"admin"===d&&Ae(null===e||void 0===e?void 0:e.data.products),"vendor"===d&&(Ae(null===e||void 0===e?void 0:e.data.vendorProductPending),J(e.data)),D(!1)})).catch((function(e){var t,i;ce({type:"error",massage:null!==(t=null===e||void 0===e||null===(i=e.response)||void 0===i?void 0:i.data.message)&&void 0!==t?t:"server-error"}),de(5e3)}))}),[A,d,i,re]);var le,Ae=function(e){var t=e.map((function(e){var t,i,a,r,_,n,s;return{_id:e._id,ProductImg:null===(t=e.productPictures)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.img,name:e.name,price:Math.round(e.price),quantity:Math.round(e.quantity),discountPrice:Math.round(e.discountPrice),finalPrice:Math.round(e.finalPrice),slug:e.slug,sku:e.sku_number,category:(null===(a=e.sub2Category)||void 0===a?void 0:a.name)||(null===(r=e.sub1Category)||void 0===r?void 0:r.name)||(null===(_=e.mainCategory)||void 0===_?void 0:_.name),verifiedVendors:null!==(n=null===e||void 0===e||null===(s=e.verifiedVendors)||void 0===s?void 0:s.name)&&void 0!==n?n:"Admin"}}));Y(t)},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;f(!j),L(Object(a.a)(Object(a.a)({},e),{},{product:t}))};"admin"===d&&(le=[{key:"sku",label:"SKU",_style:{width:"9%"},sorter:!1,filter:!0},{key:"ProductImg",label:"Image",sorter:!1,filter:!1},{key:"slug",label:"Name",sorter:!0,filter:!0},"price","discountPrice","finalPrice","category","quantity",{key:"verifiedVendors",label:"Vendor",_style:{width:"6%"},sorter:!0,filter:!0},{key:"offers",label:"Offer",_style:{width:"6%"},sorter:!1,filter:!1},{key:"Action",label:"",_style:{width:"6%"},sorter:!1,filter:!1}]),"vendor"===d&&(le="pending"===$?[{key:"sku",label:"SKU",_style:{width:"9%"},sorter:!1,filter:!0},{key:"ProductImg",label:"Image",sorter:!1,filter:!1},{key:"slug",label:"Name",sorter:!0,filter:!0},"price","category","quantity",{key:"Action",label:"",_style:{width:"6%"},sorter:!1,filter:!1}]:[{key:"sku",label:"SKU",_style:{width:"9%"},sorter:!1,filter:!0},{key:"ProductImg",label:"Image",sorter:!1,filter:!1},{key:"slug",label:"Name",sorter:!0,filter:!0},"price","category","quantity"]);return Object(R.jsxs)("div",{className:"productlist",children:[Object(R.jsx)(s.U,{children:Object(R.jsx)(s.o,{xl:12,children:Object(R.jsxs)(s.i,{children:["vendor"===d&&Object(R.jsx)(s.m,{children:Object(R.jsxs)("select",{onChange:function(e){ee(e.target.value),"pending"===e.target.value?Ae(Z.vendorProductPending):Ae(Z.vendorProductApproved)},children:[Object(R.jsx)("option",{value:"pending",children:"Pending"}),Object(R.jsx)("option",{value:"approved",children:"Approved"})]})}),Object(R.jsx)(s.n,{className:"text-center mt-4",children:"admin"===d?"Product Lists":"pending"===$?"Pending Products":"Approved Products"}),Object(R.jsx)(s.j,{children:Object(R.jsx)(s.r,{tableFilter:!0,columnFilter:!0,sorter:!0,pagination:!0,itemsPerPageSelect:!0,loading:m,items:W,fields:le,hover:!0,striped:!0,itemsPerPage:10,scopedSlots:{"SiNo.":function(e,t){return Object(R.jsx)("td",{children:t+1},t)},ProductImg:function(e){return Object(R.jsx)("td",{children:Object(R.jsx)("img",{className:"productlist_img",loading:"lazy",src:e.ProductImg,alt:e.name})})},offers:function(e){return Object(R.jsx)("td",{children:Object(R.jsxs)(s.s,{children:[Object(R.jsx)(s.v,{children:Object(R.jsx)(_.a,{content:n.a.cilGift,size:"2xl"})}),Object(R.jsxs)(s.u,{children:[Object(R.jsx)("h5",{className:"center my-2",children:"Add Offres"}),null===v||void 0===v?void 0:v.map((function(t){return Object(R.jsx)(s.t,{onClick:function(){return Ee(t,e)},children:t.offerTitle},t._id)})),Object(R.jsx)("h5",{className:"center my-2",children:"Add FlashSale"}),x&&Object(R.jsx)(s.t,{onClick:function(){return Ee(Object(a.a)(Object(a.a)({},x),{},{offerTitle:null===x||void 0===x?void 0:x.flashSalesTitle}),e)},children:x.flashSalesTitle},null===x||void 0===x?void 0:x._id)]})]})})},Action:function(e){return Object(R.jsx)("td",{children:Object(R.jsxs)(s.s,{children:[Object(R.jsx)(s.v,{children:Object(R.jsx)(_.a,{name:"cilSettings",size:"2xl"})}),Object(R.jsxs)(s.u,{children:[Object(R.jsxs)(s.t,{onClick:function(){return t.push("/productlist/".concat(e._id))},children:[Object(R.jsx)(l.a,{})," Edit"]}),Object(R.jsxs)(s.t,{onClick:function(){return t=e._id,void E.a.delete(te+"/api/products/deleteProduct/"+t,{headers:{Authorization:"Bearer ".concat(A)}}).then((function(e){ce({type:"success",massage:e.data.message}),de(5e3),_e(!re)})).catch((function(e){ce({type:"error",massage:e.response.data.message}),de(5e3)}));var t},children:[Object(R.jsx)(c.a,{})," Delete"]})]})]})})}}})})]})})}),Object(R.jsxs)(s.L,{className:"sm-30",show:j,onClose:Ee,children:[Object(R.jsxs)(s.O,{closeButton:!0,children:["Add ",null===F||void 0===F||null===(e=F.product)||void 0===e?void 0:e.name," To ",null===F||void 0===F?void 0:F.offerTitle]}),Object(R.jsxs)(s.M,{children:[Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("label",{htmlFor:"exampleFormControlFile2",children:"Offer Title"}),Object(R.jsx)("br",{}),Object(R.jsx)("input",{type:"text",name:"offerTitle",id:"exampleFormControlFile2",value:null===F||void 0===F?void 0:F.offerTitle,disabled:!0})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("label",{htmlFor:"exampleFormControlFile2",children:"Product Discount in %"}),Object(R.jsx)("br",{}),Object(R.jsx)("input",{type:"number",name:"discount",id:"exampleFormControlFile2",min:"1",max:"100",onChange:function(e){return V(e.target.value)},value:B})]})]}),Object(R.jsxs)(s.N,{children:[Object(R.jsx)(s.f,{onClick:Ee,color:"primary",children:"Cancel"}),Object(R.jsx)(s.f,{onClick:function(){var e;e=F.flashSalesTitle?"/api/admin/product/push/flashsales":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER:"http://3.110.91.117",REACT_APP_ADMIN_LOGIN:"/api/auth/admin/login",REACT_APP_ADMIN_REGISTER:"/api/auth/admin/register",REACT_APP_ADMIN_LOGOUT:"/api/auth/admin/logout",REACT_APP_ADMIN_DATA_ACCES:"/api/auth/userDetails",REACT_APP_ADMIN_HOME_BANNER_GET:"/api/admin/list/home/banner",REACT_APP_ADMIN_HOME_BANNER_POST:"/api/admin/create/home/banner",REACT_APP_ADMIN_HOME_BANNER_DELETE:"/api//admin/delete/home/banner/",REACT_APP_ADMIN_HOME_CATEGORY_GET:"/api/admin/listing/categories/homepage",REACT_APP_ADMIN_HOME_CATEGORY_POST:"/api/admin/create/homepage/categories",REACT_APP_ADMIN_SHIPPING_ADDRESS_GET:"/api/admin/list/available_delivery_address",REACT_APP_ADMIN_SHIPPING_ADDRESS_POST:"/api/admin/create/available_delivery_address",REACT_APP_ADMIN_SHIPPING_ADDRESS_DELETE:"/api/admin/delete/available_delivery_address/",REACT_APP_ADMIN_SHIPPING_CHARGE:"/api/admin/list/shipping/charge",REACT_APP_ADMIN_SHIPPING_CHARGE_POST:"/api/admin/create/shipping/charge",REACT_APP_ADMIN_SHIPPING_CHARGE_DELETE:"/api/admin/delete/shipping/charge/",REACT_APP_ADMIN_COUPON_GET:"/api/coupons/list",REACT_APP_ADMIN_COUPON_POST:"/api/coupon/create",REACT_APP_ADMIN_COUPON_DELETE:"/api/coupon/",REACT_APP_ADMIN_COUPON_UPDATE:"/api/coupon/",REACT_APP_ADMIN_ORDER_GET:"/api/order/admin-getCustomerOrders",REACT_APP_ADMIN_ORDER_UPDATE:"/api/order/admin-orderUpdate",REACT_APP_ADMIN_ORDER_DELETE:"/api/order/admin-orderUpdate",REACT_APP_ADMIN_ORDER_GET_BY_ID:"/api/order/admin-getOrder/",REACT_APP_ADMIN_PRODUCT_LIST_GET:"/api/allproduct/list",REACT_APP_ADMIN_PRODUCT_GET:"/api/products/",REACT_APP_ADMIN_PRODUCT_POST:"/api/products/create",REACT_APP_ADMIN_PRODUCT_UPDATE:"/api/products/updateProduct",REACT_APP_ADMIN_PRODUCT_DELETE:"/api/products/deleteProduct/",REACT_APP_ADMIN_CATEGORY_GET_ID:"/api/categorys/",REACT_APP_ADMIN_All_CATEGORY_GET:"/api/allcategories/list",REACT_APP_ADMIN_CATEGORY_POST:"/api/categorys/create",REACT_APP_ADMIN_CATEGORY_UPDATE:"/api/categorys/update",REACT_APP_ADMIN_CATEGORY_DELETE:"/api/categorys/delete/",REACT_APP_ADMIN_PRODUCT_GET_VENDOR:"/api/verifiedvendor/product-details/list",REACT_APP_ADMIN_PRODUCT_DELETE_VENDOR:"/api/verifiedVendor/isApproved",REACT_APP_ADMIN_PRODUCT_APPROVE_VENDOR:"/api/verifiedVendor/isApproved",REACT_APP_ADMIN_PRODUCT_BEFORE_APPROVE:"/api/verifiedVendor/product/list/before_approve/",REACT_APP_ADMIN_PRODUCT_VENDOR_POST:"/api/vendor/products/addProducts",REACT_APP_ADMIN_PRODUCT_VENDOR_LIST_GET:"/api/vendor/listing-all-products",REACT_APP_ADMIN_PRODUCT_VENDOR_GET:"/api/vendor/products/",REACT_APP_ADMIN_ORDER_VENDOR_GET:"/api/vendor/product/user-order-history",REACT_APP_ADMIN_PRODUCT_PENDING_GET:"/api/verifiedVendor/product/list/before_approve/",REACT_APP_ADMIN_CREATE_BRAND:"/api/brand-page/create",REACT_APP_ADMIN_GET_BRAND:"/api/brand-page/listing",REACT_APP_ADMIN_UPDATE_BRAND:"",REACT_APP_ADMIN_DELETE_BRAND:"",REACT_APP_ADMIN_CREATE_OFFERS:"/api/admin/create/offers",REACT_APP_ADMIN_GET_OFFERS:"/api/admin/alloffers",REACT_APP_ADMIN_UPDATE_OFFERS:"/api/admin/create/offers",REACT_APP_ADMIN_DELETE_OFFERS:"/api/admin/remove-product/offers/",REACT_APP_ADMIN_PUSH_OFFERS:"/api/admin/product/push/offers",REACT_APP_ADMIN_GET_FLASH_SALE:"/api/admin/flashsale",REACT_APP_ADMIN_CREATE_FLASH_SALE:"/api/admin/create/flashsales",REACT_APP_ADMIN_DELETE_FLASH_SALE:"api/admin/flashsale",REACT_APP_ADMIN_ADD_PRODUCT_FLASH_SALE:"/api/admin/product/push/flashsales",REACT_APP_ADMIN_GET_INFOPAGE:"/api/info-pages/list/",REACT_APP_ADMIN_CREATE_INFOPAGE:"/api/info-pages/create",REACT_APP_ADMIN_UPDATE_INFOPAGE:"/api/info-pages/update/",REACT_APP_ADMIN_DELETE_INFOPAGE:"/api/info-pages/delete/",REACT_APP_ADMIN_CREATE_GAME_SPIN_PRICE:"/api/game/create/spinandwin",REACT_APP_ADMIN_GET_GAME_SPIN_PRICE:"/api/game/list/spinandwin",REACT_APP_ADMIN_GET_GAME_SPIN_USERS:"/api/game/list/prize-release/spinandwin",REACT_APP_ADMIN_CREATE_GAME_SCRACH_PRICE:"/api/game/create/scratchandwin",REACT_APP_ADMIN_GET_GAME_SCRACH_PRICE:"/api/game/list/scratchandwin",REACT_APP_ADMIN_GET_GAME_SCRACH_USERS:"/api/game/list/prize-release/scratchandwin",REACT_APP_ADMIN_CREATE_GAME_SURPRICE_BOX_PRICE:"/api/game/create/surprisebox",REACT_APP_ADMIN_GET_GAME_SURPRICE_BOX_PRICE:"/api/game/list/surprisebox",REACT_APP_ADMIN_GET_GAME_SURPRICE_BOX_USERS:"/api/game/list/prize-release/surprisebox",REACT_APP_ADMIN_CREATE_GAME_QUIZ_PRICE:"/api/game/create/quiz",REACT_APP_ADMIN_GET_GAME_QUIZ_PRICE:"/api/game/list/quiz",REACT_APP_ADMIN_GET_GAME_QUIZ_USERS:"/api/game/result/quiz",REACT_APP_TWILIO_SID:"ACe917657e1e9ac287018368c906723692",REACT_APP_TWILIO_TOKEN:"4047dec8385b3dd75435c3f28a890da5",REACT_APP_ONESIGNAL_ID:"92199e6c-6733-4d2b-8f25-383bf89af1df",REACT_APP_ONESIGNAL_TOKEN:"NDIxNWJlOWItZGI3Ny00ODI5LWIwMGMtNmI2N2E2YWNhZTRm"}).REACT_APP_ADMIN_PUSH_OFFER,E.a.post(te+e,{offerId:F._id,product:F.product._id,discount:B},{headers:{Authorization:"Bearer ".concat(A)}}).then((function(e){ce({type:"success",massage:e.data.message}),de(8e3),Ee(),V(1),L(null)})).catch((function(e){Ee(),ce({type:"error",massage:e.response.data.message}),de(5e3)}))},color:"primary",children:"Confirm"})]})]}),"error"===(null===oe||void 0===oe?void 0:oe.type)&&Object(R.jsx)("div",{className:"position-fixed fixed-top d-flex justify-content-center",children:Object(R.jsx)(s.a,{color:"danger",children:oe.massage})}),"success"===(null===oe||void 0===oe?void 0:oe.type)&&Object(R.jsx)("div",{className:"position-fixed fixed-top d-flex justify-content-center",children:Object(R.jsx)(s.a,{color:"success",children:oe.massage})})]})}}}]);
//# sourceMappingURL=34.ecf8ad1b.chunk.js.map