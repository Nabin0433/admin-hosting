(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{1137:function(e,t,r){"use strict";r.r(t);var n=r(772),o=r(181),c=r(1),a=r(23),i=r(662),l=r.n(i),s=r(78),d=(r(806),r(77)),u=r(659),p=r(24);t.default=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),r=t[0],i=t[1],j=Object(s.c)(d.e).token,b=Object(a.f)(),m=Object(c.useState)(!1),f=Object(o.a)(m,2),h=f[0],x=f[1];Object(c.useEffect)((function(){l.a.get("http://3.110.91.117/api/vendor/get-vendor-details",{headers:{Authorization:"Bearer ".concat(j)}}).then((function(e){i(e.data.vendor)})).catch((function(e){console.log(e)}))}),[j,h]);var O=function(){x(!h)};return Object(p.jsxs)(u.U,{children:[Object(p.jsx)(u.o,{xl:12,children:Object(p.jsxs)(u.i,{children:[Object(p.jsx)(u.m,{children:"Vendors"}),Object(p.jsxs)(u.j,{children:[Object(p.jsx)(u.f,{onClick:O,color:"success",children:"Add New Vendors"}),Object(p.jsx)(u.r,{items:r,fields:[{key:"name",_classes:"font-weight-bold"},"phone","registered","url","Logo"],hover:!0,itemsPerPage:50,pagination:!0,clickableRows:!0,onRowClick:function(e){return b.push("/vendor/".concat(e._id))},scopedSlots:{registered:function(e){return Object(p.jsx)("td",{children:e.updatedAt})},Logo:function(e){return Object(p.jsx)("img",{className:"vender_logo",src:e.imageLogo,alt:"Logo"})}}})]})]})}),Object(p.jsxs)(u.L,{show:h,onClose:O,children:[Object(p.jsx)(u.O,{closeButton:!0,children:"Add new Vendor"}),Object(p.jsx)(u.M,{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target,r=new FormData;r.append("name",t.title.value),r.append("email",t.email.value),r.append("phone",t.phone.value),r.append("url",t.Url.value),r.append("vendorImageLogo",t.img.files[0]);var c,a=Object(n.a)(r);try{for(a.s();!(c=a.n()).done;){var i=Object(o.a)(c.value,2),s=i[0],d=i[1];console.log("".concat(s,": ").concat(d))}}catch(u){a.e(u)}finally{a.f()}l.a.post("http://3.110.91.117/api/vendor/add-vendor",r,{headers:{Authorization:"Bearer ".concat(j)}}).then((function(e){console.log(e),O()})).catch((function(e){console.log(e),alert("error on  create")}))},children:[Object(p.jsxs)("div",{class:"form-group",children:[Object(p.jsx)("label",{for:"exampleFormControlTextarea1",children:"Vendor Name : "}),Object(p.jsx)("input",{required:!0,name:"title",type:"text",class:"form-control",placeholder:"Vendor Name"})]}),Object(p.jsxs)("div",{class:"form-group",children:[Object(p.jsx)("label",{for:"exampleFormControlTextarea1",children:"Vendor Email : "}),Object(p.jsx)("input",{required:!0,name:"email",type:"email",class:"form-control",placeholder:"Vendor Email"})]}),Object(p.jsxs)("div",{class:"form-group",children:[Object(p.jsx)("label",{for:"exampleFormControlTextarea1",children:"Vendor URL : "}),Object(p.jsx)("input",{required:!0,name:"Url",type:"text",class:"form-control",placeholder:"Vendor URL"})]}),Object(p.jsxs)("div",{class:"form-group",children:[Object(p.jsxs)("label",{for:"exampleFormControlTextarea1",children:["Vendor Phone No. :"," "]}),Object(p.jsx)("input",{required:!0,name:"phone",type:"text",class:"form-control",placeholder:"Vendor Phone NO."})]}),Object(p.jsxs)("div",{class:"input-group mb-3 p-1",children:[Object(p.jsx)("div",{class:"input-group-prepend",children:Object(p.jsx)("span",{class:"input-group-text",id:"inputGroupFileAddon01",children:"Upload"})}),Object(p.jsxs)("div",{class:"custom-file",children:[Object(p.jsx)("input",{required:!0,name:"img",type:"file",accept:"image/png, image/jpeg,image/jpg,image/svg,image/webp",class:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01"}),Object(p.jsx)("label",{class:"custom-file-label",for:"inputGroupFile01",children:"Vendor Logo"})]})]})," ",Object(p.jsx)(u.N,{children:Object(p.jsx)(u.f,{type:"submit",color:"primary",children:"Confirm"})})]})})]})]})}},772:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(188);function o(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(n.a)(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,c=function(){};return{s:c,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}}}]);
//# sourceMappingURL=21.7c0290b7.chunk.js.map