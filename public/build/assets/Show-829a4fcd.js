import{J as $,k as S,o as l,c as i,b as f,u as t,X as O,w as N,a as s,g as c,t as n,n as m,l as D,F as w,e as _,d as x,v as k,i as F,r as j,h as G,j as M}from"./app-1a00f368.js";import{u as H}from"./Crud-2d5fe06e.js";import{u as z}from"./Validate-53ff10c7.js";import{u as J}from"./InputFormat-d34120ad.js";import{A}from"./AdminLayout-d04bf10b.js";import"./lodash-78f4d0f6.js";import"./toastr-a7a4d37b.js";const K={class:"container-xxl flex-grow-1 container-p-y"},R={class:"fw-bold py-3 mb-4"},X={class:"text-muted fw-light"},W=s("a",{href:"/user/parents"},"Parent",-1),Y={class:"row"},Z={class:"col-xl-4 col-lg-5 col-md-5 order-1 order-md-0"},ss={class:"card mb-4"},ts={class:"card-body"},es={class:"user-avatar-section"},os={class:"d-flex align-items-center flex-column"},as=["src"],ns={class:"user-info text-center"},ls={class:"mb-2"},is={class:"badge bg-label-secondary mt-1"},rs=s("p",{class:"mt-4 small text-uppercase text-muted"}," Details ",-1),ds={class:"info-container"},cs={class:"list-unstyled"},_s={class:"mb-2 pt-1"},ms=s("span",{class:"fw-semibold me-1"},"Email:",-1),us={class:"mb-2 pt-1"},ps=s("span",{class:"fw-semibold me-1"},"Status:",-1),vs={class:"mb-2 pt-1"},hs=s("span",{class:"fw-semibold me-1"},"Role:",-1),fs={class:"mb-2 pt-1"},bs=s("span",{class:"fw-semibold me-1"},"Phone:",-1),gs={class:"col-xl-8 col-lg-7 col-md-7 order-0 order-md-1"},ys=s("ul",{class:"nav nav-pills flex-column flex-md-row mb-4"},[s("li",{class:"nav-item"},[s("a",{class:"nav-link active",href:"javascript:void(0);"},[s("i",{class:"ti ti-user-check ti-xs me-1"}),c("Players")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-cash-banknote ti-xs me-1"}),c("Payments")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-cash-banknote ti-xs me-1"}),c("Enrolments")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-pencil ti-xs me-1"}),c("Update")])])],-1),xs={components:{AdminLayout:A}},ks=Object.assign(xs,{__name:"ParentLayout",setup(B){$();const r=S(()=>$().props.parent),C=S(()=>$().props.title);return(I,E)=>(l(),i(w,null,[f(t(O),{title:"Profile"}),f(A,null,{default:N(()=>{var b,g,d,o,v,h,y,P,u,p;return[s("div",K,[s("h4",R,[s("span",X,[W,c(" / View / "+n((b=t(r))==null?void 0:b.first_name)+" /",1)]),c(" "+n(t(C)),1)]),s("div",Y,[s("div",Z,[s("div",ss,[s("div",ts,[s("div",es,[s("div",os,[s("img",{class:"img-fluid rounded mb-3 pt-1 mt-4",src:(g=t(r))==null?void 0:g.profile_photo_url,height:"100",width:"100",alt:"User avatar"},null,8,as),s("div",ns,[s("h4",ls,n((d=t(r))==null?void 0:d.name),1),s("span",is,n((o=t(r))==null?void 0:o.role),1)])])]),rs,s("div",ds,[s("ul",cs,[s("li",_s,[ms,s("span",null,n((v=t(r))==null?void 0:v.email),1)]),s("li",us,[ps,s("span",{class:m(["badge",{"bg-label-success":((h=t(r))==null?void 0:h.status)==1,"bg-label-danger":((y=t(r))==null?void 0:y.status)==0}])},n(((P=t(r))==null?void 0:P.status)==1?"Active":"In-Active"),3)]),s("li",vs,[hs,s("span",null,n((u=t(r))==null?void 0:u.role),1)]),s("li",fs,[bs,s("span",null,n((p=t(r))==null?void 0:p.phone),1)])])])])])]),s("div",gs,[ys,D(I.$slots,"default")])])])]}),_:3})],64))}}),$s={class:"card card-action"},ws={class:"card-header"},Cs=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"Players")],-1),Es={class:"card-action-element"},Ps=s("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Player ",-1),Vs={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Fs={class:"offcanvas-header"},js={id:"offCanvasFormLabel",class:"offcanvas-title"},Ss={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},Ns={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},Is={class:"form-group mb-3"},Ls=s("label",{for:""},[c("First Name "),s("span",{class:"required"},"*")],-1),Us={class:"invalid-feedback"},As={class:"form-group mb-3"},Bs=s("label",{for:""},"Last Name",-1),qs={class:"invalid-feedback"},Qs={class:"form-group mb-3"},Ts=s("label",{for:""},"Date Of Birth",-1),Os={class:"invalid-feedback"},Ds={class:"form-group mb-3"},Gs=s("label",{for:""},"Email",-1),Ms={class:"invalid-feedback"},Hs={class:"form-group mb-3"},zs=s("label",null,"Phone",-1),Js={class:"invalid-feedback"},Ks={class:"form-group mb-3"},Rs=s("label",{for:"gender"},"Gender ",-1),Xs={key:0,class:"v-invalid-feedback"},Ws=["disabled"],Ys={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Zs=["disabled"],st={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},tt={class:"card-body"},et={class:"row justify-content-between"},ot={class:"col-auto"},at={class:"d-flex align-items-center gap-2"},nt=s("div",{class:"w-auto"},"Show",-1),lt={class:"flex-1"},it=["value"],rt=["value"],dt=s("div",{class:"w-auto"},"entries",-1),ct={class:"col-auto"},_t={class:"d-flex gap-2 align-items-center"},mt={class:"flex-1"},ut={class:"input-group input-group-merge"},pt=s("span",{class:"input-group-text",id:"basic-addon-search31"},[s("i",{class:"ti ti-search"})],-1),vt=["value"],ht={class:"table-responsive text-nowrap"},ft={class:"table"},bt={class:"table-light",style:{"min-width":"200px"}},gt=s("th",{style:{width:"150px"}},"Actions",-1),yt={class:"table-border-bottom-0"},xt={key:0},kt=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),$t=[kt],wt={class:"d-flex gap-2"},Ct=["onClick"],Et=s("i",{class:"ti ti-eye"},null,-1),Pt=[Et],Vt=["onClick"],Ft=s("i",{class:"ti ti-pencil"},null,-1),jt=[Ft],St=["onClick"],Nt=s("i",{class:"ti ti-trash"},null,-1),It=[Nt],Lt={key:0,class:"card-footer py-3 border-top"},Ut={class:"row justify-content-between"},At={class:"col-auto"},Bt={class:"table_info"},qt={class:"col-auto"},Qt={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Tt={class:"pagination mb-0"},Ot=["innerHTML"],Dt={layout:ks},Wt=Object.assign(Dt,{__name:"Show",setup(B){const{validateForm:r}=z(),{dateFormat:C,timeFormat:I}=J(),E=S(()=>$().props.parent),b="students",g={first_name:null,last_name:null,parent_id:E.value.id,dob:null,email:null,phone:null,gender:null};let{paginatedData:d,form:o,createPromise:v,updatePromise:h,deletePromise:y,handleCreate:P,serverQuery:u,handleServerQuery:p,handleEdit:L,formState:V}=H(g,b,{routeName:"user.parents.show",routeId:E.value.id});return(Gt,a)=>{const q=j("flat-pickr"),Q=j("select2"),T=j("table-header");return l(),i("div",$s,[s("div",ws,[Cs,s("div",Es,[Ps,s("div",Vs,[s("div",Fs,[s("h5",js,n(t(V)=="create"?"Add":"Update")+" Player ",1),t(o).processing?_("",!0):(l(),i("button",Ss))]),s("div",Ns,[s("div",Is,[Ls,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":t(o).errors.first_name}]),"onUpdate:modelValue":a[0]||(a[0]=e=>t(o).first_name=e),onInput:a[1]||(a[1]=e=>{t(o).clearErrors("first_name"),t(r)(["required"],t(o),e.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[k,t(o).first_name]]),s("div",Us,n(t(o).errors.first_name),1)]),s("div",As,[Bs,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":t(o).errors.last_name}]),"onUpdate:modelValue":a[2]||(a[2]=e=>t(o).last_name=e),onInput:a[3]||(a[3]=e=>{t(o).clearErrors("last_name"),t(r)(["required"],t(o),e.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[k,t(o).last_name]]),s("div",qs,n(t(o).errors.last_name),1)]),s("div",Qs,[Ts,f(q,{config:t(C),class:m(["form-control",{"is-invalid":t(o).errors.dob}]),placeholder:"Enter Date of Birth",modelValue:t(o).dob,"onUpdate:modelValue":a[4]||(a[4]=e=>t(o).dob=e),onInput:a[5]||(a[5]=e=>{t(o).clearErrors("dob")})},null,8,["config","class","modelValue"]),s("div",Os,n(t(o).errors.dob),1)]),s("div",Ds,[Gs,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":t(o).errors.email}]),"onUpdate:modelValue":a[6]||(a[6]=e=>t(o).email=e),onInput:a[7]||(a[7]=e=>{t(o).clearErrors("email"),t(r)(["email"],t(o),e.target.value,"email")}),placeholder:"Enter Email"},null,34),[[k,t(o).email]]),s("div",Ms,n(t(o).errors.email),1)]),s("div",Hs,[zs,x(s("input",{type:"text",class:m(["form-control",{"is-invalid":t(o).errors.phone}]),"onUpdate:modelValue":a[8]||(a[8]=e=>t(o).phone=e),onInput:a[9]||(a[9]=e=>{t(o).clearErrors("phone")}),placeholder:"Enter Phone"},null,34),[[k,t(o).phone]]),s("div",Js,n(t(o).errors.phone),1)]),s("div",Ks,[Rs,f(Q,{class:m({"is-invalid":t(o).errors.gender}),modelValue:t(o).gender,"onUpdate:modelValue":[a[10]||(a[10]=e=>t(o).gender=e),a[11]||(a[11]=e=>t(o).clearErrors("gender"))],placeholder:"Select Gender",options:["Boy","Girl","Prefer not to say"]},null,8,["class","modelValue"]),t(o).errors.gender?(l(),i("div",Xs,n(t(o).errors.gender),1)):_("",!0)]),t(V)=="create"?(l(),i("button",{key:0,class:"btn btn-primary",onClick:a[12]||(a[12]=(...e)=>t(v)&&t(v)(...e)),disabled:t(o).processing||t(o).hasErrors},[t(o).processing?(l(),i("span",Ys)):_("",!0),c(" Save ")],8,Ws)):_("",!0),t(V)=="update"?(l(),i("button",{key:1,class:"btn btn-primary",onClick:a[13]||(a[13]=(...e)=>t(h)&&t(h)(...e)),disabled:t(o).processing||t(o).hasErrors},[t(o).processing?(l(),i("span",st)):_("",!0),c(" Save changes ")],8,Zs)):_("",!0)])])])]),s("div",tt,[s("div",et,[s("div",ot,[s("div",at,[nt,s("div",lt,[s("select",{class:"form-select",value:t(u).perPage,onInput:a[14]||(a[14]=e=>t(p)("perPage",e.target.value))},[(l(),i(w,null,F([5,10,25,50,100],e=>s("option",{value:String(e),key:e},n(e),9,rt)),64))],40,it)]),dt])]),s("div",ct,[s("div",_t,[s("div",mt,[s("div",ut,[pt,s("input",{type:"search",placeholder:"Search",class:"form-control",value:t(u).query,onInput:a[15]||(a[15]=e=>t(p)("query",e.target.value))},null,40,vt)])])])])])]),s("div",ht,[s("table",ft,[s("thead",bt,[s("tr",null,[f(T,{style:{"min-width":"200px",width:"90%"},onClick:a[16]||(a[16]=e=>t(p)("sort","name")),serverQuery:t(u),serverQueryKey:"name"},{default:N(()=>[c(" Name ")]),_:1},8,["serverQuery"]),gt])]),s("tbody",yt,[t(d).data.length<=0?(l(),i("tr",xt,$t)):_("",!0),(l(!0),i(w,null,F(t(d).data,e=>(l(),i("tr",{key:e},[s("td",null,n(e.first_name)+" "+n(e.last_name),1),s("td",null,[s("div",wt,[s("a",{class:"btn btn-icon btn-label-info waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-info","data-bs-original-title":"View",onClick:U=>t(L)(e),href:"javascript:void(0);"},Pt,8,Ct),s("a",{class:"btn btn-icon btn-label-primary waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-primary","data-bs-original-title":"Edit",onClick:U=>t(L)(e),href:"javascript:void(0);"},jt,8,Vt),s("a",{class:"btn btn-icon btn-label-danger waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-danger","data-bs-original-title":"Delete",id:"confirm-text",href:"javascript:void(0);",onClick:U=>t(y)(e.id)},It,8,St)])])]))),128))])])]),t(d)&&t(d).meta.links?(l(),i("div",Lt,[s("div",Ut,[s("div",At,[s("div",Bt," Showing "+n(t(d).meta.from)+" to "+n(t(d).meta.to)+" of "+n(t(d).meta.total)+" entries ",1)]),s("div",qt,[s("nav",Qt,[s("ul",Tt,[(l(!0),i(w,null,F(t(d).meta.links,e=>(l(),i("li",{class:"page-item",key:e},[(l(),G(M(e.url?"inertia-link":"button"),{class:m(["page-link",{active:e.active}]),href:e.url,only:["data","params"]},{default:N(()=>[s("span",{innerHTML:e.label},null,8,Ot)]),_:2},1032,["class","href"]))]))),128))])])])])])):_("",!0)])}}});export{Wt as default};
