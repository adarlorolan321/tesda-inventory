import{o as n,c as l,b as m,u as e,a as t,t as r,e as _,d as p,v as b,n as v,f as $,g as u,F as y,i as k,w as f,r as I,X as F,j as P,k as L}from"./app-e65dc1cf.js";import{u as U}from"./Crud-17596d65.js";import{A as j}from"./AdminLayout-f29ff8de.js";import"./lodash-02e8c810.js";const A={class:"card card-action"},K={class:"card-header"},T=t("div",{class:"card-action-title align-items-center"},[t("h5",{class:"card-title"},"VENUES")],-1),B={class:"card-action-element"},M={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},q={class:"offcanvas-header"},z={id:"offCanvasFormLabel",class:"offcanvas-title"},H={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},O={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},X={class:"form-group mb-3"},G=t("label",{for:""},"Venue Name",-1),J={class:"invalid-feedback"},R={class:"form-group mb-3"},W=t("label",{for:""},"Contact First Name",-1),Y={class:"invalid-feedback"},Z={class:"form-group mb-3"},D=t("label",{for:""},"Contact Last Name",-1),tt={class:"invalid-feedback"},et={class:"form-group mb-3"},st=t("label",{for:""},"Contact Email",-1),ot={class:"invalid-feedback"},at={class:"form-group mb-3"},nt=t("label",{for:""},"Contact Phone",-1),lt={class:"invalid-feedback"},rt={class:"form-group mb-5"},it=t("div",{class:""},"Status",-1),ct={class:"switch"},dt=["checked"],_t=t("span",{class:"switch-toggle-slider"},[t("span",{class:"switch-on"}),t("span",{class:"switch-off"})],-1),ut={key:0,class:"switch-label"},mt={key:1,class:"switch-label"},pt=["disabled"],vt={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ft=["disabled"],ht={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},bt={class:"card-body"},yt={class:"row justify-content-between"},gt={class:"col-auto"},kt={class:"d-flex align-items-center gap-2"},Ct=t("div",{class:"w-auto"},"Show",-1),xt={class:"flex-1"},wt=["value"],Et=["value"],Qt=t("div",{class:"w-auto"},"entries",-1),Vt={class:"col-auto"},Nt={class:"d-flex gap-2 align-items-center"},St=t("div",{class:"w-auto"},"Search:",-1),$t={class:"flex-1"},It=["value"],Ft={class:"table-responsive text-nowrap"},Pt={class:"table"},Lt={class:"table-light"},Ut=t("th",null,"Embed Code",-1),jt=t("th",{style:{width:"100px"}},"Actions",-1),At={class:"table-border-bottom-0"},Kt={key:0},Tt=t("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Bt=[Tt],Mt=t("td",{class:""},[t("a",{href:"#"},[t("i",{class:"fa-regular fa-copy ms-4",style:{"font-size":"22px"}})])],-1),qt={key:0,class:"badge bg-label-success"},zt={key:1,class:"badge bg-label-danger"},Ht={class:"d-flex gap-2"},Ot=["onClick"],Xt=t("i",{class:"ti ti-pencil","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-info",title:"Edit"},null,-1),Gt=[Xt],Jt=["onClick"],Rt=t("i",{class:"ti ti-trash","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-danger",title:"Delete"},null,-1),Wt=[Rt],Yt={key:0,class:"card-footer py-3 border-top"},Zt={class:"row justify-content-between"},Dt={class:"col-auto"},te={class:"table_info"},ee={class:"col-auto"},se={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},oe={class:"pagination mb-0"},ae=["innerHTML"],ne={layout:j},ue=Object.assign(ne,{__name:"Index",setup(le){const E={name:null,contact_first_name:null,contact_last_name:null,contact_email:null,contact_phone:null,status:!1},Q="settings.venues";let{paginatedData:i,form:a,createPromise:C,updatePromise:x,deletePromise:V,handleCreate:w,serverQuery:c,handleServerQuery:d,handleEdit:N,formState:g}=U(E,Q);return(re,o)=>{const h=I("table-header");return n(),l(y,null,[m(e(F),{title:"Venues"}),t("div",A,[t("div",K,[T,t("div",B,[t("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...s)=>e(w)&&e(w)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Venue "),t("div",M,[t("div",q,[t("h5",z,r(e(g)=="create"?"Add":"Update")+" Venue ",1),e(a).processing?_("",!0):(n(),l("button",H))]),t("div",O,[t("div",X,[G,p(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=s=>e(a).name=s),onInput:o[2]||(o[2]=s=>e(a).clearErrors("name")),placeholder:"Enter name"},null,34),[[b,e(a).name]]),t("div",J,r(e(a).errors.name),1)]),t("div",R,[W,p(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.contact_first_name}]),placeholder:"Enter Contact First Name","onUpdate:modelValue":o[3]||(o[3]=s=>e(a).contact_first_name=s),onInput:o[4]||(o[4]=s=>e(a).clearErrors("contact_first_name"))},null,34),[[b,e(a).contact_first_name]]),t("div",Y,r(e(a).errors.contact_first_name),1)]),t("div",Z,[D,p(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.contact_last_name}]),placeholder:"Enter Contact Last Name","onUpdate:modelValue":o[5]||(o[5]=s=>e(a).contact_last_name=s),onInput:o[6]||(o[6]=s=>e(a).clearErrors("contact_last_name"))},null,34),[[b,e(a).contact_last_name]]),t("div",tt,r(e(a).errors.contact_last_name),1)]),t("div",et,[st,p(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.contact_email}]),placeholder:"Enter Contact Email","onUpdate:modelValue":o[7]||(o[7]=s=>e(a).contact_email=s),onInput:o[8]||(o[8]=s=>e(a).clearErrors("contact_email"))},null,34),[[b,e(a).contact_email]]),t("div",ot,r(e(a).errors.contact_email),1)]),t("div",at,[nt,p(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.contact_phone}]),placeholder:"Enter Contact Phone","onUpdate:modelValue":o[9]||(o[9]=s=>e(a).contact_phone=s),onInput:o[10]||(o[10]=s=>e(a).clearErrors("contact_phone"))},null,34),[[b,e(a).contact_phone]]),t("div",lt,r(e(a).errors.contact_phone),1)]),t("div",rt,[it,t("label",ct,[p(t("input",{type:"checkbox","onUpdate:modelValue":o[11]||(o[11]=s=>e(a).status=s),checked:e(a).status,class:"switch-input"},null,8,dt),[[$,e(a).status]]),_t,e(a).status==1?(n(),l("span",ut,"Active")):(n(),l("span",mt,"In-active"))])]),e(g)=="create"?(n(),l("button",{key:0,class:"btn btn-primary",onClick:o[12]||(o[12]=(...s)=>e(C)&&e(C)(...s)),disabled:e(a).processing},[e(a).processing?(n(),l("span",vt)):_("",!0),u(" Save ")],8,pt)):_("",!0),e(g)=="update"?(n(),l("button",{key:1,class:"btn btn-primary",onClick:o[13]||(o[13]=(...s)=>e(x)&&e(x)(...s)),disabled:e(a).processing},[e(a).processing?(n(),l("span",ht)):_("",!0),u(" Save changes ")],8,ft)):_("",!0)])])])]),t("div",bt,[t("div",yt,[t("div",gt,[t("div",kt,[Ct,t("div",xt,[t("select",{class:"form-select",value:e(c).perPage,onInput:o[14]||(o[14]=s=>e(d)("perPage",s.target.value))},[(n(),l(y,null,k([5,10,25,50,100],s=>t("option",{value:String(s),key:s},r(s),9,Et)),64))],40,wt)]),Qt])]),t("div",Vt,[t("div",Nt,[St,t("div",$t,[t("input",{type:"search",placeholder:"Search",class:"form-control",value:e(c).query,onInput:o[15]||(o[15]=s=>e(d)("query",s.target.value))},null,40,It)])])])])]),t("div",Ft,[t("table",Pt,[t("thead",Lt,[t("tr",null,[m(h,{onClick:o[16]||(o[16]=s=>e(d)("sort","name")),serverQuery:e(c),serverQueryKey:"name"},{default:f(()=>[u(" Venue Name ")]),_:1},8,["serverQuery"]),m(h,{onClick:o[17]||(o[17]=s=>e(d)("sort","contact_first_name")),serverQuery:e(c),serverQueryKey:"contact_first_name"},{default:f(()=>[u(" Contact Name ")]),_:1},8,["serverQuery"]),m(h,{onClick:o[18]||(o[18]=s=>e(d)("sort","contact_phone")),serverQuery:e(c),serverQueryKey:"contact_phone"},{default:f(()=>[u(" Phone Number ")]),_:1},8,["serverQuery"]),m(h,{onClick:o[19]||(o[19]=s=>e(d)("sort","contact_email")),serverQuery:e(c),serverQueryKey:"contact_email"},{default:f(()=>[u(" Email ")]),_:1},8,["serverQuery"]),Ut,m(h,{onClick:o[20]||(o[20]=s=>e(d)("sort","status")),serverQuery:e(c),serverQueryKey:"status"},{default:f(()=>[u(" Status ")]),_:1},8,["serverQuery"]),jt])]),t("tbody",At,[e(i).data.length<=0?(n(),l("tr",Kt,Bt)):_("",!0),(n(!0),l(y,null,k(e(i).data,s=>(n(),l("tr",{key:s},[t("td",null,r(s.name),1),t("td",null,r(s.contact_first_name)+" "+r(s.contact_last_name),1),t("td",null,r(s.contact_phone),1),t("td",null,r(s.contact_email),1),Mt,t("td",null,[s.status==1?(n(),l("span",qt,"Active")):(n(),l("span",zt,"In-active"))]),t("td",null,[t("div",Ht,[t("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:S=>e(N)(s),href:"javascript:void(0);"},Gt,8,Ot),t("a",{class:"btn btn-icon btn-label-danger waves-effect",id:"confirm-text",href:"javascript:void(0);",onClick:S=>e(V)(s.id)},Wt,8,Jt)])])]))),128))])])]),e(i)&&e(i).meta.links?(n(),l("div",Yt,[t("div",Zt,[t("div",Dt,[t("div",te," Showing "+r(e(i).meta.from)+" to "+r(e(i).meta.to)+" of "+r(e(i).meta.total)+" entries ",1)]),t("div",ee,[t("nav",se,[t("ul",oe,[(n(!0),l(y,null,k(e(i).meta.links,s=>(n(),l("li",{class:"page-item",key:s},[(n(),P(L(s.url?"inertia-link":"button"),{class:v(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:f(()=>[t("span",{innerHTML:s.label},null,8,ae)]),_:2},1032,["class","href"]))]))),128))])])])])])):_("",!0)])],64)}}});export{ue as default};
