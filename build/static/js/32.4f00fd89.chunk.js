(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{1121:function(e,t,l){"use strict";l.r(t);var i=l(689),a=l.n(i),s=l(693),c=l(181),r=l(1),o=l(660),n=l(78),d=l(77),u=l(663),p=l.n(u),j=l(681),m=l(682),b=l.n(m),x=l(1073),h=l(1074),v=l(715),O=l(24),g="http://3.109.126.116/";t.default=function(e){var t,l,i,u,m,f,y,N,C,S,F,w=e.match,D=Object(r.useState)(),P=Object(c.a)(D,2),V=P[0],A=P[1],T=Object(n.c)(d.e),q=T.token,E=T.role,k=Object(r.useState)(null),z=Object(c.a)(k,2),G=z[0],R=z[1],_=Object(r.useState)(null),I=Object(c.a)(_,2),J=I[0],Q=I[1],B=Object(r.useState)(""),K=Object(c.a)(B,2),L=K[0],W=K[1],H=Object(r.useState)(null),M=Object(c.a)(H,2),U=M[0],X=M[1],Y=function(e){setTimeout((function(){X(null)}),e)};Object(r.useEffect)((function(){var e;q&&(e="vendor"===E?"/api/vendor/products/"+w.params.id:"/api/products/"+w.params.id,p.a.get(g+e).then((function(e){A(null===e||void 0===e?void 0:e.data.products),W(null===e||void 0===e?void 0:e.data.products.attributes.color)})).catch((function(e){X({type:"error",massage:e.response.data.message}),Y(5e3)})))}),[q,E,w.params.id,G]);var Z=function(){var e=Object(s.a)(a.a.mark((function e(t,l,i){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"adminProduct",e.next=3,Object(v.a)(w.params.id,"product",null,l,i,q,"adminProduct");case 3:e.sent?(R(!G),i?(X({type:"error",massage:"images deleted"}),Y(8e3)):(X({type:"success",massage:"images added"}),Y(8e3))):(X({type:"error",massage:"error on img update"}),Y(5e3));case 5:case"end":return e.stop()}}),e)})));return function(t,l,i){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(o.i,{className:"p-4",children:Object(O.jsxs)("div",{className:"d-flex flex-row",children:[Object(O.jsxs)(o.o,{sm:"2",className:" d-md-block",children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"exampleFormControlSelect1",children:Object(O.jsxs)("h2",{children:["Edit Category",Object(O.jsx)("hr",{})]})}),Object(O.jsx)("select",{className:"form-control",id:"exampleFormControlSelect1",children:Object(O.jsx)("option",{children:null===V||void 0===V||null===(t=V.mainCategory)||void 0===t?void 0:t.name})})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"exampleFormControlSelect2",children:"Select Sub-Category"}),Object(O.jsx)("select",{className:"form-control",id:"exampleFormControlSelect2",children:Object(O.jsx)("option",{children:null===V||void 0===V||null===(l=V.sub1Category)||void 0===l?void 0:l.name})})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"exampleFormControlSelect2",children:"Select Sub-Category"}),Object(O.jsx)("select",{multiple:!0,className:"form-control",id:"exampleFormControlSelect2",children:Object(O.jsx)("option",{children:null===V||void 0===V||null===(i=V.sub2Category)||void 0===i?void 0:i.name})})]})]}),Object(O.jsx)(o.o,{sm:"6",children:Object(O.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault();var l=e.target;p.a.put(g+"/api/products/updateProduct",{productId:w.params.id,name:l.title.value,price:l.price.value,discountPrice:l.discountPrice.value,quantity:l.quantity.value,shortDescription:l.shortDescription.value,longDescription:J,seoTitle:l.seoTitle.value,seoDescription:l.seoDescription.value,seoAlt:l.seoAlt.value,mainCategory:null===(t=l.mainCategory)||void 0===t?void 0:t.value,sub1Category:l.sub1Category.value,sub2Category:l.sub2Category.value,tag:l.tag.value,weight:l.weight.value,ram:l.ram.value,storage:l.storage.value,color:L,size:l.size.value},{headers:{Authorization:"Bearer ".concat(q)}}).then((function(e){R(!G),X({type:"success",massage:e.data.message}),Y(5e3)})).catch((function(e){console.log(e),X({type:"error",massage:e.response.data.message}),Y(5e3)}))},children:[Object(O.jsx)("div",{className:"flex-row",children:Object(O.jsxs)("div",{className:"forms",children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("h2",{children:"Product Description"})," ",Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Product Title"}),Object(O.jsx)("input",{defaultValue:null===V||void 0===V?void 0:V.name,type:"text",name:"title",className:"form-control",placeholder:"Product Title"})]}),Object(O.jsx)("input",{defaultValue:null===V||void 0===V||null===(u=V.mainCategory)||void 0===u?void 0:u._id,name:"mainCategory",hidden:!0}),Object(O.jsx)("input",{defaultValue:null===V||void 0===V||null===(m=V.sub1Category)||void 0===m?void 0:m._id,name:"sub1Category",hidden:!0}),Object(O.jsx)("input",{defaultValue:null===V||void 0===V||null===(f=V.sub2Category)||void 0===f?void 0:f._id,name:"sub2Category",hidden:!0}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Short Description"}),Object(O.jsx)("textarea",{defaultValue:null===V||void 0===V?void 0:V.shortDescription,type:"text",className:"form-control",name:"shortDescription",placeholder:"Give me a short description about product"})]}),Object(O.jsx)("label",{htmlFor:"price",children:"Price Rs."}),Object(O.jsx)("input",{required:!0,defaultValue:null===V||void 0===V?void 0:V.price,name:"price",type:"number",className:"form-control",id:"price",placeholder:"Rs."}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"discountPrice",children:"discountPrice Rs."}),Object(O.jsx)("input",{name:"discountPrice",type:"number",className:"form-control",id:"discountPrice",placeholder:"Rs.",defaultValue:null===V||void 0===V?void 0:V.discountPrice})]}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsxs)("div",{className:"input-group-prepend",children:[Object(O.jsx)("span",{className:"input-group-text",id:"inputGroupFileAddon01",children:"Quantity"}),Object(O.jsx)("input",{defaultValue:null===V||void 0===V?void 0:V.quantity,name:"quantity",type:"number",className:"form-control",placeholder:"Select Quantity"})]})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsxs)("div",{className:"input-group-prepend",children:[Object(O.jsx)("span",{className:"input-group-text",id:"inputGroupFileAddon01",children:"Weight"}),Object(O.jsx)("input",{required:!0,name:"weight",type:"number",className:"form-control",placeholder:"weight",min:0,defaultValue:null===V||void 0===V||null===(y=V.attributes)||void 0===y?void 0:y.weight})]})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsxs)("div",{className:"input-group-prepend",children:[Object(O.jsx)("span",{className:"input-group-text",id:"inputGroupFileAddon01",children:"Ram"}),Object(O.jsx)("input",{name:"ram",type:"text",className:"form-control",placeholder:"Optional...",defaultValue:null===V||void 0===V||null===(N=V.attributes)||void 0===N?void 0:N.ram})]})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsxs)("div",{className:"input-group-prepend",children:[Object(O.jsx)("span",{className:"input-group-text",id:"inputGroupFileAddon01",children:"Storage"}),Object(O.jsx)("input",{name:"storage",type:"text",className:"form-control",placeholder:"Optional...",defaultValue:null===V||void 0===V||null===(C=V.attributes)||void 0===C?void 0:C.storage})]})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsxs)("div",{className:"input-group-prepend",children:[Object(O.jsx)("span",{className:"input-group-text",id:"inputGroupFileAddon01",children:"Size"}),Object(O.jsx)("input",{name:"size",type:"text",className:"form-control",placeholder:"Optional...",defaultValue:null===V||void 0===V||null===(S=V.attributes)||void 0===S?void 0:S.size})]})}),Object(O.jsx)("div",{className:"input-group mb-3",children:Object(O.jsxs)("div",{className:"input-group-prepend",children:[Object(O.jsx)("span",{className:"input-group-text",id:"inputGroupFileAddon01",children:"color"}),Object(O.jsx)("input",{style:{height:"35px"},type:"color",value:L,onChange:function(e){return W(e.target.value)}}),Object(O.jsx)("input",{style:{height:"35px"},type:"text",name:"color",placeholder:"Optional...",value:L,onChange:function(e){return W(e.target.value)}})]})})]}),Object(O.jsx)("h4",{children:"LongDescription"}),Object(O.jsx)(j.CKEditor,{editor:b.a,data:null===V||void 0===V?void 0:V.longDescription,onChange:function(e,t){var l=t.getData();Q(l)}}),Object(O.jsx)("hr",{}),Object(O.jsx)("label",{children:"SEOTitle"}),Object(O.jsx)("input",{required:!0,name:"seoTitle",type:"text",className:"form-control",placeholder:"SEOTitle",defaultValue:null===V||void 0===V?void 0:V.seoTitle}),Object(O.jsx)("label",{children:"SEODescription"}),Object(O.jsx)("textarea",{required:!0,name:"seoDescription",type:"text",className:"form-control",placeholder:"SEODescription",defaultValue:null===V||void 0===V?void 0:V.seoDescription}),Object(O.jsx)("label",{children:"SEOAlt"}),Object(O.jsx)("input",{required:!0,name:"seoAlt",type:"text",className:"form-control",placeholder:"SEOAlt",defaultValue:null===V||void 0===V?void 0:V.seoAlt}),Object(O.jsx)("label",{children:"Tag"}),Object(O.jsx)("input",{required:!0,name:"tag",type:"text",className:"form-control",placeholder:"tag",defaultValue:null===V||void 0===V?void 0:V.tag}),Object(O.jsx)("br",{})]})}),Object(O.jsx)(o.f,{type:"submit",style:{backgroundColor:"#03A89E"},children:"Save Product"})]})}),Object(O.jsx)(o.o,{sm:"4",children:Object(O.jsxs)(o.i,{className:"w-100",children:[Object(O.jsx)("h4",{className:"ml-4 my-2",children:"Product Image"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"d-flex flex-wrap justify-content-start align-items-center  p-2",children:[null===V||void 0===V||null===(F=V.productPictures)||void 0===F?void 0:F.map((function(e){return Object(O.jsxs)("div",{style:{position:"relative",width:"30%",height:"100px",margin:"4px"},children:[Object(O.jsx)("a",{href:e.img,target:"_blank",children:Object(O.jsx)("img",{className:"mb-4 p-img",src:e.img,alt:"img"},e._id)}),Object(O.jsx)("div",{style:{position:"absolute",top:0,right:-4},onClick:function(){return Z(null,null,e.keys)},children:Object(O.jsx)("div",{className:"p-1 bg-danger text-white rounded-pill",children:Object(O.jsx)(x.a,{fontSize:"small"})})})]})})),Object(O.jsxs)("div",{className:"mt-2 ml-4",children:[Object(O.jsx)("label",{htmlFor:"productImgNew",children:Object(O.jsx)("div",{className:"p-2 bg-success text-white rounded-pill",children:Object(O.jsx)(h.a,{})})}),Object(O.jsx)("input",{type:"file",hidden:!0,id:"productImgNew",accept:"image/png, image/jpeg,image/jpg,image/svg,image/webp",onChange:function(e){return Z(null,e.target.files[0],null)}})]})]})]})})]})}),"error"===(null===U||void 0===U?void 0:U.type)&&Object(O.jsx)("div",{className:"position-fixed fixed-top d-flex justify-content-center",children:Object(O.jsx)(o.a,{color:"danger",children:U.massage})}),"success"===(null===U||void 0===U?void 0:U.type)&&Object(O.jsx)("div",{className:"position-fixed fixed-top d-flex justify-content-center",children:Object(O.jsx)(o.a,{color:"success",children:U.massage})})]})}}}]);
//# sourceMappingURL=32.4f00fd89.chunk.js.map