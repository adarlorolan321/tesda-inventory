<<<<<<<< HEAD:public/build/assets/Show-d6144ee4.js
import{J as S,k as L,o as l,c as i,b as f,u as e,X as O,w as j,a as s,g as c,t as n,n as m,l as G,F as $,e as _,d as x,v as k,i as V,r as F,h as M,j as D}from"./app-02325148.js";import{u as H}from"./Crud-e393132a.js";import{u as z}from"./Validate-41641959.js";import{u as J}from"./InputFormat-d34120ad.js";import{A as U}from"./AdminLayout-5224df70.js";import"./lodash-eab84a5c.js";import"./toastr-c481c787.js";const K={class:"container-xxl flex-grow-1 container-p-y"},R={class:"fw-bold py-3 mb-4"},X=s("span",{class:"text-muted fw-light"},"Parent / View /",-1),W={class:"row"},Y={class:"col-xl-4 col-lg-5 col-md-5 order-1 order-md-0"},Z={class:"card mb-4"},ss={class:"card-body"},es={class:"user-avatar-section"},ts={class:"d-flex align-items-center flex-column"},os=["src"],as={class:"user-info text-center"},ns={class:"mb-2"},ls={class:"badge bg-label-secondary mt-1"},is=s("p",{class:"mt-4 small text-uppercase text-muted"}," Details ",-1),rs={class:"info-container"},ds={class:"list-unstyled"},cs={class:"mb-2 pt-1"},_s=s("span",{class:"fw-semibold me-1"},"Email:",-1),ms={class:"mb-2 pt-1"},us=s("span",{class:"fw-semibold me-1"},"Status:",-1),ps={class:"mb-2 pt-1"},vs=s("span",{class:"fw-semibold me-1"},"Role:",-1),hs={class:"mb-2 pt-1"},fs=s("span",{class:"fw-semibold me-1"},"Phone:",-1),bs={class:"col-xl-8 col-lg-7 col-md-7 order-0 order-md-1"},gs=s("ul",{class:"nav nav-pills flex-column flex-md-row mb-4"},[s("li",{class:"nav-item"},[s("a",{class:"nav-link active",href:"javascript:void(0);"},[s("i",{class:"ti ti-user-check ti-xs me-1"}),c("Players")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-cash-banknote ti-xs me-1"}),c("Payments")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-cash-banknote ti-xs me-1"}),c("Enrolments")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-pencil ti-xs me-1"}),c("Update")])])],-1),ys={components:{AdminLayout:U}},xs=Object.assign(ys,{__name:"ParentLayout",setup(A){S();const r=L(()=>S().props.parent);return(w,B)=>(l(),i($,null,[f(e(O),{title:"Profile"}),f(U,null,{default:j(()=>{var p,b,g,d,o,v,h,y,C,u;return[s("div",K,[s("h4",R,[X,c(" "+n((p=e(r))==null?void 0:p.first_name),1)]),s("div",W,[s("div",Y,[s("div",Z,[s("div",ss,[s("div",es,[s("div",ts,[s("img",{class:"img-fluid rounded mb-3 pt-1 mt-4",src:(b=e(r))==null?void 0:b.profile_photo_url,height:"100",width:"100",alt:"User avatar"},null,8,os),s("div",as,[s("h4",ns,n((g=e(r))==null?void 0:g.name),1),s("span",ls,n((d=e(r))==null?void 0:d.role),1)])])]),is,s("div",rs,[s("ul",ds,[s("li",cs,[_s,s("span",null,n((o=e(r))==null?void 0:o.email),1)]),s("li",ms,[us,s("span",{class:m(["badge",{"bg-label-success":((v=e(r))==null?void 0:v.status)==1,"bg-label-danger":((h=e(r))==null?void 0:h.status)==0}])},n(((y=e(r))==null?void 0:y.status)==1?"Active":"In-Active"),3)]),s("li",ps,[vs,s("span",null,n((C=e(r))==null?void 0:C.role),1)]),s("li",hs,[fs,s("span",null,n((u=e(r))==null?void 0:u.phone),1)])])])])])]),s("div",bs,[gs,G(w.$slots,"default")])])])]}),_:3})],64))}}),ks={class:"card card-action"},$s={class:"card-header"},ws=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"Players")],-1),Cs={class:"card-action-element"},Es=s("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Player ",-1),Ps={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Vs={class:"offcanvas-header"},Fs={id:"offCanvasFormLabel",class:"offcanvas-title"},Ss={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},js={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},Ns={class:"form-group mb-3"},Is=s("label",{for:""},[c("First Name "),s("span",{class:"required"},"*")],-1),Ls={class:"invalid-feedback"},Us={class:"form-group mb-3"},As=s("label",{for:""},"Last Name",-1),Bs={class:"invalid-feedback"},qs={class:"form-group mb-3"},Qs=s("label",{for:""},"Date Of Birth",-1),Ts={class:"invalid-feedback"},Os={class:"form-group mb-3"},Gs=s("label",{for:""},"Email",-1),Ms={class:"invalid-feedback"},Ds={class:"form-group mb-3"},Hs=s("label",null,"Phone",-1),zs={class:"invalid-feedback"},Js={class:"form-group mb-3"},Ks=s("label",{for:"gender"},"Gender ",-1),Rs={key:0,class:"v-invalid-feedback"},Xs=["disabled"],Ws={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Ys=["disabled"],Zs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},se={class:"card-body"},ee={class:"row justify-content-between"},te={class:"col-auto"},oe={class:"d-flex align-items-center gap-2"},ae=s("div",{class:"w-auto"},"Show",-1),ne={class:"flex-1"},le=["value"],ie=["value"],re=s("div",{class:"w-auto"},"entries",-1),de={class:"col-auto"},ce={class:"d-flex gap-2 align-items-center"},_e=s("div",{class:"w-auto"},"Search:",-1),me={class:"flex-1"},ue=["value"],pe={class:"table-responsive text-nowrap"},ve={class:"table"},he={class:"table-light",style:{"min-width":"200px"}},fe=s("th",{style:{width:"150px"}},"Actions",-1),be={class:"table-border-bottom-0"},ge={key:0},ye=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),xe=[ye],ke={class:"d-flex gap-2"},$e=["onClick"],we=s("i",{class:"ti ti-eye"},null,-1),Ce=[we],Ee=["onClick"],Pe=s("i",{class:"ti ti-pencil"},null,-1),Ve=[Pe],Fe=["onClick"],Se=s("i",{class:"ti ti-trash"},null,-1),je=[Se],Ne={key:0,class:"card-footer py-3 border-top"},Ie={class:"row justify-content-between"},Le={class:"col-auto"},Ue={class:"table_info"},Ae={class:"col-auto"},Be={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},qe={class:"pagination mb-0"},Qe=["innerHTML"],Te={layout:xs},Re=Object.assign(Te,{__name:"Show",setup(A){const{validateForm:r}=z(),{dateFormat:w,timeFormat:B}=J(),p=L(()=>S().props.parent),b="students",g={first_name:null,last_name:null,parent_id:p.value.id,dob:null,email:null,phone:null,gender:null};let{paginatedData:d,form:o,createPromise:v,updatePromise:h,deletePromise:y,handleCreate:C,serverQuery:u,handleServerQuery:E,handleEdit:N,formState:P}=H(g,b,{routeName:"user.parents.show",routeId:p.value.id});return(Oe,a)=>{const q=F("flat-pickr"),Q=F("select2"),T=F("table-header");return l(),i("div",ks,[s("div",$s,[ws,s("div",Cs,[Es,s("div",Ps,[s("div",Vs,[s("h5",Fs,n(e(P)=="create"?"Add":"Update")+" Player ",1),e(o).processing?_("",!0):(l(),i("button",Ss))]),s("div",js,[s("div",Ns,[Is,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":e(o).errors.first_name}]),"onUpdate:modelValue":a[0]||(a[0]=t=>e(o).first_name=t),onInput:a[1]||(a[1]=t=>{e(o).clearErrors("first_name"),e(r)(["required"],e(o),t.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[k,e(o).first_name]]),s("div",Ls,n(e(o).errors.first_name),1)]),s("div",Us,[As,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":e(o).errors.last_name}]),"onUpdate:modelValue":a[2]||(a[2]=t=>e(o).last_name=t),onInput:a[3]||(a[3]=t=>{e(o).clearErrors("last_name"),e(r)(["required"],e(o),t.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[k,e(o).last_name]]),s("div",Bs,n(e(o).errors.last_name),1)]),s("div",qs,[Qs,f(q,{config:e(w),class:m(["form-control",{"is-invalid":e(o).errors.dob}]),placeholder:"Enter Date of Birth",modelValue:e(o).dob,"onUpdate:modelValue":a[4]||(a[4]=t=>e(o).dob=t),onInput:a[5]||(a[5]=t=>{e(o).clearErrors("dob")})},null,8,["config","class","modelValue"]),s("div",Ts,n(e(o).errors.dob),1)]),s("div",Os,[Gs,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":e(o).errors.email}]),"onUpdate:modelValue":a[6]||(a[6]=t=>e(o).email=t),onInput:a[7]||(a[7]=t=>{e(o).clearErrors("email"),e(r)(["email"],e(o),t.target.value,"email")}),placeholder:"Enter Email"},null,34),[[k,e(o).email]]),s("div",Ms,n(e(o).errors.email),1)]),s("div",Ds,[Hs,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":e(o).errors.phone}]),"onUpdate:modelValue":a[8]||(a[8]=t=>e(o).phone=t),onInput:a[9]||(a[9]=t=>{e(o).clearErrors("phone")}),placeholder:"Enter Phone"},null,34),[[k,e(o).phone]]),s("div",zs,n(e(o).errors.phone),1)]),s("div",Js,[Ks,f(Q,{class:m({"is-invalid":e(o).errors.gender}),modelValue:e(o).gender,"onUpdate:modelValue":[a[10]||(a[10]=t=>e(o).gender=t),a[11]||(a[11]=t=>e(o).clearErrors("gender"))],placeholder:"Select Gender",options:["Boy","Girl","Prefer not to say"]},null,8,["class","modelValue"]),e(o).errors.gender?(l(),i("div",Rs,n(e(o).errors.gender),1)):_("",!0)]),e(P)=="create"?(l(),i("button",{key:0,class:"btn btn-primary",onClick:a[12]||(a[12]=(...t)=>e(v)&&e(v)(...t)),disabled:e(o).processing||e(o).hasErrors},[e(o).processing?(l(),i("span",Ws)):_("",!0),c(" Save ")],8,Xs)):_("",!0),e(P)=="update"?(l(),i("button",{key:1,class:"btn btn-primary",onClick:a[13]||(a[13]=(...t)=>e(h)&&e(h)(...t)),disabled:e(o).processing||e(o).hasErrors},[e(o).processing?(l(),i("span",Zs)):_("",!0),c(" Save changes ")],8,Ys)):_("",!0)])])])]),s("div",se,[s("div",ee,[s("div",te,[s("div",oe,[ae,s("div",ne,[s("select",{class:"form-select",value:e(u).perPage,onInput:a[14]||(a[14]=t=>e(E)("perPage",t.target.value))},[(l(),i($,null,V([5,10,25,50,100],t=>s("option",{value:String(t),key:t},n(t),9,ie)),64))],40,le)]),re])]),s("div",de,[s("div",ce,[_e,s("div",me,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(u).query,onInput:a[15]||(a[15]=t=>e(E)("query",t.target.value))},null,40,ue)])])])])]),s("div",pe,[s("table",ve,[s("thead",he,[s("tr",null,[f(T,{style:{"min-width":"200px",width:"90%"},onClick:a[16]||(a[16]=t=>e(E)("sort","name")),serverQuery:e(u),serverQueryKey:"name"},{default:j(()=>[c(" Name ")]),_:1},8,["serverQuery"]),fe])]),s("tbody",be,[e(d).data.length<=0?(l(),i("tr",ge,xe)):_("",!0),(l(!0),i($,null,V(e(d).data,t=>(l(),i("tr",{key:t},[s("td",null,n(t.first_name)+" "+n(t.last_name),1),s("td",null,[s("div",ke,[s("a",{class:"btn btn-icon btn-label-info waves-effect",onClick:I=>e(N)(t),href:"javascript:void(0);"},Ce,8,$e),s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:I=>e(N)(t),href:"javascript:void(0);"},Ve,8,Ee),s("a",{class:"btn btn-icon btn-label-danger waves-effect",id:"confirm-text",href:"javascript:void(0);",onClick:I=>e(y)(t.id)},je,8,Fe)])])]))),128))])])]),e(d)&&e(d).meta.links?(l(),i("div",Ne,[s("div",Ie,[s("div",Le,[s("div",Ue," Showing "+n(e(d).meta.from)+" to "+n(e(d).meta.to)+" of "+n(e(d).meta.total)+" entries ",1)]),s("div",Ae,[s("nav",Be,[s("ul",qe,[(l(!0),i($,null,V(e(d).meta.links,t=>(l(),i("li",{class:"page-item",key:t},[(l(),M(D(t.url?"inertia-link":"button"),{class:m(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:j(()=>[s("span",{innerHTML:t.label},null,8,Qe)]),_:2},1032,["class","href"]))]))),128))])])])])])):_("",!0)])}}});export{Re as default};
========
import{J as S,k as L,o as l,c as i,b as f,u as e,X as O,w as j,a as s,g as c,t as n,n as m,l as G,F as $,e as _,d as x,v as k,i as V,r as F,h as M,j as D}from"./app-db7d4cd9.js";import{u as H}from"./Crud-a0cc990d.js";import{u as z}from"./Validate-c042bdd7.js";import{u as J}from"./InputFormat-8841c781.js";import{A as U}from"./AdminLayout-ac8dde6e.js";import"./lodash-1bd1abf8.js";import"./toastr-5f6040e8.js";const K={class:"container-xxl flex-grow-1 container-p-y"},R={class:"fw-bold py-3 mb-4"},X=s("span",{class:"text-muted fw-light"},"Parent / View /",-1),W={class:"row"},Y={class:"col-xl-4 col-lg-5 col-md-5 order-1 order-md-0"},Z={class:"card mb-4"},ss={class:"card-body"},es={class:"user-avatar-section"},ts={class:"d-flex align-items-center flex-column"},os=["src"],as={class:"user-info text-center"},ns={class:"mb-2"},ls={class:"badge bg-label-secondary mt-1"},is=s("p",{class:"mt-4 small text-uppercase text-muted"}," Details ",-1),rs={class:"info-container"},ds={class:"list-unstyled"},cs={class:"mb-2 pt-1"},_s=s("span",{class:"fw-semibold me-1"},"Email:",-1),ms={class:"mb-2 pt-1"},us=s("span",{class:"fw-semibold me-1"},"Status:",-1),ps={class:"mb-2 pt-1"},vs=s("span",{class:"fw-semibold me-1"},"Role:",-1),hs={class:"mb-2 pt-1"},fs=s("span",{class:"fw-semibold me-1"},"Phone:",-1),bs={class:"col-xl-8 col-lg-7 col-md-7 order-0 order-md-1"},gs=s("ul",{class:"nav nav-pills flex-column flex-md-row mb-4"},[s("li",{class:"nav-item"},[s("a",{class:"nav-link active",href:"javascript:void(0);"},[s("i",{class:"ti ti-user-check ti-xs me-1"}),c("Players")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-cash-banknote ti-xs me-1"}),c("Payments")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-cash-banknote ti-xs me-1"}),c("Enrolments")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-pencil ti-xs me-1"}),c("Update")])])],-1),ys={components:{AdminLayout:U}},xs=Object.assign(ys,{__name:"ParentLayout",setup(A){S();const r=L(()=>S().props.parent);return(w,B)=>(l(),i($,null,[f(e(O),{title:"Profile"}),f(U,null,{default:j(()=>{var p,b,g,d,o,v,h,y,C,u;return[s("div",K,[s("h4",R,[X,c(" "+n((p=e(r))==null?void 0:p.first_name),1)]),s("div",W,[s("div",Y,[s("div",Z,[s("div",ss,[s("div",es,[s("div",ts,[s("img",{class:"img-fluid rounded mb-3 pt-1 mt-4",src:(b=e(r))==null?void 0:b.profile_photo_url,height:"100",width:"100",alt:"User avatar"},null,8,os),s("div",as,[s("h4",ns,n((g=e(r))==null?void 0:g.name),1),s("span",ls,n((d=e(r))==null?void 0:d.role),1)])])]),is,s("div",rs,[s("ul",ds,[s("li",cs,[_s,s("span",null,n((o=e(r))==null?void 0:o.email),1)]),s("li",ms,[us,s("span",{class:m(["badge",{"bg-label-success":((v=e(r))==null?void 0:v.status)==1,"bg-label-danger":((h=e(r))==null?void 0:h.status)==0}])},n(((y=e(r))==null?void 0:y.status)==1?"Active":"In-Active"),3)]),s("li",ps,[vs,s("span",null,n((C=e(r))==null?void 0:C.role),1)]),s("li",hs,[fs,s("span",null,n((u=e(r))==null?void 0:u.phone),1)])])])])])]),s("div",bs,[gs,G(w.$slots,"default")])])])]}),_:3})],64))}}),ks={class:"card card-action"},$s={class:"card-header"},ws=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"Players")],-1),Cs={class:"card-action-element"},Es=s("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Player ",-1),Ps={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Vs={class:"offcanvas-header"},Fs={id:"offCanvasFormLabel",class:"offcanvas-title"},Ss={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},js={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},Ns={class:"form-group mb-3"},Is=s("label",{for:""},[c("First Name "),s("span",{class:"required"},"*")],-1),Ls={class:"invalid-feedback"},Us={class:"form-group mb-3"},As=s("label",{for:""},"Last Name",-1),Bs={class:"invalid-feedback"},qs={class:"form-group mb-3"},Qs=s("label",{for:""},"Date Of Birth",-1),Ts={class:"invalid-feedback"},Os={class:"form-group mb-3"},Gs=s("label",{for:""},"Email",-1),Ms={class:"invalid-feedback"},Ds={class:"form-group mb-3"},Hs=s("label",null,"Phone",-1),zs={class:"invalid-feedback"},Js={class:"form-group mb-3"},Ks=s("label",{for:"gender"},"Gender ",-1),Rs={key:0,class:"v-invalid-feedback"},Xs=["disabled"],Ws={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Ys=["disabled"],Zs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},se={class:"card-body"},ee={class:"row justify-content-between"},te={class:"col-auto"},oe={class:"d-flex align-items-center gap-2"},ae=s("div",{class:"w-auto"},"Show",-1),ne={class:"flex-1"},le=["value"],ie=["value"],re=s("div",{class:"w-auto"},"entries",-1),de={class:"col-auto"},ce={class:"d-flex gap-2 align-items-center"},_e=s("div",{class:"w-auto"},"Search:",-1),me={class:"flex-1"},ue=["value"],pe={class:"table-responsive text-nowrap"},ve={class:"table"},he={class:"table-light",style:{"min-width":"200px"}},fe=s("th",{style:{width:"150px"}},"Actions",-1),be={class:"table-border-bottom-0"},ge={key:0},ye=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),xe=[ye],ke={class:"d-flex gap-2"},$e=["onClick"],we=s("i",{class:"ti ti-eye"},null,-1),Ce=[we],Ee=["onClick"],Pe=s("i",{class:"ti ti-pencil"},null,-1),Ve=[Pe],Fe=["onClick"],Se=s("i",{class:"ti ti-trash"},null,-1),je=[Se],Ne={key:0,class:"card-footer py-3 border-top"},Ie={class:"row justify-content-between"},Le={class:"col-auto"},Ue={class:"table_info"},Ae={class:"col-auto"},Be={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},qe={class:"pagination mb-0"},Qe=["innerHTML"],Te={layout:xs},Re=Object.assign(Te,{__name:"Show",setup(A){const{validateForm:r}=z(),{dateFormat:w,timeFormat:B}=J(),p=L(()=>S().props.parent),b="students",g={first_name:null,last_name:null,parent_id:p.value.id,dob:null,email:null,phone:null,gender:null};let{paginatedData:d,form:o,createPromise:v,updatePromise:h,deletePromise:y,handleCreate:C,serverQuery:u,handleServerQuery:E,handleEdit:N,formState:P}=H(g,b,{routeName:"user.parents.show",routeId:p.value.id});return(Oe,a)=>{const q=F("flat-pickr"),Q=F("select2"),T=F("table-header");return l(),i("div",ks,[s("div",$s,[ws,s("div",Cs,[Es,s("div",Ps,[s("div",Vs,[s("h5",Fs,n(e(P)=="create"?"Add":"Update")+" Player ",1),e(o).processing?_("",!0):(l(),i("button",Ss))]),s("div",js,[s("div",Ns,[Is,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":e(o).errors.first_name}]),"onUpdate:modelValue":a[0]||(a[0]=t=>e(o).first_name=t),onInput:a[1]||(a[1]=t=>{e(o).clearErrors("first_name"),e(r)(["required"],e(o),t.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[k,e(o).first_name]]),s("div",Ls,n(e(o).errors.first_name),1)]),s("div",Us,[As,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":e(o).errors.last_name}]),"onUpdate:modelValue":a[2]||(a[2]=t=>e(o).last_name=t),onInput:a[3]||(a[3]=t=>{e(o).clearErrors("last_name"),e(r)(["required"],e(o),t.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[k,e(o).last_name]]),s("div",Bs,n(e(o).errors.last_name),1)]),s("div",qs,[Qs,f(q,{config:e(w),class:m(["form-control",{"is-invalid":e(o).errors.dob}]),placeholder:"Enter Date of Birth",modelValue:e(o).dob,"onUpdate:modelValue":a[4]||(a[4]=t=>e(o).dob=t),onInput:a[5]||(a[5]=t=>{e(o).clearErrors("dob")})},null,8,["config","class","modelValue"]),s("div",Ts,n(e(o).errors.dob),1)]),s("div",Os,[Gs,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":e(o).errors.email}]),"onUpdate:modelValue":a[6]||(a[6]=t=>e(o).email=t),onInput:a[7]||(a[7]=t=>{e(o).clearErrors("email"),e(r)(["email"],e(o),t.target.value,"email")}),placeholder:"Enter Email"},null,34),[[k,e(o).email]]),s("div",Ms,n(e(o).errors.email),1)]),s("div",Ds,[Hs,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":e(o).errors.phone}]),"onUpdate:modelValue":a[8]||(a[8]=t=>e(o).phone=t),onInput:a[9]||(a[9]=t=>{e(o).clearErrors("phone")}),placeholder:"Enter Phone"},null,34),[[k,e(o).phone]]),s("div",zs,n(e(o).errors.phone),1)]),s("div",Js,[Ks,f(Q,{class:m({"is-invalid":e(o).errors.gender}),modelValue:e(o).gender,"onUpdate:modelValue":[a[10]||(a[10]=t=>e(o).gender=t),a[11]||(a[11]=t=>e(o).clearErrors("gender"))],placeholder:"Select Gender",options:["Boy","Girl","Prefer not to say"]},null,8,["class","modelValue"]),e(o).errors.gender?(l(),i("div",Rs,n(e(o).errors.gender),1)):_("",!0)]),e(P)=="create"?(l(),i("button",{key:0,class:"btn btn-primary",onClick:a[12]||(a[12]=(...t)=>e(v)&&e(v)(...t)),disabled:e(o).processing||e(o).hasErrors},[e(o).processing?(l(),i("span",Ws)):_("",!0),c(" Save ")],8,Xs)):_("",!0),e(P)=="update"?(l(),i("button",{key:1,class:"btn btn-primary",onClick:a[13]||(a[13]=(...t)=>e(h)&&e(h)(...t)),disabled:e(o).processing||e(o).hasErrors},[e(o).processing?(l(),i("span",Zs)):_("",!0),c(" Save changes ")],8,Ys)):_("",!0)])])])]),s("div",se,[s("div",ee,[s("div",te,[s("div",oe,[ae,s("div",ne,[s("select",{class:"form-select",value:e(u).perPage,onInput:a[14]||(a[14]=t=>e(E)("perPage",t.target.value))},[(l(),i($,null,V([5,10,25,50,100],t=>s("option",{value:String(t),key:t},n(t),9,ie)),64))],40,le)]),re])]),s("div",de,[s("div",ce,[_e,s("div",me,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(u).query,onInput:a[15]||(a[15]=t=>e(E)("query",t.target.value))},null,40,ue)])])])])]),s("div",pe,[s("table",ve,[s("thead",he,[s("tr",null,[f(T,{style:{"min-width":"200px",width:"90%"},onClick:a[16]||(a[16]=t=>e(E)("sort","name")),serverQuery:e(u),serverQueryKey:"name"},{default:j(()=>[c(" Name ")]),_:1},8,["serverQuery"]),fe])]),s("tbody",be,[e(d).data.length<=0?(l(),i("tr",ge,xe)):_("",!0),(l(!0),i($,null,V(e(d).data,t=>(l(),i("tr",{key:t},[s("td",null,n(t.first_name)+" "+n(t.last_name),1),s("td",null,[s("div",ke,[s("a",{class:"btn btn-icon btn-label-info waves-effect",onClick:I=>e(N)(t),href:"javascript:void(0);"},Ce,8,$e),s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:I=>e(N)(t),href:"javascript:void(0);"},Ve,8,Ee),s("a",{class:"btn btn-icon btn-label-danger waves-effect",id:"confirm-text",href:"javascript:void(0);",onClick:I=>e(y)(t.id)},je,8,Fe)])])]))),128))])])]),e(d)&&e(d).meta.links?(l(),i("div",Ne,[s("div",Ie,[s("div",Le,[s("div",Ue," Showing "+n(e(d).meta.from)+" to "+n(e(d).meta.to)+" of "+n(e(d).meta.total)+" entries ",1)]),s("div",Ae,[s("nav",Be,[s("ul",qe,[(l(!0),i($,null,V(e(d).meta.links,t=>(l(),i("li",{class:"page-item",key:t},[(l(),M(D(t.url?"inertia-link":"button"),{class:m(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:j(()=>[s("span",{innerHTML:t.label},null,8,Qe)]),_:2},1032,["class","href"]))]))),128))])])])])])):_("",!0)])}}});export{Re as default};
>>>>>>>> 33a6ae20aca29ca930f69871096445e662a9faa4:public/build/assets/Show-79817674.js
