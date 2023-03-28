import{J as F,o as n,c as r,a as e,u as t,t as i,e as d,d as C,v as x,n as m,g as u,F as p,i as h,b as S,w as f,r as I,h as L,j as P}from"./app-bfc8f00e.js";import{u as V}from"./Crud-754da471.js";import{A as $}from"./AdminLayout-e0f18609.js";import"./lodash-51410e5b.js";import"./toastr-f9f5a555.js";const A={class:"card card-action"},T={class:"card-header"},B=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"SESSIONS")],-1),M={class:"card-action-element"},O={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},U={class:"offcanvas-header"},q={id:"offCanvasFormLabel",class:"offcanvas-title"},z={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},H={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},K={class:"form-group mb-3"},J=e("label",{for:""},"Service Name",-1),D={class:"invalid-feedback"},G={class:"form-group mb-3"},R=e("label",{for:""},"Code",-1),W={class:"invalid-feedback"},X=["disabled"],Y={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Z=["disabled"],ee={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},te={class:"card-body"},se={class:"row justify-content-between"},oe={class:"col-auto"},ae={class:"d-flex align-items-center gap-2"},ne=e("div",{class:"w-auto"},"Show",-1),re={class:"flex-1"},ie=["value"],le=["value"],de=e("div",{class:"w-auto"},"entries",-1),ce={class:"col-auto"},_e={class:"d-flex gap-2 align-items-center"},ue=e("div",{class:"w-auto"},"Search:",-1),ve={class:"flex-1"},me=["value"],pe={class:"table-responsive text-nowrap"},he={class:"table"},fe={class:"table-light"},be=e("th",null,"Embed Code",-1),ye=e("th",null,"Actions",-1),ge={class:"table-border-bottom-0"},ke={key:0},Ce=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),xe=[Ce],Se={style:{width:"60%"}},we=e("td",{class:""},[e("a",{href:"#"},[e("i",{class:"fa-regular fa-copy ms-4",style:{"font-size":"22px"}})])],-1),Ne={class:"d-flex gap-2"},Ee=["onClick"],Qe=e("i",{class:"ti ti-pencil"},null,-1),je=[Qe],Fe=["onClick"],Ie=e("i",{class:"ti ti-trash"},null,-1),Le=[Ie],Pe={key:0,class:"card-footer py-3 border-top"},Ve={class:"row justify-content-between"},$e={class:"col-auto"},Ae={class:"table_info"},Te={class:"col-auto"},Be={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Me={class:"pagination mb-0"},Oe=["innerHTML"],Ue={layout:$},Re=Object.assign(Ue,{__name:"Index",setup(qe){F();const w={name:null,code:null},N="settings.services";let{paginatedData:l,form:a,createPromise:b,updatePromise:y,deletePromise:E,handleCreate:g,serverQuery:c,handleServerQuery:_,handleEdit:Q,formState:v}=V(w,N);return(ze,o)=>{const k=I("table-header");return n(),r("div",A,[e("div",T,[B,e("div",M,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...s)=>t(g)&&t(g)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Service "),e("div",O,[e("div",U,[e("h5",q,i(t(v)=="create"?"Add":"Update")+" Service ",1),t(a).processing?d("",!0):(n(),r("button",z))]),e("div",H,[e("div",K,[J,C(e("input",{type:"text",class:m(["form-control",{"is-invalid":t(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=s=>t(a).name=s),onInput:o[2]||(o[2]=s=>t(a).clearErrors("name")),placeholder:"Enter name"},null,34),[[x,t(a).name]]),e("div",D,i(t(a).errors.name),1)]),e("div",G,[R,C(e("input",{type:"text",class:m(["form-control",{"is-invalid":t(a).errors.code}]),placeholder:"Enter code","onUpdate:modelValue":o[3]||(o[3]=s=>t(a).code=s),onInput:o[4]||(o[4]=s=>t(a).clearErrors("code"))},null,34),[[x,t(a).code]]),e("div",W,i(t(a).errors.code),1)]),t(v)=="create"?(n(),r("button",{key:0,class:"btn btn-primary",onClick:o[5]||(o[5]=(...s)=>t(b)&&t(b)(...s)),disabled:t(a).processing},[t(a).processing?(n(),r("span",Y)):d("",!0),u(" Save ")],8,X)):d("",!0),t(v)=="update"?(n(),r("button",{key:1,class:"btn btn-primary",onClick:o[6]||(o[6]=(...s)=>t(y)&&t(y)(...s)),disabled:t(a).processing},[t(a).processing?(n(),r("span",ee)):d("",!0),u(" Save changes ")],8,Z)):d("",!0)])])])]),e("div",te,[e("div",se,[e("div",oe,[e("div",ae,[ne,e("div",re,[e("select",{class:"form-select",value:t(c).perPage,onInput:o[7]||(o[7]=s=>t(_)("perPage",s.target.value))},[(n(),r(p,null,h([5,10,25,50,100],s=>e("option",{value:String(s),key:s},i(s),9,le)),64))],40,ie)]),de])]),e("div",ce,[e("div",_e,[ue,e("div",ve,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(c).query,onInput:o[8]||(o[8]=s=>t(_)("query",s.target.value))},null,40,me)])])])])]),e("div",pe,[e("table",he,[e("thead",fe,[e("tr",null,[S(k,{onClick:o[9]||(o[9]=s=>t(_)("sort","name")),serverQuery:t(c),serverQueryKey:"name"},{default:f(()=>[u(" Service Name ")]),_:1},8,["serverQuery"]),S(k,{onClick:o[10]||(o[10]=s=>t(_)("sort","code")),serverQuery:t(c),serverQueryKey:"code"},{default:f(()=>[u(" Code ")]),_:1},8,["serverQuery"]),be,ye])]),e("tbody",ge,[t(l).data.length<=0?(n(),r("tr",ke,xe)):d("",!0),(n(!0),r(p,null,h(t(l).data,s=>(n(),r("tr",{key:s},[e("td",Se,i(s.name),1),e("td",null,i(s.code),1),we,e("td",null,[e("div",Ne,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:j=>t(Q)(s),href:"javascript:void(0);"},je,8,Ee),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:j=>t(E)(s.id)},Le,8,Fe)])])]))),128))])])]),t(l)&&t(l).meta.links?(n(),r("div",Pe,[e("div",Ve,[e("div",$e,[e("div",Ae," Showing "+i(t(l).meta.from)+" to "+i(t(l).meta.to)+" of "+i(t(l).meta.total)+" entries ",1)]),e("div",Te,[e("nav",Be,[e("ul",Me,[(n(!0),r(p,null,h(t(l).meta.links,s=>(n(),r("li",{class:"page-item",key:s},[(n(),L(P(s.url?"inertia-link":"button"),{class:m(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:f(()=>[e("span",{innerHTML:s.label},null,8,Oe)]),_:2},1032,["class","href"]))]))),128))])])])])])):d("",!0)])}}});export{Re as default};
