import{o as n,c as l,a as t,u as e,t as r,d as _,w as m,v as h,n as v,j as $,e as u,F as g,f as k,b,g as p,r as I,h as F,i as P}from"./app-972ca02d.js";import{u as L}from"./Crud-da9d86e2.js";import{A as U}from"./AdminLayout-c9139d85.js";import"./lodash-b950a532.js";const j={class:"card card-action"},A={class:"card-header"},K=t("div",{class:"card-action-title align-items-center"},[t("h5",{class:"card-title"},"VENUES")],-1),T={class:"card-action-element"},B={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},M={class:"offcanvas-header"},q={id:"offCanvasFormLabel",class:"offcanvas-title"},z={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},H={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},O={class:"form-group mb-3"},G=t("label",{for:""},"Venue Name",-1),J={class:"invalid-feedback"},R={class:"form-group mb-3"},W=t("label",{for:""},"Contact First Name",-1),X={class:"invalid-feedback"},Y={class:"form-group mb-3"},Z=t("label",{for:""},"Contact Last Name",-1),D={class:"invalid-feedback"},tt={class:"form-group mb-3"},et=t("label",{for:""},"Contact Email",-1),st={class:"invalid-feedback"},ot={class:"form-group mb-3"},at=t("label",{for:""},"Contact Phone",-1),nt={class:"invalid-feedback"},lt={class:"form-group mb-5"},rt=t("div",{class:""},"Status",-1),it={class:"switch"},ct=["checked"],dt=t("span",{class:"switch-toggle-slider"},[t("span",{class:"switch-on"}),t("span",{class:"switch-off"})],-1),_t={key:0,class:"switch-label"},ut={key:1,class:"switch-label"},mt=["disabled"],vt={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},pt=["disabled"],ft={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ht={class:"card-body"},bt={class:"row justify-content-between"},yt={class:"col-auto"},gt={class:"d-flex align-items-center gap-2"},kt=t("div",{class:"w-auto"},"Show",-1),Ct={class:"flex-1"},xt=["value"],wt=["value"],Et=t("div",{class:"w-auto"},"entries",-1),Qt={class:"col-auto"},Nt={class:"d-flex gap-2 align-items-center"},Vt=t("div",{class:"w-auto"},"Search:",-1),St={class:"flex-1"},$t=["value"],It={class:"table-responsive text-nowrap"},Ft={class:"table"},Pt={class:"table-light"},Lt=t("th",null,"Embed Code",-1),Ut=t("th",null,"Actions",-1),jt={class:"table-border-bottom-0"},At={key:0},Kt=t("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Tt=[Kt],Bt=t("td",{class:""},[t("a",{href:"#"},[t("i",{class:"fa-regular fa-copy ms-4",style:{"font-size":"22px"}})])],-1),Mt={key:0,class:"badge bg-label-success"},qt={key:1,class:"badge bg-label-danger"},zt={class:"d-flex gap-2"},Ht=["onClick"],Ot=t("i",{class:"ti ti-pencil"},null,-1),Gt=[Ot],Jt=["onClick"],Rt=t("i",{class:"ti ti-trash"},null,-1),Wt=[Rt],Xt={key:0,class:"card-footer py-3 border-top"},Yt={class:"row justify-content-between"},Zt={class:"col-auto"},Dt={class:"table_info"},te={class:"col-auto"},ee={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},se={class:"pagination mb-0"},oe=["innerHTML"],ae={layout:U},_e=Object.assign(ae,{__name:"Index",setup(ne){const E={name:null,contact_first_name:null,contact_last_name:null,contact_email:null,contact_phone:null,status:!1},Q="settings.venues";let{paginatedData:i,form:a,createPromise:C,updatePromise:x,deletePromise:N,handleCreate:w,serverQuery:c,handleServerQuery:d,handleEdit:V,formState:y}=L(E,Q);return(le,o)=>{const f=I("table-header");return n(),l("div",j,[t("div",A,[K,t("div",T,[t("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...s)=>e(w)&&e(w)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Venue "),t("div",B,[t("div",M,[t("h5",q,r(e(y)=="create"?"Add":"Update")+" Venue ",1),e(a).processing?_("",!0):(n(),l("button",z))]),t("div",H,[t("div",O,[G,m(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=s=>e(a).name=s),onInput:o[2]||(o[2]=s=>e(a).clearErrors("name")),placeholder:"Enter name"},null,34),[[h,e(a).name]]),t("div",J,r(e(a).errors.name),1)]),t("div",R,[W,m(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.contact_first_name}]),placeholder:"Enter Contact First Name","onUpdate:modelValue":o[3]||(o[3]=s=>e(a).contact_first_name=s),onInput:o[4]||(o[4]=s=>e(a).clearErrors("contact_first_name"))},null,34),[[h,e(a).contact_first_name]]),t("div",X,r(e(a).errors.contact_first_name),1)]),t("div",Y,[Z,m(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.contact_last_name}]),placeholder:"Enter Contact Last Name","onUpdate:modelValue":o[5]||(o[5]=s=>e(a).contact_last_name=s),onInput:o[6]||(o[6]=s=>e(a).clearErrors("contact_last_name"))},null,34),[[h,e(a).contact_last_name]]),t("div",D,r(e(a).errors.contact_last_name),1)]),t("div",tt,[et,m(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.contact_email}]),placeholder:"Enter Contact Email","onUpdate:modelValue":o[7]||(o[7]=s=>e(a).contact_email=s),onInput:o[8]||(o[8]=s=>e(a).clearErrors("contact_email"))},null,34),[[h,e(a).contact_email]]),t("div",st,r(e(a).errors.contact_email),1)]),t("div",ot,[at,m(t("input",{type:"text",class:v(["form-control",{"is-invalid":e(a).errors.contact_phone}]),placeholder:"Enter Contact Phone","onUpdate:modelValue":o[9]||(o[9]=s=>e(a).contact_phone=s),onInput:o[10]||(o[10]=s=>e(a).clearErrors("contact_phone"))},null,34),[[h,e(a).contact_phone]]),t("div",nt,r(e(a).errors.contact_phone),1)]),t("div",lt,[rt,t("label",it,[m(t("input",{type:"checkbox","onUpdate:modelValue":o[11]||(o[11]=s=>e(a).status=s),checked:e(a).status,class:"switch-input"},null,8,ct),[[$,e(a).status]]),dt,e(a).status==1?(n(),l("span",_t,"Active")):(n(),l("span",ut,"In-active"))])]),e(y)=="create"?(n(),l("button",{key:0,class:"btn btn-primary",onClick:o[12]||(o[12]=(...s)=>e(C)&&e(C)(...s)),disabled:e(a).processing},[e(a).processing?(n(),l("span",vt)):_("",!0),u(" Save ")],8,mt)):_("",!0),e(y)=="update"?(n(),l("button",{key:1,class:"btn btn-primary",onClick:o[13]||(o[13]=(...s)=>e(x)&&e(x)(...s)),disabled:e(a).processing},[e(a).processing?(n(),l("span",ft)):_("",!0),u(" Save changes ")],8,pt)):_("",!0)])])])]),t("div",ht,[t("div",bt,[t("div",yt,[t("div",gt,[kt,t("div",Ct,[t("select",{class:"form-select",value:e(c).perPage,onInput:o[14]||(o[14]=s=>e(d)("perPage",s.target.value))},[(n(),l(g,null,k([5,10,25,50,100],s=>t("option",{value:String(s),key:s},r(s),9,wt)),64))],40,xt)]),Et])]),t("div",Qt,[t("div",Nt,[Vt,t("div",St,[t("input",{type:"search",placeholder:"Search",class:"form-control",value:e(c).query,onInput:o[15]||(o[15]=s=>e(d)("query",s.target.value))},null,40,$t)])])])])]),t("div",It,[t("table",Ft,[t("thead",Pt,[t("tr",null,[b(f,{onClick:o[16]||(o[16]=s=>e(d)("sort","name")),serverQuery:e(c),serverQueryKey:"name"},{default:p(()=>[u(" Venue Name ")]),_:1},8,["serverQuery"]),b(f,{onClick:o[17]||(o[17]=s=>e(d)("sort","contact_first_name")),serverQuery:e(c),serverQueryKey:"contact_first_name"},{default:p(()=>[u(" Contact Name ")]),_:1},8,["serverQuery"]),b(f,{onClick:o[18]||(o[18]=s=>e(d)("sort","contact_phone")),serverQuery:e(c),serverQueryKey:"contact_phone"},{default:p(()=>[u(" Phone Number ")]),_:1},8,["serverQuery"]),b(f,{onClick:o[19]||(o[19]=s=>e(d)("sort","contact_email")),serverQuery:e(c),serverQueryKey:"contact_email"},{default:p(()=>[u(" Email ")]),_:1},8,["serverQuery"]),Lt,b(f,{onClick:o[20]||(o[20]=s=>e(d)("sort","status")),serverQuery:e(c),serverQueryKey:"status"},{default:p(()=>[u(" Status ")]),_:1},8,["serverQuery"]),Ut])]),t("tbody",jt,[e(i).data.length<=0?(n(),l("tr",At,Tt)):_("",!0),(n(!0),l(g,null,k(e(i).data,s=>(n(),l("tr",{key:s},[t("td",null,r(s.name),1),t("td",null,r(s.contact_first_name)+" "+r(s.contact_last_name),1),t("td",null,r(s.contact_phone),1),t("td",null,r(s.contact_email),1),Bt,t("td",null,[s.status==1?(n(),l("span",Mt,"Active")):(n(),l("span",qt,"In-active"))]),t("td",null,[t("div",zt,[t("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:S=>e(V)(s),href:"javascript:void(0);"},Gt,8,Ht),t("a",{class:"btn btn-icon btn-label-danger waves-effect",id:"confirm-text",href:"javascript:void(0);",onClick:S=>e(N)(s.id)},Wt,8,Jt)])])]))),128))])])]),e(i)&&e(i).meta.links?(n(),l("div",Xt,[t("div",Yt,[t("div",Zt,[t("div",Dt," Showing "+r(e(i).meta.from)+" to "+r(e(i).meta.to)+" of "+r(e(i).meta.total)+" entries ",1)]),t("div",te,[t("nav",ee,[t("ul",se,[(n(!0),l(g,null,k(e(i).meta.links,s=>(n(),l("li",{class:"page-item",key:s},[(n(),F(P(s.url?"inertia-link":"button"),{class:v(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:p(()=>[t("span",{innerHTML:s.label},null,8,oe)]),_:2},1032,["class","href"]))]))),128))])])])])])):_("",!0)])}}});export{_e as default};
