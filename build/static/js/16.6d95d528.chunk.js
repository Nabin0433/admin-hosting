(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{1050:function(e,a,r){},1143:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return We}));r(1);var t=r(1129),o=r(79),i=r(672),n=r(1130),c=r(24),d=["children"],l=Object(t.a)({grid:{padding:"0 15px !important"}});function s(e){var a=l(),r=e.children,t=Object(i.a)(e,d);return Object(c.jsx)(n.a,Object(o.a)(Object(o.a)({item:!0},t),{},{className:a.grid,children:r}))}var p=["children"],b=Object(t.a)({grid:{padding:"0 15px !important"}});function x(e){var a=b(),r=e.children,t=Object(i.a)(e,p);return Object(c.jsx)(n.a,Object(o.a)(Object(o.a)({item:!0},t),{},{className:a.grid,children:r}))}var g=r(185),j=r(696),m=r.n(j),h=r(1122),f=r(1155),O=r(1121),u=r(1048),H=r.n(u),C=r(1049),v=r.n(C),w=function(e){e=(e+="").replace("#","");if(!/[0-9A-Fa-f]/g.test(e)||3!==e.length&&6!==e.length)throw new Error("input is not a valid hex color.");if(3===e.length){var a=e[0],r=e[1],t=e[2];e=a+a+r+r+t+t}var o=(e=e.toUpperCase())[0]+e[1],i=e[2]+e[3],n=e[4]+e[5];return parseInt(o,16)+", "+parseInt(i,16)+", "+parseInt(n,16)},y={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"},P=["#9c27b0","#ab47bc","#8e24aa","#af2cc5"],N=["#ff9800","#ffa726","#fb8c00","#ffa21a"],$=["#f44336","#ef5350","#e53935","#f55a4e"],S=["#4caf50","#66bb6a","#43a047","#5cb860"],T=["#00acc1","#26c6da","#00acc1","#00d3ee"],R=["#e91e63","#ec407a","#d81b60","#eb3573"],F=["#999","#777","#3C4858","#AAAAAA","#D2D2D2","#DDD","#b4b4b4","#555555","#333","#a9afbb","#eee","#e7e7e7","#ccc","#f5f5f5","#495057","#e7e7e7","#212121","#c8c8c8","#505050"],A="#000",k=(w(A),w(A),w(A),{boxShadow:"0 4px 20px 0 rgba("+w(A)+",.14), 0 7px 10px -5px rgba("+w(P[0])+",.4)"}),I={boxShadow:"0 4px 20px 0 rgba("+w(A)+",.14), 0 7px 10px -5px rgba("+w(T[0])+",.4)"},W={boxShadow:"0 4px 20px 0 rgba("+w(A)+",.14), 0 7px 10px -5px rgba("+w(S[0])+",.4)"},B={boxShadow:"0 4px 20px 0 rgba("+w(A)+",.14), 0 7px 10px -5px rgba("+w(N[0])+",.4)"},D={boxShadow:"0 4px 20px 0 rgba("+w(A)+",.14), 0 7px 10px -5px rgba("+w($[0])+",.4)"},E={boxShadow:"0 4px 20px 0 rgba("+w(A)+",.14), 0 7px 10px -5px rgba("+w(R[0])+",.4)"},z=(Object(o.a)({background:"linear-gradient(60deg, "+N[1]+", "+N[2]+")"},B),Object(o.a)({background:"linear-gradient(60deg, "+S[1]+", "+S[2]+")"},W),Object(o.a)({background:"linear-gradient(60deg, "+$[1]+", "+$[2]+")"},D),Object(o.a)({background:"linear-gradient(60deg, "+T[1]+", "+T[2]+")"},I),Object(o.a)({background:"linear-gradient(60deg, "+P[1]+", "+P[2]+")"},k),Object(o.a)({background:"linear-gradient(60deg, "+R[1]+", "+R[2]+")"},E),Object(o.a)({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid "+F[10],height:"auto"},y),w(A),w(A),w(A),w(A),w(A),{color:F[2],textDecoration:"none",fontWeight:"300",marginTop:"30px",marginBottom:"25px",minHeight:"32px",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif","& small":{color:F[1],fontWeight:"400",lineHeight:"1"}}),L=(Object(o.a)(Object(o.a)({},z),{},{marginTop:"0",marginBottom:"3px",minHeight:"auto","& a":Object(o.a)(Object(o.a)({},z),{},{marginTop:".625rem",marginBottom:"0.75rem",minHeight:"auto"})}),{disabled:{"&:before":{backgroundColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderColor:F[4]+" !important",borderWidth:"1px !important"},"&:after":{borderColor:P[0]}},underlineError:{"&:after":{borderColor:$[0]}},underlineSuccess:{"&:after":{borderColor:S[0]}},labelRoot:Object(o.a)(Object(o.a)({},y),{},{color:F[3]+" !important",fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",letterSpacing:"unset"}),labelRootError:{color:$[0]},labelRootSuccess:{color:S[0]},feedback:{position:"absolute",top:"18px",right:"0",zIndex:"2",display:"block",width:"24px",height:"24px",textAlign:"center",pointerEvents:"none"},marginTop:{marginTop:"16px"},formControl:{paddingBottom:"10px",margin:"27px 0 0 0",position:"relative",verticalAlign:"unset"}}),U=Object(t.a)(L);function q(e){var a,r,t=U(),i=e.formControlProps,n=e.labelText,d=e.id,l=e.labelProps,s=e.inputProps,p=e.error,b=e.success,x=e.name,j=e.inputRef,u=m()((a={},Object(g.a)(a," "+t.labelRootError,p),Object(g.a)(a," "+t.labelRootSuccess,b&&!p),a)),C=m()((r={},Object(g.a)(r,t.underlineError,p),Object(g.a)(r,t.underlineSuccess,b&&!p),Object(g.a)(r,t.underline,!0),r)),w=m()(Object(g.a)({},t.marginTop,void 0===n));return Object(c.jsxs)(h.a,Object(o.a)(Object(o.a)({},i),{},{className:i.className+" "+t.formControl,children:[void 0!==n?Object(c.jsx)(f.a,Object(o.a)(Object(o.a)({className:t.labelRoot+u,htmlFor:d},l),{},{children:n})):null,Object(c.jsx)(O.a,Object(o.a)({classes:{root:w,disabled:t.disabled,underline:C},id:d,name:x,inputRef:j},s)),p?Object(c.jsx)(H.a,{className:t.feedback+" "+t.labelRootError}):b?Object(c.jsx)(v.a,{className:t.feedback+" "+t.labelRootSuccess}):null]}))}var _=r(1050),Y=r.n(_),J=["className","children","plain","profile","chart","login"],V=Object(t.a)(Y.a);function K(e){var a,r=V(),t=e.className,n=e.children,d=e.plain,l=e.profile,s=e.chart,p=e.login,b=Object(i.a)(e,J),x=m()((a={},Object(g.a)(a,r.card,!0),Object(g.a)(a,r.cardPlain,d),Object(g.a)(a,r.cardProfile,l),Object(g.a)(a,r.cardChart,s),Object(g.a)(a,r.cardLogin,p),Object(g.a)(a,t,void 0!==t),a));return Object(c.jsx)("div",Object(o.a)(Object(o.a)({className:x},b),{},{children:n}))}var X=function(e){e=(e+="").replace("#","");if(!/[0-9A-Fa-f]/g.test(e)||3!==e.length&&6!==e.length)throw new Error("input is not a valid hex color.");if(3===e.length){var a=e[0],r=e[1],t=e[2];e=a+a+r+r+t+t}var o=(e=e.toUpperCase())[0]+e[1],i=e[2]+e[3],n=e[4]+e[5];return parseInt(o,16)+", "+parseInt(i,16)+", "+parseInt(n,16)},G=["#9c27b0","#ab47bc","#8e24aa","#af2cc5"],M=["#ff9800","#ffa726","#fb8c00","#ffa21a"],Q=["#f44336","#ef5350","#e53935","#f55a4e"],Z=["#4caf50","#66bb6a","#43a047","#5cb860"],ee=["#00acc1","#26c6da","#00acc1","#00d3ee"],ae=["#e91e63","#ec407a","#d81b60","#eb3573"],re=["#999","#777","#3C4858","#AAAAAA","#D2D2D2","#DDD","#b4b4b4","#555555","#333","#a9afbb","#eee","#e7e7e7","#ccc","#f5f5f5","#495057","#e7e7e7","#212121","#c8c8c8","#505050"],te="#000",oe="#FFF",ie=(X(te),X(te),X(te),{boxShadow:"0 4px 20px 0 rgba("+X(te)+",.14), 0 7px 10px -5px rgba("+X(G[0])+",.4)"}),ne={boxShadow:"0 4px 20px 0 rgba("+X(te)+",.14), 0 7px 10px -5px rgba("+X(ee[0])+",.4)"},ce={boxShadow:"0 4px 20px 0 rgba("+X(te)+",.14), 0 7px 10px -5px rgba("+X(Z[0])+",.4)"},de={boxShadow:"0 4px 20px 0 rgba("+X(te)+",.14), 0 7px 10px -5px rgba("+X(M[0])+",.4)"},le={boxShadow:"0 4px 20px 0 rgba("+X(te)+",.14), 0 7px 10px -5px rgba("+X(Q[0])+",.4)"},se={boxShadow:"0 4px 20px 0 rgba("+X(te)+",.14), 0 7px 10px -5px rgba("+X(ae[0])+",.4)"},pe=Object(o.a)({background:"linear-gradient(60deg, "+M[1]+", "+M[2]+")"},de),be=Object(o.a)({background:"linear-gradient(60deg, "+Z[1]+", "+Z[2]+")"},ce),xe=Object(o.a)({background:"linear-gradient(60deg, "+Q[1]+", "+Q[2]+")"},le),ge=Object(o.a)({background:"linear-gradient(60deg, "+ee[1]+", "+ee[2]+")"},ne),je=Object(o.a)({background:"linear-gradient(60deg, "+G[1]+", "+G[2]+")"},ie),me=Object(o.a)({background:"linear-gradient(60deg, "+ae[1]+", "+ae[2]+")"},se),he=(Object(o.a)({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid "+re[10],height:"auto"},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),X(te),X(te),X(te),X(te),X(te),{color:re[2],textDecoration:"none",fontWeight:"300",marginTop:"30px",marginBottom:"25px",minHeight:"32px",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif","& small":{color:re[1],fontWeight:"400",lineHeight:"1"}}),fe=(Object(o.a)(Object(o.a)({},he),{},{marginTop:"0",marginBottom:"3px",minHeight:"auto","& a":Object(o.a)(Object(o.a)({},he),{},{marginTop:".625rem",marginBottom:"0.75rem",minHeight:"auto"})}),{cardHeader:{padding:"0.75rem 1.25rem",marginBottom:"0",borderBottom:"none",background:"transparent",zIndex:"3 !important","&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader":{margin:"0 15px",padding:"0",position:"relative",color:oe},"&:first-child":{borderRadius:"calc(.25rem - 1px) calc(.25rem - 1px) 0 0"},"&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader":{"&:not($cardHeaderIcon)":{borderRadius:"3px",marginTop:"-20px",padding:"15px"}},"&$cardHeaderStats svg":{fontSize:"36px",lineHeight:"56px",textAlign:"center",width:"36px",height:"36px",margin:"10px 10px 4px"},"&$cardHeaderStats i,&$cardHeaderStats .material-icons":{fontSize:"36px",lineHeight:"56px",width:"56px",height:"56px",textAlign:"center",overflow:"unset",marginBottom:"1px"},"&$cardHeaderStats$cardHeaderIcon":{textAlign:"right"}},cardHeaderPlain:{marginLeft:"0px !important",marginRight:"0px !important"},cardHeaderStats:{"& $cardHeaderIcon":{textAlign:"right"},"& h1,& h2,& h3,& h4,& h5,& h6":{margin:"0 !important"}},cardHeaderIcon:{"&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader":{background:"transparent",boxShadow:"none"},"& i,& .material-icons":{width:"33px",height:"33px",textAlign:"center",lineHeight:"33px"},"& svg":{width:"24px",height:"24px",textAlign:"center",lineHeight:"33px",margin:"5px 4px 0px"}},warningCardHeader:{color:oe,"&:not($cardHeaderIcon)":Object(o.a)({},pe)},successCardHeader:{color:oe,"&:not($cardHeaderIcon)":Object(o.a)({},be)},dangerCardHeader:{color:oe,"&:not($cardHeaderIcon)":Object(o.a)({},xe)},infoCardHeader:{color:oe,"&:not($cardHeaderIcon)":Object(o.a)({},ge)},primaryCardHeader:{color:oe,"&:not($cardHeaderIcon)":Object(o.a)({},je)},roseCardHeader:{color:oe,"&:not($cardHeaderIcon)":Object(o.a)({},me)}}),Oe=["className","children","color","plain","stats","icon"],ue=Object(t.a)(fe);function He(e){var a,r=ue(),t=e.className,n=e.children,d=e.color,l=e.plain,s=e.stats,p=e.icon,b=Object(i.a)(e,Oe),x=m()((a={},Object(g.a)(a,r.cardHeader,!0),Object(g.a)(a,r[d+"CardHeader"],d),Object(g.a)(a,r.cardHeaderPlain,l),Object(g.a)(a,r.cardHeaderStats,s),Object(g.a)(a,r.cardHeaderIcon,p),Object(g.a)(a,t,void 0!==t),a));return Object(c.jsx)("div",Object(o.a)(Object(o.a)({className:x},b),{},{children:n}))}var Ce={cardBody:{padding:"0.9375rem 20px",flex:"1 1 auto",WebkitBoxFlex:"1",position:"relative"},cardBodyPlain:{paddingLeft:"5px",paddingRight:"5px"},cardBodyProfile:{marginTop:"15px"}},ve=["className","children","plain","profile"],we=Object(t.a)(Ce);function ye(e){var a,r=we(),t=e.className,n=e.children,d=e.plain,l=e.profile,s=Object(i.a)(e,ve),p=m()((a={},Object(g.a)(a,r.cardBody,!0),Object(g.a)(a,r.cardBodyPlain,d),Object(g.a)(a,r.cardBodyProfile,l),Object(g.a)(a,t,void 0!==t),a));return Object(c.jsx)("div",Object(o.a)(Object(o.a)({className:p},s),{},{children:n}))}var Pe={cardFooter:{padding:"0",paddingTop:"10px",margin:"0 15px 10px",borderRadius:"0",justifyContent:"space-between",alignItems:"center",display:"flex",backgroundColor:"transparent",border:"0"},cardFooterProfile:{marginTop:"-15px"},cardFooterPlain:{paddingLeft:"5px",paddingRight:"5px",backgroundColor:"transparent"},cardFooterStats:{borderTop:"1px solid "+re[10],marginTop:"20px","& svg":{position:"relative",top:"4px",marginRight:"3px",marginLeft:"3px",width:"16px",height:"16px"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"16px",position:"relative",top:"4px",marginRight:"3px",marginLeft:"3px"}},cardFooterChart:{borderTop:"1px solid "+re[10]}},Ne=["className","children","plain","profile","stats","chart"],$e=Object(t.a)(Pe);function Se(e){var a,r=$e(),t=e.className,n=e.children,d=e.plain,l=e.profile,s=e.stats,p=e.chart,b=Object(i.a)(e,Ne),x=m()((a={},Object(g.a)(a,r.cardFooter,!0),Object(g.a)(a,r.cardFooterPlain,d),Object(g.a)(a,r.cardFooterProfile,l),Object(g.a)(a,r.cardFooterStats,s),Object(g.a)(a,r.cardFooterChart,p),Object(g.a)(a,t,void 0!==t),a));return Object(c.jsx)("div",Object(o.a)(Object(o.a)({className:x},b),{},{children:n}))}var Te=r(1053),Re=r(1131),Fe=r(78),Ae=r(77),ke={cardCategoryWhite:{color:"rgba(255,255,255,.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},cardTitleWhite:{color:"#FFFFFF",marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none"},cardHeaderColor:{backgroundColor:"rgb(61, 69, 63)"},profile_info:{flex:"0.4",display:"flex",justifyContent:"center",alignItems:"center"}},Ie=Object(t.a)(ke);function We(){var e,a=Ie(),r=Object(Te.a)().register,t=Object(Te.a)().register,o=Object(Fe.c)(Ae.e);return o?Object(c.jsxs)(x,{style:{display:"flex",justifyContent:"start",alignItems:"start"},children:[Object(c.jsxs)("div",{style:{flex:"0.6"},className:"profile_change",children:[Object(c.jsx)(s,{sm:12,children:Object(c.jsx)("form",{children:Object(c.jsxs)(K,{children:[Object(c.jsxs)(He,{style:ke.cardHeaderColor,children:[Object(c.jsx)("h4",{className:a.cardTitleWhite,children:"Edit Profile"}),Object(c.jsx)("p",{className:a.cardCategoryWhite,children:"User information"})]}),Object(c.jsx)(ye,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{xs:12,sm:12,md:6,children:Object(c.jsx)(q,{inputRef:r({required:!0}),labelText:"Name",id:"NewUserName",name:"NewUserName",formControlProps:{fullWidth:!0},inputProps:{defaultValue:null!==(e=null===o||void 0===o?void 0:o.name)&&void 0!==e?e:"admin",type:"text",autoComplete:"off"}})}),Object(c.jsx)("div",{xs:12,sm:12,md:6,children:Object(c.jsx)(q,{inputRef:r({required:!0}),labelText:"Email address",id:"Email",name:"Email",formControlProps:{fullWidth:!0},inputProps:{defaultValue:null===o||void 0===o?void 0:o.email,type:"text",autoComplete:"off",disabled:"true"}})})]})}),Object(c.jsx)(Se,{children:Object(c.jsx)(Re.a,{variant:"contained",style:{width:"200px",margin:"20px"},color:"primary",type:"submit",children:"Save"})})]})})}),Object(c.jsx)(s,{sm:12,children:Object(c.jsx)("form",{children:Object(c.jsxs)(K,{children:[Object(c.jsxs)(He,{style:ke.cardHeaderColor,children:[Object(c.jsx)("h4",{className:a.cardTitleWhite,children:"Change password"}),Object(c.jsx)("p",{className:a.cardCategoryWhite,children:"Password"})]}),Object(c.jsxs)(ye,{children:[Object(c.jsx)("div",{sm:12,children:Object(c.jsx)(q,{inputRef:t({required:!0}),labelText:"Current Password",id:"CurrentPassword",name:"CurrentPassword",formControlProps:{fullWidth:!0},inputProps:{type:"password",autoComplete:"off"}})}),Object(c.jsx)("div",{sm:12,children:Object(c.jsx)(q,{inputRef:t({required:!0}),labelText:"New Password",id:"NewPassword",name:"NewPassword",formControlProps:{fullWidth:!0},inputProps:{type:"password",autoComplete:"off"}})}),Object(c.jsx)("div",{sm:12,children:Object(c.jsx)(q,{input:!0,Ref:t({required:!0}),labelText:"Confirm New Password",id:"ConfirmNewPassword",name:"ConfirmNewPassword",formControlProps:{fullWidth:!0},inputProps:{type:"password",autoComplete:"off"}})})]}),Object(c.jsx)(Se,{children:Object(c.jsx)(Re.a,{variant:"contained",color:"primary",type:"submit",children:"Change Password"})})]})})})]}),Object(c.jsx)("div",{style:ke.profile_info,children:Object(c.jsx)("div",{children:Object(c.jsx)("img",{style:{borderRadius:"999px"},src:"https://cdn.vox-cdn.com/thumbor/mXo5ObKpTbHYi9YslBy6YhfedT4=/95x601:1280x1460/1200x800/filters:focal(538x858:742x1062)/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png",alt:"...",height:"200",weight:"200"})})})]}):Object(c.jsx)("div",{children:"Unauthorized"})}}}]);
//# sourceMappingURL=16.6d95d528.chunk.js.map