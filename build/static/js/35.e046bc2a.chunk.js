(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{1120:function(e,t,n){"use strict";n.r(t);var a=n(181),i=n(659),r=n(662),c=n.n(r),s=n(1),o=n(78),l=n(77),d=n(24);t.default=function(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],u=Object(s.useState)(""),j=Object(a.a)(u,2),p=j[0],b=j[1],h=Object(o.c)(l.e).token,m=Object(s.useState)(""),v=Object(a.a)(m,2),x=v[0],g=v[1],O=Object(s.useState)(""),f=Object(a.a)(O,2),y=f[0],C=f[1],N=Object(s.useState)(""),S=Object(a.a)(N,2),w=S[0],B=S[1],q=Object(s.useState)("product"),z=Object(a.a)(q,2),A=z[0],k=z[1],_=Object(s.useState)(null),P=Object(a.a)(_,2),T=P[0],L=P[1],R=Object(s.useState)(null),D=Object(a.a)(R,2),H=D[0],M=D[1],W=Object(s.useState)("list"),F=Object(a.a)(W,2),I=F[0],E=F[1],J=Object(s.useState)(!0),Q=Object(a.a)(J,2),V=Q[0],G=Q[1],K=Object(s.useState)(null),U=Object(a.a)(K,2),X=U[0],Y=U[1],Z=Object(s.useState)(null),$=Object(a.a)(Z,2),ee=$[0],te=$[1],ne=function(e){setTimeout((function(){te(null)}),e)};return Object(s.useEffect)((function(){h&&(c.a.get("http://3.110.91.117/api/admin/list/home/banner",{headers:{Authorization:"Bearer "+h}}).then((function(e){r(e.data.homepageBanner)})).catch((function(e){var t,n;r(null),te({type:"error",massage:null!==(t=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data.message)&&void 0!==t?t:"server-error"}),ne(5e3)})),c.a.get("http://3.110.91.117/api/allcategories/list",{headers:{Authorization:"Bearer ".concat(h)}}).then((function(e){Y(e.data.categories)})).catch((function(e){var t,n;te({type:"error",massage:null!==(t=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data.message)&&void 0!==t?t:"server-error"}),ne(5e3),G(!V)})),c.a.get("http://3.110.91.117/api/admin/listing/categories/homepage",{headers:{Authorization:"Bearer ".concat(h)}}).then((function(e){b(e.data.homeScreenCategories[0])})).catch((function(e){var t,n;te({type:"error",massage:null!==(t=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data.message)&&void 0!==t?t:"server-error"}),ne(5e3)})))}),[h,V]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"HomePege Settings"}),Object(d.jsx)("hr",{}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{children:"Banner for Home Page"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{style:{position:"relative"},onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("leftColor",x),t.append("rightColor",y),t.append("bannerMob",H),t.append("bannerWeb",T),t.append("bannerType",A),"product"===A?t.append("product",w):(t.append("categoryType",I),t.append("category",w)),c.a.post("http://3.110.91.117/api/admin/create/home/banner",t,{headers:{Authorization:"Bearer "+h}}).then((function(e){G(!V),g(""),C(""),M(""),L(""),E(""),B(""),te({type:"success",massage:e.data.message}),ne(5e3),G(!V)})).catch((function(e){var t,n;te({type:"error",massage:null!==(t=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data.message)&&void 0!==t?t:"server-error"}),ne(5e3)}))},children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"d-flex align-items-center my-3",children:[Object(d.jsx)("p",{className:"mt-3",children:"BannerType:"}),Object(d.jsxs)("select",{required:!0,className:"ml-4",style:{height:"30px",width:"150px"},onChange:function(e){return k(e.target.value)},children:[Object(d.jsx)("option",{value:"product",children:"Products"}),Object(d.jsx)("option",{value:"category",children:"Category"})]})]}),"category"===A&&Object(d.jsxs)("div",{className:"d-flex align-items-center my-3",children:[Object(d.jsx)("p",{className:"mt-3",children:"Category type:"}),Object(d.jsxs)("select",{className:"ml-4",style:{height:"30px",width:"150px"},onChange:function(e){return E(e.target.value)},children:[Object(d.jsx)("option",{value:"list",children:"List"}),Object(d.jsx)("option",{value:"store",children:"Store"}),Object(d.jsx)("option",{value:"brand",children:"Brand"})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"my-2 d-flex align-items-center",children:[Object(d.jsxs)("p",{className:"mt-3 mr-4",children:[A," Id.:"]}),Object(d.jsx)("input",{required:!0,type:"text",placeholder:"Enter valid Id",value:w,onChange:function(e){return B(e.target.value)}})]})})]}),Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("p",{className:"mt-3 mr-4",children:"Banner Color:"}),Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("input",{required:!0,type:"color",value:x,onChange:function(e){return g(e.target.value)}}),Object(d.jsx)("input",{required:!0,type:"text",placeholder:"Leftcolor",onChange:function(e){return g(e.target.value)},value:x})]}),Object(d.jsxs)("div",{className:"d-flex align-items-center ml-4",children:[Object(d.jsx)("input",{required:!0,type:"color",placeholder:"Rightcolor",value:y,onChange:function(e){return C(e.target.value)}}),Object(d.jsx)("input",{required:!0,type:"text",placeholder:"Rightcolor",onChange:function(e){return C(e.target.value)},value:y})]})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[Object(d.jsx)("p",{className:"mt-3 mr-4",children:"Web Banner:"}),Object(d.jsx)("input",{required:!0,type:"file",accept:"image/png,image/jpeg,image/jpg,image/webp",placeholder:"banner",onChange:function(e){return L(e.target.files[0])},value:null===T||void 0===T?void 0:T.fileName})]}),"*Note : Web banner size must be 1620 * 800 and left and right color must be provided \\",Object(d.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[Object(d.jsx)("p",{className:"mt-3 mr-4",children:"Mobile Banner:"}),Object(d.jsx)("input",{required:!0,type:"file",accept:"image/png,image/jpeg,image/jpg,image/webp",placeholder:"banner",onChange:function(e){return M(e.target.files[0])},value:null===H||void 0===H?void 0:H.fileName})]}),"*Note : Mobile Banner size must be 380 * 173 and left and right color must be provided",Object(d.jsx)(i.f,{style:{position:"absolute",bottom:"0px",right:"10px",width:"200px"},veriant:"outline",color:"success",type:"submit",children:"Save"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{style:{fontSize:"25px"},children:"Banners List - "}),n&&(null===n||void 0===n?void 0:n.map((function(e){var t,n;return Object(d.jsxs)("div",{style:{fontSize:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",margin:"20px"},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{width:"300px",src:null===(t=e.bannerWeb)||void 0===t?void 0:t[0].img,alt:"banner"}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{width:"300px",className:"mt-4",src:null===(n=e.bannerMob)||void 0===n?void 0:n[0].img,alt:"banner"})]}),Object(d.jsxs)("div",{children:["Colors : ",Object(d.jsxs)("span",{children:["Left - ",e.leftColor]})," ;"," ",Object(d.jsxs)("span",{children:["Right - ",e.rightColor]})," ;"," ",Object(d.jsx)("span",{children:Object(d.jsx)("button",{onClick:function(){return t=e._id,void c.a.post("http://3.110.91.117/api/image-handler",{_id:t,name:"home-page-banner"},{headers:{Authorization:"Bearer "+h}}).then((function(e){G(!V),te({type:"success",massage:e.data.message}),ne(5e3)})).catch((function(e){var t,n;G(!V),te({type:"error",massage:null!==(t=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data.message)&&void 0!==t?t:"server-error"}),ne(5e3)}));var t},style:{outline:"none",color:"white",backgroundColor:"red",display:"inline",marginLeft:"50px",padding:"4px 16px"},children:"Delete"})}),Object(d.jsx)("hr",{})]})]},e._id)}))),Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"Choose Homepage Products Show "}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{style:{position:"relative"},onSubmit:function(e){e.preventDefault();for(var t=[],n=0;n<e.target.category.length;n++)e.target.category[n].checked&&t.push(e.target.category[n].value);c.a.post("http://3.110.91.117/api/admin/create/homepage/categories",{category:t,sort:e.target.sort.value,limit:e.target.itemcount.value},{headers:{Authorization:"Bearer "+h}}).then((function(e){G(!V),te({type:"success",massage:e.data.message}),ne(5e3)})).catch((function(e){te({type:"error",massage:e.response.data.message}),ne(5e3)}))},children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("label",{htmlFor:"itemcount",children:"Number Of Product Show in Homepage : -"}),Object(d.jsx)("input",{required:!0,id:"itemcount",name:"itemcount",type:"number",defaultValue:null===p||void 0===p?void 0:p.limit})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("label",{htmlFor:"sort",children:"Choose Sort Type : -"}),Object(d.jsxs)("select",{name:"sort",id:"sort",children:[Object(d.jsx)("option",{value:"time",children:"Time"}),Object(d.jsx)("option",{value:"alfabet",children:"Alfabet"}),Object(d.jsx)("option",{value:"rating",children:"Rating"}),Object(d.jsx)("option",{value:"review",children:"Review"}),Object(d.jsx)("option",{value:"price",children:"Price"}),Object(d.jsx)("option",{value:"quantity",children:"Quantity"}),Object(d.jsx)("option",{value:"-createdAt",children:"createdAt"}),Object(d.jsx)("option",{selected:!0,value:null===p||void 0===p?void 0:p.sort,children:null===p||void 0===p?void 0:p.sort})]})]})]}),null===X||void 0===X?void 0:X.map((function(e,t){var n;return Object(d.jsx)("div",{children:null===e||void 0===e||null===(n=e.children)||void 0===n?void 0:n.map((function(e,t){var n;if(e)return Object(d.jsxs)("div",{children:[t+1," :",Object(d.jsx)("input",{style:{margin:"5px 10px"},type:"checkbox",defaultChecked:-1!==(null===p||void 0===p||null===(n=p.category)||void 0===n?void 0:n.indexOf(e._id)),name:"category",value:e._id},e._id),e.name]},e._id)}))},e._id)})),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(i.f,{style:{position:"absolute",bottom:"0px",right:"10px",width:"200px"},veriant:"outline",color:"success",type:"submit",children:"Save"})]}),"error"===(null===ee||void 0===ee?void 0:ee.type)&&Object(d.jsx)("div",{className:"position-fixed fixed-top d-flex justify-content-center",children:Object(d.jsx)(i.a,{color:"danger",children:ee.massage})}),"success"===(null===ee||void 0===ee?void 0:ee.type)&&Object(d.jsx)("div",{className:"position-fixed fixed-top d-flex justify-content-center",children:Object(d.jsx)(i.a,{color:"success",children:ee.massage})})]})}}}]);
//# sourceMappingURL=35.e046bc2a.chunk.js.map